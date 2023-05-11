---
title: "React.js vs React Native – What's the Difference?"
subtitle: ""
date: "2023-05-11"
cover_image: "/image/react-vs-reactnative.jpg"
---

### Are React.js and React Native the same?

If you're new to the world of web and mobile development, you might be wondering the same thing.

As a newbie, it's easy to assume that React.js are React Native are the same. After all, they both have "React" as part of their name.

Though React.js and React Native share a lot in common, they're different from each other. In this article, I'll explain both React.js and React Native, then I'll list out their similarities and differences. By the end of this article, you'll have a clear knowledge of both tools and what kind of app they're used to build.

In order to have a clear understanding of the difference between React.js and React Native, we have to first dive into how a website is rendered on a web browser.

## How Websites Get Rendered: HTML, CSS, and JavaScript

When you type the URL of a website into your browser's address bar and click enter, the browser requests the website, and the web server sends an HTML file to the browser.

The HTML file contains the content of the webpage and the linked files such as images, videos, and stylesheets. The web browser parses the HTML file and builds a Document Object Model (DOM) which is a tree-like structure containing the elements of the page (for example, buttons, paragraphs, links, and so on).

The browser initiates requests for the linked files and downloads them to the computer. It then parses the linked files, such as CSS and JavaScript, and applies the styling to the content, making it more presentable to the user. After all the files are downloaded, the browser renders the content on the screen.

The browser also runs any JavaScript code to make the page interactive. So, for example, if the user fills the wrong information in a form, JavaScript can be used to insert a **`<div>`** element into the page showing an error message to the user.

However, one of the biggest problems of inserting elements into the DOM with JavaScript is that the code is not reusable. For example, if you want to insert the same button into the page, but with different background colors, you have to create the element twice in JavaScript:

```lua
let blueBtn = document.createElement("button").style.backgroundColor("blue")
let redBtn = document.createElement("button").style.backgroundColor("red")

// Insert blue and red button into the page
```

This is just a simple example. With complex user interfaces, you can imagine how long and confusing things can become. React was developed to solve this problem by making the process of creating web apps much more organized and intuitive.

## What is React.js?

Technically speaking, ReactJS is an open-source, front-end JavaScript library for building user interfaces or UI components. In simple terms, this means that you can use React to build all the parts of a website that the user can see and interact with on their browser window.

So what's the difference between using plain JavaScript and React? Well, React makes the process of designing the user interface much easier. It allows you to create elements that you can easily re-use in other parts of the website or app.

With JavaScript, I previously mentioned how you'll need to write the same code twice to create the same button with different colors, which could lead to complexity in large projects.

React's component architecture solves this problem brilliantly. With React, you define a single piece of the UI, say a button, as a component.

```lua
const Button (props) => {
	return (
    	<div>
        	<button style={props.color}>Submit</button>
        </div>
    )
}
```

The component in this case is a function that returns HTML-like syntax called JSX, which defines the presentation and look of the component on the web browser.

Now, say you want to use the same button (but with different colors) in multiple places on your website. Instead of creating each button from scratch with different color properties  (as you would with JavaScript), with React, you simple use the same **`<Button>`** element and pass a different color to each of them as **props**, creating variations of the same button.

```lua 
<Button color="red" />
<Button color="blue" />
<Button color="green" />
```

This method keeps everything simple and organized, which is the whole essence of the React.js library.

Another benefit of using React for UI development is separation of concerns. This means that the data used in a component exists separately from the logic, which exists separately from the view layer.

#### Here's an example:

```lua
const Button (props) => {
	// component data
    const [btnText, setBtnText] = useState("Submit")
    
    // component logic
    function onClick() {
    	setBtnText("Submitted!")
    }
    
	return (
    	// component view
    	<div>
        	<button style={props.color}>{btnText}</button>
        </div>
    )
}
```

As you can see here, the state, logic and presentation of a component are all separate from each other, making React UI components easier to understand and compose.

To conclude, React is a JavaScript library designed to simplify the process to building the frontend of web applications.

## What is React Native?
Here's the main difference between ReactJS and React Native:

- React JS is used to build the user interface of web applications (that is, apps that run on a web browser)
- React Native is used to build applications that run on both iOS and Android devices (that is, cross-platform mobile applications)
- React uses HTML, CSS and JavaScript to create interactive user interfaces. React Native, on the other hand, uses native UI components and APIs to create mobile apps.

Both React JS and React Native share the same syntax. React Native was created as a way for developers to build cross-platform mobile applications using their existing knowledge of web development tools like HTML, CSS, JavaScript and the React core library.

In fact, some of the libraries commonly used together with React to develop web applications also have a mobile version for building apps in React Native – for example, Axios, Bootstrap CSS, and Tailwind CSS.

Here are the things React DOM and React Native have in common:

1. They both use the same core React library.
2. They both use the same component-based architecture, which means that developers can break down their applications into smaller, more manageable pieces.
3. They both use JavaScript as their programming language, and JSX as their templating language.
4. Both React DOM and React Native use virtual DOMs to render their applications.
5. Both React DOM and React Native also use the same styling techniques and components, through React Native's is a bit different.
6. They both utilize Chrome DevTools for debugging applications.
7. They use the same JavaScript APIs.
8. Both were developed in Meta. React was developed by a software engineer named Jordan Walke while React Native was born from a hackathon.

## Conclusion
This article explored the differences between React DOM and React Native, two popular JavaScript tools. React DOM is primarily used for web development, while React Native is used for mobile development.

React DOM uses HTML, CSS, and JavaScript for layout and styling, and allows developers to create interactive user interfaces. React Native, on the other hand, uses native UI components and APIs to create cross-platform mobile applications.