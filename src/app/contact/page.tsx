import { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Github, MessageCircle, Mail, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | terminaI",
  description: "Get in touch with the terminaI community.",
};

const channels = [
  {
    icon: Github,
    name: "GitHub",
    description: "Report issues, contribute code, star the repo",
    link: "https://github.com/Prof-Harita/terminaI",
    buttonText: "View Repository",
  },
  {
    icon: MessageCircle,
    name: "GitHub Discussions",
    description: "Ask questions, share ideas, get help",
    link: "https://github.com/Prof-Harita/terminaI/discussions",
    buttonText: "Join Discussion",
  },
  {
    icon: Users,
    name: "Discord",
    description: "Real-time chat with the community",
    link: "",
    buttonText: "Join Discord",
    comingSoon: true,
  },
  {
    icon: Mail,
    name: "Email",
    description: "For press, partnerships, enterprise inquiries",
    link: "mailto:contact@terminai.org",
    buttonText: "Send Email",
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32">
        <section className="section">
          <div className="container max-w-4xl text-center">
            <h1 className="mb-6">Get in Touch</h1>
            <p className="text-xl opacity-70 mb-12">
              Join the community, report issues, or reach out for partnerships.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {channels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <div key={index} className="card text-left">
                    <Icon
                      size={32}
                      className="text-[var(--color-brand-red)] mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">{channel.name}</h3>
                    <p className="text-sm opacity-60 mb-4">
                      {channel.description}
                    </p>
                    {channel.comingSoon ? (
                      <span className="text-sm opacity-40">Coming soon</span>
                    ) : (
                      <a
                        href={channel.link}
                        target={
                          channel.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          channel.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm font-medium text-[var(--color-brand-red)] hover:underline"
                      >
                        {channel.buttonText} →
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
