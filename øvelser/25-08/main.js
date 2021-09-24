

/* øvelse 10 */

for (let i = 0; i <= 10; i++) {
    console.log("in loop: ", i);
    
}

let i = 1;

while (i <= 10) {
    console.log("in loop: ", i);
    i++
}
/* øvelse 11 */

for (let ip = 10; ip > 0; ip--) {
    console.log("in loop: ", ip);
    
}

let dum = 10;

while (dum <= 1) {
    console.log("in loop: ", dum);
    dum--
}


/* øvelse 12 */

let sum = 0;

for (let il = 0; il < 10; il++) {
    console.log("in loop: ", il);
    sum += il;
    console.log(sum);
}


/* øvelse 12.1 */

for (let ik = 0; ik < 100; ik++) {
    if (ik == 35) {
    continue        
    }

    if (ik == 58) {
    continue        
    }

    if (ik == 93) {
    break
    }

console.log(ik);
}

/* øvelse 13 */

let tal = [];

for (let ij = 0; ij <= 10; ij++) {
    tal.push(Math.floor(Math.random() * 11));
    console.log("in loop: ", tal);
}

/* øvelse 14 */


/* øvelse 16.1 */

let k = 0;
let line = "";
let trekant = "#";

while (k < 7){
    console.log(line+=trekant);
    k++
}

/* øvelse 17 */

let yndling = ["Allan", "Mark", "Jonas", "Kasper", "Lars"]

for (let s = 0; s <= 5; s++) {
    if (s==0) {
        yndling[0] = yndling[0] + " er den mest sindssyge!"
    }
    console.log(yndling[s]);
}

for (let s = 0; s <= 5; s++) {
    if (s == [3]) {
        break
    }
    console.log(yndling[s]);}

let karakter = "A"; 

switch (karakter) {
    case "A":
        console.log("du fik et 12!")
        break
    case "B":
        console.log("du fik et 10!")
        break
    case "C":
        console.log("du fik et 7!")
        break
    case "D":
        console.log("du fik et 4!")
        break
    case "E":
        console.log("du fik et 02!")
        break
    case "F":
        console.log("du fik et 00!")
        break
}