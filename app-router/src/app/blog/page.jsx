import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.scss";

async function fetchData() {

  /* //* Static data fetching
   */
  //* const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //*   cache: 'no-store'
  //* })
  //* OR
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")


  //*Revalidating Data
  //* const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //*   cache: 'force-cache'
  //* })

//*Revalidating Data
  //* const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //*   next: {revalidate: 10}
  //* })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()


}

export default async function Blog() {

  const data = await fetchData()
  console.log(data)
  console.log('kiki is stupid')
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={'https://images.pexels.com/photos/3392937/pexels-photo-3392937.jpeg?auto=compress&cs=tinysrgb&w=800'}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
