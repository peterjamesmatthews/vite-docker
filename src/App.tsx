import { useCallback, useState } from "react";
import viteLogo from "/vite.svg";
import Adder from "./Adder";
import "./App.css";
import "./App.scss";
import Plus from "./Plus";
import reactLogo from "./assets/react.svg";

function App() {
	const [count, setCount] = useState(0);

	const incrementCount = useCallback(() => setCount(Adder(count, 1)), [count]);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>
				Vite <Plus /> React
			</h1>
			<div className="card">
				<button type="button" onClick={incrementCount}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
