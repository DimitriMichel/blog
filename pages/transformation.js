import React, { Fragment } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { irBlack } from "react-syntax-highlighter/dist/cjs/styles/hljs";
const useMemoExample =
  "//Data comes in as an object\n" +
  'const data = { 1: "a", 2: "b", 3: "c" };\n' +
  "//Inside the component\n" +
  "const transformedData = useMemo(() => {\n" +
  "  return Object.values(data);\n" +
  "}, [data]);\n" +
  "console.log(transformedData);\n";

const Transformation = () => {
  return (
    <Fragment>
      <div className="grid__container">
        <div className="--article__title --title">Cost Demystified</div>
        <div className="--text --bottom__text">
          <p className="--quote">
            “Look after the pennies and the dollars will look after themselves"
            - Proverb
          </p>
          <p>
            One of the first applications I built was a data visualizer. It
            would pull the financial data of every member of congress and
            display just about everything but the cash in their pocket. I
            remember when building this app there were a lot of renders and
            recently I looked back and figured out why some of my functions were
            getting to expensive. See one of the reasons I was proud of this
            little application was because I was able to bridge two completely
            unrelated APIs together with some neat data manipulation. Trouble is
            these they would get called on every render. Fortunately there's a
            solution for this.
          </p>
          <p>
            We have the <span className="--code">useMemo()</span> hook.
          </p>
          <p>
            The useMemo() hook allows you to memoize functions so that the
            function is prevented from being called on every render. In
            computing, <b>memoization</b> is an optimization technique used
            primarily to speed up computer programs by storing the results of
            expensive function calls and returning the cached result when the
            same inputs occur again.
          </p>
          <p>For Example:</p>
          <SyntaxHighlighter language="javascript" style={irBlack}>
            {useMemoExample}
          </SyntaxHighlighter>
          <p>
            If the object and transformation criteria remains the same across
            re-renders, the calculation is not done again instead the previously
            transformed data is returned from the cache. Making perhaps an
            expensive computation that would run multiple times run only once
            hence improving performance.
          </p>
        </div>
        <div className="--right__side__image">
          <img src="/money.png" className="--title__image" alt="money" />
        </div>
      </div>
    </Fragment>
  );
};

export default Transformation;
