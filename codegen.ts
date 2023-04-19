import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";
dotenv.config();
const backend_url = process.env.REACT_APP_BACKEND!;

const config: CodegenConfig = {
  schema: backend_url,
  documents: ["src/**/*.tsx", "src/**/*.ts"],
  generates: {
    "./src/graphql/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
