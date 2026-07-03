"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import TeamMemberModal from "./TeamMemberModal";
import type { TeamMember } from "@/lib/team";

export function LeadershipCard({ member }: { member: TeamMember }) {
  return (
    <TeamMemberModal
      member={member}
      trigger={
        <article className="group">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100">
            {member.image ? (
              <Image
                src={member.image}
                alt={`Portrett av ${member.name}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                style={{ objectPosition: member.imagePosition ?? "center 20%" }}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[--color-green]/20 to-[--color-navy-dark]/60">
                <span className="font-display text-6xl font-extrabold text-white/80">
                  {member.initials ?? member.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}
          </div>
          <div className="mt-5">
            <h3 className="font-display text-xl font-extrabold text-navy-dark leading-tight">
              {member.name}
            </h3>
            <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-navy-dark">
              {member.role}
            </p>
            <div className="mt-4 flex flex-col gap-1.5 text-sm text-navy-dark/75">
              {member.phoneHref && member.phone ? (
                <a
                  href={member.phoneHref}
                  className="inline-flex items-center gap-2 hover:text-green-dark transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  <span>{member.phone}</span>
                </a>
              ) : null}
              {member.email ? (
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 truncate hover:text-green-dark transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  <span className="truncate">{member.email}</span>
                </a>
              ) : null}
            </div>
          </div>
        </article>
      }
    />
  );
}

export function CompactCard({ member }: { member: TeamMember }) {
  return (
    <TeamMemberModal
      member={member}
      trigger={
        <article className="flex items-center gap-4 rounded-xl bg-gray-50 p-4 transition-colors hover:bg-gray-100">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-gray-200">
            {member.image ? (
              <Image
                src={member.image}
                alt={`Portrett av ${member.name}`}
                fill
                sizes="56px"
                className="object-cover"
                style={{ objectPosition: member.imagePosition ?? "center 20%" }}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[--color-green]/25 to-[--color-navy-dark]/50">
                <span className="font-display text-sm font-extrabold text-white/85">
                  {member.initials ?? member.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}
          </div>
          <div className="min-w-0">
            <p className="font-display text-sm font-extrabold text-navy-dark leading-tight truncate">
              {member.name}
            </p>
            <p className="mt-0.5 text-[11px] font-medium text-navy-dark/70 truncate">
              {member.role}
            </p>
          </div>
        </article>
      }
    />
  );
}
