import React, { useState } from "react";
import axios from "axios";

const ChatBoot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

 

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_API_KEY}`,
        {
          contents: [
            {
              parts: [{ text: input }],
            },
          ],
        }
      );

      const botText =
        response?.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";

      setMessages((prev) => [...prev, { role: "bot", content: botText }]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);

      const errorMessage =
        error?.response?.data?.error?.message ||
        error.message ||
        "Something went wrong. Please try again.";

      setMessages((prev) => [
        ...prev,
        { role: "bot", content: `❗ Error: ${errorMessage}` },
      ]);
    }
  };

  return (
    <div className="p-4  mx-auto">
      <h2 className="text-xl font-bold mb-4">ChatBoot</h2>
      <div className="h-64 overflow-y-auto border p-2 mb-2 rounded shadow bg-white text-black">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}
          >
            <span
              className={`inline-block p-2 rounded ${
                msg.role === "user" ? "bg-blue-200" : "bg-gray-200"
              }`}
            >
              {msg.content}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 outline-lime-400 rounded-l"
          placeholder="Type your message..."
        />
        <button onClick={handleSend} className="btn btn-success rounded-l outline">Send message</button>
      </div>
    </div>
  );
};

export default ChatBoot;
