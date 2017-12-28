// This JSX element looks exactly like HTML!
// The only noticeable difference is that you would find it in a JavaScript file,
// instead of in an HTML file.

const navBar = <nav>I am a nav bar</nav>;

const myTeam = {
    center: <li>Benzo Walli</li>,
    powerForward: <li>Rasha Loa</li>,
    smallForward: <li>Tayshaun Dasmoto</li>,
    shootingGuard: <li>Colmar Cumberbatch</li>,
    pointGuard: <li>Femi Billon</li>
};

//Here are some JSX elements with attributes:

<a href="http://www.example.com">Welcome to the Web</a>;
const title = <h1 id="title">Introduction to React.js: Part I</h1>;

// A single JSX element can have many attributes, just like in HTML:

const panda = <img src="images/panda.jpg" alt="panda" width="500px" height="500px" />;


// Here's an example of a JSX <h1> element, nested inside of a JSX <a> element:
// If a JSX expression takes up more than one line,
// then you must wrap the multi-line JSX expression in parentheses.

    const theExample = (
    <a href="https://www.example.com">
        <h1>
            Click me!
        </h1>
    </a>
);

// There's a rule that we haven't mentioned:
// a JSX expression must have exactly one outermost element.


// In other words, this code will work:

const paragraphs = (
    <div id="i-am-the-outermost-element">
        <p>I am a paragraph.</p>
        <p>I, too, am a paragraph.</p>
    </div>
);

//But this code will not work:

const paragraphs = (
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
);

// If you notice that a JSX expression has multiple outer elements,
// the solution is usually simple: wrap the JSX expression in a <div></div>.