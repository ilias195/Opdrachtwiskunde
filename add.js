function inhoudkubus(lengte, breedte, hoogte) {
    let kubusinhoud = (lengte * breedte * hoogte)
    return kubusinhoud
}
console.log(inhoudkubus(5, 5, 5))


function inhoudcilinder(hoogte, straal) {
    let oppcirkel = (Math.PI * straal ** 2)
    let inhoudcilinder = (hoogte * oppcirkel)
    return inhoudcilinder

}
console.log(inhoudcilinder(2, 6,))



function oppdriehoek(rhz, rhz) {
    let phytagoras1 = (rhz ** 2 + rhz ** 2)
    let phytagoras2 = (Math.sqrt(phytagoras1))
    return phytagoras2
}
console.log(oppdriehoek(5, 5))


function gemiddelde (getal1,getal2,getal3,getal4,getal5,getal6,getal7){
let optellen = (getal1 + getal2 +getal3 + getal4 +getal5 +getal6 + getal7);
let aantalnummers = (7)
let delen = (optellen / aantalnummers)
return delen
}
console.log (gemiddelde(5,6,7,4,5,6,7))
