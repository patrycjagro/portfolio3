// src/pages/Projects.tsx
import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import "./styles/project.css"
import insta from"../assets/img/png-clipart-instagram-logo-computer-icons-insta-logo-text-comput.png"

import image1 from "../assets/img/image1.png"
import image2 from "../assets/img/image2.png"
import image3 from "../assets/img/image3.jpg"
import image4 from "../assets/img/image4.png"
import image5 from "../assets/img/image5.png"
import image6 from "../assets/img/image6.png"
import image7 from "../assets/img/image7.png"
import image8 from "../assets/img/image8.png"
import image9 from "../assets/img/image9.png"
import image10 from "../assets/img/image10.png"
import image11 from "../assets/img/image11.png"
import image12 from "../assets/img/image12.png"
import image13 from "../assets/img/image13.png"
import image14 from "../assets/img/image14.png"
import image15 from "../assets/img/image15.png"
import image16 from "../assets/img/image16.png"
import image17 from "../assets/img/image17.jpg"
import image18 from "../assets/img/image18.jpg"
import image19 from "../assets/img/image19.jpg"
import image20 from "../assets/img/image20.png"
import image21 from "../assets/img/image21.jpg"
import image22 from "../assets/img/image22.jpg"
import image23 from "../assets/img/image23.png"
import image24 from "../assets/img/image24.png"
import image25 from "../assets/img/image25.png"
import image26 from "../assets/img/image26.jpg"
import image27 from "../assets/img/image27.jpg"
import image28 from "../assets/img/image28.png"
import image29 from "../assets/img/image29.jpg"
import image30 from "../assets/img/image30.png"
import image31 from "../assets/img/image31.png"
import image32 from "../assets/img/image32.jpg"
import image33 from "../assets/img/image33.jpg"
import image34 from "../assets/img/image34.jpg"
import image35 from "../assets/img/image35.jpg"
import image36 from "../assets/img/image36.jpeg"
import image37 from "../assets/img/image37.jpeg"
import image38 from "../assets/img/image38.jpeg"
import image39 from "../assets/img/image39.jpeg"
import image40 from "../assets/img/image40.jpg"
import image41 from "../assets/img/image41.jpg"
import image42 from "../assets/img/image42.jpg"
import image43 from "../assets/img/image43.jpg"
import image44 from "../assets/img/image44.jpg"
import image45 from "../assets/img/45.png"
import image46 from "../assets/img/46.png"
import image47 from "../assets/img/47.png"
import image48 from "../assets/img/48.png"
import image49 from "../assets/img/49.png"
import image50 from "../assets/img/50.png"
import image51 from "../assets/img/51.png"
import image52 from "../assets/img/52.png"
import image53 from "../assets/img/53.png"
import image54 from "../assets/img/54.png"
import image55 from "../assets/img/55.png"
import image56 from "../assets/img/56.png"
import image57 from "../assets/img/57.png"
import image58 from "../assets/img/58.jpg"
import image59 from "../assets/img/59.png"
import image60 from "../assets/img/60.png"
import image61 from "../assets/img/61.png"
import image62 from "../assets/img/62.png"
import image63 from "../assets/img/63.jpg"
import image64 from "../assets/img/64.jpg"
import image65 from "../assets/img/65.png"
import image66 from "../assets/img/66.png"
import image67 from "../assets/img/67.png"
const images = [
    image65,
    image66,
    image67,
    image58,
    image59,
    image60,
    image61,
    image62,
    image63,
    image64,
    image45,
    image46,
    image47,
    image48,
    image49,
    image50,
    image51,
    image52,
    image53,
    image54,
    image55,
    image56,
    image57,
    image36,
    image37,
    image38,
    image39,
    image28,
    image29,
    image30,
    image31,
    image32,
    image33,
    image34,
    image35,
    image40,
    image41,
    image42,
    image43,
    image44,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
];
const Projects = () => {

    return (
        <div className="masonry-container">
            <div className="galleryText">Gallery</div>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry gutter="10px">
                    {images.map((image, index) => (
                        <div className="masonry-item" key={index}>
                            <img
                                src={image}
                                style={{ width: "100%", display: "block" }}
                                alt={`Project ${index + 1}`}
                            />
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            <a className="insta-fixed" href="https://www.instagram.com/justpartof_art/?hl=pl" target="_blank" rel="noopener noreferrer"><img className="insta" src={insta} alt="img" /></a>
        </div>
    );
};

export default Projects;
