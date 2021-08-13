import OnLoadError from "components/OnLoadError";
import React, { lazy, ReactElement, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

const Index = lazy(() => import("pages/Index"));

export default function App(): ReactElement {
 return (
		 <BrowserRouter>
			<Suspense fallback={OnLoadError}>
			 <Index />
			</Suspense>
		 </BrowserRouter>
 );
}
