const INPUT_LISTPRICE2 = '#listprice'

Cypress.Commands.add('preencherListPriceErrado', () => {
    cy.get(INPUT_LISTPRICE2).type('40')
})
