import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import styled from 'styled-components'
import Post from './Post'
import {useForm} from 'react-hook-form'

const StyledMarket = styled.div`
    width: 100%;
    margin: 0 auto;
    .header{
       text-align: center; 
    }
    .posts{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    form{
        display: flex;
        justify-content: center;
    }
`

const MarketPage = (props) => {
    
    // console.log(props.user)
    
    const [items, setItems] = useState([])

    const {register, handleSubmit} = useForm()
    
    
    

    const onSubmit = (data) => {
        console.log(data.filter)
        axiosWithAuth()
            .get('https://african-market-place-bw.herokuapp.com/api/users/allItems')
            .then((res) => {
                // console.log(res.data)
                const newItems = []
                res.data.filter(function(item) {
                    if(data.filter === 'all'){
                         newItems.push(item)
                    } else if (data.filter == item.category){
                        return newItems.push(item)
                    } 
                })
                setItems(newItems)
                console.log(items)
            })
            .catch(err => {
                console.log(err)
            })

        // const newItems = []
        // items.filter(function(item) {
        //     if(item.category === data.filter){
        //         newItems.push(item)
        //     }
        // })
        
    }
    
    useEffect(() => {
        axiosWithAuth()
        .get('https://african-market-place-bw.herokuapp.com/api/users/allItems')
        .then((res) => {
            console.log(res)
            setItems(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    
    return (
        <StyledMarket>
            <div className='header'>
                <h1>Marketplace</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select name="filter" ref={register}>
                    <option value="all">All Items</option>
                    <option value="phone">Phones</option>
                    <option value="tablet">Tablets</option>
                    <option value="laptop">Laptops</option>
                </select>
                <button>Filter</button>
            </form>
            <div className='posts'>
                {items.map(item => {
                return <Post key={item.id} item={item}/> 
                })}
            </div>
        </StyledMarket>
    )
}

const mapStateToProps = (state)  => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,{})(MarketPage);