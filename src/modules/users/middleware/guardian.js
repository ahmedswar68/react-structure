
import React from 'react';
import user from "user";
import { Redirect } from 'react-router-dom';

export default function isLoggedIn(route, history) {
    if (!user.isLoggedIn()) {
        return <Redirect to="/login" />
    }
}