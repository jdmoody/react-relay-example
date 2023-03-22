import { useFragment } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import Card from "react-bootstrap/Card";
import { QuoteCard_quote$key } from "./__generated__/QuoteCard_quote.graphql";

interface Props {
  quote: QuoteCard_quote$key;
}

const QuoteCard = (props: Props) => {
  const quote = useFragment(
    graphql`
      fragment QuoteCard_quote on Quote {
        _id
        text
        author {
          id
          firstName
          lastName
        }
      }
    `,
    props.quote
  );

  return (
    <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{quote.text}</p>
          <footer className="blockquote-footer">
            <cite title="Source Title">{`${quote?.author?.firstName} ${quote?.author?.lastName}`}</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default QuoteCard;
