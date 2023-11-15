describe('Registration Form', () => {
  it('should fill out the registration form and check the checkbox', () => {

    cy.visit('/auth/register');

        cy.get('.form-control-group').parent().within(() => {

          cy.get('#input-name').clear().type('john doe');
          cy.get('#input-email').clear().type('doe@gmail.com');
          cy.get('#input-password').clear().type('qwerty123');
          cy.get('#input-re-password').clear().type('qwerty123');
          cy.get('[type="checkbox"]').check({ force: true }).should('be.checked');
          cy.get('[type="password"]').should('have.value', 'qwerty123');
          cy.contains(' Register ').click();
        })
      });
    });
