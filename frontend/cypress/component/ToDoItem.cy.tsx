import ToDoItem from "../../src/components/ToDoItem";

describe("ToDoItem", () => {
  it("renderar texten", () => {
    cy.mount(
      <ToDoItem
        id={1}
        text="handla"
        completed={false}
        toggleComplete={() => {}}
        removeToDo={() => {}}
      />
    );

    cy.contains("handla");
  });

  it("visar överstruken text när completed är true", () => {
  cy.mount(
    <ToDoItem
      id={1}
      text="träna"
      completed={true}
      toggleComplete={() => {}}
      removeToDo={() => {}}
    />
  );

  cy.contains("träna")
    .parent()
    .should("have.css", "text-decoration-line", "line-through");
});

it("kan rendera flera todos", () => {
  cy.mount(
    <ul>
      <ToDoItem
        id={1}
        text="torka"
        completed={false}
        toggleComplete={() => {}}
        removeToDo={() => {}}
      />
      <ToDoItem
        id={2}
        text="städa"
        completed={true}
        toggleComplete={() => {}}
        removeToDo={() => {}}
      />
    </ul>
  );

  cy.contains("torka");
  cy.contains("städa")
});


});
