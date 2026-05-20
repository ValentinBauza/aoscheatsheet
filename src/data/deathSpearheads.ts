import type {Spearhead} from './factions';

// SOULBLIGHT GRAVELORDS SPEARHEADS
export const deathrattleTombHost: Spearhead = {
  id: 'sh16',
  name: 'Deathrattle Tomb Host',
  description: 'Endless ranks of skeletal warriors and tomb champions advancing under the baleful gaze of their Wight King master',
  units: [
    { name: 'Wight King', count: 1, type: 'Hero/General' },
    { name: 'Barrow Guard', count: 10, type: 'Elite Infantry' },
    { name: 'Barrow Knights', count: 5, type: 'Elite Cavalry' },
    { name: 'Deathrattle Skeletons', count: 10, type: 'Infantry' },
    { name: 'Deathrattle Skeletons', count: 10, type: 'Infantry' },
  ],
  battleTraits: [
    { name: 'The Unquiet Dead', description: 'One Deathrattle Skeletons unit starts in reserve. From round 3+: Set up within 3" of battlefield edge, 6" from enemies' },
    { name: 'Aura of Antiquity', description: 'Once per turn combat phase: Pick enemy in combat. On 3+, subtract 1 from Rend of their melee weapons until next turn' },
  ],
  regimentAbilities: [
    { id: 'ra69', name: 'Overwhelming Hordes', description: 'Add 1 to wound for non-Hero units targeting units with fewer models than the attacking unit' },
    { id: 'ra70', name: 'Deathmarch', description: 'Once per turn hero phase: Pick non-Hero unit not in combat. Add 1" to Move and add 3 to control for rest of turn' },
  ],
  enhancements: [
    { id: 'en102', name: 'Shyishan Blade', description: 'The Rend of general\'s Baleful Tomb Blade is 2', type: 'Artifact' },
    { id: 'en103', name: 'Stolen Animus', description: 'Each time general scores critical hit, Heal (2) general after attacks resolved', type: 'Ability' },
    { id: 'en104', name: 'Propelled by Hate', description: 'Charge phase: Re-roll charge rolls for unit wholly within 12" of general for rest of turn', type: 'Ability' },
    { id: 'en105', name: 'Soul-Drain Pendant', description: 'Once per battle combat phase: Enemy in combat with general has Strike-last on 2+', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'King of Shambling Bones', description: 'Wight King: Pick Deathrattle unit within 12". On 2+, add 1 to hit for combat attacks for rest of turn', source: 'Unit Ability' },
      { name: 'Deathmarch', description: 'Pick non-Hero unit not in combat. Add 1" Move and +3 control (once per turn, if selected)', source: 'Regiment Ability' },
    ],
    movement: [
      { name: 'The Rising Dead', description: 'Reserve Deathrattle Skeletons set up within 3" of edge, 6" from enemies (from round 3)', source: 'Battle Trait' },
    ],
    charge: [
      { name: 'Propelled by Hate', description: 'Re-roll charge for unit within 12" of general (if enhancement selected)', source: 'Enhancement' },
    ],
    shooting: [],
    combat: [
      { name: 'Wight King', description: '[Save 4+] [Ward (6+)] [Control 2] | Baleful Tomb Blade [Crit (Mortal)] | Attacks 5 | Hit 4+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Barrow Guard', description: '[Save 4+] [Ward (6+)] [Control 1] | Wight Blade [Crit (Mortal)] | Attacks 2 | Hit 4+ | Wound 3+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: 'Barrow Knights', description: '[Save 4+] [Ward (6+)] [Control 1] | Barrow Lance [Crit (Mortal), Charge (+1 Damage)] | Attacks 2 | Hit 4+ | Wound 3+ | Rend 1 | Damage 1\nSkeletal Steed\'s Hooves and Teeth [Companion] | Attacks 2 | Hit 5+ | Wound 3+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Deathrattle Skeletons', description: '[Save 5+] [Ward (6+)] [Control 1] | Ancient Weapon | Attacks 2 | Hit 4+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Aura of Antiquity', description: 'Subtract 1 from Rend of enemy melee weapons on 3+ (once per turn)', source: 'Battle Trait' },
      { name: 'Guardians of the King', description: 'Barrow Guard: General and Barrow Guard have Ward (5+) while general in combat range', source: 'Unit Ability' },
      { name: 'Overwhelming Hordes', description: 'Add 1 to wound for non-Hero vs smaller units (if selected)', source: 'Regiment Ability' },
      { name: 'Shyishan Blade', description: 'General\'s Baleful Tomb Blade has Rend 2 (if enhancement selected)', source: 'Enhancement' },
      { name: 'Stolen Animus', description: 'Heal (2) general on critical hits (if enhancement selected)', source: 'Enhancement' },
      { name: 'Soul-Drain Pendant', description: 'Enemy has Strike-last on 2+ (once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    endOfTurn: [
      { name: 'Cursed to Rise Once More', description: 'Barrow Knights: Return 1 slain model to this unit', source: 'Unit Ability' },
      { name: 'Skeleton Legion', description: 'Deathrattle Skeletons: Return D3 slain models to this unit', source: 'Unit Ability' },
    ],
  }
};

export const bloodcraveHunt: Spearhead = {
  id: 'sh33',
  name: 'Bloodcrave Hunt',
  description: 'Vampiric hunters leading elite Blood Knights and grotesque Vargheists on a savage hunt for blood',
  units: [
    { name: 'Vampire Lord', count: 1, type: 'Hero/General' },
    { name: 'Deathrattle Skeletons', count: 10, type: 'Infantry' },
    { name: 'Deathrattle Skeletons', count: 10, type: 'Infantry' },
    { name: 'Blood Knights', count: 5, type: 'Elite Cavalry' },
    { name: 'Vargheists', count: 3, type: 'Elite Infantry' },
  ],
  battleTraits: [
    { name: 'Death\'s Descent', description: 'Vargheists start in reserve. From round 3+: Set up anywhere 6" from all enemies' },
    { name: 'The Hunger', description: 'Each time Vampire unit uses Fight ability, Heal (X) that unit where X is damage points allocated by those attacks' },
  ],
  regimentAbilities: [
    { id: 'ra71', name: 'Endless Legions', description: 'Once per battle movement phase: Set up destroyed Deathrattle Skeletons unit with D6 models in friendly territory 6" from enemies' },
    { id: 'ra72', name: 'Ruinous Chargers', description: 'Any charge phase: Blood Knights that charged inflict D3 mortal on each enemy unit passed across' },
  ],
  enhancements: [
    { id: 'en106', name: 'Grave-sand Shard', description: 'Once per battle reaction when Skeleton Legion used within 9" of general: Add 1 to each legion roll', type: 'Artifact' },
    { id: 'en107', name: 'Cloud of Bats', description: 'Once per battle movement phase: Remove general and set up anywhere 6" from all enemies', type: 'Ability' },
    { id: 'en108', name: 'Aura of Night', description: 'Ignore negative modifiers to save rolls for shooting attacks targeting general', type: 'Ability' },
    { id: 'en109', name: 'Spirit Gale', description: 'Hero phase: Cast (7+) to inflict 1 mortal damage on each enemy unit on battlefield', type: 'Spell' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Vile Transference', description: 'Vampire Lord: Cast (6+) vs visible enemy within 6". Roll dice = target\'s Health. Each 5+ deals 1 mortal and heals 1', source: 'Unit Ability' },
      { name: 'The Hunger', description: 'Vampire units heal damage equal to damage allocated when fighting', source: 'Battle Trait' },
      { name: 'Spirit Gale', description: 'Cast (7+) to deal 1 mortal to all enemies (if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [
      { name: 'Swoop Down', description: 'Vargheists set up anywhere 6" from enemies (from round 3)', source: 'Battle Trait' },
      { name: 'Endless Legions', description: 'Return destroyed Deathrattle Skeletons with D6 models (once per battle, if selected)', source: 'Regiment Ability' },
      { name: 'Cloud of Bats', description: 'Redeploy general anywhere 6" from enemies (once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    charge: [
      { name: 'Ruinous Chargers', description: 'Blood Knights deal D3 mortal to passed enemies when charging (if selected)', source: 'Regiment Ability' },
    ],
    shooting: [
      { name: 'Aura of Night', description: 'General ignores negative save modifiers from shooting (if enhancement selected)', source: 'Enhancement' },
    ],
    combat: [
      { name: 'Vampire Lord', description: '[Save 3+] [Ward (6+)] [Control 2] | Dynastic War-relic | Attacks 5 | Hit 3+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Blood Knights', description: '[Save 3+] [Ward (6+)] [Control 1] | Templar Lance or Blade [Charge (+1 Damage)] | Attacks 3 | Hit 3+ | Wound 3+ | Rend 1 | Damage 1\nNightmare\'s Hooves and Teeth [Companion] | Attacks 3 | Hit 5+ | Wound 3+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Vargheists', description: '[Save 5+] [Ward (6+)] [Control 1] | Murderous Fangs and Talons [Crit (2 Hits)] | Attacks 3 | Hit 4+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Deathrattle Skeletons', description: '[Save 5+] [Ward (6+)] [Control 1] | Ancient Weapon | Attacks 2 | Hit 4+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Riders of Ruin', description: 'Blood Knights can pass across enemy Infantry as if Fly', source: 'Unit Ability' },
      { name: 'The Scent of Gore', description: 'Vargheists add 1 to wound vs damaged units', source: 'Unit Ability' },
      { name: 'Skeleton Legion', description: 'Deathrattle Skeletons: For each slain model, roll D6. On 6, return 1 model', source: 'Unit Ability' },
      { name: 'Grave-sand Shard', description: 'Add 1 to legion rolls when Skeleton Legion used (reaction, once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    endOfTurn: [],
  }
};

// NIGHTHAUNT SPEARHEADS
export const slasherHost: Spearhead = {
  id: 'sh19',
  name: 'Slasher Host',
  description: 'Frenzied spectral warriors craving the tearing sensation of blades biting into mortal victims',
  units: [
    { name: 'Knight of Shrouds', count: 1, type: 'Hero/General' },
    { name: 'Spirit Hosts', count: 3, type: 'Infantry' },
    { name: 'Grimghast Reapers', count: 5, type: 'Infantry' },
    { name: 'Grimghast Reapers', count: 5, type: 'Infantry' },
    { name: 'Chainrasps', count: 10, type: 'Infantry' },
    { name: 'Chainrasps', count: 10, type: 'Infantry' },
  ],
  battleTraits: [
    { name: 'Wave of Terror', description: 'Charge phase: If unit charged and charge roll was 10+, pick enemy within 1" to have Strike-last this turn' },
    { name: 'Ethereal', description: 'Ignore all modifiers to save rolls (positive and negative)' },
  ],
  regimentAbilities: [
    { id: 'ra46', name: 'Death Stalkers', description: 'Start of first battle round: Pick an enemy unit. Add 1 to Rend vs that unit' },
    { id: 'ra47', name: 'Chorus of Terror', description: 'Subtract 1 from hit rolls for combat attacks targeting friendly units that charged in same turn' },
  ],
  enhancements: [
    { id: 'en46', name: 'Soulfire Ring', description: 'End of any turn: If any models slain by general this turn, Heal (D6) general', type: 'Ability' },
    { id: 'en47', name: 'Cloaked in Shadow', description: 'No more than 1 enemy unit can target general with attacks per phase', type: 'Ability' },
    { id: 'en48', name: 'Beacon of Nagashizzar', description: 'Once per battle hero phase: Return 1 slain model to each friendly unit', type: 'Ability' },
    { id: 'en49', name: "Shadow's Edge", description: "General's Sword of Stolen Hours has Crit (Mortal)", type: 'Weapon Enhancement' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Discorporate', description: 'Knight gives friendly unit within 9" Ward (5+) until next turn', source: 'Unit Ability' },
      { name: 'Beacon of Nagashizzar', description: 'Return 1 slain model to each friendly unit (once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [
      { name: 'Reinforcements - Chainrasps', description: 'Set up this unit in reserve. It can arrive in your movement phase more than 9" from all enemy units', source: 'Unit Ability' },
    ],
    charge: [
      { name: 'Wave of Terror', description: 'Enemy gets Strike-last if charge roll was 10+ (if charge successful)', source: 'Battle Trait' },
    ],
    shooting: [],
    combat: [
      { name: 'Knight of Shrouds', description: '[Save 4+] [Ward (6+)] | Sword of Stolen Hours [Crit (Auto-wound)] | Attacks 5 | Hit 4+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Spirit Hosts', description: '[Save 6+] [Ward (6+)] | Spectral Claws and Daggers [Crit (Auto-wound)] | Attacks 6 | Hit 4+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Grimghast Reapers', description: '[Save 6+] [Ward (6+)] | Slasher Scythe [Crit (Auto-wound)] | Attacks 2 | Hit 4+ | Wound 3+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: 'Chainrasps', description: '[Save 5+] [Ward (6+)] | Malignant Weapon [Crit (Auto-wound)] | Attacks 2 | Hit 4+ | Wound 5+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Ethereal', description: 'Ignore all save modifiers', source: 'Battle Trait' },
      { name: 'Drawn to War', description: 'General has Ward (4+) while within 1" of Spirit Hosts', source: 'Unit Ability' },
      { name: 'Reaped Like Corn', description: 'Grimghast Reapers crit on 5+ vs units with 5+ models', source: 'Unit Ability' },
      { name: 'Chilling Horde', description: 'Chainrasps add 1 to wound if they charged this turn', source: 'Unit Ability' },
      { name: 'Death Stalkers', description: 'Add 1 to Rend vs chosen enemy (if selected)', source: 'Regiment Ability' },
      { name: 'Chorus of Terror', description: 'Enemies get -1 to hit if unit charged (if selected)', source: 'Regiment Ability' },
      { name: 'Cloaked in Shadow', description: 'Max 1 enemy unit can target general per phase (if enhancement selected)', source: 'Enhancement' },
      { name: "Shadow's Edge", description: 'Sword has Crit (Mortal) (if enhancement selected)', source: 'Enhancement' },
    ],
    endOfTurn: [
      { name: 'Soulfire Ring', description: 'Heal (D6) if general slew models this turn (if enhancement selected)', source: 'Enhancement' },
      { name: 'Knight of Shrouds', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Spirit Hosts', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Grimghast Reapers', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Chainrasps', description: '[Control 1]', source: 'Unit Ability' },
    ],
  }
};

export const cursedShacklehorde: Spearhead = {
  id: 'sh20',
  name: 'Cursed Shacklehorde',
  description: 'Spectral abductors falling upon enemies with merciless abandon, eager to drag them screaming into the underworlds',
  units: [
    { name: 'Spirit Torment', count: 1, type: 'Hero/General' },
    { name: 'Chainghasts', count: 2, type: 'Infantry' },
    { name: 'Bladegheist Revenants', count: 5, type: 'Infantry' },
    { name: 'Bladegheist Revenants', count: 5, type: 'Infantry' },
    { name: 'Dreadscythe Harridans', count: 5, type: 'Infantry' },
    { name: 'Dreadscythe Harridans', count: 5, type: 'Infantry' },
    { name: 'Dreadblade Harrows', count: 2, type: 'Cavalry' },
  ],
  battleTraits: [
    { name: 'Spectral Procession', description: 'One Bladegheist and one Harridans unit start in reserve. From round 2: Set up unit from reserve 6" from enemies (once per turn)' },
    { name: 'Ethereal', description: 'Ignore negative modifiers to save rolls' },
  ],
  regimentAbilities: [
    { id: 'ra48', name: 'Discorporate', description: 'Once per turn any hero phase: Roll for friendly unit. On 3+, add 1 to saves for rest of turn' },
    { id: 'ra49', name: 'Mounting Dread', description: 'Once per turn end of any turn: Roll for friendly unit. On 2+, subtract battle round number from enemy control in combat with target' },
  ],
  enhancements: [
    { id: 'en50', name: 'Unholy Visage', description: 'Hero phase: Pick visible enemy within 6". On 3+, it must retreat immediately', type: 'Ability' },
    { id: 'en51', name: 'Tales of Horror', description: 'Once per battle any combat phase: Pick enemy Infantry/Cavalry within 6". If replaced via reinforcements, halve replacement unit size', type: 'Ability' },
    { id: 'en52', name: 'Deathly Possessor', description: 'Any combat phase: Pick enemy Hero within 12" and victim in its combat range. On D3 2+, inflict mortal damage on target OR victim equal to roll', type: 'Ability' },
    { id: 'en53', name: 'Spectral Howl', description: 'Once per battle any hero phase: Pick enemy within 12". For rest of turn, subtract 1 from charge dice (minimum 1)', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Captured Soul Energy', description: 'Spirit Torment picks unit within 12". On 3+, add 1 to wound for rest of turn', source: 'Unit Ability' },
      { name: 'Discorporate', description: 'Add 1 to saves on 3+ (once per turn, if selected)', source: 'Regiment Ability' },
      { name: 'Unholy Visage', description: 'Force enemy within 6" to retreat on 3+ (if enhancement selected)', source: 'Enhancement' },
      { name: 'Spectral Howl', description: 'Reduce enemy charge dice by 1 (once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [
      { name: 'Cackling Arrival', description: 'Set up reserve unit anywhere 6" from enemies (once per turn, from round 2)', source: 'Battle Trait' },
      { name: 'Phantasmal Discorporation', description: 'Dreadblade Harrows can remove and redeploy 6" from enemies (once per battle)', source: 'Unit Ability' },
    ],
    charge: [],
    shooting: [],
    combat: [
      { name: 'Spirit Torment', description: '[Save 5+] [Ward (5+)] | Shacklegheist Chains [Crit (Auto-wound)] | Attacks 5 | Hit 4+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Chainghasts', description: '[Save 6+] [Ward (5+)] | Ghastflails (Ranged) [Crit (Auto-wound)] | Range 12" | Attacks 2 | Hit 4+ | Wound 3+ | Rend 1 | Damage 1\nGhastflails (Melee) [Crit (Auto-wound)] | Attacks 3 | Hit 4+ | Wound 3+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: 'Bladegheist Revenants', description: '[Save 5+] [Ward (5+)] | Tomb Greatblade [Crit (Auto-wound)] | Attacks 2 | Hit 3+ | Wound 3+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: 'Dreadscythe Harridans', description: '[Save 6+] [Ward (5+)] | Scythed Limbs [Crit (Auto-wound)] | Attacks 3 | Hit 4+ | Wound 4+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: 'Dreadblade Harrows', description: '[Save 5+] [Ward (5+)] | Dreadblade [Crit (Auto-wound)] | Attacks 3 | Hit 5+ | Wound 3+ | Rend 1 | Damage 2\nEthereal Steed [Companion] [Crit (Auto-wound)] | Attacks 4 | Hit 4+ | Wound 3+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Ethereal', description: 'Ignore negative save modifiers', source: 'Battle Trait' },
      { name: 'Another Link in the Chain', description: 'Chainghasts add 1 to hit for units within 12" on 3+ (4+ if within 12" of Spirit Torment)', source: 'Unit Ability' },
      { name: 'Thrashing Desperation', description: 'Bladegheist: Enemies cannot charge within ½" unless unmodified charge roll was 5+ (while contesting objective you control)', source: 'Unit Ability' },
      { name: 'Harrowing Shrieks', description: 'Dreadscythe: Enemies in combat cannot be healed or have models returned', source: 'Unit Ability' },
      { name: 'Deathly Possessor', description: 'Inflict mortal damage on enemy Hero or ally (if enhancement selected)', source: 'Enhancement' },
      { name: 'Tales of Horror', description: 'Halve reinforcement size (once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    endOfTurn: [
      { name: 'Mounting Dread', description: 'Reduce enemy control by battle round number on 2+ (once per turn, if selected)', source: 'Regiment Ability' },
      { name: 'Spirit Torment', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Chainghasts', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Bladegheist Revenants', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Dreadscythe Harridans', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Dreadblade Harrows', description: '[Control 1]', source: 'Unit Ability' },
    ],
  }
};

// OSSIARCH BONEREAPERS SPEARHEADS
export const mortisanElite: Spearhead = {
  id: 'sh22',
  name: 'Mortisan Elite',
  description: 'Towering war-goliaths assembled by Ossifector bone-shapers, forming the true elite of the necropolis',
  units: [
    { name: 'Mortisan Ossifector', count: 1, type: 'Hero/General' },
    { name: 'Immortis Guard', count: 3, type: 'Elite Infantry' },
    { name: 'Necropolis Stalkers', count: 3, type: 'Elite Infantry' },
    { name: 'Morghast Archai', count: 2, type: 'Elite Infantry' },
  ],
  battleTraits: [
    { name: 'Heralds of Nagash', description: 'Morghast Archai arrive from round 2 onwards, set up 6" from enemies' },
    { name: 'Relentless Discipline', description: 'Once per phase: Make discipline roll (D6+1 if within 12" of general). On 4+, apply effect (movement, charge, combat, or ward bonuses)' },
  ],
  regimentAbilities: [
    { id: 'ra78', name: 'Peerless Cohesion', description: 'Once per turn: Use Relentless Discipline a second time for a different target' },
    { id: 'ra79', name: 'Immaculate Generalship', description: 'Add 1 to discipline rolls' },
  ],
  enhancements: [
    { id: 'en55', name: 'Shard Storm', description: 'Cast (7+): Roll dice equal to models in visible enemy within 12", 5+ deals 1 mortal damage', type: 'Spell' },
    { id: 'en56', name: 'Mend Constructs', description: 'Cast (6+): Heal (D3) visible friendly unit within 12"', type: 'Spell' },
    { id: 'en57', name: 'Lode of Saturation', description: 'Subtract 1 from Rend of melee weapons targeting general', type: 'Ability' },
    { id: 'en58', name: 'Helm of Tyranny', description: 'Once per battle end of turn: On 3+, subtract 3 from enemy control within 12" of general', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Relentless Discipline', description: 'Make discipline roll for unit, on 4+ apply chosen effect (once per phase)', source: 'Battle Trait' },
      { name: 'Peerless Cohesion', description: 'Use Relentless Discipline twice (once per turn, if selected)', source: 'Regiment Ability' },
      { name: 'Refined Creations', description: 'Ossifector casts (5+) to give unit Crit (2 Hits) until next turn', source: 'Unit Ability' },
      { name: 'Shard Storm', description: 'Cast bone-shard cloud for mortal damage (if enhancement selected)', source: 'Enhancement' },
      { name: 'Mend Constructs', description: 'Cast to heal constructs (if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [
      { name: 'Dread Descent', description: 'Morghast Archai set up 6" from enemies (from round 2)', source: 'Battle Trait' },
    ],
    charge: [
      { name: 'Relentless Discipline (Charge)', description: 'Add 1 to charge rolls (if discipline roll chosen)', source: 'Battle Trait' },
    ],
    shooting: [],
    combat: [
      { name: 'Mortisan Ossifector', description: '[Save 4+] | Osseous Sceptre | Attacks 3 | Hit 3+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Immortis Guard', description: '[Save 3+] | Dread Halberd [Crit (2 Hits)] | Attacks 3 | Hit 3+ | Wound 3+ | Rend 2 | Damage 2', source: 'Unit Ability' },
      { name: 'Necropolis Stalkers', description: '[Save 3+] | Nadirite Blade [Crit (2 Hits)] | Attacks 4 | Hit 3+ | Wound 3+ | Rend 2 | Damage 2', source: 'Unit Ability' },
      { name: 'Morghast Archai', description: '[Save 4+] | Spirit Halberd [Crit (2 Hits)] | Attacks 4 | Hit 3+ | Wound 3+ | Rend 2 | Damage 3', source: 'Unit Ability' },
      { name: 'Relentless Discipline (Combat)', description: 'Add 1 to wound or grant Ward (5+) (if discipline roll chosen)', source: 'Battle Trait' },
      { name: 'Soulbound Protectors', description: 'Immortis Guard grant general Ward (5+) while in combat range', source: 'Unit Ability' },
      { name: 'Switch Aspects', description: 'Stalkers choose Blade-parry (-1 to hit vs them) or Destroyer (no wards vs their damage)', source: 'Unit Ability' },
      { name: 'Heralds of Nagash', description: 'Morghast add 1 to discipline rolls when not within 12" of general', source: 'Unit Ability' },
    ],
    endOfTurn: [
      { name: 'Helm of Tyranny', description: 'Reduce enemy control score (once per battle, if enhancement selected)', source: 'Enhancement' },
      { name: 'Mortisan Ossifector', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Immortis Guard', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Necropolis Stalkers', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Morghast Archai', description: '[Control 2]', source: 'Unit Ability' },
    ],
  }
};

export const kavalosVanguard: Spearhead = {
  id: 'sh23',
  name: 'Kavalos Vanguard',
  description: 'Fast-moving shock troops led by a Liege-Kavalos, accompanied by misshapen Teratic Cohorts as hunting beasts',
  units: [
    { name: 'Liege-Kavalos', count: 1, type: 'Hero/General' },
    { name: 'Kavalos Deathriders', count: 5, type: 'Cavalry' },
    { name: 'Kavalos Deathriders', count: 5, type: 'Cavalry' },
    { name: 'Teratic Cohort', count: 8, type: 'Beast' },
  ],
  battleTraits: [
    { name: 'Calculated Feint', description: 'No mortal damage inflicted on Cavalry by retreat abilities' },
    { name: 'Kavalos Lance', description: 'Once per turn hero phase: Pick unit, it can pass across enemy models as if it had Fly' },
  ],
  regimentAbilities: [
    { id: 'ra80', name: 'Feigned Retreat', description: 'Once per battle: Units can charge even if they retreated this turn' },
    { id: 'ra81', name: 'Reinforced Constructs', description: 'Once per battle combat phase: Unit has Ward (5+) for the turn' },
  ],
  enhancements: [
    { id: 'en114', name: 'Mighty Archaeossian', description: 'Your general has Ward (5+)', type: 'Ability' },
    { id: 'en115', name: 'Murderous Blade', description: "Your general's Commander's Blade has Crit (2 Hits)", type: 'Weapon Enhancement' },
    { id: 'en116', name: 'Imperious Commander', description: 'On 3+, add 2" to Move of visible unit within 12" (your movement phase)', type: 'Ability' },
    { id: 'en117', name: 'Cold Savagery', description: 'On 3+, add 1 to Rend of unit within 12" if general hasn\'t charged and is in combat (any combat phase)', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Kavalos Lance', description: 'Unit can pass across enemies as if it had Fly (once per turn)', source: 'Battle Trait' },
      { name: 'Signal the Advance', description: 'Liege adds 1 to charge rolls for visible unit within 12" on 3+', source: 'Unit Ability' },
      { name: 'Imperious Commander', description: 'Add 2" to Move on 3+ (if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [
      { name: 'Calculated Feint', description: 'Cavalry take no mortal damage from retreating', source: 'Battle Trait' },
      { name: 'Feigned Retreat', description: 'Can charge after retreating (once per battle, if selected)', source: 'Regiment Ability' },
      { name: 'Bone-Deep Savagery', description: 'Teratic Cohort moves 3", must move into combat if possible', source: 'Unit Ability' },
    ],
    charge: [],
    shooting: [],
    combat: [
      { name: 'Liege-Kavalos', description: "[Save 3+] | Commander's Blade | Attacks 5 | Hit 3+ | Wound 3+ | Rend 2 | Damage 2\nKavalos Steed's Hooves and Teeth [Companion] | Attacks 3 | Hit 4+ | Wound 3+ | Rend - | Damage 1", source: 'Unit Ability' },
      { name: 'Kavalos Deathriders', description: '[Save 3+] | Nadirite Blade [Charge (+1 Rend)] | Attacks 3 | Hit 3+ | Wound 3+ | Rend 1 | Damage 1\nKavalos Steed\'s Hooves and Teeth [Companion] | Attacks 2 | Hit 5+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Teratic Cohort', description: '[Save 5+] | Claws and Mandibles | Attacks 3 | Hit 4+ | Wound 3+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: 'Reinforced Constructs', description: 'Ward (5+) for the turn (once per battle, if selected)', source: 'Regiment Ability' },
      { name: 'Wheel About', description: 'Deathriders can move up to Move distance after charging on 3+, can pass through combat ranges', source: 'Unit Ability' },
      { name: 'Cold Savagery', description: 'Add 1 to Rend if general in combat but didn\'t charge (if enhancement selected)', source: 'Enhancement' },
    ],
    endOfTurn: [
      { name: 'Liege-Kavalos', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Kavalos Deathriders', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Teratic Cohort', description: '[Control 1]', source: 'Unit Ability' },
    ],
  }
};

export const titheReaperEchelon: Spearhead = {
  id: 'sh24',
  name: 'Tithe-Reaper Echelon',
  description: 'Specialized formation harvesting bone and soul from recalcitrant subjects, led by a Mortisan Soulreaper',
  units: [
    { name: 'Mortisan Soulreaper', count: 1, type: 'Hero/General' },
    { name: 'Mortek Guard', count: 10, type: 'Infantry' },
    { name: 'Mortek Guard', count: 10, type: 'Infantry' },
    { name: 'Kavalos Deathriders', count: 5, type: 'Cavalry' },
    { name: 'Gothizzar Harvester', count: 1, type: 'Monster' },
  ],
  battleTraits: [
    { name: 'Reserve Contingent', description: 'One Mortek Guard deploys from round 3 within 3" of battlefield edge, 6" from enemies' },
    { name: 'Ossiarch Commands', description: 'Start of battle round: Gain 2 Ossiarch command points. Each command costs 1 point. Same unit cannot use more than one per phase. Unused points lost at end of round' },
  ],
  regimentAbilities: [
    { id: 'ra60', name: 'Impenetrable Ranks', description: 'Once per battle combat phase (Ossiarch Command): Add 1 to ward rolls for a unit' },
    { id: 'ra61', name: 'Re-form Ranks', description: 'Once per battle movement phase (Ossiarch Command): Mortek Guard in combat can retreat without mortal damage' },
  ],
  enhancements: [
    { id: 'en118', name: 'Empower Nadirite Weapons', description: 'Hero phase: Cast (5+) to add 1 Rend to Mortek Guard within 12" until next turn', type: 'Spell' },
    { id: 'en119', name: 'Unstoppable Commander', description: 'Movement phase: On 2+, add 3" to Mortek Guard Move within 12"', type: 'Ability' },
    { id: 'en120', name: 'Murderous Drive', description: 'General\'s Soulreaper Scythe has Crit (2 Hits)', type: 'Weapon Enhancement' },
    { id: 'en121', name: 'Marrowpact', description: 'After general fights, heal damage points equal to damage allocated', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Drain Vitality', description: 'Soulreaper casts (6+) to subtract 1 from hit rolls for visible enemy within 18" until next turn', source: 'Unit Ability' },
      { name: 'Empower Nadirite Weapons', description: 'Cast (5+) to add 1 Rend to Mortek Guard within 12" (if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [
      { name: 'Contingent Arrival', description: 'Reserve Mortek Guard set up within 3" of battlefield edge, 6" from enemies (from round 3)', source: 'Battle Trait' },
      { name: 'Reknit Construct', description: 'Soulreaper heals D3 or returns models to unit within 12" not in combat (Ossiarch Command)', source: 'Unit Ability' },
      { name: 'Unstoppable Commander', description: 'Add 3" to Mortek Guard Move on 2+ (if enhancement selected)', source: 'Enhancement' },
      { name: 'Re-form Ranks', description: 'Mortek Guard in combat retreats without mortal damage (Ossiarch Command, once per battle, if selected)', source: 'Regiment Ability' },
    ],
    charge: [
      { name: 'Deathrider Wedge', description: 'Deathriders pass across Infantry as if Fly, deal D3 mortal on 2+ to passed units (Ossiarch Command)', source: 'Unit Ability' },
    ],
    shooting: [],
    combat: [
      { name: 'Mortisan Soulreaper', description: '[Save 4+] | Soulreaper Scythe [Crit (Mortal)] | Attacks 4 | Hit 3+ | Wound 3+ | Rend 2 | Damage 2', source: 'Unit Ability' },
      { name: 'Mortek Guard', description: '[Save 4+] | Nadirite Blade | Attacks 2 | Hit 3+ | Wound 4+ | Rend - | Damage 1\nNadirite Spear | Attacks 2 | Hit 4+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Kavalos Deathriders', description: '[Save 3+] | Nadirite Blade [Charge (+1 Rend)] | Attacks 3 | Hit 3+ | Wound 3+ | Rend 1 | Damage 1\nKavalos Steed\'s Hooves and Teeth [Companion] | Attacks 2 | Hit 5+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Gothizzar Harvester', description: '[Save 3+] | Soulcleaver Sickles | Attacks 5 | Hit 3+ | Wound 3+ | Rend 2 | Damage 2\nOsseous Hooves [Companion] | Attacks 4 | Hit 4+ | Wound 3+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Nadirite Assault', description: 'Mortek Guard melee weapons get Crit (2 Hits) (Ossiarch Command)', source: 'Unit Ability' },
      { name: 'Impenetrable Ranks', description: 'Add 1 to ward rolls (Ossiarch Command, once per battle, if selected)', source: 'Regiment Ability' },
      { name: 'Marrowpact', description: 'Heal general equal to damage allocated after fighting (if enhancement selected)', source: 'Enhancement' },
      { name: 'Bone Harvest', description: 'Harvester gains bone-tithe points when enemies slain in combat (max 6)', source: 'Unit Ability' },
    ],
    endOfTurn: [
      { name: 'Repair Construct', description: 'Harvester rolls dice for each bone-tithe point, 4+ returns model to Mortek Guard within 6", resets points to 0', source: 'Unit Ability' },
      { name: 'Mortisan Soulreaper', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Mortek Guard', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Kavalos Deathriders', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Gothizzar Harvester', description: '[Control 5]', source: 'Unit Ability' },
    ],
  }
};

// FLESH-EATER COURTS SPEARHEADS
export const charnelWatch: Spearhead = {
  id: 'sh25',
  name: 'Charnel Watch',
  description: 'Rabid border guards lurking in dark forests, eager to drag trespassers screaming into the underworlds',
  units: [
    { name: 'Abhorrant Gorewarden', count: 1, type: 'Hero/General' },
    { name: 'Royal Beastflayers', count: 10, type: 'Infantry' },
    { name: 'Crypt Horrors', count: 3, type: 'Infantry' },
    { name: 'Crypt Flayers', count: 3, type: 'Infantry' },
  ],
  battleTraits: [
    { name: 'Delusions and Madness', description: 'Start of each battle round: Pick Delusion (first round) or roll. On 1-3 pick different, 4+ pick same. Gain chosen Delusion for rest of round' },
    { name: 'Delusion of the Knightly Host', description: 'If unmodified charge roll for Hero/Knights is 8+, add 1 to hit for rest of turn' },
    { name: 'Delusion of the Great Feast', description: 'Once per turn end of any turn: Heal (1) all units. Serfs return D3 models instead' },
  ],
  regimentAbilities: [
    { id: 'ra65', name: 'Delusion of the Sentinel', description: 'While believing this: Add 1 to ward rolls while contesting objective' },
    { id: 'ra66', name: 'Delusion of the Hunter', description: 'While believing this: Add 1 to wound while not contesting objective' },
  ],
  enhancements: [
    { id: 'en69', name: 'Almost Lucid', description: 'Once per battle reaction when declaring Delusions: Re-roll the delusion roll', type: 'Ability' },
    { id: 'en70', name: 'A Worthy Challenge', description: 'Once per battle combat phase: Challenge enemy unit with 3 or fewer models. If accepted, must target each other. If refused, target has Strike-last', type: 'Ability' },
    { id: 'en71', name: 'Companion of the Hunt', description: 'End of any turn: If general not in combat, move 3" (cannot move into combat)', type: 'Ability' },
    { id: 'en72', name: 'Choirmaster', description: 'Once per battle shooting phase: Add 1 to Damage of ranged weapons vs visible enemy within 6"', type: 'Ability' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Sound the Pursuit!', description: 'Gorewarden casts (6+): Unit within 12" adds 1 charge dice (max 3), remove 1 of choice', source: 'Unit Ability' },
      { name: 'Delusion of the Great Feast', description: 'Heal (1) all units, Serfs return D3 models (once per turn, while believing)', source: 'Battle Trait' },
    ],
    movement: [
      { name: 'Lie of the Land', description: 'Beastflayers not in combat within 6" of edge: Remove and set up within 6" of edge, 6" from enemies', source: 'Unit Ability' },
    ],
    charge: [
      { name: 'Delusion of the Knightly Host', description: 'Add 1 to hit if charge was 8+ (while believing)', source: 'Battle Trait' },
    ],
    shooting: [
      { name: 'Death Scream', description: 'Crypt Flayers | [Shoot in Combat] | Range 10" | Attacks 4 | Hit 4+ | Wound 3+ | Rend 2 | Damage 1', source: 'Unit Ability' },
      { name: 'Unholy Chorus', description: 'Flayers: Subtract damage points allocated to target from control score rest of turn', source: 'Unit Ability' },
      { name: 'Choirmaster', description: 'Add 1 to Damage vs enemy within 6" (once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    combat: [
      { name: 'Abhorrant Gorewarden', description: '[Save 5+] [Ward (6+)] | Gory Talons and Fangs | Attacks 6 | Hit 3+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Royal Beastflayers', description: '[Save 6+] [Ward (6+)] | Beastflayer Weapons | Attacks 3 | Hit 4+ | Wound 4+ | Rend - | Damage 1', source: 'Unit Ability' },
      { name: 'Crypt Horrors', description: '[Save 5+] [Ward (6+)] | Club and Septic Talons | Attacks 4 | Hit 4+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Crypt Flayers', description: '[Save 5+] [Ward (6+)] | Piercing Talons | Attacks 4 | Hit 4+ | Wound 3+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: 'Holy Blades of Bone', description: 'Horrors: Roll dice for each model in enemy that charged. 5+ deals 1 mortal', source: 'Unit Ability' },
      { name: 'Delusion of the Sentinel', description: 'Add 1 to ward while contesting objective (if selected, while believing)', source: 'Regiment Ability' },
      { name: 'Delusion of the Hunter', description: 'Add 1 to wound while not contesting objective (if selected, while believing)', source: 'Regiment Ability' },
      { name: 'A Worthy Challenge', description: 'Challenge enemy (once per battle, if enhancement selected)', source: 'Enhancement' },
    ],
    endOfTurn: [
      { name: 'Companion of the Hunt', description: 'General moves 3" if not in combat (if enhancement selected)', source: 'Enhancement' },
      { name: 'Abhorrant Gorewarden', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Royal Beastflayers', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Crypt Horrors', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Crypt Flayers', description: '[Control 1]', source: 'Unit Ability' },
    ],
  }
};

export const carrionRetainers: Spearhead = {
  id: 'sh26',
  name: 'Carrion Retainers',
  description: 'Royal entourage of deluded knights swarming in rabid frenzy, devoted to their vampiric lieges',
  units: [
    { name: 'Abhorrant Archregent', count: 1, type: 'Hero/General' },
    { name: 'Cryptguard', count: 10, type: 'Infantry' },
    { name: 'Morbheg Knights', count: 3, type: 'Cavalry' },
    { name: 'Varghulf Courtier', count: 1, type: 'Hero' },
  ],
  battleTraits: [
    { name: 'Noble Deeds', description: 'Each time Hero uses Fight ability, gain noble deeds points equal to damage points allocated. Max 6 points per Hero' },
    { name: 'Feeding Frenzy', description: 'Add 1 to Attacks of melee weapons while wholly within 12" of any Heroes with 6 noble deeds points' },
    { name: 'Summon Loyal Subjects', description: 'Movement phase: Hero spends noble deeds points: 1 point returns 1 Cryptguard model within 9", 2 points return 1 Morbheg Knights model within 9"' },
  ],
  regimentAbilities: [
    { id: 'ra67', name: 'Crusading Army', description: 'Add 1 to run and charge rolls' },
    { id: 'ra68', name: 'Defenders of the Realm', description: 'Add 1 to saves while contesting objective you control' },
  ],
  enhancements: [
    { id: 'en98', name: 'Ulguan Cloak', description: 'General not visible to enemies more than 12" away', type: 'Ability' },
    { id: 'en99', name: 'Blood-River Chalice', description: 'Once per battle hero phase: Heal (2D3) general', type: 'Ability' },
    { id: 'en100', name: 'Rousing Oration', description: 'Hero phase: Roll for each unit within 12" (not general). 5+ gives 1 noble deeds point to general', type: 'Ability' },
    { id: 'en101', name: 'Crimson Victuals', description: 'Hero phase: Cast (6+) to inflict D3 mortal on visible enemy within 18". If Cryptguard within 6" of target, return 1 model per damage point', type: 'Spell' },
  ],
  gamePhases: {
    deployment: [],
    hero: [
      { name: 'Deranged Transformation', description: 'Archregent casts (6+): Visible unit within 18" adds 2" Move and adds 1 to wound until next turn', source: 'Unit Ability' },
      { name: 'Feeding Frenzy', description: 'Add 1 to Attacks while within 12" of Heroes with 6 noble deeds points', source: 'Battle Trait' },
      { name: 'Blood-River Chalice', description: 'Heal (2D3) general (once per battle, if enhancement selected)', source: 'Enhancement' },
      { name: 'Rousing Oration', description: 'Roll for units within 12". 5+ gives point to general (if enhancement selected)', source: 'Enhancement' },
      { name: 'Crimson Victuals', description: 'Cast to inflict D3 mortal and potentially return Cryptguard models (if enhancement selected)', source: 'Enhancement' },
    ],
    movement: [
      { name: 'Summon Loyal Subjects', description: 'Spend noble deeds points to return models', source: 'Battle Trait' },
      { name: 'Crusading Army', description: 'Add 1 to run and charge (if selected)', source: 'Regiment Ability' },
    ],
    charge: [
      { name: "Predator's Pounce", description: 'Morbheg Knights can charge after retreating. No mortal damage when retreating', source: 'Unit Ability' },
    ],
    shooting: [],
    combat: [
      { name: 'Abhorrant Archregent', description: '[Save 5+] [Ward (6+)] | Gory Talons and Fangs | Attacks 5 | Hit 3+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Cryptguard', description: '[Save 6+] [Ward (5+)] | Cursed Weapon | Attacks 3 | Hit 4+ | Wound 4+ | Rend 1 | Damage 1', source: 'Unit Ability' },
      { name: 'Morbheg Knights', description: '[Save 4+] [Ward (6+)] | Grisly Lance [Charge (+1 Damage)] | Attacks 2 | Hit 3+ | Wound 4+ | Rend 1 | Damage 1\nNightshrieker Claws [Companion] | Attacks 3 | Hit 4+ | Wound 3+ | Rend 1 | Damage 2', source: 'Unit Ability' },
      { name: 'Varghulf Courtier', description: '[Save 5+] [Ward (6+)] | Immense Claws | Attacks 7 | Hit 4+ | Wound 3+ | Rend 1 | Damage 2\nDagger-like Fangs | Attacks 1 | Hit 3+ | Wound 2+ | Rend 2 | Damage 3', source: 'Unit Ability' },
      { name: 'Noble Deeds', description: 'Hero gains points equal to damage allocated when using Fight ability', source: 'Battle Trait' },
      { name: 'Royal Bodyguard', description: 'Cryptguard: Add 1 to ward rolls for Heroes wholly within combat range', source: 'Unit Ability' },
      { name: 'Defenders of the Realm', description: 'Add 1 to saves while contesting objective you control (if selected)', source: 'Regiment Ability' },
      { name: 'Ulguan Cloak', description: 'General not visible to enemies beyond 12" (if enhancement selected)', source: 'Enhancement' },
    ],
    endOfTurn: [
      { name: 'Victory Feast', description: 'Varghulf: If slew models this turn, Heal (D6) and can retreat without mortal damage', source: 'Unit Ability' },
      { name: 'Abhorrant Archregent', description: '[Control 2]', source: 'Unit Ability' },
      { name: 'Cryptguard', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Morbheg Knights', description: '[Control 1]', source: 'Unit Ability' },
      { name: 'Varghulf Courtier', description: '[Control 2]', source: 'Unit Ability' },
    ],
  }
};
