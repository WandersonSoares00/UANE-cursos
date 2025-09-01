<?php

$db_host = $_ENV['DB_HOST'];
$db_name = $_ENV['DB_DATABASE'];
$db_user = $_ENV['DB_USERNAME'];
$db_pass = $_ENV['DB_PASSWORD'];

$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

if ($conn->connect_error) {
    http_response_code(500);
    exit(json_encode(["message" => "Erro de conexão: " . $conn->connect_error]));
}

$conn->set_charset("utf8mb4");
$conn->query("SET NAMES 'utf8mb4'");
$conn->query("SET CHARACTER SET utf8mb4");
$conn->query("SET SESSION collation_connection = 'utf8mb4_unicode_ci'");

$sql = "SELECT
            c.id, c.nome, c.descricao, c.imagem, c.categoria,
            c.carga_horaria, c.modalidade, a.nome AS area_nome
        FROM
            cursos AS c
        JOIN
            areas AS a ON c.area_id = a.id";

$result = $conn->query($sql);
$cursos = [];
if ($result && $result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $row['carga_horaria'] = (int)$row['carga_horaria'];        
        $cursos[] = $row;
    }
}

$conn->close();

http_response_code(200);
echo json_encode($cursos, JSON_UNESCAPED_UNICODE);
