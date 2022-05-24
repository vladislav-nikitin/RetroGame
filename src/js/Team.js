// Team - класс для команды (набор персонажей), представляющих компьютер и игрока

import Bowman from './Characters.js/Bowman';
import Daemon from './Characters.js/Daemon';
import Magician from './Characters.js/Magician';
import Swordsman from './Characters.js/Swordsman';
import Undead from './Characters.js/Undead';
import Vampire from './Characters.js/Vampire';

export default class Team {
  constructor(heroes) {
    this.humanTypes = [Bowman, Swordsman, Magician];
    this.computerTypes = [Daemon, Vampire, Undead];
  }
}
