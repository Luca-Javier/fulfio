<?php

if (!class_exists('ChatController'))
  require_once "../controllers/chat.controller.php";

if (!function_exists("isRequest"))
  require_once "../../utils/isRequest.php";


$chat = new ChatController();

if (isRequest("GET")) {
  $id = (int) $_GET["id"];
  $chat->getMessages($id);
}

$response = $chat->response;

echo json_encode($response);
