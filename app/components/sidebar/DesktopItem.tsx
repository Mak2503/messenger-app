"use client";

import clsx from "clsx";
import Link from "next/link";

export interface DesktopItemProps {
  label: string;
  active?: boolean;
  href: string;
  icon: any;
  onClick?: () => void;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  active,
  icon: Icon,
  href,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) return onClick();
  };
  return (
    <li onClick={handleClick}>
      <Link
        href={href}
        className={clsx(
          `group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-500 hover:text-black hover:bg-gray-100`,
          active &&
            "bg-blue-100 text-blue-500 hover:bg-blue-200 hover:text-blue-600"
        )}
      >
        <Icon className="h-6 w-6 shrink-0" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
