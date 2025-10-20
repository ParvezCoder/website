"use client";

import React, { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

const ChatBot: React.FC = () => {
  useEffect(() => {
    createChat({
      webhookUrl:
        "https://parvezcoder.app.n8n.cloud/webhook/87fe4719-9c45-4c49-b5a6-648776f078e1/chat",
      webhookConfig: {
        method: "POST",
        headers: {},
      },
      target: "#n8n-chat",
      mode: "window",
      chatInputKey: "chatInput",
      chatSessionKey: "sessionId",
      loadPreviousSession: true,
      metadata: {},

      showWelcomeScreen: false,
      defaultLanguage: "en",
      initialMessages: [
        "👋 Hello! I'm Parvez AI Assistant.",
        "How can I help you today?",
      ],
      i18n: {
        en: {
          title: "🤖 Parvez AI Chatbot",
          subtitle: "Ask me anything — I’m here to assist you 24/7!",
          footer: "Powered by n8n.io",
          getStarted: "Start Chat",
          inputPlaceholder: "Type your question here...",
          closeButtonTooltip: "Close chat", // ✅ Added this line
        },
      },
      enableStreaming: false,
    });
  }, []);

  return null;
};

export default ChatBot;
