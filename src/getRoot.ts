export default function getRoot() {
	const root = document.getElementById("root");
	if (!root) throw new Error("Root element not found");
	return root;
}
