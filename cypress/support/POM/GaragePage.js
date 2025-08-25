class GaragePage {
    get signInButton() {
        return cy.get('button.btn.btn-outline-white.header_signin');
    }

    get emailInput() {
        return cy.get('#signinEmail');
    }

    get passwordInput() {
        return cy.get('#signinPassword');
    }

    get loginSubmitButton() {
        return cy.get('button.btn.btn-primary');
    }

    get addCarButton() {
         return cy.contains('button', 'Add');
    }

    get carModelSelect() {
        return cy.get('select#addCarModel');
    }

    get saveCarButton() {
        return cy.get('button.btn.btn-primary[type="button"]');
    }

     visit(site = 1) {
        if (site === 1) {
            cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/panel/garage')
        } else if (site === 2) {
            cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/panel/garage')
        }
        return this;
  }

   login(email = 'naste38+1@gmail.com', password = 'Pass112233') {
        this.signInButton.click()
        this.emailInput.should('be.visible').type(email)
        this.passwordInput.type(password)
        this.loginSubmitButton.should('be.visible').click();
        return this;
    }
    addCar(brand = "Audi", model = "A6", year = "2020", mileage = "1000") {
        this.addCarButton.click()
        this.carBrandSelect.select(brand);
        this.carModelSelect.select(model);
        this.carMileageInput.type(mileage);
        this.saveCarButton.should('be.visible').click();
        return this;
    }
}

export default new GaragePage();