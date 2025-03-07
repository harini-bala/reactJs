import React from "react";
import { useTheme } from "../ThemeContext";
import "../styles.css"; // Ensure global styles are loaded

const Blog = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="blog-container">
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <h1>🚀 Optimizing React Performance with `React.memo`, `useCallback`, and `useMemo`</h1>

      <section>
        <h2>🌟 Why Optimize React Components?</h2>
        <p>
          React efficiently updates the UI by re-rendering components when their <b>state</b> or <b>props</b> change.
          However, excessive re-renders can impact <b>performance</b>, especially in large applications.
        </p>
        <p>✅ Memoization techniques like <code>React.memo</code>, <code>useCallback</code>, and <code>useMemo</code> help reduce unnecessary re-renders and optimize your React components.</p>
      </section>

      <section>
        <h2>🔹 `React.memo` – Preventing Unnecessary Re-renders</h2>
        <p>
          `React.memo` is a <b>higher-order component (HOC)</b> that prevents a functional component from re-rendering <b>unless its props change</b>.
          This is useful for optimizing child components that receive the same props repeatedly.
        </p>

        <pre>{`
const MemoizedComponent = React.memo(({ name }) => {
  console.log("Rendered!");
  return <div>Hello, {name}!</div>;
});
        `}</pre>

        <p>✅ If the `name` prop remains the same, React <b>skips rendering</b> the component.</p>
        <p>✅ If `name` changes, the component re-renders as expected.</p>
      </section>

      <section>
        <h2>🔹 `useCallback` – Avoid Unnecessary Function Re-creations</h2>
        <p>
          In React, functions inside components are <b>recreated</b> on every render. This causes child components that receive these functions as props to <b>re-render unnecessarily</b>.
        </p>
        <p>
          `useCallback` <b>memoizes functions</b>, ensuring they <b>retain the same reference</b> across renders unless dependencies change.
        </p>

        <pre>{`
const handleClick = useCallback(() => {
  console.log("Button Clicked!");
}, []);
        `}</pre>

        <p>✅ Without `useCallback`, `handleClick` is recreated on each render.</p>
        <p>✅ With `useCallback`, the function remains the <b>same</b> unless dependencies change.</p>
      </section>

      <section>
        <h2>🔹 `useMemo` – Optimize Expensive Computations</h2>
        <p>
          If your component performs <b>heavy calculations</b>, these calculations <b>re-run on every render</b>.
          To prevent unnecessary recomputation, we use `useMemo`.
        </p>

        <pre>{`
const expensiveValue = useMemo(() => {
  return complexCalculation(data);
}, [data]);
        `}</pre>

        <p>✅ Saves performance by <b>avoiding redundant calculations</b>.</p>
        <p>✅ Only recalculates when `data` changes.</p>
      </section>

      <section>
        <h2>🚀 When to Use These Optimizations?</h2>
        <ul>
          <li>✅ <b>`React.memo`</b> → When child components receive <b>unchanging</b> props.</li>
          <li>✅ <b>`useCallback`</b> → When passing <b>functions</b> to child components.</li>
          <li>✅ <b>`useMemo`</b> → When doing <b>heavy calculations</b> inside a component.</li>
        </ul>
      </section>

      <section>
        <h2>🎯 Final Thoughts</h2>
        <p>Optimizing React applications is essential for <b>better performance</b> and a <b>smoother user experience</b>.</p>
        <p>✅ Use `React.memo` to <b>prevent child component re-renders</b>.</p>
        <p>✅ Use `useCallback` to <b>avoid function re-creations</b>.</p>
        <p>✅ Use `useMemo` to <b>reduce expensive recalculations</b>.</p>
        <p>Applying these techniques wisely will <b>boost your React app’s efficiency!</b> 🚀🔥</p>
      </section>
    </div>
  );
};

export default Blog;
