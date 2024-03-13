import React from "react";
import Logo from "../../uikit/Logo/Logo";
import Facebook from "../../uikit/icons/Facebook/Facebook";
import Twitter from "../../uikit/icons/Twitter/Twitter";
import Instagram from "../../uikit/icons/Instagram/Instagram";

const Footer = () => {
    return (
        <footer className="py-[20px] bg-[#266F62] text-[14px]">
            <div className="container px-[10px] mx-auto flex items-center gap-[15px] text-white justify-between">
                <div className="flex items-center gap-[15px]">
                    <Logo />
                    <p>Copyright © 2024 ProPets Inc.</p>
                </div>
                <div className="flex gap-[32px] text-end">
                    <ul className="flex cursor-pointer gap-[15px]">
                        <li>About</li>
                        <li>Language</li>
                        <li>For business</li>
                        <li>Volounteer Organizations</li>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                    <div className="flex gap-[10px]">
                        <Facebook />
                        <Twitter />
                        <Instagram />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
