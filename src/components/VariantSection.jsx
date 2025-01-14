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

      <div className="flex min-h-24 w-full items-center justify-center gap-6 rounded-lg border bg-[image:var(--bg-pattern)] bg-[size:19px_19px] p-6 [--bg-pattern:repeating-linear-gradient(45deg,_#f6f6f6_0px,_#f6f6f6_1.9px,_#ffffff_0px,_#ffffff_50%)] dark:border-neutral-800 dark:[--bg-pattern:repeating-linear-gradient(45deg,_#202020_0px,_#202020_1.9px,_#111111_0px,_#111111_50%)]">
        {children}
      </div>
    </div>
  );
}
