class LoginPageActions {
  openLoginPage() {
    cy.visit("#/login");
    return this;
  }

  typeInEmailInputField(email: string) {
    cy.get('input[type="email"]').type(email);
    return this;
  }

  typeInPasswordInputField(password: string) {
    cy.get('input[type="password"]').type(password);
    return this;
  }

  clickOnSignInButton() {
    cy.contains("input", "Sign in").click();
    return this;
  }
}

export default LoginPageActions;
