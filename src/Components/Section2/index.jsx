
import styles from './index.module.css'
import apple from "../img/apple.jpeg"
import tenco from '../img/ten co.jpeg'
import coro from '../img/coro.jpeg'
import todo from '../img/to do.jpeg'
import superman from '../img/superman.jpeg'
import seans from '../img/seans.jpeg'
import comfort from '../img/comfort.jpeg'
import open from '../img/ks open.jpeg'
import drink from '../img/I drink 2.jpeg'
import drink2 from '../img/I drink.jpeg'
import kansas from '../img/the kansas.jpeg'
import dog from '../img/this a dog.jpeg'
import cat from '../img/cat.jpeg'
import happy from '../img/happy.jpeg'

const Sectionn = () => {

    return (
        <>
        
        <div className={styles.Sectionn}>
          
               <img className={styles.apple}  src={apple} data-aos='fade-in' data-aos-delay='800'alt="" />
               <img className={styles.tenco} src={tenco} data-aos='fade-in' data-aos-delay='1000' alt="" />
               <img className={styles.coro} src={coro} data-aos='fade-in' data-aos-delay='1100'alt="" />
               <img className={styles.todo}  src={todo} data-aos='fade-in' data-aos-delay='1200'  alt="" />
               <img className={styles.superman} src={superman} data-aos='fade-in' data-aos-delay='1300' alt="" />
                <img className={styles.seans}  src={seans} data-aos='fade-in' data-aos-delay='1400' alt="" />
               <img className={styles.comfort}  src={comfort} alt="" data-aos='fade-in' data-aos-delay='1500' /> <br />

        </div>
             
        <div className='Sectionnn'>
               <div className={styles.Sectionnnn}><img className={styles.open}  src={open} data-aos='fade-in' data-aos-delay='1600' alt="" /> 
                <img className={styles.drink}  src={drink} data-aos='fade-in' data-aos-delay='1700'alt="" /> 
               <img className={styles.drink2}  src={drink2} data-aos='fade-in' data-aos-delay='1800' alt="" /> 
               <img className={styles.kansas} src={kansas} data-aos='fade-in' data-aos-delay='1900' alt="" /> 
               <img className={styles.dog}  src={dog} data-aos='fade-in' data-aos-delay='2000'alt="" /> 
               <img className={styles.cat}  src={cat} data-aos='fade-in' data-aos-delay='2100'alt="" />
               <img className={styles.happy}  src={happy} data-aos='fade-in' data-aos-delay='2200' alt="" /></div>
        </div>
        
        </>
    )

}

export default Sectionn;