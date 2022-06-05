// Team - класс для команды (набор персонажей), представляющих компьютер и игрока

import Bowman from './Heroes.js/Bowman';
import Daemon from './Heroes.js/Daemon';
import Magician from './Heroes.js/Magician';
import Swordsman from './Heroes.js/Swordsman';
import Undead from './Heroes.js/Undead';
import Vampire from './Heroes.js/Vampire';

export default class Team {
  constructor(heroes) {
    this.humanTypes = [Bowman, Swordsman, Magician];
    this.computerTypes = [Daemon, Vampire, Undead];
  }
}
