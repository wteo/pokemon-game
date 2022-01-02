class Pokemon {
    constructor (species, type, weakness) {
        this.species = species;
        this.type = type;
        this.weakness = weakness;
    }
}

const bulbasaur = new Pokemon("Bulbasaur", "Grass", "Fire");
const charmander = new Pokemon("Charmander", "Fire", "Water");
const squirtle = new Pokemon("Squirtle", "Water", "Grass");

function random(array) {
    const randomization = array[Math.floor(Math.random() * array.length)];
    return randomization;
}

function generateAPokemon(pokemon) {
    const gender = ["Male", "Male", "Male", "Male", "Male", "Male", "Male", "Female"];
    const stats = [[7,8,9], [1,2,3], [20,21,22,23,24]];
    const [attack, defence, hp] = stats;
    const nature = ["Lonely", "Brave" ,"Adamant", "Relaxed", "Impish", "Lax", "Calm", "Gentle", "Sassy"];
    const profile = {
            species: pokemon.species,
            type: pokemon.type,
            weakness: pokemon.weakness,
            gender: random(gender),
            attack: random(attack),
            defence: random(defence),
            hp: random(hp),
            nature: random(nature)        
        }
    return profile;
}

function effectiveness(playerType, computerType, pokemon, attack, defence, hp) {
    if (playerType === "Grass" && computerType === "Water" || 
        playerType === "Water" && computerType === "Fire" || 
        playerType === "Fire" && computerType === "Grass") {
        attack = (attack*2) - defence;
        hp = hp - attack;
        return `It's super Effective! ${pokemon}'s new HP is ${hp}`;
    } else if (playerType === "Grass" && computerType === "Fire" || 
                playerType === "Fire" && computerType === "Water" || 
                playerType === "Water" && computerType === "Grass") {
        attack = (attack*0.6) - defence;
        hp = hp - attack;
        return `It's not very effective. ${pokemon}'s new HP is ${hp}`;
    } else {
        attack = attack - defence;
        hp = hp - attack;
        return `${pokemon}'s new HP is ${hp}`;
    }
}

const pickAPokemon = [bulbasaur, charmander, squirtle];
const player = generateAPokemon(random(pickAPokemon));
const computer = generateAPokemon(random(pickAPokemon));
console.log(player);
console.log(computer);
console.log(effectiveness(player.type, computer.type, computer.species, player.attack, computer.defence, computer.hp));
console.log(effectiveness(computer.type, player.type, player.species, computer.attack, player.defence, player.hp));