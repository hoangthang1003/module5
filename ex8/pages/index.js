import styles from "../styles/Home.module.css";
import { getPosts } from "./mock-data/data";
import Link from "next/link";

export default function Home() {
  return (
      <div className={styles.container}>
        <main className={styles.main}>
          <table className={styles.table}>
            <thead>
            <tr className={styles.tr}>
              <th className={styles.th}>ID</th>
              <th className={styles.th}>title</th>
              <th className={styles.th}>Category</th>
              <th className={styles.th}>Updated At</th>
              <th className={styles.th}>Edit</th>
            </tr>
            </thead>
            <tbody>
            {getPosts().map(blog => (
                <tr className={styles.tr} key={blog.id}>
                  <td className={styles.td}>{blog.id}</td>
                  <td className={styles.td}>{blog.title}</td>
                  <td className={styles.td}>{blog.category}</td>
                  <td className={styles.td}>{blog.updatedAt}</td>
                  <Link href={`/blog/postEdit${encodeURIComponent(blog.id)}`}>
                    <a>Edit</a>
                  </Link>
                </tr>
            ))}
            </tbody>
          </table>

        </main>
      </div>

  );
}
