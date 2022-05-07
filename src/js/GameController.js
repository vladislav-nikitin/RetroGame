import GamePlay from "./GamePlay";
import GameState from "./GameState";
import themes from "./themes";

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi(themes.prairie); // тема для отрисовки на экране

    // Подредактируйте модуль так, чтобы можно было использовать определённый в нём объект
    // (а не прописывать каждый раз строки руками).
    // Пока не понятно

    // ЗАДАЧА 8. Вывод информации о персонаже

    // Вход указателя мыши в ячейку поля
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    // Выход указателя мыши из ячейки поля
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));
    // Клик мышью по ячейке поля
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
    // Новая игра
    this.gamePlay.addNewGameListener(this.onNewGameClick.bind(this));
    // Сохранение
    this.gamePlay.addSaveGameListener(this.onSaveGameClick.bind(this));
    // Загрузка
    this.gamePlay.addLoadGameListener(this.onLoadGameClick.bind(this));
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
    const playersItem = this.players.find((item) => item.position === index);
    // отображение информации 🎖level ⚔attack 🛡defence ❤health, если в поле есть персонаж
    if (playersItem) {
      const { level, health, attack, defence } = playersItem.character;
      const message = `\u{1F396} ${level} \u{2694} ${attack} \u{1F6E1} ${defence} \u{2764} ${health}`;
      this.gamePlay.showCellTooltip(message, index);
    }
  }
  onCellLeave(index) {
    // TODO: react to mouse leave

    if (!this.player) this.gamePlay.hideCellTooltip(index);
  }

  onCellClick(index) {
    // TODO: react to click
    const playersItem = this.players.find((item) => item.position === index);
    if (playersItem && playersItem.character.player === "user") {
      //
    }
  }

  onNewGameClick() {
    this.players = [];

    // if (this.saveGame) {
    //   this.saveGame = undefined;
    // }
  }
}
