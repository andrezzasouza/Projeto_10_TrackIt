describe('Delete habits', () => {
  it('Should correctly delete an habit', () => {
    cy.login('exampletest@test.com', '123456');
    cy.wait(5000);
    cy.url().should('equal', 'http://localhost:3000/hoje');

    cy.contains('Hábitos').click();
    cy.wait(3000);
    cy.url().should('equal', 'http://localhost:3000/habitos');

    cy.get('div').contains('Caminhar').next('#trash').click();
    cy.on('window:confirm', (text) => {
      expect(text).to.contains('Você realmente quer deletar esse hábito?');
      return true;
    });
    cy.wait(5000);
    cy.contains('Caminhar').should('not.exist');
  });
});
