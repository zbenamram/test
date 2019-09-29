import axios from "axios";
import { Dispatch } from "redux";
import {
  fetchArticlesError,
  fetchArticlesPending,
  fetchArticlesSuccess
} from "./actionCreators";

// api key obtained from https://newsapi.org - please replace with your own key
const apiKey = "f0984acde6b647f8a0b4c209585888a9";

export function fetchArticles(searchString: string) {
  return function action(dispatch: Dispatch) {
    dispatch(fetchArticlesPending());
    const request = axios({
      method: "GET",
      url: `https://newsapi.org/v2/everything?q=${searchString}&apiKey=${apiKey}`
    });

    return request.then(
      response => {
        if (response && response.data && response.data.articles) {
          dispatch(fetchArticlesSuccess(response.data.articles));
        }
      },
      err => dispatch(fetchArticlesError(err))
    );
  };
}

// fetch headlines
