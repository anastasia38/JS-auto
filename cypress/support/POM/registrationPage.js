import loginPage from './loginPage'

class RegistrationPage {
  
  visit() {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
  }

 openRegistrationForm() {
    // спочатку відкриваємо login form
    loginPage.openLoginForm()
    cy.contains('button', 'Registration')
    .click()
  }


  getNameField() {
     return cy.get('input[name="name"]')
  }

  getLastNameField() {
    return cy.get('input[name="lastName"]')
  }

  getEmailField() {
    return cy.get('input[name="email"]')
  }

  getPasswordField() {
     return cy.get('input[name="password"]')
  }

  //fillPassword(password) {
    // cy.get('input[name="password"]')
      //  .type(password, { sensitive: true })
//}


  getReEnterPasswordField() {
     return cy.get('input[name="repeatPassword"]')
  }

  submitRegistration() {
     cy.contains('button.btn.btn-primary[type="button"]', 'Register').click()
  }

  getErrorMessage() {
    return cy.get('.error-message')
  }
}

export default new RegistrationPage()