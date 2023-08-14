<?php


function isRequest(string $method): bool
{
  $methodUpperCase = strtoupper($method);


  if ($_SERVER['REQUEST_METHOD'] === $method) return true;

  if ($methodUpperCase !== "GET" && $methodUpperCase !== "POST" && $methodUpperCase !== "PUT" && $methodUpperCase !== "DELETE")
    RequestError::isntMethod(new Exception(), $methodUpperCase);

  return false;
}
