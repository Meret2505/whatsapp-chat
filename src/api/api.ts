import axios from "axios";

const BASE_URL = "https://api.green-api.com";

export interface SendMessageResponse {
  idMessage: string;
}

export const sendMessage = async (
  idInstance: string,
  apiTokenInstance: string,
  chatId: string,
  message: string
): Promise<SendMessageResponse> => {
  const url = `${BASE_URL}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
  try {
    const response = await axios.post(url, {
      chatId,
      message,
    });
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

export interface Notification {
  receiptId: number;
  body: {
    senderData: {
      sender: string;
    };
    messageData: {
      textMessageData: {
        textMessage: string;
      };
    };
  };
}

export const receiveNotification = async (
  idInstance: string,
  apiTokenInstance: string
): Promise<Notification | null> => {
  const url = `${BASE_URL}/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error receiving notification:", error);
    return null;
  }
};

export const deleteNotification = async (
  idInstance: string,
  apiTokenInstance: string,
  receiptId: number
): Promise<void> => {
  const url = `${BASE_URL}/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`;
  try {
    await axios.delete(url);
  } catch (error) {
    console.error("Error deleting notification:", error);
    throw error;
  }
};
