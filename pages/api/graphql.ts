import "graphql-import-node";

import { ApolloServer } from "apollo-server-micro";

import resolvers from "@/graphql/resolvers";
import typeDefs from "@/graphql/schema.graphql";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

async function start(req: any, res: any) {
  return apolloServer.createHandler({ path: "/api/graphql" })(req, res);
}

export default start;
