import styles from '../NavBar/navigation.module.css'
import links from '@/constans/links'

type LinkType={
    id:number;
    title: string;
    href: string;
};
type NavBarProps={
    links: LinkType[];
   
}

const Navigation =({links=[]}:NavBarProps)=>{
  console.log("Links passed to Navigation:", links); 
    return(
        <>
        <div className={styles.desktop}>
            <ul className={styles.links}>
                {links.map((link)=>{
                    return(
                        <a className={styles.nav} href={link.href} key={link.id}>{link.title}</a>
                    )
                })}
 
            </ul>
        </div>
        
        </>
    )
}
export default Navigation