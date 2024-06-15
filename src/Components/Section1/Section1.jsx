import styles from './index.module.css'
import img from '../img/tatly img.jpg'
import img1 from '../img/smoking.jpg'
import img2 from '../img/now or ne.jpg'
import img3 from '../img/cold drew.jpg'
import img4 from '../img/gifts logs.jpg'
import img5 from '../img/green tea.jpg'
import img6 from '../img/bision.jpg'
import img7 from '../img/native kansas.jpg'
import img8 from '../img/coton.jpg'
import img9 from '../img/desert.jpg'
import img10 from '../img/bear.jpg'
import img11 from '../img/tea biotics.jpg'
import img12 from '../img/location img.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Section1 = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
        <div className={styles.container}>
            <div className={styles.Section1} >
                <img  className= {styles.tato}src={img} alt="" data-aos='fade-in' data-aos-delay='800' />
                <img className={styles.smoking} src={img1} alt="" data-aos='fade-in' data-aos-delay='1000' />
                <img className={styles.now} src={img2} alt="" data-aos='fade-in' data-aos-delay='1100' />
                <img className={styles.drew} src={img3} alt="" data-aos='fade-in' data-aos-delay='1200' />
                <img className={styles.gifts} src={img4} alt="" data-aos='fade-in' data-aos-delay='1300' />
                <img className={styles.tea} src={img5} alt="" data-aos='fade-in' data-aos-delay='1400' />
            </div>

            <div className={styles.section1img} >
                <img className={styles.bison} src={img6} alt="" data-aos='fade-in' data-aos-delay='1500' />
                <img className={styles.cansas} src={img7} alt="" data-aos='fade-in' data-aos-delay='1600' />
                <img className={styles.coton} src={img8} alt="" data-aos='fade-in' data-aos-delay='1700' />
                <img className={styles.desert} src={img9} alt="" data-aos='fade-in' data-aos-delay='1800' />
                <img className={styles.bear} src={img10} alt="" data-aos='fade-in' data-aos-delay='1900' />
                <img className={styles.biotics} src={img11} alt="" data-aos='fade-in' data-aos-delay='2000' />
            </div>

            </div>

            <div className={styles.container1}>
            <div className={styles.location}>
                <img className={styles.img12} src={img12} alt="" data-aos='fade-in' data-aos-delay='2200' />
                <h3 className={styles.loc}>LOCATION</h3>
                <p className={styles.st}>103 S 9th St</p>
                <p className={styles.kansas}>Humboldt, Kansas</p>

                <h2 className={styles.hours}>HOURS</h2>
                <h3 className={styles.MF}>M-F 7a–5p</h3>
                <h3 className={styles.sat}> SAT 8a–5p</h3>
                <h3 className={styles.sun}>SUN 9a–2p</h3>
                <h2 className={styles.contact}>CONTACT US</h2>
                <p className={styles.number}>(620) 473-7009</p>
                <svg className={styles.facebook} xmlns="http://www.w3.org/2000/svg" height="1.5rem"  width='1.5rem' viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                <svg className={styles.instagram} xmlns="http://www.w3.org/2000/svg" height="1.5rem" width='1.5rem' viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42
                .6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </div>
            </div>

            <div className={styles.write}>
                <h2 className={styles.located}>LOCATED IN THE HEART OF SOUTHEAST KANSAS, HUMBOLDT MERCANTILE
                    OFFERS SOME OF THE BEST STUFF MADE IN OUR NECK OF THE WOODS & BEYOND.</h2>

                <p>We're passionate about providing nearby-made goods, a curious variety of things we think you’ll
                    love to share with others, and the very best coffee you’ll find anywhere.</p>
                <p>Octagon City Coffee Company is the soul of the Mercantile, serving artisan coffees, espresso, and teas from our friends at Messenger Coffee and Rishi Tea & Botanicals. We love that they take care
                    of the farmers they source from and are insanely skilled at what they do. </p>
                <p>Our retail shop thoughtfully showcases the talented woodworkers, glass blowers, soap & candle makers, weavers & knitters, perfumers, and jewelry makers that live and create in our area. We also curate a fun and eclectic mix of
                    gifts for all ages and occasions. If you need a thoughtful gift, we’ve got you covered.</p>
            </div>
                <div className={styles.line}></div>
        </>
    )
}

export default Section1;