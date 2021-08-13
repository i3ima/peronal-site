import React, { useEffect, useState } from 'react'

interface ConfettiElement {
 character: string
 x: number
 y: number
 r: number
}

const characters = ['🚧', '🏗', '⚛', '🦀'];

const Confetti: React.FC = () => {
	const [confetti, setConfetti] = useState<ConfettiElement[]>(Array.from({length: 200})
			.map((_, index) => ({
			 character: characters[index % characters.length],
			 x: Math.random() * window.screen.width - 30,
			 y: Math.random() * 800,
			 r: 0.5 + Math.random() * 1.5
			}))
			.sort((a, b) => a.r - b.r))

 const redraw = () => {
	// eslint-disable-next-line no-return-assign
	setConfetti(previousState => previousState.map((emoji): ConfettiElement => ({
		...emoji,
		y: emoji.y >= window.screen.height ? -20 : emoji.y + 0.7 * emoji.r,
	 })))
 }

 useEffect(() => {

  const frame = requestAnimationFrame(redraw)

	return () => cancelAnimationFrame(frame)
 }, [confetti])

 return (
		 <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden opacity-90">
			{confetti.map((c) => (
					// eslint-disable-next-line react/no-array-index-key
					<span className="select-none absolute text-lg" style={{ left: c.x, top: c.y, transform: `scale(${c.r})` }}>{c.character}</span>
			))}
		 </div>
 );
};

export default Confetti