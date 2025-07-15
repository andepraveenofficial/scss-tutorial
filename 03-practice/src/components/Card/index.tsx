import React from "react";
import styles from "./styles.module.scss";

const Card: React.FC = () => {
	return (
		<div className={styles.container}>
			<h1>Heading</h1>
			<p>Paragraph</p>
		</div>
	);
};

export default Card;
