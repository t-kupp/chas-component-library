export default function Alert({ color, icon, children }) {
  const defaultStyle = 'rounded py-2 px-4 text-sm w-full';

  const alertColor =
    {
      gray: 'bg-slate-200 text-slate-900',
      green: 'bg-green-200 text-green-900',
      red: 'bg-red-200 text-red-900',
    }[color] || 'bg-slate-200 text-slate-900';

  const alertIcon =
    {
      info: <i className="fa-solid fa-circle-info mr-2"></i>,
      question: <i className="fa-solid fa-circle-question mr-2"></i>,
      checkmark: <i className="fa-solid fa-circle-check mr-2"></i>,
    }[icon] || '';

  return (
    <p className={`${defaultStyle} ${alertColor}`}>
      {alertIcon}
      {children}
    </p>
  );
}
