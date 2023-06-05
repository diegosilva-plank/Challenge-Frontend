describe('navbar links', () => {
  
  it('goes to rockets', () => {
    cy.visit('/')
    cy.get('[data-cy=nav-rockets]').click()
    cy.url().should('include', '/rockets')
  })

  it('goes to launches', () => {
    cy.visit('/')
    cy.get('[data-cy=nav-launches]').click()
    cy.url().should('include', '/launches')
  })

  it('goes to crews', () => {
    cy.visit('/')
    cy.get('[data-cy=nav-crews]').click()
    cy.url().should('include', '/crews')
  })
  
  it('goes to crewmen', () => {
    cy.visit('/')
    cy.get('[data-cy=nav-crewmen]').click()
    cy.url().should('include', '/crewmen')
  })
})