import LoginPage from '../support/POM/loginPage'

describe('Login tests', () => {

beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    LoginPage.visit();
});


    it('Should login with valid credentials', () => {
        LoginPage.login('naste38+1@gmail.com', 'Pass112233')
        cy.url().should('include', '/panel/garage')
    })
});

describe('Login with invalid data', () => {

it('Should show error with invalid credentials', () => {
    LoginPage.login('naste38+1@gmail.com', 'Pass112234')
    cy.contains('Wrong email or password');
  });
});