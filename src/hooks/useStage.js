import { useState, useEffect } from "react";
import { createStage } from "../gameHelpers";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);

    const sweepRows = (newStage) =>
      newStage.reduce((acc, row) => {
        if (row.findIndex((cell) => cell[0] === 0) === -1) {
          /*returns -1 if value not found (if any empty cells/0 in row)*/
          setRowsCleared((prev) => prev + 1); /*add row to rowsCleared state*/
          acc.unshift(new Array(newStage[0].length).fill([0, "clear"]));
          /*to add/unshift new empty row to start of array to replace cleared row*/
          return acc;
        }
        /*return row as is if no full row*/
        acc.push(row);
        return acc;
      }, []);

    const updateStage = (prevStage) => {
      // First clear the stage (for loop might be faster than map method)
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      ); /*return empty cell if not marked as merged. otherwise cell stays as is because it has collided with another cell */

      // Then draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            /*find out shape by checking for empty cells*/
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });
      //check if we collided
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }

      return newStage;
    };

    setStage((prev) => updateStage(prev));
  }, [
    player.collided,
    player.pos.x,
    player.pos.y,
    player.tetromino,
    resetPlayer,
  ]);

  return [stage, setStage, rowsCleared];
};
