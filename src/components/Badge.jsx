import {
  IoWarningOutline,
  IoInformationCircleOutline,
  IoCheckmark,
  IoTrophyOutline,
} from 'react-icons/io5';
import { AiOutlineFire } from 'react-icons/ai';

export default function Badge({ size, color, icon, children }) {
  const defaultStyle = 'font-medium rounded-full flex items-center gap-1';

  const badgeColor =
    {
      gray: 'bg-slate-200 text-slate-900',
      red: 'bg-red-200 text-red-900',
      green: 'bg-green-200 text-green-900',
      cyan: 'bg-cyan-200 text-cyan-900',
      purple: 'bg-purple-200 text-purple-900',
      yellow: 'bg-yellow-200 text-yellow-900',
    }[color] || 'bg-slate-200 text-slate-900';

  const badgeSize =
    {
      small: 'text-xs px-[8px] py-[2px]',
      large: 'text-sm px-[10px] py-[2px]',
    }[size] || 'text-xs px-[8px] py-[2px]';

  const badgeIcon =
    {
      checkmark: <IoCheckmark />,
      warning: <IoWarningOutline />,
      info: <IoInformationCircleOutline />,
      trending: <AiOutlineFire />,
      achievement: <IoTrophyOutline />,
    }[icon] || '';

  return (
    <p className={`${defaultStyle} ${badgeColor} ${badgeSize}`}>
      {badgeIcon}
      {children}
    </p>
  );
}
