import styles from './index.module.css'


const Vendor = () => {

    return (

        <>

            <form className={styles.Vendor}>

                <h2 className={styles.vendor}>VENDOR APPLICATION</h2>
                <p className={styles.make}>MAKE SOME THING THAT YOU WANT US TO CONSIDER SELLING?</p>
                <p className={styles.sendus}>SEND US A NOTE HERE.</p>

                <div className={styles.name}>

                    <p className={styles.name1}>Name</p>
                    <p className={styles.requried1}>(required)</p>

                </div>

                <div className={styles.first}>

                    <p className={styles.firstname}>First Name</p>
                    <input className={styles.inputfirst} type="text" name="first" id="" />
                    <p className={styles.lastname}>Last Name</p>
                    <input className={styles.inputlast} type="text" name='lastname' id='' />

                </div>

                <div className={styles.email}>
                    <p className={styles.Email}>Email</p>
                    <p className={styles.emailrequried}>(required)</p>
                </div>

                <div className={styles.inputemail}>
                <input className={styles.inputemail1} type="text" name="email" id="#" />
                </div>

                <div className={styles.Message}>
                    <p className={styles.message}>Message</p>
                    <p className={styles.messagerequried}>(required)</p>
                </div>

                <div className={styles.messageinput}>
                <input className={styles.inputmessage} type="text" name="message" id="#" /><br />
                <input className={styles.submit} type="submit" name="submit" id="#" />
                </div>

            </form>


        </>
    )
}

export default Vendor;