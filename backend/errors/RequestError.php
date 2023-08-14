<?php


class RequestError extends Exception
{

  function __construct(Exception $e, string $message,)
  {
    parent::__construct($message . $this->getErrorInfo($e));
  }

  private function getErrorInfo(Exception $e): string
  {
    if (method_exists($e, 'getLine') && method_exists($e, 'getFile'))
      return "\nLine: {$e->getLine()}\nFile: {$e->getFile()}";

    return "";
  }


  static function isntMethod(Exception $e, string $method,)
  {
    return new self($e, "The method '$method' doesn't exist",);
  }
}
