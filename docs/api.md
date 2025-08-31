# **Documentação da API \- Cursos UANE**

Esta documentação descreve como interagir com a API de Cursos da UANE. A API fornece uma lista de cursos disponíveis em formato JSON.

## **1\. Endpoint Principal**

### **Rota**

GET /api/cursos

### **Descrição**

Retorna uma lista completa de todos os cursos disponíveis na base de dados.

### **Resposta de Sucesso (Código 200 OK)**

A resposta será um array de objetos JSON, onde cada objeto representa um curso.

**Estrutura do Objeto Curso:**

| Chave | Tipo | Descrição |
| :---- | :---- | :---- |
| id | int | O identificador único do curso. |
| nome | string | O nome do curso. |
| descricao | string | Uma breve descrição sobre o curso. |
| imagem | string | URL para a imagem de capa do curso. |
| categoria | string | A categoria do curso (ex: 'Extensão', 'Técnico'). |
| carga\_horaria | int | A carga horária total do curso em horas. |
| modalidade | string | A modalidade do curso (ex: 'EAD', 'Presencial'). |
| area\_nome | string | O nome da área de conhecimento à qual o curso pertence. |

## **2\. Como Testar a API**

### **PHPUnit:**

Os testes verificam se o endpoint responde corretamente e se a estrutura dos dados está correta.

**Pré-requisito:** Os containers Docker devem estar em execução (docker compose up \-d).

Execute o seguinte comando na raiz do projeto:  
```bash
sudo docker compose exec backend composer test
```

**Saída Esperada (Sucesso):**

\> phpunit  
PHPUnit 9.5.10 by Sebastian Bergmann and contributors.

..                                       2 / 2 (100%)

Time: \[tempo\], Memory: \[memória\]

OK (2 tests, 9 assertions)

### **cURL(Teste Manual):**

Uma forma rápida de verificar a resposta da API diretamente no terminal.

**Comando:**

curl \-X GET http://localhost:8000/api/cursos

curl \-X GET http://localhost:8000/api/cursos | jq  