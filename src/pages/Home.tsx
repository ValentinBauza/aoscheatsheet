import { Link } from 'react-router-dom';
import { factions } from '../data/factions';
import './Home.css';

export default function Home() {
  // Factions with spearheads based on official PDFs
  const updatedFactions = [
    'stormcast-eternals',
    'kharadron-overlords',
    'lumineth-realmlords',
    'idoneth-deepkin',
    'sylvaneth',
    'seraphon',
    'fyreslayers',
    'soulblight-gravelords',
    'ossiarch-bonereapers',
    'nighthaunt',
    'cities-of-sigmar',
    'daughters-of-khaine',
    'flesh-eater-courts',
    'skaven',
    'helsmiths-of-hashut'
  ];

  const isWIP = (factionId: string) => !updatedFactions.includes(factionId);

  // Group factions by grand alliance
  const orderFactions = factions.filter(f =>
    ['stormcast-eternals', 'lumineth-realmlords', 'idoneth-deepkin', 'daughters-of-khaine',
     'sylvaneth', 'seraphon', 'kharadron-overlords', 'fyreslayers', 'cities-of-sigmar'].includes(f.id)
  );

  const deathFactions = factions.filter(f =>
    ['soulblight-gravelords', 'nighthaunt', 'ossiarch-bonereapers', 'flesh-eater-courts'].includes(f.id)
  );

  const chaosFactions = factions.filter(f =>
    ['skaven', 'helsmiths-of-hashut'].includes(f.id)
  );

  const renderFactionCard = (faction: typeof factions[0]) => (
    <Link
      to={`/faction/${faction.id}`}
      key={faction.id}
      className="faction-card"
    >
      <div className="faction-card-inner">
        <h2>
          {faction.name}
          {isWIP(faction.id) && <span className="wip-badge">WIP</span>}
        </h2>
        <p>{faction.description}</p>
        <div className="faction-card-footer">
          <span className="spearhead-count">
            {faction.spearheads.length} Spearhead{faction.spearheads.length !== 1 ? 's' : ''}
          </span>
          <span className="arrow">→</span>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Age of Sigmar</h1>
        <p className="subtitle">Choose Your Faction</p>
      </header>

      {orderFactions.length > 0 && (
        <section className="alliance-section alliance-order">
          <h2 className="alliance-title">Order Factions</h2>
          <div className="factions-grid">
            {orderFactions.map(renderFactionCard)}
          </div>
        </section>
      )}

      {deathFactions.length > 0 && (
        <section className="alliance-section alliance-death">
          <h2 className="alliance-title">Death Factions</h2>
          <div className="factions-grid">
            {deathFactions.map(renderFactionCard)}
          </div>
        </section>
      )}

      {chaosFactions.length > 0 && (
        <section className="alliance-section alliance-chaos">
          <h2 className="alliance-title">Chaos Factions</h2>
          <div className="factions-grid">
            {chaosFactions.map(renderFactionCard)}
          </div>
        </section>
      )}
    </div>
  );
}
