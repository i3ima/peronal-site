import React from "react";

interface IProperties  {
 shouldBlur?: boolean,
 children: React.ReactChildren | React.ReactNode
}

const FillBoxBackdrop: React.FC<IProperties> = ({ children, shouldBlur = true }) => (
		<div className={`relative w-11/12 md:w-8/12 lg:w-6/12 h-auto z-10 shadow-2xl rounded-2xl ${shouldBlur ? 'backdrop-blur' : ''}`}>
			{/* backdrop tint */}
		 <div className="absolute  w-full h-full bg-gray-700 rounded-2xl opacity-30" />
		 {children}
</div>
)

export default FillBoxBackdrop
