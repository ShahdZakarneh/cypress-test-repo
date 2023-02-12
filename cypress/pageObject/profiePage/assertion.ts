class ProfilePageAssertion {
  myArticleIsVisible() {
    cy.contains("My Articles").should("be.visible");
    return this;
  }

  favoritesInUrl() {
    cy.url().should("include", "favorites");
    return this;
  }

  noArticleIsVisible() {
    cy.contains("No articles are here... yet.").should("be.visible");
    return this;
  }

  articleAsertion() {
    cy.get(".row").contains("Hello World").should("be.visible");
    return this;
  }

  deleteAssertion() {
    cy.get(".article-preview")
      .contains("No articles are here... yet.")
      .should("be.visible");
    return this;
  }
}

export default ProfilePageAssertion;
