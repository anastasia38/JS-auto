class ExpensesPage {
    addExpense(mileage = 3000, liters = 50, total = 500) {
        cy.contains("Fuel expenses").click();
        cy.contains("Add an expense").click();
        cy.get("input#addExpenseMileage").type(mileage);
        cy.get("input#addExpenseLiters").type(liters);
        cy.get("input#addExpenseTotalCost").type(total);
        cy.get("button[type=submit]").click();
    }
}

export default new ExpensesPage();
