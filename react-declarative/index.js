/*
Challenge - Recrate the above line of code in vanilla JS by creatin and appending an h1 to our div#root
(without using innerHTML)

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as child of the div#root
 */

const h1 = document.createElement('h1');
h1.textContent = 'Hello, React Declarative!'
h1.className = 'header'
document.getElementById('root').appendChild(h1);

