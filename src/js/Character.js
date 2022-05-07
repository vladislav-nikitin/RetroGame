export default class Character {
  constructor(level, type = "generic") {
    if (new.target.name === "Character") {
      throw new Error("Нельзя создать экземпляр класса Character");
    }
    this.level = level;
    this.type = type;
    this.attack = 0;
    this.defence = 0;
    this.health = 100;
    this.player = player;
  }
}
