
  export const data = [
    {
      front: "JSX",
      back: `JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”. React DOM uses camelCase property naming convention instead of HTML attribute names. For example, tabindex becomes tabIndex in JSX.`,
      term: "Term 1"
    },
    {
      front: "Elements",
      back: `React elements are the building blocks of React applications. One might confuse elements with a more widely known concept of “components”. An element describes what you want to see on the screen. React elements are immutable. Typically, elements are not used directly, but get returned from components.`,
      term: "Term 2"
    },
    {
      front: "Components",
      back: `React components are small, reusable pieces of code that return a React element to be rendered to the page. Components can be broken down into distinct pieces of functionality and used within other components. Components can return other components, arrays, strings and numbers. `,
      term: "Term 3"
    },
    {
      front: "props",
      back: `props are inputs to a React component. They are data passed down from a parent component to a child component. Remember that props are readonly. They should not be modified in any way. If you need to modify some value in response to user input or a network response, use state instead.`,
      term: "Term 4"
    },
    {
      front: "props.children",
      back: `props.children is available on every component. It contains the content between the opening and closing tags of a component. `,
      term: "Term 5"
    },
    {
      front: "state",
      back: `A component needs state when some data associated with it changes over time. The most important difference between state and props is that props are passed from a parent component, but state is managed by the component itself. A component cannot change its props, but it can change its state. For each particular piece of changing data, there should be just one component that “owns” it in its state.`,
      term: "Term 6"
    },
    {
      front: "Lifecycle Methods",
      back: `Lifecycle methods are custom functionality that gets executed during the different phases of a component. There are methods available when the component gets created and inserted into the DOM (mounting), when the component updates, and when the component gets unmounted or removed from the DOM.`,
      term: "Term 7"
    },
    {
      front: "Controlled Components",
      back: `An input form element whose value is controlled by React is called a controlled component. When a user enters data into a controlled component a change event handler is triggered and your code decides whether the input is valid (by re-rendering with the updated value). If you do not re-render then the form element will remain unchanged.`,
      term: "Term 8"
    },
    {
      front: "Uncontrolled Components",
      back: `An uncontrolled component works like form elements do outside of React. When a user inputs data into a form field (an input box, dropdown, etc) the updated information is reflected without React needing to do anything. However, this also means that you can’t force the field to have a certain value.`,
      term: "Term 9"
    },
    {
      front: "Keys",
      back: `A “key” is a special string attribute you need to include when creating arrays of elements. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside an array to give the elements a stable identity. Keys only need to be unique among sibling elements in the same array.`,
      term: "Term 10"
    },
    {
      front: "Refs",
      back: `The ref attribute can be an object created by React.createRef() function or a callback function, or a string (in legacy API). When the ref attribute is a callback function, the function receives the underlying DOM element or class instance (depending on the type of element) as its argument. This allows you to have direct access to the DOM element or component instance.`,
      term: "Term 11"
    },
    {
      front: "Events",
      back: `Handling events with React elements is very similar to handling events on DOM elements, but react event handlers are named using camelCase, rather than lowercase.
      With JSX you pass a function as the event handler, rather than a string.`,
      term: "Term 12"
    },
    {
      front: "Reconcilation",
      back: `When a component’s props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM via reconciliation.`,
      term: "Term 13"
    },
    {
      front: "Compilers",
      back: `A JavaScript compiler takes JavaScript code, transforms it and returns JavaScript code in a different format. The most common use case is to take ES6 syntax and transform it into syntax that older browsers are capable of interpreting. Babel is the compiler most commonly used with React.`,
      term: "Term 14"
    },
    {
      front: "Bundlers",
      back: `Bundlers take JavaScript and CSS code written as separate modules (often hundreds of them), and combine them together into a few files better optimized for the browsers. Some bundlers commonly used in React applications include Webpack and Browserify.`,
      term: "Term 15"
    },
  ]

 