import React from "react";
//Styled and animation
import styled from "styled-components";
import {motion} from "framer-motion";
import {popup} from "../animation";
//Redux
import {useDispatch} from "react-redux";
import {loadDetail} from "../action/detailAction";
//Router
import { Link } from "react-router-dom";
//util
import {smallImage} from "../util";

const Game = ({name, released, image, id}) => {
    const stringPathId = id.toString();
    //Load Details
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id));
    }
    return (
        <StyledGame 
        layoutId={stringPathId} 
        onClick={loadDetailHandler}
        variants={popup}
        initial='hidden'
        animate='show'>
            <Link to={`/game/${id}?key=${process.env.REACT_APP_GAME_API}`}>
            <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
            <p>{released}</p>
            <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image, 640)} alt={name}/>
            </Link>
        </StyledGame>
    )
}


const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 255, 255,0.2);
    text-align: center;
    border-radius: 1rem;
    border-color: #00fff6;
    cursor: pointer;
    overflow: hidden;
    img{
        width: 100%;
        height: 30vh;
        object-fit: cover;
    }`
export default Game;