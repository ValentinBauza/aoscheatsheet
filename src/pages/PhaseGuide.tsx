import { useState } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { factions } from '../data/factions';
import type { PhaseAbility, GamePhases } from '../data/factions';
import './PhaseGuide.css';

interface PhaseConfig {
  key: keyof GamePhases;
  title: string;
  color: string;
  borderColor: string;
  glowColor: string;
}

const phaseConfigs: PhaseConfig[] = [
  {
    key: 'deployment',
    title: 'Deployment Phase',
    color: '#1a1a1a',
    borderColor: '#666666',
    glowColor: 'rgba(102, 102, 102, 0.4)',
  },
  {
    key: 'hero',
    title: 'Hero Phase',
    color: '#2a2200',
    borderColor: '#ffd700',
    glowColor: 'rgba(255, 215, 0, 0.4)',
  },
  {
    key: 'movement',
    title: 'Movement Phase',
    color: '#001a1a',
    borderColor: '#00bfa5',
    glowColor: 'rgba(0, 191, 165, 0.4)',
  },
  {
    key: 'charge',
    title: 'Charge Phase',
    color: '#2a1500',
    borderColor: '#ff8c00',
    glowColor: 'rgba(255, 140, 0, 0.4)',
  },
  {
    key: 'shooting',
    title: 'Shooting Phase',
    color: '#001a2a',
    borderColor: '#1e90ff',
    glowColor: 'rgba(30, 144, 255, 0.4)',
  },
  {
    key: 'combat',
    title: 'Combat Phase',
    color: '#2a0000',
    borderColor: '#ff4444',
    glowColor: 'rgba(255, 68, 68, 0.4)',
  },
  {
    key: 'endOfTurn',
    title: 'End of Turn',
    color: '#1a001a',
    borderColor: '#9370db',
    glowColor: 'rgba(147, 112, 219, 0.4)',
  },
];

// Parse control score from description
const parseControlScore = (description: string): number | null => {
  const controlPattern = /^\[Control\s+(\d+)\]$/i;
  const match = description.match(controlPattern);
  return match ? parseInt(match[1]) : null;
};

// Parse weapon stats from description
const parseWeaponStats = (description: string) => {
  // Check for save stat at the beginning
  const savePattern = /^\[Save\s+(\S+)\]\s*\|\s*/i;
  const saveMatch = description.match(savePattern);
  const save = saveMatch ? saveMatch[1] : null;

  // Remove save from description if present
  let descWithoutSave = save ? description.replace(savePattern, '') : description;

  // Check for ward save
  const wardPattern = /^\[Ward\s+\((\S+)\)\]\s*\|\s*/i;
  const wardMatch = descWithoutSave.match(wardPattern);
  const ward = wardMatch ? wardMatch[1] : null;

  // Remove ward from description if present
  descWithoutSave = ward ? descWithoutSave.replace(wardPattern, '') : descWithoutSave;

  // Check if description contains multiple weapons (separated by newlines)
  const weaponLines = descWithoutSave.split('\n').filter(line => line.trim());

  if (weaponLines.length === 0) return null;

  // Pattern for ranged weapons (includes weapon name and Range)
  const rangedPattern = /^(.+?)\s*\|\s*Range\s+(\S+)\s*\|\s*Attacks\s+(\S+)\s*\|\s*Hit\s+(\S+)\s*\|\s*Wound\s+(\S+)\s*\|\s*Rend\s+(\S+)\s*\|\s*Damage\s+(\S+)/i;
  // Pattern for melee weapons (weapon name, no Range)
  const meleePattern = /^(.+?)\s*\|\s*Attacks\s+(\S+)\s*\|\s*Hit\s+(\S+)\s*\|\s*Wound\s+(\S+)\s*\|\s*Rend\s+(\S+)\s*\|\s*Damage\s+(\S+)/i;

  const weapons = weaponLines.map(line => {
    let match = line.match(rangedPattern);
    if (match) {
      const weaponNameParts = match[1].trim().split('[');
      return {
        weaponName: weaponNameParts[0].trim(),
        ability: weaponNameParts[1] ? weaponNameParts[1].replace(']', '').trim() : null,
        range: match[2],
        attacks: match[3],
        hit: match[4],
        wound: match[5],
        rend: match[6],
        damage: match[7],
      };
    }

    match = line.match(meleePattern);
    if (match) {
      const weaponNameParts = match[1].trim().split('[');
      return {
        weaponName: weaponNameParts[0].trim(),
        ability: weaponNameParts[1] ? weaponNameParts[1].replace(']', '').trim() : null,
        range: null,
        attacks: match[2],
        hit: match[3],
        wound: match[4],
        rend: match[5],
        damage: match[6],
      };
    }

    return null;
  }).filter(w => w !== null);

  if (weapons.length === 0) return null;

  return {
    save,
    ward,
    weapons: weapons,
  };
};

export default function PhaseGuide() {
  const { factionId, spearheadId } = useParams<{ factionId: string; spearheadId: string }>();
  const [searchParams] = useSearchParams();
  const faction = factions.find(f => f.id === factionId);
  const spearhead = faction?.spearheads.find(s => s.id === spearheadId);

  const [expandedPhases, setExpandedPhases] = useState<Set<string>>(new Set());
  const [usedAbilities, setUsedAbilities] = useState<Set<string>>(new Set());

  // Check if an ability is a reinforcement ability
  const isReinforcement = (abilityName: string): boolean => {
    return abilityName.toLowerCase().startsWith('reinforcements');
  };

  // Check if an ability is once per battle
  const isOncePerBattle = (description: string): boolean => {
    return description.toLowerCase().includes('once per battle');
  };

  // Toggle ability used status
  const toggleAbilityUsed = (abilityName: string) => {
    const newUsed = new Set(usedAbilities);
    if (newUsed.has(abilityName)) {
      newUsed.delete(abilityName);
    } else {
      newUsed.add(abilityName);
    }
    setUsedAbilities(newUsed);
  };

  if (!faction || !spearhead) {
    return (
      <div className="phase-guide-container">
        <div className="error-message">
          <h1>Spearhead not found</h1>
          <Link to="/" className="back-button">Return to Factions</Link>
        </div>
      </div>
    );
  }

  // Get selected abilities from URL params
  const selectedRegimentId = searchParams.get('regiment');
  const selectedEnhancementId = searchParams.get('enhancement');

  // Find the selected ability and enhancement names
  const selectedRegimentAbility = spearhead.regimentAbilities.find(a => a.id === selectedRegimentId);
  const selectedEnhancement = spearhead.enhancements.find(e => e.id === selectedEnhancementId);

  // Filter abilities based on selection
  const filterAbilities = (abilities: PhaseAbility[]): PhaseAbility[] => {
    return abilities.filter(ability => {
      // Always show Battle Traits and Unit Abilities
      if (ability.source === 'Battle Trait' || ability.source === 'Unit Ability' || ability.source === 'Hero Ability') {
        return true;
      }

      // Only show selected Regiment Ability
      if (ability.source === 'Regiment Ability') {
        return ability.name === selectedRegimentAbility?.name;
      }

      // Only show selected Enhancement
      if (ability.source === 'Enhancement') {
        return ability.name === selectedEnhancement?.name;
      }

      return true;
    });
  };

  const phases = spearhead.gamePhases;

  const togglePhase = (phaseKey: string) => {
    const newExpanded = new Set(expandedPhases);
    if (newExpanded.has(phaseKey)) {
      newExpanded.delete(phaseKey);
    } else {
      newExpanded.add(phaseKey);
    }
    setExpandedPhases(newExpanded);
  };

  return (
    <div className="phase-guide-container">
      <Link to={`/faction/${factionId}/spearhead/${spearheadId}`} className="back-link">
        ← Back to {spearhead.name}
      </Link>

      <header className="phase-guide-header">
        <h1>Battle Phases Guide</h1>
        <p className="phase-guide-subtitle">{spearhead.name}</p>
        <p className="phase-guide-description">
          Reference guide for all abilities organized by game phase
        </p>
      </header>

      <div className="phases-container">
        {phaseConfigs.map((config) => {
          const allPhaseAbilities = phases[config.key];
          const phaseAbilities = filterAbilities(allPhaseAbilities);
          const isExpanded = expandedPhases.has(config.key);
          const hasAbilities = phaseAbilities.length > 0;

          if (!hasAbilities) return null;

          return (
            <div
              key={config.key}
              className="phase-section"
              style={{
                '--phase-color': config.color,
                '--phase-border': config.borderColor,
                '--phase-glow': config.glowColor,
              } as React.CSSProperties}
            >
              <button
                className={`phase-header ${isExpanded ? 'expanded' : ''}`}
                onClick={() => togglePhase(config.key)}
              >
                <div className="phase-header-content">
                  <h2>{config.title}</h2>
                  <span className="ability-count">
                    {phaseAbilities.length} {phaseAbilities.length === 1 ? 'ability' : 'abilities'}
                  </span>
                </div>
                <span className="expand-icon">{isExpanded ? '−' : '+'}</span>
              </button>

              {isExpanded && (
                <div className="phase-content">
                  <div className="abilities-list">
                    {phaseAbilities.map((ability, index) => {
                      const controlScore = parseControlScore(ability.description);
                      const weaponStats = controlScore === null ? parseWeaponStats(ability.description) : null;
                      const isReinforcementAbility = isReinforcement(ability.name);
                      const isOncePerBattleAbility = isOncePerBattle(ability.description);
                      const showCheckbox = isReinforcementAbility || isOncePerBattleAbility;
                      const isUsed = usedAbilities.has(ability.name);

                      return (
                        <div key={index} className={`ability-item ${isReinforcementAbility ? 'reinforcement-ability' : ''} ${isOncePerBattleAbility ? 'once-per-battle-ability' : ''}`}>
                          <div className="ability-item-header">
                            <h3>{ability.name}</h3>
                            <div className="ability-header-right">
                              {controlScore !== null && (
                                <div className="unit-control-container">
                                  <span className="control-label">Control</span>
                                  <span className="control-value">{controlScore}</span>
                                </div>
                              )}
                              {weaponStats?.save && (
                                <div className="unit-saves-container">
                                  <div className="unit-save">
                                    <span className="save-label">Save</span>
                                    <span className="save-value">{weaponStats.save}</span>
                                  </div>
                                  {weaponStats?.ward && (
                                    <div className="unit-ward">
                                      <span className="ward-label">Ward</span>
                                      <span className="ward-value">{weaponStats.ward}</span>
                                    </div>
                                  )}
                                </div>
                              )}
                              {controlScore === null && (
                                <div className="ability-source-container">
                                  <span className="ability-source">{ability.source}</span>
                                  {showCheckbox && (
                                    <label className="ability-checkbox">
                                      <input
                                        type="checkbox"
                                        checked={isUsed}
                                        onChange={() => toggleAbilityUsed(ability.name)}
                                      />
                                      <span className="checkbox-label">Used</span>
                                    </label>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                          {weaponStats ? (
                            <table className="weapon-stats-table">
                              <thead>
                                <tr>
                                  <th>Weapon</th>
                                  {weaponStats.weapons[0]?.range && <th>Range</th>}
                                  <th>Attacks</th>
                                  <th>Hit</th>
                                  <th>Wound</th>
                                  <th>Rend</th>
                                  <th>Damage</th>
                                </tr>
                              </thead>
                              <tbody>
                                {weaponStats.weapons.map((weapon, idx) => (
                                  <tr key={idx}>
                                    <td>
                                      <div className="weapon-name-cell">
                                        <div>{weapon.weaponName}</div>
                                        {weapon.ability && <div className="weapon-ability">{weapon.ability}</div>}
                                      </div>
                                    </td>
                                    {weapon.range && <td>{weapon.range}</td>}
                                    {!weapon.range && weaponStats.weapons[0]?.range && <td>-</td>}
                                    <td>{weapon.attacks}</td>
                                    <td>{weapon.hit}</td>
                                    <td>{weapon.wound}</td>
                                    <td>{weapon.rend}</td>
                                    <td>{weapon.damage}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          ) : controlScore === null ? (
                            <p>{ability.description}</p>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
