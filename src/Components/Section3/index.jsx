
import styles from './index.module.css'

import Cicon from '../img/Cicon.png'
const Section3 = () => {
    return (
        <>
            <div className={styles.Section3}>
                <img className={styles.Cicon} src={Cicon} alt="" />
                <h2 className={styles.octagon}>OCTAGON CITY COFFEE COMPANY</h2>

                <div className={styles.write}>
                    <h4 className={styles.Espresso}>Espresso</h4>
                    <p className={styles.oz}>2 oz</p>
                    <p className={styles.mani}>$2</p>
                    <p className={styles.hugo}>Hugo Organic Hot Tea</p>
                    <p className={styles.manii}>$2.5</p>
                </div>
                <p className={styles.lorem1}> 12 oz
                    100 Year Black
                    Grey Line Black
                    True Jasmine Green
                    Wonder Mint Herbal
                    Rest Easy Herbal</p>

                <div className={styles.write1}>
                    <h4 className={styles.machiatto}>Macchiato</h4>
                    <p className={styles.oz1}>4 oz</p>
                    <p className={styles.mani3}>$2.5</p>
                </div>

                <div className={styles.write2}>
                    <h4 className={styles.Cortado}>Cortado</h4>
                    <p className={styles.oz2}>4.5 oz</p>
                    <p className={styles.mani4}>$2.5</p>
                </div>

                <div className={styles.coffe}>
                    <div className={styles.capucino}>
                        <h4 className={styles.cappucino}>Cappucion</h4>
                        <p className={styles.oz6}>6 oz</p>
                        <p className={styles.mani5}>$3</p>
                    </div>

                    <div className={styles.summery}>
                        <h2 className={styles.summer}>Hugo Organic Iced Tea (summer only)</h2>
                        <p className={styles.sree}>$3</p>
                        <p className={styles.oz16}>16 oz</p>
                        <p className={styles.classic}>Classic Black</p>
                        <p className={styles.berry}>Hibiscus Berry</p>

                    </div>

                    <div className={styles.lattee}>

                        <h2 className={styles.latte}>Latte</h2>
                        <p className={styles.oz3540}>$3.5 / $4.0</p>
                        <p className={styles.oz1216}>12 oz / 16 oz</p>
                        <p className={styles.add}>(add a flavor for .50)</p>

                    </div>


                    <div className={styles.chailatte}>
                        <h2 className={styles.Chai}>Chai Latte</h2>
                        <p className={styles.oz44}>$4</p>
                        <p className={styles.oz122}>12 oz</p>

                    </div>

                    <div className={styles.Mocha}>
                      <h2 className={styles.mocha}>Mocha</h2>
                      <p className={styles.S445}>$4 / $4.5</p>
                      <p className={styles.oz12oz}>12 oz / 16 oz</p>
                    </div>

                    <div className={styles.chocolate}>
                       <h2 className={styles.hotchocolate}>Hot Chocolate</h2>
                       <p className={styles.S35}>$3.5</p>
                       <p className={styles.oz121}>12 oz</p>
                    </div>

                    <div className={styles.Americano}>
                      <h2 className={styles.americano}>Americano</h2>
                      <p className={styles.S25}>$2.5</p>
                      <p className={styles.Oz12}>12 oz</p>
                    </div>

                    <div className={styles.Steamers}>
                       <h2 className={styles.steamers}>Steamers</h2>
                       <p className={styles.Ss25}>$2.5</p>
                       <p className={styles.oz1211}>12 oz</p>
                    </div>

                    <div className={styles.single}>
                      <h2 className={styles.Single}>Single Cup</h2>
                      <h2 className={styles.dripcoffe}>Drip Coffee</h2>
                      <p className={styles.S2253}>$2 / $2.50 / $3</p>
                      <p className={styles.oz121620}>12 oz / 16 oz / 20 oz</p>
                    </div>

                    <div className={styles.Italiansodas}>
                       <h2 className={styles.italiansodas}>Italian Sodas</h2>
                       <p className={styles.SS25}>$2.5</p>
                       <p className={styles.oz20}>12 oz</p>
                    </div>

                    <div className={styles.Bottomless}>
                      <h2 className={styles.bottomless}>Bottomless Cup Drip</h2>
                      <p className={styles.S2s}>$2</p>
                      <p className={styles.unlimited}>unlimited refills</p>
                    </div>
                    
                    <div className={styles.rosewater}>
                       <h2 className={styles.Rosewater}>Rosewater</h2>
                       <h2 className={styles.Lemonade}>Lemonade</h2>
                       <p className={styles.S25s}>$2.5</p>
                       <p className={styles.oz20s}>12 oz</p>
                    </div>

                    <div className={styles.Pourover}>
                      <h2 className={styles.pourover}>Pourover</h2>
                      <p className={styles.S4s}>$4</p>
                      <p className={styles.oz12s}> 12 oz</p>
                    </div>

                    <div className={styles.Cookies}>
                       <h2 className={styles.cookies}>Cookies</h2>
                       <p className={styles.S195s}>$1.95</p>
                    </div>

                    <div className={styles.press}>
                      <h2 className={styles.french}>French Pressr</h2>
                      <p className={styles.S4ss}>$4</p>
                      <p className={styles.oz12ss}> 12 oz</p>
                    </div>

                    <div className={styles.Muffins}>
                       <h2 className={styles.muffins}>Muffins</h2>
                       <p className={styles.S195ss}>$1.95</p>
                    </div>

                    <div className={styles.Parfait}>
                       <h2 className={styles.yogurt}>Yogurt Parfait</h2>
                       <p className={styles.S395s}>$3.95</p>
                       <p className={styles.oz12sS}> 12 oz</p>
                    </div>


                    

                </div>


            </div>

        </>
    )
}

export default Section3;