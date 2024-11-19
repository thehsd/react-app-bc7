import { useEffect, useState } from "react";

const Onlineer = () => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    setIsOnline(window.navigator.onLine);
    window.addEventListener("offline", () => setIsOnline(false));
    window.addEventListener("online", () => setIsOnline(true));
  }, []);

  return (
    <>
      <span className="status">{isOnline ? "online" : "offline"}</span>
    </>
  );
};
export default Onlineer;
