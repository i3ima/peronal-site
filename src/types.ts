import { ReactElement } from "react";

export interface LinkType {
 url?: string
 Icon?: ReactElement
}

declare module 'react-use' {
 const useWindowSize: (initialWidth?: number, initialHeight?: number) => WindowSize
}

interface WindowSize {
 width: number,
 height: number
}