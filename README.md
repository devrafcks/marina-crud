# Marina - Sistema de Gestão de Barcos e Tripulantes

Marina é um sistema web para gerenciamento de barcos e tripulantes, com login, registro de usuários e painel administrativo. O sistema foi desenvolvido com Node.js, Express, MongoDB e EJS, utilizando TailwindCSS para o design.
<img width="1908" height="833" alt="image" src="https://github.com/user-attachments/assets/625aba25-bad0-447e-bfdd-2147a07cfc24" />

<img width="1890" height="860" alt="image" src="https://github.com/user-attachments/assets/ece04178-eb18-46b9-9800-7cb00285d584" />
<img width="641" height="582" alt="image" src="https://github.com/user-attachments/assets/fee4c6ec-41d2-4102-999a-85a0c0a7fa38" />
<img width="899" height="608" alt="image" src="https://github.com/user-attachments/assets/1e13ef4a-826e-4d5a-b8e2-2a7d78e13778" />

---

## Tecnologias Utilizadas

- **Node.js**: ambiente de execução do servidor.
- **Express**: framework web para rotas e middleware.
- **MongoDB + Mongoose**: banco de dados e ODM.
- **EJS**: template engine para renderizar HTML dinâmico.
- **TailwindCSS**: estilização rápida e responsiva.
- **JWT**: autenticação e proteção de rotas.
- **Feather Icons**: ícones modernos para a UI.

## Funcionalidades

### Autenticação
- Registro de novos usuários.
- Login e logout.
- Proteção de rotas administrativas com JWT.

### Administração
- Painel administrativo com dashboard.
- Gestão de barcos: criar, editar, deletar.
- Gestão de tripulantes: criar, editar, deletar.
- Visualização do status dos barcos com cores diferentes:
  - **Atracado**: verde
  - **Navegando**: vermelho
  - **Em manutenção**: amarelo

### Interface
- UI moderna com TailwindCSS.
- Sidebar colapsável com ícones.
- Tabelas estilizadas e responsivas.
- Status dos barcos destacado com cores.

### Banco de Dados
- MongoDB para armazenamento de usuários, barcos e tripulantes.
- Estrutura de dados:
  - **Barco**: nome, tipo, capacidade, status.
  - **Tripulante**: nome, função, barco associado.

---
