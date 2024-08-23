import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset, setCounter } from './counter.actions';

export const initialState = JSON.parse(localStorage.getItem('count') ?? '0');

export const countReducer = createReducer(
  initialState,
  on(increment, (state, { amount }) => state + amount),
  on(decrement, (state, { amount }) => Math.max(0, state - amount)),
  on(reset, () => 0),
  on(setCounter, (state, { value }) => value)
);