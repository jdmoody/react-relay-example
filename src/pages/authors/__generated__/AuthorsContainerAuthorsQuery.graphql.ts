/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AuthorsOrderField = "CREATED_AT" | "ID" | "%future added value";
export type Direction = "ASC" | "DESC" | "%future added value";
export type AuthorsOrder = {
    field: AuthorsOrderField;
    direction: Direction;
};
export type AuthorsContainerAuthorsQueryVariables = {
    after?: string | null | undefined;
    first?: number | null | undefined;
    firstName?: string | null | undefined;
    lastName?: string | null | undefined;
    orderBy?: Array<AuthorsOrder | null> | null | undefined;
};
export type AuthorsContainerAuthorsQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"AuthorsContainer_authors">;
};
export type AuthorsContainerAuthorsQuery = {
    readonly response: AuthorsContainerAuthorsQueryResponse;
    readonly variables: AuthorsContainerAuthorsQueryVariables;
};



/*
query AuthorsContainerAuthorsQuery(
  $after: String
  $first: Int
  $firstName: String
  $lastName: String
  $orderBy: [AuthorsOrder]
) {
  ...AuthorsContainer_authors
}

fragment AuthorRow_author on Author {
  _id
  firstName
  lastName
}

fragment AuthorsContainer_authors on Query {
  authors(first: $first, after: $after, firstName: $firstName, lastName: $lastName, orderBy: $orderBy) {
    totalCount
    edges {
      node {
        ...AuthorsTable_authors
        id
        __typename
      }
      cursor
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
}

fragment AuthorsTable_authors on Author {
  id
  ...AuthorRow_author
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "firstName"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "lastName"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "orderBy"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "firstName",
    "variableName": "firstName"
  },
  {
    "kind": "Variable",
    "name": "lastName",
    "variableName": "lastName"
  },
  {
    "kind": "Variable",
    "name": "orderBy",
    "variableName": "orderBy"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AuthorsContainerAuthorsQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "AuthorsContainer_authors"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AuthorsContainerAuthorsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AuthorConnection",
        "kind": "LinkedField",
        "name": "authors",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "AuthorEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Author",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "_id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "firstName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "lastName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": [
          "firstName",
          "lastName",
          "orderBy"
        ],
        "handle": "connection",
        "key": "AuthorsTable_authors",
        "kind": "LinkedHandle",
        "name": "authors"
      }
    ]
  },
  "params": {
    "cacheID": "987ceff9cfbff864c08ba19027c03279",
    "id": null,
    "metadata": {},
    "name": "AuthorsContainerAuthorsQuery",
    "operationKind": "query",
    "text": "query AuthorsContainerAuthorsQuery(\n  $after: String\n  $first: Int\n  $firstName: String\n  $lastName: String\n  $orderBy: [AuthorsOrder]\n) {\n  ...AuthorsContainer_authors\n}\n\nfragment AuthorRow_author on Author {\n  _id\n  firstName\n  lastName\n}\n\nfragment AuthorsContainer_authors on Query {\n  authors(first: $first, after: $after, firstName: $firstName, lastName: $lastName, orderBy: $orderBy) {\n    totalCount\n    edges {\n      node {\n        ...AuthorsTable_authors\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}\n\nfragment AuthorsTable_authors on Author {\n  id\n  ...AuthorRow_author\n}\n"
  }
};
})();
(node as any).hash = '48e0a0da39ba713a32cd10c92740a7e0';
export default node;
