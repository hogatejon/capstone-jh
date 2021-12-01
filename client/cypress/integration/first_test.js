describe('My First Test', () => {
  it('visit my site and go to register page', () => {
    cy.visit('login');
    cy.get('button').contains('Register').click();
  });

  it('should load register page', () => {
    cy.get('header').contains('Register');
    cy.url().should('include', '/login/register');
  });

  it('should verify error field tooltips', () => {
    cy.get('[type="submit"]').contains('Register').click();
    cy.get('.ng-submitted > :nth-child(3)').contains('Provide a Name');
    cy.get('.ng-submitted > :nth-child(6)').contains('Provide a Username');
    cy.get('.ng-submitted > :nth-child(9)').contains('Provide a Password');
  });

  it('should type into fields and verify errors are gone', () => {
    cy.get('[formcontrolname="name"]')
      .type('Jonathan Hogate')
      .should('have.value', 'Jonathan Hogate');
  });

  it('should login without UI', () => {
    const username = 'farmgirl';
    const password = 'farmgirl';

    cy.request('POST', 'http://localhost:8082/api/login', {
      username,
      password
    });
  });

  it('should be able to go to the home page', () => {
    cy.visit('/about');
  });
});
