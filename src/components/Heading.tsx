import React from "react";

interface IProperties {
 text: string
}

const Heading: React.FC<IProperties> = ({ text }) => (
		<div className="text-6xl select-none">
		 {text}
		</div>
)

export default Heading