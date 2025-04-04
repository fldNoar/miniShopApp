import './App.scss';
import React from "react";
import AppRouter from "./react/views/AppRouter";
import {CartProvider} from "./scripts/hooks/useCart";

function App() {
    return (
        <CartProvider>
            <AppRouter/>
        </CartProvider>
    );
}

export default App;
