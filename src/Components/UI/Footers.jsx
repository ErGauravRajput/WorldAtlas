import footerContact from "../../Api/footerApi.json";
import { TbMailPlus } from "react-icons/tb";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

export const Footers=()=>{
    const icons={
        MdPlace:<MdPlace/>,
        IoCallSharp:<IoCallSharp/>,
        TbMailPlus:<TbMailPlus/>

    }
    return (
        <footer className="footer-section">
            <div className="container grid grid-three-cols">
                {footerContact.map((cur,index)=>{
                    const {icon,title,details}=cur;
                    return (
                        <div className="footer-contact" key={index}>
                            <div className="icon">{icons[icon]}</div>
                            <div className="footer-contact-text">
                                <p>{title}</p>
                                <p>{details}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </footer>
    );
}