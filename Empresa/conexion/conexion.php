<?php
$servidor = "mysql:dbname=empresa;host=127.0.0.1";
$usuario = "root";
$password = "";

try {
    $pdo = new PDO($servidor, $usuario, $password);
    echo "Conectado :D";
}

catch(PDOException $e) {
    echo "Conexion malvada muejeje >:) " .$e->getMessage(); 
}

?>