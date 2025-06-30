import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, insertChatMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(contactData);
      res.json({ success: true, message: "Contact message received successfully", id: message.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Chat messages
  app.get("/api/chat/:sessionId", async (req, res) => {
    try {
      const sessionId = req.params.sessionId;
      const messages = await storage.getChatMessages(sessionId);
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const chatData = insertChatMessageSchema.parse(req.body);
      const message = await storage.createChatMessage(chatData);
      
      // Generate bot response
      if (chatData.isUser) {
        const botResponse = generateBotResponse(chatData.message);
        const botMessage = await storage.createChatMessage({
          message: botResponse,
          isUser: false,
          sessionId: chatData.sessionId
        });
        res.json({ userMessage: message, botMessage });
      } else {
        res.json({ message });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

function generateBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  
  if (message.includes('partnership') || message.includes('collaborate') || message.includes('funding')) {
    return "We offer several partnership models including direct funding collaboration, capacity building, and joint program implementation. Would you like to schedule a call to discuss your specific needs?";
  }
  
  if (message.includes('program') || message.includes('service') || message.includes('what do you do')) {
    return "Our main program areas are Education Excellence, Healthcare Access, and Economic Development. Each program has proven methodologies and measurable outcomes. Which area interests you most?";
  }
  
  if (message.includes('impact') || message.includes('measure') || message.includes('results')) {
    return "We use a comprehensive M&E framework including baseline studies, regular monitoring, and impact evaluations. All our partners receive quarterly reports with detailed metrics and stories of change.";
  }
  
  if (message.includes('contact') || message.includes('reach') || message.includes('call')) {
    return "You can contact our partnership team at partnerships@hopefoundation.org or call us at +1 (555) 123-4567. We'd be happy to schedule a meeting to discuss opportunities.";
  }
  
  if (message.includes('hello') || message.includes('hi') || message.includes('help')) {
    return "Hello! I'm here to help answer questions about Hope Foundation and our partnership opportunities. You can ask me about our programs, impact measurement, or how to get in touch with our team.";
  }
  
  return "Thank you for your question! For detailed information about that topic, I'd recommend contacting our partnership team directly at partnerships@hopefoundation.org or using the contact form on this page.";
}
