
const LBL_SELECIONAPRECO = ':nth-child(3) > .ideal-radio'
const BTN_PDF = '#downloadquote > .hb > .fa'
const BTN_PROSSEGUIR = '#nextsendquote'
const LBL_MSG = '#xLoaderPrice > p'

Cypress.Commands.add('preencherTodosDadosVehicleErrado', () => {
    cy.selecionarMake()
    cy.preencherPerformance()
    cy.preencherDateFacture()
    cy.selecionarNumber()
    cy.selecionarFuelType()
    cy.preencherListPriceErrado()
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

Cypress.Commands.add('preencherDadosProductErrado', () => {
    cy.preencheFormtErrado()
    cy.selecionarInseruancese()
    cy.selecionarMarit()
    cy.selecionarDamage()
    cy.selecionarOptional()
    cy.selecionarCourtesy()
    cy.clicarPrice()
})


Cypress.Commands.add('msgErro', () => {
cy.get(LBL_MSG).should('be.visible')
})
