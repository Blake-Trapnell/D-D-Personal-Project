// Goal of this Function is to Generate a random, optimized, Adenture League legal, D&D Character.
//The first step will be to assign random stats to the character
let statTotal;
let highestStat;
let ddClass;
// prevents any stat from going lower than 8
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
  else if (fixer < .3333 && stats.str < 16) {
    stats.str++
  }
  else if (fixer < .5 && stats.wis < 16) {
    stats.wis++
  }
  else if (fixer < .6666 && stats.int < 16) {
    stats.int++
  }
  else if (fixer < .8333 && stats.con < 16) {
    stats.con++
  }
  else if (fixer > .8333 && stats.cha < 16) {
    stats.cha++
  }
  else { }
  addstats()
}
console.log(stats);
// Now that we have our stats, we can look into races and a class for our random character.
//the Second step in our process will be to find the highest stat.

function findHeighestStat() {
  if (stats.dex > stats.str && stats.dex > stats.wis && stats.dex > stats.int && stats.dex > stats.cha) {
    highestStat = `dex`
    return highestStat
  }
  else if (stats.str > stats.wis && stats.str > stats.int && stats.str > stats.cha) {
    highestStat = `str`
    return highestStat
  }
  else if (stats.wis > stats.int && stats.wis > stats.cha) {
    highestStat = `wis`
    return highestStat
  }
  else if (stats.int > stats.cha) {
    highestStat = `int`
    return highestStat
  }
  else {
    highestStat = `cha`
    return highestStat
  }
}
findHeighestStat()
console.log(highestStat)
//now we can assign our class based on our heighest stat
function dexClasses() {
  let rando = Math.random();
  if (stats.wis > 10 && highestStat == `dex`) {
    if (rando > .5) {
      ddClass = `monk`
    }
    else {
      ddClass = `ranger`
    }
  }
  else {
    ddClass = `rogue`
  }
  return ddClass
}
function strClasses() {
  let rando = Math.random();
  if (rando < .333){
    ddClass = `barbarian`
  }
  else if (rando < .666) {
    ddClass = `fighter`
  }
  else {
    ddClass = `paladin`
  }
  return ddClass
}
function wisClasses() {
  let rando = Math.random();
  if (rando < .5){
    ddClass = `cleric`
  }
  else {
    ddClass = `druid`
  }
  return ddClass
}
function chaClasses() {
  let rando = Math.random();
  if(rando < .333) {
    ddClasses = `bard`
    return ddClass
  }
  else if (rando < .666) {
    ddClasses = `sorcerer`
    return ddClass
  }
  else {
    ddClasses = `warlock`
    return ddClass
  }
  
}
if (highestStat == `dex`) {
  dexClasses()
}
else if (highestStat == `int`) {
  strClasses()
}
else if (highestStat == `wis`) {
  wisClasses()
}
else if (highestStat == `cha`){
  chaClasses()
}
else {ddClass = `wizard`}
console.log(ddClass)