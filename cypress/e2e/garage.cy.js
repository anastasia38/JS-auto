import ExpensePage from "../support/POM/ExpensesPage";
import GaragePage from "../support/POM/GaragePage";

describe("Garage Tests site 1", () => {
  beforeEach(() => {
    //cy.clearCookies();
    //cy.clearLocalStorage();

    GaragePage.visit().login("naste38+1@gmail.com", "Pass112233");
    cy.url().should("include", "/panel/garage");
  });

  // it("shoubld login successfully on site 1", () => {
  //   cy.url().should("include", "/panel/garage");
  //   cy.get(".panel-page", { timeout: 10000 }).should("be.visible");
  //   GaragePage.signInButton.should("not.exist");
  // });

  it("should add car + expense on site 1", () => {
    var mileage = 15000;
    var min = 1;
    var max = 50000;
    var expenseMileage =
      Math.floor(Math.random() * (max - min + 1)) + min + mileage;

    GaragePage.addCar("Audi", "A6", "2020", mileage);
    ExpensePage.visit();
    ExpensePage.addExpense(expenseMileage, 50, 120);

    cy.contains("Audi").should("be.visible");
    cy.contains("A6").should("be.visible");
    cy.contains(expenseMileage).should("be.visible");
    cy.contains("50").should("be.visible");
    cy.contains("120").should("be.visible");
  });

  it("should logout from the site 1", () => {
  //  GaragePage.visit().login("naste38+1@gmail.com", "Pass112233");
    cy.url().should("include", "/panel/garage");
    cy.get(".panel-page", { timeout: 10000 }).should("be.visible");
    GaragePage.signInButton.should("not.exist");

    cy.get("#userNavDropdown", { timeout: 10000 }).should("be.visible").click();
    cy.contains(".dropdown-item.btn.btn-link.user-nav_link", "Logout", {
      timeout: 10000,
    })
      .should("be.visible")
      .click();
  });
});


describe("Garage Tests site 2", () => {
  beforeEach(() => {
    GaragePage.visit().login("naste38+1@gmail.com", "Pass112233");
     cy.url(2).should("include", "/panel/garage");
  });


  // it("shoubld login successfully on site 2", () => {
  //   cy.url(2).should("include", "/panel/garage");
  //   cy.get(".panel-page", { timeout: 10000 }).should("be.visible");
  //   GaragePage.signInButton.should("not.exist");
  // });

  it("should add car + expense on site 2", () => {
    var mileage = 15000;
    var min = 1;
    var max = 50000;
    var expenseMileage =
      Math.floor(Math.random() * (max - min + 1)) + min + mileage;
    GaragePage.addCar("Audi", "A6", "2020", mileage);
    ExpensePage.visit(2);
    ExpensePage.addExpense(expenseMileage, 50, 120);
    cy.contains("Audi").should("be.visible");
    cy.contains("A6").should("be.visible");
    cy.contains(expenseMileage).should("be.visible");
    cy.contains("50").should("be.visible");
    cy.contains("120").should("be.visible");
  });
});
