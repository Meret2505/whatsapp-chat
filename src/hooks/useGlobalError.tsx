import { useState } from "react";

const useGlobalError = () => {
  const [error, setError] = useState<string | null>(null);

  const handleError = (message: string) => {
    setError(message);
    setTimeout(() => setError(null), 5000);
  };

  return { error, handleError };
};

export default useGlobalError;
