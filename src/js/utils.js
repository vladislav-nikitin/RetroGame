/* eslint-disable */
import PositionedCharacter from "./PositionedCharacter";
import Bowman from "./Characters.js/Bowman";
import Daemon from "./Characters.js/Daemon";
import Magician from "./Characters.js/Magician";
import Swordsman from "./Characters.js/Swordsman";
import Undead from "./Characters.js/Undead";
import Vampire from "./Characters.js/Vampire";

// изменение отрисовки границ поля

export function calcTileType(index, boardSize) {
  if (index === 0) {
    return "top-left";
  }
  if (index === boardSize - 1) {
    return "top-right";
  }
  if (index === boardSize ** 2 - boardSize) {
    return "bottom-left";
  }
  if (index === boardSize ** 2 - 1) {
    return "bottom-right";
  }
  if (index > 0 && index < boardSize - 1) {
    return "top";
  }
  if (index > boardSize ** 2 - boardSize && index < boardSize ** 2) {
    return "bottom";
  }
  if (index % boardSize === 0) {
    return "left";
  }
  if ((index + 1) % boardSize === 0) {
    return "right";
  }

  return "center";
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return "critical";
  }

  if (health < 50) {
    return "normal";
  }

  return "high";
}
