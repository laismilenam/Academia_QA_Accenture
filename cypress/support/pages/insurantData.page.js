const BTN_INSURANT = '#enterinsurantdata'
const INPUT_FIRSTNAME = '#firstname'
const INPUT_LASTNAME = '#lastname'
const INPUT_BIRTHDATE = '#birthdate'
const LBL_GENDER = ':nth-child(4) > .group > :nth-child(1)'
const INPUT_STREETADDRESS = '#streetaddress'
const LBL_COUNTRY = '#country'
const INPUT_ZIPCODE = '#zipcode'
const INPUT_CITY = '#city'
const LBL_OCCUPATION = '#occupation'
const LBL_HOBBIES = '.idealforms-field-checkbox > .group > :nth-child(3)'
const INPUT_WEBSITE = '#website'
const BTN_OPEN = '#open'
const BTN_AVANCAR = '#nextenterproductdata'

Cypress.Commands.add('clicoInsurant', () => {
    cy.get(BTN_INSURANT).click()
})

Cypress.Commands.add('preencherFirstName', () => {
    cy.get(INPUT_FIRSTNAME).type(Cypress.env('firstName'), { log: false })
})

Cypress.Commands.add('preencherLastName', () => {
    cy.get(INPUT_LASTNAME).type(Cypress.env('lastName'), { log: false })
})

Cypress.Commands.add('preencherBirthDate', () => {
    cy.get(INPUT_BIRTHDATE).type(Cypress.env('DateOfBirth'), { log: false })
})

Cypress.Commands.add('selecionarGender', () => {
    cy.get(LBL_GENDER).click()
})

Cypress.Commands.add('preencherStreetAddress', () => {
    cy.get(INPUT_STREETADDRESS).type(Cypress.env('endereço'), { log: false })
})

Cypress.Commands.add('selecionarCountry', () => {
    cy.get(LBL_COUNTRY).select('Brazil').should('have.value', 'Brazil')
})

Cypress.Commands.add('preencherZipCode', () => {
    cy.get(INPUT_ZIPCODE).type(Cypress.env('zipCode'), { log: false })
})

Cypress.Commands.add('preencherCity', () => {
    cy.get(INPUT_CITY).type('São Paulo')
})

Cypress.Commands.add('selecionarOccupation', () => {
    cy.get(LBL_OCCUPATION).select('Farmer').should('have.value', 'Farmer')
})

Cypress.Commands.add('selecionarHobbies', () => {
    cy.get(LBL_HOBBIES).click()
})

Cypress.Commands.add('preencherWebsite', () => {
    cy.get(INPUT_WEBSITE).type('www.soueu.com')
})

Cypress.Commands.add('fazerUploadDaPicture', () => {
    cy.get(BTN_OPEN).click()
    cy.get('input[type="file"]').attachFile('foto.jpeg')
})
     
Cypress.Commands.add('avançar', () => {
    cy.get(BTN_AVANCAR).click()
})
