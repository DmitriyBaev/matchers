export default function sortUnits(units) {
  return units.sort((a, b) => b.health - a.health);
}
