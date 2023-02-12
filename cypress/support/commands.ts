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
  cy.request("POST", GetAPIUrlPrefix("users/login"), {
    user: { email: "shahd@admin.com", password: "12345" },
  }).then((response) => {
    localStorage.setItem("jwt", response.body.user.token);
  });
});

export const GetAPIUrlPrefix = (url: string) => {
  return `https://api.realworld.io/api/${url}`;
};
