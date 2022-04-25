import React, { useState } from "react";
import {
  AirSvg,
  BedSvg,
  BoxSvg,
  CabinetSvg,
  DoorSvg,
  InfoSvg,
  Plan1,
  Plan2,
  Plan3,
  Plan4,
  Plan5,
  Plan6,
  Plan7,
  Plan8,
  SquareSvg,
  TableSvg,
  TouchSvg,
  WallSvg,
  Units1Gallery1,
  Units1Gallery2,
  Units1Gallery3,
  Units1Gallery4,
  Units1Gallery5,
  Units1Gallery6,
  Units1Gallery7,
  Units1Gallery8,
  Units1Gallery9,
  Units1Gallery10,
  Units1Gallery11,
  Units1Gallery12,
  Units1Gallery13,
  Units2Gallery1,
  Units2Gallery2,
  Units2Gallery3,
  Units2Gallery4,
  Units3Gallery1,
  Units3Gallery2,
  Units3Gallery3,
  Units3Gallery4,
  Units3Gallery5,
  Units3Gallery6,
  Units4Gallery1,
  Units4Gallery2,
  Units4Gallery3,
  Units4Gallery4,
  Units4Gallery5,
  Units4Gallery6,
  Units4Gallery7,
  Units4Gallery8,
  Units4Gallery9,
  Units4Gallery10,
  Units4Gallery11,
  Units5Gallery1,
  Units5Gallery2,
  Units5Gallery3,
  Units5Gallery4,
  Units5Gallery5,
  Units5Gallery6,
  Units5Gallery7,
  Units5Gallery8,
  Units5Gallery9,
  Units6Gallery1,
  Units6Gallery2,
  Units6Gallery3,
  Units6Gallery4,
  Units6Gallery5,
  Units6Gallery6,
  Units6Gallery7,
  Units6Gallery8,
  Units7Gallery1,
  Units7Gallery2,
  Units7Gallery3,
  Units7Gallery4,
  Units7Gallery5,
  Units7Gallery6,
  Units7Gallery7,
  Units7Gallery8,
  Units7Gallery9,
  Units8Gallery1,
  Units8Gallery2,
  Units8Gallery3,
  Units8Gallery4,
  Units8Gallery5,
  Units8Gallery6,
  Units8Gallery7,
  Units8Gallery8,
  Units8Gallery9,
} from "../../constants";
import "./index.scss";

import SlickSlider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BsX } from "react-icons/bs";

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div className="slider__arrow slider__arrow--left" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div className="slider__arrow slider__arrow--right" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const slickOptions: Settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  centerPadding: "10px",
  draggable: true,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  rtl: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        arrows: false,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
};

const unitsName = [
  "واحد 1",
  "واحد 2",
  "واحد 3",
  "واحد 4",
  "واحد 5",
  "واحد 6",
  "واحد 7",
  "واحد 8",
];

const unitsLists = [
  {
    name: "واحد 1",
    area: 170.72,
    room: 1,
    model: "https://panel.polygony.ir/model/622f36647800fc07414d75c1",
    plan: Plan1,
    balcony: true,
  },
  {
    name: "واحد 2",
    area: 61.5,
    room: 0,
    model: "https://panel.polygony.ir/model/622f36ea7800fc07414d75c2",
    plan: Plan2,
    balcony: false,
  },
  {
    name: "واحد 3",
    area: 89.2,
    room: 1,
    model: "https://panel.polygony.ir/model/622f379f7800fc07414d75c3",
    plan: Plan3,
    balcony: true,
  },
  {
    name: "واحد 4",
    area: 146.48,
    room: 3,
    model: "https://panel.polygony.ir/model/622f382c7800fc07414d75c4",
    plan: Plan4,
    balcony: true,
  },
  {
    name: "واحد 5",
    area: 111.18,
    room: 2,
    model: "https://panel.polygony.ir/model/622f38ee7800fc07414d75c5",
    plan: Plan5,
    balcony: true,
  },
  {
    name: "واحد 6",
    area: 91.52,
    room: 1,
    model: "https://panel.polygony.ir/model/622f395f7800fc07414d75c6",
    plan: Plan6,
    balcony: true,
  },
  {
    name: "واحد 7",
    area: 92.23,
    room: 1,
    model: "https://panel.polygony.ir/model/6230bccd7800fc07414d75c7",
    plan: Plan7,
    balcony: true,
  },
  {
    name: "واحد 8",
    area: 90.46,
    room: 1,
    model: "https://panel.polygony.ir/model/6230bd487800fc07414d75c8",
    plan: Plan8,
    balcony: true,
  },
];

const unitsListsGallery = [
  [
    Units1Gallery4,
    Units1Gallery13,
    Units1Gallery12,
    Units1Gallery11,
    Units1Gallery10,
    Units1Gallery9,
    Units1Gallery5,
    Units1Gallery3,
    Units1Gallery2,
    Units1Gallery1,
    Units1Gallery6,
    Units1Gallery7,
    Units1Gallery8,
  ],
  [Units2Gallery1, Units2Gallery2, Units2Gallery3, Units2Gallery4],
  [
    Units3Gallery6,
    Units3Gallery5,
    Units3Gallery4,
    Units3Gallery3,
    Units3Gallery2,
    Units3Gallery1,
  ],
  [
    Units4Gallery11,
    Units4Gallery10,
    Units4Gallery9,
    Units4Gallery8,
    Units4Gallery7,
    Units4Gallery6,
    Units4Gallery5,
    Units4Gallery4,
    Units4Gallery3,
    Units4Gallery2,
    Units4Gallery1,
  ],
  [
    Units5Gallery9,
    Units5Gallery8,
    Units5Gallery7,
    Units5Gallery6,
    Units5Gallery5,
    Units5Gallery4,
    Units5Gallery3,
    Units5Gallery2,
    Units5Gallery1,
  ],
  [
    Units6Gallery8,
    Units6Gallery7,
    Units6Gallery6,
    Units6Gallery5,
    Units6Gallery4,
    Units6Gallery3,
    Units6Gallery2,
    Units6Gallery1,
  ],
  [
    Units7Gallery9,
    Units7Gallery8,
    Units7Gallery7,
    Units7Gallery6,
    Units7Gallery5,
    Units7Gallery4,
    Units7Gallery3,
    Units7Gallery2,
    Units7Gallery1,
  ],
  [
    Units8Gallery9,
    Units8Gallery7,
    Units8Gallery2,
    Units8Gallery1,
    Units8Gallery8,
    Units8Gallery6,
    Units8Gallery5,
    Units8Gallery4,
    Units8Gallery3,
  ],
];

const Units: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>();
  const isOpenClassModal = selectedPlan ? "units__modal--open" : "";
  const [selectedUnits, setSelectedUnits] = useState<number>(0);

  const handleSelectedPlan = (plan: string) => {
    setSelectedPlan(plan);
  };

  const handleCloseModal = () => {
    setSelectedPlan(undefined);
  };

  const handleSelectedUnits = (index: number) => {
    setSelectedUnits(index);
  };

  return (
    <div className="units" id="units">
      <h1 className="units__title">واحد ها</h1>
      <ul className="units__lists">
        {unitsName.map((unitItem, unitItemIndex) => (
          <li
            className={`units__item ${
              unitItemIndex === selectedUnits ? "units__item--active" : ""
            }`}
            onClick={handleSelectedUnits.bind(null, unitItemIndex)}
          >
            {unitItem}
          </li>
        ))}
      </ul>
      <div className="building">
        {unitsLists.map((unitItem, unitIndex) => {
          if (unitIndex === selectedUnits) {
            return (
              <>
                <div className="building__detail">
                  <span className="building__text building__text--bold">
                    {unitItem.name}
                  </span>
                  <span className="building__text">
                    {unitItem.area} متر مربع
                  </span>
                  <span className="building__text">
                    {unitItem.room === 0
                      ? "تاق خواب ندارد"
                      : `${unitItem.room} خواب`}{" "}
                  </span>
                  <span className="building__text">
                    {unitItem.balcony ? "بالکن دارد" : "بالکن ندارد"}
                  </span>
                </div>

                <div className="building__3d">
                  <button
                    className="building__3d-btn"
                    onClick={handleSelectedPlan.bind(null, unitItem.plan)}
                  >
                    مشاهده پلان
                  </button>
                  <iframe
                    height={"100%"}
                    width={"100%"}
                    className="building__view"
                    src={unitItem.model}
                    title="ss"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="building__info">
                  <TouchSvg className="building__touch" />
                  <p className="building__info-title">
                    برای بازدید مجازی و قدم زدن در واحد روی تصویر بالا کلیک کنید
                  </p>
                </div>
              </>
            );
          }

          return <></>;
        })}
      </div>

      <div className="features">
        <div className="features__header">
          <InfoSvg className="features__icon" />
          ویژگی ها
        </div>

        <div className="features__row">
          <div className="features__item">
            <SquareSvg className="features__item-icon" />
            <span className="features__text">سیستم شوت زباله:‌ دارد</span>
          </div>
          <div className="features__item">
            <TableSvg className="features__item-icon" />
            <span className="features__text">پوشش کف سرامیک</span>
          </div>
          <div className="features__item">
            <WallSvg className="features__item-icon" />
            <span className="features__text">
              پوشش سقف:‌کناف با پنل ضد رطوبت MR و رنگ آمیزی
            </span>
          </div>
          <div className="features__item">
            <CabinetSvg className="features__item-icon" />
            <span className="features__text">
              پنجره ها : آلومینیوم ترمال بریک
            </span>
          </div>
          <div className="features__item">
            <BedSvg className="features__item-icon" />
            <span className="features__text">در ورودی : ضد سرقت روکش چوب</span>
          </div>
          <div className="features__item">
            <DoorSvg className="features__item-icon" />
            <span className="features__text">درهای داخلی : MDF روکش CPL</span>
          </div>
          <div className="features__item">
            <BoxSvg className="features__item-icon" />
            <span className="features__text">
              سیستم سرمایش و گرمایش : اسپلیت یونیت و آبگرمکن برقی
            </span>
          </div>
          <div className="features__item">
            <AirSvg className="features__item-icon" />
            <span className="features__text">سیستم اعلام حریق: دارد</span>
          </div>
        </div>
      </div>

      <div className="slider">
        <SlickSlider initialSlide={0} {...slickOptions}>
          {unitsListsGallery[selectedUnits].map((element, index) => (
            <div key={index}>
              <img className="slider__image" alt="" src={element} />
            </div>
          ))}
        </SlickSlider>
      </div>

      <div
        className={`units__modal ${isOpenClassModal}`}
        onClick={handleCloseModal}
      >
        <div className="units__modal-close">
          <BsX />
        </div>
        <img className="units__modal-img" src={selectedPlan} alt="" />
      </div>
    </div>
  );
};

export default Units;
