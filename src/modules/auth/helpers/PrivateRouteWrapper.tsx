import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import {paths} from "../../../configs/paths";

export const PrivateRouteWrapper:React.FC<PropsTypes> = ({ children, ...rest }) => {
    const auth = {
        user: false
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: paths.login.path,
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

type PropsTypes = {}
