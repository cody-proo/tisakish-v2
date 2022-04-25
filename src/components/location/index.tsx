import React, { useEffect, useRef, useState } from "react";
import { CloudSvg } from "../../constants";
import "./index.scss";

const Location: React.FC = () => {
  const [isVisit, setIsVisit] = useState<boolean>(false);
  const [isSetClass, setIsClass] = useState<boolean>(false);
  const locationRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleObserver = (entry: IntersectionObserverEntry[]) => {
      if (!isSetClass && entry[0]?.isIntersecting) {
        setIsClass(true);
        setIsVisit(true);
      }
    };
    const intersectionObserver = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    if (locationRef.current) {
      intersectionObserver.observe(locationRef.current);
    }

    return () => {
      if (locationRef.current) {
        intersectionObserver.unobserve(locationRef.current);
      }
    };
  }, [isSetClass, locationRef]);

  const visitClass = isVisit ? "location__cloud--animation" : "";

  return (
    <div className="location" ref={locationRef}>
      <div className="location__content">
        <h1 className="location__title">موقعیت پروژه</h1>
        <p className="location__text">کیش - جنب میدان مرجان - قطعه VC168</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14276.266844096604!2d54.0105271!3d26.5501247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85a73f2f15638bac!2sTisa%20Shahr%20Residence%20Complex!5e0!3m2!1sen!2sde!4v1650874914124!5m2!1sen!2sde"
          className="location__map"
          allowFullScreen
          loading="lazy"
          title="salam"
        ></iframe>
      </div>

      <CloudSvg className={`location__cloud ${visitClass}`} />
    </div>
  );
};

export default Location;
