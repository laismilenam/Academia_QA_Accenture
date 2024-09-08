const BTN_PRODUCTDATA = '#enterproductdata'
const INPUT_DATES = '#startdate'
const LBL_INSERUANCESUM = '#insurancesum'
const LBL_MERITRATING = '#meritrating'
const LBL_DAMAGEINSURANCE = '#damageinsurance'
const LBL_OPTIONALPRODUCTS = 'section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(1) > .ideal-check'
const LBL_COURTESYCAR = '#courtesycar'
const BTN_SEGUIR = '#nextselectpriceoption'

Cypress.Commands.add('clicoProduct', () => {
    cy.get(BTN_PRODUCTDATA).click()
})

Cypress.Commands.add('preencherDateStart', () => {
    cy.get(INPUT_DATES).type('11/14/2024')
})

Cypress.Commands.add('selecionarInseruancese', () => {
    cy.get(LBL_INSERUANCESUM).select('3000000').should('have.value', '3000000')
})


Cypress.Commands.add('selecionarMarit', () => {
    cy.get(LBL_MERITRATING).select('Bonus 9').should('have.value', 'Bonus 9')
})

Cypress.Commands.add('selecionarDamage', () => {
    cy.get(LBL_DAMAGEINSURANCE).select('Full Coverage').should('have.value', 'Full Coverage')
})

Cypress.Commands.add('selecionarOptional', () => {
    cy.get(LBL_OPTIONALPRODUCTS).click()
})

Cypress.Commands.add('selecionarCourtesy', () => {
    cy.get(LBL_COURTESYCAR).select('Yes').should('have.value', 'Yes')
})

Cypress.Commands.add('clicarPrice', () => {
    cy.get(BTN_SEGUIR).click()
})