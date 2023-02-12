class ProfilePageActions {
  myprofileButton() {
    cy.get(".nav-link").contains("shahdAdmin").click();
    return this;
  }

  favoriteIcon() {
    cy.get(".ion-heart").first().click();
    return this;
  }

  clickOnFavArticleButton() {
    cy.contains("Favorited Articles").should("be.visible").click();
    return this;
  }

  clickArticle() {
    cy.get(".preview-link").first().click();
    return this;
  }

  deleteArticleButton() {
    cy.get(".btn").contains("Delete Article").click();
    return this;
  }
}

export default ProfilePageActions;
