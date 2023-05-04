import React from 'react';

const Blog = () => {
    return (
        <div className='bg-warning p-3 m-4 border rounded bg-opacity-50'>
            <h4>1. Differences between uncontrolled and controlled components.</h4>
            <b>Ans:</b> <p>Uncontrolled components are not regulated or managed, can operate unpredictably and may not meet desired standards, and can have a negative impact on the system if they malfunction. Controlled components, on the other hand, are managed, designed to meet specific performance requirements, reliable, work in conjunction with other components, and require regular monitoring and management.</p>
            <h4>2. How to validate React props using PropTypes.</h4>
            <b>Ans:</b>
            <p>Props and PropTypes are important mechanisms for passing read-only attributes between React components.We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.Since JavaScript doesn't have a built-in type checking solution, many developers use extensions like TypeScript and Flow. However, React has an internal mechanism for props validation called PropTypes. In this article, we'll learn how to validate props with React PropTypes.</p>
            <h4>3.Tell us the difference between nodejs and express js.</h4>
            <b>Ans:</b>
            <p> Node.js is a runtime environment for executing JavaScript code on the server-side, while Express.js is a web application framework built on top of Node.js that provides a set of tools and features for building web applications. Node.js is a foundation for building server-side applications, while Express.js is a higher-level framework that makes it easier to build web applications with Node.js.</p>
            <h4>4.What is a custom hook, and why will you create a custom hook?</h4>
            <b>Ans:</b>
            <p>A custom hook is a function in React that allows you to reuse stateful logic across multiple components. Custom hooks enable you to abstract out and share logic that can be reused across different components in your application. <br />
                We would create a custom hook when we find ourself using the same stateful logic across multiple components in our application. By creating a custom hook, we can extract that logic into a single function that can be used by multiple components, reducing code duplication and making our code easier to maintain.</p>
        </div>
    );
};

export default Blog;