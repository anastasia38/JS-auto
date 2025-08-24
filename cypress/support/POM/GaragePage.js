class Garage {
    addCar(brand = "Audi", model = "A6", year = "2020", mileage = "1000") {
        cy.contains("Add car").click();
        cy.get("select#addCarBrand").select(brand);
        cy.get("select#addCarModel").select(model);
        cy.get("input#addCarMileage").type(mileage);
        cy.get("button[type=submit]").click();
    }
}

export default new GaragePage();