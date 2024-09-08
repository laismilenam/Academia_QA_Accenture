const INPUT_ERRO = '#startdate'

Cypress.Commands.add('preencheFormtErrado', () => {
    cy.get(INPUT_ERRO).type('14/11/2024')
})
