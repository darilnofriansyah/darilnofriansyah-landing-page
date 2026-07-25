"use client";

import { useState } from "react";

type CopyEmailButtonProps = {
  email: string;
};

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.prompt("Copy email address", email);
    }
  }

  return (
    <button
      type="button"
      className="button h-12 border border-zinc-300 bg-white px-6 text-zinc-900 hover:bg-zinc-100"
      onClick={copyEmail}
    >
      <span aria-live="polite">{copied ? "Email copied" : "Copy email"}</span>
    </button>
  );
}
