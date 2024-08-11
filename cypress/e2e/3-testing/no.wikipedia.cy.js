describe('no.wikipedia.org', () => {
  it('can search for Noroff', () => {
    cy.visit('https://no.wikipedia.org');

    // Click the button to reveal the search input
    cy.get('a.search-toggle').click();

    // Wait for the input element to appear and ensure it's visible
    cy.get('input[aria-label="Søk i Wikipedia"]', { timeout: 10000 })
      .should('be.visible')
      .type('Noroff{enter}', { delay: 500 });

    // Verify that the search results contain the text 'Noroff'
    cy.get('h1').contains('Noroff');
  });
});
