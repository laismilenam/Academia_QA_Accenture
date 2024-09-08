import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que o usuário acesse o portal', () => {
    cy.acessarPagina()
})

And ("clica 'Automobile'", () => {
    cy.acessarAutomobile()
})

When ("o usuário tenha selecionado uma marca em 'make'", () => {
    cy.selecionarMake()
})


And ("o usuário tenha preenchido o campo 'engine performance [kw]'", () => {
    cy.preencherPerformance()
})

And ("o usuário tenha preenchido o campo 'data of manufacture' com uma data válida", () => {
    cy.preencherDateFacture()
})

And ("o usuário tenha selecionado uma opção em 'number of seats'", () => {
    cy.selecionarNumber()
})

And ("o usuário tenha selecionado uma opção em 'fuel type'", () => {
    cy.selecionarFuelType()
})


And ("o usuário tenha preenchido o campo 'list price [$]' com valor invalido", () => {
    cy.preencherListPriceErrado()
})

And ("o usuário tenha preenchido o campo 'license plate number'", () => {
    cy.preencherLicence()
})

And ("o usuário tenha preenchido o campo 'annual mileage [mi]'", () => {
    cy.preencherAnnualMi()
})

Then ("o usuário clicar no botão 'next'", () => {
    cy.clicarNoNext()
})



