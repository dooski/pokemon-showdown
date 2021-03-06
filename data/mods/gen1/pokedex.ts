export const BattlePokedex: {[k: string]: ModdedSpeciesData} = {
	missingno: {
		inherit: true,
		name: "MissingNo.",
		types: ["Bird", "Normal"],
		baseStats: {hp: 33, atk: 136, def: 0, spa: 6, spd: 6, spe: 29},
		heightm: 3,
		weightkg: 1590.8,
		color: "Gray",
		eggGroups: ["Undiscovered"],
	},
	bulbasaur: {
		inherit: true,
		name: "Bulbasaur",
		types: ["Grass", "Poison"],
		baseStats: {hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45},
		heightm: 0.7,
		weightkg: 6.9,
		color: "Green",
		evos: ["ivysaur"],
		eggGroups: ["Monster", "Grass"],
	},
	ivysaur: {
		inherit: true,
		name: "Ivysaur",
		types: ["Grass", "Poison"],
		baseStats: {hp: 60, atk: 62, def: 63, spa: 80, spd: 80, spe: 60},
		heightm: 1,
		weightkg: 13,
		color: "Green",
		prevo: "bulbasaur",
		evos: ["venusaur"],
		evoLevel: 16,
		eggGroups: ["Monster", "Grass"],
	},
	venusaur: {
		inherit: true,
		name: "Venusaur",
		types: ["Grass", "Poison"],
		baseStats: {hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80},
		heightm: 2,
		weightkg: 100,
		color: "Green",
		prevo: "ivysaur",
		evoLevel: 32,
		eggGroups: ["Monster", "Grass"],
	},
	charmander: {
		inherit: true,
		name: "Charmander",
		types: ["Fire"],
		baseStats: {hp: 39, atk: 52, def: 43, spa: 50, spd: 50, spe: 65},
		heightm: 0.6,
		weightkg: 8.5,
		color: "Red",
		evos: ["charmeleon"],
		eggGroups: ["Monster", "Dragon"],
	},
	charmeleon: {
		inherit: true,
		name: "Charmeleon",
		types: ["Fire"],
		baseStats: {hp: 58, atk: 64, def: 58, spa: 65, spd: 65, spe: 80},
		heightm: 1.1,
		weightkg: 19,
		color: "Red",
		prevo: "charmander",
		evos: ["charizard"],
		evoLevel: 16,
		eggGroups: ["Monster", "Dragon"],
	},
	charizard: {
		inherit: true,
		name: "Charizard",
		types: ["Fire", "Flying"],
		baseStats: {hp: 78, atk: 84, def: 78, spa: 85, spd: 85, spe: 100},
		heightm: 1.7,
		weightkg: 90.5,
		color: "Red",
		prevo: "charmeleon",
		evoLevel: 36,
		eggGroups: ["Monster", "Dragon"],
	},
	squirtle: {
		inherit: true,
		name: "Squirtle",
		types: ["Water"],
		baseStats: {hp: 44, atk: 48, def: 65, spa: 50, spd: 50, spe: 43},
		heightm: 0.5,
		weightkg: 9,
		color: "Blue",
		evos: ["wartortle"],
		eggGroups: ["Monster", "Water 1"],
	},
	wartortle: {
		inherit: true,
		name: "Wartortle",
		types: ["Water"],
		baseStats: {hp: 59, atk: 63, def: 80, spa: 65, spd: 65, spe: 58},
		heightm: 1,
		weightkg: 22.5,
		color: "Blue",
		prevo: "squirtle",
		evos: ["blastoise"],
		evoLevel: 16,
		eggGroups: ["Monster", "Water 1"],
	},
	blastoise: {
		inherit: true,
		name: "Blastoise",
		types: ["Water"],
		baseStats: {hp: 79, atk: 83, def: 100, spa: 85, spd: 85, spe: 78},
		heightm: 1.6,
		weightkg: 85.5,
		color: "Blue",
		prevo: "wartortle",
		evoLevel: 36,
		eggGroups: ["Monster", "Water 1"],
	},
	caterpie: {
		inherit: true,
		name: "Caterpie",
		types: ["Bug"],
		baseStats: {hp: 45, atk: 30, def: 35, spa: 20, spd: 20, spe: 45},
		heightm: 0.3,
		weightkg: 2.9,
		color: "Green",
		evos: ["metapod"],
		eggGroups: ["Bug"],
	},
	metapod: {
		inherit: true,
		name: "Metapod",
		types: ["Bug"],
		baseStats: {hp: 50, atk: 20, def: 55, spa: 25, spd: 25, spe: 30},
		heightm: 0.7,
		weightkg: 9.9,
		color: "Green",
		prevo: "caterpie",
		evos: ["butterfree"],
		evoLevel: 7,
		eggGroups: ["Bug"],
	},
	butterfree: {
		inherit: true,
		name: "Butterfree",
		types: ["Bug", "Flying"],
		baseStats: {hp: 60, atk: 45, def: 50, spa: 80, spd: 80, spe: 70},
		heightm: 1.1,
		weightkg: 32,
		color: "White",
		prevo: "metapod",
		evoLevel: 10,
		eggGroups: ["Bug"],
	},
	weedle: {
		inherit: true,
		name: "Weedle",
		types: ["Bug", "Poison"],
		baseStats: {hp: 40, atk: 35, def: 30, spa: 20, spd: 20, spe: 50},
		heightm: 0.3,
		weightkg: 3.2,
		color: "Brown",
		evos: ["kakuna"],
		eggGroups: ["Bug"],
	},
	kakuna: {
		inherit: true,
		name: "Kakuna",
		types: ["Bug", "Poison"],
		baseStats: {hp: 45, atk: 25, def: 50, spa: 25, spd: 25, spe: 35},
		heightm: 0.6,
		weightkg: 10,
		color: "Yellow",
		prevo: "weedle",
		evos: ["beedrill"],
		evoLevel: 7,
		eggGroups: ["Bug"],
	},
	beedrill: {
		inherit: true,
		name: "Beedrill",
		types: ["Bug", "Poison"],
		baseStats: {hp: 65, atk: 80, def: 40, spa: 45, spd: 45, spe: 75},
		heightm: 1,
		weightkg: 29.5,
		color: "Yellow",
		prevo: "kakuna",
		evoLevel: 10,
		eggGroups: ["Bug"],
	},
	pidgey: {
		inherit: true,
		name: "Pidgey",
		types: ["Normal", "Flying"],
		baseStats: {hp: 40, atk: 45, def: 40, spa: 35, spd: 35, spe: 56},
		heightm: 0.3,
		weightkg: 1.8,
		color: "Brown",
		evos: ["pidgeotto"],
		eggGroups: ["Flying"],
	},
	pidgeotto: {
		inherit: true,
		name: "Pidgeotto",
		types: ["Normal", "Flying"],
		baseStats: {hp: 63, atk: 60, def: 55, spa: 50, spd: 50, spe: 71},
		heightm: 1.1,
		weightkg: 30,
		color: "Brown",
		prevo: "pidgey",
		evos: ["pidgeot"],
		evoLevel: 18,
		eggGroups: ["Flying"],
	},
	pidgeot: {
		inherit: true,
		name: "Pidgeot",
		types: ["Normal", "Flying"],
		baseStats: {hp: 83, atk: 80, def: 75, spa: 70, spd: 70, spe: 91},
		heightm: 1.5,
		weightkg: 39.5,
		color: "Brown",
		prevo: "pidgeotto",
		evoLevel: 36,
		eggGroups: ["Flying"],
	},
	rattata: {
		inherit: true,
		name: "Rattata",
		types: ["Normal"],
		baseStats: {hp: 30, atk: 56, def: 35, spa: 25, spd: 25, spe: 72},
		heightm: 0.3,
		weightkg: 3.5,
		color: "Purple",
		evos: ["raticate"],
		eggGroups: ["Field"],
	},
	raticate: {
		inherit: true,
		name: "Raticate",
		types: ["Normal"],
		baseStats: {hp: 55, atk: 81, def: 60, spa: 50, spd: 50, spe: 97},
		heightm: 0.7,
		weightkg: 18.5,
		color: "Brown",
		prevo: "rattata",
		evoLevel: 20,
		eggGroups: ["Field"],
	},
	spearow: {
		inherit: true,
		name: "Spearow",
		types: ["Normal", "Flying"],
		baseStats: {hp: 40, atk: 60, def: 30, spa: 31, spd: 31, spe: 70},
		heightm: 0.3,
		weightkg: 2,
		color: "Brown",
		evos: ["fearow"],
		eggGroups: ["Flying"],
	},
	fearow: {
		inherit: true,
		name: "Fearow",
		types: ["Normal", "Flying"],
		baseStats: {hp: 65, atk: 90, def: 65, spa: 61, spd: 61, spe: 100},
		heightm: 1.2,
		weightkg: 38,
		color: "Brown",
		prevo: "spearow",
		evoLevel: 20,
		eggGroups: ["Flying"],
	},
	ekans: {
		inherit: true,
		name: "Ekans",
		types: ["Poison"],
		baseStats: {hp: 35, atk: 60, def: 44, spa: 40, spd: 40, spe: 55},
		heightm: 2,
		weightkg: 6.9,
		color: "Purple",
		evos: ["arbok"],
		eggGroups: ["Field", "Dragon"],
	},
	arbok: {
		inherit: true,
		name: "Arbok",
		types: ["Poison"],
		baseStats: {hp: 60, atk: 85, def: 69, spa: 65, spd: 65, spe: 80},
		heightm: 3.5,
		weightkg: 65,
		color: "Purple",
		prevo: "ekans",
		evoLevel: 22,
		eggGroups: ["Field", "Dragon"],
	},
	pikachu: {
		inherit: true,
		name: "Pikachu",
		types: ["Electric"],
		baseStats: {hp: 35, atk: 55, def: 30, spa: 50, spd: 50, spe: 90},
		heightm: 0.4,
		weightkg: 6,
		color: "Yellow",
		evos: ["raichu"],
		eggGroups: ["Field", "Fairy"],
	},
	raichu: {
		inherit: true,
		name: "Raichu",
		types: ["Electric"],
		baseStats: {hp: 60, atk: 90, def: 55, spa: 90, spd: 90, spe: 100},
		heightm: 0.8,
		weightkg: 30,
		color: "Yellow",
		prevo: "pikachu",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: ["Field", "Fairy"],
	},
	sandshrew: {
		inherit: true,
		name: "Sandshrew",
		types: ["Ground"],
		baseStats: {hp: 50, atk: 75, def: 85, spa: 30, spd: 30, spe: 40},
		heightm: 0.6,
		weightkg: 12,
		color: "Yellow",
		evos: ["sandslash"],
		eggGroups: ["Field"],
	},
	sandslash: {
		inherit: true,
		name: "Sandslash",
		types: ["Ground"],
		baseStats: {hp: 75, atk: 100, def: 110, spa: 55, spd: 55, spe: 65},
		heightm: 1,
		weightkg: 29.5,
		color: "Yellow",
		prevo: "sandshrew",
		evoLevel: 22,
		eggGroups: ["Field"],
	},
	nidoranf: {
		inherit: true,
		name: "Nidoran-F",
		types: ["Poison"],
		baseStats: {hp: 55, atk: 47, def: 52, spa: 40, spd: 40, spe: 41},
		heightm: 0.4,
		weightkg: 7,
		color: "Blue",
		evos: ["nidorina"],
		eggGroups: ["Monster", "Field"],
	},
	nidorina: {
		inherit: true,
		name: "Nidorina",
		types: ["Poison"],
		baseStats: {hp: 70, atk: 62, def: 67, spa: 55, spd: 55, spe: 56},
		heightm: 0.8,
		weightkg: 20,
		color: "Blue",
		prevo: "nidoranf",
		evos: ["nidoqueen"],
		evoLevel: 16,
		eggGroups: ["Undiscovered"],
	},
	nidoqueen: {
		inherit: true,
		name: "Nidoqueen",
		types: ["Poison", "Ground"],
		baseStats: {hp: 90, atk: 82, def: 87, spa: 75, spd: 75, spe: 76},
		heightm: 1.3,
		weightkg: 60,
		color: "Blue",
		prevo: "nidorina",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: ["Undiscovered"],
	},
	nidoranm: {
		inherit: true,
		name: "Nidoran-M",
		types: ["Poison"],
		baseStats: {hp: 46, atk: 57, def: 40, spa: 40, spd: 40, spe: 50},
		heightm: 0.5,
		weightkg: 9,
		color: "Purple",
		evos: ["nidorino"],
		eggGroups: ["Monster", "Field"],
	},
	nidorino: {
		inherit: true,
		name: "Nidorino",
		types: ["Poison"],
		baseStats: {hp: 61, atk: 72, def: 57, spa: 55, spd: 55, spe: 65},
		heightm: 0.9,
		weightkg: 19.5,
		color: "Purple",
		prevo: "nidoranm",
		evos: ["nidoking"],
		evoLevel: 16,
		eggGroups: ["Monster", "Field"],
	},
	nidoking: {
		inherit: true,
		name: "Nidoking",
		types: ["Poison", "Ground"],
		baseStats: {hp: 81, atk: 92, def: 77, spa: 75, spd: 75, spe: 85},
		heightm: 1.4,
		weightkg: 62,
		color: "Purple",
		prevo: "nidorino",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: ["Monster", "Field"],
	},
	clefairy: {
		inherit: true,
		name: "Clefairy",
		types: ["Normal"],
		baseStats: {hp: 70, atk: 45, def: 48, spa: 60, spd: 60, spe: 35},
		heightm: 0.6,
		weightkg: 7.5,
		color: "Pink",
		prevo: "cleffa",
		evos: ["clefable"],
		eggGroups: ["Fairy"],
	},
	clefable: {
		inherit: true,
		name: "Clefable",
		types: ["Normal"],
		baseStats: {hp: 95, atk: 70, def: 73, spa: 85, spd: 85, spe: 60},
		heightm: 1.3,
		weightkg: 40,
		color: "Pink",
		prevo: "clefairy",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: ["Fairy"],
	},
	vulpix: {
		inherit: true,
		name: "Vulpix",
		types: ["Fire"],
		baseStats: {hp: 38, atk: 41, def: 40, spa: 65, spd: 65, spe: 65},
		heightm: 0.6,
		weightkg: 9.9,
		color: "Brown",
		evos: ["ninetales"],
		eggGroups: ["Field"],
	},
	ninetales: {
		inherit: true,
		name: "Ninetales",
		types: ["Fire"],
		baseStats: {hp: 73, atk: 76, def: 75, spa: 100, spd: 100, spe: 100},
		heightm: 1.1,
		weightkg: 19.9,
		color: "Yellow",
		prevo: "vulpix",
		evoType: "useItem",
		evoItem: "Fire Stone",
		eggGroups: ["Field"],
	},
	jigglypuff: {
		inherit: true,
		name: "Jigglypuff",
		types: ["Normal"],
		baseStats: {hp: 115, atk: 45, def: 20, spa: 25, spd: 25, spe: 20},
		heightm: 0.5,
		weightkg: 5.5,
		color: "Pink",
		evos: ["wigglytuff"],
		eggGroups: ["Fairy"],
	},
	wigglytuff: {
		inherit: true,
		name: "Wigglytuff",
		types: ["Normal"],
		baseStats: {hp: 140, atk: 70, def: 45, spa: 50, spd: 50, spe: 45},
		heightm: 1,
		weightkg: 12,
		color: "Pink",
		prevo: "jigglypuff",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: ["Fairy"],
	},
	zubat: {
		inherit: true,
		name: "Zubat",
		types: ["Poison", "Flying"],
		baseStats: {hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 55},
		heightm: 0.8,
		weightkg: 7.5,
		color: "Purple",
		evos: ["golbat"],
		eggGroups: ["Flying"],
	},
	golbat: {
		inherit: true,
		name: "Golbat",
		types: ["Poison", "Flying"],
		baseStats: {hp: 75, atk: 80, def: 70, spa: 75, spd: 75, spe: 90},
		heightm: 1.6,
		weightkg: 55,
		color: "Purple",
		prevo: "zubat",
		evoLevel: 22,
		eggGroups: ["Flying"],
	},
	oddish: {
		inherit: true,
		name: "Oddish",
		types: ["Grass", "Poison"],
		baseStats: {hp: 45, atk: 50, def: 55, spa: 75, spd: 75, spe: 30},
		heightm: 0.5,
		weightkg: 5.4,
		color: "Blue",
		evos: ["gloom"],
		eggGroups: ["Grass"],
	},
	gloom: {
		inherit: true,
		name: "Gloom",
		types: ["Grass", "Poison"],
		baseStats: {hp: 60, atk: 65, def: 70, spa: 85, spd: 85, spe: 40},
		heightm: 0.8,
		weightkg: 8.6,
		color: "Blue",
		prevo: "oddish",
		evos: ["vileplume"],
		evoLevel: 21,
		eggGroups: ["Grass"],
	},
	vileplume: {
		inherit: true,
		name: "Vileplume",
		types: ["Grass", "Poison"],
		baseStats: {hp: 75, atk: 80, def: 85, spa: 100, spd: 100, spe: 50},
		heightm: 1.2,
		weightkg: 18.6,
		color: "Red",
		prevo: "gloom",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		eggGroups: ["Grass"],
	},
	paras: {
		inherit: true,
		name: "Paras",
		types: ["Bug", "Grass"],
		baseStats: {hp: 35, atk: 70, def: 55, spa: 55, spd: 55, spe: 25},
		heightm: 0.3,
		weightkg: 5.4,
		color: "Red",
		evos: ["parasect"],
		eggGroups: ["Bug", "Grass"],
	},
	parasect: {
		inherit: true,
		name: "Parasect",
		types: ["Bug", "Grass"],
		baseStats: {hp: 60, atk: 95, def: 80, spa: 80, spd: 80, spe: 30},
		heightm: 1,
		weightkg: 29.5,
		color: "Red",
		prevo: "paras",
		evoLevel: 24,
		eggGroups: ["Bug", "Grass"],
	},
	venonat: {
		inherit: true,
		name: "Venonat",
		types: ["Bug", "Poison"],
		baseStats: {hp: 60, atk: 55, def: 50, spa: 40, spd: 40, spe: 45},
		heightm: 1,
		weightkg: 30,
		color: "Purple",
		evos: ["venomoth"],
		eggGroups: ["Bug"],
	},
	venomoth: {
		inherit: true,
		name: "Venomoth",
		types: ["Bug", "Poison"],
		baseStats: {hp: 70, atk: 65, def: 60, spa: 90, spd: 90, spe: 90},
		heightm: 1.5,
		weightkg: 12.5,
		color: "Purple",
		prevo: "venonat",
		evoLevel: 31,
		eggGroups: ["Bug"],
	},
	diglett: {
		inherit: true,
		name: "Diglett",
		types: ["Ground"],
		baseStats: {hp: 10, atk: 55, def: 25, spa: 45, spd: 45, spe: 95},
		heightm: 0.2,
		weightkg: 0.8,
		color: "Brown",
		evos: ["dugtrio"],
		eggGroups: ["Field"],
	},
	dugtrio: {
		inherit: true,
		name: "Dugtrio",
		types: ["Ground"],
		baseStats: {hp: 35, atk: 80, def: 50, spa: 70, spd: 70, spe: 120},
		heightm: 0.7,
		weightkg: 33.3,
		color: "Brown",
		prevo: "diglett",
		evoLevel: 26,
		eggGroups: ["Field"],
	},
	meowth: {
		inherit: true,
		name: "Meowth",
		types: ["Normal"],
		baseStats: {hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 90},
		heightm: 0.4,
		weightkg: 4.2,
		color: "Yellow",
		evos: ["persian"],
		eggGroups: ["Field"],
	},
	persian: {
		inherit: true,
		name: "Persian",
		types: ["Normal"],
		baseStats: {hp: 65, atk: 70, def: 60, spa: 65, spd: 65, spe: 115},
		heightm: 1,
		weightkg: 32,
		color: "Yellow",
		prevo: "meowth",
		evoLevel: 28,
		eggGroups: ["Field"],
	},
	psyduck: {
		inherit: true,
		name: "Psyduck",
		types: ["Water"],
		baseStats: {hp: 50, atk: 52, def: 48, spa: 50, spd: 50, spe: 55},
		heightm: 0.8,
		weightkg: 19.6,
		color: "Yellow",
		evos: ["golduck"],
		eggGroups: ["Water 1", "Field"],
	},
	golduck: {
		inherit: true,
		name: "Golduck",
		types: ["Water"],
		baseStats: {hp: 80, atk: 82, def: 78, spa: 80, spd: 80, spe: 85},
		heightm: 1.7,
		weightkg: 76.6,
		color: "Blue",
		prevo: "psyduck",
		evoLevel: 33,
		eggGroups: ["Water 1", "Field"],
	},
	mankey: {
		inherit: true,
		name: "Mankey",
		types: ["Fighting"],
		baseStats: {hp: 40, atk: 80, def: 35, spa: 35, spd: 35, spe: 70},
		heightm: 0.5,
		weightkg: 28,
		color: "Brown",
		evos: ["primeape"],
		eggGroups: ["Field"],
	},
	primeape: {
		inherit: true,
		name: "Primeape",
		types: ["Fighting"],
		baseStats: {hp: 65, atk: 105, def: 60, spa: 60, spd: 60, spe: 95},
		heightm: 1,
		weightkg: 32,
		color: "Brown",
		prevo: "mankey",
		evoLevel: 28,
		eggGroups: ["Field"],
	},
	growlithe: {
		inherit: true,
		name: "Growlithe",
		types: ["Fire"],
		baseStats: {hp: 55, atk: 70, def: 45, spa: 50, spd: 50, spe: 60},
		heightm: 0.7,
		weightkg: 19,
		color: "Brown",
		evos: ["arcanine"],
		eggGroups: ["Field"],
	},
	arcanine: {
		inherit: true,
		name: "Arcanine",
		types: ["Fire"],
		baseStats: {hp: 90, atk: 110, def: 80, spa: 80, spd: 80, spe: 95},
		heightm: 1.9,
		weightkg: 155,
		color: "Brown",
		prevo: "growlithe",
		evoType: "useItem",
		evoItem: "Fire Stone",
		eggGroups: ["Field"],
	},
	poliwag: {
		inherit: true,
		name: "Poliwag",
		types: ["Water"],
		baseStats: {hp: 40, atk: 50, def: 40, spa: 40, spd: 40, spe: 90},
		heightm: 0.6,
		weightkg: 12.4,
		color: "Blue",
		evos: ["poliwhirl"],
		eggGroups: ["Water 1"],
	},
	poliwhirl: {
		inherit: true,
		name: "Poliwhirl",
		types: ["Water"],
		baseStats: {hp: 65, atk: 65, def: 65, spa: 50, spd: 50, spe: 90},
		heightm: 1,
		weightkg: 20,
		color: "Blue",
		prevo: "poliwag",
		evos: ["poliwrath"],
		evoLevel: 25,
		eggGroups: ["Water 1"],
	},
	poliwrath: {
		inherit: true,
		name: "Poliwrath",
		types: ["Water", "Fighting"],
		baseStats: {hp: 90, atk: 85, def: 95, spa: 70, spd: 70, spe: 70},
		heightm: 1.3,
		weightkg: 54,
		color: "Blue",
		prevo: "poliwhirl",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: ["Water 1"],
	},
	abra: {
		inherit: true,
		name: "Abra",
		types: ["Psychic"],
		baseStats: {hp: 25, atk: 20, def: 15, spa: 105, spd: 105, spe: 90},
		heightm: 0.9,
		weightkg: 19.5,
		color: "Brown",
		evos: ["kadabra"],
		eggGroups: ["Human-Like"],
	},
	kadabra: {
		inherit: true,
		name: "Kadabra",
		types: ["Psychic"],
		baseStats: {hp: 40, atk: 35, def: 30, spa: 120, spd: 120, spe: 105},
		heightm: 1.3,
		weightkg: 56.5,
		color: "Brown",
		prevo: "abra",
		evos: ["alakazam"],
		evoLevel: 16,
		eggGroups: ["Human-Like"],
	},
	alakazam: {
		inherit: true,
		name: "Alakazam",
		types: ["Psychic"],
		baseStats: {hp: 55, atk: 50, def: 45, spa: 135, spd: 135, spe: 120},
		heightm: 1.5,
		weightkg: 48,
		color: "Brown",
		prevo: "kadabra",
		evoType: "trade",
		eggGroups: ["Human-Like"],
	},
	machop: {
		inherit: true,
		name: "Machop",
		types: ["Fighting"],
		baseStats: {hp: 70, atk: 80, def: 50, spa: 35, spd: 35, spe: 35},
		heightm: 0.8,
		weightkg: 19.5,
		color: "Gray",
		evos: ["machoke"],
		eggGroups: ["Human-Like"],
	},
	machoke: {
		inherit: true,
		name: "Machoke",
		types: ["Fighting"],
		baseStats: {hp: 80, atk: 100, def: 70, spa: 50, spd: 50, spe: 45},
		heightm: 1.5,
		weightkg: 70.5,
		color: "Gray",
		prevo: "machop",
		evos: ["machamp"],
		evoLevel: 28,
		eggGroups: ["Human-Like"],
	},
	machamp: {
		inherit: true,
		name: "Machamp",
		types: ["Fighting"],
		baseStats: {hp: 90, atk: 130, def: 80, spa: 65, spd: 65, spe: 55},
		heightm: 1.6,
		weightkg: 130,
		color: "Gray",
		prevo: "machoke",
		evoType: "trade",
		eggGroups: ["Human-Like"],
	},
	bellsprout: {
		inherit: true,
		name: "Bellsprout",
		types: ["Grass", "Poison"],
		baseStats: {hp: 50, atk: 75, def: 35, spa: 70, spd: 70, spe: 40},
		heightm: 0.7,
		weightkg: 4,
		color: "Green",
		evos: ["weepinbell"],
		eggGroups: ["Grass"],
	},
	weepinbell: {
		inherit: true,
		name: "Weepinbell",
		types: ["Grass", "Poison"],
		baseStats: {hp: 65, atk: 90, def: 50, spa: 85, spd: 85, spe: 55},
		heightm: 1,
		weightkg: 6.4,
		color: "Green",
		prevo: "bellsprout",
		evos: ["victreebel"],
		evoLevel: 21,
		eggGroups: ["Grass"],
	},
	victreebel: {
		inherit: true,
		name: "Victreebel",
		types: ["Grass", "Poison"],
		baseStats: {hp: 80, atk: 105, def: 65, spa: 100, spd: 100, spe: 70},
		heightm: 1.7,
		weightkg: 15.5,
		color: "Green",
		prevo: "weepinbell",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		eggGroups: ["Grass"],
	},
	tentacool: {
		inherit: true,
		name: "Tentacool",
		types: ["Water", "Poison"],
		baseStats: {hp: 40, atk: 40, def: 35, spa: 100, spd: 100, spe: 70},
		heightm: 0.9,
		weightkg: 45.5,
		color: "Blue",
		evos: ["tentacruel"],
		eggGroups: ["Water 3"],
	},
	tentacruel: {
		inherit: true,
		name: "Tentacruel",
		types: ["Water", "Poison"],
		baseStats: {hp: 80, atk: 70, def: 65, spa: 120, spd: 120, spe: 100},
		heightm: 1.6,
		weightkg: 55,
		color: "Blue",
		prevo: "tentacool",
		evoLevel: 30,
		eggGroups: ["Water 3"],
	},
	geodude: {
		inherit: true,
		name: "Geodude",
		types: ["Rock", "Ground"],
		baseStats: {hp: 40, atk: 80, def: 100, spa: 30, spd: 30, spe: 20},
		heightm: 0.4,
		weightkg: 20,
		color: "Brown",
		evos: ["graveler"],
		eggGroups: ["Mineral"],
	},
	graveler: {
		inherit: true,
		name: "Graveler",
		types: ["Rock", "Ground"],
		baseStats: {hp: 55, atk: 95, def: 115, spa: 45, spd: 45, spe: 35},
		heightm: 1,
		weightkg: 105,
		color: "Brown",
		prevo: "geodude",
		evos: ["golem"],
		evoLevel: 25,
		eggGroups: ["Mineral"],
	},
	golem: {
		inherit: true,
		name: "Golem",
		types: ["Rock", "Ground"],
		baseStats: {hp: 80, atk: 110, def: 130, spa: 55, spd: 55, spe: 45},
		heightm: 1.4,
		weightkg: 300,
		color: "Brown",
		prevo: "graveler",
		evoType: "trade",
		eggGroups: ["Mineral"],
	},
	ponyta: {
		inherit: true,
		name: "Ponyta",
		types: ["Fire"],
		baseStats: {hp: 50, atk: 85, def: 55, spa: 65, spd: 65, spe: 90},
		heightm: 1,
		weightkg: 30,
		color: "Yellow",
		evos: ["rapidash"],
		eggGroups: ["Field"],
	},
	rapidash: {
		inherit: true,
		name: "Rapidash",
		types: ["Fire"],
		baseStats: {hp: 65, atk: 100, def: 70, spa: 80, spd: 80, spe: 105},
		heightm: 1.7,
		weightkg: 95,
		color: "Yellow",
		prevo: "ponyta",
		evoLevel: 40,
		eggGroups: ["Field"],
	},
	slowpoke: {
		inherit: true,
		name: "Slowpoke",
		types: ["Water", "Psychic"],
		baseStats: {hp: 90, atk: 65, def: 65, spa: 40, spd: 40, spe: 15},
		heightm: 1.2,
		weightkg: 36,
		color: "Pink",
		evos: ["slowbro"],
		eggGroups: ["Monster", "Water 1"],
	},
	slowbro: {
		inherit: true,
		name: "Slowbro",
		types: ["Water", "Psychic"],
		baseStats: {hp: 95, atk: 75, def: 110, spa: 80, spd: 80, spe: 30},
		heightm: 1.6,
		weightkg: 78.5,
		color: "Pink",
		prevo: "slowpoke",
		evoLevel: 37,
		eggGroups: ["Monster", "Water 1"],
	},
	magnemite: {
		inherit: true,
		name: "Magnemite",
		types: ["Electric"],
		baseStats: {hp: 25, atk: 35, def: 70, spa: 95, spd: 95, spe: 45},
		heightm: 0.3,
		weightkg: 6,
		color: "Gray",
		evos: ["magneton"],
		eggGroups: ["Mineral"],
	},
	magneton: {
		inherit: true,
		name: "Magneton",
		types: ["Electric"],
		baseStats: {hp: 50, atk: 60, def: 95, spa: 120, spd: 120, spe: 70},
		heightm: 1,
		weightkg: 60,
		color: "Gray",
		prevo: "magnemite",
		evoLevel: 30,
		eggGroups: ["Mineral"],
	},
	farfetchd: {
		inherit: true,
		name: "Farfetch'd",
		types: ["Normal", "Flying"],
		baseStats: {hp: 52, atk: 65, def: 55, spa: 58, spd: 58, spe: 60},
		heightm: 0.8,
		weightkg: 15,
		color: "Brown",
		eggGroups: ["Flying", "Field"],
	},
	doduo: {
		inherit: true,
		name: "Doduo",
		types: ["Normal", "Flying"],
		baseStats: {hp: 35, atk: 85, def: 45, spa: 35, spd: 35, spe: 75},
		heightm: 1.4,
		weightkg: 39.2,
		color: "Brown",
		evos: ["dodrio"],
		eggGroups: ["Flying"],
	},
	dodrio: {
		inherit: true,
		name: "Dodrio",
		types: ["Normal", "Flying"],
		baseStats: {hp: 60, atk: 110, def: 70, spa: 60, spd: 60, spe: 100},
		heightm: 1.8,
		weightkg: 85.2,
		color: "Brown",
		prevo: "doduo",
		evoLevel: 31,
		eggGroups: ["Flying"],
	},
	seel: {
		inherit: true,
		name: "Seel",
		types: ["Water"],
		baseStats: {hp: 65, atk: 45, def: 55, spa: 70, spd: 70, spe: 45},
		heightm: 1.1,
		weightkg: 90,
		color: "White",
		evos: ["dewgong"],
		eggGroups: ["Water 1", "Field"],
	},
	dewgong: {
		inherit: true,
		name: "Dewgong",
		types: ["Water", "Ice"],
		baseStats: {hp: 90, atk: 70, def: 80, spa: 95, spd: 95, spe: 70},
		heightm: 1.7,
		weightkg: 120,
		color: "White",
		prevo: "seel",
		evoLevel: 34,
		eggGroups: ["Water 1", "Field"],
	},
	grimer: {
		inherit: true,
		name: "Grimer",
		types: ["Poison"],
		baseStats: {hp: 80, atk: 80, def: 50, spa: 40, spd: 40, spe: 25},
		heightm: 0.9,
		weightkg: 30,
		color: "Purple",
		evos: ["muk"],
		eggGroups: ["Amorphous"],
	},
	muk: {
		inherit: true,
		name: "Muk",
		types: ["Poison"],
		baseStats: {hp: 105, atk: 105, def: 75, spa: 65, spd: 65, spe: 50},
		heightm: 1.2,
		weightkg: 30,
		color: "Purple",
		prevo: "grimer",
		evoLevel: 38,
		eggGroups: ["Amorphous"],
	},
	shellder: {
		inherit: true,
		name: "Shellder",
		types: ["Water"],
		baseStats: {hp: 30, atk: 65, def: 100, spa: 45, spd: 45, spe: 40},
		heightm: 0.3,
		weightkg: 4,
		color: "Purple",
		evos: ["cloyster"],
		eggGroups: ["Water 3"],
	},
	cloyster: {
		inherit: true,
		name: "Cloyster",
		types: ["Water", "Ice"],
		baseStats: {hp: 50, atk: 95, def: 180, spa: 85, spd: 85, spe: 70},
		heightm: 1.5,
		weightkg: 132.5,
		color: "Purple",
		prevo: "shellder",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: ["Water 3"],
	},
	gastly: {
		inherit: true,
		name: "Gastly",
		types: ["Ghost", "Poison"],
		baseStats: {hp: 30, atk: 35, def: 30, spa: 100, spd: 100, spe: 80},
		heightm: 1.3,
		weightkg: 0.1,
		color: "Purple",
		evos: ["haunter"],
		eggGroups: ["Amorphous"],
	},
	haunter: {
		inherit: true,
		name: "Haunter",
		types: ["Ghost", "Poison"],
		baseStats: {hp: 45, atk: 50, def: 45, spa: 115, spd: 115, spe: 95},
		heightm: 1.6,
		weightkg: 0.1,
		color: "Purple",
		prevo: "gastly",
		evos: ["gengar"],
		evoLevel: 25,
		eggGroups: ["Amorphous"],
	},
	gengar: {
		inherit: true,
		name: "Gengar",
		types: ["Ghost", "Poison"],
		baseStats: {hp: 60, atk: 65, def: 60, spa: 130, spd: 130, spe: 110},
		heightm: 1.5,
		weightkg: 40.5,
		color: "Purple",
		prevo: "haunter",
		evoType: "trade",
		eggGroups: ["Amorphous"],
	},
	onix: {
		inherit: true,
		name: "Onix",
		types: ["Rock", "Ground"],
		baseStats: {hp: 35, atk: 45, def: 160, spa: 30, spd: 30, spe: 70},
		heightm: 8.8,
		weightkg: 210,
		color: "Gray",
		eggGroups: ["Mineral"],
	},
	drowzee: {
		inherit: true,
		name: "Drowzee",
		types: ["Psychic"],
		baseStats: {hp: 60, atk: 48, def: 45, spa: 90, spd: 90, spe: 42},
		heightm: 1,
		weightkg: 32.4,
		color: "Yellow",
		evos: ["hypno"],
		eggGroups: ["Human-Like"],
	},
	hypno: {
		inherit: true,
		name: "Hypno",
		types: ["Psychic"],
		baseStats: {hp: 85, atk: 73, def: 70, spa: 115, spd: 115, spe: 67},
		heightm: 1.6,
		weightkg: 75.6,
		color: "Yellow",
		prevo: "drowzee",
		evoLevel: 26,
		eggGroups: ["Human-Like"],
	},
	krabby: {
		inherit: true,
		name: "Krabby",
		types: ["Water"],
		baseStats: {hp: 30, atk: 105, def: 90, spa: 25, spd: 25, spe: 50},
		heightm: 0.4,
		weightkg: 6.5,
		color: "Red",
		evos: ["kingler"],
		eggGroups: ["Water 3"],
	},
	kingler: {
		inherit: true,
		name: "Kingler",
		types: ["Water"],
		baseStats: {hp: 55, atk: 130, def: 115, spa: 50, spd: 50, spe: 75},
		heightm: 1.3,
		weightkg: 60,
		color: "Red",
		prevo: "krabby",
		evoLevel: 28,
		eggGroups: ["Water 3"],
	},
	voltorb: {
		inherit: true,
		name: "Voltorb",
		types: ["Electric"],
		baseStats: {hp: 40, atk: 30, def: 50, spa: 55, spd: 55, spe: 100},
		heightm: 0.5,
		weightkg: 10.4,
		color: "Red",
		evos: ["electrode"],
		eggGroups: ["Mineral"],
	},
	electrode: {
		inherit: true,
		name: "Electrode",
		types: ["Electric"],
		baseStats: {hp: 60, atk: 50, def: 70, spa: 80, spd: 80, spe: 140},
		heightm: 1.2,
		weightkg: 66.6,
		color: "Red",
		prevo: "voltorb",
		evoLevel: 30,
		eggGroups: ["Mineral"],
	},
	exeggcute: {
		inherit: true,
		name: "Exeggcute",
		types: ["Grass", "Psychic"],
		baseStats: {hp: 60, atk: 40, def: 80, spa: 60, spd: 60, spe: 40},
		heightm: 0.4,
		weightkg: 2.5,
		color: "Pink",
		evos: ["exeggutor"],
		eggGroups: ["Grass"],
	},
	exeggutor: {
		inherit: true,
		name: "Exeggutor",
		types: ["Grass", "Psychic"],
		baseStats: {hp: 95, atk: 95, def: 85, spa: 125, spd: 125, spe: 55},
		heightm: 2,
		weightkg: 120,
		color: "Yellow",
		prevo: "exeggcute",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		eggGroups: ["Grass"],
	},
	cubone: {
		inherit: true,
		name: "Cubone",
		types: ["Ground"],
		baseStats: {hp: 50, atk: 50, def: 95, spa: 40, spd: 40, spe: 35},
		heightm: 0.4,
		weightkg: 6.5,
		color: "Brown",
		evos: ["marowak"],
		eggGroups: ["Monster"],
	},
	marowak: {
		inherit: true,
		name: "Marowak",
		types: ["Ground"],
		baseStats: {hp: 60, atk: 80, def: 110, spa: 50, spd: 50, spe: 45},
		heightm: 1,
		weightkg: 45,
		color: "Brown",
		prevo: "cubone",
		evoLevel: 28,
		eggGroups: ["Monster"],
	},
	hitmonlee: {
		inherit: true,
		name: "Hitmonlee",
		types: ["Fighting"],
		baseStats: {hp: 50, atk: 120, def: 53, spa: 35, spd: 35, spe: 87},
		heightm: 1.5,
		weightkg: 49.8,
		color: "Brown",
		eggGroups: ["Human-Like"],
	},
	hitmonchan: {
		inherit: true,
		name: "Hitmonchan",
		types: ["Fighting"],
		baseStats: {hp: 50, atk: 105, def: 79, spa: 35, spd: 35, spe: 76},
		heightm: 1.4,
		weightkg: 50.2,
		color: "Brown",
		eggGroups: ["Human-Like"],
	},
	lickitung: {
		inherit: true,
		name: "Lickitung",
		types: ["Normal"],
		baseStats: {hp: 90, atk: 55, def: 75, spa: 60, spd: 60, spe: 30},
		heightm: 1.2,
		weightkg: 65.5,
		color: "Pink",
		eggGroups: ["Monster"],
	},
	koffing: {
		inherit: true,
		name: "Koffing",
		types: ["Poison"],
		baseStats: {hp: 40, atk: 65, def: 95, spa: 60, spd: 60, spe: 35},
		heightm: 0.6,
		weightkg: 1,
		color: "Purple",
		evos: ["weezing"],
		eggGroups: ["Amorphous"],
	},
	weezing: {
		inherit: true,
		name: "Weezing",
		types: ["Poison"],
		baseStats: {hp: 65, atk: 90, def: 120, spa: 85, spd: 85, spe: 60},
		heightm: 1.2,
		weightkg: 9.5,
		color: "Purple",
		prevo: "koffing",
		evoLevel: 35,
		eggGroups: ["Amorphous"],
	},
	rhyhorn: {
		inherit: true,
		name: "Rhyhorn",
		types: ["Ground", "Rock"],
		baseStats: {hp: 80, atk: 85, def: 95, spa: 30, spd: 30, spe: 25},
		heightm: 1,
		weightkg: 115,
		color: "Gray",
		evos: ["rhydon"],
		eggGroups: ["Monster", "Field"],
	},
	rhydon: {
		inherit: true,
		name: "Rhydon",
		types: ["Ground", "Rock"],
		baseStats: {hp: 105, atk: 130, def: 120, spa: 45, spd: 45, spe: 40},
		heightm: 1.9,
		weightkg: 120,
		color: "Gray",
		prevo: "rhyhorn",
		evoLevel: 42,
		eggGroups: ["Monster", "Field"],
	},
	chansey: {
		inherit: true,
		name: "Chansey",
		types: ["Normal"],
		baseStats: {hp: 250, atk: 5, def: 5, spa: 105, spd: 105, spe: 50},
		heightm: 1.1,
		weightkg: 34.6,
		color: "Pink",
		eggGroups: ["Fairy"],
	},
	tangela: {
		inherit: true,
		name: "Tangela",
		types: ["Grass"],
		baseStats: {hp: 65, atk: 55, def: 115, spa: 100, spd: 100, spe: 60},
		heightm: 1,
		weightkg: 35,
		color: "Blue",
		eggGroups: ["Grass"],
	},
	kangaskhan: {
		inherit: true,
		name: "Kangaskhan",
		types: ["Normal"],
		baseStats: {hp: 105, atk: 95, def: 80, spa: 40, spd: 40, spe: 90},
		heightm: 2.2,
		weightkg: 80,
		color: "Brown",
		eggGroups: ["Monster"],
	},
	horsea: {
		inherit: true,
		name: "Horsea",
		types: ["Water"],
		baseStats: {hp: 30, atk: 40, def: 70, spa: 70, spd: 70, spe: 60},
		heightm: 0.4,
		weightkg: 8,
		color: "Blue",
		evos: ["seadra"],
		eggGroups: ["Water 1", "Dragon"],
	},
	seadra: {
		inherit: true,
		name: "Seadra",
		types: ["Water"],
		baseStats: {hp: 55, atk: 65, def: 95, spa: 95, spd: 95, spe: 85},
		heightm: 1.2,
		weightkg: 25,
		color: "Blue",
		prevo: "horsea",
		evoLevel: 32,
		eggGroups: ["Water 1", "Dragon"],
	},
	goldeen: {
		inherit: true,
		name: "Goldeen",
		types: ["Water"],
		baseStats: {hp: 45, atk: 67, def: 60, spa: 50, spd: 50, spe: 63},
		heightm: 0.6,
		weightkg: 15,
		color: "Red",
		evos: ["seaking"],
		eggGroups: ["Water 2"],
	},
	seaking: {
		inherit: true,
		name: "Seaking",
		types: ["Water"],
		baseStats: {hp: 80, atk: 92, def: 65, spa: 80, spd: 80, spe: 68},
		heightm: 1.3,
		weightkg: 39,
		color: "Red",
		prevo: "goldeen",
		evoLevel: 33,
		eggGroups: ["Water 2"],
	},
	staryu: {
		inherit: true,
		name: "Staryu",
		types: ["Water"],
		baseStats: {hp: 30, atk: 45, def: 55, spa: 70, spd: 70, spe: 85},
		heightm: 0.8,
		weightkg: 34.5,
		color: "Brown",
		evos: ["starmie"],
		eggGroups: ["Water 3"],
	},
	starmie: {
		inherit: true,
		name: "Starmie",
		types: ["Water", "Psychic"],
		baseStats: {hp: 60, atk: 75, def: 85, spa: 100, spd: 100, spe: 115},
		heightm: 1.1,
		weightkg: 80,
		color: "Purple",
		prevo: "staryu",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: ["Water 3"],
	},
	mrmime: {
		inherit: true,
		name: "Mr. Mime",
		types: ["Psychic"],
		baseStats: {hp: 40, atk: 45, def: 65, spa: 100, spd: 100, spe: 90},
		heightm: 1.3,
		weightkg: 54.5,
		color: "Pink",
		eggGroups: ["Human-Like"],
	},
	scyther: {
		inherit: true,
		name: "Scyther",
		types: ["Bug", "Flying"],
		baseStats: {hp: 70, atk: 110, def: 80, spa: 55, spd: 55, spe: 105},
		heightm: 1.5,
		weightkg: 56,
		color: "Green",
		eggGroups: ["Bug"],
	},
	jynx: {
		inherit: true,
		name: "Jynx",
		types: ["Ice", "Psychic"],
		baseStats: {hp: 65, atk: 50, def: 35, spa: 95, spd: 95, spe: 95},
		heightm: 1.4,
		weightkg: 40.6,
		color: "Red",
		eggGroups: ["Human-Like"],
	},
	electabuzz: {
		inherit: true,
		name: "Electabuzz",
		types: ["Electric"],
		baseStats: {hp: 65, atk: 83, def: 57, spa: 85, spd: 85, spe: 105},
		heightm: 1.1,
		weightkg: 30,
		color: "Yellow",
		eggGroups: ["Human-Like"],
	},
	magmar: {
		inherit: true,
		name: "Magmar",
		types: ["Fire"],
		baseStats: {hp: 65, atk: 95, def: 57, spa: 85, spd: 85, spe: 93},
		heightm: 1.3,
		weightkg: 44.5,
		color: "Red",
		eggGroups: ["Human-Like"],
	},
	pinsir: {
		inherit: true,
		name: "Pinsir",
		types: ["Bug"],
		baseStats: {hp: 65, atk: 125, def: 100, spa: 55, spd: 55, spe: 85},
		heightm: 1.5,
		weightkg: 55,
		color: "Brown",
		eggGroups: ["Bug"],
	},
	tauros: {
		inherit: true,
		name: "Tauros",
		types: ["Normal"],
		baseStats: {hp: 75, atk: 100, def: 95, spa: 70, spd: 70, spe: 110},
		heightm: 1.4,
		weightkg: 88.4,
		color: "Brown",
		eggGroups: ["Field"],
	},
	magikarp: {
		inherit: true,
		name: "Magikarp",
		types: ["Water"],
		baseStats: {hp: 20, atk: 10, def: 55, spa: 20, spd: 20, spe: 80},
		heightm: 0.9,
		weightkg: 10,
		color: "Red",
		evos: ["gyarados"],
		eggGroups: ["Water 2", "Dragon"],
	},
	gyarados: {
		inherit: true,
		name: "Gyarados",
		types: ["Water", "Flying"],
		baseStats: {hp: 95, atk: 125, def: 79, spa: 100, spd: 100, spe: 81},
		heightm: 6.5,
		weightkg: 235,
		color: "Blue",
		prevo: "magikarp",
		evoLevel: 20,
		eggGroups: ["Water 2", "Dragon"],
	},
	lapras: {
		inherit: true,
		name: "Lapras",
		types: ["Water", "Ice"],
		baseStats: {hp: 130, atk: 85, def: 80, spa: 95, spd: 95, spe: 60},
		heightm: 2.5,
		weightkg: 220,
		color: "Blue",
		eggGroups: ["Monster", "Water 1"],
	},
	ditto: {
		inherit: true,
		name: "Ditto",
		types: ["Normal"],
		baseStats: {hp: 48, atk: 48, def: 48, spa: 48, spd: 48, spe: 48},
		heightm: 0.3,
		weightkg: 4,
		color: "Purple",
		eggGroups: ["Ditto"],
	},
	eevee: {
		inherit: true,
		name: "Eevee",
		types: ["Normal"],
		baseStats: {hp: 55, atk: 55, def: 50, spa: 65, spd: 65, spe: 55},
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		evos: ["vaporeon", "jolteon", "flareon"],
		eggGroups: ["Field"],
	},
	vaporeon: {
		inherit: true,
		name: "Vaporeon",
		types: ["Water"],
		baseStats: {hp: 130, atk: 65, def: 60, spa: 110, spd: 110, spe: 65},
		heightm: 1,
		weightkg: 29,
		color: "Blue",
		prevo: "eevee",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: ["Field"],
	},
	jolteon: {
		inherit: true,
		name: "Jolteon",
		types: ["Electric"],
		baseStats: {hp: 65, atk: 65, def: 60, spa: 110, spd: 110, spe: 130},
		heightm: 0.8,
		weightkg: 24.5,
		color: "Yellow",
		prevo: "eevee",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: ["Field"],
	},
	flareon: {
		inherit: true,
		name: "Flareon",
		types: ["Fire"],
		baseStats: {hp: 65, atk: 130, def: 60, spa: 110, spd: 110, spe: 65},
		heightm: 0.9,
		weightkg: 25,
		color: "Red",
		prevo: "eevee",
		evoType: "useItem",
		evoItem: "Fire Stone",
		eggGroups: ["Field"],
	},
	porygon: {
		inherit: true,
		name: "Porygon",
		types: ["Normal"],
		baseStats: {hp: 65, atk: 60, def: 70, spa: 75, spd: 75, spe: 40},
		heightm: 0.8,
		weightkg: 36.5,
		color: "Pink",
		eggGroups: ["Mineral"],
	},
	omanyte: {
		inherit: true,
		name: "Omanyte",
		types: ["Rock", "Water"],
		baseStats: {hp: 35, atk: 40, def: 100, spa: 90, spd: 90, spe: 35},
		heightm: 0.4,
		weightkg: 7.5,
		color: "Blue",
		evos: ["omastar"],
		eggGroups: ["Water 1", "Water 3"],
	},
	omastar: {
		inherit: true,
		name: "Omastar",
		types: ["Rock", "Water"],
		baseStats: {hp: 70, atk: 60, def: 125, spa: 115, spd: 115, spe: 55},
		heightm: 1,
		weightkg: 35,
		color: "Blue",
		prevo: "omanyte",
		evoLevel: 40,
		eggGroups: ["Water 1", "Water 3"],
	},
	kabuto: {
		inherit: true,
		name: "Kabuto",
		types: ["Rock", "Water"],
		baseStats: {hp: 30, atk: 80, def: 90, spa: 45, spd: 45, spe: 55},
		heightm: 0.5,
		weightkg: 11.5,
		color: "Brown",
		evos: ["kabutops"],
		eggGroups: ["Water 1", "Water 3"],
	},
	kabutops: {
		inherit: true,
		name: "Kabutops",
		types: ["Rock", "Water"],
		baseStats: {hp: 60, atk: 115, def: 105, spa: 70, spd: 70, spe: 80},
		heightm: 1.3,
		weightkg: 40.5,
		color: "Brown",
		prevo: "kabuto",
		evoLevel: 40,
		eggGroups: ["Water 1", "Water 3"],
	},
	aerodactyl: {
		inherit: true,
		name: "Aerodactyl",
		types: ["Rock", "Flying"],
		baseStats: {hp: 80, atk: 105, def: 65, spa: 60, spd: 60, spe: 130},
		heightm: 1.8,
		weightkg: 59,
		color: "Purple",
		eggGroups: ["Flying"],
	},
	snorlax: {
		inherit: true,
		name: "Snorlax",
		types: ["Normal"],
		baseStats: {hp: 160, atk: 110, def: 65, spa: 65, spd: 65, spe: 30},
		heightm: 2.1,
		weightkg: 460,
		color: "Black",
		eggGroups: ["Monster"],
	},
	articuno: {
		inherit: true,
		name: "Articuno",
		types: ["Ice", "Flying"],
		baseStats: {hp: 90, atk: 85, def: 100, spa: 125, spd: 125, spe: 85},
		heightm: 1.7,
		weightkg: 55.4,
		color: "Blue",
		eggGroups: ["Undiscovered"],
	},
	zapdos: {
		inherit: true,
		name: "Zapdos",
		types: ["Electric", "Flying"],
		baseStats: {hp: 90, atk: 90, def: 85, spa: 125, spd: 125, spe: 100},
		heightm: 1.6,
		weightkg: 52.6,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
	},
	moltres: {
		inherit: true,
		name: "Moltres",
		types: ["Fire", "Flying"],
		baseStats: {hp: 90, atk: 100, def: 90, spa: 125, spd: 125, spe: 90},
		heightm: 2,
		weightkg: 60,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
	},
	dratini: {
		inherit: true,
		name: "Dratini",
		types: ["Dragon"],
		baseStats: {hp: 41, atk: 64, def: 45, spa: 50, spd: 50, spe: 50},
		heightm: 1.8,
		weightkg: 3.3,
		color: "Blue",
		evos: ["dragonair"],
		eggGroups: ["Water 1", "Dragon"],
	},
	dragonair: {
		inherit: true,
		name: "Dragonair",
		types: ["Dragon"],
		baseStats: {hp: 61, atk: 84, def: 65, spa: 70, spd: 70, spe: 70},
		heightm: 4,
		weightkg: 16.5,
		color: "Blue",
		prevo: "dratini",
		evos: ["dragonite"],
		evoLevel: 30,
		eggGroups: ["Water 1", "Dragon"],
	},
	dragonite: {
		inherit: true,
		name: "Dragonite",
		types: ["Dragon", "Flying"],
		baseStats: {hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80},
		heightm: 2.2,
		weightkg: 210,
		color: "Brown",
		prevo: "dragonair",
		evoLevel: 55,
		eggGroups: ["Water 1", "Dragon"],
	},
	mewtwo: {
		inherit: true,
		name: "Mewtwo",
		types: ["Psychic"],
		baseStats: {hp: 106, atk: 110, def: 90, spa: 154, spd: 154, spe: 130},
		heightm: 2,
		weightkg: 122,
		color: "Purple",
		eggGroups: ["Undiscovered"],
	},
	mew: {
		inherit: true,
		name: "Mew",
		types: ["Psychic"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		heightm: 0.4,
		weightkg: 4,
		color: "Pink",
		eggGroups: ["Undiscovered"],
	},
};
