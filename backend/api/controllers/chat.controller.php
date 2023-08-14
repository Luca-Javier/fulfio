<?php

class ChatController
{
  private $db;
  public $response;

  function __construct()
  {
    if (!class_exists('Conexion')) require_once "../../config/Conexion.php";
    $this->db = Conexion::connect();
    $this->response = array();
  }


  public function getMessages(int $id)
  {
    $sql = "SELECT m.user_id as userId, m.message as message, u.name as name FROM messages as m INNER JOIN users as u ON m.user_id = u.id WHERE m.incidence_id = :id AND m.active = 1 ORDER BY m.upload_time;";

    $query = $this->db->prepare($sql);

    $query->bindParam(":id", $id, PDO::PARAM_INT);

    $query->execute();

    if ($query)
      $this->response = $query->fetchAll(PDO::FETCH_ASSOC);

    else $this->response = array("error" => "Error al obtener los mensajes. Id: " . $id);
  }
}
