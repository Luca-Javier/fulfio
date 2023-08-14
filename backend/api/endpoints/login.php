<?php


if (!class_exists('IncidencesController'))
  require_once "../controllers/login.controller.php";

if (!function_exists("isRequest"))
  require_once "../../utils/isRequest.php";


$login = new LoginController();


if (isRequest("POST"))
  $login->createUser($_POST);

if (isRequest("GET") && isset($_GET["email"]))
  $login->getUser($_GET);
else if (isRequest("GET"))
  $login->checkSession();



echo json_encode($login->response);
