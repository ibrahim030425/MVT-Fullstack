import ToDoList from "../../src/components/ToDoItem";

describe('ToDoItem.cy.tsx', () => {
  it('playground', () => {
    cy.mount(<ToDoList
    id = {1}
    text = "handla"/>)
    cy.contains("handla")
  })
})
