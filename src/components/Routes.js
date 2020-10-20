import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Navigation from './Navigation'

export const PublicRoute = ({ component: Component , ...rest})=>{
    return (
        <Route {...rest}  component={(props)=>(
            <div>
                <Navigation /> {/* HEADER ALWAYS VISIBLE */}
                <Component {...props} />
            </div>
        )}
        />
    )
}
export const HomeRoute = (props) => {
    const { children, ...rest } = props
    return (
        <Route
            {...rest}
            children
        />
    );
};