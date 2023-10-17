import combatants from "./baseCombatants"
import { Knight, Horse, Lance, Vitals }from './knight'
import { newKnight } from "./knightGenerator"
import { cull } from "./culler"

type combatantResult = {
    points: number,
    injury: string,
    lostVitality: {
        endurance: number,
        hp: number
    }
}

type combatantPerformance = {
    strength: number,
    accuracy: number,
    grip: number,
    fanciness: number
}

export type joustResult = {
    combatantOne: Knight,
    combatantOneResult: combatantResult,
    combatantTwo: Knight,
    combatantTwoResult: combatantResult,
    winner: Knight
}


export function joust(combatantOne: Knight, combatantTwo: Knight): joustResult {
    let combatantOnePerformance: combatantPerformance = combat(combatantOne)
    let combatantTwoPerformance: combatantPerformance = combat(combatantTwo)

    let combatantOneResult: combatantResult = {
        points: calculatePoints(combatantOne, combatantOnePerformance),
        injury: "none",
        lostVitality: {
            endurance: 0,
            hp: 0
        }
    }

    let combatantTwoResult: combatantResult = {
        points: calculatePoints(combatantTwo, combatantTwoPerformance),
        injury: "none",
        lostVitality: {
            endurance: 0,
            hp: 0
        }
    }

    let winner: Knight

    if (combatantOneResult.points == combatantTwoResult.points){
        console.log("Tied on points! Fanciness decides victory!")
        combatantOnePerformance.accuracy > combatantTwoPerformance.accuracy ? winner = combatantOne : winner = combatantTwo
    } else if (combatantOneResult.points > combatantTwoResult.points){
        winner = combatantOne
    } else {
        winner = combatantTwo
    }

    console.log(winner.name + " wins the joust!")
    return {
        combatantOne,
        combatantOneResult,
        combatantTwo,
        combatantTwoResult,
        winner
    }
}

function calculatePoints(combatant: Knight, combatantPerformance: combatantPerformance): number {
    let points: number = 0;
    let damageDie: number = 0;
    let damage: number = 0;
    
    // accuracy ranges: 1-4 completely miss (no lance damage), 5-9 barely hit (1d4 lance damage and 1 point), 
    //                  10-14 solid hit (1d8 lance damage and 2 points), 15-19 great hit (1d12 lance damage 3 points), 20+ crit (auto destroy lance 5 points)
    switch (Math.floor((combatantPerformance.accuracy > 0 ? combatantPerformance.accuracy : 0) / 5)) {
        case (0): 
            console.log(combatant.name + " missed... oof, no points")
            break;
        case (1):
            console.log(combatant.name + " barely hits, 1 point")
            damageDie = 4;
            points = 1
            break;
        case (2):
            console.log(combatant.name + " hits solidly, 2 points")
            damageDie = 8;
            points = 2
            break;
        case (3):
            console.log(combatant.name + " scores a great hit! 3 points")
            damageDie = 12;
            points = 3
            break;
        default: 
            console.log(combatant.name + " CRIT! HOLY SHIT! 5 points!")
            damage = 99;
            points = 5
            break;
    }

    if (damage == 0) {
        damage = Math.floor(Math.random() * (damageDie + 1)) + modifier(combatantPerformance.strength) // strength performance: modifies damage
        damage < 0 ? damage = 1 : damage
        console.log(combatant.name + " does " + damage + " damage to their lance")
    } 
    
    if (combatant.lance.hp <= damage) {
        // grip low: drop lance (IF target hit, lance cannot break)
        if (combatantPerformance.grip > 10) {
        console.log(combatant.name + " broke their lance! 5 more points!")
        points += 5 
        }
    }

    return points
}

function combat(combatant: Knight): combatantPerformance {
    let fanciness: number = roll(combatant.fanciness)    // fanciness: modifies the other 3 stats
    let performance : combatantPerformance = {
        strength: roll(combatant.strength) + Math.floor(modifier(fanciness)/2),
        accuracy: roll(combatant.accuracy) + Math.floor(modifier(fanciness)/2),
        grip: roll(combatant.grip) + Math.floor(modifier(fanciness)/2),
        fanciness
    }
    console.log (combatant.name + " rolled a " + performance.strength + " on strength (" + modifier(performance.strength)+ ")")
    console.log (combatant.name + " rolled a " + performance.accuracy + " on accuracy (" + modifier(performance.accuracy)+ ")")
    console.log (combatant.name + " rolled a " + performance.grip + " on grip (" + modifier(performance.grip)+ ")")
    console.log (combatant.name + " rolled a " + performance.fanciness + " on fanciness (" + modifier(performance.fanciness)+ ")")
    return performance
}

function roll(stat: number): number {
    return Math.floor(Math.random() * 21) + modifier(stat)
}

function modifier(stat: number): number {
    return Math.floor((stat - 10)/2); 
}

export function doIt(): void {
    for (let i = 0; i <= 7; i++){
        console.log("JOUST NUMBER: " + (i + 1))
        joust(combatants[i], combatants[(combatants.length - 1) - i])
    }
    // cull(1048576, 16)
}

doIt()