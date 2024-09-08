#language: pt
Funcionalidade: Preencher todo o formulário de motocicleta  para acessar o Price Option
  Cenário: Preencher o formulário completo até a página Select Price Option
    Dado o usuário acesse o portal
    E clica 'Automobile'
    Quando o usuário preenche os dados do veículo
    E o usuário preenche os dados do segurado
    E o usuário preenche os dados do produto
    Então o usuário seleciona uma opção de preço
    E clica em download de cotação
    E clica em 'next'
    
    