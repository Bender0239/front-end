import React from 'react'
import axios from 'axios'
import {axiosWithAuth} from '../utils/axiosWithAuth'




export const registerUser = (user) => () => {
    axios
        .post('https://african-market-place-bw.herokuapp.com/api/auth/register', user)
        .then((res) => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}