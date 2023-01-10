describe("API Testing", () => {
  it("GET/read", () => {
    cy.request("GET", "https://dummy.restapiexample.com/api/v1/employees").then(
      (response) => {
        expect(response).to.have.property("status", 200);
        expect(response.body).to.not.be.null;
      }
    );
  });

  it("POST/create", () => {
    const item = { name: "test", salary: "123", age: "23" };
    cy.request("POST", "https://dummy.restapiexample.com/api/v1/create", item);
  });

  it("PUT/update", () => {
    const item = { name: "test" };
    cy.request("PUT", "https://dummy.restapiexample.com/api/v1/update/1", item);
  });
});
