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
  
  if (message.includes('partnership') || message.includes('collaborate') || message.includes('funding') || message.includes('erasmus')) {
    return "We offer various partnership opportunities including Erasmus+ youth exchanges, training courses, and joint projects in entrepreneurship and intercultural learning. Would you like to explore specific collaboration models?";
  }
  
  if (message.includes('program') || message.includes('service') || message.includes('what do you do')) {
    return "Our main focus areas are Entrepreneurship & Design Thinking, Intercultural Learning & Peacebuilding, Digital Youth Participation, and Environmental Sustainability. All programs use non-formal education methods. Which area interests you most?";
  }
  
  if (message.includes('impact') || message.includes('measure') || message.includes('results')) {
    return "We've impacted over 4,000 youth across 20+ countries through 100+ completed projects. We focus on personal development, entrepreneurial skills, digital literacy, and cultural understanding among Euro-Mediterranean youth.";
  }
  
  if (message.includes('contact') || message.includes('reach') || message.includes('call')) {
    return "You can contact our team at info@coconutluxembourg.org or call us at +352 (555) 123-4567. We'd be happy to discuss youth exchange opportunities and partnership possibilities.";
  }
  
  if (message.includes('hello') || message.includes('hi') || message.includes('help')) {
    return "Hello! I'm here to help answer questions about Coconut Luxembourg and our youth empowerment programs. You can ask me about our projects, partnership opportunities, or how to get involved with our network.";
  }
  
  if (message.includes('youth') || message.includes('young people') || message.includes('participants')) {
    return "We work primarily with young people aged 18-30, especially NEETs and youth from migrant backgrounds. Our programs focus on developing entrepreneurial skills, digital literacy, and intercultural competencies through experiential learning.";
  }
  
  if (message.includes('coconutwork') || message.includes('network')) {
    return "Coconut Luxembourg is part of the Coconutwork network - a European network spanning 8+ countries including France, Italy, Spain, Germany, Belgium, Sweden, and Iceland. Together we create opportunities for youth mobility and learning.";
  }
  
  return "Thank you for your question! For detailed information about that topic, I'd recommend contacting our team directly at info@coconutluxembourg.org or using the contact form on this page.";
}
