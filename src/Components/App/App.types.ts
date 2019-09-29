import { IArticle } from "../../model/IArticle";
import { ILoadable } from "../../model/ILoadable";

export interface IAppProps
  extends IAppsActions,
    IConnectedAppProps,
    IAppsOwnProps {}

export interface IConnectedAppProps {
  articles: ILoadable<IArticle[]>;
}

export interface IAppsActions {
  fetch: (searchString: string) => void;
}

export interface IAppsOwnProps {}

export interface IAppsComponentState {
  searchString: string;
}
