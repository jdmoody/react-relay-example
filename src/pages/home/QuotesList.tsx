import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useFragment } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import QuoteCard from "./QuoteCard";
import { Quote } from "../../types/Quote";
import { QuotesList_quotes$key } from "./__generated__/QuotesList_quotes.graphql";

interface Props {
  quotes: QuotesList_quotes$key;
}

const QuotesList = (props: Props) => {
  const quotes = useFragment(
    graphql`
      fragment QuotesList_quotes on Quote @relay(plural: true) {
        id
        ...QuoteCard_quote
      }
    `,
    props.quotes
  );

  return (
    <Row className="mt-4">
      {quotes.map((quote) => (
        <Col key={quote.id} md={4} style={{ marginBottom: 20 }}>
          <QuoteCard quote={quote} />
        </Col>
      ))}
    </Row>
  );
};

export default QuotesList;
