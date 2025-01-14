import './App.css';
import ButtonDisplay from './components/ButtonDisplay';
import AlertDisplay from './components/AlertDisplay';
import BadgeDisplay from './components/BadgeDisplay';
import CardDisplay from './components/CardDisplay';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ModalDisplay from './components/ModalDisplay';

function App() {
  return (
    <div className="mx-auto w-full text-slate-800 dark:bg-neutral-800 dark:text-neutral-200">
      <Navbar />
      <div className="flex flex-col gap-8 p-8">
        <Hero />
        <ButtonDisplay />
        <AlertDisplay />
        <BadgeDisplay />
        <CardDisplay />
        <ModalDisplay />
      </div>
    </div>
  );
}

export default App;
