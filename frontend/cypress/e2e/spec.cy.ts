describe('Todo Sida', () => {
  it('Lägger till och tar bort todo', () => {
    cy.visit('http://localhost:5173/')

    cy.get("input").type("Köpa mjölk")
    cy.contains("Lägg till").click()

    cy.contains("Köpa mjölk").find("button").click()

    cy.contains("Köpa mjölk").should("not.exist")
  })
})