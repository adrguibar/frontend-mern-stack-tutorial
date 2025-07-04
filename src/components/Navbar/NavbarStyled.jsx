import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    position: fixed;
    top: 0;
    justify-content: space-between;
    align-items: center;
    width: 100%; /* Full width */
    padding: 1rem;
    box-sizing: border-box;
    left: 0; /* ← Critical fix: Sticks to the left edge */
    background-color: #fff;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const ImageLogo = styled.img`
    width: 8rem;
    height: 3.5rem;
    object-fit: cover;
    cursor: pointer;
`
export const Button = styled.button`
    background-color: #0bade3;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0.4rem 1rem;
    color: #fff;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    border-radius: 0.3rem;
    font-family: Roboto, arial;
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-transform: uppercase;

    &:hover {
        background-color: #0a86af; /* Added the missing colon here */
    }
`



export const InputSpace = styled.div`
    position: relative;
    width: 200px;
    display: flex;
    align-items: center;

    i {
        position: absolute;
        top: 1;
        right: .2rem;
        z-index: 10;
        border: none;
        background-color: #f5f5ff;
        color: #757575;
        border-radius: .3rem;
        padding: .5rem;
    }

    input {
        outline: none;
        font-size: 1rem;
        padding: 0.6rem;
        background-color: #f5f5ff;
        width: 100%;
        border-radius: 0.3rem;
        border:none;

        &:focus{
            border: 1px solid #0bade3;
        }
    }
`