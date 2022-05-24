import Character from '../Character';

export default class Daemon extends Character {
  constructor(...props) {
    super(...props);
    this.attack = 10;
    this.deffence = 40;
    this.type = 'daemon';
  }
}
