import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./graphql";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#1DA57A",
            },
          }}
        >
          <App />
        </ConfigProvider>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
