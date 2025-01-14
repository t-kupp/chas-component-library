import { useId } from 'react';

export default function VariantSection({ title, availableVariants, children }) {
  const id = `${title}-${useId()}`;

  return (
    <div id={id} className="w-full">
      <div className="my-2 flex items-center gap-1">
        <a
          className="font-bold text-slate-300 hover:text-slate-400 dark:text-slate-600 dark:hover:text-slate-500"
          href={`#${id}`}
        >
          #
        </a>
        <p className="text-sm font-bold">{title}</p>
        <p className="ml-auto rounded px-2 font-mono text-xs">
          {availableVariants ? '<' + availableVariants.join(', ') + ' />' : ''}
        </p>
      </div>

      <div className="background-pattern dark:background-pattern-dark flex min-h-24 w-full items-center justify-center gap-6 rounded-lg border p-6">
        {children}
      </div>
    </div>
  );
}
