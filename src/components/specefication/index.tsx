import React from "react";
import "./index.scss";
import ReactSlick, { Settings } from "react-slick";

import {
  // FireSvg,
  // GardenSvg,
  GymSvg,
  // HallSvg,
  // LabiSvg,
  // LandrySvg,
  // SystemSvg,
  // SonaSvg,
} from "../../constants";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const items = [
  {
    id: "third items",
    children: [
      { id: 21, text: "زمین تنیس" },
      { id: 22, text: "زمین مینی گلف" },
      { id: 23, text: "زمین بازی کودکان" },
      { id: 24, text: "جاده سلامت" },
      { id: 25, text: "36000 متر مربع محوطه و فضای سبز" },
    ],
    title: "محوطه سازی و فضای سبز",
  },

  {
    id: "second items",
    children: [
      { id: 14, text: "استخر" },
      { id: 15, text: "سونا" },
      { id: 16, text: "جکوزی" },
      { id: 17, text: "سالن ماساژ و اسپا" },
      { id: 18, text: "باشگاه ورزشی" },
      { id: 19, text: "کافه" },
      { id: 20, text: "تراس سبز" },
    ],
    title: "مجموعه ورزشی واقع در محوطه",
  },

  {
    id: "first items",
    children: [
      { id: 1, text: "لابی اختصاصی در هر طبقه" },
      { id: 2, text: "لابی اصلی و ورودی باشکوه در همکف" },
      { id: 3, text: "3 دستگاه آسانسور" },
      { id: 4, text: "سالن بیلیارد" },
      { id: 5, text: "سالن اجتماعات" },
      { id: 6, text: "سالن بازی کودک" },
      { id: 7, text: "پارکینگ مخصوص موتور و دوچرخه" },
      { id: 8, text: "پارکینگ زیرزمینی -۱ مخصوص ماشین" },
      { id: 9, text: "پارکینگ زیرزمینی -۱ مخصوص ماشین" },
      { id: 11, text: "رست روم پرسنل" },
      { id: 12, text: "سیستم اعلام حریق" },
      { id: 13, text: "سیستم اطفاع حریق" },
    ],
    title: "امکانات مجموعه",
  },
];

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      className="specefication__arrow specefication__arrow--left"
      onClick={onClick}
    >
      <FaArrowLeft color="#fff" />
    </div>
  );
};

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      className="specefication__arrow specefication__arrow--right"
      onClick={onClick}
    >
      <FaArrowRight color="#fff" />
    </div>
  );
};

const slickOptions: Settings = {
  infinite: true,
  speed: 500,
  draggable: true,
  arrows: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  rtl: true,
  centerMode: true,
  initialSlide: 1,
  slidesPerRow: 1,
  centerPadding: "0.1px",
};

const Specefication: React.FC = () => {
  return (
    <div className="specefication">
      <div className="specefication__content">
        <ReactSlick {...slickOptions}>
          {items.map((item, index) => (
            <>
              <h1 className="specefication__title">{item.title}</h1>
              <div className="specefication__row">
                {item.children.map((itemChildren) => (
                  <div className="specefication__item" key={itemChildren.id}>
                    <GymSvg className="specefication__image" />
                    <span className="specefication__text">
                      {itemChildren.text}
                    </span>
                  </div>
                ))}
              </div>
            </>
          ))}
        </ReactSlick>
      </div>
    </div>
  );
};

export default Specefication;
