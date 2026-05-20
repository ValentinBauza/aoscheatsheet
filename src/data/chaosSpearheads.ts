import type {Spearhead} from './factions';

// SKAVEN SPEARHEADS
export const gnawfeastClawpack: Spearhead = {
  id: 'sh31',
  name: 'Gnawfeast Clawpack',
  description: 'Swarms of ratmen surging forward in manic need to devour, defile and bring ruin through weight of numbers',
  units: [
    { name: 'Clawlord on Gnaw-beast', count: 1, type: 'Hero/General' },
    { name: 'Grey Seer', count: 1, type: 'Hero' },
    { name: 'Warlock Engineer', count: 1, type: 'Hero' },
    { name: 'Clanrats', count: 10, type: 'Infantry' },
    { name: 'Clanrats', count: 10, type: 'Infantry' },
    { name: 'Rat Ogors', count: 3, type: 'Infantry' },
  ],
  battleTraits: [
    { name: 'The Lurking Vermintide', description: 'Once per battle deployment phase: Pick a unit not deployed to be set up in reserve in tunnels below. Must use Gnawhole Ambush by end of round 3 or destroyed' },
    { name: 'Gnawhole Ambush', description: 'Your movement phase: Deploy unit from tunnels within 6" of corner and 9"+ from enemies' },
  ],
  regimentAbilities: [
    { id: 'ra100', name: 'Warpstone-laced Bullets', description: 'Once per battle shooting phase: Pick a ranged weapon, it has Crit (Mortal) this phase' },
    { id: 'ra101', name: 'Too Quick to Hit-Hit', description: 'Passive: No mortal damage inflicted on friendly units when they retreat' },
  ],
  enhancements: [
    { id: 'en100', name: 'Lead the Seething Horde', description: 'Reaction when using Call for Reinforcements: Replacement unit can be set up within 13" of general instead of normal placement', type: 'Ability' },
    { id: 'en101', name: 'Skryre Connections', description: 'General\'s Ratling Pistol has 2D6 attacks instead of D6', type: 'Weapon Enhancement' },
    { id: 'en102', name: 'Warpstone Charm', description: 'Subtract 1 from save rolls for enemy units in combat with general', type: 'Ability' },
    { id: 'en103', name: 'Cloak of Stitched Victories', description: 'General has Ward (5+)', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [
      { name: 'The Lurking Vermintide', description: 'Pick unit to set up in reserve in tunnels (once per battle)', source: 'Battle Trait' },
    ],
    hero: [
      { name: 'Will of the Horned Rat', description: 'Grey Seer: Add die roll to control of unit within 13" on 3+ (your hero phase)', source: 'Unit Ability' },
      { name: 'Wither', description: 'Grey Seer: Cast (6+) to inflict D3 mortal on visible enemy within 13"', source: 'Unit Ability' },
    ],
    movement: [
      { name: 'Gnawhole Ambush', description: 'Deploy reserve unit within 6" of corner and 9"+ from enemies', source: 'Battle Trait' },
      { name: 'Too Quick to Hit-Hit', description: 'No mortal damage when retreating (if selected)', source: 'Regiment Ability' },
    ],
    charge: [],
    shooting: [
      { name: 'Clawlord on Gnaw-beast', description: 'Ratling Pistol [Crit (Auto-wound), Shoot in Combat] | Range 10" | Attacks D6 | Hit 3+ | Wound 3+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: 'Warlock Engineer', description: 'Warplock Musket [Crit (Auto-wound)] | Range 24" | Attacks 2 | Hit 3+ | Wound 3+ | Rend 2 | Damage D3', source: 'Unit Ability' },
      { name: 'More-more Warp Energy!', description: 'Warlock: Reaction if shooting and hasn\'t moved. On 2+, Musket damage = 3. On 1, inflict D3 mortal on self', source: 'Unit Ability' },
      { name: 'Rat Ogors', description: 'Warpfire Gun [Shoot in Combat] | Range 10" | Attacks 2D6 | Hit 4+ | Wound 4+ | Rend 2 | Damage 1', source: 'Unit Ability' },
      { name: 'Warpstone-laced Bullets', description: 'Ranged weapon has Crit (Mortal) (once per battle, if selected)', source: 'Regiment Ability' },
      { name: 'Skryre Connections', description: 'Ratling Pistol has 2D6 attacks (if enhancement selected)', source: 'Enhancement' },
    ],
    combat: [
      { name: 'Clawlord on Gnaw-beast', description: '[Save 4+, Ward (6+)] | Warpforged Halberd | Attacks 5 | Hit 3+ | Wound 4+ | Rend 1 | Damage 2\nGnaw-beast\'s Chisel Fangs [Companion] | Attacks 4 | Hit 4+ | Wound 3+ | Rend 1 | Damage D3', source: 'Unit Ability' },
      { name: 'Grey Seer', description: '[Save 6+] | Warpstone Staff | Attacks 3 | Hit 4+ | Wound 4+ | Rend 1 | Damage D3', source: 'Unit Ability' },
      { name: 'Warlock Engineer', description: '[Save 5+] | Warpforged Dagger | Attacks 3 | Hit 4+ | Wound 4+ | Rend - | Damage 2', source: 'Unit Ability' },
      { name: 'Clanrats', description: '[Save 5+] | Rusty Blade | Attacks 2 | Hit 4+ | Wound 5+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Rat Ogors', description: '[Save 5+] | Claws, Blades and Fangs | Attacks 5 | Hit 3+ | Wound 3+ | Rend - | Damage 2', source: 'Unit Ability' },
      { name: 'Cornered Rat', description: 'Clawlord: While damaged, add 3 to Halberd attacks', source: 'Unit Ability' },
      { name: 'Unleashed Warp-Fury', description: 'Rat Ogors: Inflict D3 mortal on self, then add 1 to melee attacks (once per battle, any combat phase)', source: 'Unit Ability' },
      { name: 'Warpstone Charm', description: 'Subtract 1 from enemy saves in combat with general (if enhancement selected)', source: 'Enhancement' },
      { name: 'Cloak of Stitched Victories', description: 'General has Ward (5+) (if enhancement selected)', source: 'Enhancement' },
    ],
    endOfTurn: [
      { name: 'Seething Swarm', description: 'Clanrats: Return D3 slain models', source: 'Unit Ability' },
      { name: 'Lead the Seething Horde', description: 'Reinforcements set up within 13" of general (if enhancement selected)', source: 'Enhancement' },
      { name: 'Clawlord on Gnaw-beast', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Grey Seer', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Warlock Engineer', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Clanrats', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Rat Ogors', description: '[Control 1]', source: 'Unit Ability' },
    ],
  }
};

export const warpsparkClawpack: Spearhead = {
  id: 'sh32',
  name: 'Warpspark Clawpack',
  description: 'Teeming Clanrat multitudes wielded alongside volatile Skryre war machines led by scheming Grey Seers',
  units: [
    { name: 'Grey Seer', count: 1, type: 'Hero/General' },
    { name: 'Stormfiends', count: 3, type: 'Infantry' },
    { name: 'Warp Lightning Cannon', count: 1, type: 'War Machine' },
    { name: 'Clanrats', count: 10, type: 'Infantry' },
    { name: 'Clanrats', count: 10, type: 'Infantry' },
  ],
  battleTraits: [
    { name: 'Always Three Clawsteps Ahead', description: 'Once per phase in enemy movement: Pick friendly unit not in combat to use Normal Move as if it were your movement phase' },
  ],
  regimentAbilities: [
    { id: 'ra102', name: 'Warpstone-laced Armour', description: 'Once per battle reaction when Stormfiends attacked: Stormfiends have Ward (5+) for rest of turn' },
    { id: 'ra103', name: 'Endless Swarm of Rats', description: 'Passive: When Clanrats use Seething Swarm, return D6 instead of D3 slain models' },
  ],
  enhancements: [
    { id: 'en104', name: 'Skilled Manipulator', description: 'General has Ward (4+) while within 1" of any Clanrats units', type: 'Ability' },
    { id: 'en105', name: 'Skitterleap', description: 'Cast (6+): Remove general and set up 6"+ from enemies (cannot move next movement phase)', type: 'Spell' },
    { id: 'en106', name: 'Cage of Warp Lightning', description: 'Pick visible enemy within 6" and roll. On 2+, enemy has Strike-last. On 1, inflict 1 mortal on general (once per battle, any combat phase)', type: 'Ability' },
    { id: 'en107', name: 'Scurry Away', description: 'Roll die, on 3+ general can retreat immediately (no mortal damage)', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Will of the Horned Rat', description: 'Grey Seer: Add die roll to control of unit within 13" on 3+ (your hero phase)', source: 'Unit Ability' },
      { name: 'Wither', description: 'Grey Seer: Cast (6+) to inflict D3 mortal on visible enemy within 13"', source: 'Unit Ability' },
      { name: 'Skitterleap', description: 'Cast to teleport general 6"+ from enemies (if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [
      { name: 'Always Three Clawsteps Ahead', description: 'Unit not in combat can move during enemy movement phase (once per phase)', source: 'Battle Trait' },
    ],
    charge: [],
    shooting: [
      { name: 'Stormfiends', description: 'Ratling Cannons | Range 15" | Attacks 3D6 | Hit 4+ | Wound 4+ | Rend 1 | Damage 1\nWindlaunchers | Range 15" | Attacks 3 | Hit 4+ | Wound 3+ | Rend 2 | Damage D3', source: 'Unit Ability' },
      { name: 'Warp Lightning Cannon', description: 'Warp Lightning Blast | Range 20" | Attacks 2D6 | Hit 4+ | Each hit = 1 mortal damage', source: 'Unit Ability' },
    ],
    combat: [
      { name: 'Grey Seer', description: '[Save 6+] | Warpstone Staff | Attacks 3 | Hit 4+ | Wound 4+ | Rend 1 | Damage D3', source: 'Unit Ability' },
      { name: 'Stormfiends', description: '[Save 4+] | Shock Gauntlets [Crit hits = D6 hits] | Attacks 4 | Hit 3+ | Wound 2+ | Rend 1 | Damage 2\nClubbing Blows | Attacks 4 | Hit 3+ | Wound 2+ | Rend - | Damage 2', source: 'Unit Ability' },
      { name: 'Warp Lightning Cannon', description: '[Save 4+] | Crew\'s Teeth and Knives | Attacks D6 | Hit 4+ | Wound 5+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Clanrats', description: '[Save 5+] | Rusty Blade | Attacks 2 | Hit 4+ | Wound 5+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Warpstone-laced Armour', description: 'Stormfiends have Ward (5+) for rest of turn (once per battle, if selected)', source: 'Regiment Ability' },
      { name: 'Skilled Manipulator', description: 'General has Ward (4+) while within 1" of Clanrats (if enhancement selected)', source: 'Enhancement' },
      { name: 'Cage of Warp Lightning', description: 'Enemy within 6" has Strike-last on 2+ (once per battle, if enhancement selected)', source: 'Enhancement' },
      { name: 'Scurry Away', description: 'General retreats on 3+ with no mortal damage (if enhancement selected)', source: 'Enhancement' },
    ],
    endOfTurn: [
      { name: 'Seething Swarm', description: 'Clanrats: Return D3 slain models (D6 if Endless Swarm selected)', source: 'Unit Ability' },
      { name: 'Endless Swarm of Rats', description: 'Clanrats return D6 instead of D3 (if selected)', source: 'Regiment Ability' },
      { name: 'Grey Seer', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Stormfiends', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Warp Lightning Cannon', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Clanrats', description: '[Control 1]', source: 'Unit Ability' },
    ],
  }
};

// HELSMITHS OF HASHUT SPEARHEADS
export const helforgeHost: Spearhead = {
  id: 'sh30',
  name: 'Helforge Host',
  description: 'Concise but deadly assemblage of daemon engines and dark duardin sent to claim resources and punish enemies',
  units: [
    { name: 'War Despot', count: 1, type: 'Hero/General' },
    { name: 'Dominator Engine with Immolation Cannons', count: 1, type: 'War Machine' },
    { name: 'Tormentor Bombard', count: 1, type: 'War Machine' },
    { name: 'Infernal Cohort with Hashutite Spears', count: 5, type: 'Infantry' },
    { name: 'Infernal Cohort with Hashutite Spears (with Gong Carrier)', count: 5, type: 'Infantry' },
  ],
  battleTraits: [
    { name: 'Harness Daemonic Power', description: 'Start of each hero phase: Remove all daemonic power points. Gain points equal to battle round +1. Allocate to units (max 3 per unit). Unallocated points lost' },
  ],
  regimentAbilities: [
    { id: 'ra50', name: 'Grinding Advance', description: 'Once per battle deployment phase: Up to 2 Infernal Cohort units move 3" (cannot charge in first round)' },
    { id: 'ra51', name: 'Suppressive Bombardment', description: 'Once per turn shooting phase: Enemy Infantry damaged by Bombard subtracts 1 charge dice (min 1) until next turn' },
  ],
  enhancements: [
    { id: 'en75', name: 'Scroll of Petrification', description: 'Once per battle any hero phase: General has Ward (2+) but cannot use abilities or be targeted by friendly abilities for rest of turn', type: 'Ability' },
    { id: 'en76', name: 'Chalice of Darkness', description: 'Once per battle shooting phase: Inflict D3 mortal on visible enemy within 12"', type: 'Ability' },
    { id: 'en77', name: 'Talisman of Obsidian', description: 'Ignore first damage point allocated to general each phase', type: 'Ability' },
    { id: 'en78', name: 'Amulet of Burning Hate', description: 'Once per battle any combat phase: General\'s attacks crit on 5+ for rest of turn', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [
      { name: 'Grinding Advance', description: 'Up to 2 Infernal Cohort move 3" (once per battle, if selected)', source: 'Regiment Ability' },
    ],
    hero: [
      { name: 'Harness Daemonic Power', description: 'Remove all points, gain battle round +1, allocate to units (max 3 each)', source: 'Battle Trait' },
      { name: 'Black-Hearted Conqueror', description: 'War Despot: Units with 0 points count as having 1 while within 6" and visible. Range increases by 3" per point Despot has', source: 'Unit Ability' },
      { name: 'Scroll of Petrification', description: 'General has Ward (2+) but cannot use/be targeted by abilities (once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [],
    charge: [],
    shooting: [
      { name: 'Dominator Engine', description: 'Immolation Cannons [Shoot in Combat] | Range 8" | Attacks 5 | Hit 2+ | Wound 4+ | Rend 1 | Damage D3', source: 'Unit Ability' },
      { name: 'Tormentor Bombard', description: 'Torrent of Ruinous Energy | Range 30" | Attacks 4 | Hit 3+ | Wound 3+ | Rend 1 | Damage D3', source: 'Unit Ability' },
      { name: 'Calculated Trajectory', description: 'Bombard: Add 1 to hit vs units with 5+ models beyond 12"', source: 'Unit Ability' },
      { name: 'Ruinous Bombardment', description: 'Bombard: If all attacks targeted same unit, roll for that unit and units within 6" equal to daemonic power points. On 3+, subtract 3 from control rest of turn', source: 'Unit Ability' },
      { name: 'Suppressive Bombardment', description: 'Enemy Infantry damaged by Bombard subtracts 1 charge dice (once per turn, if selected)', source: 'Regiment Ability' },
      { name: 'Chalice of Darkness', description: 'Inflict D3 mortal on visible enemy within 12" (once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    combat: [
      { name: 'War Despot', description: '[Save 3+] | Daemonflame Glaive [Crit (Mortal)] | Attacks 5 | Hit 3+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Dominator Engine', description: '[Save 2+] | Horns and Pummelling Strikes | Attacks 3 | Hit 4+ | Wound 3+ | Rend 1 | Damage D3', source: 'Unit Ability' },
      { name: 'Tormentor Bombard', description: '[Save 3+] | Artillerist Weapons | Attacks 3 | Hit 4+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Infernal Cohort', description: '[Save 3+] | Hashutite Spear [Anti-charge (+1 Rend)] | Attacks 2 | Hit 3+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Daemonic Strength', description: 'Dominator: For each daemonic power point: Add 1" Move and add 1 to Attacks', source: 'Unit Ability' },
      { name: 'Daemonic Resilience', description: 'Infernal Cohort: 1 point = Ward (6+), 2 points = Ward (5+), 3 points = Ward (5+) and ignore first damage each phase', source: 'Unit Ability' },
      { name: 'Strike the Gongs', description: 'Cohort with Gong: Remove Gong Carrier token to return D3 slain models (once per battle, any hero phase)', source: 'Unit Ability' },
      { name: 'Talisman of Obsidian', description: 'Ignore first damage each phase (if enhancement selected)', source: 'Enhancement' },
      { name: 'Amulet of Burning Hate', description: 'General crits on 5+ for rest of turn (once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    endOfTurn: [
      { name: 'War Despot', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Dominator Engine', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Tormentor Bombard', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Infernal Cohort', description: '[Control 1]', source: 'Unit Ability' },
    ],
  }
};
