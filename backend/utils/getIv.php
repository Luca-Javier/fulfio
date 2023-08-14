<?php

function getIv()
{
  if (!defined("IVL")) require_once "../config/constants.php";
  $iv = hash("sha256", openssl_random_pseudo_bytes(IVL));
  return substr($iv, 0, IVL);
}
