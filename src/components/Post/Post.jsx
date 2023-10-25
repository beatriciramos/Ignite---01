import s from "./Post.module.css";

export function Post() {
  return (
    <article className={s.post}>
      <header>
        <div className={s.author}>
          <img
            src="https://avatars.githubusercontent.com/u/59290321?v=4"
            className={s.avatar}
          />
          <div className={s.authorInfo}>
            <strong>Beatrici Ramos</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime="2022-05-08 08:12:10">Publicado há 1h</time>
      </header>

      <div className={s.content}>
        <p> Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <a href=""> <p>👉 jane.design/doctorcare</p> </a>

        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
