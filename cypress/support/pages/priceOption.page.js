
const LBL_SELECIONAPRECO = ':nth-child(3) > .ideal-radio'
const BTN_PDF = '#downloadquote > .hb > .fa'
const BTN_PROSSEGUIR = '#nextsendquote'

Cypress.Commands.add('preencherTodosDadosVehicle', () => {
    cy.selecionarMake()
    cy.preencherPerformance()
    cy.preencherDateFacture()
    cy.selecionarNumber()
    cy.selecionarFuelType()
    cy.preencherListPrice()
    cy.preencherLicence()
    cy.preencherAnnualMi()
    cy.clicarNoNext()
})

Cypress.Commands.add('preencherTodoInsurant', () => {
    cy.preencherFirstName()
    cy.preencherLastName()
    cy.preencherBirthDate()
    cy.selecionarGender()
    cy.preencherStreetAddress()
    cy.selecionarCountry()
    cy.preencherZipCode()
    cy.preencherCity()
    cy.selecionarOccupation()
    cy.selecionarHobbies()
    cy.preencherWebsite()
    cy.fazerUploadDaPicture()  
    cy.avançar()
})

Cypress.Commands.add('preencherDadosProduct', () => {
    cy.preencherDateStart()
    cy.selecionarInseruancese()
    cy.selecionarMarit()
    cy.selecionarDamage()
    cy.selecionarOptional()
    cy.selecionarCourtesy()
    cy.clicarPrice()
})


Cypress.Commands.add('selecionaPreco', () => {
    cy.get(LBL_SELECIONAPRECO).click()
})

Cypress.Commands.add('baixarPDF', () => {
    cy.get(BTN_PDF).click()
})

Cypress.Commands.add('prossegiur', () => {
    cy.get(BTN_PROSSEGUIR).click({force: true})
})

