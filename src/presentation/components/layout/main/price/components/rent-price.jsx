import { useEffect } from 'react'
import { Link } from 'react-scroll'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { ICON } from 'presentation/components/assets/icons/icon'

import styles from './rent-price.module.scss'

export function RentPrice() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section id="preco" className={styles.container}>
      <span
        className={styles.subtitle}
        data-aos="fade-down"
        data-aos-easing="ease"
        data-aos-duration="1500"
      >
        Alugar local de eventos
      </span>
      <h1
        data-aos="fade-down"
        data-aos-easing="ease"
        data-aos-duration="1500"
        className={styles.title}
      >
        Preços
      </h1>
      <div className={styles.price_container}>
        <div
          data-aos="fade-right"
          data-aos-easing="ease"
          data-aos-duration="1500"
          className={styles.shed}
        >
          <div className={styles.box_title}>
            <h2>Local para eventos</h2>
            <p>O local ideal para casamentos e diversas ocasiões especiais.</p>
          </div>
          <div className={styles.box_price}>
            <p className={styles.text_price}>
              Apenas <span>Sob Orçamento</span>
            </p>
            <p className={styles.text_fees}>Em até 2 vezes sem juros!</p>
            <a
              href="https://api.whatsapp.com/send?phone=5519998853434"
              target="_blank"
              rel="noopener noreferrer"
            >
              <input
                className={styles.btn}
                type="button"
                value="Entrar em Contato"
              />
            </a>

            <p className={styles.text_performance}>
              O local perfeito para comemorar
            </p>
          </div>
          <div className={styles.box_fantasies}>
            <p>
              <ICON.AiOutlineCheck className={styles.icon} /> Estacionamento
              seguro para seu veículo;
            </p>
            <p>
              <ICON.AiOutlineCheck className={styles.icon} /> Garantia de mesas
              e cadeiras confortáveis no restaurante;
            </p>
            <p>
              <ICON.AiOutlineCheck className={styles.icon} /> Cozinha totalmente
              equipada para sua conveniência;
            </p>
            <p>
              <ICON.AiOutlineCheck className={styles.icon} /> Ambiente limpo e
              higienizado para sua saúde e bem-estar;
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-easing="ease"
          data-aos-duration="1500"
          className={styles.fishing}
        >
          <div className={styles.box_title}>
            <h2>Pesqueiro</h2>
            <p>Uma experiência única aguarda por você.</p>
          </div>
          <div className={styles.box_price}>
            <p className={styles.text_price}>
              {' '}
              Preço <span>Dinâmico</span>
            </p>
            <p className={styles.text_fees}>Veja a galeria de fotos!</p>
            <Link activeClass="active" to="fotos" spy={true} smooth={true}>
              {' '}
              <input
                className={styles.btn}
                type="button"
                value="Explorar galeria de fotos"
              />
            </Link>

            <p className={styles.text_performance}>
              O local ideal para a diversão para toda a família
            </p>
          </div>
          <div className={styles.box_fantasies}>
            <p>
              <ICON.AiOutlineCheck className={styles.icon} /> Ambiente natural e
              aconchegante;
            </p>
            <p>
              <ICON.AiOutlineCheck className={styles.icon} /> Cardápio variado
              com opções deliciosas
            </p>
            <p>
              <ICON.AiOutlineCheck className={styles.icon} /> Opções de bebidas
              refrescantes;
            </p>
            <p>
              <ICON.AiOutlineCheck className={styles.icon} /> Estacionamento
              seguro para seu veículo;
            </p>
            <p>
              <ICON.AiOutlineCheck className={styles.icon} /> Atendimento
              amigável e profissional;
            </p>
            <p>
              <ICON.AiOutlineCheck className={styles.icon} /> Diversão
              garantida;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
