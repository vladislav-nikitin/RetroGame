import GamePlay from "./GamePlay";
import GameState from "./GameState";
import Team from "./Team";
import themes from "./themes";
import cursors from "./cursors";
import PositionedCharacter from "./PositionedCharacter";
import Bowman from "./Characters.js/Bowman";
import Daemon from "./Characters.js/Daemon";
import Magician from "./Characters.js/Magician";
import Swordsman from "./Characters.js/Swordsman";
import Undead from "./Characters.js/Undead";
import Vampire from "./Characters.js/Vampire";

import { generateTeam, characterGenerator } from "./generators";

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.players = [];
    this.currentTurn = "player"; // Нужно помнить, чей сейчас ход: игрока или компьютера
    this.selectedChar = null; // Выбранный персонаж
    this.availableSteps = null; // допустимые шаги
  }

  init() {
    // Вам необходимо вызвать метод drawUi с нужной темой для отрисовки на экране
    // (вызывайте этот метод в методе init класса GameController)
    this.gamePlay.drawUi(themes.prairie);

    // Подредактируйте модуль так, чтобы можно было использовать определённый в нём объект
    // (а не прописывать каждый раз строки руками).
    // Пока не понятно


    // события мыши
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this)); // Вход указателя мыши в ячейку поля
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this)); // Выход указателя мыши из ячейки поля
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this)); // Клик мышью по ячейке поля
    // Новая игра
    this.gamePlay.addNewGameListener(this.onNewGameClick.bind(this));
    // Сохранение
    this.gamePlay.addSaveGameListener(this.onSaveGameClick.bind(this));
    // Загрузка
    this.gamePlay.addLoadGameListener(this.onLoadGameClick.bind(this));

    // генерация команд игрока и компьютера
    const humanTeam = generateTeam(
      new Team().humanTypes,
      1,
      this.gamePlay.boardSize
    );
    const computerTeam = generateTeam(
      new Team().computerTypes,
      1,
      this.gamePlay.boardSize
    );
    this.generateTeamsPosition(this.humanTeam, this.computerTeam);
  }

  // генерация позиций игроков
  generateTeamsPosition(team1, team2) {
    this.humanPositions = getPositions(
      team1.length,
      "human",
      this.gamePlay.boardSize
    );
    this.computerPositions = getPositions(
      team2.length,
      "computer",
      this.gamePlay.boardSize
    );
  }

  // массив со стартовыми позициями игроков
  getPositions(characterCount, player, this.gamePlay.boardSize) {
    const positionsPlayers = [];
    const possiblePositions = [];
    for (let i = 0; i < this.gamePlay.boardSize * 2; i += this.gamePlay.boardSize) {
      if (player === "human") {
        possiblePositions.push(i, i + 1);
      }
      if (player === "computer") {
        possiblePositions.push(i + this.gamePlay.boardSize - 2, i + this.gamePlay.boardSize - 1);
      }
    }

    let possibleCountPositions = this.gamePlay.boardSize * 2;
    for (let i = 0; i < characterCount; i += 1) {
      const position = Math.floor(Math.random() * possibleCountPositions);
      positionsPlayers.push(possiblePositions[position]);
      possiblePositions.splice(position, 1);
      possibleCountPositions -= 1;
    }

    return positionsPlayers;
  }

  onCellEnter(index) {
    const playersItem = this.players.find((item) => item.position === index);
    // отображение информации 🎖level ⚔attack 🛡defence ❤health, если в поле есть персонаж
    if (playersItem) {
      const { level, health, attack, defence } = playersItem.character;
      const message = `\u{1F396} ${level} \u{2694} ${attack} \u{1F6E1} ${defence} \u{2764} ${health}`;
      this.gamePlay.showCellTooltip(message, index);
    }
  }
  onCellLeave(index) {
    // скрываем подсказку

    if (!this.player) this.gamePlay.hideCellTooltip(index);
  }

  onCellClick(index) {

    // Выделяем одного из персонажей
    let currentChar = this.players.find((char) => char.position === index);

    if (currentChar && humanCell) {
      this.players.forEach((elem) => this.gamePlay.deselectCell(elem.position));

      this.selectedChar = currentChar;
      this.gamePlay.selectCell(this.selectedChar.position);
    }

    if (this.selectedChar && !currentChar) {
      // если есть выделенный персонаж, клетка свободна
      this.players.forEach((elem) => this.gamePlay.deselectCell(elem.position));
      currentChar = this.selectedChar;
      currentChar.position = index;

      this.gamePlay.redrawPositions(this.players);

      if (this.currentTurn === "player") this.currentTurn = "computer";
        else {
      this.currentTurn === "player";
    }
    }
  }
}
