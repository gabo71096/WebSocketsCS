import { useEffect } from "react";
import { connStart, connStop } from "../utilities/socket";

export default function useConnection() {
  useEffect(() => {
    connStart();

    return () => {
      connStop();
    };
  }, []);
}
