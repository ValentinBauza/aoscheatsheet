# Age of Sigmar Spearhead Cheatsheet

A comprehensive web application for Age of Sigmar Spearhead gameplay, featuring all official spearhead armies with their battle traits, regiment abilities, enhancements, and phase-by-phase ability breakdowns.

## Features

- **All Factions**: Complete coverage of Order, Death, and Chaos factions
- **Interactive Selection**: Choose your spearhead, select regiment abilities and enhancements
- **Phase Guide**: View all abilities organized by game phase for easy reference during play
- **Mobile-Friendly**: Responsive design works on all devices

## Included Factions

### Order
- Stormcast Eternals (2 spearheads)
- Lumineth Realm-lords (2 spearheads)
- Idoneth Deepkin (2 spearheads)
- Daughters of Khaine (2 spearheads)
- Cities of Sigmar (3 spearheads)
- Sylvaneth (2 spearheads)
- Seraphon (2 spearheads)
- Kharadron Overlords (2 spearheads)
- Fyreslayers (1 spearhead)

### Death
- Soulblight Gravelords (2 spearheads)
- Nighthaunt (2 spearheads)
- Ossiarch Bonereapers (3 spearheads)
- Flesh-eater Courts (2 spearheads)

### Chaos
- Skaven (2 spearheads)
- Helsmiths of Hashut (1 spearhead)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

1. Create a new repository on GitHub named `aoscheatsheet`

2. Push your code to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/aoscheatsheet.git
git branch -M main
git push -u origin main
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

4. Enable GitHub Pages in your repository:
   - Go to Settings → Pages
   - Source should be set to `gh-pages` branch
   - Your site will be available at: `https://YOUR_USERNAME.github.io/aoscheatsheet/`

## Technologies

- React 19
- TypeScript 6
- Vite 8
- React Router 7

## License

This is a fan-made tool for Age of Sigmar. All Warhammer Age of Sigmar content is property of Games Workshop.
