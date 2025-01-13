export default function VariantCard({
  id,
  title,
  availableVariants,
  children,
}) {
  return (
    <div id={id} className="w-full">
      <VariantTitle
        id={id}
        title={title}
        availableVariants={availableVariants}
      />

      <div className="background-pattern flex min-h-24 w-full items-center justify-center gap-6 rounded-lg border bg-slate-50 p-6">
        {children}
      </div>
    </div>
  );
}

function VariantTitle({ id, title, availableVariants }) {
  return (
    <div className="my-2 flex items-center gap-1">
      <a
        className="font-bold text-slate-300 hover:text-slate-400"
        href={`#${id}`}
      >
        #
      </a>
      <p className="text-sm font-bold">{title}</p>
      <p className="ml-auto rounded px-2 font-mono text-xs">
        {availableVariants ? '<' + availableVariants.join(', ') + ' />' : ''}
      </p>
    </div>
  );
}
