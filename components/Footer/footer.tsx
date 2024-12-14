import styles from '../Footer/footer.module.css'



const Footer=()=>{
    return(
        <footer className={styles.footerWrapper} >
            <div className={styles.footerText} style={{color:'white'}}>  © Made by InVino</div>
        </footer>
    )
}

export default Footer