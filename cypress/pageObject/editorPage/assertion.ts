class EditorPageAssetion {
  articleInUrl() {
    cy.url().should("include", "#/article/");
    return this;
  }
}

export default EditorPageAssetion;
