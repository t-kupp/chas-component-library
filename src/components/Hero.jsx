import heroImage from '../assets/hero.png';
import Button from './Button';
import { FaArrowDown } from 'react-icons/fa';
import Badge from './Badge';
import tailwindLogo from '../assets/tailwind-logo.svg';
import reactLogo from '../assets/react-logo.svg';
import { FiExternalLink } from 'react-icons/fi';

export default function Hero() {
  return (
    <div
      className="mx-auto w-full max-w-6xl rounded-xl bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="flex h-full flex-col gap-8 rounded-xl bg-gradient-to-r from-slate-800 from-45% to-80% p-20 text-slate-100">
        <div className="flex max-w-[50%] flex-col gap-4">
          <h1 className="text-6xl font-bold">Component Library</h1>
          <p className="font-medium">
            A component library mockup to get familiar with building{' '}
            <span className="font-mono"> {'Components()'} </span>
            and using<span className="font-mono"> {'{ props }'} </span>in React.
          </p>
          <Badge icon="info" color="cyan">
            v1.0.2
          </Badge>
        </div>

        <div className="flex items-center gap-4">
          <p className="flex items-center gap-1 text-xl font-medium text-cyan-400">
            <img className="max-h-8" src={reactLogo} alt="" /> React
          </p>
          <p className="flex items-center gap-1 text-lg font-bold">
            <img className="max-h-4" src={tailwindLogo} alt="" />
            tailwindcss
          </p>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <a href="#Button">
            <Button size="large" color="blue">
              How to use? <FaArrowDown />
            </Button>
          </a>

          <a href="#">
            <Button size="large" color="gray">
              Source code <FiExternalLink />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
