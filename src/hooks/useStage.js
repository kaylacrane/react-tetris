import { useState, useEffect } from "react";
import { createStage } from "../gameHelpers";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
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

      return newStage;
    };

    setStage((prev) => updateStage(prev));
  }, [player]);

  return [stage, setStage];
};
