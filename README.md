# ☠️ Dashboard Interativo - One Piece

Um dashboard web responsivo desenvolvido com HTML5 semântico, CSS3 e JavaScript puro (Vanilla JS). O projeto conta com alternância de tema claro/escuro, um contador de likes configurável com validações e uma galeria dinâmica dos Piratas do Chapéu de Palha.

---

## 🚀 Funcionalidades

- 🌓 **Alternância de Tema (Dark Mode):** Alterne entre o modo claro e escuro salvando preferências visuais da interface.
- 🔢 **Contador Interativo:**
  - Incremento e decremento do valor.
  - Regra de passo customizada (se o valor digitado for $\le 0$, inválido ou vazio, o padrão assume automaticamente **1**).
- 🖼️ **Galeria Dinâmica de Imagens:**
  - Renderização automática via JavaScript das miniaturas dos 10 tripulantes.
  - Troca dinâmica de imagem em destaque ao clicar na miniatura.
  - Indicação visual (borda em destaque) da miniatura ativa.
- 📱 **Layout Responsivo:**
  - Grid de miniaturas ajustável (4 colunas em telas grandes e 2 colunas em dispositivos móveis).
- ♿ **Acessibilidade & Semântica:** Uso de marcas semânticas (`<header>`, `<main>`, `<section>`, `<footer>`) e atributos `alt` em todas as imagens.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** (Estruturação semântica)
- **CSS3** (Flexbox, Grid Layout, Variáveis CSS para Temas e Media Queries)
- **JavaScript (ES6+)** (Manipulação do DOM, Tratamento de Eventos e Validação)

---

## 📂 Estrutura do Repositório

```text
/
├── index.html          # Estrutura principal da aplicação
├── css/
│   └── style.css       # Estilização global, variáveis e responsividade
├── js/
│   └── script.js      # Lógica do contador, temas e galeria dinâmica
└── img/                # Imagens locais dos personagens
