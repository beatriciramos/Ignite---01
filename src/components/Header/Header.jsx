import s from "./Header.module.css";

import igniteLogo from '../../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className={s.header}>
        <img src={igniteLogo} alt="" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
