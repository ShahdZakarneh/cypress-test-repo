class ProfilePageAssertion {
  myArticleIsVisible() {
    cy.contains("My Articles").should("be.visible");
  }
  favoritesInUrl() {
    cy.url().should("include", "favorites");
  }

  noArticleIsVisible() {
    cy.contains("No articles are here... yet.").should("be.visible");
  }
}

export default ProfilePageAssertion;
