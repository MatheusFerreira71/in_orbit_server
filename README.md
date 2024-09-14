# 🚀 In.Orbit API

A API para o projeto In.Orbit, desenvolvida com Fastify, permite gerenciar metas e acompanhar seu progresso semanal.

## ⚙️ Framework

- Fastify

## 🖥️ Ambiente de Desenvolvimento

- Node.js

## 🛠️ Dependências Principais

- **TypeScript**: Superset do JavaScript com tipagem estática, proporcionando mais segurança e robustez ao código.
- **Drizzle**: Uma biblioteca para trabalhar com bancos de dados SQL de forma simples e eficiente.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional open-source.
- **Dayjs**: Biblioteca leve para manipulação de datas e horários.
- **Fastify**: Framework web para Node.js, focado em alta performance e baixo overhead.
- **Zod**: Biblioteca para validação e parsing de dados com TypeScript.
- **Biome**: Ferramenta para linting e formatação de código.
- **Docker**: Plataforma para criar, implantar e executar aplicações em contêineres.

## 🛠️ Métodos HTTP

- **GET**: Buscar dados
- **POST**: Criar e atualizar dados

## 📍 Endpoints

### POST /goals

Cria uma nova meta.

**Body Parameters:**
```json
{
  "title": "string",
  "desiredWeeklyFrequency": "number (inteiro, mínimo 1, máximo 7)"
}
```

### POST /completions

Marca uma meta como completa.

**Body Parameters:**
```json
{
  "goalId": "string",
}
```

### GET /pending-goals

Busca todas as metas pendentes da semana.

**Parameters:**
- Nenhum

### GET /summary

Busca o resumo das metas batidas na semana.

**Parameters:**
- Nenhum

## 📄 Formato de Resposta

- JSON

## 🔐 Autenticação

- Não possui

## 📦 Instruções de Instalação e Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/MatheusFerreira71/in_orbit_server

2. Navegue até o diretório do projeto:

   ```bash
   cd in_orbit_server

3. Instale as dependências com **npm** ou outro gerenciador de pacotes de sua preferência:

   ```bash
   npm install

4. Inicie e banco de dados com o Docker compose:

   ```bash
   docker compose up -d

5. Utilize a seed do banco de dados:

   ```bash
   npm run seed

6. Inicie o projeto em ambiente de desenvolvimento:

   ```bash
   npm run dev

## 🤝 Como Contribuir

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto.
2. Crie um branch para sua feature (`git checkout -b feature/nova-feature`).
3. Envie suas alterações (`git commit -m 'Adicionar nova feature'`).
4. Crie um Pull Request.

## ⚖️ Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

## 👤 Autor

- **Matheus Ferreira**  
  [GitHub](https://github.com/MatheusFerreira71)  
  Email: [matheusfernandofreire@hotmail.com](mailto:matheusfernandofreire@hotmail.com)
