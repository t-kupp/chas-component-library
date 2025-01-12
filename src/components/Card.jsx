import { FiExternalLink } from 'react-icons/fi';

export default function Card({ link, altText, imgSource, children }) {
  return (
    <div className="w-full max-w-xs rounded-lg border bg-white">
      <img
        className="h-52 w-full rounded-t-lg object-cover"
        src={imgSource}
        alt={altText}
      />
      <div className="flex flex-col p-4">
        {children}
        {link && (
          <a className="ml-auto p-1" href={link}>
            <FiExternalLink />
          </a>
        )}
      </div>
    </div>
  );
}
