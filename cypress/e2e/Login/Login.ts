import { Then, When, Given } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://react-redux.realworld.io/#/login";

Given("I open Conduit Login page", () => {
  //cy.visit("#/login")
  cy.login();
  cy.visit("/");
});

//When('I type the email and password', () => {
//cy.get('input[type="email"]').type('shahd.zakarneh98@gmail.com')
//cy.get('input[type="password"]').type('1234567890Shahd')
//}),

When("click on Sign in button", () => {
  cy.get(".btn").contains("Sign in").should("be.visible").click();
});

Then("Your Feed should be shown", () => {
  cy.contains("Your Feed").should("be.visible");
});
