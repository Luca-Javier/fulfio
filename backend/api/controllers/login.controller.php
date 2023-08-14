<?php



class LoginController
{
  private $db;
  public $response;


  function __construct()
  {
    if (!class_exists('Conexion')) require_once "../../config/Conexion.php";
    if (!defined("METHOD")) require_once "../../config/constants.php";
    $this->db = Conexion::connect();
    $this->response = array();
  }

  function createUser(array $data)
  {
    $sql = "INSERT INTO users (name, email, password, iv) VALUES (:name, :email, :password,:iv)";

    if (!function_exists("getIv")) require_once "../../utils/getIv.php";

    $iv = getIv();


    $encryptedPassword = openssl_encrypt($data["password"], METHOD, KEY, 0, $iv);

    $stmt = $this->db->prepare($sql);
    $stmt->bindParam(":name", $data["name"], PDO::PARAM_STR);
    $stmt->bindParam(":email", $data["email"], PDO::PARAM_STR);
    $stmt->bindParam(":password", $encryptedPassword, PDO::PARAM_STR);
    $stmt->bindParam(":iv", $iv, PDO::PARAM_STR);



    $stmt->execute();

    if ($stmt->rowCount() > 0)
      $this->response = ["ok" => 200];

    else $this->response = ["ok" => 400];
  }

  function getUser(array $data)
  {
    $sql = "SELECT * FROM users WHERE email = :email AND active = 1";

    $stmt = $this->db->prepare($sql);

    $stmt->bindParam(":email", $data["email"], PDO::PARAM_STR);

    $stmt->execute();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
      $decryptedPassword = openssl_decrypt($row["password"], METHOD, KEY, 0, $row["iv"]);

      if ($decryptedPassword === $data["password"]) {
        $isAdmin = $row['is_admin'];

        if ($row['image'] === null && $isAdmin) $row['image'] =
          "assets/admin-user.jpg";

        else $row['image'] = "http://127.0.0.1/fulfio/backend/images/" . $row['image'];

        $this->response = ["ok" => 200, "name" => $row['name'], "id" => $row['id'], "isAdmin" => $isAdmin, 'image' => $row['image'],];
        session_start();

        $_SESSION['userData'] = $this->response;
        return;
      }
    }

    //if (!isset($this->response["ok"]))
    $this->response = ["ok" => 404];
  }

  function checkSession()
  {
    session_start();
    if (isset($_SESSION['userData'])) {
      $this->response = $_SESSION['userData'];
    } else {
      $this->response = ["ok" => 404, "session" => $_SESSION];
    }
  }
}
