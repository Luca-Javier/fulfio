<?php


if (!class_exists('IncidencesController'))
  require_once "../controllers/user.controller.php";

if (!function_exists("isRequest"))
  require_once "../../utils/isRequest.php";


$user = new UserController();


if (isRequest("POST") && $_FILES['image'])
  $user->updateImage();



echo json_encode($user->response);
