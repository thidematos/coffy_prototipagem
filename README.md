# Coffy - Prototipagem

Aplicação de prototipagem para o projeto Coffy, desenvolvida com React, Vite, React Router e Tailwind CSS.

## 🚀 Tecnologias

- **React 19.2.0**
- **React Router DOM** - Roteamento
- **Vite** - Build tool
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones

## 📋 Rotas Disponíveis

O projeto conta com as seguintes rotas configuradas:

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | - | Redireciona para `/first-screen` |
| `/first-screen` | FirstScreen | Tela inicial de onboarding |
| `/login` | Login | Tela de login |
| `/signup` | Signup | Tela de cadastro |
| `/map-home-screen` | MapHomeScreen | Tela principal com mapa |
| `/design-system` | DesignSystem | Sistema de design |

## 🛠️ Instalação e Execução

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 📁 Estrutura de Pastas

```
src/
├── pages/           # Páginas/componentes de rota
│   ├── first_screen.jsx
│   ├── login.jsx
│   ├── signup.jsx
│   ├── map_home_screen.jsx
│   └── design_system.jsx
├── App.jsx          # Configuração de rotas
├── main.jsx         # Entry point
└── index.css        # Estilos globais (Tailwind)
```

## 🎨 Design System

A aplicação utiliza uma paleta de cores personalizada:

- **Dark Roast**: `#402B29` - Backgrounds e textos
- **Gold Crema**: `#F2C166` - Highlights e ícones
- **Bronze**: `#D97218` - Botões primários
- **Light Roast**: `#735145` - Bordas e elementos secundários

Tipografia:
- **Logo/Display**: Parisienne (cursive)
- **Interface**: Lato (sans-serif)

## 📝 Notas

Os arquivos originais JSX estão localizados na pasta `html/` e foram copiados para `src/pages/` para integração com React Router.
