import { Knight } from './knight'

const combatants: Knight[] = [
    {
        name: 'Almeric the Titan',
        mount: {
            name: '', speed: 4, anxiety: 9, vitality: {
                maxEndurance: 20,
                currentEndurance: 20,
                maxHp: 20,
                currentHp: 20
            }
        },
        lance: { weight: 17, hp: 11 },
        strength: 10,
        accuracy: 14,
        grip: 10,
        fanciness: 7,
        vitality: {
            maxEndurance: 12,
            currentEndurance: 12,
            maxHp: 12,
            currentHp: 12
        }
    },
    {
        name: 'Guntard of the Ice',
        mount: {
            name: '', speed: 10, anxiety: 9, vitality: {
                maxEndurance: 20,
                currentEndurance: 20,
                maxHp: 20,
                currentHp: 20
            }
        },
        lance: { weight: 6, hp: 17 },
        strength: 7,
        accuracy: 16,
        grip: 5,
        fanciness: 9,
        vitality: {
            maxEndurance: 11,
            currentEndurance: 11,
            maxHp: 14,
            currentHp: 14
        }
    },
    {
        name: 'Christopher the Friend',
        mount: {
            name: '', speed: 14, anxiety: 9, vitality: {
                maxEndurance: 20,
                currentEndurance: 20,
                maxHp: 20,
                currentHp: 20
            }
        },
        lance: { weight: 12, hp: 6 },
        strength: 6,
        accuracy: 13,
        grip: 9,
        fanciness: 12,
        vitality: { maxEndurance: 12, currentEndurance: 12, maxHp: 8, currentHp: 8 }
    },
    {
        name: 'Symon the Ghost',
        mount: {
            name: '', speed: 9, anxiety: 11, vitality: {
                maxEndurance: 20,
                currentEndurance: 20,
                maxHp: 20,
                currentHp: 20
            }
        },
        lance: { weight: 14, hp: 17 },
        strength: 11,
        accuracy: 14,
        grip: 13,
        fanciness: 9,
        vitality: { maxEndurance: 6, currentEndurance: 6, maxHp: 13, currentHp: 13 }
    },
    {
        name: 'Gaiallard of the Lake',
        mount: {
            name: '', speed: 6, anxiety: 8, vitality: {
                maxEndurance: 20,
                currentEndurance: 20,
                maxHp: 20,
                currentHp: 20
            }
        },
        lance: { weight: 16, hp: 6 },
        strength: 13,
        accuracy: 12,
        grip: 7,
        fanciness: 7,
        vitality: { maxEndurance: 4, currentEndurance: 4, maxHp: 10, currentHp: 10 }
    },
    {
        name: 'Fendrel the Loyal',
        mount: {
            name: '', speed: 4, anxiety: 10, vitality: {
                maxEndurance: 20,
                currentEndurance: 20,
                maxHp: 20,
                currentHp: 20
            }
        },
        lance: { weight: 8, hp: 12 },
        strength: 14,
        accuracy: 13,
        grip: 12,
        fanciness: 15,
        vitality: { maxEndurance: 9, currentEndurance: 9, maxHp: 9, currentHp: 9 }
    },
    {
        name: 'Hervoet the Warden',
        mount: {
            name: '', speed: 11, anxiety: 5, vitality: {
                maxEndurance: 20,
                currentEndurance: 20,
                maxHp: 20,
                currentHp: 20
            }
        },
        lance: { weight: 13, hp: 5 },
        strength: 9,
        accuracy: 14,
        grip: 10,
        fanciness: 14,
        vitality: { maxEndurance: 4, currentEndurance: 4, maxHp: 11, currentHp: 11 }
    },
    {
        name: 'Humfredus the Gorgeous',
        mount: {
            name: '', speed: 12, anxiety: 9, vitality: {
                maxEndurance: 20,
                currentEndurance: 20,
                maxHp: 20,
                currentHp: 20
            }
        },
        lance: { weight: 5, hp: 16 },
        strength: 5,
        accuracy: 10,
        grip: 11,
        fanciness: 9,
        vitality: { maxEndurance: 15, currentEndurance: 15, maxHp: 5, currentHp: 5 }
    },
    {
        name: 'Adela the Highborn',
        mount: {
            name: '', speed: 15, anxiety: 5, vitality: {
                maxEndurance: 20,
                currentEndurance: 20,
                maxHp: 20,
                currentHp: 20
            }
        },
        lance: { weight: 5, hp: 13 },
        strength: 17,
        accuracy: 16,
        grip: 10,
        fanciness: 12,
        vitality: { maxEndurance: 4, currentEndurance: 4, maxHp: 7, currentHp: 7 }
    },
    {
        name: 'Anilla the Bruiser',
        mount: {
            name: '', speed: 6, anxiety: 4, vitality: {
                maxEndurance: 20,
                currentEndurance: 20,
                maxHp: 20,
                currentHp: 20
            }
        },
        lance: { weight: 13, hp: 9 },
        strength: 9,
        accuracy: 18,
        grip: 11,
        fanciness: 8,
        vitality: { maxEndurance: 8, currentEndurance: 8, maxHp: 8, currentHp: 8 }
    },
    {
        name: 'Maerwynn the Fierce',
        mount: {
            name: '', speed: 5, anxiety: 9, vitality: {
                maxEndurance: 20,
                currentEndurance: 20,
                maxHp: 20,
                currentHp: 20
            }
        },
        lance: { weight: 16, hp: 6 },
        strength: 9,
        accuracy: 16,
        grip: 8,
        fanciness: 10,
        vitality: { maxEndurance: 3, currentEndurance: 3, maxHp: 7, currentHp: 7 }
    },
    {
        name: 'Mahalt the Warm',
        mount: {
            name: '', speed: 4, anxiety: 9, vitality: {
                maxEndurance: 20,
                currentEndurance: 20,
                maxHp: 20,
                currentHp: 20
            }
        },
        lance: { weight: 17, hp: 15 },
        strength: 10,
        accuracy: 14,
        grip: 8,
        fanciness: 11,
        vitality: {
            maxEndurance: 11,
            currentEndurance: 11,
            maxHp: 15,
            currentHp: 15
        }
    },
    {
        name: 'Isobella the Whisper',
        mount: {
            name: '', speed: 13, anxiety: 12, vitality: {
                maxEndurance: 20,
                currentEndurance: 20,
                maxHp: 20,
                currentHp: 20
            }
        },
        lance: { weight: 13, hp: 10 },
        strength: 11,
        accuracy: 17,
        grip: 7,
        fanciness: 15,
        vitality: { maxEndurance: 5, currentEndurance: 5, maxHp: 11, currentHp: 11 }
    },
    {
        name: 'Elezabeth of the East',
        mount: {
            name: '', speed: 8, anxiety: 9, vitality: {
                maxEndurance: 20,
                currentEndurance: 20,
                maxHp: 20,
                currentHp: 20
            }
        },
        lance: { weight: 16, hp: 10 },
        strength: 6,
        accuracy: 16,
        grip: 3,
        fanciness: 16,
        vitality: { maxEndurance: 6, currentEndurance: 6, maxHp: 11, currentHp: 11 }
    },
    {
        name: 'Alycie the Silence',
        mount: {
            name: '', speed: 7, anxiety: 9, vitality: {
                maxEndurance: 20,
                currentEndurance: 20,
                maxHp: 20,
                currentHp: 20
            }
        },
        lance: { weight: 17, hp: 7 },
        strength: 8,
        accuracy: 14,
        grip: 7,
        fanciness: 12,
        vitality: { maxEndurance: 7, currentEndurance: 7, maxHp: 11, currentHp: 11 }
    },
    {
        name: 'Maut the Clumsy',
        mount: {
            name: '', speed: 12, anxiety: 3, vitality: {
                maxEndurance: 20,
                currentEndurance: 20,
                maxHp: 20,
                currentHp: 20
            }
        },
        lance: { weight: 6, hp: 10 },
        strength: 12,
        accuracy: 18,
        grip: 13,
        fanciness: 11,
        vitality: { maxEndurance: 6, currentEndurance: 6, maxHp: 11, currentHp: 11 }
    }
]

export default combatants