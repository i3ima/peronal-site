import React from 'react'
import { LinkType } from "../types";

// eslint-disable-next-line react/prop-types
const Link: React.FC<LinkType> = ({ url, Icon }) => (
		<div className="rounded-md bg-gray-700 bg-opacity-40 p-1">
		 <a href={url}>
			{Icon}
		 </a>
		</div>
)

export default Link