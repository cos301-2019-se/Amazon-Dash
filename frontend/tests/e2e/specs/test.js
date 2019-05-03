// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Should redirect to login', () => {
    cy.visit('/')
    cy.url().should('include', '/login')
  })
})
