class LoginPageAssertion {
  yourFeedIsVisible() {
    return cy.contains("Your Feed").should("be.visible");
  }
}

export default LoginPageAssertion;
