import { Fragment } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  console.log(match);

  const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
    { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
  ];

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <h1>No Quotes man!!</h1>;
  }
  return (
    <Fragment>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>
      {/* <Route path={`/quotes/${params.quoteId}`} exact> */}
      <Route path={`${match.url}`} exact>
        <div className="centered">
          {/* <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}> */}
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      {/* <Route path={`/quotes/${params.quoteId}/comments`}> */}
      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
