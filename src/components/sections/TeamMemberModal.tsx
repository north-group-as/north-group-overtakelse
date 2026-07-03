"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { X, Phone, Mail, Download } from "lucide-react";
import type { TeamMember } from "@/lib/team";

function generateVCard(member: TeamMember): string {
  const [first, ...rest] = member.name.split(" ");
  const last = rest.join(" ");
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${last};${first};;;`,
    `FN:${member.name}`,
    `ORG:North Group AS`,
    `TITLE:${member.role}`,
    member.phone ? `TEL;TYPE=WORK,VOICE:${member.phone.replace(/\s/g, "")}` : null,
    member.email ? `EMAIL;TYPE=WORK:${member.email}` : null,
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\r\n");
}

function downloadVCard(member: TeamMember) {
  const vcf = generateVCard(member);
  const blob = new Blob([vcf], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${member.name.replace(/\s/g, "-").toLowerCase()}.vcf`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function TeamMemberModal({
  member,
  trigger,
}: {
  member: TeamMember;
  trigger: React.ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => {
      setOpen(false);
      triggerRef.current?.focus();
    };
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="block w-full cursor-pointer rounded-2xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
      >
        {trigger}
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={(event) => {
          // Close on backdrop click (clicking the dialog element itself, not its contents)
          if (event.target === event.currentTarget) setOpen(false);
        }}
        className="m-auto max-w-lg w-full max-h-[90vh] rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      >
        <div className="relative overflow-y-auto p-8">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-navy-dark transition-colors hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
            aria-label="Lukk"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>

          <div className="mb-6 flex items-center gap-5">
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={`Portrett av ${member.name}`}
                  width={160}
                  height={160}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: member.imagePosition ?? "center 20%" }}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[--color-green]/20 to-[--color-navy-dark]/60">
                  <span className="font-display text-3xl font-extrabold text-white/80">
                    {member.initials ?? member.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h2
                id={titleId}
                className="font-display text-xl font-extrabold leading-tight text-navy-dark"
              >
                {member.name}
              </h2>
              <p className="text-sm font-medium text-navy-dark/70">{member.role}</p>
            </div>
          </div>

          {member.bio && (
            <div className="mb-6 space-y-3 text-[15px] leading-relaxed text-navy-dark/80">
              {member.bio.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-4 border-t border-gray-100 pt-4">
            {member.phoneHref && member.phone && (
              <a
                href={member.phoneHref}
                className="inline-flex items-center gap-2 text-sm text-navy-dark/80 transition-colors hover:text-navy-dark"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {member.phone}
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 text-sm text-navy-dark/80 transition-colors hover:text-navy-dark"
              >
                <Mail className="h-4 w-4" aria-hidden />
                {member.email}
              </a>
            )}
            <button
              type="button"
              onClick={() => downloadVCard(member)}
              className="inline-flex items-center gap-2 text-sm text-navy-dark/80 transition-colors hover:text-navy-dark"
            >
              <Download className="h-4 w-4" aria-hidden />
              Last ned visittkort
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
