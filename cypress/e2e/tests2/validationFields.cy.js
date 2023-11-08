describe("validation fields", () => {
  it('validation fields', () => {

    cy.visit("/auth/register");

    cy.get('#input-email').click();
    cy.get('body').click();
    cy.get('#input-email').next().should('have.text', ' Email is required! ');

    cy.get('#input-password').click();
    cy.get('body').click();
    cy.get('#input-password').next().should('have.text', ' Password is required! ');

    cy.get('#input-re-password').click();
    cy.get('body').click();
    cy.get('#input-re-password').next().should('have.text', ' Password confirmation is required! ');
  });
});
