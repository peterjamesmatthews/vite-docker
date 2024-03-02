import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import getRoot from "./getRoot.ts";
import "./index.css";

const root = getRoot();

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
