describe('Register Screen', () => {
  it('should display the title', () => {
    cy.visit('/#/register')
    cy.contains('Create account')
  })
  it('should navigate to login when pressing back to login', () => {
    cy.get('.login-button').click()
    cy.url().should('contain', '/login')
  })
})
