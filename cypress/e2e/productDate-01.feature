#utf-8
#language: pt

Funcionalidade: Preencher o formulário Product Date 
  Cenário: Preencher o formulário com dados válidos
      Dado o usuário acesse a página de formulário
      E clica 'Automobile'
      E o usuário clica em 'enterproductdata'
      Quando o usuário preenche o campo 'Start Date'
      E o usuário seleciona 'Insurance Sum'
      E o usuário seleciona 'Merit Rating'
      E o usuário seleciona 'Damage Insurance'
      E o usuário marca 'Optional Products'
      E o usuário seleciona 'Courtesy'
      Então o usuário clica para avançar