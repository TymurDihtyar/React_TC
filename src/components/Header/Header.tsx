import {Link} from "react-router-dom";
import React from "react";

import css from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {authService} from "../../services/authService";
import {authActions} from "../../redux/slices/auttSlice";

const Header = () => {
    const {me} = useAppSelector(state => state.auth);
    let dispatch = useAppDispatch();

    if (authService.getAccessToken() && !me) {
        dispatch(authActions.me())
    }

    return (
        <div className={css.Header}>
            {
                me ? <div className={css.user}>{me.username}--{new Date(me.last_login).toDateString()}</div>
                    :
                    <div>
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/register'}>Register</Link>
                    </div>
            }
        </div>
    );
};

export {Header};