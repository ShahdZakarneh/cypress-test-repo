import { url } from "inspector";
import { isTaggedTemplateExpression } from "typescript";
import { GetAPIUrlPrefix } from "./commands";
import { NewArticle } from "./createDataType";

class SharedDataUtils {
  createArticle(article: NewArticle) {
    return cy.request({
      method: "POST",
      url: GetAPIUrlPrefix("articles"),
      body: {
        article,
      },
      headers: {
        authorization: `Token ${localStorage.getItem("jwt")}`,
      },
    });
  }

  deleteArticle(slug) {
    return cy.request({
      method: "DELETE",
      url: GetAPIUrlPrefix(`articles/${slug}`),
      headers: {
        authorization: `Token ${localStorage.getItem("jwt")}`,
      },
    });
  }

  favoritedArticleByAPI(slug) {
    return cy.request({
      method: "POST",
      url: GetAPIUrlPrefix(`articles/${slug}/favorite`),
      headers: {
        authorization: `Token ${localStorage.getItem("jwt")}`,
      },
    });
  }

  getPopularTags() {
    return cy.request({
      method: "GET",
      url: GetAPIUrlPrefix("tags"),
      headers: {
        authorization: `Token ${localStorage.getItem("jwt")}`,
      },
    });
  }

  openHomePage() {
    return cy.request({
      method: "GET",
      url: GetAPIUrlPrefix("user"),
      headers: {
        authorization: `Token ${localStorage.getItem("jwt")}`,
      },
    });
  }

  clickaPopularTag(tag) {
    return cy.request({
      method: "GET",
      url: GetAPIUrlPrefix(`articles?${tag}&limit=10&offset=0`),
      headers: {
        authorization: `Token ${localStorage.getItem("jwt")}`,
      },
    });
  }

  getArticleWithPopularTag(slug) {
    return cy.request({
      method: "GET",
      url: GetAPIUrlPrefix(`articles/${slug}`),
      headers: {
        authorization: `Token ${localStorage.getItem("jwt")}`,
      },
    });
  }
}

export default SharedDataUtils;
