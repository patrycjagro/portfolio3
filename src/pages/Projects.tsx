import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./styles/project.css";
import insta from "../assets/img/png-clipart-instagram-logo-computer-icons-insta-logo-text-comput.png";

// Import all images dynamically
function importAll(r) {
    let images = [];
    r.keys().map((item, index) => {
        images.push(r(item));
    });
    return images;
}

const images = importAll(require.context("../assets/img/", false, /\.(png|jpe?g)$/));

// Function to shuffle the images array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const Projects = () => {
    // Shuffle the images array
    const shuffledImages = shuffleArray(images);

    return (
        <div className="masonry-container">
            <div className="galleryText">Gallery</div>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry gutter="10px">
                    {shuffledImages.map((image, index) => (
                        <div className="masonry-item" key={index}>
                            <img
                                src={image.default} // Accessing the default property for dynamically imported images
                                style={{ width: "100%", display: "block" }}
                                alt={`Project ${index + 1}`}
                            />
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            <a className="insta-fixed" href="https://www.instagram.com/justpartof_art/?hl=pl" target="_blank" rel="noopener noreferrer">
                <img className="insta" src={insta} alt="Instagram" />
            </a>
        </div>
    );
};

export default Projects;
