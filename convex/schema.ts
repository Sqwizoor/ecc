import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    sessionId: v.string(),
    role: v.string(), // "user" or "assistant"
    content: v.string(),
    createdAt: v.number(),
  }).index("by_sessionId", ["sessionId"]),
  
  sessions: defineTable({
    sessionId: v.string(),
    userId: v.optional(v.string()), // For future auth integration
    lastMessageAt: v.number(),
  }).index("by_sessionId", ["sessionId"]),
});
