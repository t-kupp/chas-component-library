import './App.css';
import ButtonDisplay from './components/ButtonDisplay';
import AlertDisplay from './components/AlertDisplay';
import BadgeDisplay from './components/BadgeDisplay';

function App() {
  return (
    <div className="grid gap-12">
      <ButtonDisplay />
      <AlertDisplay />
      <BadgeDisplay />
    </div>
  );
}

export default App;
