import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./../../../styles/WhoSupport.module.css";
import Voluntario from "./voluntario";

function QuemNosApoio() {
  return (
    <div>
      <h1 className={styles.tituloApoio}>Quem nos apoia</h1>
      <div className={styles.container}>
        <div className={styles.containerTxt}>
          <h2 className={styles.subTituloApoio}>
            Conheça os profissionais incríveis que estão conosco
          </h2>
          <p className={styles.textoApoio}>
            Esses são os voluntários que estão nesse momento dispostos a atender
            e dar apoio a quem mais precisa nesse momento.
            <br></br>
            <br></br>
            Caso tenha se identificado com nossa causa, você também pode ser um
            voluntário.
          </p>
          <div className={styles.link}>
            <Link href="#">
              <a className={styles.linkApoio}>
                Quero ser voluntário
                <Image
                  src="/images/seta.png"
                  alt="link"
                  width={14}
                  height={8}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.context}>
          <Voluntario name="Jessica" image="/images/jessica.png" />
          <Voluntario name="Julho" image="/images/julho.png" />
          <Voluntario name="Danilo Azevedo" image="/images/danilo.png" />
        <div>
            <Link href="#">
              <a className={styles.seta}>
                <Image
                  src="/images/seta.png"
                  alt="link"
                  width={14}
                  height={8}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuemNosApoio;
