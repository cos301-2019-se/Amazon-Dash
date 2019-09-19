
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
  it('should login successfully', () => {
    cy.visit('/#/login')
    cy.get('input[type="text"]').type('testuser@amazon-dash.herokuapp.com')
    cy.get('input[type="password"]').type('testpassword')
    cy.get('button[type="submit"]').click()
    cy.url().should('not.contain', '/login')
  })

  it('should logout', () => {
    cy.get('.logout-button').click()
    cy.contains('Yes').click()
    cy.url().should('contain', '/login')
  })
})
