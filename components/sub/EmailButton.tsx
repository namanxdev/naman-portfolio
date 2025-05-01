"use client";
import React, { useState } from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Mail, Copy, Check } from "lucide-react";

export function EmailButton() {
  const email = "namanguptabhopal@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }).catch(err => {
      console.error("Failed to copy email: ", err);
    });
  };

  return (
    <HoverBorderGradient
      containerClassName="rounded-full"
      as="button"
      className="bg-black text-white flex items-center space-x-2 px-4 py-2"
      onClick={handleCopy}
    >
      <Mail className="h-5 w-5" />
      <span>{email}</span>
      {copied ? (
        <Check className="h-5 w-5 text-green-500" />
      ) : (
        <Copy className="h-5 w-5" />
      )}
    </HoverBorderGradient>
  );
}


