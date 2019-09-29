import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "../../model/IAppState";
import { fetchArticles, fetchHeadlines } from "../../redux/actions/fetchData";
import { App } from "./App";
import { IAppsActions, IConnectedAppProps } from "./App.types";

const mapStatetoProps = (state: IAppState): IConnectedAppProps => {
  return { articles: state.articles, headlines: state.headlines };
};

const mapDispatchToProps = (dispatch: Dispatch): IAppsActions => {
  return {
    fetch: (searchString: string) => {
      const actionObject = fetchArticles(searchString);
      dispatch<any>(actionObject);
    },
    fetchHeadlinesView: () => {
      dispatch<any>(fetchHeadlines());
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(App);
