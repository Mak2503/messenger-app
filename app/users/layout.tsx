import getUser from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./components/UserList";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUser();
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <UserList users={users} />
        {children}
      </div>
    </Sidebar>
  );
}
