import { Icon } from "@iconify/react";

function Footer() {
    const socialMediaIcons = ["icon-park-outline:facebook", "basil:twitter-outline", "streamline:linkedin", , "proicons:youtube",]
    return (
        <>
            <div className="text-center my-5">
                <div className="d-flex justify-content-center gap-3 mb-2">
                    {socialMediaIcons.map((icon, index) => (
                        <div className="icon-container" key={index}>
                            <Icon icon={icon} width="24" height="24" />
                        </div>
                    ))}
                </div>
                <p className="mb-1" style={{fontWeight:'bold'}}>Example@gmail.com</p>
                <p className="mb-0" style={{fontWeight:'bold'}}> Copyright © Name.All rights reserved.</p>
            </div>



        </>
    )
}

export default Footer