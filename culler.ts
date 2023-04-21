import { Knight } from "./knight";
import { newKnight } from "./knightGenerator";
import { joust } from "./event";

export function cull(startingPool: number, endingPool: number) {
    let knights: Knight[] = []
    let winners: Knight[] = []

    for (let i = 0; i <= startingPool; i++){
        knights.push(newKnight(i.toString()))
    }

    while (knights.length > endingPool){
        console.log("Loop")
        while (knights.length > 1) {
            winners.push(joust(knights.pop(), knights.pop()).winner)
        }
        knights = winners
        winners = []
    }

    console.log(knights)
}