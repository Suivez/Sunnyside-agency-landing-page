import "./Home.css";
import headerImgDesktop from "../images/desktop/image-header.jpg";
import arrowIcon from "../images/icon-arrow-down.svg";
import transformImageDesktop from "../images/desktop/image-transform.jpg";
import standOutImageDesktop from "../images/desktop/image-stand-out.jpg";
import graphicDesignImageDesktop from "../images/desktop/image-graphic-design.jpg";
import photographyImageDesktop from "../images/desktop/image-photography.jpg";
import avatarEmily from "../images/image-emily.jpg";
import avatarJennie from "../images/image-jennie.jpg";
import avatarThomas from "../images/image-thomas.jpg";
import milkImageDesktop from "../images/desktop/image-gallery-milkbottles.jpg";
import orangeImageDesktop from "../images/desktop/image-gallery-orange.jpg";
import coneImageDesktop from "../images/desktop/image-gallery-cone.jpg";
import sugarImageDesktop from "../images/desktop/image-gallery-sugarcubes.jpg";
import headerImgMobile from "../images/mobile/image-header.jpg";
import transformImageMobile from "../images/mobile/image-transform.jpg";
import standOutImageMobile from "../images/mobile/image-stand-out.jpg";
import graphicDesignImageMobile from "../images/mobile/image-graphic-design.jpg";
import photographyImageMobile from "../images/mobile/image-photography.jpg";
import milkImageMobile from "../images/desktop/image-gallery-milkbottles.jpg";
import orangeImageMobile from "../images/desktop/image-gallery-orange.jpg";
import coneImageMobile from "../images/desktop/image-gallery-cone.jpg";
import sugarImageMobile from "../images/desktop/image-gallery-sugarcubes.jpg";

import { useState, useEffect } from "react";

export default function Footer() {
    const boxOfPicture = (imageDesktop, imageMobile) => {
        return (
            <div className="box">
                <picture>
                    <img src={ChangeImage(imageDesktop, imageMobile)} />
                </picture>
            </div>
        );
    };

    const clientComment = (avatar, comment, nick, profession) => {
        return (
            <div className="comment-section">
                <div className="avatar">
                    <img src={avatar} />
                </div>
                <p>{comment}</p>
                <div className="nick">{nick}</div>
                <div className="profession">{profession}</div>
            </div>
        );
    };

    const useWindowWidth = () => {
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);

        useEffect(() => {
            const handleWindowResize = () => {
                setWindowWidth(window.innerWidth);
            };

            window.addEventListener("resize", handleWindowResize);
            return () => window.removeEventListener("resize", handleWindowResize);
        }, []);

        return windowWidth;
    };

    const ChangeImage = (largeImage, smallImage) => {
        return useWindowWidth() > 580 ? largeImage : smallImage;
    };

    const changeHeaderBackground =
        useWindowWidth() > 880 ? headerImgDesktop : headerImgMobile;

    return (
        <div className="home-container">
            <div className="header">
                <h1>We are creatives</h1>
                <img src={arrowIcon} />
                <img className="background-header" src={changeHeaderBackground} />
            </div>
            <div className="section wrap-f">
                <div
                    className="box"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <div className="description-content">
                        <h2>Transform your brand</h2>
                        <p>
                            We are a full-service creative agency specializing in helping
                            brands grow fast. Engage your clients through compelling visuals
                            that do most of the marketing for you.
                        </p>
                        <div className="link-section">
                            <a>Learn More</a>
                            <div className="line-f"></div>
                        </div>
                    </div>
                </div>
                {boxOfPicture(transformImageDesktop, transformImageMobile)}
            </div>
            <div className="section wrap-s">
                {boxOfPicture(standOutImageDesktop, standOutImageMobile)}
                <div
                    className="box"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <div className="description-content">
                        <h2>Stand out to the right audience</h2>
                        <p>
                            Using a collaborative formula of designers, researchers,
                            photographers, videographers, and copywriters, we’ll build and
                            extend your brand in digital places.
                        </p>
                        <div className="link-section">
                            <a>Learn More</a>
                            <div className="line-s"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="box box-s">
                    <div className="image-description">
                        <div className="center-image-description color-f">
                            <h2>Graphic Design</h2>
                            <p>
                                Great design makes you memorable. We deliver artwork that
                                underscores your brand message and captures potential clients’
                                attention.
                            </p>
                        </div>
                    </div>
                    <picture>
                        <img
                            src={ChangeImage(
                                graphicDesignImageDesktop,
                                graphicDesignImageMobile
                            )}
                        />
                    </picture>
                </div>
                <div className="box box-s">
                    <div className="image-description">
                        <div className="center-image-description color-s">
                            <h2>Photography</h2>
                            <p>
                                Increase your credibility by getting the most stunning,
                                high-quality photos that improve your business image.
                            </p>
                        </div>
                    </div>
                    <picture>
                        <img
                            src={ChangeImage(photographyImageDesktop, photographyImageMobile)}
                        />
                    </picture>
                </div>
            </div>
            <div className="client-section">
                <h3>Client Testimonials</h3>
                <div className="client-comments">
                    {clientComment(
                        avatarEmily,
                        "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
                        "Emily R.",
                        "Marketing Director"
                    )}
                    {clientComment(
                        avatarThomas,
                        "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
                        "Thomas S.",
                        "Chief Operating Officer"
                    )}
                    {clientComment(
                        avatarJennie,
                        "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
                        "Jennie F.",
                        "Business Owner"
                    )}
                </div>
            </div>
            <div className="pictures-section">
                <div className="column">
                    <img src={ChangeImage(milkImageDesktop, milkImageMobile)} />
                    <img src={ChangeImage(orangeImageDesktop, orangeImageMobile)} />
                </div>
                <div className="column">
                    <img src={ChangeImage(coneImageDesktop, coneImageMobile)} />
                    <img src={ChangeImage(sugarImageDesktop, sugarImageMobile)} />
                </div>
            </div>
        </div>
    );
}
