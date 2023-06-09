const crewman1Name = 'Cypress Test Crewman 1'
const crewman2Name = 'Cypress Test Crewman 2'
const newCrewman1Name = 'New Cypress Test Crewman 1'
const patent = 'Cypress Test'
const newPatent = 'New Cypress Test'

describe('creating crewmen on crewmen page', () => {

    it('adds crewman1', () => {
        cy.visit('/crewmen')
        cy.get('[data-cy=add-crewman-btn]').click()
        cy.get('[data-cy=crewman-name-input]').type(crewman1Name)
        cy.get('[data-cy=crewman-patent-input]').type(patent)
        cy.get('[data-cy=add-crewman-confirm-btn]').click()
        cy.get('.grid').find('h2').contains(crewman1Name).should('exist')
        cy.get('.grid').find('h3').contains(patent).should('exist')
    })

    it('adds crewman2', () => {
        cy.visit('/crewmen')
        cy.get('[data-cy=add-crewman-btn]').click()
        cy.get('[data-cy=crewman-name-input]').type(crewman2Name)
        cy.get('[data-cy=crewman-patent-input]').type(patent)
        cy.get('[data-cy=add-crewman-confirm-btn]').click()
        cy.get('.grid').find('h2').contains(crewman2Name).should('exist')
        cy.get('.grid').find('h3').contains(patent).should('exist')
    })

    it('edits crewman1', () => {
        cy.visit('/crewmen')
        cy.get('.grid').find('h2').contains(crewman1Name).siblings().find('.edit-btn').click()
        cy.get('[data-cy=crewman-name-input]').type(newCrewman1Name)
        cy.get('[data-cy=crewman-patent-input]').type(newPatent)
        cy.get('[data-cy=edit-crewman-confirm-btn]').click()
        cy.visit('/crewmen')
        cy.get('.grid').find('h2').contains(newCrewman1Name).should('exist')
        cy.get('.grid').find('h3').contains(newPatent).should('exist')
    })

    it('delets crewman1', () => {
        cy.visit('/crewmen')
        cy.get('.grid').find('h2').contains(newCrewman1Name).siblings().find('.delete-btn').click()
        cy.get('[data-cy=delete-crewman-confirm-btn]').click()
        cy.get('.grid').find('h2').contains(newCrewman1Name).should('not.exist')
    })

    it('adds crewman1 again', () => {
        cy.visit('/crewmen')
        cy.get('[data-cy=add-crewman-btn]').click()
        cy.get('[data-cy=crewman-name-input]').type(crewman1Name)
        cy.get('[data-cy=crewman-patent-input]').type(patent)
        cy.get('[data-cy=add-crewman-confirm-btn]').click()
        cy.get('.grid').find('h2').contains(crewman1Name).should('exist')
        cy.get('.grid').find('h3').contains(patent).should('exist')
    })
})

const crewName = 'Cypress Test Crew'
const newCrewName = 'New Cypress Test Crew'

describe('creating a crew on crews page', () => {

    it('adds a crew', () => {
        cy.visit('/crews')
        cy.get('[data-cy=add-crew-btn]').click()
        cy.get('[data-cy=crew-name-input]').type(crewName)
        cy.get('[data-cy=add-crew-confirm-btn]').click()
        cy.get('.grid').find('h2').contains(crewName).should('exist')
    })

    it('edits the crew', () => {
        cy.visit('/crews')
        cy.get('.grid').find('h2').contains(crewName).siblings().find('.edit-btn').click()
        cy.get('[data-cy=crew-name-input]').type(newCrewName)
        cy.get('[data-cy=edit-crew-confirm-btn]').click()
        cy.visit('/crews')
        cy.get('.grid').find('h2').contains(newCrewName).should('exist')
    })

    it('delets the crew', () => {
        cy.visit('/crews')
        cy.get('.grid').find('h2').contains(newCrewName).siblings().find('.delete-btn').click()
        cy.get('[data-cy=delete-crew-confirm-btn]').click()
        cy.get('.grid').find('h2').contains(newCrewName).should('not.exist')
    })

    it('adds the crew again', () => {
        cy.visit('/crews')
        cy.get('[data-cy=add-crew-btn]').click()
        cy.get('[data-cy=crew-name-input]').type(crewName)
        cy.get('[data-cy=add-crew-confirm-btn]').click()
        cy.get('.grid').find('h2').contains(crewName).should('exist')
    })

    it('adds crewman1 to the crew', () => {
        cy.visit('/crews')
        cy.get('.grid').find('h2').contains(crewName).siblings().find('.crewmen-btn').click()
        cy.get('.add-crewman-btn').click()
        cy.get('select').select(crewman1Name)
        cy.get('[data-cy=add-crewman-to-crew-confirm-btn]').click()
        cy.get('.crewman-div').find('h2').contains(crewman1Name).should('exist')
    })

    it('adds crewman2 to the crew', () => {
        cy.visit('/crews')
        cy.get('.grid').find('h2').contains(crewName).siblings().find('.crewmen-btn').click()
        cy.get('.add-crewman-btn').click()
        cy.get('select').select(crewman2Name)
        cy.get('[data-cy=add-crewman-to-crew-confirm-btn]').click()
        cy.get('.crewman-div').find('h2').contains(crewman2Name).should('exist')
    })

    it('deletes crewman1 from the crew', () => {
        cy.visit('/crews')
        cy.get('.grid').find('h2').contains(crewName).siblings().find('.crewmen-btn').click()
        cy.get('[data-cy=modal-fields]').find('h2').contains(crewman1Name).siblings('.remove-crewman-btn').click()
        cy.get('[data-cy=remove-crewman-from-crew-confirm-btn]').click()
        cy.get('[data-cy=modal-fields]').find('h2').contains(crewman1Name).should('not.exist')
    })
})

describe('checking the crew on cerwman modal', () => {

    it('checks crewman1 crews', () => {
        cy.visit('/crewmen')
        cy.get('.grid').find('h2').contains(crewman1Name).siblings().find('.crews-btn').click()
        cy.get('[data-cy=modal-fields]').should('not.contain', 'h2')
    })

    it('checks crewman2 crews', () => {
        cy.visit('/crewmen')
        cy.get('.grid').find('h2').contains(crewman2Name).siblings().find('.crews-btn').click()
        cy.get('[data-cy=modal-fields]').find('h2').contains(crewName).should('exist')
    })
})

const rocketName = 'Cypress Test Rocket'
const newRocketName = 'New Cypress Test Rocket'
const launchCode = '#CrypressTestLaunch'
const newLaunchCode = '#NewCypressTestLaunch'
const launchDate = '12/12/2009'
const newLaunchDate = '2023-06-06'

describe('creating and launching a rocket', () => {

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
        cy.get('[data-cy=date-input]').invoke('removeAttr','type').type(launchDate);
        cy.get('select').select(crewName)
        cy.get('.checkbox-input').check()
        cy.get('[data-cy=launch-rocket-confirm-btn]').click()
    })

    it('checks the launch\'s info', () => {
        cy.visit('/launches')
        cy.get('.grid').find('h2').contains(launchCode).siblings().find('.info-btn').click()
        cy.get('[data-cy=modal-fields]').find('h2').contains(`Launch code: ${launchCode}`).should('exist')
        cy.get('[data-cy=modal-fields]').find('h2').contains(`Rocket: ${newRocketName}`).should('exist')
        cy.get('[data-cy=modal-fields]').find('h2').contains(`Date: ${launchDate}`).should('exist')
        cy.get('[data-cy=modal-fields]').find('h2').contains(`Crew: ${crewName}`).should('exist')
        cy.get('[data-cy=modal-fields]').find('h2').contains(`Success: YES`).should('exist')
    })

    it('edits the launch', () => {
        cy.visit('/launches')
        cy.get('.grid').find('h2').contains(launchCode).siblings().find('.edit-btn').click()
        cy.get('[data-cy=launch-code-input]').type(newLaunchCode)
        cy.get('[data-cy=date-input]').invoke('removeAttr','type').type(newLaunchDate);
        cy.get('select').select(crewName)
        cy.get('.checkbox-input').check()
        cy.get('.checkbox-input').uncheck()
        cy.get('[data-cy=edit-launch-confirm-btn]').click()
    })

    it('checks the edited launch\'s info', () => {
        cy.visit('/launches')
        cy.get('.grid').find('h2').contains(newLaunchCode).siblings().find('.info-btn').click()
        cy.get('[data-cy=modal-fields]').find('h2').contains(`Launch code: ${newLaunchCode}`).should('exist')
        cy.get('[data-cy=modal-fields]').find('h2').contains(`Rocket: ${newRocketName}`).should('exist')
        cy.get('[data-cy=modal-fields]').find('h2').contains(`Date: ${newLaunchDate}`).should('exist')
        cy.get('[data-cy=modal-fields]').find('h2').contains(`Crew: ${crewName}`).should('exist')
        cy.get('[data-cy=modal-fields]').find('h2').contains(`Success: NO`).should('exist')
    })
})

describe('deleting everything', () => {

    it('deletes the launch', () => {
        cy.visit('/launches')
        cy.get('.grid').find('h2').contains(newLaunchCode).siblings().find('.delete-btn').click()
        cy.get('[data-cy=modal-fields]').find('.btn-green').click()
        cy.get('.grid').find('h2').should('not.contain', newLaunchCode)
    })

    it('deletes the rocket', () => {
        cy.visit('/rockets')
        cy.get('.grid').find('h2').contains(newRocketName).siblings().find('.delete-btn').click()
        cy.get('[data-cy=modal-fields]').find('.btn-green').click()
        cy.get('.grid').find('h2').should('not.contain', newRocketName)
    })

    it('deletes the crew', () => {
        cy.visit('/crews')
        cy.get('.grid').find('h2').contains(crewName).siblings().find('.delete-btn').click()
        cy.get('[data-cy=modal-fields]').find('.btn-green').click()
        cy.get('.grid').find('h2').should('not.contain', crewName)
    })

    it('deletes crewman1', () => {
        cy.visit('/crewmen')
        cy.get('.grid').find('h2').contains(crewman1Name).siblings().find('.delete-btn').click()
        cy.get('[data-cy=modal-fields]').find('.btn-green').click()
        cy.get('.grid').find('h2').should('not.contain', crewman1Name)
    })

    it('deletes crewman2', () => {
        cy.visit('/crewmen')
        cy.get('.grid').find('h2').contains(crewman2Name).siblings().find('.delete-btn').click()
        cy.get('[data-cy=modal-fields]').find('.btn-green').click()
        cy.get('.grid').find('h2').should('not.contain', crewman2Name)
    })
})