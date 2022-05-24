// GameState - объект, который хранит текущее состояние игры
// (может сам себя воссоздавать из другого объекта)
export default class GameState {
  static from(object) {
    if (object) {
      return object;
    }

    return null;
  }
}
