import Team from './Team';

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
  yield new allowedTypes[type](level);
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // создание команды из персонажей

  const team = new Team();
  for (let i = 0; i < characterCount; i += 1) {
    team.add(characterGenerator(allowedTypes, maxLevel));
  }
  return team;
}
