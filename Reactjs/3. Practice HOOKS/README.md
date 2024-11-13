# Redux Toolkit Setup Guide

## Table of Contents

1. [Creating a Slice](#1-creating-a-slice)
2. [Configuring the Store](#2-configuring-the-store)
3. [Integrating the Store with React](#3-integrating-the-store-with-react)
4. [React Hooks for Redux](#4-react-hooks-for-redux)
5. [Summary](#5-summary)


## 1. Creating a Slice

```javascript
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```
# createSlice: This function simplifies the creation of Redux slices and Slices means actions and actions functions


## 2. Configuring the Store

Create and configure the Redux store using the counter slice created earlier:

```javascript
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```
# configureStore : this function used to configure the Redux store with the counter slice created earlier


## 3. Integrating the Store with React

Wrap your application in the Provider component from react-redux to make the store available to all components.

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```
# Provider: The Provider component from react-redux makes the Redux store accessible throughout your entire application.


## 4. React Hooks for Redux

useSelector : Accesses the current state from the Redux store inside a React component.
useDispatch : Dispatches actions to store or update the state in the Redux store.

```javascript
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
dispatch(increment());
```
