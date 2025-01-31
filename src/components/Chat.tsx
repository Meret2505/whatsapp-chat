import React, { useEffect, useState } from "react";
import {
  sendMessage,
  receiveNotification,
  deleteNotification,
} from "../api/api";
import useGlobalError from "../hooks/useGlobalError";

interface Message {
  sender: string;
  text: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [rawPhoneNumber, setRawPhoneNumber] = useState("");
  const idInstance = localStorage.getItem("idInstance") || "";
  const apiTokenInstance = localStorage.getItem("apiTokenInstance") || "";
  const chatId = `${rawPhoneNumber}@c.us`;
  const { error, handleError } = useGlobalError();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const notification = await receiveNotification(
          idInstance,
          apiTokenInstance
        );
        if (notification && notification.body) {
          const { senderData, messageData } = notification.body;
          setMessages((prev) => [
            ...prev,
            {
              sender: senderData.sender,
              text: messageData.textMessageData.textMessage,
            },
          ]);
          await deleteNotification(
            idInstance,
            apiTokenInstance,
            notification.receiptId
          );
        }
      } catch (err) {
        handleError("Ошибка при получении сообщений");
      }
    };

    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, [idInstance, apiTokenInstance]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !chatId) {
      handleError("Введите сообщение и номер телефона");
      return;
    }

    try {
      await sendMessage(idInstance, apiTokenInstance, chatId, newMessage);
      setMessages((prev) => [...prev, { sender: "me", text: newMessage }]);
      setNewMessage("");
    } catch (err) {
      handleError("Ошибка при отправке сообщения");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Error Banner */}
      {error && (
        <div className="p-4 bg-red-500 text-white text-center">{error}</div>
      )}
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-green-500 text-white">
        <h2 className="text-lg font-bold">Чат</h2>
        <input
          type="text"
          placeholder={`Номер телефона получателя без "@c.us"`}
          value={rawPhoneNumber}
          onChange={(e) => setRawPhoneNumber(e.target.value)}
          className="px-4 py-2 text-sm text-gray-700 bg-white rounded focus:outline-none w-[300px]"
        />
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs p-3 my-2 rounded-lg ${
              msg.sender === "me"
                ? "ml-auto bg-green-500 text-white"
                : "mr-auto bg-gray-200 text-gray-800"
            }`}
          >
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="flex items-center p-4 bg-white border-t">
        <input
          type="text"
          placeholder="Введите сообщение"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 px-4 py-2 mr-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none"
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Chat;
