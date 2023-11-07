describe('Check form "Enter name"', ()=>{
  context('page modal-overlays/dialog', ()=>{

    it ('Check form "Enter name" on page modal-overlays/dialog', ()=>{
      cy.visit('pages/modal-overlays/dialog');

cy.xpath('//button[text()[contains(.,\'Enter Name\')]]').click()

      cy.get('nb-dialog-container').should('be.visible')

      cy.xpath('//nb-card-header [text()[contains(.,\'Enter your name\')]]')
        .should('contain.text', 'Enter your name')
        .should('be.visible')

      cy.xpath('//input[contains(@class, \'size-medium shape-rectangle\')]')
        .should('be.visible')

      cy.xpath('//button[contains(@class, \'cancel\')]')
        .should('be.visible')

      cy.xpath('//button[contains(@class, \'success\')]')
        .should('be.visible')

    });
  });
});
