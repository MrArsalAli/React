import { createRoot } from 'react-dom/client'
import Approuter from './Route.jsx'
import './index.css';
import 'flowbite';
import CartContextProvider from './Context/CartContext.jsx';
import AuthContextProvider from './Context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
    <CartContextProvider>
        <Approuter />
    </CartContextProvider>
    </AuthContextProvider>
)
