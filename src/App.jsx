import './App.css';
import ButtonDisplay from './components/ButtonDisplay';
import AlertDisplay from './components/AlertDisplay';
import BadgeDisplay from './components/BadgeDisplay';
import CardDisplay from './components/CardDisplay';
import Hero from './components/Hero';

function App() {
  return (
    <div className="grid gap-12">
      <Hero />
      <ButtonDisplay />
      <AlertDisplay />
      <BadgeDisplay />
      <CardDisplay />
    </div>
  );
}

export default App;
