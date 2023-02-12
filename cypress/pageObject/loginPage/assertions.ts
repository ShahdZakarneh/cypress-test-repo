class LoginPageAssertion {
  yourFeedIsVisible() {
    cy.contains("Your Feed").should("be.visible");
    return this;
  }
}

export default LoginPageAssertion;
