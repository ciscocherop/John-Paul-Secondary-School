"use client";

import { useId, useState } from "react";

export type Member = {
  name: string;
  role: string;
  place: string;
  photo: string;
  words: string;
};

/**
 * A board member's portrait. Their words rise over the photo on hover or keyboard focus;
 * on touch screens (no hover) a tap opens and closes them.
 */
export function BoardMember({ member }: { member: Member }) {
  const [open, setOpen] = useState(false);
  const wordsId = useId();

  return (
    <li
      className="person"
      data-open={open}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
    >
      <div className="person-portrait arch">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={member.photo} alt={member.name} loading="lazy" decoding="async" />

        <blockquote id={wordsId} className="person-words">
          <p>
            <span aria-hidden className="text-sun">“</span>
            {member.words}
            <span aria-hidden className="text-sun">”</span>
          </p>
        </blockquote>

        <button
          type="button"
          className="person-toggle"
          aria-expanded={open}
          aria-controls={wordsId}
          aria-label={`${open ? "Hide" : "Read"} ${member.name}’s words`}
          onClick={() => {
            // Mouse users already see the words on hover; taps toggle them.
            if (!window.matchMedia("(hover: hover)").matches) setOpen((o) => !o);
          }}
        >
          <span aria-hidden className="person-hint">
            <span className="person-hint-mark">“</span>
          </span>
        </button>
      </div>

      <h3 className="mt-5 text-2xl">{member.name}</h3>
      <p className="text-sm text-muted">
        <span className="font-semibold text-clay">{member.role}</span> · {member.place}
      </p>
    </li>
  );
}
