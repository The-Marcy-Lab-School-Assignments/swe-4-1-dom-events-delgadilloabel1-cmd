# Short Response Questions

Answer the following questions in 2-4 sentences each. Be specific and use vocabulary from the lessons. Your responses will be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content.

## Question 1: Loading JavaScript

Examine the HTML code below:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Button Clicker</title>
    <link rel="stylesheet" href="style.css" />
    <script src="index.js"></script>
  </head>
  <body>
    <h1>Button Clicker</h1>
    <button id="my-button">Click Me!</button>
  </body>
</html>
```

In the `index.js` file, they have the code:

```js
document.querySelector("#my-button").style.color = "red";
```

But an error is thrown.

1. What is the error (be specific)?
2. Why does this error occur?
3. What can be done to fix it?

**Your Answer:**

The error thrown is a **TypeError** because `document.querySelector("#my-button")` returns `null`, so the code tries to access the `style` property of an element that does not exist yet. This happens because the JavaScript file is loaded in the `<head>` before the browser has finished parsing the HTML. Moving the `<script>` tag to the bottom of the `<body>` ensures the button element is loaded before the JavaScript runs, fixing the error.

## Question 2: event.target vs event.currentTarget

Consider this HTML:

```html
<div id="button-container">
  <button>Click Me</button>
</div>
```

And this JavaScript:

```js
const div = document.querySelector("#button-container");
div.addEventListener("click", (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
});
```

When a user clicks the button, both `event.target` and `event.currentTarget` are logged. Explain what each property represents in this scenario and why they might be different.

**Your Answer:**

When you click the button, both logs show up because the click event **bubbles**.

- **`event.target`** is the exact element you clicked. So if you clicked the button, `event.target` is the button itself.
- **`event.currentTarget`** is the element that the event listener is **attached to**. In this case, that's the `#button-container` div.
  They're different because the click **starts on the button**, then **bubbles up** to the div, which is where your listener is listening. So the div "handles" the event even though it didn't originate there.
  If you clicked directly on the div instead of the button, then both values would be the same.

Think of it like a group chat 📱

-**`target`** = who sent the message

- **`currentTarget`** = the chat where the message was sent

## Question 3: Creating Elements Dynamically

Look at the JavaScript code below that is attempting to create a product card dynamically and add it to the body.

```js
const product = {
  name: "iPhone 17",
  price: 1099.99,
  img: "./images/iphone17.png",
};

/* Desired structure: 
<div>
  <img src="./images/iphone17.png">
  <h3>iPhone 17</h3>
  <p>$1099.99</p>
</div>
*/

const productCard = document.createElement("div");
const productImage = document.createElement("img");
const productName = document.createElement("h3");
const productPrice = document.createElement("p");

productImage.src = product.img;
productName.textContent = product.name;
productPrice.textContent = `$${product.price}`;

document.body.append(productCard);
```

However, when the page loads and the code is executed, the user isn't able to see the image, product name or product price. What is the issue with this code?

**Your Answer:**

The issue is that the image, heading, and paragraph elements are created but never appended to the `productCard` div. Only the empty `productCard` is added to the document, so none of its child elements appear on the page. To fix this, the `img`, `h3`, and `p` elements must be appended to `productCard` before appending the card to the `document.body`.

## Question 4: Event Delegation and event.target.closest()

Consider this HTML:

```html
<ul id="todo-list">
  <li id="todo-1">
    <p class="description">Walk the dog</p>
    <p class="is-complete">✅</p>
  </li>
  <li id="todo-2">
    <p class="description">Take out the trash</p>
    <p class="is-complete">❌</p>
  </li>
  <li id="todo-3">
    <p class="description">Wash the dishes</p>
    <p class="is-complete">❌</p>
  </li>
</ul>
```

And this JavaScript:

```js
const todoList = document.querySelector("#todo-list");
todoList.addEventListener("click", (event) => {
  const clickedLi = event.target.closest("li");

  if (!clickedLi) return;

  clickedLi.querySelector(".is-complete").textContent = "✅";
});
```

1. What is the name for this approach to event handling? What is the alternative and why is this approach better?
2. Explain what the `event.target.closest('li')` method does and why it is essential to this approach.

**Your Answer:**

This approach is called **event delegation**, where a single event listener is attached to a parent element instead of individual child elements. The alternative is adding separate event listeners to each `<li>`, but event delegation is better because it reduces the number of listeners and continues to work even if new list items are added dynamically. The `event.target.closest("li")` method finds the nearest parent `<li>` of the element that was clicked, ensuring the correct todo item is selected. This is essential because clicks often occur on child elements, such as the `<p>` tags, rather than directly on the `<li>` itself.

## Question 5: NodeList

Do some independent learning and reading about the `querySelectorAll()` method. Then, answer these questions:

1. What is the difference between `querySelectorAll()` and `querySelector()`. Give an example of when you would use `querySelectorAll()`.
2. What is the difference between a `NodeList` and an array? Why is it important to know this difference?

**Your Answer:**
`querySelector()` only grabs the very first element that matches a CSS selector, while `querySelectorAll()` finds every single matching element on the page and returns them in a collection. you'd use `querySelectorAll()` when you want to do something to a whole bunch of items at once, like adding a click event listener to every single button in a list.

The biggest difference between a NodeList and a regular array is that a NodeList is a collection of DOM nodes and doesn't have built-in array methods like `.map()`, `.filter()`, or `.reduce()`, though it does support `.forEach()`. it's super important to know this because if you try to use an unsupported array method directly on a NodeList, your code will crash unless you convert it into a real array first using `Array.from()` or the spread operator.
