import { Knight, Horse, Lance, Vitals } from "./knight";

function newKnight(name: string): Knight {
    return {
        name: name,
        mount: rollHorse(),
        lance: rollLance(),
        strength: rollStat(),
        accuracy: rollStat(),
        grip: rollStat(),
        fanciness: rollStat(),
        vitality: rollVitals()
    }
}

function rollStat(): number {
    return Math.floor(Math.random() * 7) + Math.floor(Math.random() * 7) + Math.floor(Math.random() * 7)
}

function rollHorse(): Horse {
    return {
        name: "",
        speed: rollStat(),
        anxiety: rollStat(),
        vitality: rollVitals()
    }
}

function rollLance(): Lance {
    return {
        weight: Math.floor(Math.random() * 13) + 5, // not implemented
        hp: Math.floor(Math.random() * 13) + 5,
    }
}

function rollVitals(): Vitals {
    const endurance = Math.floor(Math.random() * 13) + 3
    const hp = Math.floor(Math.random() * 13) + 3
    return {
        maxEndurance: endurance,
        currentEndurance: endurance,
        maxHp: hp,
        currentHp: hp 
    }
}

export { newKnight, rollStat, rollHorse, rollLance, rollVitals }