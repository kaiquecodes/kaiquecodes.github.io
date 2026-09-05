# Instruções de Implementação para Agente de IA: Landing Page - Kaique Systems

**Objetivo:** Atuar como um Desenvolvedor Front-end Sênior para construir a landing page oficial da empresa "Kaique Systems", uma fábrica de software e consultoria em TI. A página deve ser otimizada para conversão, possuir alta performance e refletir uma identidade visual moderna.

---

## 1. Contexto e Identidade Visual (Design System)

*   **Tema:** "Dark Tech" (Fundo escuro, estilo tech moderno, com elementos neon).
*   **Cores Principais:**
    *   Fundo principal: Tons escuros como Slate 950 (`#020617`) e Preto.
    *   Acentos/Neon: Roxo e Azul (referência às cores do logo, em gradiente).
*   **Logo e Tipografia:** O logo é formado por circuitos que desenham a letra "K". A tipografia do site deve ser limpa, sem serifa (Sans-serif), transmitindo seriedade e tecnologia.
*   **Visual Elements:** Uso de *glassmorphism* (fundos translúcidos com desfoque), bordas sutis brilhantes no hover, e gradientes.

---

## 2. Dados da Empresa

*   **Razão Social:** Kaique Gomes Machado Tecnologia da Informacao LTDA
*   **Endereço:** Rua Pais Leme 215 Conj 1713, Pinheiros, São Paulo - SP, CEP: 05424-150
*   **Atividades Base (CNAEs) para estruturação dos serviços:**
    *   *62.03-1-00* - Desenvolvimento de programas não-customizáveis (SaaS / Produtos Proprietários)
    *   *62.01-5-01 / 62.02-3-00* - Desenvolvimento de programas sob encomenda (Fábrica de software)
    *   *62.04-0-00* - Consultoria em tecnologia da informação
    *   *62.01-5-02* - Web design

---

## 3. Estrutura da Página e Copywriting

A landing page deve ser "One Page" com as seguintes seções fluidas:

### 3.1. Header (Navegação Fixa)
*   Logo à esquerda.
*   Menu (Serviços, Produtos, Sobre, Contato).
*   Call to Action (CTA) em botão gradiente (Roxo para Azul): `Fale com um Especialista`.

### 3.2. Hero Section (Apresentação Inicial)
*   **Título:** "Conectando ideias ao futuro do software." (Destaque gradiente na palavra "futuro").
*   **Subtítulo:** "Desenvolvemos soluções sob medida, consultoria estratégica em TI e produtos proprietários de alta performance para escalar o seu negócio."
*   **CTAs:** `Iniciar meu projeto` (Primário) e `Conhecer nossas soluções` (Secundário).

### 3.3. Seção de Serviços
*   **Título:** Engenharia de Software de Ponta a Ponta.
*   **Cards:**
    *   *Desenvolvimento Sob Encomenda:* Criação de plataformas customizadas.
    *   *Produtos Proprietários (SaaS):* Sistemas plug and play para nichos específicos.
    *   *Consultoria em TI e Arquitetura:* Infraestrutura, liderança técnica e otimização.
    *   *Web Design e Experiência:* UI/UX focado em usabilidade e conversão.

### 3.4. Portfólio / Soluções (Cases Fictícios para início de operação)
*   **Título:** Nossas Soluções em Ação.
*   **Itens do grid:**
    1.  **Medisens (HealthTech):** SaaS para clínicas (Web, Cloud-native).
    2.  **Trimvi (Beauty & Wellness):** Agendamento online para salões (App Multiplataforma).
    3.  **santa_tef (FinTech & Varejo):** Integração de transações para PDVs (Flutter).
    4.  **12patinhas (Social & IA):** Adoção de animais com IA fotográfica (Machine Learning).

### 3.5. Sobre a Empresa
*   Breve texto reforçando a missão de transformar lógica de código em resultados, ressaltando os diferenciais: Metodologias Ágeis, Foco no Negócio e Código Escalável.

### 3.6. Footer
*   Informações de contato, email de demonstração, endereço físico completo e dados legais da razão social com os direitos reservados.

---

## 4. Stack Tecnológica Obrigatória

*   **Framework:** Next.js (com App Router configurado).
*   **Linguagem:** TypeScript.
*   **Estilização:** Tailwind CSS (configurado nativamente no Next.js).
*   **Ícones:** `lucide-react`.

---

## 5. Boas Práticas de Desenvolvimento de Software Exigidas

Ao implementar o código, o agente de IA deve obrigatoriamente seguir as seguintes diretrizes arquiteturais e de Clean Code:

1.  **Componentização (Atomic Design / Separação de Responsabilidades):**
    *   NÃO crie a página inteira em um único arquivo `page.tsx` monstruoso.
    *   Divida a interface em componentes reutilizáveis na pasta `/components`. Exemplo: `Header.tsx`, `Hero.tsx`, `ServiceCard.tsx`, `PortfolioGrid.tsx`, `Footer.tsx`.
2.  **Responsividade (Mobile-First):**
    *   Utilize as classes utilitárias do Tailwind (ex: `flex-col md:flex-row`, `text-3xl md:text-5xl`) para garantir que o layout funcione perfeitamente em telas pequenas, tablets e desktops.
3.  **Acessibilidade (a11y):**
    *   Adicione atributos `aria-label` em botões apenas iconográficos.
    *   Garanta contraste adequado entre texto e fundo.
    *   Use tags semânticas do HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`).
4.  **Tipagem Estrita (TypeScript):**
    *   Crie interfaces/tipos explícitos para as *props* dos componentes.
    *   Evite o uso de `any`.
5.  **Performance e Otimização:**
    *   Utilize o componente `<Image />` do `next/image` para futuras imagens reais da empresa, visando otimização de cache e lazy loading.
    *   Mantenha os componentes o mais limpos possível, utilizando Client Components (`"use client"`) apenas onde for necessário gerenciar estado ou interatividade (ex: menus mobile, animações de scroll).
6.  **Organização do Projeto:**
    *   Mantenha uma estrutura limpa:
        ```text
        /src
          /app
            page.tsx
            layout.tsx
          /components
            /ui
            /sections
          /lib
            utils.ts
        ```

---

## 6. Código Base de Referência (Draft Inicial)

Se precisar de um ponto de partida rápido, considere a estrutura monolítica abaixo e refatore-a de acordo com a Regra 1 (Componentização):

```tsx
// Exemplo estrutural (Deve ser quebrado em componentes)
import React from 'react';
import { Code2, Server, Figma, Terminal } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-50 min-h-screen">
      {/* Header logic */}
      {/* Hero logic */}
      {/* Services logic */}
      {/* ... */}
    </main>
  );
}
```

**Instrução final ao agente:** Inicie a implementação configurando o ambiente Next.js, estabelecendo as variáveis de cor no Tailwind e, em seguida, comece a codificar os componentes de forma modular.
