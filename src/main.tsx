import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ErrorPage from './error.js'
import Resume from './resume.tsx'
import Portfolio from "./portfolio.tsx"
import Contact from './contact.tsx'

import {
	createBrowserRouter,
	RouterProvider
} from "react-router-dom"
import './index.css'

const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "",
				element: <Resume />
			},
			{
				path: "resume",
				element: <Resume />
			},
			{
				path: "portfolio",
				element: <Portfolio />
			},
			{
				path: "contact",
				element: <Contact />
			}
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
