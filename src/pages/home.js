import React, {useEffect} from "react";
//Redux setup
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../action/gameAction';
//Components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
//Styled and animation
import styled from "styled-components";
import {motion, AnimatePresence, LayoutGroup} from "framer-motion";
//router
import {useLocation} from 'react-router-dom';

const Home = () => {
    //get the current location
    const location = useLocation();
    const pathId = location.pathname.split('/')[2];
    //console.log(pathId);
    //Fetch Games
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadGames());
    }, [dispatch]);
    // Get the data 
    const {popular, newGames, upcoming } = useSelector((state) => state.games);
    
    return(
        <GameList>
            <LayoutGroup type="crossfade">
            <AnimatePresence>
            {pathId && <GameDetail pathId={pathId}/>}
            </AnimatePresence>
            <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map(game =>(
                    <Game 
                        name={game.name} 
                        released={game.released} 
                        id={game.id}
                        key={game.id}  
                        image={game.background_image}
                    />
                ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {popular.map(game =>(
                    <Game 
                        name={game.name} 
                        released={game.released} 
                        id={game.id}
                        key={game.id}  
                        image={game.background_image}
                    />
                ))}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGames.map(game =>(
                    <Game 
                        name={game.name} 
                        released={game.released} 
                        id={game.id}
                        key={game.id}  
                        image={game.background_image}
                    />
                ))}
            </Games>
            </LayoutGroup>
        </GameList>
    );
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding: 5rem 0rem;
    }
`

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
    `
export default Home;