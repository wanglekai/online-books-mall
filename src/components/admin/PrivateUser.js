import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isAuth } from '../../helpers/auth'

function PrivateUser ({component: Component, ...rest}) {
    return (
        <Route {...rest} render={(props)=>{
            // console.log(props);
            if (isAuth()) return <Component {...props} />
            return <Redirect to="/signin" />
        }}></Route>
    )
}
export default PrivateUser
