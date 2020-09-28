import React, { Fragment } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { irBlack } from "react-syntax-highlighter/dist/cjs/styles/hljs";
const arrowFunctionExample =
  "// ES5\n" +
  "var multiply = function(x, y) {\n" +
  "  return x * y;\n" +
  "};\n" +
  "\n" +
  "// ES6\n" +
  "const multiplyArrow = (x, y) => { return x * y };";
const spreadOperatorExample =
  "const sum = (x, y, z) => {\n" +
  "  return x + y + z;\n" +
  "}\n" +
  "\n" +
  "const numbers = [1, 2, 3];\n" +
  "\n" +
  "console.log(sum(...numbers));\n" +
  "// expected output: 6\n" +
  "\n" +
  "console.log(sum.apply(null, numbers));\n" +
  "// expected output: 6\n";

const ternaryExampleJS =
  "function getFee(isMember) {\n" +
  "  return (isMember ? '$2.00' : '$10.00');\n" +
  "}\n" +
  "\n" +
  "console.log(getFee(true));\n" +
  '// expected output: "$2.00"\n' +
  "\n" +
  "console.log(getFee(false));\n" +
  '// expected output: "$10.00"\n' +
  "\n" +
  "console.log(getFee(null));\n" +
  '// expected output: "$10.00"';

const ternaryExampleJSX =
  "render() {\n" +
  "  const isLoggedIn = this.state.isLoggedIn;\n" +
  "  return (\n" +
  "    <div>\n" +
  "      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.\n" +
  "    </div>\n" +
  "  );\n" +
  "}";
const NeedToKnow = () => {
  return (
    <Fragment>
      <div className="grid__container">
        <div className="--article__title --title">
          React Syllabus: Required Materials{" "}
        </div>
        <div className="--text --bottom__text">
          <p className="--quote">
            "The clever men at Oxford know all that there is to be known, but
            they none of them know half as much as intelligent Mr. Toad" –
            Kenneth Grahame
          </p>
          <h3>Arrow Functions</h3>
          <p>
            Arrow functions are another way to write functions in JavaScript.
            They utilize a new token: <span className="--code">=></span> Arrow
            functions are anonymous and automatically binds{" "}
            <span className="--code">this</span> in functions. Here's an
            example:
          </p>
          <SyntaxHighlighter language="javascript" style={irBlack}>
            {arrowFunctionExample}
          </SyntaxHighlighter>
          <h3>Spread Operator</h3>
          <p>
            The <span className="--code">...</span> (Spread Operator) can be
            thought of as kind of a "collection" operator where it operates on a
            collection of values. It allows us the privilege to obtain a list of
            parameters from an array.
            <p>Here's an example of that:</p>
            <SyntaxHighlighter language="javascript" style={irBlack}>
              {spreadOperatorExample}
            </SyntaxHighlighter>
          </p>
          <h3>Destructuring</h3>
          <p>
            The destructuring assignment syntax is a JavaScript expression that
            makes it possible to unpack values from arrays, or properties from
            objects, into distinct variables.
            <p>Here's an example of that:</p>
            <SyntaxHighlighter language="javascript" style={irBlack}>
              {spreadOperatorExample}
            </SyntaxHighlighter>
          </p>
          <h3>Ternaries</h3>
          <p>
            One of my favorite Javascript functions are ternary statements a
            conditional operator. They work great and it's almost as if they
            were built for JSX
            <p>
              Here's are two examples one in regular Javascript and one in JSX:
            </p>
            <p>Javascript:</p>
            <SyntaxHighlighter language="javascript" style={irBlack}>
              {ternaryExampleJS}
            </SyntaxHighlighter>
            <p>JSX:</p>
            <SyntaxHighlighter language="javascript" style={irBlack}>
              {ternaryExampleJSX}
            </SyntaxHighlighter>
          </p>
        </div>
        <div className="--right__side__image">
          <img src="/books.png" className="--title__image" alt="books" />
        </div>
      </div>
    </Fragment>
  );
};

export default NeedToKnow;
