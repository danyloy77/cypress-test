describe('edit row in table test', () => {
  it('edit row in a table', () => {

    const newUser = ["333", "John", "Doe", "@Doe", "doe@gmail.com", "22"];
    cy.visit('/pages/tables/smart-table');

    cy.get('[placeholder="ID"]').type(12);
    cy.get('.nb-edit').click();
    cy.wait(1000);

    cy.get('[placeholder="ID"]').last().clear().type(newUser[0]);
    cy.get('[placeholder="First Name"]').last().clear().type(newUser[1]);
    cy.get('[placeholder="Last Name"]').last().clear().type(newUser[2]);
    cy.get('[placeholder="Username"]').last().clear().type(newUser[3]);
    cy.get('[placeholder="E-mail"]').last().clear().type(newUser[4]);
    cy.get('[placeholder="Age"]').last().clear().type(newUser[5]);
    cy.get('.nb-checkmark').click();
    cy.get("tbody tr td").find("[ng-reflect-ng-switch]").each(($el) => {
      expect($el.text()).to.be.oneOf(newUser)
    });
  });
});
