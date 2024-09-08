import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('o usuário acesse o portal', () => {
    cy.acessarPagina()
})

And ("clica 'Automobile'", () => {
    cy.acessarAutomobile()
})

When('o usuário preenche os dados do veículo com valor invalido', () => {
    cy.preencherTodosDadosVehicleErrado()
})

And('o usuário preenche os dados do segurado', () => {
    cy.preencherTodoInsurant()
})

And('o usuário preenche os dados do produto com formato de data errada', () => {
    cy.preencherDadosProductErrado()
})

Then('aparece mensagem pedindo para completar os formulários', () => {
    cy.msgErro()
})
