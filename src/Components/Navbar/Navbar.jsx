import img from '../img//navbar img.png'
import styles from './index.module.css'
const Navbar = () => {
    return (
        <>
        <div className={styles.container}>
            <ul className={styles.nav}>
                <li>
                    <a href="#">HUMBOLD MERCANTILE</a>
                </li>
                
                <li>
                <img style={
                    {width:'8rem',
                    height:'10rem',
                    marginLeft:'1.2rem',
                    marginTop:'-3.5rem'
                }
                    
                    } src={img} alt="" />
                </li>

                <li>
                    <a href="#">CAFE</a>
                </li>

                <li>
                    <a href="#vendor">CONTACT</a>
                </li>
            </ul>
        </div>
        
        
        </>
    )
}

export default Navbar;