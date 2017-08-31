<?php
/**
 * Created by PhpStorm.
 * User: Florian
 * Date: 24.08.2017
 * Time: 10:16
 */

echo "start\n";

$address = 'localhost';
$port = 4308;

$mysock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

socket_bind($mysock,$address, $port) or die('Could not bind to address');
socket_listen($mysock, 5);
$client = socket_accept($mysock);

// read 1024 bytes from client
$input = socket_read($client, 1024, PHP_NORMAL_READ);

var_dump($input);

socket_close($client);
socket_close($mysock);

echo "end";

?>