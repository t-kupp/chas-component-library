import DisplayTitle from './DisplayTitle';

export default function ({ title, children }) {
  return (
    <div id={title} className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <DisplayTitle title={title} />
      {children}
    </div>
  );
}
