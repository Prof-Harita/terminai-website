"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "TerminAI saved me 3 hours today. Instead of wrestling with deployment scripts, I just said 'deploy my app to staging' and it handled everything.",
    author: "Sarah Chen",
    role: "Senior Developer",
    company: "TechCorp",
    avatar: "SC"
  },
  {
    quote: "I used to spend 30 minutes debugging simple issues. Now TerminAI finds and fixes them in seconds. It's like having a senior engineer on call 24/7.",
    author: "Marcus Rodriguez",
    role: "DevOps Engineer",
    company: "ScaleCloud",
    avatar: "MR"
  },
  {
    quote: "The best $0 I've ever spent. TerminAI automated our entire CI/CD pipeline setup. What took us a week manually, it did in 20 minutes.",
    author: "Alex Kim",
    role: "CTO",
    company: "StartupXYZ",
    avatar: "AK"
  },
  {
    quote: "Finally, a terminal that understands context. No more copy-pasting commands from Stack Overflow. Just describe what you want done.",
    author: "Priya Patel",
    role: "Full Stack Developer",
    company: "IndieDev",
    avatar: "PP"
  }
];

export function Testimonials() {
  return (
    <section className="section border-t border-white/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">Loved by Developers Worldwide</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            See how TerminAI is transforming how developers work with their terminals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>

              <Quote size={24} className="text-brand-red mb-4" />

              <p className="text-white/90 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center text-sm font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm opacity-60">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm opacity-60">
            Join 10,000+ developers who have saved thousands of hours with TerminAI
          </p>
        </div>
      </div>
    </section>
  );
}