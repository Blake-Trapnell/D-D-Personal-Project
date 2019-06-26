// random number assignment between the numbers 8 to 17
//
let rando;
function assignstat(){
 rando = (Math.floor(Math.random() * 17) + 1);
if (rando < 8){
  rando = 8
}
return rando;
//Declare stats object and assign each object a random number
//
}
let stats = {
  dex: 8,
  str: 8,
  int: 8,
  wis: 8,
  con: 8,
  cha: 8,
}
 stats.dex = assignstat()
stats.str = assignstat()
 stats.int = assignstat()
 stats.wis = assignstat()
stats.con = assignstat()
stats.cha = assignstat()

//Find the combined number of all of the stats to modify later
//
 let statTotal;

console.log ("dex " + stats.dex + " str " + stats.str + " int " + stats.int + " wis " + stats.wis + " con " + stats.con + " cha " + stats.cha);

function addstats() {
 statTotal = stats.dex + stats.str + stats.int + stats.wis + stats.con + stats.cha
 return statTotal
}
// 
//
addstats()
console.log (statTotal)
function statAdjustMinus(statTotal){
  let adjust = statTotal  - 69
  console.log(adjust)
  return adjust
}
function statAdjustPlus(statTotal){
  let adjust = 69 - statTotal  
  console.log(adjust)
  return adjust 
}
if (statTotal > 69)
{
statAdjustMinus(statTotal)
}
else if (statTotal < 69) {
  statAdjustPlus(statTotal)
}
else{
  console.log(statTotal)
}