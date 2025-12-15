import ToDoItem from "../../src/components/ToDoItem";

describe("ToDoItem", () => {
  it("renderar texten", () => {
    cy.mount(
      <ToDoItem
        id={1}
        text="handla"
        completed={false}
        toggleComplete={() => {}}
      />
    );

    cy.contains("handla");
  });
});
