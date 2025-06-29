import logements from './data/logements.json';

function App() {
  return (
    <div>
      <h1>Liste des logements</h1>
      <ul>
        {logements.map((logement) => (
          <li key={logement.id}>{logement.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;