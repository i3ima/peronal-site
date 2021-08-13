import React from 'react'
import { DiGithubBadge } from 'react-icons/di'
import Confetti from "../components/Confetti";
import { LinkType } from "../types";
import Link from "../components/Link";


const links: LinkType[] = [
 {
	url: 'https://github.com/i3ima',
	Icon: <DiGithubBadge />
 },
]

const IndexPage: React.FC = () => (
		<div className="relative w-screen h-screen flex items-center justify-center">
		 <div className="relative w-11/12 md:w-8/12 lg:w-6/12 h-1/2 z-10 shadow-2xl backdrop-blur rounded-2xl">
			<div className="absolute top-0 w-full h-full bg-gray-700 rounded-2xl opacity-30" />
			<div className="absolute z-50 inset-5 flex flex-col items-start justify-start">
			 <p className="text-6xl select-none">Hello, i&apos;m i3ima</p>
			 <div className="flex mb-2 mt-2 items-center">
				<p className="text-xl pr-3">ts/rust 🦀 dev</p>
				<div className="text-2xl flex flex-row gap-x-3">{links.map((link) => (<Link Icon={link.Icon} url={link.url} />))}</div>
			 </div>
			 <hr className="w-full" />

			 <div className="text-2xl mb-4 mt-4">
				<div className="pb-4">
				 Skills: <p className="inline">TypeScript, Rust</p>
				</div>

				<div>
				 Stack (frontend): <p className="inline">Next, Zustand, SWR</p>
				</div>
				<div>
				 Stack (backend): <p className="inline">Fastify, Prisma, Apollo</p>
				</div>
			 </div>


			</div>
		 </div>
		 <Confetti />
		</div>
)

export default IndexPage