import { IAppState } from "../model/IAppState";

const initialState: IAppState = {
  articles: { pending: false, error: undefined, value: [] }
};

export default initialState;
