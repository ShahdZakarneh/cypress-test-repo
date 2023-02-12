import RegisterPageActions from "cypress/pageObject/registerPage/actions";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SettingsPageActions from "cypress/pageObject/settingsPage/actions";
import SettingsPageAssertions from "cypress/pageObject/settingsPage/assertions";
import RegisterPageAssertions from "cypress/pageObject/registerPage/assertions";

const registerPageActions = new RegisterPageActions();
const registerPageAssertions = new RegisterPageAssertions();
const settingsPageActions = new SettingsPageActions();
const settingsPageAssertions = new SettingsPageAssertions();

Given("User Open conduit Sign up page", () => {
  registerPageActions.openSignUpPage();
});

Then("URL should contains register", () => {
  registerPageAssertions.registerInUrl();
});

When(
  "User type {string}, {string} and {string}",
  (username: string, email: string, password: string) => {
    registerPageActions
      .typeInUsernameInputField(username)
      .typeInEmailInputField(email)
      .typeInPasswordInputField(password);
  }
);

When("User click in Sign in button", () => {
  registerPageActions.ClickSignInButton();
});

Then("Home Page will be open", () => {
  registerPageAssertions.succssesRegister();
});

When("User open Setting page", () => {
  settingsPageActions.clickOnSettings();
});

When("User change to new username", () => {
  settingsPageActions.changeUsernameField();
});

When("User click on Update Settings", () => {
  settingsPageActions.clickUpdateSettingsButton();
});

Then("The new update should appear", () => {
  settingsPageAssertions.nameChanged();
});
