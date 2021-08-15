import React from "react";

interface IProperties {
 children: string | React.ReactChild | React.ReactNodeArray
}

const Subtext: React.FC<IProperties> = ({ children }) => (
    <div className="flex mb-2 mt-2 items-center text-xl">
     {children}
    </div>
)

export default Subtext