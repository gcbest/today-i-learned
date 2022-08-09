describe('routes', () => {
  it('displays correct heading when navigating to shows route', () => {
    cy.visit('/');
    cy.findByRole('heading', { name: /t3/i }).should('exist');
  });
});

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});

export {};
