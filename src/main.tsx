import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import getRoot from "./getRoot.ts";
import "./index.css";
import store from "./store.ts";

const root = getRoot();

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);

console.log(`environment variable FOO = ${import.meta.env.VITE_FOO}`);
