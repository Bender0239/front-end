
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import UsersPost from './UsersPost'
import {Route} from 'react-router-dom'
import EditPost from './EditPost'

const UserProfile = (props) => {

    const [userItems, setUserItems] = useState([])

    const [id, setID] = useState('')

    const user = props.user[0].userInfo

    const userID = user.id


    useEffect(() => {
        axiosWithAuth()
            .get(`https://african-market-place-bw.herokuapp.com/api/users/${userID}/items`)
            .then((res) => {
                setUserItems(res.data)
                console.log(res.data)
                
            })
            .catch(err => {
                console.log(err + ' this is your error')
            })

    }, [])

    console.log(userItems)

    return (
        <div>
            <div>User Profile</div>
            {userItems.map((item) => {
                return <UsersPost key={item.id} item={item}></UsersPost>
            })}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps, {})(UserProfile);