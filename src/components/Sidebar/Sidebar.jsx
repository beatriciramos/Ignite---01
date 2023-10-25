import s from "./Sidebar.module.css";
import { PencilLine} from 'phosphor-react'
export function Sidebar() {
  return (
    <aside className={s.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww"
        className={s.cover}
      />

      <div className={s.profile}>

        <img src="https://avatars.githubusercontent.com/u/59290321?v=4" className={s.avatar}/>
        <strong>Beatrici Ramos</strong>
        <span>Web Developer</span>
      </div>

      <footer>
       
        <a href="#"> <PencilLine size={18}/>Editar seu perfil</a>
      </footer>
    </aside>
  );
}
