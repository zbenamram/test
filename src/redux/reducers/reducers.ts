import { combineReducers } from "redux";
import { IAction } from "../../model/IAction";
import { IArticle } from "../../model/IArticle";
import { ILoadable } from "../../model/ILoadable";
import { actionDef } from "../actions/actions";

function fetchDataReducer(
  state: ILoadable<IArticle[]> = {
    pending: false,
    error: undefined,
    value: []
  },
  action: IAction<any>
): ILoadable<IArticle[]> {
  switch (action.type) {
    case actionDef.FETCH_ARTICLES_PENDING:
      return {
        ...state,
        pending: true,
        error: undefined
      };
    case actionDef.FETCH_ARTICLES_SUCCESS:
      return {
        pending: false,
        error: undefined,
        value: action.payload
      };
    case actionDef.FETCH_ARTICLES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload
      };
    default:
      return state;
  }
}

function fetchHeadlinesReducer(
  state: ILoadable<IArticle[]> = {
    pending: false,
    error: undefined,
    value: []
  },
  action: IAction<any>
): ILoadable<IArticle[]> {
  switch (action.type) {
    case actionDef.FETCH_HEADLINES_PENDING:
      return {
        ...state,
        pending: true,
        error: undefined
      };
    case actionDef.FETCH_HEADLINES_SUCCESS:
      return {
        pending: false,
        error: undefined,
        value: action.payload
      };
    case actionDef.FETCH_HEADLINES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  articles: fetchDataReducer,
  headlines: fetchHeadlinesReducer
});

export default rootReducer;
