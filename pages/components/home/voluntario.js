import Image from "next/image"
import Link from "next/link"

import styles from "./../../../styles/WhoSupport.module.css";

function Voluntario(props) {
  return (
    <div className={styles.voluntarios}>
      <Image
        className={styles.imgVoluntario}
        src={props.image}
        width={300}
        height={370}
      />
      <p>{props.name}</p>
      <Link href="#">
        <a>
          <Image src="/images/whatsapp.png" width={28.92} height={26} />
        </a>
      </Link>
      <Link href="#">
        <a>
          <Image src="/images/instagram.png" width={28.92} height={26} />
        </a>
      </Link>
    </div>
  );
}

export default Voluntario