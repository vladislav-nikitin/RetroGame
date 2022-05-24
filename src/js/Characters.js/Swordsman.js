import Character from '../Character';

export default class Swordsman extends Character {
  constructor(...props) {
    super(...props);
    this.attack = 40;
    this.deffence = 10;
    this.type = 'swordsman';
  }
}
