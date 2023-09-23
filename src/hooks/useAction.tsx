import { ActionResponse } from "@/types/types";
import { FC, useEffect, useState } from "react";

const useAction = () => {
  const [action, setAction] = useState<ActionResponse | undefined>(undefined);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const setState = () => {
      if (action) {
        setError(action.error);
        setSuccess(action.success);
        if (action.message) setMessage(action.message);
      }
    };
    setState();
  }, [action]);

  return {
    error,
    success,
    message,
    setAction,
  };
};

export default useAction;
