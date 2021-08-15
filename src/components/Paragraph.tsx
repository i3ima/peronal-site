import React from "react";


interface IProperties {
 children: string | React.ReactNodeArray | React.ReactChildren
}

const Paragraph: React.FC<IProperties> = ({ children }) => (
		<div className="text-2xl mb-4 mt-4">
		 {children}
		</div>
)
export default Paragraph