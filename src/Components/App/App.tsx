import { DetailsList, IColumn } from "office-ui-fabric-react/lib/DetailsList";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
import React, { Component } from "react";
import "./App.css";
import { IAppProps, IAppsComponentState } from "./App.types";
export class App extends Component<IAppProps, IAppsComponentState> {
  public render() {
    const { fetch, articles } = this.props;
    const articleList = (articles && articles.value) || [];
    const columns: IColumn[] = [
      {
        key: "column1",
        name: "Author",
        minWidth: 16,
        maxWidth: 260,
        fieldName: "author"
      },
      {
        key: "column2",
        name: "Title",
        minWidth: 16,
        maxWidth: 260,
        fieldName: "title"
      },
      {
        key: "column3",
        name: "Link",
        minWidth: 16,
        fieldName: "url"
      }
    ];

    return (
      <div className="App">
        <div className="searchBox">
          <SearchBox
            placeholder="Search"
            onSearch={(searchString: string) => fetch(searchString)}
          />
          <DetailsList columns={columns} items={articleList} />
        </div>
      </div>
    );
  }
}
