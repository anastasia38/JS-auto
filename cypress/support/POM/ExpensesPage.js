class ExpensesPage {
  visit () {
    cy.visit("/panel/expenses");
    return this;
  }

  // cypress visit не над тут прописывать 2 сайта. в конфиг файле у меня два файла прописано на сайпресс конфиг куаавто. они и будут подтягиваться.
  //тут оставить просто cy.visit пустым

  get fuelExpensesTab() {
    return cy.contains("Fuel expenses");
  }

  get addExpenseBtn() {
    return cy.contains("button", "Add an expense");
  }

  get mileageInput() {
    return cy.get("#addExpenseMileage");
  }

  get litersInput() {
    return cy.get("#addExpenseLiters");
  }

  get totalCostInput() {
    return cy.get("#addExpenseTotalCost");
  }

  get dateInput() {
    return cy.get("#addExpenseDate");
  }

  get saveExpenseBtn() {
  return cy.contains('button.btn.btn-primary[type="button"]', "Add", { timeout: 10000 });
}



  openTab() {
    this.fuelExpensesTab.should("be.visible").click();
    return this;
  }

  openAddExpenseModal() {
    this.addExpenseBtn.should("be.visible").click();
    return this;
  }

  addExpense(mileage = mileage, liters, total) {
    this.openTab(); // Открываем вкладку "Fuel Expenses"
    this.openAddExpenseModal(); // Открываем модалку добавления расхода
    this.mileageInput.clear().type(mileage);
    this.litersInput.clear().type(liters);
    this.totalCostInput.clear().type(total);

    this.saveExpenseBtn.click();

    return this;
  }
}

export default new ExpensesPage();
