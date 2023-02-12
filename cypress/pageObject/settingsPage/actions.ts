class SettingsPageActions {
  clickOnSettings() {
    cy.get(".nav").children().as("menu").contains("Settings").click();
    //return cy.get("@menu").contains("Settings").click();
    return this;
  }

  clickOnLogoutButton() {
    cy.get(".btn").contains("Or click here to logout.").click();
    return this;
  }

  changeUsernameField() {
    cy.get('input[type="text"]').type("SHAHD");
    return this;
  }

  clickUpdateSettingsButton() {
    cy.get(".btn").contains("Update Settings").click();
    return this;
  }
}

export default SettingsPageActions;
