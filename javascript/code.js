console.log('Test complete');



var shivan = {
	name: "Shivan",
	mana: "4CRR",
	Type: "Creature",
	Strength: 8,
	Defense : 5,
	modifier: .8,
    id: "shivan"
}


var Tauntingelf = {
	name: "Taunting Elf",
	mana: "F",
	Type: "Creature",
	Strength:5,
	Defense : 6,
	modifier: 1.2,
    id: "elf"
}
var Deck = []
Deck.push ( shivan )
Deck.push ( Tauntingelf )

for ( var index = 0; index < Deck.length; index++ ) {
	console.log ( Deck[index].name + " " + Deck[index].mana + " " + Deck[index].Type + " " + Deck[index].Strength + "/" + Deck[index].Defense + " " + Deck[index].modifier )
}

console.log (shivan.name + " attacks " + Tauntingelf.name )
console.log ( Tauntingelf.name + " has " + ( Tauntingelf.Defense - shivan.Strength * shivan.modifier ) + " life left " )

Tauntingelf.Defense = getDefenseAfterAttack (shivan, Tauntingelf ) //     Tauntingelf.Defense - shivan.Strength * shivan.modifier
shivan.Defense =getDefenseAfterAttack ( Tauntingelf, shivan ) //     shivan.Defense - Tauntingelf.Strength * Tauntingelf.modifier

setTimeout(() => {
    for ( var index = 0; index < Deck.length; index++ ) {
        doesCreatureSurvive ( Deck [ index ] )
    }    
}, 5000);




function getDefenseAfterAttack ( attacker, defender ) {
	return defender.Defense - attacker.Strength * attacker.modifier	
}

function doesCreatureSurvive ( Creature ) {
	if ( Creature.Defense <= 0 ) {
		console.log ( Creature.name + " dies " )
       var card = document.getElementsByClassName(Creature.id)[0]
       card.classList.add("dead")
	}
}