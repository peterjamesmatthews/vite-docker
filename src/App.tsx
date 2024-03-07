import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import "./App.scss";
import Plus from "./Plus";
import reactLogo from "./assets/react.svg";
import { increment, selectCount } from "./slices/count";
import viteLogo from "/vite.svg";
import { useCallback } from "react";

export default function App() {
	const dispatch = useDispatch();
	const count = useSelector(selectCount);
	const handleCount = useCallback(() => dispatch(increment()), [dispatch]);

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
				<button type="button" onClick={handleCount}>
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
