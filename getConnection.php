<?php
/**
 * Created by PhpStorm.
 * User: Florian
 * Date: 23.08.2017
 * Time: 23:53
 */
echo "start\n";

$address = 'localhost';
$port = 4308;

$socket = socket_create(AF_INET, SOCK_STREAM, getprotobyname('tcp'));
socket_connect($socket, $address, $port);


$message = 'Apple\n';
$len = strlen($message);
echo "test";
$status = socket_sendto($socket, $message, $len, 0, $address, $port);


echo $status;

$reply = socket_read($sock, 10000, PHP_NORMAL_READ);

echo $reply;

/*
if($status !== FALSE)
{

    $message = '';
    $next = '';


    while ($next = socket_read($socket, 4096)) {
            $message .= $next;
        }

        echo $message;
}
else
{
    echo "Failed";
}
*/


echo " ends";
socket_close($socket);


?>