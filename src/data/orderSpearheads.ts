import type {Spearhead} from './factions';

// STORMCAST ETERNALS SPEARHEADS
export const yndrastasSpearhead: Spearhead = {
  id: 'sh1',
  name: "Yndrasta's Spearhead",
  description: "Elite formation led by Sigmar's Huntress, striking with devastating precision against the mightiest foes",
  units: [
    { name: 'Yndrasta, the Celestial Spear', count: 1, type: 'Hero/General' },
    { name: 'Knight-Vexillor', count: 1, type: 'Hero' },
    { name: 'Annihilators', count: 3, type: 'Elite' },
    { name: 'Vanquishers', count: 5, type: 'Infantry' },
    { name: 'Vanquishers', count: 5, type: 'Infantry' },
    { name: 'Stormstrike Chariot', count: 1, type: 'War Machine' },
  ],
  battleTraits: [
    { name: 'Scions of the Storm', description: 'Yndrasta and Annihilators arrive from round 3 onwards anywhere more than 6" from enemies' },
  ],
  regimentAbilities: [
    { id: 'ra1', name: 'Drive Them Back', description: 'End of any turn: Units contesting objectives in combat can pile in and deal mortal damage on 4+' },
    { id: 'ra2', name: 'Defend to the Last', description: 'Friendly units have Ward (6+) while contesting objectives you control' },
  ],
  enhancements: [
    { id: 'en1', name: 'The Prime Huntress', description: "Thengavar's Damage is 2D6 against Monsters", type: 'Ability' },
    { id: 'en2', name: "Strike with the Tempest's Rage", description: 'Your general has Strike-first if they charged', type: 'Command Trait' },
    { id: 'en3', name: 'Dazzling Radiance', description: 'Once per battle when general is set up, return 1 slain model to each friendly unit wholly within 12"', type: 'Ability' },
    { id: 'en4', name: 'Hawk of the Celestial Skies', description: 'Once per battle combat phase: Add 1 to hit rolls for friendly units wholly within 12" of general', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Dazzling Radiance', description: 'Return 1 slain model to each friendly unit within 12" when general arrives (if enhancement selected)', source: 'Enhancement' },
      { name: 'Banner of the Reforged', description: 'Knight-Vexillor heals D3 wounds to a unit within 12" and adds 3 to control score', source: 'Unit Ability' },
    ],
    movement: [
      { name: 'Lightning-Strike Arrival', description: 'From round 3, set up Yndrasta and Annihilators anywhere more than 6" from enemies', source: 'Battle Trait' },
    ],
    charge: [
      { name: 'Force of a Falling Star', description: 'Annihilators give enemies Strike-last on charge roll of 8+', source: 'Unit Ability' },
      { name: 'Azyr Unleashed', description: 'Stormstrike Chariot deals D3 mortal damage when charging', source: 'Unit Ability' },
    ],
    shooting: [
      { name: 'Stormstrike Chariot', description: 'Great Stormbow | Range 18" | Attacks 2 | Hit 3+ | Wound 3+ | Rend 1 | Damage 1', source: 'Unit Ability' },
    ],
    combat: [
      { name: 'Yndrasta', description: '[Save 3+] | Thengavar [Crit (2 Hits)] | Attacks 4 | Hit 3+ | Wound 3+ | Rend 2 | Damage 3', source: 'Unit Ability' },
      { name: 'Knight-Vexillor', description: '[Save 3+] | Celestial Greataxe | Attacks 4 | Hit 3+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Annihilators', description: '[Save 3+] | Meteoric Grandhammer [Crit (2 Hits)] | Attacks 3 | Hit 3+ | Wound 3+ | Rend 2 | Damage 3', source: 'Unit Ability' },
      { name: 'Vanquishers', description: '[Save 3+] | Celestial Greatsword [Crit (Mortal)] | Attacks 3 | Hit 3+ | Wound 4+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: 'Stormstrike Chariot', description: '[Save 3+] | Exalted Stormstrikes [Companion] | Attacks 6 | Hit 3+ | Wound 3+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: "Strike with the Tempest's Rage", description: 'General has Strike-first if they charged (if enhancement selected)', source: 'Enhancement' },
      { name: 'Hawk of the Celestial Skies', description: 'Add 1 to hit for units within 12" once per battle (if enhancement selected)', source: 'Enhancement' },
      { name: 'Drive Them Back', description: 'Units on objectives in combat can pile in and deal mortals on 4+ (if regiment ability selected)', source: 'Regiment Ability' },
      { name: 'Champion of Sigmar', description: 'Once per battle: Yndrasta has Ward (5+) for a combat phase', source: 'Unit Ability' },
      { name: 'Lightning Strikes', description: 'Vanquishers add 1 Damage vs units with 5+ models', source: 'Unit Ability' },
    ],
    endOfTurn: [
      { name: 'Defend to the Last', description: 'Ward (6+) while contesting objectives you control (if regiment ability selected)', source: 'Regiment Ability' },
      { name: 'Yndrasta', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Knight-Vexillor', description: '[Control 5]', source: 'Unit Ability' },
      { name: 'Annihilators', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Vanquishers', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Stormstrike Chariot', description: '[Control 2]', source: 'Unit Ability' },
    ],
  }
};

export const vigilantBrotherhood: Spearhead = {
  id: 'sh2',
  name: 'Vigilant Brotherhood',
  description: 'Elite Ruination chamber warriors led by a Lord-Vigilant, resistant to Chaos and relentless in their pursuit of victory',
  units: [
    { name: 'Lord-Vigilant on Gryph-stalker', count: 1, type: 'Hero/General' },
    { name: 'Lord-Veritant', count: 1, type: 'Hero' },
    { name: 'Prosecutors', count: 3, type: 'Infantry' },
    { name: 'Liberators', count: 5, type: 'Infantry' },
  ],
  battleTraits: [
    { name: 'Shield of Azyr', description: 'Once per turn: Pick a friendly unit. It has Ward (5+) until start of your next turn' },
    { name: 'Storm Charge', description: 'Once per battle: Pick a friendly unit not in combat. It can charge even if it ran this turn' },
  ],
  regimentAbilities: [
    { id: 'ra3', name: 'Strike Where Needed', description: 'Once per battle when you retreat: No mortal damage from that retreat, and can still charge this turn' },
    { id: 'ra4', name: 'Blaze of Glory', description: 'Once per battle in combat: When models in a friendly unit in combat are slain, roll D6 on 4+ inflict 1 mortal damage on enemy in combat' },
  ],
  enhancements: [
    { id: 'en5', name: 'Hallowed Scrolls', description: 'Your general has Ward (5+)', type: 'Ability' },
    { id: 'en6', name: "Morrda's Talon", description: "Your general's Hallowed Greataxe has Crit (Mortal)", type: 'Weapon Enhancement' },
    { id: 'en7', name: 'Quicksilver Draught', description: 'Once per battle combat phase: Your general has Strike-first this phase', type: 'Ability' },
    { id: 'en8', name: 'Null Pendant', description: 'Once per battle end of turn: Roll dice for each enemy contesting same objective as general, on 2+ subtract roll from their control score', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Shield of Azyr', description: 'Pick a unit, it has Ward (5+) until your next turn (once per turn)', source: 'Battle Trait' },
      { name: 'Plan the Attack', description: 'Lord-Vigilant picks an objective, friendly units get +1 to hit vs enemies contesting it', source: 'Unit Ability' },
      { name: 'Cleansing Fires', description: 'Lord-Veritant unleashes holy fire - make chanting roll, on 3+ roll dice for each model in target, 5+ deals 1 mortal damage', source: 'Unit Ability' },
    ],
    movement: [
      { name: 'Reinforcements - Prosecutors', description: 'Set up this unit in reserve. It can arrive in your movement phase more than 9" from all enemy units', source: 'Unit Ability' },
      { name: 'Reinforcements - Liberators', description: 'Set up this unit in reserve. It can arrive in your movement phase more than 9" from all enemy units', source: 'Unit Ability' },
      { name: 'Strike Where Needed', description: 'No mortal damage from retreat and can still charge (once per battle, if selected)', source: 'Regiment Ability' },
    ],
    charge: [
      { name: 'Storm Charge', description: 'Unit not in combat can charge even if it ran (once per battle)', source: 'Battle Trait' },
      { name: 'Heralds of Righteousness', description: 'Prosecutors roll 1 additional die for charge rolls', source: 'Unit Ability' },
    ],
    shooting: [
      { name: 'Prosecutors', description: 'Stormcall Javelin | Range 10" | Attacks 1 | Hit 3+ | Wound 3+ | Rend - | Damage 1', source: 'Unit Ability' },
    ],
    combat: [
      { name: 'Lord-Vigilant on Gryph-stalker', description: '[Save 3+] | Hallowed Greataxe | Attacks 5 | Hit 3+ | Wound 3+ | Rend 2 | Damage 1\nGryph-stalker\'s Beak and Talons [Companion] | Attacks 3 | Hit 4+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Lord-Veritant', description: '[Save 3+] | Staff of Abjuration [Anti-Wizard (+1 Rend), Anti-Priest (+1 Rend)] | Attacks 1 | Hit 3+ | Wound 3+ | Rend 3 | Damage D3\nJudgement Blade | Attacks 3 | Hit 3+ | Wound 3+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: 'Prosecutors', description: '[Save 3+] | Stormcall Javelin | Attacks 3 | Hit 3+ | Wound 3+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Liberators', description: '[Save 3+] | Warhammer [Crit (Mortal)] | Attacks 2 | Hit 3+ | Wound 3+ | Rend 1 | Damage 1\nGrandhammer [Crit (Mortal)] | Attacks 2 | Hit 3+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Deliver Judgement', description: 'Lord-Vigilant orders unit to fight twice but with Strike-last after first fight (once per battle)', source: 'Unit Ability' },
      { name: 'Blaze of Glory', description: 'Slain models make vengeance rolls, 4+ deals 1 mortal to enemies in combat (once per battle, if selected)', source: 'Regiment Ability' },
      { name: 'Quicksilver Draught', description: 'General has Strike-first (once per battle, if enhancement selected)', source: 'Enhancement' },
      { name: 'Stalwart Defenders', description: 'Liberators add 3 to control score while contesting objective in friendly territory', source: 'Unit Ability' },
    ],
    endOfTurn: [
      { name: 'Null Pendant', description: 'Reduce enemy control scores contesting same objective (once per battle, if enhancement selected)', source: 'Enhancement' },
      { name: 'Lord-Vigilant on Gryph-stalker', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Lord-Veritant', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Prosecutors', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Liberators', description: '[Control 1]', source: 'Unit Ability' },
    ],
  }
};

// LUMINETH REALM-LORDS SPEARHEADS
export const glitteringPhalanx: Spearhead = {
  id: 'sh4',
  name: 'Glittering Phalanx',
  description: 'Precise phalanxes of Vanari warriors led by a Scinari Cathallar, enshrining subtlety and precision over overwhelming force',
  units: [
    { name: 'Scinari Cathallar', count: 1, type: 'Hero/General' },
    { name: 'Vanari Auralan Sentinels', count: 5, type: 'Infantry' },
    { name: 'Vanari Auralan Sentinels', count: 5, type: 'Infantry' },
    { name: 'Vanari Auralan Wardens', count: 10, type: 'Infantry' },
    { name: 'Vanari Bladelords', count: 5, type: 'Infantry' },
  ],
  battleTraits: [
    { name: 'Facets of War', description: 'Once per battle round: Pick 1 Facet (Shining Company: Subtract 1 from hit rolls targeting friendly units OR Lightning Reactions: Pick 2 units to fight when it\'s your turn to pick)' },
    { name: 'Power of Hysh', description: 'Once per turn hero phase: On 2+, unit\'s attacks score critical hits on 5+ until next turn' },
  ],
  regimentAbilities: [
    { id: 'ra10', name: 'Arcane Prowess', description: 'Add 1 to casting rolls for your general' },
    { id: 'ra11', name: 'Heightened Reflexes', description: 'Add 1 to save rolls for friendly units that fight immediately after another friendly unit because of Lightning Reactions' },
  ],
  enhancements: [
    { id: 'en10', name: 'Overwhelming Heat', description: 'Hero phase: Cast (7+) to halve enemy Move within 24" until next turn, on roll ≥ Save characteristic deal D3 mortal', type: 'Spell' },
    { id: 'en11', name: 'Protection of Hysh', description: 'Hero phase: Cast (7+) to give visible unit within 12" Ward (5+) until next turn', type: 'Spell' },
    { id: 'en12', name: 'Waystone', description: 'Movement phase: Remove general and set up anywhere 6" from enemies (once per battle)', type: 'Ability' },
    { id: 'en13', name: 'Speed of Hysh', description: 'Hero phase: Cast (5+) to double visible unit\'s Move within 18" until next turn', type: 'Spell' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Facets of War', description: 'Pick Shining Company or Lightning Reactions (once per battle round)', source: 'Battle Trait' },
      { name: 'Power of Hysh', description: 'On 2+, unit gets critical hits on 5+ until next turn (once per turn)', source: 'Battle Trait' },
      { name: 'Darkness of the Soul', description: 'Cathallar subtracts D6 from enemy control score within 12" on 3+', source: 'Unit Ability' },
      { name: 'Overwhelming Heat', description: 'Cast to halve enemy Move and deal mortals (if enhancement selected)', source: 'Enhancement' },
      { name: 'Protection of Hysh', description: 'Cast to give Ward (5+) (if enhancement selected)', source: 'Enhancement' },
      { name: 'Speed of Hysh', description: 'Cast to double Move (if enhancement selected)', source: 'Enhancement' },
      { name: 'Arcane Prowess', description: 'Add 1 to casting rolls (if selected)', source: 'Regiment Ability' },
    ],
    movement: [
      { name: 'Reinforcements - Vanari Auralan Sentinels', description: 'Set up this unit in reserve. It can arrive in your movement phase more than 9" from all enemy units', source: 'Unit Ability' },
      { name: 'Reinforcements - Vanari Auralan Wardens', description: 'Set up this unit in reserve. It can arrive in your movement phase more than 9" from all enemy units', source: 'Unit Ability' },
      { name: 'Waystone', description: 'Remove general and redeploy 6" from enemies (if enhancement selected)', source: 'Enhancement' },
    ],
    charge: [],
    shooting: [
      { name: 'Vanari Auralan Sentinels', description: 'Auralan Bow | Range 18" | Attacks 2 | Hit 3+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Lofted Shots', description: 'Sentinels add 6" to Range but subtract 1 from hit rolls', source: 'Unit Ability' },
    ],
    combat: [
      { name: 'Scinari Cathallar', description: '[Save 6+] | Despairing Touch | Attacks 3 | Hit 3+ | Wound 4+ | Rend - | Damage D3', source: 'Unit Ability' },
      { name: 'Vanari Bladelords', description: '[Save 4+] | Sunmetal Greatblade: Perfect Strike | Attacks 1 | Hit 3+ | Wound See below | Rend 1 | Damage 1\nSunmetal Greatblade: Flurry of Blows [Crit (Mortal), Anti-Infantry (+1 Rend)] | Attacks 3 | Hit 4+ | Wound 4+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: 'Vanari Auralan Sentinels', description: '[Save 5+] | Vanari Dagger | Attacks 1 | Hit 4+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Vanari Auralan Wardens', description: '[Save 4+] | Warden Pike [Crit (Mortal), Anti-charge (+1 Rend)] | Attacks 2 | Hit 3+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Facets of War (Shining Company)', description: 'Subtract 1 from hit rolls targeting friendly units (if selected)', source: 'Battle Trait' },
      { name: 'Facets of War (Lightning Reactions)', description: 'Pick 2 units to fight when it\'s your turn to pick (if selected)', source: 'Battle Trait' },
      { name: 'Heightened Reflexes', description: 'Add 1 to save for unit fighting after Lightning Reactions (if selected)', source: 'Regiment Ability' },
      { name: 'Swordmasters', description: 'Bladelords pick Perfect Strike (on 2+ inflict 1 mortal) or Flurry of Blows for each fight', source: 'Unit Ability' },
      { name: 'Guardians', description: 'Bladelords and general have Ward (5+) while general in Bladelords\' combat range', source: 'Unit Ability' },
      { name: 'Wall of Blades', description: 'Wardens have Strike-first on 3+ (4+ vs Cavalry) if didn\'t charge vs enemy that did', source: 'Unit Ability' },
      { name: 'Moonfire Flask', description: 'Wardens deal D3 mortal on 2+ to charging enemy in combat (once per battle)', source: 'Unit Ability' },
    ],
    endOfTurn: [
      { name: 'Scinari Cathallar', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Vanari Bladelords', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Vanari Auralan Sentinels', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Vanari Auralan Wardens', description: '[Control 1]', source: 'Unit Ability' },
    ],
  }
};

export const hurakanVanguard: Spearhead = {
  id: 'sh5',
  name: 'Hurakan Vanguard',
  description: 'Swift temple disciples buoyed aloft by the vigour of the wind, protecting Lumineth borders with the speed of a zephyr',
  units: [
    { name: 'Hurakan Windmage', count: 1, type: 'Hero/General' },
    { name: 'Hurakan Windchargers', count: 5, type: 'Cavalry' },
    { name: 'Vanari Auralan Wardens', count: 10, type: 'Infantry' },
    { name: 'Hurakan Spirit of the Wind', count: 1, type: 'Monster' },
  ],
  battleTraits: [
    { name: 'Storm Brewing', description: 'Deployment: Pick battlefield edge as leeward. Each time Ride the Hurricane is used, change leeward to next edge clockwise' },
    { name: 'Pulled by the Winds', description: 'Once per turn movement phase: Unit not in combat moves D6" but must end closer to leeward edge' },
    { name: 'Gale Force', description: 'Once per turn reaction when declaring Attack: Add 1 to hit if target is closer to leeward than attacker' },
  ],
  regimentAbilities: [
    { id: 'ra14', name: 'Lifted Debris', description: 'Hero phase: Roll dice equal to battle round number, 3+ deals 1 mortal to enemy closer to leeward than large terrain in friendly territory' },
    { id: 'ra15', name: 'Roaring Headwind', description: 'Once per battle enemy hero phase: Enemy must end moves closer to leeward edge this turn' },
  ],
  enhancements: [
    { id: 'en14', name: 'Scattered to the Winds', description: 'Subtract 1 from control of enemies within 6" of general for each Ride the Hurricane used this round', type: 'Ability' },
    { id: 'en15', name: 'Wind Whisperer', description: 'Any hero phase: Change leeward edge to target edge (once per battle)', type: 'Ability' },
    { id: 'en16', name: 'Temple Guardians', description: 'General and Infantry within combat range have Ward (5+)', type: 'Ability' },
    { id: 'en17', name: 'Curved Shots', description: 'Measure range and visibility of general\'s shooting from any point on leeward edge', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [
      { name: 'Storm Brewing', description: 'Pick battlefield edge as leeward', source: 'Battle Trait' },
    ],
    hero: [
      { name: 'Guide the Gusts', description: 'Windmage casts (6+) to allow visible unit within 12" to retreat and shoot/charge, no mortal damage from retreat', source: 'Unit Ability' },
      { name: 'Lifted Debris', description: 'Deal mortals to enemy near leeward edge (if selected)', source: 'Regiment Ability' },
      { name: 'Roaring Headwind', description: 'Enemy must end moves closer to leeward (once per battle, if selected)', source: 'Regiment Ability' },
      { name: 'Wind Whisperer', description: 'Change leeward edge (once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [
      { name: 'Reinforcements - Vanari Auralan Wardens', description: 'Set up this unit in reserve. It can arrive in your movement phase more than 9" from all enemy units', source: 'Unit Ability' },
      { name: 'Pulled by the Winds', description: 'Unit moves D6" closer to leeward edge (once per turn)', source: 'Battle Trait' },
      { name: 'Leap into the Storm', description: 'Windchargers remove and set up within 3" of leeward edge, 6" from enemies (end of turn, not in combat)', source: 'Unit Ability' },
    ],
    charge: [],
    shooting: [
      { name: 'Hurakan Windmage', description: 'Windblast Vortex | Range 12" | Attacks 1 | Hit 2+ | Wound 3+ | Rend 2 | Damage D3', source: 'Unit Ability' },
      { name: 'Hurakan Spirit of the Wind', description: 'Bow of the Wind\'s Vengeance | Range 15" | Attacks 4 | Hit 2+ | Wound 3+ | Rend 2 | Damage 2', source: 'Unit Ability' },
      { name: 'Hurakan Windchargers', description: 'Windcharger Bow [Crit (Auto-wound)] | Range 12" | Attacks 3 | Hit 3+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Gale Force', description: 'Add 1 to hit if target closer to leeward (once per turn reaction)', source: 'Battle Trait' },
      { name: 'Hurricane Winds', description: 'Spirit of Wind gives Strike-last on 3+ to damaged enemy', source: 'Unit Ability' },
      { name: 'Curved Shots', description: 'Measure general\'s shooting from leeward edge (if enhancement selected)', source: 'Enhancement' },
    ],
    combat: [
      { name: 'Hurakan Windmage', description: '[Save 5+] | Aspiragillum | Attacks 3 | Hit 3+ | Wound 4+ | Rend 1 | Damage D3', source: 'Unit Ability' },
      { name: 'Hurakan Spirit of the Wind', description: '[Save 4+] [Ward (5+)] | Swirling Shards | Attacks 6 | Hit 2+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Hurakan Windchargers', description: '[Save 4+] | Windcharger Blade | Attacks 1 | Hit 4+ | Wound 4+ | Rend - | Damage 1\nTreerunner\'s Claws [Companion] | Attacks 2 | Hit 4+ | Wound 5+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Vanari Auralan Wardens', description: '[Save 4+] | Warden Pike [Crit (Mortal), Anti-charge (+1 Rend)] | Attacks 2 | Hit 3+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Eye of the Storm', description: 'Subtract 1 from hit rolls targeting units within 6" of Spirit of Wind', source: 'Unit Ability' },
      { name: 'Wall of Blades', description: 'Wardens have Strike-first on 3+ (4+ vs Cavalry) if didn\'t charge vs enemy that did', source: 'Unit Ability' },
      { name: 'Temple Guardians', description: 'General and Infantry in combat range have Ward (5+) (if enhancement selected)', source: 'Enhancement' },
    ],
    endOfTurn: [
      { name: 'Hurakan Windmage', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Hurakan Spirit of the Wind', description: '[Control 5]', source: 'Unit Ability' },
      { name: 'Hurakan Windchargers', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Vanari Auralan Wardens', description: '[Control 1]', source: 'Unit Ability' },
    ],
  }
};

// IDONETH DEEPKIN SPEARHEADS
export const soulraidHunt: Spearhead = {
  id: 'sh7',
  name: 'Soulraid Hunt',
  description: 'Swift soul-raiders bursting upon foes from hidden waterways to harvest souls with speed and subtlety',
  units: [
    { name: 'Isharann Soulscryer', count: 1, type: 'Hero/General' },
    { name: 'Akhelian Morrsarr Guard', count: 3, type: 'Cavalry' },
    { name: 'Akhelian Allopex', count: 1, type: 'Cavalry' },
    { name: 'Namarti Thralls', count: 5, type: 'Infantry' },
    { name: 'Namarti Thralls', count: 5, type: 'Infantry' },
  ],
  battleTraits: [
    { name: 'Tides of Death', description: 'Round 1: Low Tide (-1 to hit vs shooting). Round 2: Flood Tide (run+shoot/charge). Round 3: High Tide (Strike-first). Round 4: Ebb Tide (retreat+shoot/charge)' },
  ],
  regimentAbilities: [
    { id: 'ra19', name: 'Way of the Cresting Wave', description: 'Passive: Add 1 to Rend of Namarti Thralls melee weapons if they charged' },
    { id: 'ra20', name: 'Ethersea Predators', description: 'Once per turn end of any turn: Pick Cavalry unit that fought. Heal (D3) that unit' },
  ],
  enhancements: [
    { id: 'en19', name: 'Arch-Ritualist', description: 'Add 1 to rolls for general\'s Ritual of the Creeping Mist ability', type: 'Ability' },
    { id: 'en20', name: 'Steelshell Armour', description: 'Ignore all modifiers to save rolls for general (positive and negative)', type: 'Ability' },
    { id: 'en21', name: 'Mind Flare', description: 'Pick enemy in combat with general. Until end of phase, attacks only hit on unmodified 6 (once per battle, any combat phase)', type: 'Ability' },
    { id: 'en22', name: 'Delicious Morsels', description: 'Heal (1) each friendly Cavalry within general\'s combat range (your hero phase)', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Ritual of the Creeping Mist', description: 'Soulscryer: Pick friendly unit within 12" and roll. On 3+, subtract 1 from wound rolls vs that unit until your next turn', source: 'Unit Ability' },
      { name: 'Delicious Morsels', description: 'Heal (1) each Cavalry in combat range (if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [
      { name: 'Low Tide', description: 'Subtract 1 from hit rolls for shooting vs friendly units (round 1)', source: 'Battle Trait' },
      { name: 'Flood Tide', description: 'Can run and still shoot/charge (round 2)', source: 'Battle Trait' },
      { name: 'Ebb Tide', description: 'Can retreat and still shoot/charge (round 4)', source: 'Battle Trait' },
    ],
    charge: [
      { name: 'Way of the Cresting Wave', description: 'Thralls add 1 to Rend if they charged (if selected)', source: 'Regiment Ability' },
      { name: 'Biovoltaic Blast', description: 'Morrsarr: If charged, pick enemy within 1". Roll dice = models in unit (+1 per die if enemy has more models). Each 4-5 = 1 mortal, each 6+ = D3 mortal (once per battle)', source: 'Unit Ability' },
    ],
    shooting: [
      { name: 'Isharann Soulscryer', description: 'Scryfish Shoal [Shoot in Combat, Companion] | Range 10" | Attacks 8 | Hit 5+ | Wound 5+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Akhelian Allopex', description: 'Razorshell Harpoon Launcher [Anti-Monster (+1 Rend)] | Range 18" | Attacks 2 | Hit 3+ | Wound 2+ | Rend 1 | Damage 3', source: 'Unit Ability' },
    ],
    combat: [
      { name: 'Isharann Soulscryer', description: '[Save 5+] | Abyssal Touch | Attacks 3 | Hit 3+ | Wound 4+ | Rend - | Damage D3', source: 'Unit Ability' },
      { name: 'Akhelian Morrsarr Guard', description: '[Save 4+] | Voltspear [Charge (+1 Damage)] | Attacks 2 | Hit 3+ | Wound 4+ | Rend 1 | Damage 1\nFangmora\'s Fangs and Lashing Tail [Companion] | Attacks 3 | Hit 4+ | Wound 3+ | Rend 1 | Damage D3', source: 'Unit Ability' },
      { name: 'Akhelian Allopex', description: '[Save 4+] | Barbed Hooks and Blades | Attacks 4 | Hit 3+ | Wound 4+ | Rend 1 | Damage 2\nAllopex\'s Ferocious Bite [Companion] | Attacks 3 | Hit 4+ | Wound 2+ | Rend 2 | Damage 2', source: 'Unit Ability' },
      { name: 'Namarti Thralls', description: '[Save 5+] | Lanmari [Anti-Infantry (+1 Rend)] | Attacks 2 | Hit 3+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'High Tide', description: 'All units have Strike-first (round 3)', source: 'Battle Trait' },
      { name: 'Bloodthirsty Predators', description: 'Allopex: Add 1 to Ferocious Bite attacks if within 6" of damaged enemies or enemies with slain models this turn', source: 'Unit Ability' },
      { name: 'Sweeping Blows', description: 'Thralls: Add 1 to Lanmari damage vs Monsters', source: 'Unit Ability' },
      { name: 'Arch-Ritualist', description: 'Add 1 to Creeping Mist rolls (if enhancement selected)', source: 'Enhancement' },
      { name: 'Steelshell Armour', description: 'Ignore save modifiers (if enhancement selected)', source: 'Enhancement' },
      { name: 'Mind Flare', description: 'Enemy in combat only hits on 6 (once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    endOfTurn: [
      { name: 'Ethersea Predators', description: 'Heal (D3) Cavalry that fought (once per turn, if selected)', source: 'Regiment Ability' },
      { name: 'Isharann Soulscryer', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Akhelian Morrsarr Guard', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Akhelian Allopex', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Namarti Thralls', description: '[Control 1]', source: 'Unit Ability' },
    ],
  }
};

export const akhelianTideGuard: Spearhead = {
  id: 'sh8',
  name: 'Akhelian Tide Guard',
  description: 'Elite royal bodyguard of eel-riders and archers protecting their Akhelian King',
  units: [
    { name: 'Akhelian King', count: 1, type: 'Hero/General' },
    { name: 'Akhelian Morrsarr Guard', count: 3, type: 'Cavalry' },
    { name: 'Akhelian Ishlaen Guard', count: 3, type: 'Cavalry' },
    { name: 'Namarti Reavers', count: 10, type: 'Infantry' },
  ],
  battleTraits: [
    { name: 'Royal Imperative', description: 'Once per battle in round 3 any combat phase: Choose Into Them! (friendly units have Strike-first) OR Strike Sure (friendly melee weapons have Crit (Mortal))' },
  ],
  regimentAbilities: [
    { id: 'ra22', name: 'The Spear of Asphoren', description: 'Once per turn any charge phase: Pick unit not in combat. Add 1 to charge rolls for that unit' },
    { id: 'ra23', name: 'The Shield of Ulchiss', description: 'Once per turn your movement phase: Pick unit in combat. No mortal damage when retreating this turn' },
  ],
  enhancements: [
    { id: 'en22', name: 'Dutiful Souls', description: 'Pick friendly unit within 12" of general. Return 1 slain model (D3 if Infantry) (once per battle, your hero phase)', type: 'Ability' },
    { id: 'en23', name: 'Shimmering Amulet', description: 'General has Ward (5+)', type: 'Ability' },
    { id: 'en24', name: 'Voltaic Charge', description: 'General\'s Akhelian Royal Weapons have Charge (+1 Damage)', type: 'Weapon Enhancement' },
    { id: 'en25', name: 'Soul Stealer', description: 'If general is in combat, Heal (D3) general (end of any turn)', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Raiders\' Resolve', description: 'King: Pick friendly unit in combat range and roll. On 3+, add 1 to saves until your next turn', source: 'Unit Ability' },
      { name: 'Dutiful Souls', description: 'Return slain models to unit within 12" (once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [
      { name: 'The Shield of Ulchiss', description: 'Unit in combat takes no mortal damage when retreating (once per turn, if selected)', source: 'Regiment Ability' },
    ],
    charge: [
      { name: 'Wave Rider', description: 'King: If charged, pick enemy within 1" and roll D3. On 2+, inflict mortal damage = roll', source: 'Unit Ability' },
      { name: 'Biovoltaic Blast', description: 'Morrsarr: If charged, pick enemy within 1". Roll dice = models in unit (+1 per die if enemy has more models). Each 3+ = 1 mortal (once per battle)', source: 'Unit Ability' },
      { name: 'The Spear of Asphoren', description: 'Unit not in combat adds 1 to charge (once per turn, if selected)', source: 'Regiment Ability' },
    ],
    shooting: [
      { name: 'Namarti Reavers', description: 'Whisperbow | Range 12" | Attacks 2 | Hit 3+ | Wound 4+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: 'Strike on the Move', description: 'Reavers: Can shoot even if ran or retreated', source: 'Unit Ability' },
    ],
    combat: [
      { name: 'Akhelian King', description: '[Save 3+] | Akhelian Royal Weapons | Attacks 4 | Hit 3+ | Wound 4+ | Rend 1 | Damage 2\nDeepmare\'s Fangs, Talons and Lashing Tails [Companion] | Attacks 5 | Hit 4+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Akhelian Morrsarr Guard', description: '[Save 4+] | Voltspear [Charge (+1 Damage)] | Attacks 2 | Hit 3+ | Wound 4+ | Rend 1 | Damage 1\nFangmora\'s Fangs and Lashing Tail [Companion] | Attacks 3 | Hit 4+ | Wound 3+ | Rend 1 | Damage D3', source: 'Unit Ability' },
      { name: 'Akhelian Ishlaen Guard', description: '[Save 4+] | Helsabre | Attacks 3 | Hit 3+ | Wound 4+ | Rend 1 | Damage 1\nFangmora\'s Fangs and Lashing Tail [Companion] | Attacks 3 | Hit 4+ | Wound 3+ | Rend 1 | Damage D3', source: 'Unit Ability' },
      { name: 'Namarti Reavers', description: '[Save 5+] | Keening Blade | Attacks 1 | Hit 3+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Royal Imperative', description: 'Round 3 only: Strike-first OR Crit (Mortal) (once per battle, if selected)', source: 'Battle Trait' },
      { name: 'Biovoltaic Barrier', description: 'Ishlaen: Pick enemy in combat and roll. On 3+, subtract 1 from target\'s weapon attacks (once per battle, any combat phase)', source: 'Unit Ability' },
      { name: 'Voltaic Charge', description: 'King\'s weapons have Charge (+1 Damage) (if enhancement selected)', source: 'Enhancement' },
      { name: 'Shimmering Amulet', description: 'General has Ward (5+) (if enhancement selected)', source: 'Enhancement' },
    ],
    endOfTurn: [
      { name: 'Soul Stealer', description: 'If general in combat, Heal (D3) general (if enhancement selected)', source: 'Enhancement' },
      { name: 'Akhelian King', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Akhelian Morrsarr Guard', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Akhelian Ishlaen Guard', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Namarti Reavers', description: '[Control 1]', source: 'Unit Ability' },
    ],
  }
};

// DAUGHTERS OF KHAINE SPEARHEADS
export const witchAelvesCoven: Spearhead = {
  id: 'sh9',
  name: 'Witch Aelves Coven',
  description: 'Frenzied warriors blessed by the Blood God with supernatural speed',
  units: [
    { name: 'Hag Queen', count: 1, type: 'Hero' },
    { name: 'Witch Aelves', count: 10, type: 'Battleline' },
    { name: 'Sisters of Slaughter', count: 10, type: 'Elite' },
    { name: 'Doomfire Warlocks', count: 5, type: 'Cavalry' },
  ],
  battleTraits: [
    { name: 'Blood Rites', description: 'Grow stronger each round: Round 1 re-roll 1s to hit, Round 2+ re-roll all failed hits' },
    { name: 'Fanatical Faith', description: 'Roll a dice when allocating wounds to units wholly within 12" of a Priest. On a 6+, negate the wound' },
  ],
  regimentAbilities: [
    { id: 'ra25', name: 'Bladed Whirlwind', description: 'Add 1 Attack to melee weapons if this unit charged this turn' },
    { id: 'ra26', name: 'Quicksilver Strike', description: 'This unit always fights first, even if it didn\'t charge' },
    { id: 'ra27', name: 'Frenzied Fervor', description: 'Improve the Rend characteristic of this unit\'s melee weapons by 1' },
  ],
  enhancements: [
    { id: 'en87', name: 'Bloodbane Venom', description: 'Pick one melee weapon. Unmodified wound rolls of 6 with that weapon inflict double damage', type: 'Artifact' },
    { id: 'en88', name: 'Mistress of Massacre', description: 'Once per battle, this unit can fight immediately after an enemy unit within 3" fights', type: 'Command Trait' },
    { id: 'en89', name: 'Crimson Rejuvenation', description: 'Once per battle, heal D3+3 wounds allocated to the bearer', type: 'Prayer' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Fanatical Faith', description: 'Units within 12" of Priest negate wounds on 6+', source: 'Battle Trait' },
      { name: 'Crimson Rejuvenation', description: 'Heal D3+3 wounds once per battle (if enhancement selected)', source: 'Enhancement' },
      { name: 'Touch of Death', description: 'Hag Queen can curse enemies with deadly prayers', source: 'Hero Ability' },
    ],
    movement: [],
    charge: [],
    shooting: [
      { name: 'Warlock Crossbows', description: 'Doomfire Warlocks shoot cursed bolts at enemies', source: 'Unit Ability' },
    ],
    combat: [
      { name: 'Blood Rites', description: 'Re-roll hit rolls based on battle round', source: 'Battle Trait' },
      { name: 'Bladed Whirlwind', description: 'Add 1 Attack if charged (if regiment ability selected)', source: 'Regiment Ability' },
      { name: 'Quicksilver Strike', description: 'Always fight first (if regiment ability selected)', source: 'Regiment Ability' },
      { name: 'Frenzied Fervor', description: 'Improve Rend by 1 (if regiment ability selected)', source: 'Regiment Ability' },
      { name: 'Dance of Death', description: 'Witch Aelves become a whirlwind of blades', source: 'Unit Ability' },
    ],
    endOfTurn: [],
  }
};

export const melusaiSerpentGuard: Spearhead = {
  id: 'sh10',
  name: 'Melusai Serpent Guard',
  description: 'Serpentine warriors blending mortal and monstrous forms',
  units: [
    { name: 'Melusai Ironscale', count: 1, type: 'Hero' },
    { name: 'Melusai Blood Sisters', count: 5, type: 'Elite' },
    { name: 'Melusai Blood Stalkers', count: 5, type: 'Elite' },
    { name: 'Bloodwrack Medusa', count: 1, type: 'Hero/Monster' },
  ],
  battleTraits: [
    { name: 'Gaze of Morathi', description: 'Enemy Heroes within 12" of Melusai units subtract 1 from hit rolls' },
    { name: 'Turned to Crystal', description: 'Blood Sisters turn slain enemies into crystal statues, gaining bonuses' },
  ],
  regimentAbilities: [
    { id: 'ra28', name: 'Heartrend', description: 'Blood Sisters deal mortal wounds in addition to normal damage on critical hits' },
    { id: 'ra29', name: 'Scáthborn Archers', description: 'Blood Stalkers can shoot twice if they did not move' },
    { id: 'ra30', name: 'Serpentine Speed', description: 'Add 2" to the Move characteristic of Melusai units' },
  ],
  enhancements: [
    { id: 'en28', name: 'Crystal Heart', description: 'The bearer has a 5+ ward save instead of 6+', type: 'Artifact' },
    { id: 'en29', name: 'Veteran of a Thousand Hunts', description: 'Add 1 to hit rolls for attacks made by the bearer', type: 'Command Trait' },
    { id: 'en30', name: 'Bloodwrack Stare', description: 'Once per battle, pick an enemy unit within 12". Roll a dice, on a 2+ deal D6 mortal wounds', type: 'Spell' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Gaze of Morathi', description: 'Enemy Heroes within 12" get -1 to hit', source: 'Battle Trait' },
      { name: 'Bloodwrack Stare', description: 'Deal D6 mortal wounds within 12" once per battle (if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [
      { name: 'Serpentine Speed', description: 'Add 2" to Move (if regiment ability selected)', source: 'Regiment Ability' },
    ],
    charge: [],
    shooting: [
      { name: 'Scáthborn Archers', description: 'Shoot twice if didn\'t move (if regiment ability selected)', source: 'Regiment Ability' },
      { name: 'Heartseeker Bows', description: 'Blood Stalkers shoot arrows that seek the heart', source: 'Unit Ability' },
    ],
    combat: [
      { name: 'Turned to Crystal', description: 'Gain bonuses for turning enemies to crystal', source: 'Battle Trait' },
      { name: 'Heartrend', description: 'Critical hits deal mortal wounds (if regiment ability selected)', source: 'Regiment Ability' },
      { name: 'Gorgai Fangs', description: 'Blood Sisters strike with venomous blades', source: 'Unit Ability' },
    ],
    endOfTurn: [],
  }
};

// SYLVANETH SPEARHEADS
export const bitterbarkCopse: Spearhead = {
  id: 'sh11',
  name: 'Bitterbark Copse',
  description: 'Warlike Sylvaneth channeling Alarielle\'s Summer Aspect, led by a vengeful Branchwych to purge enemies of natural law',
  units: [
    { name: 'Branchwych', count: 1, type: 'Hero/General' },
    { name: 'Treelord', count: 1, type: 'Monster' },
    { name: 'Kurnoth Hunters', count: 3, type: 'Elite Infantry' },
    { name: 'Tree-Revenants', count: 5, type: 'Infantry' },
  ],
  battleTraits: [
    { name: 'Ley Lines', description: 'Once per turn end of turn: Heal (1) each friendly unit within 3" of terrain' },
    { name: 'Strike and Fade', description: 'Once per turn end of turn: Unit that fought and is within 3" of terrain can be removed and redeployed within 3" of terrain, 6" from enemies on 2+' },
  ],
  regimentAbilities: [
    { id: 'ra31', name: 'Vengeful Spirits of the Land', description: 'Once per turn end of turn: On 4+, deal D3 mortal damage to enemy contesting an objective' },
    { id: 'ra32', name: 'Walkers of the Hidden Paths', description: 'Once per turn movement phase: Remove unit within 3" of terrain (not in combat), set up 6" from enemies (cannot move rest of phase)' },
  ],
  enhancements: [
    { id: 'en31', name: 'Regrowth', description: 'Cast (5+): Heal (D6) visible unit wholly within 18"', type: 'Spell' },
    { id: 'en32', name: 'Gnarled Warrior', description: 'Ignore negative modifiers to save rolls', type: 'Ability' },
    { id: 'en33', name: 'Treesong', description: 'Cast (7+): Add 1 to Rend of visible unit\'s melee weapons within 12" until next turn', type: 'Spell' },
    { id: 'en34', name: 'Seed of Rebirth', description: 'If general would be destroyed, on 3+ not destroyed and heal (1) - cannot use again this battle', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Verdurous Harmony', description: 'Branchwych casts (7+) to return 1 model (D3 for Tree-Revenants) to visible unit within 18"', source: 'Unit Ability' },
      { name: 'Regrowth', description: 'Cast to heal units (if enhancement selected)', source: 'Enhancement' },
      { name: 'Treesong', description: 'Cast to add Rend (if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [
      { name: 'Reinforcements - Tree-Revenants', description: 'Set up this unit in reserve. It can arrive in your movement phase more than 9" from all enemy units', source: 'Unit Ability' },
      { name: 'Walkers of the Hidden Paths', description: 'Teleport unit near terrain (once per turn, if selected)', source: 'Regiment Ability' },
    ],
    charge: [],
    shooting: [
      { name: 'Kurnoth Hunters', description: 'Kurnoth Bow | Range 20" | Attacks 2 | Hit 3+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Envoys of the Everqueen', description: 'Kurnoth Hunters grant Ward (6+) to units contesting their objective', source: 'Unit Ability' },
    ],
    combat: [
      { name: 'Branchwych', description: '[Save 5+] | Scythe and Beetle [Companion] | Attacks 5 | Hit 3+ | Wound 3+ | Rend 1 | Damage D3', source: 'Unit Ability' },
      { name: 'Treelord', description: '[Save 3+] | Sweeping Blows | Attacks 5 | Hit 3+ | Wound 3+ | Rend 2 | Damage 3', source: 'Unit Ability' },
      { name: 'Kurnoth Hunters', description: '[Save 4+] | Kurnoth Greatsword [Crit (2 Hits)] | Attacks 3 | Hit 3+ | Wound 3+ | Rend 2 | Damage 2\nKurnoth Scythe [Crit (2 Hits)] | Attacks 4 | Hit 3+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Tree-Revenants', description: '[Save 5+] | Enchanted Blade | Attacks 2 | Hit 3+ | Wound 4+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: 'Groundshaker', description: 'Treelord gives enemies Strike-last on 4+', source: 'Unit Ability' },
      { name: 'Martial Memories', description: 'Tree-Revenants choose +1 to hit (Memories of War) or +1 to save (Memories of Peace)', source: 'Unit Ability' },
    ],
    endOfTurn: [
      { name: 'Ley Lines', description: 'Heal (1) units within 3" of terrain (once per turn)', source: 'Battle Trait' },
      { name: 'Strike and Fade', description: 'Teleport fighting units to terrain (once per turn)', source: 'Battle Trait' },
      { name: 'Vengeful Spirits of the Land', description: 'Deal D3 mortal to enemy on objective on 4+ (once per turn, if selected)', source: 'Regiment Ability' },
      { name: 'Branchwych', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Treelord', description: '[Control 5]', source: 'Unit Ability' },
      { name: 'Kurnoth Hunters', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Tree-Revenants', description: '[Control 1]', source: 'Unit Ability' },
    ],
  }
};

export const spitewingFlight: Spearhead = {
  id: 'sh12',
  name: 'Spitewing Flight',
  description: 'Aerial squadron of elite Sylvaneth riders led by an Arch-Revenant, striking swiftly from the skies to destroy emerging threats',
  units: [
    { name: 'Arch-Revenant', count: 1, type: 'Hero/General' },
    { name: 'Gossamid Archers', count: 5, type: 'Infantry' },
    { name: 'Spiterider Lancers', count: 3, type: 'Cavalry' },
    { name: 'Revenant Seekers', count: 3, type: 'Cavalry' },
  ],
  battleTraits: [
    { name: 'Target of Vengeance', description: 'Start of battle round: If no quarry, pick enemy unit as quarry' },
    { name: 'Song of the Hunt', description: 'Gain chords when quarry destroyed. 1 chord: +1 run/charge near quarry. 2 chords: +1 to hit near quarry. 3+ chords: +1 to wound near quarry' },
    { name: 'Airborne Cohesion', description: 'Friendly units have 2" coherency' },
  ],
  regimentAbilities: [
    { id: 'ra33', name: 'Leaves on the Wind', description: 'Once per battle end of turn: Unit in combat can retreat without mortal damage' },
    { id: 'ra34', name: 'Lifebringers', description: 'Once per turn end of turn: Heal (D3) each friendly unit' },
  ],
  enhancements: [
    { id: 'en110', name: 'Head of the Hunt', description: 'Add 1 to Rend of general\'s melee weapons while quarry is within 9" and visible', type: 'Ability' },
    { id: 'en111', name: 'Zephyrkin', description: 'If general charged, can move 2D6" after Fight ability, cannot end in combat', type: 'Ability' },
    { id: 'en35', name: 'Bold Spirit', description: 'Once per battle hero phase: Add 1 to wound rolls for friendly combat attacks within general\'s combat range', type: 'Ability' },
    { id: 'en36', name: 'Cunning Pursuer', description: 'While general in combat, +1 to charge for units within 12". +2 if general in combat with quarry', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Heartwood Hunting Horn', description: 'Arch-Revenant gives visible unit within 12" +1 chord until next turn (for Song of the Hunt)', source: 'Unit Ability' },
      { name: 'Bold Spirit', description: 'Add 1 to wound for units in combat range (once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [
      { name: 'Zephyrspites', description: 'Gossamid Archers move D6" after shooting', source: 'Unit Ability' },
    ],
    charge: [
      { name: 'Song of the Hunt (1 chord)', description: 'Add 1 to run/charge rolls near quarry', source: 'Battle Trait' },
      { name: 'Spiterider Charge', description: 'Deal D3+1 mortal damage to target within 1" on 2+ (add 1 to roll if target is quarry)', source: 'Unit Ability' },
      { name: 'Cunning Pursuer', description: 'Add to charge rolls while general in combat (if enhancement selected)', source: 'Enhancement' },
    ],
    shooting: [
      { name: 'Gossamid Archers', description: 'Zephyrbow | Range 18" | Attacks 2 | Hit 3+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Spiterider Lancers', description: 'Spiterider Javelin | Range 9" | Attacks 2 | Hit 3+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Song of the Hunt (2+ chords)', description: 'Add 1 to hit near quarry', source: 'Battle Trait' },
    ],
    combat: [
      { name: 'Arch-Revenant', description: '[Save 4+] | Crescent Shield [Crit (2 Hits)] | Attacks 3 | Hit 3+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Gossamid Archers', description: '[Save 5+] | Archers Blade | Attacks 1 | Hit 3+ | Wound 5+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Spiterider Lancers', description: '[Save 4+] | Spiterider Lance [Charge (+1 Damage)] | Attacks 2 | Hit 3+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Revenant Seekers', description: '[Save 4+] | Seeker Javelin | Attacks 2 | Hit 3+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Song of the Hunt (3+ chords)', description: 'Add 1 to wound near quarry', source: 'Battle Trait' },
      { name: 'Zephyrkin', description: 'General moves 2D6" after fighting if charged (if enhancement selected)', source: 'Enhancement' },
      { name: 'Deafening Drone', description: 'Revenant Seekers that didn\'t charge subtract 1 from enemy Attacks if roll exceeds Control', source: 'Unit Ability' },
    ],
    endOfTurn: [
      { name: 'Leaves on the Wind', description: 'Unit in combat retreats without mortal damage (once per battle, if selected)', source: 'Regiment Ability' },
      { name: 'Lifebringers', description: 'Heal (D3) each unit (once per turn, if selected)', source: 'Regiment Ability' },
      { name: 'Arch-Revenant', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Gossamid Archers', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Spiterider Lancers', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Revenant Seekers', description: '[Control 2]', source: 'Unit Ability' },
    ],
  }
};

// SERAPHON SPEARHEADS
export const starscaleWarhost: Spearhead = {
  id: 'sh14',
  name: 'Starscale Warhost',
  description: 'Merciless reptilian warriors led by an Oldblood on Carnosaur, utterly committed to the Great Plan',
  units: [
    { name: 'Saurus Oldblood on Carnosaur', count: 1, type: 'Hero/Monster/General' },
    { name: 'Saurus Warriors', count: 5, type: 'Infantry' },
    { name: 'Saurus Warriors', count: 5, type: 'Infantry' },
    { name: 'Kroxigor', count: 3, type: 'Infantry' },
  ],
  battleTraits: [
    { name: 'Beast of the Dark Jungles', description: 'In combat: Gargantuan Jaws - slay model on roll exceeding Health, or Roar - subtract D6 from enemy control' },
  ],
  regimentAbilities: [
    { id: 'ra40', name: 'Predatory Fighters', description: 'Once per phase end of turn: On 3+, inflict 1 mortal damage on each enemy in combat with friendly units' },
    { id: 'ra41', name: 'Temple-City Guardians', description: 'Friendly units have Ward (6+) while wholly within friendly territory' },
  ],
  enhancements: [
    { id: 'en40', name: "Sotek's Gaze", description: 'End of turn: Roll dice, add to general\'s control score this turn', type: 'Ability' },
    { id: 'en41', name: 'Ancient Strategist', description: 'Once per battle enemy movement phase: Unit within 12" of general (not general) can move as if your movement phase', type: 'Ability' },
    { id: 'en42', name: 'Blade of Realities', description: 'Add 1 to Rend of general\'s Relic Celestite Weapon', type: 'Weapon Enhancement' },
    { id: 'en43', name: 'The Wrath of Chotec', description: 'General\'s Sunbolt Gauntlet has 6 Attacks instead of D6', type: 'Weapon Enhancement' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Ancient Warlord', description: 'Oldblood adds 1 to charge rolls for visible unit within 12" until next turn', source: 'Unit Ability' },
      { name: 'Ancient Strategist', description: 'Unit moves in enemy movement phase (once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [],
    charge: [],
    shooting: [
      { name: 'Saurus Oldblood on Carnosaur', description: 'Sunbolt Gauntlet | Range 18" | Attacks D6 | Hit 3+ | Wound 3+ | Rend 1 | Damage 1', source: 'Unit Ability' },
    ],
    combat: [
      { name: 'Saurus Oldblood on Carnosaur', description: '[Save 3+] | Relic Celestite Weapon [Crit (2 Hits)] | Attacks 4 | Hit 3+ | Wound 3+ | Rend 2 | Damage 2\nCarnosaur\'s Claws and Jaws [Companion] | Attacks 6 | Hit 4+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Saurus Warriors', description: '[Save 4+] | Celestite Club | Attacks 2 | Hit 3+ | Wound 3+ | Rend - | Damage 1\nCelestite Spear | Attacks 2 | Hit 4+ | Wound 3+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Kroxigor', description: '[Save 4+] | Moonstone Hammer | Attacks 3 | Hit 3+ | Wound 3+ | Rend 1 | Damage 3', source: 'Unit Ability' },
      { name: 'Beast of the Dark Jungles', description: 'Carnosaur uses Gargantuan Jaws or Roar ability', source: 'Battle Trait' },
      { name: 'Ordered Cohorts', description: 'Saurus Warriors add 1 to save while contesting objective they control', source: 'Unit Ability' },
      { name: 'Brutal Blows', description: 'Kroxigor have Crit (2 Hits) vs units with 5+ models', source: 'Unit Ability' },
    ],
    endOfTurn: [
      { name: 'Predatory Fighters', description: 'Deal 1 mortal to enemies in combat on 3+ (once per phase, if selected)', source: 'Regiment Ability' },
      { name: "Sotek's Gaze", description: 'Add dice roll to control (if enhancement selected)', source: 'Enhancement' },
      { name: 'Saurus Oldblood on Carnosaur', description: '[Control 5]', source: 'Unit Ability' },
      { name: 'Saurus Warriors', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Kroxigor', description: '[Control 2]', source: 'Unit Ability' },
    ],
  }
};

export const sunbloodedProwlers: Spearhead = {
  id: 'sh15',
  name: 'Sunblooded Prowlers',
  description: 'Expert hunters led by a Sunblood Pack, relentlessly seeking prey marked for eradication by their slann lords',
  units: [
    { name: 'Sunblood Pack (with Venomites)', count: 3, type: 'Hero/General' },
    { name: 'Saurus Warriors', count: 5, type: 'Infantry' },
    { name: 'Saurus Warriors', count: 5, type: 'Infantry' },
    { name: 'Hunters of Huanchi', count: 5, type: 'Infantry' },
    { name: 'Hunters of Huanchi', count: 5, type: 'Infantry' },
    { name: 'Terrawings', count: 3, type: 'Beast' },
    { name: 'Spawn of Chotec', count: 1, type: 'Beast' },
  ],
  battleTraits: [
    { name: 'Hidden Hunters', description: 'Hunters of Huanchi and Spawn deploy from round 3: Set up 6" from enemies' },
    { name: 'Vengeance of Azyr', description: 'End of turn: On 4+, inflict 1 mortal damage on each enemy in combat with friendly Saurus' },
  ],
  regimentAbilities: [
    { id: 'ra42', name: 'Scaled Aegis', description: 'Hero phase: On 3+, Saurus unit has Ward (6+) until next turn' },
    { id: 'ra43', name: 'Followers of Huanchi', description: 'Shooting phase: On 3+, Skink unit\'s ranged weapons have Crit (Auto-wound)' },
  ],
  enhancements: [
    { id: 'en112', name: 'Instinctive Commander', description: 'Hero phase: On 3+, visible unit within 12" (not in combat) can move', type: 'Ability' },
    { id: 'en113', name: 'Venomite Swarm', description: 'Combat phase: Deal D3 mortal to enemy in combat (on 1, remove Venomites token)', type: 'Ability' },
    { id: 'en44', name: 'Savage Mauling', description: 'Combat phase: Enemy in combat with general cannot make ward rolls', type: 'Ability' },
    { id: 'en45', name: 'Blessed by the Old Ones', description: 'End of turn if general destroyed: On 2+, set up replacement with 1 Sunblood 6" from enemies', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Savage Bellow', description: 'Sunblood gives visible unit within 12" Crit (2 Hits) on 3+', source: 'Unit Ability' },
      { name: 'Scaled Aegis', description: 'Saurus unit gets Ward (6+) on 3+ (if selected)', source: 'Regiment Ability' },
      { name: 'Instinctive Commander', description: 'Unit moves on 3+ (if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [
      { name: 'Reinforcements - Terrawings', description: 'Set up this unit in reserve. It can arrive in your movement phase more than 9" from all enemy units', source: 'Unit Ability' },
      { name: 'Chameleon Ambush', description: 'Hunters of Huanchi and Spawn set up 6" from enemies (from round 3)', source: 'Battle Trait' },
    ],
    charge: [],
    shooting: [
      { name: 'Hunters of Huanchi', description: 'Dartpipe | Range 16" | Attacks 2 | Hit 3+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Terrawings', description: 'Meteoric Javelins | Range 12" | Attacks 4 | Hit 4+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Star-Venom', description: 'Hunters reduce enemy wound rolls by 1 on 2+ if they dealt damage with Dartpipes', source: 'Unit Ability' },
      { name: 'Followers of Huanchi', description: 'Skink unit gets Crit (Auto-wound) on 3+ (if selected)', source: 'Regiment Ability' },
    ],
    combat: [
      { name: 'Sunblood Pack', description: '[Save 4+] | Ferocious Bite [Companion] | Attacks 5 | Hit 3+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Saurus Warriors', description: '[Save 4+] | Celestite Club | Attacks 2 | Hit 3+ | Wound 3+ | Rend - | Damage 1\nCelestite Spear | Attacks 2 | Hit 4+ | Wound 3+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Hunters of Huanchi', description: '[Save 5+] | Hunting Blade | Attacks 1 | Hit 4+ | Wound 5+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Terrawings', description: '[Save 5+] | Vicious Beak [Companion] | Attacks 2 | Hit 4+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Spawn of Chotec', description: '[Save 4+] | Burning Jaws [Companion] | Attacks 4 | Hit 4+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Scaled Protectors', description: 'Sunblood Pack ignores first damage each phase and adds 1 to control while including Sunblood model', source: 'Unit Ability' },
      { name: 'Ordered Cohorts', description: 'Saurus Warriors add 1 to save while contesting objective they control', source: 'Unit Ability' },
      { name: 'Nerve-Shredding Screeches', description: 'Terrawings subtract 1 from enemy hit rolls on 4+', source: 'Unit Ability' },
      { name: 'Venomite Swarm', description: 'Deal D3 mortal to enemy in combat (if enhancement selected)', source: 'Enhancement' },
      { name: 'Savage Mauling', description: 'Enemy cannot ward (if enhancement selected)', source: 'Enhancement' },
    ],
    endOfTurn: [
      { name: 'Vengeance of Azyr', description: 'Deal 1 mortal on 4+ to enemies in combat with Saurus', source: 'Battle Trait' },
      { name: 'Blessed by the Old Ones', description: 'Return Sunblood on 2+ when destroyed (if enhancement selected)', source: 'Enhancement' },
      { name: 'Sunblood Pack', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Saurus Warriors', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Hunters of Huanchi', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Terrawings', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Spawn of Chotec', description: '[Control 1]', source: 'Unit Ability' },
    ],
  }
};

// KHARADRON OVERLORDS SPEARHEADS
export const skyhammerTaskForce: Spearhead = {
  id: 'sh17',
  name: 'Skyhammer Task Force',
  description: 'Swift and decisive formation led by an Arkanaut Admiral, delivering intense firepower from a mobile Arkanaut Frigate',
  units: [
    { name: 'Arkanaut Admiral', count: 1, type: 'Hero/General' },
    { name: 'Arkanaut Company (Skypike)', count: 5, type: 'Infantry' },
    { name: 'Arkanaut Company (Light Skyhook & Volley Gun)', count: 5, type: 'Infantry' },
    { name: 'Skywardens', count: 3, type: 'Infantry' },
    { name: 'Arkanaut Frigate', count: 1, type: 'War Machine' },
  ],
  battleTraits: [
    { name: 'Ply the Skies', description: 'When Frigate moves, transport Infantry units wholly within combat range (cannot charge same turn)' },
  ],
  regimentAbilities: [
    { id: 'ra56', name: 'Assault Boat', description: 'Once per battle: Transported unit can still charge this turn' },
    { id: 'ra57', name: 'Disengage', description: 'Once per battle: Frigate can retreat without mortal damage and still shoot' },
  ],
  enhancements: [
    { id: 'en90', name: 'Masterwrought Armour', description: 'Your general has Ward (6+)', type: 'Ability' },
    { id: 'en91', name: "There's No Reward Without Risk", description: 'Once per battle: Re-roll charge roll for unit within 12" of general', type: 'Ability' },
    { id: 'en92', name: 'Flask of Vintage Gorogna', description: 'Once per battle: Heal (D6) your general', type: 'Ability' },
    { id: 'en93', name: 'Leave No Duardin Behind', description: 'Once per battle: Roll dice for slain models from Arkanaut Company within 12" of general, 4+ returns model', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Always Take What You Are Owed', description: 'Admiral adds D6 to control score of Arkanaut Company within 12"', source: 'Unit Ability' },
      { name: 'Leave No Duardin Behind', description: 'Return slain Arkanauts on 4+ (once per battle, if enhancement selected)', source: 'Enhancement' },
      { name: 'Flask of Vintage Gorogna', description: 'Heal (D6) general (once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [
      { name: 'Reinforcements - Skywardens', description: 'Set up this unit in reserve. It can arrive in your movement phase more than 9" from all enemy units', source: 'Unit Ability' },
      { name: 'Reinforcements - Arkanaut Company', description: 'Set up this unit in reserve. It can arrive in your movement phase more than 9" from all enemy units', source: 'Unit Ability' },
      { name: 'Ply the Skies', description: 'Transport Infantry units when Frigate moves', source: 'Battle Trait' },
      { name: 'Assault Boat', description: 'Transported unit can still charge (once per battle, if selected)', source: 'Regiment Ability' },
      { name: 'Disengage', description: 'Frigate retreats without mortal damage and can shoot (once per battle, if selected)', source: 'Regiment Ability' },
      { name: 'Bomb Racks', description: 'Frigate drops bombs on units it passed over, D3 mortal damage on 2+ (once per battle)', source: 'Unit Ability' },
    ],
    charge: [
      { name: "There's No Reward Without Risk", description: 'Re-roll charge for unit within 12" (once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    shooting: [
      { name: 'Arkanaut Admiral', description: 'Masterwork Volley Pistol [Shoot in Combat] | Range 10" | Attacks 3 | Hit 3+ | Wound 3+ | Rend 2 | Damage D6', source: 'Unit Ability' },
      { name: 'Skywardens', description: 'Vulcaniser Pistol [Shoot in Combat] | Range 10" | Attacks 3 | Hit 3+ | Wound 3+ | Rend 1 | Damage 1\nAethermatic Volley Gun | Range 15" | Attacks 2D6 | Hit 4+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Arkanaut Company', description: 'Privateer Pistol | Range 10" | Attacks 2 | Hit 4+ | Wound 4+ | Rend - | Damage 1\nAethermatic Volley Gun | Range 15" | Attacks 2D6 | Hit 4+ | Wound 4+ | Rend - | Damage 1\nLight Skyhook | Range 15" | Attacks 1 | Hit 3+ | Wound 3+ | Rend 2 | Damage D3', source: 'Unit Ability' },
      { name: 'Arkanaut Frigate', description: 'Heavy Skycannon | Range 24" | Attacks 2 | Hit 3+ | Wound 3+ | Rend 2 | Damage 2\nHeavy Skyhook | Range 24" | Attacks 4 | Hit 4+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Glory-Seekers', description: 'Arkanaut Company adds 1 to hit vs units contesting objectives', source: 'Unit Ability' },
    ],
    combat: [
      { name: 'Arkanaut Admiral', description: '[Save 3+] | Skalfhammer | Attacks 3 | Hit 3+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Skywardens', description: '[Save 4+] | Skypike [Crit (Mortal)] | Attacks 2 | Hit 3+ | Wound 4+ | Rend 1 | Damage 1\nGun Butt | Attacks 1 | Hit 4+ | Wound 5+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Arkanaut Company', description: '[Save 4+] | Arkanaut Cutter | Attacks 2 | Hit 4+ | Wound 4+ | Rend - | Damage 1\nSkypike [Crit (Mortal)] | Attacks 2 | Hit 3+ | Wound 4+ | Rend 1 | Damage 1\nGun Butt | Attacks 1 | Hit 4+ | Wound 5+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: "Arkanaut Frigate", description: "[Save 3+] | Crew's Boarding Weapons | Attacks 12 | Hit 4+ | Wound 4+ | Rend - | Damage 1", source: 'Unit Ability' },
    ],
    endOfTurn: [
      { name: 'Timed Charges', description: 'Skywardens deal 1 mortal damage on 2+ to enemy in combat, then retreat without mortal damage', source: 'Unit Ability' },
      { name: 'Arkanaut Admiral', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Arkanaut Company (Skypike)', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Arkanaut Company (Light Skyhook & Volley Gun)', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Skywardens', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Arkanaut Frigate', description: '[Control 5]', source: 'Unit Ability' },
    ],
  }
};

export const grundstokTrailblazers: Spearhead = {
  id: 'sh18',
  name: 'Grundstok Trailblazers',
  description: 'Heavily armed vanguard troops led by an Endrinmaster, utilizing Gunhaulers to secure and hold vital assets',
  units: [
    { name: 'Endrinmaster with Dirigible Suit', count: 1, type: 'Hero/General' },
    { name: 'Grundstok Thunderers', count: 5, type: 'Infantry' },
    { name: 'Grundstok Gunhauler', count: 1, type: 'War Machine' },
    { name: 'Endrinriggers', count: 3, type: 'Infantry' },
  ],
  battleTraits: [
    { name: 'Gunhauler Escort', description: 'Subtract 1 from hit rolls for attacks targeting Infantry within 6" of Gunhauler' },
  ],
  regimentAbilities: [
    { id: 'ra58', name: 'Rapid Relocation', description: 'Once per battle: Remove Fly unit and set up 6" from enemies (cannot charge this turn)' },
    { id: 'ra59', name: 'Propeller Downdraught', description: 'Subtract 1 from charge rolls for enemies within 9" of Gunhauler' },
  ],
  enhancements: [
    { id: 'en94', name: 'Emergency Fuel Injection Pods', description: 'Once per battle combat phase: General has Strike-first', type: 'Ability' },
    { id: 'en95', name: 'Prospector and Pioneer', description: 'Add 2 to general\'s control score', type: 'Ability' },
    { id: 'en96', name: 'Celestium-Burst Bomblets', description: 'Enemy in combat with general cannot make ward rolls on 3+ (any combat phase)', type: 'Ability' },
    { id: 'en97', name: 'Extraction Fail-Safes', description: 'Subtract 1 from damage inflicted on general when retreating', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Endrinmaster Extraordinaire', description: 'Endrinmaster heals Fly units within 12" (D3 on 2+)', source: 'Unit Ability' },
    ],
    movement: [
      { name: 'Reinforcements - Grundstok Thunderers', description: 'Set up this unit in reserve. It can arrive in your movement phase more than 9" from all enemy units', source: 'Unit Ability' },
      { name: 'Reinforcements - Endrinriggers', description: 'Set up this unit in reserve. It can arrive in your movement phase more than 9" from all enemy units', source: 'Unit Ability' },
      { name: 'Rapid Relocation', description: 'Remove and redeploy Fly unit 6" from enemies (once per battle, if selected)', source: 'Regiment Ability' },
      { name: 'Cloudweaving Skyfarers', description: 'Endrinriggers can move in enemy movement phase on 3+', source: 'Unit Ability' },
    ],
    charge: [
      { name: 'Propeller Downdraught', description: 'Enemies within 9" of Gunhauler subtract 1 from charge rolls (if selected)', source: 'Regiment Ability' },
    ],
    shooting: [
      { name: 'Endrinmaster', description: 'Aethercannon | Range 12" | Attacks 8 | Hit 3+ | Wound 3+ | Rend 2 | Damage 2', source: 'Unit Ability' },
      { name: 'Grundstok Thunderers', description: 'Aethershot Rifle | Range 18" | Attacks 2 | Hit 3+ | Wound 4+ | Rend 1 | Damage 1\nAetheric Fumigator | Range 9" | Attacks 2D6 | Hit 4+ | Wound 3+ | Rend - | Damage 1\nDecksweeper | Range 9" | Attacks 2D6 | Hit 4+ | Wound 3+ | Rend - | Damage 1\nGrundstok Mortar | Range 18" | Attacks 1 | Hit 4+ | Wound 3+ | Rend 1 | Damage D3\nAethercannon | Range 12" | Attacks 6 | Hit 3+ | Wound 3+ | Rend 2 | Damage 2', source: 'Unit Ability' },
      { name: 'Grundstok Gunhauler', description: 'Sky Ordnance | Range 24" | Attacks 4 | Hit 4+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Endrinriggers', description: 'Rapid Fire Rivet Gun | Range 10" | Attacks 3 | Hit 3+ | Wound 4+ | Rend - | Damage 1\nAethermatic Volley Gun | Range 15" | Attacks 2D6 | Hit 4+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Bewilderblast Rounds', description: 'Thunderers subtract D6 from control score of damaged enemy (once per battle)', source: 'Unit Ability' },
    ],
    combat: [
      { name: 'Endrinmaster', description: '[Save 3+] | Aethermatic Saw | Attacks 4 | Hit 3+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Grundstok Thunderers', description: '[Save 4+] | Gun Butt | Attacks 1 | Hit 4+ | Wound 5+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Grundstok Gunhauler', description: '[Save 3+] | Boat Hook | Attacks 3 | Hit 4+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Endrinriggers', description: '[Save 4+] | Aethermatic Saw | Attacks 2 | Hit 3+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Emergency Fuel Injection Pods', description: 'General has Strike-first (once per battle, if enhancement selected)', source: 'Enhancement' },
      { name: 'Celestium-Burst Bomblets', description: 'Enemy in combat cannot ward on 3+ (if enhancement selected)', source: 'Enhancement' },
      { name: 'Gunhauler Overwatch', description: 'Deal D3 mortal damage on 2+ to charging enemy in combat', source: 'Unit Ability' },
    ],
    endOfTurn: [
      { name: 'Endrinmaster with Dirigible Suit', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Grundstok Thunderers', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Grundstok Gunhauler', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Endrinriggers', description: '[Control 1]', source: 'Unit Ability' },
    ],
  }
};

// CITIES OF SIGMAR SPEARHEADS
export const zenestrasZealots: Spearhead = {
  id: 'sh27',
  name: "Zenestra's Zealots",
  description: 'Fanatical soldiers escorting the legendary Pontifex Zenestra into battle, ready to lay down their lives for the God-King',
  units: [
    { name: 'Freeguild Marshal and Relic Envoy', count: 1, type: 'Hero/General' },
    { name: 'Pontifex Zenestra, Matriarch of the Great Wheel', count: 1, type: 'Hero' },
    { name: 'Freeguild Command Corps Whisperblade', count: 1, type: 'Infantry' },
    { name: 'Freeguild Command Corps Arch-Knight and Retinue', count: 1, type: 'Infantry' },
    { name: 'Freeguild Steelhelms', count: 5, type: 'Infantry' },
    { name: 'Freeguild Steelhelms', count: 5, type: 'Infantry' },
  ],
  battleTraits: [
    { name: 'Shadowy Spymaster', description: 'Whisperblade not set up during deployment. From round 2: Set up within 6" of enemy not in combat' },
    { name: 'Lady of the Wheel', description: 'When friendly model slain by combat attack, roll dice equal to Health. For each 5+, inflict 1 mortal on attacker after Fight resolved' },
  ],
  regimentAbilities: [
    { id: 'ra44', name: 'Fervent Rush', description: 'Once per turn movement phase: Unit can use Charge abilities even if it used Run ability same turn' },
    { id: 'ra45', name: 'Fierce Zealots', description: 'Add 3 to control scores of Freeguild Steelhelms units' },
  ],
  enhancements: [
    { id: 'en63', name: 'Devout Commander', description: 'Add 1 to Attacks and Rend of general\'s Master-forged Weapon', type: 'Ability' },
    { id: 'en64', name: 'Step to It!', description: 'Reaction when Run declared for non-Hero within 12": Do not roll, add 6" to Move instead', type: 'Ability' },
    { id: 'en65', name: 'Stand Fast, Comrades', description: 'Once per battle hero phase: Visible non-Hero within 12" has Ward (4+) until next battle round', type: 'Ability' },
    { id: 'en66', name: 'Ardent Demand', description: 'Any combat phase: Visible non-Hero within 12" adds 1 to hit for rest of turn', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: "Marshal's Orders", description: 'Remove Relic Envoy token, give to visible unit within 12"', source: 'Unit Ability' },
      { name: 'Relic Envoy', description: 'Unit with token adds 1 to wound for combat attacks', source: 'Unit Ability' },
      { name: 'Vessel of Sigmar', description: 'Zenestra picks up to 3 targets. Roll D3: Friendly gets Ward (5+), enemy takes mortal damage equal to roll on 2+', source: 'Unit Ability' },
      { name: 'Dazzling Radiance', description: 'Return 1 slain model to units within 12" when general arrives (if enhancement selected)', source: 'Enhancement' },
      { name: 'Stand Fast, Comrades', description: 'Unit gets Ward (4+) until next battle round (once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [
      { name: 'Sudden Ambush', description: 'Whisperblade sets up within 6" of enemy not in combat (from round 2)', source: 'Battle Trait' },
      { name: 'Fervent Rush', description: 'Unit can charge after running (once per turn, if selected)', source: 'Regiment Ability' },
      { name: 'Step to It!', description: 'No run roll, add 6" instead (if enhancement selected)', source: 'Enhancement' },
    ],
    charge: [],
    shooting: [
      { name: 'Freeguild Marshal', description: 'Duelling Pistols [Shoot in Combat] | Range 10" | Attacks 4 | Hit 3+ | Wound 4+ | Rend 1 | Damage 1', source: 'Unit Ability' },
    ],
    combat: [
      { name: 'Freeguild Marshal', description: '[Save 3+] | Master-forged Weapon | Attacks 5 | Hit 4+ | Wound 4+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Pontifex Zenestra', description: '[Save 5+] [Ward (4+)] | Sceptre of the Wheel | Attacks 3 | Hit 4+ | Wound 4+ | Rend 1 | Damage D3', source: 'Unit Ability' },
      { name: 'Whisperblade', description: '[Save 6+] | Enchanted Rapier | Attacks 4 | Hit 3+ | Wound 4+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: 'Arch-Knight and Retinue', description: '[Save 4+] | Command Weapons | Attacks 3 | Hit 3+ | Wound 2+ | Rend - | Damage 2', source: 'Unit Ability' },
      { name: 'Freeguild Steelhelms', description: '[Save 4+] | Freeguild Weapons | Attacks 2 | Hit 4+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Lady of the Wheel', description: 'Roll dice equal to slain model Health. 5+ deals 1 mortal to attacker after Fight', source: 'Battle Trait' },
      { name: 'Forewarned is Forearmed', description: 'Whisperblade has Strike-first during your turn', source: 'Unit Ability' },
      { name: 'Talented Champions', description: 'Arch-Knight: After using command, return card to hand (once per turn reaction)', source: 'Unit Ability' },
      { name: 'Fanatical Followers', description: 'Steelhelms return 1 slain model (any combat phase)', source: 'Unit Ability' },
      { name: 'Devout Commander', description: 'Add 1 to Attacks and Rend (if enhancement selected)', source: 'Enhancement' },
      { name: 'Ardent Demand', description: 'Unit adds 1 to hit (if enhancement selected)', source: 'Enhancement' },
    ],
    endOfTurn: [
      { name: 'Freeguild Marshal and Relic Envoy', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Pontifex Zenestra', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Whisperblade', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Arch-Knight and Retinue', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Freeguild Steelhelms', description: '[Control 1]', source: 'Unit Ability' },
    ],
  }
};

export const casteliteCompany: Spearhead = {
  id: 'sh28',
  name: 'Castelite Company',
  description: 'Adaptable formation specializing in absorbing enemy attacks before unleashing devastating counter-charges',
  units: [
    { name: 'Freeguild Cavalier-Marshal', count: 1, type: 'Hero/General' },
    { name: 'Freeguild Steelhelms', count: 5, type: 'Infantry' },
    { name: 'Freeguild Steelhelms', count: 5, type: 'Infantry' },
    { name: 'Freeguild Cavaliers', count: 5, type: 'Cavalry' },
    { name: 'Ironweld Great Cannon', count: 1, type: 'War Machine' },
  ],
  battleTraits: [
    { name: "The Officar's Order", description: 'Start of battle round: Pick battle tactic card, place separate. When using command on it, return to hand instead of discarding. Can still score tactic normally' },
  ],
  regimentAbilities: [
    { id: 'ra73', name: 'For Sigmar, Charge!', description: 'Once per battle charge phase: Friendly Cavalry have Strike-first if they charged' },
    { id: 'ra74', name: 'Ironweld Discipline', description: 'Once per turn enemy shooting phase: Great Cannon can Shoot on 3+' },
  ],
  enhancements: [
    { id: 'en67', name: 'Flask of Lethisian Darkwater', description: 'Once per battle start of any turn: Heal (D6) general', type: 'Ability' },
    { id: 'en68', name: 'Brazier of Holy Flame', description: 'End of any turn: Return up to D3 slain models to Steelhelms within combat range', type: 'Ability' },
    { id: 'en122', name: 'Heirloom Blade', description: 'Add 1 to Rend of general\'s Master-forged Longsword', type: 'Weapon Enhancement' },
    { id: 'en123', name: 'Glimmering', description: 'Each phase: Re-roll 1 hit, wound, or save roll for general', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Decisive Commander', description: 'Cavalier-Marshal picks Steelhelms within 12". On 2+: Return D3 models OR add 3 to control until next turn', source: 'Unit Ability' },
      { name: 'Flask of Lethisian Darkwater', description: 'Heal (D6) general (once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [
      { name: 'Consecrate the Land', description: 'Steelhelms contesting objective you control (not contested by enemy): On 3+, objective becomes consecrated. Units contesting consecrated objectives have Ward (6+)', source: 'Unit Ability' },
    ],
    charge: [
      { name: 'Devastating Charge', description: 'Cavaliers: If charged, pick enemy in combat. On 2+, inflict D3 mortal', source: 'Unit Ability' },
      { name: 'For Sigmar, Charge!', description: 'Cavalry have Strike-first if charged (once per battle, if selected)', source: 'Regiment Ability' },
      { name: 'Bladed Impact', description: 'Inflict mortal damage on 2+ when general charged (if enhancement selected)', source: 'Enhancement' },
    ],
    shooting: [
      { name: 'Dragoon Pistol', description: 'Cavalier-Marshal | [Shoot in Combat] | Range 10" | Attacks 2 | Hit 3+ | Wound 4+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: 'Great Cannon: Cannonball', description: '[Anti-Cavalry (+1 Rend)] [Anti-Infantry (+1 Rend)] | Range 24" | Attacks 2 | Hit 4+ | Wound 2+ | Rend 2 | Damage D3+2', source: 'Unit Ability' },
      { name: 'Great Cannon: Grapeshot', description: 'Range 12" | Attacks 5 | Hit 3+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Shot and Shell', description: 'Choose Cannonball or Grapeshot. Cannonball only if no Move used', source: 'Unit Ability' },
      { name: 'Ironweld Discipline', description: 'Great Cannon shoots in enemy shooting phase on 3+ (once per turn, if selected)', source: 'Regiment Ability' },
      { name: 'Boiling Blood', description: 'Roll vs enemy Save. If equal/exceed, halve Move (if enhancement selected)', source: 'Enhancement' },
    ],
    combat: [
      { name: 'Cavalier-Marshal', description: '[Save 3+] | Master-forged Longsword | Attacks 5 | Hit 3+ | Wound 4+ | Rend 1 | Damage 2\nWarhorse Hooves [Companion] | Attacks 2 | Hit 5+ | Wound 3+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Freeguild Steelhelms', description: '[Save 4+] | Freeguild Weapon | Attacks 2 | Hit 4+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Freeguild Cavaliers', description: '[Save 3+] | Cavalier Weapon [Charge (+1 Damage)] | Attacks 3 | Hit 4+ | Wound 4+ | Rend 1 | Damage 1\nWarhorse Hooves [Companion] | Attacks 2 | Hit 5+ | Wound 3+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Great Cannon', description: "[Save 4+] | Crew's Tools and Sidearms | Attacks 2 | Hit 4+ | Wound 4+ | Rend - | Damage 1", source: 'Unit Ability' },
      { name: 'Heirloom Blade', description: 'Add 1 to Rend (if enhancement selected)', source: 'Enhancement' },
      { name: 'Glimmering', description: 'Re-roll 1 hit, wound, or save each phase (if enhancement selected)', source: 'Enhancement' },
    ],
    endOfTurn: [
      { name: 'Brazier of Holy Flame', description: 'Return up to D3 models to Steelhelms in combat range (if enhancement selected)', source: 'Enhancement' },
      { name: 'Freeguild Cavalier-Marshal', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Freeguild Steelhelms', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Freeguild Cavaliers', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Ironweld Great Cannon', description: '[Control 2]', source: 'Unit Ability' },
    ],
  }
};

export const fusilPlatoon: Spearhead = {
  id: 'sh29',
  name: 'Fusil Platoon',
  description: 'Mobile gunnery brigade seeking out ambushers and patrolling vulnerable borders with overwhelming firepower',
  units: [
    { name: 'Fusil-Major on Ogor Warhulk', count: 1, type: 'Hero/General' },
    { name: 'Alchemite Warforger', count: 1, type: 'Hero' },
    { name: 'Freeguild Fusiliers with Blackpowder Squire', count: 5, type: 'Infantry' },
    { name: 'Freeguild Fusiliers', count: 5, type: 'Infantry' },
    { name: 'Wildercorps Hunters', count: 11, type: 'Infantry' },
  ],
  battleTraits: [
    { name: 'Fortify Position', description: 'Subtract 1 from Rend for attacks targeting Castelite units if they did not use Move ability same turn' },
  ],
  regimentAbilities: [
    { id: 'ra75', name: 'Well Provisioned', description: 'Once per turn shooting phase: Pick non-Hero. On 3+, add 1 to wound for shooting attacks rest of phase' },
    { id: 'ra76', name: 'Respected Leader', description: 'Deployment phase: Wildercorps Hunters gain Reinforcements keyword' },
  ],
  enhancements: [
    { id: 'en124', name: 'Adept Tactician', description: 'Once per battle movement phase: Set up replacement 10-model Fusiliers unit from 2 destroyed units, more than 6" from enemies', type: 'Ability' },
    { id: 'en125', name: 'Shield Bash', description: 'Once per turn movement phase: Enemy Infantry/War Machine/Cavalry in combat must retreat on 3+', type: 'Ability' },
    { id: 'en73', name: 'Brace!', description: 'General has Ward (5+)', type: 'Ability' },
    { id: 'en74', name: 'Point-Blank Volley', description: 'Once per turn enemy combat phase: Roll D3. On 2+, inflict mortal damage on enemy in combat equal to roll', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [
      { name: 'Expert Trackers', description: 'Wildercorps can use Normal Move as if it were movement phase', source: 'Unit Ability' },
      { name: 'Respected Leader', description: 'Wildercorps gain Reinforcements (if selected)', source: 'Regiment Ability' },
    ],
    hero: [
      { name: 'Blazing Weapons', description: 'Warforger casts (6+): Unit within 12" has Crit (Mortal) until next turn', source: 'Unit Ability' },
    ],
    movement: [
      { name: 'Shield Bash', description: 'Enemy in combat retreats on 3+ (once per turn, if enhancement selected)', source: 'Enhancement' },
      { name: 'Adept Tactician', description: 'Create replacement Fusiliers from 2 destroyed units (once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    charge: [],
    shooting: [
      { name: 'Fusil-Major', description: 'Long-Fusil | Range 24" | Attacks 3 | Hit 3+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Freeguild Fusiliers', description: 'Fusil-cannon | Range 18" | Attacks 2 | Hit 4+ | Wound 4+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: 'Wildercorps Hunters', description: 'Hunting Crossbow | Range 15" | Attacks 2 | Hit 4+ | Wound 4+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: 'Mark Targets', description: 'Fusil-Major: Friendly units add 1 to hit vs enemy targeted by his shooting', source: 'Unit Ability' },
      { name: 'Blackpowder Squire', description: 'Fusiliers with token have Shoot in Combat', source: 'Unit Ability' },
      { name: "Can't Stop!", description: 'Once per turn: Remove token, give to another Fusiliers unit', source: 'Unit Ability' },
      { name: 'Well Provisioned', description: 'Add 1 to wound on 3+ (once per turn, if selected)', source: 'Regiment Ability' },
    ],
    combat: [
      { name: 'Fusil-Major', description: "[Save 3+] | Warhulk's Mace | Attacks 4 | Hit 4+ | Wound 2+ | Rend 2 | Damage 2", source: 'Unit Ability' },
      { name: 'Alchemite Warforger', description: '[Save 5+] | Tongstaff | Attacks 3 | Hit 4+ | Wound 4+ | Rend 1 | Damage D3', source: 'Unit Ability' },
      { name: 'Freeguild Fusiliers', description: '[Save 4+] | Bayonet | Attacks 1 | Hit 4+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Wildercorps Hunters', description: '[Save 5+] | Hunting Weapons | Attacks 2 | Hit 4+ | Wound 4+ | Rend 1 | Damage 1\nTrailhound Ferocious Bite [Companion] | Attacks 2 | Hit 4+ | Wound 3+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Fortify Position', description: 'Subtract 1 from Rend if unit did not move', source: 'Battle Trait' },
      { name: 'Brace!', description: 'General has Ward (5+) (if enhancement selected)', source: 'Enhancement' },
      { name: 'Point-Blank Volley', description: 'Inflict mortal damage on 2+ (once per turn, if enhancement selected)', source: 'Enhancement' },
    ],
    endOfTurn: [
      { name: 'Fusil-Major on Ogor Warhulk', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Alchemite Warforger', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Freeguild Fusiliers', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Wildercorps Hunters', description: '[Control 1]', source: 'Unit Ability' },
    ],
  }
};

// DAUGHTERS OF KHAINE SPEARHEADS
export const khainiteShadowCoven: Spearhead = {
  id: 'sh31',
  name: 'Khainite Shadow Coven',
  description: 'Specialists in subterfuge wielding umbra-touched magic and gore-smoke to confuse and assassinate enemies',
  units: [
    { name: 'Slaughter Queen on Cauldron of Blood', count: 1, type: 'Hero/General' },
    { name: 'Hag Queen', count: 1, type: 'Hero' },
    { name: 'Bloodwrack Medusa', count: 1, type: 'Hero' },
    { name: 'Khainite Shadowstalkers', count: 9, type: 'Infantry' },
    { name: 'Sisters of Slaughter', count: 5, type: 'Infantry' },
    { name: 'Sisters of Slaughter', count: 5, type: 'Infantry' },
  ],
  battleTraits: [
    { name: 'Shadowmasked', description: 'Once per turn any charge phase: Pick friendly Infantry in combat that did not charge. Subtract 1 from hit and wound rolls targeting it rest of turn' },
  ],
  regimentAbilities: [
    { id: 'ra52', name: 'Bleed Them Pale', description: 'Once per battle any combat phase: Friendly Infantry in combat that did not charge can move 6" (not ending in combat)' },
    { id: 'ra53', name: 'Murderous Strike', description: 'Add 1 to Rend of melee weapons for Infantry that charged' },
  ],
  enhancements: [
    { id: 'en79', name: 'Shadow Avatar', description: 'Once per battle combat phase: Add 1 to Rend of general\'s melee weapons for rest of turn', type: 'Ability' },
    { id: 'en80', name: 'Frenzied Exhortations', description: 'Hero phase: Pick visible unit within 12". On 3+, add 1 to ward for rest of turn', type: 'Ability' },
    { id: 'en81', name: 'Boiling Blood', description: 'Shooting phase: Pick visible enemy within 12". If roll equals/exceeds Save, halve Move until next turn', type: 'Ability' },
    { id: 'en82', name: 'Bladed Impact', description: 'Any charge phase: If general charged, pick enemy within 1". On D3 2+, inflict mortal equal to roll', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Consecrated Revulsion', description: 'Slaughter Queen picks visible Infantry within 12". On 3+, add 1 to saves until next turn', source: 'Unit Ability' },
      { name: 'Frenzied Exhortations', description: 'Add 1 to ward on 3+ (if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [
      { name: 'Shadow Leap', description: 'Shadowstalkers: Remove and redeploy 6" from enemies (once per battle)', source: 'Unit Ability' },
    ],
    charge: [
      { name: 'Shadowmasked', description: 'Infantry in combat that did not charge: Subtract 1 from hit and wound targeting it (once per turn)', source: 'Battle Trait' },
      { name: 'Bladed Impact', description: 'Inflict mortal on 2+ when general charged (if enhancement selected)', source: 'Enhancement' },
    ],
    shooting: [
      { name: 'Shadowstalkers', description: 'Cursed Bolts and Missiles | Range 10" | Attacks 2 | Hit 3+ | Wound 4+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: 'Exsanguinating Glare', description: 'Medusa: Pick enemy in combat or visible within 12". Roll: On 3+, inflict 1 mortal. If slew models, inflict additional 1 mortal', source: 'Unit Ability' },
      { name: 'Boiling Blood', description: 'Halve Move on roll vs Save (if enhancement selected)', source: 'Enhancement' },
    ],
    combat: [
      { name: 'Slaughter Queen on Cauldron', description: '[Save 4+] [Ward (6+)] | Shrine Guardians\' Blades | Attacks 9 | Hit 3+ | Wound 4+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Hag Queen', description: '[Save 5+] [Ward (6+)] | Blade of Khaine | Attacks 5 | Hit 3+ | Wound 4+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Bloodwrack Medusa', description: '[Save 5+] [Ward (6+)] | Bloodwrack Spear | Attacks 5 | Hit 3+ | Wound 4+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Shadowstalkers', description: '[Save 6+] [Ward (6+)] | Blades of Murder | Attacks 2 | Hit 3+ | Wound 4+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: 'Sisters of Slaughter', description: '[Save 6+] [Ward (6+)] | Kruiplash | Attacks 3 | Hit 4+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Bloody Incitement', description: 'Hag Queen: If in combat, visible unit within 12" has Crit (Auto-wound). If not in combat, on 3+ unit has Crit (Auto-wound)', source: 'Unit Ability' },
      { name: 'Dance of Death', description: 'Sisters in combat can move 2D6" through combat ranges (once per turn enemy combat phase)', source: 'Unit Ability' },
      { name: 'Bleed Them Pale', description: 'Infantry in combat that did not charge moves 6" not ending in combat (once per battle, if selected)', source: 'Regiment Ability' },
      { name: 'Murderous Strike', description: 'Add 1 to Rend if charged (if selected)', source: 'Regiment Ability' },
      { name: 'Shadow Avatar', description: 'Add 1 to Rend of general\'s melee weapons (once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    endOfTurn: [
      { name: 'Slaughter Queen on Cauldron of Blood', description: '[Control 5]', source: 'Unit Ability' },
      { name: 'Hag Queen', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Bloodwrack Medusa', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Khainite Shadowstalkers', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Sisters of Slaughter', description: '[Control 1]', source: 'Unit Ability' },
    ],
  }
};

export const heartflayerTroupe: Spearhead = {
  id: 'sh32',
  name: 'Heartflayer Troupe',
  description: 'Darting blood-slick killers eager to massacre enemies and offer worthy kills to their goddess',
  units: [
    { name: 'Melusai Ironscale', count: 1, type: 'Hero/General' },
    { name: 'Witch Aelves', count: 5, type: 'Infantry' },
    { name: 'Witch Aelves', count: 5, type: 'Infantry' },
    { name: 'Doomfire Warlocks', count: 5, type: 'Cavalry' },
    { name: 'Blood Stalkers', count: 5, type: 'Infantry' },
  ],
  battleTraits: [
    { name: 'Blood Rites', description: 'Start of each battle round: Gain Blood Rites ability for current round (keep previous). Round 1: +1 run. Round 2: +1 charge. Round 3: +1 to hit combat. Round 4: +1 to wound combat' },
  ],
  regimentAbilities: [
    { id: 'ra54', name: 'Murderous Epiphany', description: 'Once per battle hero phase: All units gain next round\'s Blood Rites ability immediately (don\'t gain again at start of next round)' },
    { id: 'ra77', name: 'Blessing of Khaine', description: 'Any combat phase: Pick unit within 12" of general (not general). Add 1 to ward this phase' },
  ],
  enhancements: [
    { id: 'en83', name: 'Bathed in Blood', description: 'Each time model slain by general, Heal (1) general', type: 'Ability' },
    { id: 'en84', name: 'Fuelled by Revenge', description: 'Add 1 to Rend of Blood Stalkers melee weapons while within 12" of general', type: 'Ability' },
    { id: 'en85', name: 'Flask of Shademist', description: 'Once per battle any combat phase: Subtract 1 from hit rolls targeting units within 12" of general until end of phase', type: 'Ability' },
    { id: 'en86', name: 'Zealous Orator', description: 'Hero phase: Pick unit within 9" not in combat. Roll for slain models. 5+ returns 1 model', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'All-Out Slaughter', description: 'Ironscale picks unit within 12" (not self). Add 1 to Attacks of melee weapons for rest of turn', source: 'Unit Ability' },
      { name: 'Doomfire', description: 'Warlocks cast (6+): Inflict D3 mortal on visible enemy within 12"', source: 'Unit Ability' },
      { name: 'Murderous Epiphany', description: 'Gain next round\'s Blood Rites now (once per battle, if selected)', source: 'Regiment Ability' },
      { name: 'Zealous Orator', description: 'Return models on 5+ (if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [],
    charge: [],
    shooting: [
      { name: 'Keldrisaíth', description: 'Ironscale | Range 12" | Attacks 2 | Hit 3+ | Wound 4+ | Rend 1 | Damage D3', source: 'Unit Ability' },
      { name: 'Doomfire Crossbow', description: 'Warlocks | Range 10" | Attacks 2 | Hit 3+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Heartseeker Bow', description: 'Blood Stalkers | [Crit (Auto-wound)] | Range 18" | Attacks 3 | Hit 3+ | Wound 4+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: 'Heartseekers', description: 'Blood Stalkers crit on 5+ if did not move', source: 'Unit Ability' },
    ],
    combat: [
      { name: 'Melusai Ironscale', description: '[Save 5+] [Ward (6+)] | Keldrisaíth | Attacks 6 | Hit 3+ | Wound 4+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Witch Aelves', description: '[Save 6+] [Ward (6+)] | Paired Sciansá [Crit (Auto-wound)] | Attacks 3 | Hit 3+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Doomfire Warlocks', description: '[Save 5+] [Ward (6+)] | Cursed Scimitar | Attacks 2 | Hit 3+ | Wound 4+ | Rend 1 | Damage 1\nDark Steed Vicious Bite [Companion] | Attacks 2 | Hit 5+ | Wound 3+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Blood Stalkers', description: '[Save 5+] [Ward (6+)] | Scianlar | Attacks 2 | Hit 3+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Blood Rites', description: 'Cumulative abilities gained each round', source: 'Battle Trait' },
      { name: 'Turned to Crystal', description: 'Ironscale: Pick enemy within 1". On 2+, inflict 1 mortal (end of any turn)', source: 'Unit Ability' },
      { name: 'Frenzied Fervour', description: 'Witch Aelves: Add 1 to Rend if charged', source: 'Unit Ability' },
      { name: 'Blessing of Khaine', description: 'Add 1 to ward (if selected)', source: 'Regiment Ability' },
      { name: 'Bathed in Blood', description: 'Heal (1) when general slays model (if enhancement selected)', source: 'Enhancement' },
      { name: 'Fuelled by Revenge', description: 'Blood Stalkers add 1 to Rend (if enhancement selected)', source: 'Enhancement' },
      { name: 'Flask of Shademist', description: 'Subtract 1 from hit vs units within 12" (once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    endOfTurn: [
      { name: 'Melusai Ironscale', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Witch Aelves', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Doomfire Warlocks', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Blood Stalkers', description: '[Control 1]', source: 'Unit Ability' },
    ],
  }
};

// FYRESLAYERS SPEARHEADS
export const sagaAxeband: Spearhead = {
  id: 'sh25',
  name: 'Saga Axeband',
  description: 'Wandering bands of Berzerkers seeking glory, guided by a Battlesmith who bears witness to their deeds',
  units: [
    { name: 'Battlesmith', count: 1, type: 'Hero/General' },
    { name: 'Hearthguard Berzerkers', count: 5, type: 'Infantry' },
    { name: 'Vulkite Berzerkers', count: 5, type: 'Infantry' },
    { name: 'Vulkite Berzerkers', count: 5, type: 'Infantry' },
    { name: 'Vulkite Berzerkers', count: 5, type: 'Infantry' },
    { name: 'Vulkite Berzerkers', count: 5, type: 'Infantry' },
  ],
  battleTraits: [
    { name: 'Awaken the Runes', description: 'Once per battle round start of your turn: Pick 1 ur-gold rune and roll D6. On 1-5 standard effect, on 6 enhanced effect too. Each rune can only be activated once per battle' },
  ],
  regimentAbilities: [
    { id: 'ra108', name: 'Magmic Tunnels', description: 'Pick up to 2 friendly units. Remove and set up anywhere 6"+ from enemies (once per battle, start of first battle round)' },
    { id: 'ra109', name: 'Fyresteel Throwing Axes', description: 'Pick any number of friendly units not in combat within 10" of enemies. For each, pick visible enemy within 10" and roll. On 4+, inflict D3 mortal (once per turn, your shooting phase)' },
  ],
  enhancements: [
    { id: 'en108', name: 'Too Stubborn to Die', description: 'Heal (D3) general (start of any turn)', type: 'Ability' },
    { id: 'en109', name: 'Spirit of Grimnir', description: 'Re-roll activation rolls for Ur-gold Runes ability', type: 'Ability' },
    { id: 'en110', name: 'Horn of Grimnir', description: 'Roll for each friendly unit with slain models. On 3+, return 1 slain model (your hero phase, if general not in combat)', type: 'Ability' },
    { id: 'en111', name: 'Powerful Presence', description: 'Add 3 to general\'s control score (your hero phase, if general not in combat)', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [
      { name: 'Magmic Tunnels', description: 'Redeploy up to 2 units 6"+ from enemies (once per battle, if selected)', source: 'Regiment Ability' },
    ],
    hero: [
      { name: 'Awaken the Runes', description: 'Activate 1 ur-gold rune. Roll D6: 1-5 standard, 6 enhanced too (once per round)', source: 'Battle Trait' },
      { name: 'Plant the Icon', description: 'Battlesmith: Friendly units have Ward (5+) while wholly within 12" for rest of turn (once per battle)', source: 'Unit Ability' },
      { name: 'Horn of Grimnir', description: 'Return 1 slain model to units with casualties on 3+ (if enhancement selected, not in combat)', source: 'Enhancement' },
      { name: 'Powerful Presence', description: 'Add 3 to control (if enhancement selected, not in combat)', source: 'Enhancement' },
      { name: 'Spirit of Grimnir', description: 'Re-roll ur-gold rune activation rolls (if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [
      { name: 'Rune of Relentless Zeal', description: 'Standard: +2" Move. Enhanced: Also +2 to charge (if rune activated)', source: 'Battle Trait' },
    ],
    charge: [],
    shooting: [
      { name: 'Fyresteel Throwing Axes', description: 'Units within 10" of enemies roll for nearby enemies. On 4+, inflict D3 mortal (once per turn, if selected)', source: 'Regiment Ability' },
    ],
    combat: [
      { name: 'Battlesmith', description: '[Save 5+, Ward (6+)] | Ancestral Battle-axe | Attacks 6 | Hit 3+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Hearthguard Berzerkers', description: '[Save 6+, Ward (6+)] | Flamestrike Poleaxe [Crit (Mortal)] | Attacks 2 | Hit 3+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Vulkite Berzerkers', description: '[Save 6+, Ward (6+)] | Fyresteel Handaxes [Anti-charge (+1 Rend)] | Attacks 2 | Hit 4+ | Wound 3+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: 'Icon of Grimnir', description: 'Battlesmith: Add 1 to save rolls for friendly units wholly within 12"', source: 'Unit Ability' },
      { name: 'Duty unto Death', description: 'Hearthguard: While general wholly within combat range, both unit and general have Ward (5+)', source: 'Unit Ability' },
      { name: 'Whirlwind of Destruction', description: 'Vulkite: Add 1 to Attacks if charged this turn', source: 'Unit Ability' },
      { name: 'Rune of Fury', description: 'Standard: +1 to hit. Enhanced: Also +1 Attacks (if rune activated)', source: 'Battle Trait' },
      { name: 'Rune of Searing Heat', description: 'Standard: +1 Rend. Enhanced: Also +1 Damage (if rune activated)', source: 'Battle Trait' },
      { name: 'Rune of Fiery Determination', description: 'Standard: Ward (5+). Enhanced: Also +1 save (if rune activated)', source: 'Battle Trait' },
    ],
    endOfTurn: [
      { name: 'Too Stubborn to Die', description: 'Heal (D3) general (if enhancement selected)', source: 'Enhancement' },
      { name: 'Battlesmith', description: '[Control 5]', source: 'Unit Ability' },
      { name: 'Hearthguard Berzerkers', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Vulkite Berzerkers', description: '[Control 1]', source: 'Unit Ability' },
    ],
  }
};
