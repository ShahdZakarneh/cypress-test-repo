import { GetAPIUrlPrefix } from "cypress/support/commands";

class ArticlePageActions {
  openArticle(slug: string) {
    cy.visit(`#/${slug}`);
    return this;
  }
}

export default ArticlePageActions;
