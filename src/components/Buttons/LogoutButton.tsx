"use client";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const { replace } = useRouter();
  const logout = () => {
    replace("/api/logout");
  };

  return (
    <button
      className="text-lg text-sub-gray hover:text-primary-green transition-colors"
      onClick={logout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
