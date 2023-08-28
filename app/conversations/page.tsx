"use client";
import clsx from "clsx";
import EmptyState from "../components/EmptyState";
import useConversation from "../hooks/useConversation";

const Conversations = () => {
  const { isOpen } = useConversation();
  return (
    <div
      className={clsx(
        `hidden lg:block lg:pl-80 h-full`,
        isOpen ? "block" : "hidden"
      )}
    >
      <EmptyState />
    </div>
  );
};

export default Conversations;
