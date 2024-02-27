import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'

const queryClient = new QueryClient()
const rootElement = document.getElementById("root")

const root = ReactDOM.createRoot(rootElement as HTMLElement)
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
        <App />
        </QueryClientProvider>
    </React.StrictMode>
)
