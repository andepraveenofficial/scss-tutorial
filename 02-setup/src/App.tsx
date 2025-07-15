import React from "react";
import styles from "./App.module.scss";

const App: React.FC = () => {
	return (
		<div className={styles.container}>
			<h1>Heading</h1>
			<p>Paragraph</p>
		</div>
	);
};

export default App;
