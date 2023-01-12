class EditorPageAssetion {
  editorInUrl() {
    return cy.url().should("include", "#/editor");
  }

  articleInUrl() {
    return cy.url().should("include", "#/article/");
  }
}

export default EditorPageAssetion;
