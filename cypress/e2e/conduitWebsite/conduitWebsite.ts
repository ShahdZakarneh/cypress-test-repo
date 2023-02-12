import {
  Given,
  Then,
  When,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
import EditorPageActions from "cypress/pageObject/editorPage/actions";
import EditorPageAssertion from "cypress/pageObject/editorPage/assertion";
import LoginPageActions from "cypress/pageObject/loginPage/actions";
import LoginPageAssertion from "cypress/pageObject/loginPage/assertions";
import ProfilePageActions from "cypress/pageObject/profiePage/actions";
import ProfilePageAssertion from "cypress/pageObject/profiePage/assertion";
import SettingsPageActions from "cypress/pageObject/settingsPage/actions";
import SettingsPageAssertions from "cypress/pageObject/settingsPage/assertions";

const loginPageActions = new LoginPageActions();
const loginPageAssertion = new LoginPageAssertion();
const editorPageActions = new EditorPageActions();
const editorPageAssertion = new EditorPageAssertion();
const profilePageActions = new ProfilePageActions();
const profilePageAssertion = new ProfilePageAssertion();
const settingsPageActions = new SettingsPageActions();
const settingsPageAssertions = new SettingsPageAssertions();

Given("User open Conduit Login page", () => {
  loginPageActions.openLoginPage();
});

When("User type email and password", () => {
  loginPageActions.typeInEmailInputField("shahd@admin.com");
  loginPageActions.typeInPasswordInputField("12345");
});

When("User Click on Sign in button", () => {
  loginPageActions.clickOnSignInButton();
});

Then("Your Feed should be shown", () => {
  loginPageAssertion.yourFeedIsVisible();
});

When("User click on New Post", () => {
  editorPageActions.newpostButton();
});

When("User Type Article Title", () => {
  editorPageActions.articletitle("Shahd2");
});

When("User Type What's this article about?", () => {
  editorPageActions.aboutarticle("Test");
});

When("User Type Write your article", () => {
  editorPageActions.writearticle("Hello World");
});

When("User Click on Publish Article", () => {
  editorPageActions.publisharticleButton();
});

Then("Url should contains article", () => {
  editorPageAssertion.articleInUrl();
});

When("User click on profile page", () => {
  profilePageActions.myprofileButton();
});

Then("User have to see My Articles in profile page", () => {
  profilePageAssertion.myArticleIsVisible();
});

When("User Click on favorite icon", () => {
  profilePageActions.favoriteIcon();
});

When("User open Faviorited Article page", () => {
  profilePageActions.clickOnFavArticleButton();
});

Then("Url should contains favorite", () => {
  profilePageAssertion.favoritesInUrl();
});

When("User Unclick on favorite icon", () => {
  profilePageActions.favoriteIcon();
});

Then("No articles are here... yet. should appear on the page", () => {
  cy.reload();
  profilePageAssertion.noArticleIsVisible();
});

When("User open Profile page", () => {
  profilePageActions.myprofileButton();
});

When("Click an article to delete", () => {
  profilePageActions.clickArticle();
});

Then("Clicked article should be open", () => {
  profilePageAssertion.articleAsertion();
});

When("Click Delete Article button", () => {
  profilePageActions.deleteArticleButton();
});

Then("No articles are here... yet. should be shown", () => {
  profilePageAssertion.deleteAssertion();
});

When("User open Settings Page", () => {
  settingsPageActions.clickOnSettings();
});

Then("Url should contains settings", () => {
  settingsPageAssertions.settingsInUrl();
});

When("User click on Logout button", () => {
  settingsPageActions.clickOnLogoutButton();
});

Then("Sign In option should appear", () => {
  settingsPageAssertions.signinOption();
});
