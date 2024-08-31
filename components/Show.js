"use client";
import React, { useRef, useState } from "react";
import "../styles/bodyInMotionStyle2.css";
import "../styles/bodyInMotionStyle3.css";
import "../styles/bodyInMotionextraStyle.css";
import PanZoom from "react-easy-panzoom";
import { useRouter } from "next/navigation";

const Show= () => {
  const panZoomRef = useRef(null);
  const router = useRouter();
  const [imagesList, setImagesList] = useState([
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://images.unsplash.com/photo-1587586062323-836089e60d52?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sb3Vyc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    "https://castfromclay.co.uk/wp-content/uploads/image-asset-1-1024x683.jpeg",
    "https://www.godaddy.com/resources/wp-content/uploads/social-media-images-woman-taking-photo.jpg?size=768x0",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/breathtaking-bali-nature-free-photo.jpg?w=600&quality=80",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/gorgeous-sunset-over-the-sea-free-image.jpeg?h=800&quality=80",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("currentIndex", currentIndex % 6);

  const handleZoomIn = () => {
    if (panZoomRef.current) {
      panZoomRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (panZoomRef.current) {
      panZoomRef.current.zoomOut();
    }
  };

  const handleReset = () => {
    if (panZoomRef.current) {
      panZoomRef.current.reset();
      // panZoomRef.current.autoCenter();
    }
  };
  return (
    <div id="quick_draw">
      <section className="full-screen-section fullscreen overflow-hidden quickdrav-full-section">
        <div className="full-top-timer full-top-timer-block">
          <span
            id="timer"
            className="quickdraw-timer"
            style={{ display: "block" }}
          >
            1:49
          </span>
          <img
            src="https://springfieldeducation.org/wp-content/uploads/2018/09/wallpaper-wiki-plain-blue-background-wallpaper-hd-pic-wpe006182.jpg"
            alt="Quickdraw"
            style={{
              height: "100%",
              width: "60%",
              margin: "0 20% 0 20%",
              borderRadius: "0 0 10px 10px",
            }}
          />
        </div>
        <span className="slide-full-arrow"></span>
        <PanZoom
          ref={panZoomRef}
          // enablePan={true}
          // enableZoom={true}
          zoomSpeed={0.5}
          autoCenterZoomLevel={1}
          minZoom={0.5}
          maxZoom={3}
          style={{
            minWidth: "100%",
            maxHeight: "calc(-59px + 100vh)",
            height: "calc(-59px + 100vh)",
            display: "flex",
          }}
        >
          <img
            srcSet={
              imagesList[
                currentIndex % 6 > 0 ? currentIndex % 6 : -(currentIndex % 6)
              ]
            }
            alt="SAVE IMAGE TO COLLECTION"
            style={{ width: "100%", height: "100%" }}
          />
        </PanZoom>
        <span className="slide-full-arrow slide-full-arrow-right"></span>
        <div className="full-bottom">
          <div className="save-icon-block">
            <picture>
              <img
                srcSet="https://static.vecteezy.com/system/resources/previews/000/426/000/original/vector-save-icon.jpg"
                alt="SAVE IMAGE TO COLLECTION"
                width="33"
                height="33"
              />
            </picture>
            <span>SAVE IMAGE TO COLLECTION</span>
          </div>
          <div className="bottom-slider-arrows-item d-flex align-items-center">
            <span
              className="slide-bottom-arrow"
              onClick={() => setCurrentIndex((prev) => prev + 1)}
            ></span>
            <div className="slide-bottom-current-number d-flex flex-column align-items-center">
              <span>IMAGE</span>
              <i>1</i>
            </div>
            <span
              className="slide-bottom-arrow slide-bottom-arrow-right"
              onClick={() => setCurrentIndex((prev) => prev - 1)}
            ></span>
            <div className="bottom-slider-count d-flex flex-column align-items-center">
              <span>OF</span>
              <i>10</i>
            </div>
          </div>
          <div className="scale-icon-block">
            <span
              className="scale-icon-plus"
              data-tooltip="Zoom in"
              onClick={handleZoomIn}
            >
              <picture>
                <img
                  srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQie15nPsxqCPpzRZh6wx2aDxfmTVTpG7izFQ&s"
                  alt="zoom plus image"
                />
              </picture>
            </span>
            <div className="scale-default-zoom d-flex flex-column align-items-center">
              <span>SCALE</span>
              <span
                className="motion-icon"
                data-tooltip="Reset zoom"
                data-flow="up"
                onClick={handleReset}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2618/2618245.png"
                  alt="Reset zoom"
                  width="18"
                />
              </span>
            </div>
            <span
              className="scale-icon-minus"
              data-tooltip="Zoom out"
              onClick={handleZoomOut}
            >
              <picture>
                <img
                  srcSet="https://i.pinimg.com/474x/0b/64/87/0b64876081731876d55ff50000934c62.jpg"
                  alt="zoom minus image"
                />
              </picture>
            </span>
          </div>
          <div className="exit-full-screen-icon-block">
            <picture onClick={() => router.push("/")}>
              <img
                srcSet="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"
                alt="EXIT FULL SCREEN"
              />
            </picture>
            <span>EXIT FULL SCREEN</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Show;