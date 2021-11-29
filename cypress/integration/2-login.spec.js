describe('Login', () => {
  it('Should correctly log into the app', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input[placeholder=email]').type('exampletest@test.com');
    cy.get('input[placeholder=senha]').type('123456');
    cy.get('button[type=submit]').click();
    cy.wait(5000);
    cy.url().should('equal', 'http://localhost:3000/hoje');
  });
});
