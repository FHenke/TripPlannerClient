<?php
/**
 * Created by PhpStorm.
 * User: Florian
 * Date: 24.08.2017
 * Time: 15:52
 */

echo "start\n";

$address = 'localhost';
$port = 4308;

$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

//Sending
socket_connect($socket, $address, $port);


$message = 'Apple\n';
$len = strlen($message);

$status = socket_sendto($socket, $message, $len, 0, $address, $port);

var_dump($status);


//Receeiving
//socket_bind($socket,$address, $port) or die('Could not bind to address');
socket_listen($socket, 5);
$client = socket_accept($socket);

// read 1024 bytes from client
$input = socket_read($client, 1024, PHP_NORMAL_READ);

var_dump($input);

socket_close($client);
socket_close($socket);

echo "end";

?>