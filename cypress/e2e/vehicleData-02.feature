#utf-8
#language: pt

Funcionalidade: Preenchimento de formulário de dados de veículo aba 'Enter Vehicle Data'.
    Cenário: Preenchimento com valor invalido 'list price [$]' 
        Dado que o usuário acesse o portal
        E clica 'Automobile'
        Quando o usuário tenha selecionado uma marca em 'make'
        E o usuário tenha preenchido o campo 'engine performance [kw]'
        E o usuário tenha preenchido o campo 'data of manufacture' com uma data válida
        E o usuário tenha selecionado uma opção em 'number of seats'
        E o usuário tenha selecionado uma opção em 'fuel type'
        E o usuário tenha preenchido o campo 'list price [$]' com valor invalido
        E o usuário tenha preenchido o campo 'license plate number'
        E o usuário tenha preenchido o campo 'annual mileage [mi]' 
        Então o usuário clicar no botão 'next'
      