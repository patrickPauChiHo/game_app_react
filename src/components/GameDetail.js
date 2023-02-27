import React from "react";
//Styled and animation
import styled from "styled-components";
import {motion} from "framer-motion";
//Redux
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
//util
import {smallImage} from "../util";
//Images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";


const GameDetail = ({pathId}) => {
    const navigate = useNavigate();
    //Go back
    const exitDetailHandler = (e) => {
        const element = e.target;
        //console.log(element);
        if(element.classList.contains("shadow")){
            document.body.style.overflow = "auto";
            navigate("/");
        }
    }
    //platforms logo
    const getPlatform = (platform) => {
        switch(platform){
            case "PlayStation 4":
                return playstation;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            default:
                return gamepad;
        }
    }
    


    //get data
    const {game, screen, isLoading} = useSelector((state) => state.detail);

    return(
        <>
        {!isLoading && (
        <CardShadow  className="shadow" onClick={exitDetailHandler}>
            <Detail layoutId="{pathId}">
                <Stats>
                    <div className="rating">
                        <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                        <p>Rating: {game.rating}</p>
                    </div>
                    <Info >
                        <h3>Platforms</h3>
                        <Platforms>
                            {game.platforms.map(platform => (
                                <img 
                                key={platform.platform.id}
                                src= {getPlatform(platform.platform.name)}>
                                </img>
                            ))}
                        </Platforms>
                    </Info >
                </Stats>
                <Media>
                    <motion.img 
                    layoutId={`image ${pathId}`}
                    src={smallImage(game.background_image, 1280 )} alt={game.name}/>
                </Media>
                <Description>
                    <p>{game.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screen.results.map(screen =>(
                        <img src={smallImage(screen.image, 1280)} alt={game.name} key={screen.id}></img>
                    ))}
                </div>
            </Detail>
        </CardShadow>
        )}
        </>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    &::-webkit-scrollbar{
        with: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track{
        background: white;
    }
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    box-shadow: 0px 5px 20px rgba(0, 255, 255,0.2);
    padding: 2rem 5rem;  
    background: #1b1b1b;
    position: absolute;
    left: 10%;
    color: black;
    z-index: 10;
    img{
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img{
        width: 100%;
        height: 60vh;
        object-fit: cover;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;



export default GameDetail;

