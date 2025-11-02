import styled, {css, keyframes} from "styled-components";
import { Link } from "react-router-dom";


const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Loading = styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    ${({ loading }) =>
        loading &&
    css`
        svg {
        animation: ${rotate} 2s linear infinite;
        }
    `}
`;

export const Container = styled.div`
    max-width: 700px;
    background: #010409;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 80px auto;
`

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 150px;
        border-radius: 20%;
        margin-top: 20px 0;
    }

    h1{
        font-size: 36px;
        color: #fff;
    }

    p{
        margin-top: 5px;
        font-size: 14px;
        color: #acacac;
        text-align: center;
        line-height: 1.4;
        max-width: 400px;
    }
`

export const BackButton = styled(Link)`
    background-color: transparent;
    border: none;
    outline: none;
`

export const IssuesList = styled.ul`
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #0d10168d;
    list-style: none;

    li{
        display: flex;
        padding: 15px 10px;

        & + li {
            margin-top: 12px;
        }

        img{
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 2px solid #0d1016;
        }

        div{
            flex: 1;
            margin-left: 12px;

            p{
                margin-top: 10px;
                font-size: 13px;
                color: #7c7c7c;
            }
        }

        strong{
            font-size: 15px;

            a{
                text-decoration: none;
                color: #fff;
                transform: 0.3s;

                &:hover{
                    color: #0071db;
                }
            }

            span{
                background-color: #222;
                color: #ddd;
                border-radius: 4px;
                font-size: 12px;
                font-weight: 600;
                padding: 5px 7px;
                margin-left: 10px;
            }
        }
    }
`
