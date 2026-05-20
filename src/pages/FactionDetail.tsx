import { useParams, Link } from 'react-router-dom';
import { factions } from '../data/factions';
import './FactionDetail.css';

export default function FactionDetail() {
  const { factionId } = useParams<{ factionId: string }>();
  const faction = factions.find(f => f.id === factionId);

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

  const isWIP = (id: string) => !updatedFactions.includes(id);

  if (!faction) {
    return (
      <div className="faction-detail-container">
        <div className="error-message">
          <h1>Faction not found</h1>
          <Link to="/" className="back-button">Return to Factions</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="faction-detail-container">
      <Link to="/" className="back-link">
        ← Back to Factions
      </Link>

      <header className="faction-header">
        <h1>
          {faction.name}
          {isWIP(faction.id) && <span className="wip-badge">WIP</span>}
        </h1>
        <p className="faction-description">{faction.description}</p>
      </header>

      <div className="spearheads-section">
        <h2>Available Spearheads</h2>
        <div className="spearheads-grid">
          {faction.spearheads.map((spearhead) => (
            <div key={spearhead.id} className="spearhead-card">
              <div className="spearhead-icon">⚔</div>
              <h3>{spearhead.name}</h3>
              <p>{spearhead.description}</p>
              <Link
                to={`/faction/${factionId}/spearhead/${spearhead.id}`}
                className="select-button"
              >
                Select Spearhead
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
