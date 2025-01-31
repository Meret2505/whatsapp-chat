import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Credentials {
  idInstance: string;
  apiTokenInstance: string;
}

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    idInstance: "",
    apiTokenInstance: "",
  });
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("idInstance", credentials.idInstance);
    localStorage.setItem("apiTokenInstance", credentials.apiTokenInstance);
    navigate("/chat");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Вход</h2>
        <input
          type="text"
          placeholder="ID Instance"
          value={credentials.idInstance}
          onChange={(e) =>
            setCredentials({ ...credentials, idInstance: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="API Token Instance"
          value={credentials.apiTokenInstance}
          onChange={(e) =>
            setCredentials({ ...credentials, apiTokenInstance: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleLogin}
          className="w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none"
        >
          Войти
        </button>
      </div>
    </div>
  );
};

export default Login;
