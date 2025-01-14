export default function Button({ size, color, disabled, children }) {
  const defaultStyle =
    'rounded font-semibold py-0 border-none flex items-center gap-2';

  const buttonSize =
    {
      small: 'h-6 text-xs px-2',
      medium: 'h-8 text-sm px-3',
      large: 'h-10 text-base px-4',
    }[size] || 'h-8 text-sm px-3';

  const buttonColor =
    {
      gray: 'bg-slate-300 text-slate-800 hover:bg-slate-400 active:bg-slate-500',
      red: 'bg-red-300 text-slate-800 hover:bg-red-400 active:bg-red-500',
      yellow:
        'bg-yellow-300 text-slate-800 hover:bg-yellow-400 active:bg-yellow-500',
      blue: 'bg-blue-300 text-slate-800 hover:bg-blue-400 active:bg-blue-500',
    }[color] ||
    'bg-slate-300 text-slate-800 hover:bg-slate-400 active:bg-slate-500';

  const buttonDisabled = disabled
    ? '!bg-slate-200 !text-slate-400 cursor-not-allowed hover:!bg-slate-200 active:!bg-slate-200 active:!pointer-events-none !select-none'
    : '';

  return (
    <button
      className={`${defaultStyle} ${buttonSize} ${buttonColor} ${buttonDisabled}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
