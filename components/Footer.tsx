"use client";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white py-20 px-6">
      <div className="max-w-content mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          <span className="text-primary">// </span>
          Madalena Nunes
        </h2>
        <p className="mt-4 text-white/70 max-w-xl mx-auto">
          Open to new opportunities in digital health, health-tech, and AI.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <a
            href="mailto:madalenafnunes@gmail.com"
            className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors"
          >
            <EnvelopeIcon className="w-5 h-5" />
            madalenafnunes@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/madalenanunes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/madalena-nunes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors"
          >
            GitHub
          </a>
        </div>
        <p className="mt-12 text-white/40 text-sm">© 2025 Madalena Nunes</p>
      </div>
    </footer>
  );
}
