<?php
/**
 * Created by PhpStorm.
 * User: Florian
 * Date: 12.09.2017
 * time112: 13:12
 */

error_reporting(E_ALL);

//echo "<h2>TCP/IP Verbindung</h2>\n";

//var_dump($_POST);

$done = false;

$step = 0;

/* Erhalte Port für den WWW Service. */
$service_port = 4308;

/* Erhalte die IP Adresse des Ziel Hosts. */
$address = gethostbyname('localhost');

while($done == false) {

    /* Erzeuge ein TCP/IP Socket. */
    $socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
    if ($socket === false) {
        echo "socket_create() schlug fehl: Grund: " . socket_strerror(socket_last_error()) . "\n";
    } else {
        //echo "OK.\n";
    }

//echo "Versuche Verbing zu '$address' auf Port '$service_port' aufzubauen...";
    $result = socket_connect($socket, $address, $service_port);
    if ($result === false) {
        echo "socket_connect() schulg fehl.\nGrund: ($result) " . socket_strerror(socket_last_error($socket)) . "\n";
    } else {
        //echo "OK.\n";
    }

//echo ;
    $in="";
    if ($step == 0) {
        $in = $_POST['request'] . "\r\n";
        $step = $step + 1;
    }else{
        $in = $key . "\r\n";
    }
    $out = '';

//echo "Sende HTTP HEAD Request...";
    socket_write($socket, $in, strlen($in));
//echo "OK.\n";

//echo "Lese Response:\n\n";
    $buf = 'Dies ist mein Puffer.';
    if (false !== ($bytes = socket_recv($socket, $buf, 16384000, MSG_WAITALL))) {
        //echo "Las $bytes bytes von socket_recv(). Schliesse Socket...";
    } else {
        echo "socket_recv() schlug fehl; Grund: " . socket_strerror(socket_last_error($socket)) . "\n";
    }
    socket_close($socket);

    $key = substr($buf, 0, 10);
    $message = substr($buf, 10);

    if ($key == "000000000") {
        $done = true;
    }

    echo $message . "\n";
//echo "OK.\n\n";

}

?>