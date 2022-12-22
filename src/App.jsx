import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/raiffsaid.png',
      name: 'Raiff Said',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Lorem Ipsum'},
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quae deleniti fugiat nostrum enim rerum expedita mollitia nisi consectetur repellendus volup.' },
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-12-19 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Lorem Ipsum'},
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quae deleniti fugiat nostrum enim rerum expedita mollitia nisi consectetur repellendus volup.' },
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-12-10 20:00:00')
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}
