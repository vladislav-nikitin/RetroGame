// храним тут информацию о том, чей шаг следующий (компьютера или игрока)
export default class GameState {
  static from(object) {
    // TODO: create object
    if (object) {
      return object;
    }

    return null;
  }
}
