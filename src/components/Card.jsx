import { FiExternalLink } from 'react-icons/fi';

export default function Card({ link, altText, imgSource, children }) {
  return (
    <div className="w-full max-w-xs rounded-lg bg-white text-slate-800">
      <img
        className="h-52 w-full rounded-t-lg object-cover"
        src={imgSource}
        alt={altText}
      />
      <div className="relative flex flex-col p-4">
        {children}
        {link && (
          <a
            className="absolute bottom-4 right-4 p-1 text-blue-500 hover:text-blue-700"
            href={link}
            target="_blank"
          >
            <FiExternalLink />
          </a>
        )}
      </div>
    </div>
  );
}
