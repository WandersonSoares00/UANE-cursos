# UANE-cursos

Este projeto é uma Landing Page responsiva para a UANE.

---

## Como Executar o Projeto

### Pré-requisitos

* Docker
* Docker Compose

### Execução

1.  Clone este repositório:
`git clone https://github.com/WandersonSoares00/UANE-cursos.git`
2.  Navegue para a pasta raiz do projeto.
3.  Crie o arquivo .env com as credenciais necessárias (use o arquivo env.example como modelo)
4.  Execute o comando para construir e iniciar todos os containers:
    ```bash
    docker-compose up --build
    ```
5.  Aguarde o processo de build e inicialização dos serviços.
6.  Pronto! A aplicação estará disponível em:
    * **Frontend (Landing Page):** [http://localhost:3000](http://localhost:3000)

Para parar a aplicação, pressione `CTRL + C` no terminal e depois execute `docker-compose down`.

---
## Stack Utilizada

* **Front-end:** React
* **Back-end:** PHP
* **Banco de Dados:** MySQL
* **Containerização:** Docker, Docker Compose
