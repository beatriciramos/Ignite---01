import s from "./Avatar.module.css";
export function Avatar({ src, hasBorder = true }) {
  return (
    <img src={src} className={hasBorder ? s.avatarWithBorder : s.avatar} />
  );
}
