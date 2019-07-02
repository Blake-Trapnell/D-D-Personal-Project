
let highestStat = ``
let hSN = 8
let ddClass;
let ddRace;
const stats = {dex: 8, str: 8, wis: 8, int: 8, con: 8, cha: 8}
  
  for (let i =0; i < 21; i++) {
      let rando = Math.random() * 60
      rando = Math.ceil(rando)
      if (rando < 10 && stats.dex < 16) { stats.dex++}
      else if (rando < 20 && stats.con < 16) { stats.con++}
      else if (rando < 30 && stats.str < 16) { stats.str++}
      else if (rando < 40 && stats.wis < 16) { stats.wis++}
      else if (rando < 50 && stats.int < 16) { stats.int++}
      else if (rando < 60 && stats.cha < 16) { stats.cha++}
  }
  function findHeighestStat() {
    if (stats.dex > stats.str && stats.dex > stats.wis && stats.dex > stats.int && stats.dex > stats.cha) {
      highestStat = `dex`
      hSN = stats.dex
      return highestStat
    }
    else if (stats.str > stats.wis && stats.str > stats.int && stats.str > stats.cha) {
      highestStat = `str`
      hSN = stats.str
      return highestStat
    }
    else if (stats.wis > stats.int && stats.wis > stats.cha) {
      highestStat = `wis`
      hSN = stats.wis
      return highestStat
    }
    else if (stats.int > stats.cha) {
      highestStat = `int`
      hSn = stats.int
      return highestStat
    }
    else {
      highestStat = `cha`
      hSN = stats.cha
      return highestStat
    }
  }
  findHeighestStat()
  console.log(hSN)
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
        return ddClass
    }
    else {
        ddClass = `druid`
    }
    return ddClass
}
function chaClasses() {
    let rando = Math.random();
    if(rando < .333) {
        ddClass = `bard`
        return ddClass
    }
    else if (rando < .666) {
        ddClass = `sorcerer`
        return ddClass
    }
    else {
        ddClass = `warlock`
        return ddClass
    }
    return ddClass = `wtf yo` 
}
if (highestStat == `dex`) {
    dexClasses()}
    else if (highestStat == `str`) {
        strClasses()}
    else if (highestStat == `wis`) {
            wisClasses()}
    else if (highestStat == `cha`){
                chaClasses()}
  else {ddClass = `wizard`}

//                Assign race
//
let dexRace = () => {
   let rando = Math.random() * 100
    if (rando < 33) {return ddRace = `Human`}
    else if (rando < 66) {return ddRace = "Elf"}
    else {return ddRace = `Halfling`}}
let strRace = () => {
    let rando = Math.random() * 100
    if (rando < 33) {return ddRace = `Dragonborn`}
    else if (rando < 66) {return ddRace = "Human"}
    else {return ddRace = `Half-Orc`}}

let wisRace = () => {
    let rando = Math.random() * 100
    if (rando < 50) {return ddRace = `Half-Elf`}
    else {return ddRace = `Human`}}

let intRace = () => { 
    let rando = Math.random() * 100
    if (rando < 50) {return ddRace = `Gnome`}
    else {return ddRace = `Human`}}

let chaRace = () => { 
    let rando = Math.random() * 100
    if (rando < 33) {return ddRace = 'Half-Elf'}
    else if (rando < 66) {return ddRace = 'Human'}
    else {return ddRace = `Tiefling`}}

if (highestStat == `dex`) {
    dexRace()}
else if (highestStat == `str`) {
strRace()}
else if (highestStat == `wis`) {
wisRace()}
else if (highestStat == `int`) {
intRace()}
else chaRace();

console.log(`                          ${ddRace}`)
console.log (`                          ${ddClass}`)
console.log(stats)