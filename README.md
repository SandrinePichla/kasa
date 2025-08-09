# Kasa - Application de location immobilière

## 📋 Description du projet

Kasa est une application web de location d'appartements entre particuliers, développée en React. Ce projet fait partie de la formation OpenClassrooms et présente une interface moderne et responsive pour parcourir et consulter des annonces de logements.

## 🚀 Technologies utilisées

- **React** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Outil de build rapide pour le développement
- **React Router** - Gestion de la navigation entre les pages
- **JSX** - Extension de JavaScript pour React
- **SCSS/Sass** - Préprocesseur CSS pour une stylisation avancée
- **JSON** - Simulation de données backend

## 📁 Architecture du projet

```
src/
├── components/         # Composants réutilisables
│   ├── AppRouter.jsx   # Configuration des routes
│   ├── Banner.jsx      # Bannière d'accueil
│   ├── Card.jsx        # Carte de logement
│   ├── Collapse.jsx    # Composant accordéon
│   ├── Footer.jsx      # Pied de page
│   ├── Header.jsx      # En-tête et navigation
│   ├── Rating.jsx      # Système de notation par étoiles
│   └── Slideshow.jsx   # Carrousel d'images
├── pages/              # Pages de l'application
│   ├── About.jsx       # Page À propos
│   ├── Home.jsx        # Page d'accueil
│   ├── Logement.jsx    # Page de détail d'un logement
│   └── NotFound.jsx    # Page d'erreur 404
├── data/               # Données simulées
│   └── logements.json  # Base de données des logements
├── styles/             # Feuilles de style SCSS
│   ├── About.scss      # Styles page À propos
│   ├── Home.scss       # Styles page d'accueil
│   ├── Logement.scss   # Styles page logement
│   ├── NotFound.scss   # Styles page 404
│   ├── Banner.scss     # Styles bannière
│   ├── Card.scss       # Styles carte logement
│   ├── Collapse.scss   # Styles accordéon
│   ├── Footer.scss     # Styles pied de page
│   ├── Header.scss     # Styles en-tête
│   ├── Rating.scss     # Styles notation
│   ├── Slideshow.scss  # Styles carrousel
│   ├── variables.scss  # Variables SCSS globales
│   └── main.scss       # Fichier principal SCSS
├── App.jsx             # Composant racine
└── main.jsx            # Point d'entrée de l'application
```

## ⚡ Installation et lancement

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone https://github.com/SandrinePichla/kasa.git

# Accéder au dossier du projet
cd kasa

# Installer les dépendances
npm install
```

### Lancement du projet
```bash
# Démarrer le serveur de développement
npm run dev
```

L'application sera accessible à l'adresse : `http://localhost:5173`

## 🔧 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm run preview` - Prévisualise la version de production

## 🌟 Fonctionnalités

### Pages principales
- **Accueil** : Affichage de la galerie de tous les logements
- **Logement** : Page de détail avec carrousel d'images, informations complètes
- **À propos** : Présentation des valeurs de l'entreprise
- **404** : Page d'erreur pour les routes inexistantes

### Composants clés
- **Navigation responsive** avec React Router
- **Carrousel d'images** avec navigation par flèches
- **Système de collapse** pour les descriptions et équipements
- **Notation par étoiles** pour évaluer les logements
- **Cards responsive** pour l'affichage des logements

## 📊 Données

Le backend est simulé via le fichier `logements.json` qui contient :
- Informations des logements (titre, localisation, prix, etc.)
- Galeries d'images
- Descriptions et équipements
- Informations sur les hôtes
- Système de notation

## 🎯 Compétences développées

- Développement d'une application React complète
- Gestion du routing avec React Router
- Création de composants réutilisables
- Manipulation de données JSON
- Responsive design et SCSS moderne
- Architecture de projet structurée
- Utilisation de variables SCSS pour une cohérence visuelle

## 📱 Responsive Design

L'application est entièrement responsive et s'adapte aux différentes tailles d'écran :
- Desktop (> 1024px)
- Tablette (768px - 1024px)
- Mobile (< 768px)

## 🔗 Navigation

La navigation se fait via React Router avec les routes suivantes :
- `/` - Page d'accueil
- `/logement/:id` - Page de détail d'un logement
- `/about` - Page à propos
- `*` - Page 404 pour toute route non définie

---

**Projet réalisé dans le cadre de la formation OpenClassrooms - Développeur Web**