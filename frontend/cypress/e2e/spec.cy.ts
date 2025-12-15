describe('Todo Sida', () => {
  beforeEach(() => { cy.visit('http://localhost:5173/') })

  it('Kan inte lägga till samma todo två gånger', () => {
    cy.get("input").type("Köpa kött")
    cy.contains("Lägg Till").click()

    cy.get("input").type("Köpa kött")
    cy.contains("Lägg Till").click()
    cy.on("window:alert", (text) => {
      expect(text).to.contain("Todo finns redan!")
    })
  })

  it('Lägger till och tar bort todo', () => {
    cy.get("input").type("Köpa mjölk")
    cy.contains("Lägg Till").click()

    cy.contains("Köpa mjölk").parent().find("button").click()

    cy.contains("Köpa mjölk").should("not.exist")
  })
})