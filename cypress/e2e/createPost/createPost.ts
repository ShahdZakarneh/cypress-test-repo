import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import EditorPageActions from "cypress/pageObject/editorPage/actions";
import LoginPageActions from "cypress/pageObject/loginPage/actions";
import ProfilePageActions from "cypress/pageObject/profiePage/actions";
import LoginPageAssertion from "cypress/pageObject/loginPage/assertions";

const loginPageActions = new LoginPageActions();
const loginPageAssertion = new LoginPageAssertion();
const editorPageActions = new EditorPageActions();
const profilePageActions = new ProfilePageActions();

const url = "https://react-redux.realworld.io/#/login";

Given("I open Conduit Login page", () => {
  cy.visit(url);
});

When("I type email and password", () => {
  //cy.get('input[type="email"]').type('shahd.zakarneh98@gmail.com')
  //cy.get('input[type="password"]').type('1234567890Shahd')

  loginPageActions.typeInEmailInputField("shahd.zakarneh98@gmail.com");
  loginPageActions.typeInPasswordInputField("1234567890Shahd");
});

When("Click on Sign in button", () => {
  //cy.get('.btn').contains('Sign in').should('be.visible').click()
  loginPageActions.clickOnSignInButton();
});

Then("Your Feed should be shown", () => {
  //cy.contains("Your Feed").should("be.visible");
  loginPageAssertion.urlassertion();
});

When("I click on New Post", () => {
  //cy.get('.nav-link').contains('New Post').click()
  editorPageActions.newpostButton();
});

Then("URL assertion", () => {
  cy.url().should("include", "#/editor");
});

When("Type Article Title", () => {
  //cy.get('input[placeholder="Article Title"]').type('Test')
  editorPageActions.articletitle("Shahd");
});

When("Type What's this article about?", () => {
  //cy.get('input[placeholder="What\'s this article about?"]').type('Test2')
  editorPageActions.aboutarticle("Test");
});

When("Type Write your article", () => {
  //cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Shahd!')
  editorPageActions.writearticle("Hello World");
});

When("Click on Publish Article", () => {
  //cy.get('.btn').contains('Publish Article').click()
  editorPageActions.publisharticleButton();
});

Then("Second URL assertion", () => {
  cy.url().should("include", "#/article/");
});

When("I click on my profile", () => {
  //cy.get('.nav-link').contains('Shahd Majed').click()
  profilePageActions.myprofileButton();
});

Then("Third assertion", () => {
  cy.contains("My Articles").should("be.visible");
});

When("Click on favorite icon", () => {
  //cy.get('.ion-heart').first().click()
  profilePageActions.favoriteIcon();
});

Then("Fourth assertion", () => {
  cy.contains("Favorited Articles").click();
  cy.url().should("include", "favorites");
});

When("Unclick on favorite icon", () => {
  //cy.get('.ion-heart').first().click()
  profilePageActions.favoriteIcon();
});

Then("assertion", () => {
  //cy.go('back')
  cy.reload();
  cy.contains("No articles are here... yet.").should("be.visible");
});
