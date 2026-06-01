"use client";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white py-20 px-6">
      <div className="max-w-content mx-auto text-center">
        <div className="flex flex-wrap items-center justify-center gap-8">
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
            href="tel:+351965533154"
            className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors"
          >
            <PhoneIcon className="w-5 h-5" />
            +351 965 533 154
          </a>
          <a
            href="tel:+447423505994"
            className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors"
          >
            <PhoneIcon className="w-5 h-5" />
            +44 7423 505 994
          </a>
        </div>
        <p className="mt-12 text-white/40 text-sm">© 2025 Madalena Nunes</p>
      </div>
    </footer>
  );
}
