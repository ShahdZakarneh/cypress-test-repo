class EditorPageActions {
  newpostButton() {
    cy.get(".nav-link").contains("New Post").click();
    return this;
  }

  articletitle(text) {
    cy.get('input[placeholder="Article Title"]').type(text);
    return this;
  }

  aboutarticle(text) {
    cy.get('input[placeholder="What\'s this article about?"]').type(text);
    return this;
  }

  writearticle(text) {
    cy.get('textarea[placeholder="Write your article (in markdown)"]').type(
      text
    );
    return this;
  }

  publisharticleButton() {
    cy.get(".btn").contains("Publish Article").click();
    return this;
  }
}

export default EditorPageActions;
