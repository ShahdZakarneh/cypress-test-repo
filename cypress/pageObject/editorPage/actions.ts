class EditorPageActions {
  newpostButton() {
    return cy.get(".nav-link").contains("New Post").click();
  }

  articletitle(text) {
    return cy.get('input[placeholder="Article Title"]').type(text);
  }

  aboutarticle(text) {
    return cy
      .get('input[placeholder="What\'s this article about?"]')
      .type(text);
  }

  writearticle(text) {
    return cy
      .get('textarea[placeholder="Write your article (in markdown)"]')
      .type(text);
  }

  publisharticleButton() {
    return cy.get(".btn").contains("Publish Article").click();
  }
}

export default EditorPageActions;
