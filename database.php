<?php

define('HOST','Localhost');
define('DB_NAME','P4');
define('USER','root');
define('PASS','');

try{
    $db = new PDO("mysql:host=" . HOST . ";dbname=" . DB_NAME, USER, PASS);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "connection reussie";
} catch(PDOExeption $e){
    echo $e;
}