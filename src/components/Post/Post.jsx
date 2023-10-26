import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import s from "./Post.module.css";

export function Post(props) {
  console.log(props);
  return (
    <article className={s.post}>
      <header>
        <div className={s.author}>
          <Avatar src={props.author.avatarUrl} />
          <div className={s.authorInfo}>
            {/* <strong>{props.author.name}</strong>
            <span>{props.author.role}</span> */}
          </div>
        </div>

        <time dateTime="2022-05-08 08:12:10"></time>
      </header>

      <div className={s.content}>
        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>

      <form action="" className={s.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={s.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
