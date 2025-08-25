class ExpensesPage {
visit(site = 1) {
    if (site === 1) {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
  } else if (site === 2) {
    cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/')
  }
}


    addExpense(mileage = 3000, liters = 50, total = 500) {
        cy.contains("Fuel expenses").click();
        cy.contains("Add an expense");
        cy.get("input#addExpenseMileage").type(mileage);
        cy.get("input#addExpenseLiters").type(liters);
        cy.get("input#addExpenseTotalCost").type(total);
        cy.get("button[type=submit]").click();
    }
}

export default new ExpensesPage();
