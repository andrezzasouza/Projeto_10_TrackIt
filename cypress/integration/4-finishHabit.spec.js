describe('Finish habits', () => {
  it('Should correctly mark habit as done', () => {
    cy.login('exampletest@test.com', '123456');
    cy.wait(5000);

    cy.url().should('equal', 'http://localhost:3000/hoje');
    cy.get('div').contains('Caminhar').parent('div').siblings('#done').click();
  });
});
