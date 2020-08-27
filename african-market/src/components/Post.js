import React from 'react'
import styled from 'styled-components'

const StyledPost = styled.div`
    border: 2px solid black;
    border-radius: 5px;
    margin-top: 5%;
    width: 30%;
    height: 25vh;
    display: flex;
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

const Post = (props) => {
    const {item} = props
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
        </StyledPost>
    )
}

export default Post;