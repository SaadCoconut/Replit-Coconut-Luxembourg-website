import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { ChatMessage, InsertChatMessage } from "@shared/schema";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [sessionId] = useState(() => Math.random().toString(36).substring(7));
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { data: messages = [], refetch } = useQuery<ChatMessage[]>({
    queryKey: [`/api/chat/${sessionId}`],
    enabled: isOpen
  });

  const sendMessageMutation = useMutation({
    mutationFn: async (data: InsertChatMessage) => {
      const response = await apiRequest("POST", "/api/chat", data);
      return response.json();
    },
    onSuccess: () => {
      refetch();
      setMessage("");
    }
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (!message.trim()) return;
    
    sendMessageMutation.mutate({
      message: message.trim(),
      isUser: true,
      sessionId
    });
  };

  const sendQuickMessage = (quickMessage: string) => {
    sendMessageMutation.mutate({
      message: quickMessage,
      isUser: true,
      sessionId
    });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Initial bot message for new sessions
  const initialMessage: ChatMessage = {
    id: 0,
    message: "Hello! I'm here to help answer questions about Coconut Luxembourg and our youth empowerment programs. How can I assist you today?",
    isUser: false,
    sessionId,
    createdAt: new Date()
  };

  const allMessages: ChatMessage[] = messages.length === 0 ? [initialMessage] : messages;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-80 h-96 mb-4 border border-neutral-200">
          <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold">Coconut Assistant</h4>
                <p className="text-xs text-blue-100">Online now</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleChat}
              className="text-white hover:text-blue-200 transition-colors h-auto p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="h-64 p-4 overflow-y-auto bg-neutral-50">
            {allMessages.map((msg, index) => (
              <div key={index} className={`mb-4 ${msg.isUser ? 'text-right' : ''}`}>
                <div className={`inline-block max-w-64 p-3 rounded-lg text-sm ${
                  msg.isUser 
                    ? 'bg-primary text-white ml-auto' 
                    : 'bg-white border border-neutral-200 shadow-sm text-neutral-700'
                }`}>
                  {msg.message}
                </div>
              </div>
            ))}
            
            {/* Quick action buttons - only show initially */}
            {messages.length === 0 && (
              <div className="space-y-2 mt-4">
                <Button
                  onClick={() => sendQuickMessage("Tell me about partnership opportunities")}
                  className="bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-lg text-sm hover:bg-opacity-20 transition-colors w-full text-left h-auto"
                  variant="ghost"
                >
                  💼 Partnership opportunities
                </Button>
                <Button
                  onClick={() => sendQuickMessage("What are your program areas?")}
                  className="bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-lg text-sm hover:bg-opacity-20 transition-colors w-full text-left h-auto"
                  variant="ghost"
                >
                  📊 Program areas
                </Button>
                <Button
                  onClick={() => sendQuickMessage("How do you measure impact?")}
                  className="bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-lg text-sm hover:bg-opacity-20 transition-colors w-full text-left h-auto"
                  variant="ghost"
                >
                  📈 Impact measurement
                </Button>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-4 border-t border-neutral-200">
            <div className="flex">
              <Input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                className="flex-1 rounded-r-none border-r-0 text-sm"
                disabled={sendMessageMutation.isPending}
              />
              <Button
                onClick={sendMessage}
                disabled={sendMessageMutation.isPending || !message.trim()}
                className="bg-primary text-white hover:bg-blue-700 transition-colors rounded-l-none"
                size="sm"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Chat Toggle Button */}
      <Button
        onClick={toggleChat}
        className="bg-primary text-white w-14 h-14 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:shadow-xl"
        size="sm"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>
    </div>
  );
}
