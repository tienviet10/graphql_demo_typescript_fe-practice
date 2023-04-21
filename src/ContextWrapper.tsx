import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { apolloClient } from "./graphql";
import { ApolloProvider } from "@apollo/client";
import { ConfigProvider } from "antd";

const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#1DA57A",
            },
          }}
        >
          {children}
        </ConfigProvider>
      </ApolloProvider>
    </Provider>
  );
};

export default ContextWrapper;
