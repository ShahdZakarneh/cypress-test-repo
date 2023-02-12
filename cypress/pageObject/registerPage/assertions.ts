class RegisterPageAssertions {
  registerInUrl() {
    cy.hash().should("include", "register");
    return this;
  }

  succssesRegister() {
    cy.get(".nav-link").contains("Your Feed").should("be.visible").click();
    return this;
  }
}

export default RegisterPageAssertions;
