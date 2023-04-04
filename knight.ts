type Knight = {
    name: string,
    mount: Horse,
    lance: Lance,
    strength: number,
    accuracy: number,
    grip: number,
    fanciness: number,
    vitality: Vitals // not implemented
}

type Horse = {
    name: string,
    speed: number,
    anxiety: number,
    vitality: Vitals // not implemented
}

type Vitals = {
    maxEndurance: number,
    currentEndurance: number,
    maxHp: number,
    currentHp: number
}

type Lance = {
    weight: number, // not implemented
    hp: number,
}

export { Knight, Lance, Vitals, Horse }