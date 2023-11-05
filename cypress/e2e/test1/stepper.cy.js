describe("Test page /pages/layout/stepper", () => {

  it("Check the text on every page.", () => {

    cy.visit("/pages/layout/stepper")

    const totalSteps = 4;

    for (let stepNumber = 1; stepNumber <= totalSteps; stepNumber++) {
      cy.xpath('//div[contains(@class, \'step-content\')]/h3').eq(0)
        .should('contain.text', `Step content #${stepNumber}`)

      if (stepNumber < totalSteps) {
        cy.xpath('//div[contains(@class, \'step-content\')]/button').eq(1).click();
      }
    }
  });
});
