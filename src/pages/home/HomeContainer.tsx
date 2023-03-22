import React, { Suspense } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { usePaginationFragment, useLazyLoadQuery } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import QuotesList from "./QuotesList";
import QuotesLoader from "./QuotesLoader";
import { HomeContainer_quotes$key } from "./__generated__/HomeContainer_quotes.graphql";
import { HomeContainerQuery } from "./__generated__/HomeContainerQuery.graphql";

interface Props {
  query: HomeContainer_quotes$key;
}

const Quotes: React.FC<Props> = (props: Props) => {
  const { data, loadNext, hasNext } = usePaginationFragment(
    graphql`
      fragment HomeContainer_quotes on Query
      @refetchable(queryName: "HomeContainerQuotesQuery") {
        quotes(first: $first, after: $after)
          @connection(key: "QuotesList_quotes") {
          totalCount
          edges {
            node {
              ...QuotesList_quotes
            }
          }
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }
    `,
    props.query
  );

  if (!data.quotes?.edges) return null;

  return (
    <>
      <QuotesList
        quotes={data.quotes.edges
          .filter(
            (
              edge
            ): edge is {
              node: NonNullable<NonNullable<typeof edge>["node"]>;
            } => !!edge?.node
          )
          .map((edge) => edge.node)}
      />
      <Row className="mt-4 text-center">
        <Col>
          {hasNext && <Button onClick={() => loadNext(9)}>Load more</Button>}
        </Col>
      </Row>
    </>
  );
};

const HomeContainer = () => {
  const query = useLazyLoadQuery<HomeContainerQuery>(
    graphql`
      query HomeContainerQuery($first: Int, $after: String) {
        ...HomeContainer_quotes
      }
    `,
    {
      first: 9,
      after: null,
    }
  );

  return (
    <Suspense fallback={<QuotesLoader />}>
      <Quotes query={query} />
    </Suspense>
  );
};

export default HomeContainer;
