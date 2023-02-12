class RegisterPageActions {
  openSignUpPage() {
    cy.visit("/#/register");
    return this;
  }

  typeInUsernameInputField(username: string) {
    cy.get('input[type="text"]').type(username);
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

  ClickSignInButton() {
    cy.get(".btn").should("contain", "Sign in").click();
    return this;
  }
}

export default RegisterPageActions;
