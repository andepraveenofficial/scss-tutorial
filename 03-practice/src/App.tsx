import React from "react";
import Card from "./components/Card";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";

const App: React.FC = () => {
	return (
		<div style={{ margin: "40px" }}>
			<Card />
			<Card1 />
			<Card2 />
		</div>
	);
};

export default App;
