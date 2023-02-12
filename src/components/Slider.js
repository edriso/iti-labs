import { useEffect, useState } from "react";

function Slider() {
  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState(false);
  const images = [
    "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1528591922185-a0eb2f8f50b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3dlZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3dlZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN3ZWV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1622028715355-ec58f12a7f9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHN3ZWV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
  ];

  const prevSlide = () => {
    if (index === 0) {
      return;
    }
    setIndex(index - 1);
  };

  const nextSlide = () => {
    if (index === 4) {
      return;
    }
    setIndex(index + 1);
  };

  useEffect(() => {
    if (slide) {
      let slideShow;
      slideShow = setInterval(() => {
        if (index === 4) {
          setIndex(0);
        } else {
          setIndex(index + 1);
        }
        clearInterval(slideShow);
      }, 1000);
    }
  }, [slide, index]);

  const autoSlide = () => {
    setSlide(true);
  };

  const stopSlide = () => {
    setSlide(false);
  };

  return (
    <section>
      <img src={images[index]} alt="sweets" width="200" height="200" />
      <p>img{index + 1}</p>

      <div className="display-flex">
        <button onClick={prevSlide}>prev</button>
        <button onClick={nextSlide}>next</button>
        <button onClick={autoSlide}>slide</button>
        <button onClick={stopSlide}>stop</button>
      </div>
    </section>
  );
}

export default Slider;
