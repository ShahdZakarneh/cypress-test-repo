class SettingsPageAssertions {
  settingsInUrl() {
    cy.hash().should("include", "#/settings");
    return this;
  }

  signinOption() {
    cy.get(".navbar").contains("Sign in").should("be.visible");
    return this;
  }

  nameChanged() {
    cy.get(".nav").children().as("menu");
    cy.get("@menu").contains("SHAHD").should("be.visible");
    return this;
  }
}

export default SettingsPageAssertions;
