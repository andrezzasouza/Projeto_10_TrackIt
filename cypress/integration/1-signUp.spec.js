import faker from 'faker';

describe('SignUp', () => {
  it('Should create new account successfully', () => {
    cy.visit('http://localhost:3000/cadastro');
    cy.get('input[placeholder=email]').type(faker.internet.email());
    cy.get('input[placeholder=nome]').type(faker.name.findName());
    cy.get('input[placeholder=senha]').type(faker.internet.password());
    cy.get('input[placeholder=foto]').type(faker.image.imageUrl());

    cy.get('button[type=submit]').click();
    cy.wait(5000);
    cy.url().should('equal', 'http://localhost:3000/');
  });
});
