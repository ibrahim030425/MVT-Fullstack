describe('Todo Sida', () => {
  beforeEach(() => { cy.visit('http://localhost:5173/') })

 describe("Validering", () => {
     it("kan inte lägga till tom todo", () => {
      cy.get("input").type("   ");
      cy.contains("Lägg Till").click();
      cy.get("li").should("not.exist");
});
    it('Kan inte lägga till samma todo två gånger', () => {
    cy.get("input").type("Köpa kött")
    cy.contains("Lägg Till").click()

    cy.get("input").type("Köpa kött")
    cy.contains("Lägg Till").click()
    cy.on("window:alert", (text) => {
      expect(text).to.contain("Todo finns redan!")
    })
  })

  });
  describe("Todo-hantering", () => {
    it('Lägger till och tar bort todo', () => {
    cy.get("input").type("Köpa mjölk")
    cy.contains("Lägg Till").click()

    cy.contains("Köpa mjölk").parent().find("button").click()

    cy.contains("Köpa mjölk").should("not.exist")
  })
   it("uppdateras när todos togglas", () => {
    cy.get('[data-cy="completed-counter"]')
      .should("contain.text", "0 av");

    cy.get("input").type("Köpa mjölk");
    cy.contains("Lägg Till").click();

    cy.get('[data-cy="completed-counter"]')
      .should("contain.text", "0 av 2");

    cy.contains("Köpa mjölk").click();

    cy.get('[data-cy="completed-counter"]')
      .should("contain.text", "1 av 2");
  });
  });


  describe("Beteenden", () => {
    it("rensar input efter att todo lagts till", () => {
  cy.get("input").type("Diska");
  cy.contains("Lägg Till").click();

  cy.get("input").should("have.value", "");
});
   it("behåller todos efter sidladdning", () => {
  cy.get("input").type("Träna");
  cy.contains("Lägg Till").click();

  cy.reload();

  cy.contains("Träna").should("exist");
});

  });
});
