import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useAuthStore } from "../stores/auth";

export default function Dashboard() {
  const logout = useAuthStore((state) => state.logout);

  const handleClick = async () => {
    logout();
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Page title */}
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <Button label="Logout" onClick={handleClick} />
      </div>
    </div>
  );
}
