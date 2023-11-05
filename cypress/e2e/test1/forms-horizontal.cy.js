describe('Check login in Horizontal form', ()=>{
  context('Check that all fields can be fill and can click button "Login"', ()=>{

    it ('All fields are available and button "Login" is clickable', ()=>{
      cy.visit('pages/forms/layouts');

      cy.get('[id=inputEmail3]').clear().type('email@gmail.com')

      cy.get('[id=inputPassword3]').clear().type('somePassword')

      cy.xpath('//span[contains(@class, \'checkbox\')]').last().click()

      cy.get('.appearance-filled').last().click()
    });
  });
});


