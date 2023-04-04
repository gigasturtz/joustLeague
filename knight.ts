type Knight = {
    name: string,
    mount: Horse,
    lance: Lance,
    strength: number,
    accuracy: number,
    grip: number,
    fanciness: number,
    vitality: Vitals
}

type Horse = {
    speed: number,
    anxiety: number,
    vitality: Vitals
}

type Vitals = {
    maxEndurance: number,
    currentEndurance: number,
    maxHp: number,
    currentHp: number
}

type Lance = {
    weight: number,
    hp: number,
}