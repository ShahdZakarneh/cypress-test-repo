class ProfilePageActions {
  myprofileButton() {
    return cy.get(".nav-link").contains("Shahd Majed").click();
  }

  favoriteArticlePage() {
    cy.contains("Favorited Articles").click();
  }

  favoriteIcon() {
    return cy.get(".ion-heart").first().click();
  }
}

export default ProfilePageActions;
