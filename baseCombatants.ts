import { Knight, Horse, Lance, Vitals }from './knight'

const treasureElipsis: Horse = {
    name: "Treasure Elipsis",
    speed: 65,
    anxiety: 10,
    vitality: {
        maxEndurance: 15,
        currentEndurance: 15,
        maxHp: 20,
        currentHp: 20
    }
}

const barrelsBottom: Horse = {
    name: "Barrel's Bottom",
    speed: 60,
    anxiety: 15,
    vitality: {
        maxEndurance: 20,
        currentEndurance: 20,
        maxHp: 20,
        currentHp: 20
    }
}

const standardLance: Lance = {
    weight: 10,
    hp: 10
}

const combatants: Knight[] = [
    {
        name: "Fusar Hakor",
        mount: barrelsBottom,
        lance: standardLance,
        strength: 16,
        accuracy: 12,
        grip: 14,
        fanciness: 10,
        vitality: {
            maxEndurance: 15,
            currentEndurance: 15,
            maxHp: 15,
            currentHp: 15
        }
    },
    {
        name: "Kordal Sig",
        mount: treasureElipsis,
        lance: standardLance,
        strength: 18,
        accuracy: 11,
        grip: 15,
        fanciness: 9,
        vitality: {
            maxEndurance: 12,
            currentEndurance: 12,
            maxHp: 13,
            currentHp: 13
        }
    }
]

export default combatants