import React, { useState } from "react";
import { createStage, checkCollision } from "../gameHelpers";
//styled components
import { StyledControls } from "./styles/StyledControls";
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";
//custom hooks
import { useInterval } from "../hooks/useInterval";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useGameStatus } from "../hooks/useGameStatus";
//components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  const movePlayer = (dir) => {
    /*moves player left and right*/
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        console.log("interval on");
        /*40 is down arrow so this only resets when player releases down arrow*/
        setDropTime(900 / (level + 1));
      }
    }
  };

  const startGame = () => {
    // Reset everything
    setStage(createStage());
    setDropTime(1000); /*starts up interval to make pieces fall*/
    resetPlayer();
    setScore(0);
    setRows(0);
    setLevel(0);
    setGameOver(false);
  };

  const drop = () => {
    //increase level/speed when player has cleared 10 rows
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      //increase speed too
      setDropTime(1000 / (level + 1) + 200);
    }
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game Over - position <1 because we're at top of screen
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({
        x: 0,
        y: 0,
        collided: true,
      }); /*when falling block hits another*/
    }
  };

  const dropPlayer = () => {
    // setDropTime(null); /* to stop interval when player presses key*/
    drop();
  };

  useInterval(() => {
    /*setInterval is not good to use with React. Better to use this custom hook*/
    drop(); /*drop() is called at the rate of dropTime. if we set dropTime to null we can stop the interval*/
  }, dropTime);

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        //left arrow key
        movePlayer(-1);
      } else if (keyCode === 39) {
        //right arrow key
        movePlayer(1);
      } else if (keyCode === 40) {
        //down arrow key
        dropPlayer();
      } else if (keyCode === 38) {
        /*rotates tetromino when up arrow is pressed. can implement another key for another rotation direciton*/
        playerRotate(stage, 1);
      }
    }
  };
  const handleArrowButtons = (event) => {
    const keyCode = parseInt(event.target.dataset.keycode);
    move({ keyCode });
  };
  const windowSize = window.screen.width;
  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        <Stage stage={stage} />
        {windowSize < 1200 ? (
          <StyledControls onMouseDown={handleArrowButtons}>
            <button
              className="up-button control-button fas fa-arrow-alt-circle-up"
              data-keycode="38"
            ></button>
            <button
              className="left-button control-button fas fa-arrow-alt-circle-left"
              data-keycode="37"
            ></button>
            <button
              className="right-button control-button fas fa-arrow-alt-circle-right"
              data-keycode="39"
            ></button>
            <button
              className="down-button control-button fas fa-arrow-alt-circle-down"
              data-keycode="40"
            ></button>
          </StyledControls>
        ) : (
          ""
        )}
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div className="info-area">
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
