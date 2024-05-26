import Image from 'next/image'
// import Hero from 'public/hero.png' // dont know not working for me but worked for him
import Hero from "../../public/hero.png"
import styles from "./page.module.scss"

export default function Home() {
  return (

    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button >See Our Works</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>

  )
}

//Add .jsx to get autocomplete for html elements
// if