"use client";

import Link from "next/link";
import { DesktopItemProps } from "./DesktopItem";
import clsx from "clsx";

const MobileItem: React.FC<DesktopItemProps> = ({
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
    <Link
      href={href}
      onClick={handleClick}
      className={clsx(
        `group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-100`,
        active && "bg-blue-100 text-blue-500"
      )}
    >
      <Icon className="h-6 w-6" />
      <span className="sr-only">{label}</span>
    </Link>
  );
};

export default MobileItem;
