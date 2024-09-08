import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'


Given('o usuário acesse o portal', () => {
    cy.acessarPagina()
})

And ("clica 'Automobile'", () => {
    cy.acessarAutomobile()
})

And("clica em 'enterinsurantdata'", () => {
    cy.clicoInsurant()
})

When("o usuário preenche o campo 'First Name'", () => {
    cy.preencherFirstName()
})

And("o usuário preenche o campo 'Last Name'", () => {
    cy.preencherLastName()
})

And("o usuário preenche o campo 'Date of Birth'", () => {
    cy.preencherBirthDate()
})

And("o usuário seleciona o gênero", () => {
    cy.selecionarGender()
})

And("o usuário preenche o campo 'Street Address'", () => {
    cy.preencherStreetAddress()
})

And("o usuário seleciona o 'Country'", () => {
    cy.selecionarCountry()
})

And("o usuário preenche o campo 'Zip Code'", () => {
    cy.preencherZipCode()
})

And("o usuário preenche o campo 'City'", () => {
    cy.preencherCity()
})

And("o usuário seleciona a 'Occupation'", () => {
    cy.selecionarOccupation()
})

And("o usuário seleciona os 'Hobbies'", () => {
    cy.selecionarHobbies()
})

And("o usuário preenche o campo 'Website'", () => {
    cy.preencherWebsite()
})

And("o usuário faz upload da 'Picture'", () => {
    cy.fazerUploadDaPicture()     
})
Then("o usuário clica no botão 'Next'", () => {
    cy.avançar()
})
