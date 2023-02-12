import { When, Before } from "@badeball/cypress-cucumber-preprocessor";

import { NewArticle } from "cypress/support/createDataType";
import SharedDataUtils from "cypress/support/dataUtils";
import ArticlePageActions from "cypress/pageObject/articlePage/actions";

const sharedDataUtils = new SharedDataUtils();
const articlePageActions = new ArticlePageActions();

const article: NewArticle = {
  title: "aa1",
  description: "bb1",
  body: "cc1",
};

let articleSlug: string;

Before(() => {
  cy.login();
});

When("User open New Post page and create new article", () => {
  sharedDataUtils.createArticle(article).then((response) => {
    articleSlug = response.body.article.slug;
    console.log(response);
    articlePageActions.openArticle(articleSlug);
  });
});

When("User Open profile page and click favitorite icon", () => {
  sharedDataUtils.favoritedArticleByAPI(articleSlug).then((response) => {
    console.log(response);
  });
});

When("User open profile page and select article to delete", () => {
  sharedDataUtils.deleteArticle(articleSlug);
});
