import logo from "./img/logo.png";
import gallery_01 from "./img/gallery-img-01.jpg";
import gallery_02 from "./img/gallery-img-02.jpg";
import gallery_03 from "./img/gallery-img-03.jpg";
import gallery_04 from "./img/gallery-img-04.jpg";
import gallery_05 from "./img/gallery-img-05.jpg";
import gallery_06 from "./img/gallery-img-06.jpg";
import SliderLeft from "./icon/chevron-left.svg";
import SliderRight from "./icon/chevron-right.svg";

export default {
  logo: [
    {
      id: 1,
      img: logo,
      alt: "Logo Restaurant Demo",
    },
  ],
  gallery: [
    {
      id: 1,
      img: gallery_01,
      alt: "Imagen de galeria",
    },
    {
      id: 2,
      img: gallery_02,
      alt: "Imagen de galeria",
    },
    {
      id: 3,
      img: gallery_03,
      alt: "Imagen de galeria",
    },
    {
      id: 4,
      img: gallery_04,
      alt: "Imagen de galeria",
    },
    {
      id: 5,
      img: gallery_05,
      alt: "Imagen de galeria",
    },
    {
      id: 6,
      img: gallery_06,
      alt: "Imagen de galeria",
    },

  ],
  icon: [
    {
      id: 1,
      img: SliderLeft,
      alt: "Slider left",
    },
    {
      id: 2,
      img: SliderRight,
      alt: "Slider right",
    }
  ]
};
