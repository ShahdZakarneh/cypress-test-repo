class LoginPageActions {
  typeInEmailInputField(email: string) {
    return cy.get('input[type="email"]').type(email);
  }

  typeInPasswordInputField(password: string) {
    return cy.get('input[type="password"]').type(password);
  }

  clickOnSignInButton() {
    return cy.contains("input", "Sign in").click();
  }
}

export default LoginPageActions;
