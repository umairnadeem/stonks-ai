export interface State {
  stocks?: Stock[];
}

export interface Stock {
  ticker: string;
  data: Array<[number, number]>;
  color: string;
  accent: string;
}

export interface Action {
  type: string;
  payload: Stock[];
}

export interface Store {
  stocks?: [string[], React.Dispatch<Action>];
}

export interface PreStore {
  [key: string]: (state: State, action: Action) => State | Store;
}
