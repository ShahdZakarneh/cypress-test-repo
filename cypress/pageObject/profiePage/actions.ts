class ProfilePageActions {
  myprofileButton() {
    return cy.get(".nav-link").contains("Shahd Majed").click();
  }

  favoriteIcon() {
    return cy.get(".ion-heart").first().click();
  }
}

export default ProfilePageActions;
