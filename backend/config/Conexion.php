

<?php

class Conexion
{


  static function connect(): PDO
  {
    $conexion = new PDO("mysql:host=localhost;dbname=fulfio;charset=utf8", "root", "");

    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS, PUT");
    header("Access-Control-Allow-Headers: Content-Type");

    return $conexion;
  }
}
