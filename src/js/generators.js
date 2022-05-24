import Team from './Team';
import PositionedCharacter from './PositionedCharacter';

/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  // создание случайного персонажа

  const type = Math.floor(Math.random() * allowedTypes.length);
  const level = Math.ceil(Math.random() * maxLevel);
  return new allowedTypes[type](level);
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // создание команды

  const teamCharacters = new Team();
  for (let i = 0; i < characterCount; i += 1) {
    teamCharacters.add(characterGenerator(allowedTypes, maxLevel));
  }
  return teamCharacters;
}
