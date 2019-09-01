
describe('instances', () => {
  it('should login', () => {
    cy.login('testuser@amazon-dash.herokuapp.com', 'testpassword')
  })

  it('should display instances', () => {
    cy.get('.instance').should('exist')
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

  it('should change metric', () => {
    cy.get('.metric-dropdown').first().click()
    cy.contains('Network In').click()
    cy.contains('Network In (Bytes)')
  })
})
