
describe('Login Screen', () => {
  it('should display the website\'s title', () => {
    cy.visit('/#/login')
    cy.contains('Amazon Dash')
  })
  it('should have a username and password field', () => {
    cy.get('input[type="text"]')
    cy.get('input[type="password"]')
  })
  it('should navigate to register screen when clicking create account', () => {
    cy.get('.register-button').click()
    cy.url().should('contain', '/register')
  })
})
