import React, { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use';

interface ConfettiElement {
 character: string
 x: number
 y: number
 r: number
}

const characters = ['🚧', '🏗', '⚛', '🦀'];

const createConfetti = (characters: string[], previous?: ConfettiElement[]): ConfettiElement[] => Array.from({ length: 200 }).map((_, index) => ({
 character: characters[index % characters.length],
 x: Math.random() * window.screen.width - 30,
 y: Math.random() * window.screen.height,
 r: previous ? previous[index].r : 0.5 + Math.random() * 1.5
}))

const Confetti: React.FC = () => {
 const { width, height } = useWindowSize();
 const [confetti, setConfetti] = useState<ConfettiElement[]>(createConfetti(characters))

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

 useEffect(() => {
	console.log('rebuilding')
	setConfetti(previousState => createConfetti(characters, previousState))
 }, [width, height])

 return (
		 <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden opacity-90">
			{confetti.map((c, index) => (
					<span key={index + 1} className="select-none absolute text-lg"
								style={{ left: c.x, top: c.y, transform: `scale(${c.r})` }}>{c.character}</span>
			))}
		 </div>
 );
};

export default Confetti