import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <div>
            <h2>Nav Bar</h2>
            <Link to="/home">
                <img src="https://media.istockphoto.com/vectors/home-action-stroke-icons-vector-id999883994?k=20&m=999883994&s=612x612&w=0&h=WVPd8LTFJNRBT5c_fvGDS8-EoWN7LqNDBL-L0KR-aiU=" alt="NO IMG" width="100px" height="100px"/>
            </Link>
            <Link to="/about">
                <img src="https://t3.ftcdn.net/jpg/01/28/44/76/360_F_128447604_6deYSrg6bgH2F3YaoU0icdhvxNu4ReDN.jpg" alt="no about us"  width="200px" height="100px"/>
            </Link>
            <Link to="/ContactUs">
                <img src="https://www.kindpng.com/picc/m/573-5738088_contact-us-png-free-commercial-use-images-graphic.png" alt="no contact us image"  width="200px" height="100px"/>
            </Link>
            <Link to="/bar">
                <h2>bar</h2>
            </Link>
        </div>
     );
}
 
export default Nav;