const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
const democratic = presidents.filter((president) => president.party === "D");
console.table(democratic);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement
const republican = presidents.filter(
  (president) => president.party === "R" && president.terms === 1
);
console.table(republican);

//3) return only the last three presidents
const last3 = presidents.slice(9, 12);
console.table(last3);

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
const dems2 = presidents.filter(
  (president) => president.party === "D" && president.terms === 2
);
console.table(dems2);

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
//const LBJ = presidents.filter(
// (president) => president.name === "Lyndon Johnson" && president.terms === 2
//);
//console.table(LBJ);
/*const LBJ = presidents.filter(function (inventor) {
  if (presidents.name === "Lyndon Johnson" && presidents.terms === 2);
  {
    return "LBJ served two terms";
  }
});
console.table(LBJ);*/

//const LBJ = presidents.some(function (president) {
  ///const tru = "LBJ served two terms";
  ///const fals = "LBJ was one and done";
  const LJ = president.name === "Lyndon Johnson"{
    if (president.terms === 2){
      console.log("LBJ served two terms");
    } else{
      console.log("LBJ was one and done");
    }
  }
  ///if (president.terms === 2 && president.name === "Lyndon Johnson") {
  ///  console.log("LBJ served two terms");
  ///} else {
  ///  console.log("LBJ was one and done");
 // }
//});
console.log(LBJ);
