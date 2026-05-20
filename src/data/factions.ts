export interface Unit {
  name: string;
  count: number;
  type: string;
}

export interface BattleTrait {
  name: string;
  description: string;
}

export interface RegimentAbility {
  id: string;
  name: string;
  description: string;
}

export interface Enhancement {
  id: string;
  name: string;
  description: string;
  type: string;
}

export interface PhaseAbility {
  name: string;
  description: string;
  source: string;
}

export interface GamePhases {
  deployment: PhaseAbility[];
  hero: PhaseAbility[];
  movement: PhaseAbility[];
  charge: PhaseAbility[];
  shooting: PhaseAbility[];
  combat: PhaseAbility[];
  endOfTurn: PhaseAbility[];
}

export interface Spearhead {
  id: string;
  name: string;
  description: string;
  units: Unit[];
  battleTraits: BattleTrait[];
  regimentAbilities: RegimentAbility[];
  enhancements: Enhancement[];
  gamePhases: GamePhases;
}

export interface Faction {
  id: string;
  name: string;
  description: string;
  spearheads: Spearhead[];
}

// Import ORDER spearheads
import {
  yndrastasSpearhead,
  vigilantBrotherhood,
  glitteringPhalanx,
  hurakanVanguard,
  soulraidHunt,
  akhelianTideGuard,
  bitterbarkCopse,
  spitewingFlight,
  starscaleWarhost,
  sunbloodedProwlers,
  skyhammerTaskForce,
  grundstokTrailblazers,
  zenestrasZealots,
  casteliteCompany,
  fusilPlatoon,
  khainiteShadowCoven,
  heartflayerTroupe,
  sagaAxeband,
} from './orderSpearheads';

// Import DEATH spearheads
import {
  deathrattleTombHost,
  bloodcraveHunt,
  slasherHost,
  cursedShacklehorde,
  mortisanElite,
  kavalosVanguard,
  titheReaperEchelon,
  charnelWatch,
  carrionRetainers,
} from './deathSpearheads';

// Import CHAOS spearheads
import {
  gnawfeastClawpack,
  warpsparkClawpack,
  helforgeHost,
} from './chaosSpearheads';

// ORDER FACTIONS
const orderFactions: Faction[] = [
  {
    id: 'stormcast-eternals',
    name: 'Stormcast Eternals',
    description: 'Immortal warriors forged by Sigmar, wielding lightning and thunder to bring order to the Mortal Realms',
    spearheads: [yndrastasSpearhead, vigilantBrotherhood]
  },
  {
    id: 'lumineth-realmlords',
    name: 'Lumineth Realm-lords',
    description: 'Aelven masters of light and magic, seeking perfection through martial and arcane discipline',
    spearheads: [glitteringPhalanx, hurakanVanguard]
  },
  {
    id: 'idoneth-deepkin',
    name: 'Idoneth Deepkin',
    description: 'Soul-raiders from the depths, emerging from ethereal seas to claim what they need to survive',
    spearheads: [soulraidHunt, akhelianTideGuard]
  },
  {
    id: 'daughters-of-khaine',
    name: 'Daughters of Khaine',
    description: 'Fanatical aelven cultists devoted to Khaine, combining grace with savage bloodlust',
    spearheads: [khainiteShadowCoven, heartflayerTroupe]
  },
  {
    id: 'cities-of-sigmar',
    name: 'Cities of Sigmar',
    description: 'Mortal defenders of civilization wielding faith, steel, and blackpowder against the darkness',
    spearheads: [zenestrasZealots, casteliteCompany, fusilPlatoon]
  },
  {
    id: 'sylvaneth',
    name: 'Sylvaneth',
    description: 'Spirit-song warriors of the forest, defending the natural world with ancient magic and fury',
    spearheads: [bitterbarkCopse, spitewingFlight]
  },
  {
    id: 'seraphon',
    name: 'Seraphon',
    description: 'Star-born lizardmen summoned from Azyr, following the Great Plan to bring order to reality',
    spearheads: [starscaleWarhost, sunbloodedProwlers]
  },
  {
    id: 'kharadron-overlords',
    name: 'Kharadron Overlords',
    description: 'Sky-faring duardin armadas wielding advanced aether-technology and overwhelming firepower',
    spearheads: [skyhammerTaskForce, grundstokTrailblazers]
  },
  {
    id: 'fyreslayers',
    name: 'Fyreslayers',
    description: 'Flame-bearded duardin warriors seeking ur-gold and glory, blessed with the fiery fury of Grimnir',
    spearheads: [sagaAxeband]
  },
];

// DEATH FACTIONS
const deathFactions: Faction[] = [
  {
    id: 'soulblight-gravelords',
    name: 'Soulblight Gravelords',
    description: 'Vampire dynasties commanding legions of undead, fueled by blood and dark sorcery',
    spearheads: [deathrattleTombHost, bloodcraveHunt]
  },
  {
    id: 'nighthaunt',
    name: 'Nighthaunt',
    description: 'Tormented spirits bound in eternal servitude, spreading terror and anguish across the realms',
    spearheads: [slasherHost, cursedShacklehorde]
  },
  {
    id: 'ossiarch-bonereapers',
    name: 'Ossiarch Bonereapers',
    description: 'Perfected bone constructs created by Nagash, merciless warriors forged from the dead',
    spearheads: [mortisanElite, kavalosVanguard, titheReaperEchelon]
  },
  {
    id: 'flesh-eater-courts',
    name: 'Flesh-eater Courts',
    description: 'Cannibalistic ghouls living in delusion, seeing themselves as noble knights',
    spearheads: [charnelWatch, carrionRetainers]
  },
];

// CHAOS FACTIONS
const chaosFactions: Faction[] = [
  {
    id: 'skaven',
    name: 'Skaven',
    description: 'Chittering ratmen hordes swarming from below, wielding warpstone technology and overwhelming numbers',
    spearheads: [gnawfeastClawpack, warpsparkClawpack]
  },
  {
    id: 'helsmiths-of-hashut',
    name: 'Helsmiths of Hashut',
    description: 'Dark duardin servants of Hashut wielding daemon engines and infernal artifice',
    spearheads: [helforgeHost]
  },
];

// COMBINED FACTIONS
export const factions: Faction[] = [...orderFactions, ...deathFactions, ...chaosFactions];
