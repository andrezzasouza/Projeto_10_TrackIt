describe('Habits', () => {
  it('Should correctly create an habit', () => {
    cy.login('exampletest@test.com', '123456');
    cy.wait(5000);
    cy.url().should('equal', 'http://localhost:3000/hoje');

    cy.contains('Hábitos').click();
    cy.wait(3000);
    cy.url().should('equal', 'http://localhost:3000/habitos');

    cy.get('#add').click();
    cy.get('input[placeholder="nome do hábito"]').type('Caminhar');
    cy.get('button[type=button]').eq(0).click();
    cy.get('button[type=button]').eq(1).click();
    cy.get('button[type=button]').eq(2).click();
    cy.get('button[type=button]').eq(3).click();
    cy.get('button[type=button]').eq(4).click();
    cy.get('button[type=button]').eq(5).click();
    cy.get('button[type=button]').eq(6).click();
    cy.contains('Salvar').click();

    cy.contains('Caminhar').should('be.visible');
  });
});
