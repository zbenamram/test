import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "../../model/IAppState";
import { fetchArticles } from "../../redux/actions/fetchData";
import { App } from "./App";
import { IAppsActions, IConnectedAppProps } from "./App.types";

const mapStatetoProps = (state: IAppState): IConnectedAppProps => {
  return { articles: state.articles };
};

const mapDispatchToProps = (dispatch: Dispatch): IAppsActions => {
  return {
    fetch: (searchString: string) => {
      const actionObject = fetchArticles(searchString);
      dispatch<any>(actionObject);
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(App);
