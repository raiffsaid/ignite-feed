import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css"

export function Post(params) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/raiffsaid.png" />
          <div className={styles.authorInfo}>
            <strong>Raiff Said</strong>
            <span>Web Developer</span>
          </div>
        </div>
        
        <time title="11 de Maio às 08:13h"  dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Lorem Ipsum</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quae deleniti fugiat nostrum enim rerum expedita mollitia nisi consectetur repellendus volup.</p>
        <p>
          <a href="#">#novoprojeto</a>&nbsp;
          <a href="#">#nlw</a>&nbsp;
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}