class GaragePage {
  visit() {
    cy.visit("/panel/garage");
    return this;
  }
  get signInButton() {
    return cy.get("button").contains("Sign In");
  }

  get emailInput() {
    return cy.get("#signinEmail");
  }

  get passwordInput() {
    return cy.get("#signinPassword");
  }

  get loginSubmitButton() {
    return cy.get('button.btn.btn-primary[type="button"]');
  }

  get addCarButton() {
    return cy.contains("Add car", { timeout: 10000 });
  }

  get carBrandSelect() {
    return cy.get("select#addCarBrand");
  }

  get carModelSelect() {
    return cy.get("select#addCarModel");
  }

  get carMileageInput() {
    return cy.get("input#addCarMileage");
  }

  get saveCarButton() {
    return cy.contains('button.btn.btn-primary[type="button"]', "Add", {
      timeout: 10000,
    });
  }

  // visit(site = 1) {
  //   if (site === 1) {
  //     cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/panel/garage");
  //   } else if (site === 2) {
  //     cy.visit(
  //       "https://guest:welcome2qauto@qauto2.forstudy.space/panel/garage",
  //       {
  //         timeout: 12000,
  //       },
  //     );
  //   }
  //   return this;
  // }

  login(email = "naste38+1@gmail.com", password = "Pass112233") {
    this.signInButton.click();
    this.emailInput.should("be.visible").type(email);
    this.passwordInput.type(password);
    this.loginSubmitButton.should("be.visible").click();
    return this;
  }
  addCar(
    brand = "Audi",
    model = "A6",
    year = "2020",
    expenseMileage = expenseMileage,
  ) {
    this.addCarButton.click();
    this.carBrandSelect.select(brand);
    this.carModelSelect.select(model);
    this.carMileageInput.type(expenseMileage);
    this.saveCarButton.click();
    return this;
  }

  logout() {
    cy.get("#userNavDropdown").should("be.visible").click();
    cy.get("a.dropdown-item.btn.btn-link.user-nav_link")
      .contains(/log out/i)
      .should("be.visible");
    //click();

    cy.clearCookies();
    cy.clearLocalStorage();

    return this;
  }
}

export default new GaragePage();
