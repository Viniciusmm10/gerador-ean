# EANForge

O EANForge é um app web simples para gerar e exibir um código no formato de EAN, com foco em praticar UI/UX e organização de código em JavaScript puro.

Ele mostra o código na tela, permite “copiar” (no momento a cópia é simulada via console) e inclui um modal de confirmação ao tentar gerar um novo código quando já existe um exibido.

## Objetivo principal

Gerar rapidamente um código de exemplo para testes locais e demonstrações, sem depender de frameworks.

## Tecnologias utilizadas

- **HTML**: estrutura das páginas ([index.html](index.html) e [about.html](about.html)).
- **CSS**: estilo e animações, incluindo o modal de confirmação e layout responsivo ([css/style.css](css/style.css)).
- **JavaScript (Vanilla)**: lógica de geração, UI e eventos ([js/main.js](js/main.js) e módulos em [js/](js/)).
- **Google Fonts**: tipografia usada no layout (carregada via CDN no HTML).

## Como executar o projeto

### Opção 1: abrir direto no navegador

1. Abra o arquivo `index.html` no navegador.
2. Use o botão “Gerar Novo Código”.

### Opção 2: rodar com um servidor local (recomendado)

Isso evita problemas comuns ao abrir arquivos direto (principalmente quando o projeto cresce).

- **VS Code Live Server**: abra a pasta do projeto e use “Go Live”.
- **Node (opcional, sem instalar dependências no projeto)**:

  ```bash
  npx -y serve .
  ```
