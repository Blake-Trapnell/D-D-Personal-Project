let statTotal;
let stats = {
  dex: 8,
  str: 8,
  wis: 8,
  int: 8,
  con: 8,
  cha: 8,
}
function addstats() {
  statTotal = stats.dex + stats.str + stats.int + stats.wis + stats.con + stats.cha
  return statTotal
}
addstats()
while (statTotal < 69) {
  let fixer = Math.random()
  if (fixer < .1666 && stats.dex < 16) {
    stats.dex++
  }
  else if (fixer > .1666 && fixer < .3333 && stats.str < 16) {
    stats.str++
  }
  else if (fixer > .3333 && fixer < .5 && stats.wis < 16) {
    stats.wis++
  }
  else if (fixer > .5 && fixer < .6666 && stats.int <16) {
    stats.int++
  }
  else if (fixer > .6666 && fixer < .8333 && stats.con < 16) {
    stats.con++
  }
  else if (fixer > .8333 && stats.cha < 16){
    stats.cha++
  }
  else {}
  addstats()
}
console.log(stats);