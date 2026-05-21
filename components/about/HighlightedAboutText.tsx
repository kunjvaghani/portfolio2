type HighlightKind = "base" | "primary" | "secondary";

type TextSegment = {
  text: string;
  kind: HighlightKind;
};

/** IDE-style semantic highlights — primary #88C0D0, secondary #8FBCBB */
const ABOUT_SEGMENTS: TextSegment[][] = [
  [
    { text: "I am a ", kind: "base" },
    { text: "passionate", kind: "secondary" },
    { text: " ", kind: "base" },
    { text: "full stack developer", kind: "primary" },
    { text: " with a strong focus on ", kind: "base" },
    { text: "AI integrations", kind: "primary" },
    { text: ", ", kind: "base" },
    { text: "scalable backend systems", kind: "primary" },
    { text: ", and ", kind: "base" },
    { text: "modern interactive frontend experiences", kind: "primary" },
    { text: ". With a solid foundation in ", kind: "base" },
    { text: "computer science", kind: "primary" },
    { text: " and hands-on experience in various projects.", kind: "base" },
  ],
  [
    { text: "I am dedicated to creating ", kind: "base" },
    { text: "innovative solutions", kind: "secondary" },
    { text: " that leverage the power of ", kind: "base" },
    { text: "AI", kind: "primary" },
    { text: " to enhance ", kind: "base" },
    { text: "user experiences", kind: "primary" },
    { text: " and drive ", kind: "base" },
    { text: "business growth", kind: "secondary" },
    { text: ". My expertise includes working with technologies such as ", kind: "base" },
    { text: "Next.js", kind: "primary" },
    { text: ", ", kind: "base" },
    { text: "Node.js", kind: "primary" },
    { text: ", ", kind: "base" },
    { text: "MongoDB/MySQL", kind: "primary" },
    { text: ", and various ", kind: "base" },
    { text: "AI frameworks", kind: "primary" },
    { text: ". I am eager to contribute my skills and passion to ", kind: "base" },
    { text: "impactful projects", kind: "secondary" },
    { text: " that push the boundaries of ", kind: "base" },
    { text: "technology", kind: "primary" },
    { text: ".", kind: "base" },
  ],
];

const kindClass: Record<HighlightKind, string> = {
  base: "text-zinc-400",
  primary: "text-[#88C0D0]",
  secondary: "text-[#8FBCBB]",
};

function HighlightedParagraph({ segments }: { segments: TextSegment[] }) {
  return (
    <p className="font-mono text-sm leading-[1.85] sm:text-[15px]">
      {segments.map((segment, i) => (
        <span key={i} className={kindClass[segment.kind]}>
          {segment.text}
        </span>
      ))}
    </p>
  );
}

export default function HighlightedAboutText() {
  return (
    <div className="space-y-5">
      {ABOUT_SEGMENTS.map((paragraph, i) => (
        <HighlightedParagraph key={i} segments={paragraph} />
      ))}
    </div>
  );
}
