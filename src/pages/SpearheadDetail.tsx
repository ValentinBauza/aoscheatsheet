import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { factions } from '../data/factions';
import './SpearheadDetail.css';

export default function SpearheadDetail() {
  const { factionId, spearheadId } = useParams<{ factionId: string; spearheadId: string }>();
  const faction = factions.find(f => f.id === factionId);
  const spearhead = faction?.spearheads.find(s => s.id === spearheadId);

  const [selectedRegimentAbility, setSelectedRegimentAbility] = useState<string | null>(null);
  const [selectedEnhancement, setSelectedEnhancement] = useState<string | null>(null);

  if (!faction || !spearhead) {
    return (
      <div className="spearhead-detail-container">
        <div className="error-message">
          <h1>Spearhead not found</h1>
          <Link to="/" className="back-button">Return to Factions</Link>
        </div>
      </div>
    );
  }

  const handleRegimentAbilityChange = (abilityId: string) => {
    setSelectedRegimentAbility(abilityId === selectedRegimentAbility ? null : abilityId);
  };

  const handleEnhancementChange = (enhancementId: string) => {
    setSelectedEnhancement(enhancementId === selectedEnhancement ? null : enhancementId);
  };

  const canProceed = selectedRegimentAbility !== null && selectedEnhancement !== null;

  return (
    <div className="spearhead-detail-container">
      <Link to={`/faction/${factionId}`} className="back-link">
        ← Back to {faction.name}
      </Link>

      <header className="spearhead-header">
        <h1>{spearhead.name}</h1>
        <p className="spearhead-description">{spearhead.description}</p>
      </header>

      <div className="spearhead-content">
        {/* Unit List */}
        <section className="content-section">
          <h2>Unit Roster</h2>
          <div className="units-list">
            {spearhead.units.map((unit, index) => (
              <div key={index} className="unit-card">
                <div className="unit-info">
                  <div className="unit-header">
                    <span className="unit-name">{unit.name}</span>
                    <span className="unit-type">{unit.type}</span>
                  </div>
                  <div className="unit-count">{unit.count} {unit.count === 1 ? 'model' : 'models'}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Battle Traits */}
        <section className="content-section">
          <h2>Battle Traits</h2>
          <div className="traits-list">
            {spearhead.battleTraits.map((trait, index) => (
              <div key={index} className="trait-card">
                <h3>{trait.name}</h3>
                <p>{trait.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Regiment Abilities */}
        <section className="content-section">
          <h2>Regiment Abilities</h2>
          <p className="section-hint">Select one ability for your spearhead</p>
          <div className="abilities-list">
            {spearhead.regimentAbilities.map((ability) => (
              <div
                key={ability.id}
                className={`ability-card ${selectedRegimentAbility === ability.id ? 'selected' : ''}`}
              >
                <label className="ability-label">
                  <input
                    type="checkbox"
                    checked={selectedRegimentAbility === ability.id}
                    onChange={() => handleRegimentAbilityChange(ability.id)}
                    className="ability-checkbox"
                  />
                  <div className="ability-content">
                    <h3>{ability.name}</h3>
                    <p>{ability.description}</p>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </section>

        {/* Enhancements */}
        <section className="content-section">
          <h2>Enhancements</h2>
          <p className="section-hint">Select one enhancement for your commander</p>
          <div className="enhancements-list">
            {spearhead.enhancements.map((enhancement) => (
              <div
                key={enhancement.id}
                className={`enhancement-card ${selectedEnhancement === enhancement.id ? 'selected' : ''}`}
              >
                <label className="enhancement-label">
                  <input
                    type="checkbox"
                    checked={selectedEnhancement === enhancement.id}
                    onChange={() => handleEnhancementChange(enhancement.id)}
                    className="enhancement-checkbox"
                  />
                  <div className="enhancement-content">
                    <div className="enhancement-header">
                      <h3>{enhancement.name}</h3>
                      <span className="enhancement-type">{enhancement.type}</span>
                    </div>
                    <p>{enhancement.description}</p>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </section>

        {/* Selection Summary */}
        {(selectedRegimentAbility || selectedEnhancement) && (
          <section className="content-section selection-summary">
            <h2>Your Selections</h2>
            <div className="summary-content">
              {selectedRegimentAbility && (
                <div className="summary-item">
                  <span className="summary-label">Regiment Ability:</span>
                  <span className="summary-value">
                    {spearhead.regimentAbilities.find(a => a.id === selectedRegimentAbility)?.name}
                  </span>
                </div>
              )}
              {selectedEnhancement && (
                <div className="summary-item">
                  <span className="summary-label">Enhancement:</span>
                  <span className="summary-value">
                    {spearhead.enhancements.find(e => e.id === selectedEnhancement)?.name}
                  </span>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Next Button */}
        <div className="next-button-container">
          {canProceed ? (
            <Link
              to={`/faction/${factionId}/spearhead/${spearheadId}/phases?regiment=${selectedRegimentAbility}&enhancement=${selectedEnhancement}`}
              className="next-button"
            >
              View Battle Phases Guide →
            </Link>
          ) : (
            <button
              className="next-button disabled"
              disabled
              title="Please select a regiment ability and an enhancement"
            >
              View Battle Phases Guide →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
