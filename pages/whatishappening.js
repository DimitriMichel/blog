import React, { Fragment } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { irBlack } from "react-syntax-highlighter/dist/cjs/styles/hljs";
const whatIsHappening = () => {
  const codeStringOne =
    "const NumberList = (props) => {\n" +
    "  const numbers = props.numbers;\n" +
    "  const listItems = numbers.map((number) =>\n" +
    "    <li>{number}</li>\n" +
    "  );\n" +
    "  return (\n" +
    "    <ul>{listItems}</ul>\n" +
    "  );\n" +
    "}\n" +
    "\n" +
    "const numbers = [1, 2, 3, 4, 5];\n" +
    "ReactDOM.render(\n" +
    "  <NumberList numbers={numbers} />,\n" +
    "  document.getElementById('root')\n" +
    ");";

  const codeStringTwo =
    "const NumberList = (props) => {\n" +
    "  const numbers = props.numbers;\n" +
    "  const listItems = numbers.map((number) =>\n" +
    "    <li key={number.toString()}>\n" +
    "      {number}\n" +
    "    </li>\n" +
    "  );\n" +
    "  return (\n" +
    "    <ul>{listItems}</ul>\n" +
    "  );\n" +
    "}\n" +
    "\n" +
    "const numbers = [1, 2, 3, 4, 5];\n" +
    "ReactDOM.render(\n" +
    "  <NumberList numbers={numbers} />,\n" +
    "  document.getElementById('root')\n" +
    ");";
  const codeStringThree =
    '<div className="before" title="stuff" />\n' +
    "\n" +
    '<div className="after" title="stuff" />';
  const citiesString =
    "<ul>\n" +
    "  <li>Stockholm</li>\n" +
    "  <li>Paris</li>\n" +
    "  <li>New York</li>\n" +
    "</ul>";
  return (
    <Fragment>
      <div className="grid__container">
        <div className="--article__title --title">
          How I Learned To Love The Atom
        </div>
        <div className="--text --bottom__text">
          <p className="--quote">
            “Man has gone out to explore other worlds and other civilizations
            without having explored his own labyrinth of dark passages and
            secret chambers" - Stanisław Lem
          </p>
          <p>
            One of the interesting things about development front end or back
            end is that every day there is a tool invented by a crack team of
            open source developers to make your life easier. For example when I
            first began my foray into React I was introduced to a tool called
            "create-react-app". This was designed to abstract some of the more
            mundane steps in spinning up a react application.
          </p>
          Unfortunately this had the effect of abstracting me away from the
          first principles of React. I had no idea why React was popular I
          simply knew that it was and I just had to learn it. I had no idea how
          it worked or what made it tick. Fortunately due to those developers
          who came before me I often didn't have to. But what if I wanted to get
          good? When I would get into discord channels and see senior level
          developers talk about React they always solved my problems with "first
          principles" thinking. Trouble is they didn't consider it first
          principles thinking and they didn't tell me <i>why</i> I should do
          things just <i>how</i>. For example:
          <SyntaxHighlighter language="javascript" style={irBlack}>
            {codeStringOne}
          </SyntaxHighlighter>
          <p>
            Here we have a basic list component. It accepts an array of numbers
            and outputs a list of elements. If you were to run this code we'd
            receive a warning that we need to provide a 'key' for every item in
            the list. No we can listen to the warning and very easily provide a
            key for every number by simply taking the generated number, changing
            it to a string and providing that as a key.
          </p>
          <SyntaxHighlighter language="javascript" style={irBlack}>
            {codeStringTwo}
          </SyntaxHighlighter>
          <p>
            The question I wrestled with was "why?" When reading through the top
            level docs we're told "Keys help React identify which items have
            changed, are added, or are removed." Ok sure but now I want to know
            "how?".
          </p>
          <p>
            Now in terms of "first principles" thinking we have to remember that
            our HTML DOM presents itself as one of the primary data structures,
            trees. The magic of React is that React builds a virtual DOM of
            React elements through the <span className="--code">render()</span>{" "}
            function. On the next state or props update, that{" "}
            <span className="--code">render()</span> function will return a
            different tree of React elements. React then needs to figure out how
            to efficiently update the UI to match the most recent tree. If you
            know your data structures you'll know that trees are made up of
            nodes and in the DOM some of these nodes are elements from divs to
            svg and so on.
            <p>
              When comparing two React DOM elements of the same type, React
              looks at the attributes of both, keeps the same underlying DOM
              node, and only updates the changed attributes.
            </p>
            <SyntaxHighlighter language="html" style={irBlack}>
              {codeStringThree}
            </SyntaxHighlighter>
            <p>
              As in the example above, if you change the className attribute of
              an element React knows only to change that attribute in the
              underlying DOM node.
            </p>
            <p>
              Going back to our lists, the way in which React recognizes changes
              and re-renders based on the differences between attributes is why
              we use keys. In an ordinary list of items such as:
            </p>
            <SyntaxHighlighter language="html" style={irBlack}>
              {citiesString}
            </SyntaxHighlighter>
            <p>
              If we wanted to make a change in this list like adding a new city
              to the top of the list, Instead of keeping all the elements the
              same and ony re-rending the new city react would re-render the
              entire list because without a key property it cant tell that only
              one item changed.{" "}
              <p className="--quote">
                *Also for this reason we don't use the index of a generated list
                as a key because adding an item shift all the indexes and
                re-renders the entire list*
              </p>
              <p>
                This is just one example of first principles thinking when it
                comes to React. To be able to answer the <i>"why"</i> and the{" "}
                <i>"how"</i> is what makes us understand our tools and be more
                efficient and precise when building.
              </p>
            </p>
          </p>
        </div>

        <div className="--right__side__image">
          <img
            src="/brain.png"
            className="--title__image"
            alt="brain in head sculpture"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default whatIsHappening;
