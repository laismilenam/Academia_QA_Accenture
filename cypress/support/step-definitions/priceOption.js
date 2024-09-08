import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('o usuário acesse o portal', () => {
    cy.acessarPagina()
})

And ("clica 'Automobile'", () => {
    cy.acessarAutomobile()
})

When('o usuário preenche os dados do veículo', () => {
    cy.preencherTodosDadosVehicle()
})

And('o usuário preenche os dados do segurado', () => {
    cy.preencherTodoInsurant()
})

And('o usuário preenche os dados do produto', () => {
    cy.preencherDadosProduct()
})

Then('o usuário seleciona uma opção de preço', () => {
    cy.selecionaPreco()
})

And('clica em download de cotação', () => {
    cy.baixarPDF()
})

And("clica em 'next'", () => {
    cy.prossegiur()    
})

