import "@testing-library/cypress/add-commands";
import "cypress-file-upload";
import "cypress-wait-until";

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<null>;
    }
  }
}

Cypress.Commands.add("login", () => {
  cy.request("POST", "https://api.realworld.io/api/users/login", {
    user: { email: "shahd@admin.com", password: "12345" },
  }).then((response) => {
    localStorage.setItem("jwt", response.body.user.token);
  });
  // cy.visit("/#/login");
  // cy.get('input[type="email"]').type("shahd@admin.com");
  // cy.get('input[type="password"]').type("12345");
  // cy.get(".btn").contains("Sign in").click();
});
