import React from "react";
    
const Footer = () => {
    return(
        <>
        <hr className="mx-4 mt-4" />
            <footer className="p-4 backdrop-blur-sm">
                <ul className="text-white flex flex-wrap justify-center text-xl font-semibold">
                    <li className="mx-3"><a href="https://www.instagram.com/riteshsharma.vd/"><i className="bi bi-instagram"/> Instagram</a></li>
                    <li className="mx-3"><a href="https://www.facebook.com/riteshsharma.vd/"><i className="bi bi-facebook"/> Facebook</a></li>
                    <li className="mx-3"><a href="https://www.twitter.com/newbieritesh"><i className="bi bi-twitter"/> Twitter</a></li>
                </ul>
            </footer>
        </>
    )
}
export default Footer;