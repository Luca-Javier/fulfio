<?php


if (!class_exists('IncidencesController'))
  require_once "../controllers/Incidences.controller.php";

if (!function_exists("isRequest"))
  require_once "../../utils/isRequest.php";


$incidences = new IncidencesController();

if (isRequest("GET"))
  $incidences->getIncidences();

$response = $incidences->response;



echo json_encode($response);
