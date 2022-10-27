# Fullstack Intro Day 1

## useEffect
- The useEffect hook is meant to handle side effect. A side effect is some asynchronous effect/functionality that occurs outside of the normal react lifecycle. I.E. Waiting and responding to an HTTP request/response is a side effect because react will need to update only after receiving the response. The useEffect hook is most often used to handle API calls.
- The first argument to the useEffect invocation is called the "effect" or "effect function" and is the function that gets run as a side effect.
- The useEffect hook will invoke its effect function after every render by default (we will control this behavior to not run after every render eventually). I.E. It will run the first time the component renders to the page and after every time props or a state variable changes. 
- The second argument to the useEffect hook is an array called the dependency array. The dependency array is a list of state variables or props that react will watch between rerenders. If none of the variables in the dependency array change between rerenders, the effect function will NOT be called. I.E. If we give useEffect an empty dependency array, the effect function will only be called on component render. If we give useEffect a dependency array with a state variable in it, the effect function will only be called of that state variable changes. 
	- _Important_: If you are setting a particular state variable with the effect function, do NOT include that state variable as a dependency, otherwise you will end up with an infinite loop of rerenders.
- By convention, the asynchronous function that gets invoked by the useEffect effect function, goes INSIDE the effect function:
	- useEffect(()=>{
		const fetchRandom = async () => {
			const randomResult = await getRandomAsync(min, max)
			console.log(randomResult)
			setRandom(randomResult)
		}
		fetchRandom()
	}, [max, min])

# Fullstack Intro Day 2

## .env files
- _Reminder_: .env files hold our environment variables. When we start a server/terminal process, the variables in a .env file are loaded into the global scope and are accessable using the process.env.VARIABLE_NAME syntax. When we create a .env file in our file system, it will go on the top level of our repository; i.e, the same file level as the package.json. 
	- _Note_: After you create a .env file in your folder, you need to restart the terminal process for your environment variables to be loaded into the scope.
- _Requirement_: React applications REQUIRE environment variables to be prepended with the string REACT_APP. I.E. All environment variables you will create for react MUST start with REACT_APP. Everything after the REACT_APP prefix is up to you to name for your variable.
- All environment variables coming from the .env file will be strings

## useEffect
- _Convention_: (and due to variable scope), useEffect goes into the body of a component (above the JSX return) and below the state variables.
- The starting definition for useEffect will always be:
	- useEffect(()=>{}, [])
	- The first argument is the effect function and the second argument is the dependency array.
- _Convention_: If there is an async function that is going to be invoked in the useEffect, the function definition should go inside of the useEffect effect function. The async function is then invoked inside of the useEffect effect function after the definition.

## React Component Composition
- The top most code for react components will be the props or destructured props.
- After the destructured props comes the state variables.
- After the state variables comes the useEffects.
- After the useEffects comes any handler functions or pre-processing code for variables that are rendered in the JSX.
- Last comes the JSX return statement.

## fetch
- The fetch API is a globally available API to browser applications. I.E. If you are running a browser client app such as a react app or a jQuery app, the fetch API will be available to you. The fetch API is a lightweight module that allows you to make HTTP requests to specific urls along with optional parameters.
	- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- For react applications, your fetch async functions/invocations are going to live inside of an async function that lives inside of a useEffect.
- _Convention_: Since await fetch() returns the response data, we assign that response data to a variable called result.
- If the response to the fetch() has an OK status/status code (such as 200), the payload/body of the fetch will be retrieved by calling the awaited .json() method on result. Usually we assign that to a variable whose name represents the data we are expecting.