describe('Rehearsal Room', () => {
  beforeEach(function() {
    cy.visit('http://localhost:3000"/')
      .wait()
      .expect('status', 200)
  })

  it('should visit the client site'),
    function() {
      cy.visit('http://localhost:3000').expect('status', 200)
      cy.get('header').to.contain('Rehearsal Room')
    }
})
