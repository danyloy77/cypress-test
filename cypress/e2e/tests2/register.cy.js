describe('Registration Form', () => {
  it('should fill out the registration form and check the checkbox', () => {

    cy.visit('/auth/register');

    cy.get('#input-name').type("Jogn Doe")
      .should('have.value', 'Jogn Doe' );
    cy.get('#input-email').type("tes@mail.com")
      .should('have.value', 'tes@mail.com');
    cy.get('#input-password').type("qwerty")
      .should('have.value', 'qwerty');
    cy.get('#input-re-password').type('qwerty')
      .should('have.value', 'qwerty');

    cy.get('.custom-checkbox').should('exist');
    cy.get('label > span.custom-checkbox').click();
    cy.get('form > div.form-control-group.accept-group > nb-checkbox')
      .should ('have.attr', 'ng-reflect-model', 'true');


    cy.get('[data-name="github"]').should('be.visible');
    cy.get('[data-name="facebook"]').should('be.visible');
    cy.get('[data-name="twitter"]').should('be.visible');

    cy.get('.appearance-filled').click();
  });
});
