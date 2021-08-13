import OnLoadError from "components/OnLoadError";
import React, { lazy, Suspense } from "react";

const Index = lazy(() => import("pages/Index"));

export default function App(): React.ReactElement {
 return (
		 <Suspense fallback={OnLoadError}>
			<Index />
		 </Suspense>
 );
}
