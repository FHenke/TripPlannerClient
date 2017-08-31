<?php
/**
 * Created by PhpStorm.
 * User: Florian
 * Date: 25.08.2017
 * Time: 13:32
 */
$address = 'localhost';
$port = 4308;

$socket = socket_create(AF_INET, SOCK_STREAM, getprotobyname('tcp'));
socket_connect($socket, $address, $port);

$message = 'Apple\n';
$len = strlen($message);

$status = socket_sendto($socket, $message, $len, 0, $address, $port);

// --bis hierhin funktioniert es scheinbar gut, danach funnktioniert entweder das Senden im java oder das empfangen hier nicht

socket_listen($socket, 5);
$client = socket_accept($socket);
$input = socket_read($client, 1024, PHP_NORMAL_READ);

//gibt beides NULL aus, was eigentlich komisch ist, da socket_read() eigentlich immer den antwortstring, "" oder FAIL zurück liefert
var_dump($input);
var_dump( socket_last_error($client));

socket_close($client);
socket_close($socket);
?>