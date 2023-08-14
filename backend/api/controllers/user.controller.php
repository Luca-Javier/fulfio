<?php

class UserController
{
  private $db;
  public $response;

  function __construct()
  {
    if (!class_exists('Conexion')) require_once "../../config/Conexion.php";
    $this->db = Conexion::connect();
    $this->response = array();
  }


  public function updateImage()
  {

    $sql = "UPDATE users SET image = :image WHERE id = :id";

    $stmt = $this->db->prepare($sql);

    $ext = array_reverse(explode(".", $_FILES['image']['name']))[0];

    $filename = uniqid() . ".$ext";

    $stmt->bindParam(":image", $filename);
    $stmt->bindParam(":id", $_POST['id']);

    $stmt->execute();

    if (!($stmt->rowCount() > 0)) {
      $this->response = ["ok" => 400, "error" => "No se pudo actualizar la imagen"];
      return;
    }

    $path = "../../images/";

    move_uploaded_file($_FILES['image']['tmp_name'], $path . $filename);


    $this->response = ["ok" => 200, "files" => $_FILES];
  }
}
