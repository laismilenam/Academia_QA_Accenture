#utf-8
#language: pt

Funcionalidade: Preenchimento de formulário de dados do segurador
    Cenário: Não realizar o preenchimento de Country que é obrigatório
        Dado o usuário acesse o portal
        E clica 'Automobile'
        E clica em 'enterinsurantdata'
        Quando o usuário preenche o campo 'First Name'
        E o usuário preenche o campo 'Last Name'
        E o usuário preenche o campo 'Date of Birth'
        E o usuário seleciona o gênero
        E o usuário preenche o campo 'Street Address'
        E o usuário não seleciona o 'Country'
        E o usuário preenche o campo 'Zip Code'
        E o usuário preenche o campo 'City'
        E o usuário seleciona a 'Occupation'
        E o usuário seleciona os 'Hobbies'
        E o usuário preenche o campo 'Website'
        E o usuário faz upload da 'Picture'
        Então o usuário clica no botão 'Next'
        
      