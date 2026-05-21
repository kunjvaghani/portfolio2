import Image from "next/image";
import type { Skill } from "@/lib/skills";
import { CORE_CS_COLORS, SKILL_BRAND_COLORS } from "@/lib/skillColors";

type SkillIconProps = {
  skill: Skill;
  size?: number;
};

function getBrandColor(skill: Skill): string {
  if (skill.color) return skill.color.replace("#", "");
  if (skill.icon && SKILL_BRAND_COLORS[skill.icon]) {
    return SKILL_BRAND_COLORS[skill.icon];
  }
  if (CORE_CS_COLORS[skill.name]) return CORE_CS_COLORS[skill.name];
  return "FFFFFF";
}

export default function SkillIcon({ skill, size = 28 }: SkillIconProps) {
  const accent = getBrandColor(skill);

  if (skill.customIcon) {
    return (
      <div
        className="flex items-center justify-center rounded-lg"
        style={{
          background: `color-mix(in srgb, #${accent} 18%, transparent)`,
        }}
      >
        <Image
          src={skill.customIcon}
          alt=""
          width={size}
          height={size}
          className="object-contain"
          aria-hidden
        />
      </div>
    );
  }

  if (skill.icon) {
    return (
      <Image
        src={`https://cdn.simpleicons.org/${skill.icon}/${accent}`}
        alt=""
        width={size}
        height={size}
        className="object-contain drop-shadow-sm"
        unoptimized
        aria-hidden
      />
    );
  }

  return (
    <span
      className="flex items-center justify-center rounded-lg font-mono text-xs font-bold"
      style={{
        width: size,
        height: size,
        color: `#${accent}`,
        background: `color-mix(in srgb, #${accent} 20%, transparent)`,
      }}
      aria-hidden
    >
      {skill.name.slice(0, 2).toUpperCase()}
    </span>
  );
}
