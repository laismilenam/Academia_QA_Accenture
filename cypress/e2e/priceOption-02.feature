#language: pt
Funcionalidade: Preencher todo o formulário para acessar o Price Option
  Cenário: Preencher o formulário com dados errado 
    Dado o usuário acesse o portal
    E clica 'Automobile'
    Quando o usuário preenche os dados do veículo com valor invalido
    E o usuário preenche os dados do segurado
    E o usuário preenche os dados do produto com formato de data errada
    Então aparece mensagem pedindo para completar os formulários
    
    