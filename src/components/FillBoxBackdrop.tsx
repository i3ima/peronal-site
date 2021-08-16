import React from "react";

interface IProperties {
 shouldBlur?: boolean,
 children: React.ReactChildren | React.ReactNode
}

const FillBoxBackdrop: React.FC<IProperties> = ({ children, shouldBlur = true }) => (
		<div
				className={`w-11/12 md:w-8/12 lg:w-6/12 h-auto z-50 bg-gray-700 bg-opacity-50 shadow-2xl rounded-2xl ${shouldBlur ? 'backdrop-blur' : ''}`}>
		 {children}
		</div>
)

export default FillBoxBackdrop
