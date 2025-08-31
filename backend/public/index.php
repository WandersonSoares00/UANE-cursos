<?php
require_once dirname(__DIR__) . '/bootstrap.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Obtém o caminho da URL solicitada
$requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

switch ($requestUri) {
    case '/api/cursos':
        require_once dirname(__DIR__) . '/routes/cursos.php';
        break;

    default:
        http_response_code(404);
        echo json_encode(["message" => "Rota não encontrada."]);
        break;
}
