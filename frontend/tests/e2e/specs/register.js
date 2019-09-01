describe('Register Screen', () => {
  it('should display the title', () => {
    cy.visit('/#/register')
    cy.contains('Create account')
  })
  it('should navigate to login when pressing back to login', () => {
    cy.get('.login-button').click()
    cy.url().should('contain', '/login')
  })
  it('should not be able to register an existing email address', () => {
    cy.visit('/#/register')
    cy.on('uncaught:exception', () => false)
    cy.get('.username input').type('testuser@amazon-dash.herokuapp.com')
    cy.get('.password input').type('testpassword')
    cy.get('.confirm-password input').type('testpassword')
    cy.get('.access-key input').type('fake key')
    cy.get('.secret-key input').type('fake key')
    cy.get('.submit-button').click()
    cy.contains('That email address already exists')
  })
  it('should be able to register', () => {
    cy.get('.username input').clear().type('testuser2@amazon-dash.herokuapp.com')
    cy.get('.submit-button').click()
    cy.url().should('not.contain', '/register')
    cy.url().should('not.contain', '/login')
  })
})
