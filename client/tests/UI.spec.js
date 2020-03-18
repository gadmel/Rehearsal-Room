const name = 'Gleb Abramov'

describe('Rehearsal Room UI', () => {
  beforeEach(() => {
    cy.request('/').then(response => {
      expect(response.status).to.eq(200)
    })
  })

  it('should visit the client site', () => {
    cy.visit('/')
    cy.get('header').should('contain', 'Rehearsal R')
  })

  it('should create a new member, who plays bass in the band, which is not in the list of bands yet', () => {
    cy.get('.fa-user-plus').click()
    cy.focused()
      .type(name)
      .tab()
      .tab()
      .type('Firestore Bangers')

    cy.get('[id=musician]')
      .check()
      //or:
      //.findAllByText('Musician').click()

      .get('[name = "newInstrument"]')
      .click()
      .type('Bass{enter}')
      // .get('.fa-plus-circle').click()

      // .get('[name = "newInstrument"]').click()
      .type('Drums')
      .get('.fa-plus-circle')
      .click()

    cy.get('[type=submit]').click()
  })

  after(function() {
    cy.findAllByText(name).should('be', 'Gleb Abramov')
    cy.findAllByText(name).scrollIntoView()
  })
})
