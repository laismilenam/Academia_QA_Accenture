const BTN_AUTOMOBILE = '.main-navigation > .menu > :nth-child(1) > #nav_automobile'
const LBL_MAKE = '#make'
const INPUT_PERFOMACE = '#engineperformance'
const INPUT_DATEFACTURE = '#dateofmanufacture'
const LBL_NUMBER = '#numberofseats'
const LBL_FUEL = '#fuel'
const INPUT_LISTPRICE = '#listprice'
const INPUT_LICENCE = '#licenseplatenumber'
const INPUT_ANNUAL = '#annualmileage'
const BTN_NEXT = '#nextenterinsurantdata'

Cypress.Commands.add('acessarPagina', () => {
    cy.visit('https://sampleapp.tricentis.com/101/index.php')
})

Cypress.Commands.add('acessarAutomobile', () => {
cy.get(BTN_AUTOMOBILE).click()
})

Cypress.Commands.add('selecionarMake', () => {
    cy.get(LBL_MAKE).select('Ford').should('have.value','Ford')  
})

Cypress.Commands.add('preencherPerformance', () => {
    cy.get(INPUT_PERFOMACE).type('150')
})

Cypress.Commands.add('preencherDateFacture', () => {
    cy.get(INPUT_DATEFACTURE).type('01/01/2023')
})

Cypress.Commands.add('selecionarNumber', () => {
    cy.get(LBL_NUMBER).select('2').should('have.value','2')  
})

Cypress.Commands.add('selecionarFuelType', () => {
    cy.get(LBL_FUEL).select('Diesel').should('have.value','Diesel')  
})

Cypress.Commands.add('preencherListPrice', () => {
    cy.get(INPUT_LISTPRICE).type('40000')
})

Cypress.Commands.add('preencherLicence', () => {
    cy.get(INPUT_LICENCE).type(Cypress.env('matricula'), {log: false})
})

Cypress.Commands.add('preencherAnnualMi', () => {
    cy.get(INPUT_ANNUAL).type('18000')
})

Cypress.Commands.add('clicarNoNext', () => {
    cy.get(BTN_NEXT).click();
})