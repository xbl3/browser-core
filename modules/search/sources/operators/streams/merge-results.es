import Rx from '../../../platform/lib/rxjs';

const { map } = Rx.operators;

// TODO: add tests

/**
 * Factory for the `mergeResults` operator, which merges multiple responses
 * (from different providers) into a single response.
 *
 * @function mergeResults
 */
export default () => map(({ responses, ...result }) => ({
  ...result,
  // TODO: always return a response even if it does not contain any results?
  responses: [{
    // TODO: handle other parts of the response (like providers)
    results: [].concat(...responses.map(response => response.results)),
  }],
}));
