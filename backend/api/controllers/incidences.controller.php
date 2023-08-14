<?php



class IncidencesController
{
  private $db;
  public $response;


  function __construct()
  {
    if (!class_exists('Conexion')) require_once "../../config/Conexion.php";
    $this->db = Conexion::connect();
    $this->response = array();
  }


  public function getIncidences()
  {
    $sql = "SELECT id as id, title as title, first_message as firstMessage, upload_time as uploadItme, last_interaction_time as lastInteraction, type as type, state as state FROM incidences WHERE active = 1";

    $result = $this->db->query($sql);

    $this->response = $result->fetchAll(PDO::FETCH_OBJ);
  }
}
