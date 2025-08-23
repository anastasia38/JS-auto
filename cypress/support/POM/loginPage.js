class LoginPage {
    visit() {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
    }

    openLoginForm() {
        cy.get('button.btn.btn-outline-white.header_signin')
        .click()
    }

    fillEmail(email) {
         cy.get('input[name="email"]')
        .type(email)
    }

    fillPassword(password) {
        cy.get('input[name="password"]')
        .type(password, { sensitive: true })
    }

    submitLogin(login) {
        cy.contains('button', 'Login').click()
        //cy.get('button.btn.btn-primary[type="button"]').click()
    }

    login(email, password) {
        this.visit()
        this.openLoginForm()
        this.fillEmail(email)
        this.fillPassword(password)
        this.submitLogin()
    }
}

export default new LoginPage()