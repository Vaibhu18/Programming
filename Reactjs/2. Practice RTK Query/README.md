# # React Query with Redux Toolkit Setup Guide

## Table of Contents

1. [Setting Up the API Service](#1-setting-up-the-api-service)
2. [Configuring the Store](#2-configuring-the-store)
3. [Integrating with React](#3-integrating-with-react)
4. [Using the API in Components](#4-using-the-api-in-components)
5. [Summary](#5-summary)

## 1. Setting Up the API Service

```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    // Get all products user query for reading data
    getAllProducts: builder.query({
      query: () => "/products",
    }),

    // Get a specific product by ID
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),

    // Add a new product
    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/product/add",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newProduct,
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddNewProductMutation,
} = productsApi;
```

### createApi: Creates a set of endpoints to interact with the API.

### fetchBaseQuery: A base query function that simplifies making API requests.

### reducerPath: A unique identifier for the slice of state managed by this API service.

## 2. Configuring the Store

configure the Redux store and integrate the API service.

```javascript
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./service/dummyData";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
```

### configureStore: Sets up the Redux store with the API service reducer and middleware.

### setupListeners: Sets up automatic caching and background refetching for queries.

## 3. Integrating with React

In the main entry file (usually main.jsx), we wrap the application with the Provider component to make the Redux store accessible to the entire app.

```javascript
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
```

### Provider: The Provider component from react-redux makes the Redux store accessible to all components in the app.

## 4. Using the API in Components

In your components, you can use the useGetAllProductsQuery and useGetProductByIdQuery hooks to fetch product data.

```javascript
import {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
} from "../app/service/dummyData";
const allProducts = useGetAllProductsQuery();
const product = useGetProductByIdQuery(id);
```
### useGetAllProductsQuery: Fetches the list of all products.
### useGetProductByIdQuery: Fetches a specific product by its ID, using the state id to dynamically load product data.

## 5. Summary
### Created an API service using createApi to handle product data.
### Configured the store with the API reducer and middleware.
### Integrated the store into the React app using the Provider.
###  Used React Query hooks like useGetAllProductsQuery and useGetProductByIdQuery to interact with the API and display data in components.