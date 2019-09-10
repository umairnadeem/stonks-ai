import { ReactText } from 'react';

export interface State {
  stocks?: Stock[];
}

export interface Stock {
  ticker: string | ReactText;
  data: Array<[number, number]>;
  color: string;
  accent: string;
}

export interface Action {
  type: string;
  payload: Stock[];
}

export interface Store {
  stocks?: (state: State, action: Action) => State;
}

export interface PreStore {
  [key: string]: (state: State, action: Action) => State | Store;
}

export type Reducer = (state: State, action: Action) => State;

export type ReducerHook = [State, React.Dispatch<Action>];