// Character - базовый класс, от которого вы будете
// наследоваться и реализовывать специализированных персонажей

export default class Character {
  constructor(level, type = 'generic') {
    if (new.target.name === 'Character') {
      throw new Error('Нельзя создать экземпляр класса Character');
    }
    this.level = level;
    this.type = type;
    this.attack = 0;
    this.defence = 0;
    this.health = 100;
  }

  levelUp() {
    // На 1 повышает поле level автоматически после каждого раунда
    this.level += 1;

    // Показатель health приводится к значению: текущий уровень + 80 (но не более 100)
    this.health += 80;
    if (this.health > 100) {
      this.health = 100;
    }

    // Повышение показателей атаки/защиты
    this.attack = Math.round(
      Math.max(this.attack, (this.attack * (180 - this.health)) / 100),
    );

    this.defence = Math.round(
      Math.max(this.defence, (this.defence * (180 - this.health)) / 100),
    );
  }
}
