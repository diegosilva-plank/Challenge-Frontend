describe('rockets page', () => {

    const rocketName = 'Cypress Test Rocket'
    const newRocketName = 'New Cypress Test Rocket'
    const launchCode = '#CrypressTestLaunch'

    it('adds a rocket', () => {
        cy.visit('/rockets')
        cy.get('[data-cy=add-rocket-btn]').click()
        cy.get('[data-cy=rocket-name-input]').type(rocketName)
        cy.get('[data-cy=add-rocket-confirm-btn]').click()
        cy.get('.grid').find('h2').contains(rocketName).should('exist')
    })

    it('edits a rocket', () => {
        cy.visit('/rockets')
        cy.get('.grid').find('h2').contains(rocketName).siblings().find('.edit-btn').click()
        cy.get('[data-cy=rocket-name-input]').type(newRocketName)
        cy.get('[data-cy=edit-rocket-confirm-btn]').click()
        cy.get('.grid').find('h2').contains(newRocketName).should('exist')
    })

    it('launches a rocket', () => {
        cy.visit('/rockets')
        cy.get('.grid').find('h2').contains(newRocketName).siblings().find('.launch-btn').click()
        cy.get('[data-cy=launch-code-input]').type(launchCode)
        cy.get('[data-cy=date-input]').invoke('removeAttr','type').type('12/12/2009');
    })
})