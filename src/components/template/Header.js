import './Header.css'
import React from 'react'
import { TiShoppingCart } from "react-icons/ti";

export default props =>
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">
        <TiShoppingCart size={30}/> {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>