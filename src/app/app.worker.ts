/// <reference lib="webworker" />
import { factorialCalculator } from "./factorial-function";

addEventListener('message', ({ data }) => {
  //const response = `worker response to ${data}`;

  const response = factorialCalculator(data);

  postMessage(response);
});
