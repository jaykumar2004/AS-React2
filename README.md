### Hooks

# useState()

+ It is used to create local state variable inside the functional component.
+ Never ever use the useState outside of the components.
+ Never use the useState hook or create your state variable inside the if-else or any loop and also in the conditional statements.

# useEffect

+ When there is no dependency array => the useEffect is called on every rendered.
+ When there is a dependency array (empty dependency array) = [] => it will only called on initial render (just one).
+ if dependency array is [btnNameReact] => every time the btnNameReact is updated.