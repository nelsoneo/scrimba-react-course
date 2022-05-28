
// const h1 = document.createElement('h1');
// h1.textContent = 'Hello, React Declarative!'
// h1.className = 'header'
// console.log(h1)


// const element = <h1 className="header">this is JSX</h1>
// console.log(element)

/*
{
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {
        "className": "header",
        "children": "this is JSX"
    },
    "_owner": null,
    "_store": {}
}
*/

// ReactDOM.render(element, document.getElementById('root'))


// const page = (<div>
//      <h1 className="header">this is JSX</h1>
//      <p>This is a paragraph</p>
// </div>)

// console.log(page)

// ReactDOM.render(page, document.getElementById('root'))

/*
Challenge:

Create a navbar in JSX:

    -use the semantic 'nav' element as the parent wrapper
    -have an h1 element the brand name of your 'website'
    -insert an unordered lit for the other nav elements
        -inside the 'ul', have three 'li' for 'Pricing', 'About' and 'Contact'
        -don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const nav = (
    <nav>
        <h1>WebSite</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
    </nav>
)

ReactDOM.render(nav, document.getElementById('root'))