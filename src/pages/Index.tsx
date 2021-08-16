import React from 'react'
import { DiGithubBadge } from 'react-icons/di'
import Confetti from "../components/Confetti";
import { LinkType } from "../types";
import Link from "../components/Link";
import FillBoxBackdrop from "../components/FillBoxBackdrop";
import Heading from "../components/Heading";
import Subtext from "../components/Subtext";
import Divider from "../components/Divider";
import Paragraph from "../components/Paragraph";
import { FaTelegramPlane } from 'react-icons/fa'

const links: LinkType[] = [
 {
	url: 'https://github.com/i3ima',
	Icon: <DiGithubBadge />
 },
 {
  url: 'https://t.me/i3ima',
	Icon: <FaTelegramPlane />
 }
]

const IndexPage: React.FC = () => (
		<div className="relative w-screen h-screen flex items-center justify-center p-4">
			<FillBoxBackdrop>
			 <div className="p-4 inset-5 flex flex-col items-start justify-start">
				<Heading text="Hello, i&apos;m i3ima"/>
				<Subtext>
				 <p className="pr-3">ts/rust 🦀 dev</p>
				 <div className="flex flex-row gap-x-3">{links.map((link, index) => (<Link key={index} Icon={link.Icon} url={link.url} />))}</div>
				</Subtext>
				<Divider />
				<Paragraph>
				 <div className="pb-4">
					Skills: <p className="inline">TypeScript, Rust</p>
				 </div>

				 <div>
					Stack (frontend): <p className="inline">Next, Zustand, SWR</p>
				 </div>
				 <div>
					Stack (backend): <p className="inline">Fastify, Prisma, Apollo</p>
				 </div>
				</Paragraph>
			 </div>
			</FillBoxBackdrop>
		 <Confetti />
		</div>
)

export default IndexPage