# Marina - Sistema de Gestão de Barcos e Tripulantes

Marina é um sistema web para gerenciamento de barcos e tripulantes, com login, registro de usuários e painel administrativo. O sistema foi desenvolvido com Node.js, Express, MongoDB e EJS, utilizando TailwindCSS para o design.

--- 

Acesse a aplicação em: https://marina-sw.vercel.app

<img width="1650" height="802" alt="image" src="https://github.com/user-attachments/assets/c8a3e7ec-18db-402c-a3d4-502348e08ffa" />
<img width="1437" height="764" alt="image" src="https://github.com/user-attachments/assets/1e931401-2f9c-4c67-a4d5-e26d4c307067" />
<img width="1897" height="855" alt="image" src="https://github.com/user-attachments/assets/c0656ead-e395-4744-b3e5-020ee8a56b1d" />
<img width="1663" height="763" alt="image" src="https://github.com/user-attachments/assets/871d4e66-6b49-464f-9c3c-ab6581da1e35" />
<img width="1606" height="717" alt="image" src="https://github.com/user-attachments/assets/2e503e06-b82e-454c-8648-e345a007424e" />


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
