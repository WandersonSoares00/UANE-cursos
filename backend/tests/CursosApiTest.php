<?php

namespace Tests;

use PHPUnit\Framework\TestCase;

class CursosApiTest extends TestCase
{
    /**
     * Testa se o endpoint principal da API de cursos responde com sucesso (código 200)
     * e se o corpo da resposta é um JSON válido.
     *
     * @test
     */
    public function courses_api_returns_valid_json()
    {
        $url = 'http://localhost:8000/api/cursos';

        $response = @file_get_contents($url);

        $this->assertNotFalse($response, 'A requisição à API falhou. O serviço está rodando?');

        $statusCode = explode(' ', $http_response_header[0])[1];

        $this->assertEquals('200', $statusCode, 'A API não retornou o código de status 200 OK.');

        $this->assertJson($response, 'O corpo da resposta não é um JSON válido.');
    }

    /**
     * Testa se a estrutura do JSON retornado contém as chaves esperadas.
     *
     * @test
     */
    public function api_response_has_expected_structure()
    {
        $url = 'http://localhost:8000/api/cursos';
        $response = @file_get_contents($url);

        $this->assertNotFalse($response);

        $data = json_decode($response, true);

        $this->assertIsArray($data);
        $this->assertNotEmpty($data, 'A API retornou um array de cursos vazio.');

        $firstCourse = $data[0];

        // Asserção: Verifica se cada uma das chaves esperadas existe no objeto do curso
        $this->assertArrayHasKey('id', $firstCourse);
        $this->assertArrayHasKey('nome', $firstCourse);
        $this->assertArrayHasKey('descricao', $firstCourse);
        $this->assertArrayHasKey('categoria', $firstCourse);
        $this->assertArrayHasKey('carga_horaria', $firstCourse);
        $this->assertArrayHasKey('modalidade', $firstCourse);
        $this->assertArrayHasKey('area_nome', $firstCourse);
    }
}
