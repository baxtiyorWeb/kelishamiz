import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Slider() {
  return (
    <div className="mt-[50px] slider-home">
      <Carousel
        emulateTouch
        autoFocus
        autoPlay
        transitionTime={300}
        infiniteLoop
        swipeable
        showIndicators={false}
        showStatus={false}
      >
        <div className="h-[600px] w-full flex-shrink-0 rounded-[10px]">
          <img
            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            className="h-full w-full "
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?cs=srgb&dl=pexels-francesco-ungaro-1525041.jpg&fm=jpg"
            className="h-[600px] w-full "
          />
        </div>
        <div>
          <img
            src="https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg"
            className="h-[600px] w-full "
          />
        </div>
      </Carousel>
    </div>
  );
}
