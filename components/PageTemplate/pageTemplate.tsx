import styles from "../PageTemplate/pageTemplate.module.css"
import Header from "../Header/header"
import { ReactNode } from "react";
import Footer from "../Footer/footer";
import "../../app/globals.css";




type PageTemplateProps = {
    children: ReactNode;
  };
  const PageTemplate = ({ children }: PageTemplateProps) => {
    return (
      <div className={styles.mainBox}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    );
  };
  export default PageTemplate;