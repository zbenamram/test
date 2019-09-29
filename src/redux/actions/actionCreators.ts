import { IAction } from "../../model/IAction";
import { actionDef } from "./actions";

/*
 * action creators
 */

export function fetchArticles(text: string): IAction<string> {
  return { type: actionDef.FETCH_ARTICLES, payload: text };
}

export function fetchArticlesPending() {
  return { type: actionDef.FETCH_ARTICLES_PENDING };
}

export function fetchArticlesSuccess(payload: any): IAction<any> {
  return { type: actionDef.FETCH_ARTICLES_SUCCESS, payload: payload };
}

export function fetchArticlesError(error: any) {
  return { type: actionDef.FETCH_ARTICLES_SUCCESS, payload: error };
}
