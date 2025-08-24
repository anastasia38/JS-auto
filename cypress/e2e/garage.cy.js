import GaragePage from "../support/POM/GaragePage";
import ExpensePage from "../support/POM/ExpensesPage";

describe("Garage tests", () => {
    beforeEach(() => {
        cy.login(Cypress.env("email"), Cypress.env("password"));
    });

it("should add car and fuel expense", () => {
    GaragePage.addCar("Audi", "A6", "2020", "15000");
    ExpensePage.addExpense(16000, 50, 120);
 });
});
