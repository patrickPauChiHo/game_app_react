import React from "react";
//Styled and animation
import styled from "styled-components";
import {motion} from "framer-motion";
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
        <StyledGame LayoutId={stringPathId} onClick={loadDetailHandler}>
            <Link to={`/game/${id}?key=${process.env.REACT_APP_GAME_API}`}>
            <motion.h3 LayoutId={`title ${stringPathId}`}>{name}</motion.h3>
            <p>{released}</p>
            <motion.img LayoutId={`image ${stringPathId}`} src={smallImage(image, 640)} alt={name}/>
            </Link>
        </StyledGame>
    )
}


const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img{
        width: 100%;
        height: 30vh;
        object-fit: cover;
    }`
export default Game;