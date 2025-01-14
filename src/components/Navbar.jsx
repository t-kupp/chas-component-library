import { FaGithub } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { RxSun, RxMoon } from 'react-icons/rx';

export default function Navbar() {
  return (
    <div className="grid h-12 w-full grid-cols-3 items-center gap-4 border-b px-2 dark:border-neutral-800">
      <div className="col-start-3 flex items-center justify-end gap-2">
        <ThemeButton />
        <NavbarIconButton
          icon={FaGithub}
          url="https://github.com/t-kupp/chas-component-library"
        />
      </div>
    </div>
  );
}

function NavbarLink() {
  return;
}

function NavbarIconButton({ icon: Icon, url }) {
  return (
    <a href={url} target="_blank">
      <button className="rounded border-none bg-inherit p-2 !text-inherit hover:bg-slate-200 focus:outline-none dark:hover:bg-neutral-800">
        <Icon />
      </button>
    </a>
  );
}

function ThemeButton() {
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

  const [theme, setTheme] = useState(systemTheme);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded border-none bg-inherit p-2 hover:bg-slate-200 focus:outline-none dark:hover:bg-neutral-800"
    >
      {theme === 'light' ? <RxSun /> : <RxMoon />}
    </button>
  );
}
