import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./styles/project.css";
import insta from "../assets/img/png-clipart-instagram-logo-computer-icons-insta-logo-text-comput.png";

// Dynamically import all images from the assets/img directory
const imagesContext = require.context("../assets/images", false, /\.(png|jpe?g)$/);
const images = imagesContext.keys().map((key: string) => imagesContext(key).default || imagesContext(key));

const Projects = () => {
    return (
        <div className="masonry-container">
            <div className="galleryText">Galeria</div>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry gutter="10px">
                    {images.map((image: string, index: number) => (
                        <div className="masonry-item" key={index}>
                            <img
                                src={image}
                                style={{ width: "100%", display: "block" }}
                                alt={`Projekt ${index + 1}`}
                            />
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            <a
                className="insta-fixed"
                href="https://www.instagram.com/justpartof_art/?hl=pl"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img className="insta" src={insta} alt="Instagram" />
            </a>
        </div>
    );
};

export default Projects;