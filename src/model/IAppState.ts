import { IArticle } from "./IArticle";
import { ILoadable } from "./ILoadable";

export interface IAppState {
  articles: ILoadable<IArticle[]>;
}
