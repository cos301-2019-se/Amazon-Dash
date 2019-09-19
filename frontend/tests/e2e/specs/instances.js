
describe('instances', () => {
  before(() => {
    cy.clearCookies()
  })

  beforeEach(() => {
    Cypress.Cookies.preserveOnce('auth_token')
  })

  it('should login', () => {
    cy.login('testuser@amazon-dash.herokuapp.com', 'testpassword')
  })

  it('should display instances', () => {
    cy.get('.instance', { timeout: 10000 }).should('exist')
  })

  it('should navigate to an instance metric screen', () => {
    cy.get('.view-metrics-button').first().click()
    cy.get('.metric-card').should('exist')
    cy.url().should('contain', '/instances/i-')
  })

  it('should navigate back', () => {
    cy.contains('Back').click()
    cy.url().should('not.contain', '/instances/i-')
  })

  it('should display the menu', () => {
    cy.get('.menu-button').first().click()
  })
})
