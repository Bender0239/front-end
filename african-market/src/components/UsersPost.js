import React, {useState} from 'react'
import styled from 'styled-components'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {useForm} from 'react-hook-form'


const StyledPost = styled.div`
    border: 2px solid black;
    border-radius: 5px;
    margin-top: 5%;
    margin: 0 auto;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    img{
        width:  150px;
        height: 150px;
        object-fit: cover;
        border-radius: 3px;
    }
`

const UsersPost = (props) => {
    const {item} = props
    const userId = item.user_id
    const id = item.id

    const {register, handleSubmit, setValue} = useForm()

    setValue('name', item.name)
    setValue('contactInfo', item.name)
    setValue('description', item.description)
    setValue('imageLink', item.imageLink)
    setValue('location', item.location)
    setValue('price', item.price)
    setValue('category', item.category)


    const onSubmit = () => {
        axiosWithAuth()
            .delete(`https://african-market-place-bw.herokuapp.com/api/users/${userId}/items/${id}`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })

    }
    const onFormSubmit = (data) => {
        const editedItem = {
            name: data.name,
            contactInfo: data.contactInfo,
            description: data.description,
            imageLink: data.imageLink,
            location: data.location,
            price: data.price,
            category: data.category
        }
        console.log(editedItem)
        axiosWithAuth()
            .put(`https://african-market-place-bw.herokuapp.com/api/users/${userId}/items/${id}`, editedItem)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <StyledPost>
            <div>
                <img src={item.imageLink}></img>
            </div>
            <div>
                <div>{item.name}</div>
                <div>{item.price}</div>
                <div>{item.description}</div>
                <div>{item.location}</div>
                <div>{item.contactInfo}</div>
            </div>
            <button onClick={onSubmit}>Delete</button>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <label>Name:&nbsp;
                    <input 
                        type='text'
                        name='name'
                        ref={register}

                    /> 
                </label>
                <label>Email:&nbsp;
                    <input 
                        type='text'
                        name='contactInfo'
                        ref={register}
                    /> 
                </label>
                <label>Description:&nbsp;
                    <input 
                        type='text'
                        name='description'
                        ref={register}
                    /> 
                </label>
                <label>Image Link:&nbsp;
                    <input 
                        type='text'
                        name='imageLink'
                        ref={register}
                    /> 
                </label>
                <label>Location:&nbsp;
                    <input 
                        type='text'
                        name='location'
                        ref={register}
                    /> 
                </label>
                <label>Price:&nbsp;
                    <input 
                        type='text'
                        name='price'
                        ref={register}
                    /> 
                </label>
                <label>Category:&nbsp;
                    <input 
                        type='text'
                        name='category'
                        ref={register}
                    /> 
                </label>
                <button>Edit</button>
            </form>
        </StyledPost>
    )
}

export default UsersPost;