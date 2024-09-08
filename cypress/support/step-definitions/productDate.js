import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'


Given('o usuário acesse a página de formulário', () => {
    cy.acessarPagina()
})

And ("clica 'Automobile'", () => {
    cy.acessarAutomobile()
})

And("o usuário clica em 'enterproductdata'", () => {
    cy.clicoProduct()
})

When("o usuário preenche o campo 'Start Date'", () => {
    cy.preencherDateStart()
})

And("o usuário seleciona 'Insurance Sum'", () => {
    cy.selecionarInseruancese()
})

And("o usuário seleciona 'Merit Rating'", () => {
    cy.selecionarMarit()
})

And("o usuário seleciona 'Damage Insurance'", () => {
    cy.selecionarDamage()
})

And("o usuário marca 'Optional Products'", () => {
    cy.selecionarOptional()
})

And("o usuário seleciona 'Courtesy'", () => {
    cy.selecionarCourtesy()
})

Then('o usuário clica para avançar', () => {
    cy.clicarPrice()
    
})
