import {
  Given,
  When,
  Then,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
import SharedDataUtils from "cypress/support/dataUtils";
import { NewArticle } from "cypress/support/createDataType";

const sharedDataUtils = new SharedDataUtils();

Before(() => {
  cy.login();
});

let tag: string;
let slug: string;

const article: NewArticle = {
  title: "implementation",
  description: "bb1",
  body: "cc1",
  tagList: [`${tag}`],
};

Given("The system has an Article with a popular tag", () => {
  sharedDataUtils
    .getPopularTags()
    .then((response) => {
      tag = response.body.tags[0];
      console.log(tag);
    })
    .then((x) => {
      article.tagList = [tag];
    });
});

When("The user create new post with a specific popular tag", () => {
  sharedDataUtils.createArticle(article);
});

When("The user opens the home page", () => {
  sharedDataUtils.openHomePage();
});

When("The user clicks on the popular tag that is used in that article", () => {
  sharedDataUtils.clickaPopularTag(tag).then((response) => {
    slug = response.body.articles[0].slug;
    console.log(slug);
  });
});

Then("The Article should appear in the home page", () => {
  sharedDataUtils.getArticleWithPopularTag(slug);
});
