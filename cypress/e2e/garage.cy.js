import GaragePage from "../support/POM/GaragePage";
import ExpensePage from "../support/POM/ExpensesPage";

describe("Garage tests", () => {
    it("should login and run all checks on two cites" , () => {
        GaragePage.visit(1)
        GaragePage.login('naste38+1@gmail.com', 'Pass112233')
        GaragePage.addCar("Audi", "A6", "2020", "15000")
        ExpensePage.visit(1)
        ExpensePage.addExpense(1600, 50, 120)

        GaragePage.visit(2)
        GaragePage.login('naste38+1@gmail.com', 'Pass112233')
        ExpensePage.visit(2)
        GaragePage.addCar("Audi", "A6", "2020", "15000")
        ExpensePage.addExpense(1600, 50, 120)
    })
})

//it("should add car and fuel expense", () => {
  //  GaragePage.addCar("Audi", "A6", "2020", "15000");
    //ExpensePage.addExpense(16000, 50, 120);
 //});

