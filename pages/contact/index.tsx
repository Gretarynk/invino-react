import PageTemplate from "@/components/PageTemplate/pageTemplate";
import Contact, { ContactProps} from "@/components/Contact/contact";

export async function getStaticProps() {
    const contactData = {
      address: "Aušros Vartų g. 7, Vilnius",
      phone: "+370 60 809 445",
      workingHours: {
        weekdays: "17:00 - 02:00",
        weekend: "17:00 - 04:00",
      },
      facebookLink: "http://www.facebook.com/INVINObaras",
      instagramLink: "https://www.instagram.com/invinobaras?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    };
  
    return { props: { contactData } };
  }
  
const ContactPage=({ contactData }: { contactData: ContactProps })=>{

    return(
        <PageTemplate>
            <Contact {...contactData}/>
        </PageTemplate>
    )
}

export default ContactPage