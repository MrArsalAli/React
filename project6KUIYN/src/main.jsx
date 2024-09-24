import { createRoot } from 'react-dom/client'
import AppRouter from './Route.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <AppRouter />
)
