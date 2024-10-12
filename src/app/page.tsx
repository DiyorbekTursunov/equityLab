"use client";

import Image from "next/image";
import React, { useState } from "react";
import header_logo from "./img/header_logo.svg";
import hero_bg from "./img/hero_bg.png";
import icon from "./img/icon.svg";
import icon2 from "./img/icon2.svg";
import icon3 from "./img/icon3.svg";
import right from "./img/right.svg";
import media_1 from "./img/Media-1.png";
import media_2 from "./img/media-2.png";
import media_3 from "./img/media-3.png";
import media_4 from "./img/media-4.png";
import compute_1 from "./img/compute_1.png";
import compute_2 from "./img/compute_2.png";
// import revolution_section__nvidia_logo from "@/app/img/revalution/revolution-nvidia-logo.png";
// import revolution_cpu_img from "@/app/img/revalution/revolution-cpu-img.png";


import climateImage from "./img/runtime/climate.png";
import textIconImage from "./img/runtime/text-icon.svg";
import image57 from "./img/runtime/57.png";
import image43 from "./img/runtime/43.png";
import rightImage from "./img/runtime/right'.png"; // Corrected filename without the quote
import runtimeRightImage from "./img/runtime/runtime__right.svg";

import masterImage from "./img/built/master.png";
import deluxeImage from "./img/built/deluxe.png";
import adqImage from "./img/built/adq.png";
import amgenImage from "./img/built/amgen.png";

// Use the imported images in your component

export default function Home() {
  const [inputStates, setInputStates] = useState(Array(6).fill(false));

  // Har bir inputning holatini yangilash uchun funksiya
  const handleInputClick = (index: number) => {
    setInputStates((prevState) =>
      prevState.map((state, idx) => (idx === index ? true : state))
    );
  };

  return (
    <>
      <div className="Header_top">
        <p className="Header_top_text">
          Verifiable Builds Launches with GitLab and Github
        </p>
      </div>
      <header className="header">
        <div className="header_container">
          <a href="#" className="header_logo_link">
            <Image src={header_logo} alt="" />
          </a>
          <ul className="header_nav_list">
            <li className="list_nav_item">
              <a href="#" className="header_nav_link">
                Why EQTY
              </a>
            </li>
            <li className="list_nav_item">
              <a href="#" className="header_nav_link">
                Products
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9858 1.50391L5.99288 6.49679L1 1.50391"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </a>
            </li>
            <li className="list_nav_item">
              <a href="#" className="header_nav_link">
                Technology
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9858 1.50391L5.99288 6.49679L1 1.50391"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </a>
            </li>
            <li className="list_nav_item">
              <a href="#" className="header_nav_link">
                Solutions
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9858 1.50391L5.99288 6.49679L1 1.50391"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </a>
            </li>
            <li className="list_nav_item">
              <a href="#" className="header_nav_link">
                About
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9858 1.50391L5.99288 6.49679L1 1.50391"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </a>
            </li>
            <li className="list_nav_item">
              <a href="#" className="header_nav_link">
                Partners
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9858 1.50391L5.99288 6.49679L1 1.50391"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <button className="header_sign_up_btn">
            <span className="header_sign_up_btn_round"></span>
            Sign Up
          </button>
          <button className="hamburger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>
        </div>
      </header>
      <div className="hero_big_wrapper">
        <div className="hero_big_container">
          <nav className="nav">
            <ul className="nav_list">
              <li className="nav_item">
                <a href="#" className="nav_link border_r">
                  Overview
                </a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav_link border_r pl-7">
                  Technology
                </a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav_link border_r pl-7">
                  Customer Testimonials
                </a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav_link pl-7">
                  Resources
                </a>
              </li>
            </ul>
          </nav>
          <section className="hero">
            <div className="hero_container">
              <h1 className="hero_title">Verify to Trust, AI</h1>
              <p className="hero_text">
                Introducing Verifiable Compute. <br />
                Ready for Agentic AI.
              </p>
              <p className="hero_bottom_text">
                Certify and Protect Agentic Workflows with{" "}
                <br className="hero_bottom_text_br" /> the{" "}
                <span>First Auditable Proof of Governance.</span>
              </p>
            </div>
          </section>
          <div className="hero_bg">
            <Image src={hero_bg} alt="" className="hero_bg_image" />
          </div>
        </div>
      </div>

      <section className="compute">
        <div className="compute_container">
          <h2 className="compute_title">A New Era of Compute</h2>
          <p className="compute_text">
            Launching in 2025. <br /> Evolves Trust for Agentic AI
          </p>
          <div className="compute_center">
            <div className="compute_center_card">
              <Image src={compute_1} alt="" className="compute_card_img" />
            </div>
            <div className="compute_center_logo">
              <svg
                width="165"
                height="33"
                viewBox="0 0 165 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_619_52912)">
                  <path
                    d="M6.89189 19.5627H20.6971V12.9758H6.89189V7.27823H21.6571V0.691406H0.00585938V32.9998H22.1537V26.38H6.89189V19.5627Z"
                    fill="white"
                  />
                  <path
                    d="M97.6393 0.691617L90.2566 12.3503L82.874 0.691617H52.1517V7.27844H61.6862V26.3473H51.5558C52.0855 25.6886 52.5159 24.997 52.9131 24.2725C54.105 21.9671 54.734 19.3323 54.734 16.4671C54.734 14.1287 54.3036 11.8892 53.509 9.91317C52.6814 7.90419 51.5227 6.12575 50.066 4.67665C48.6094 3.19461 46.8547 2.04192 44.8353 1.21856C42.8489 0.39521 40.6639 0 38.3796 0C36.0953 0 33.8772 0.428144 31.8909 1.21856C29.9045 2.04192 28.1499 3.19461 26.6601 4.67665C25.2035 6.15868 24.0448 7.90419 23.2171 9.91317C22.3895 11.9222 21.9922 14.1287 21.9922 16.4671C21.9922 18.8054 22.4226 21.0449 23.2171 23.021C24.0448 25.0299 25.2035 26.8084 26.6601 28.2575C28.1168 29.7395 29.8714 30.8922 31.8909 31.7156C33.8772 32.5389 36.0622 32.9341 38.3796 32.9341H68.5723V7.24551H78.802L86.8136 19.3323V32.9341H93.6997V19.3982L106.048 0.691617H97.6393ZM46.921 20.3204C46.4906 21.506 45.8947 22.5599 45.1001 23.4491C44.3056 24.3383 43.3455 25.0629 42.2199 25.5898C41.0943 26.1168 39.8032 26.3802 38.3465 26.3802C36.8899 26.3802 35.5656 26.1168 34.44 25.5898C33.3144 25.0629 32.3212 24.3383 31.5598 23.4491C30.7653 22.5599 30.1362 21.506 29.739 20.3204C29.3086 19.1018 29.0769 17.8174 29.0769 16.4671C29.0769 15.1168 29.3086 13.8323 29.739 12.6138C30.1694 11.4281 30.7653 10.3743 31.5598 9.48503C32.3543 8.59581 33.3144 7.87126 34.44 7.34431C35.5656 6.81737 36.8899 6.55389 38.3465 6.55389C39.8032 6.55389 41.0943 6.81737 42.2199 7.34431C43.3455 7.87126 44.3387 8.59581 45.1001 9.48503C45.8947 10.3743 46.5237 11.4281 46.921 12.6138C47.3513 13.8323 47.5831 15.1168 47.5831 16.4671C47.5831 17.8174 47.3513 19.1018 46.921 20.3204Z"
                    fill="white"
                  />
                  <path
                    d="M130.521 2.66797L119.165 28.6201H107.578V2.66797H104.93V31.0243H120.92L124.131 23.4823H139.227L142.339 31.0243H145.319L133.335 2.66797H130.521ZM125.157 21.0782L131.812 5.53324L138.267 21.0782H125.157Z"
                    fill="white"
                  />
                  <path
                    d="M164.505 20.3519C164.207 19.5286 163.777 18.804 163.181 18.2112C162.618 17.6184 161.956 17.1244 161.162 16.7621C160.367 16.3998 159.539 16.1693 158.579 16.1034V16.0375C160.268 15.6753 161.559 14.9837 162.386 13.9298C163.247 12.8759 163.678 11.5914 163.678 10.1753C163.678 8.56149 163.413 7.27706 162.85 6.32197C162.287 5.33395 161.592 4.57646 160.731 4.04952C159.87 3.48964 158.877 3.12736 157.785 2.96269C156.692 2.79802 155.6 2.69922 154.54 2.69922H146.33V31.0555H155.434C156.394 31.0555 157.454 30.9567 158.546 30.7262C159.672 30.5286 160.698 30.1004 161.658 29.5405C162.618 28.9477 163.413 28.1573 164.042 27.1034C164.671 26.0825 165.002 24.7322 165.002 23.1184C164.969 22.0974 164.803 21.1753 164.505 20.3519ZM154.871 5.07048C155.699 5.07048 156.494 5.13634 157.255 5.30102C158.016 5.46569 158.679 5.72916 159.241 6.12437C159.804 6.51958 160.268 7.04652 160.599 7.67227C160.93 8.33096 161.095 9.15431 161.095 10.1423C161.095 10.6034 161.029 11.0974 160.864 11.6573C160.698 12.2172 160.367 12.7112 159.904 13.2052C159.407 13.6992 158.745 14.0944 157.884 14.4238C157.023 14.7531 155.898 14.9178 154.54 14.9178H149.012L148.979 5.07048H154.871ZM162.055 24.8639C161.89 25.4896 161.526 26.0825 161.029 26.6423C160.533 27.2022 159.771 27.6633 158.844 28.0585C157.884 28.4208 156.626 28.6184 155.07 28.6184H148.979V17.322H155.467C156.295 17.322 157.123 17.4208 157.95 17.6513C158.778 17.8489 159.506 18.2112 160.135 18.6723C160.764 19.1334 161.294 19.7591 161.691 20.4837C162.089 21.2411 162.287 22.1304 162.287 23.1513C162.32 23.6783 162.221 24.2381 162.055 24.8639Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_619_52912">
                    <rect width="165" height="33" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="compute_center_card compute_center_card_2">
              <Image src={compute_2} alt="" className="compute_card_img" />
            </div>
          </div>
          <div className="compute_bottom_card">
            <h3 className="compute_card_title">
              Introduction: <br />
              Verifiable Compute
            </h3>
            <h4 className="compute_card_title_2">How does it work?</h4>
            <button className="compute_card_btn">
              <span className="compute_card_btn_round"></span>
              Video: Learn more
            </button>
          </div>
        </div>
      </section>

      <section className="site-control-wrapper">
        <div className="container">
          <div className="site-control">
            <div className="site-control__title">
              <h1>A Control Plane for Autonomous AI</h1>
            </div>
            <button className="site-control__btn">
              {" "}
              <span className="site-control__span" /> Learn More about Agentic
              AI
            </button>
            <div className="site-control__title-text">
              <h3>
                Verifiable Compute enables best-in-class compliance as you:
              </h3>
            </div>
          </div>
          <ul className="site-control__list">
            <li className="site-control__item">
              <div className="site-control__list-img">
                <Image
                  className="site-control__img"
                  src={media_1}
                  alt="control-media"
                  width={116}
                  height={116}
                />
              </div>
              <h2>Create</h2>
              <h3>Agents</h3>
            </li>
            <li className="site-control__item">
              <div className="site-control__list-img">
                <Image
                  className="site-control__img"
                  src={media_2}
                  alt="control-media"
                  width={116}
                  height={116}
                />
              </div>
              <h2>Provision</h2>
              <h3>Agents</h3>
            </li>
            <li className="site-control__item">
              <div className="site-control__list-img">
                <Image
                  className="site-control__img"
                  src={media_3}
                  alt="control-media"
                  width={116}
                  height={116}
                />
              </div>
              <h2>Operate</h2>
              <h3>Agents</h3>
            </li>
            <li className="site-control__item">
              <div className="site-control__list-img">
                <Image
                  className="site-control__img"
                  src={media_4}
                  alt="control-media"
                  width={116}
                  height={116}
                />
              </div>
              <h2>Network</h2>
              <h3>Agents</h3>
            </li>
          </ul>
        </div>
      </section>
      <section className="progressive">
        <div className="progressive__container">
          <h2 className="progressive__title">Progressive Precision</h2>
          <div className="progressive__wrap">
            <div className="progressive__cart">
              <h3 className="progressive__cart__title">
                Verifiable <br /> Builder
              </h3>
              <p className="progressive__cart__text">
                <span className="progressive__cart__text__span">
                  Verify AI app builds{" "}
                </span>{" "}
                <br />
                with a secure Gitlab and Github runner
              </p>
            </div>
            <div className="progressive__cart">
              <h3 className="progressive__cart__title">
                Verifiable <br /> Gateway
              </h3>
              <p className="progressive__cart__text">
                <span className="progressive__cart__text__span">
                  Witness 3rd party API{" "}
                </span>
                calls <br /> to open and closed source models
              </p>
            </div>
            <div className="progressive__cart">
              <h3 className="progressive__cart__title">
                Verifiable <br /> Container
              </h3>
              <p className="progressive__cart__text">
                <span className="progressive__cart__text__span">
                  Notarize any docker container{" "}
                </span>
                to create verifiable runtime of AI models and agents
              </p>
            </div>
            <div className="progressive__cart">
              <h3 className="progressive__cart__title">
                Software <br /> Development Kit
              </h3>
              <p className="progressive__cart__text">
                <span className="progressive__cart__text__span">
                  Develop with our SDK
                </span>
                to <br /> verify granular AI system activity.
              </p>
            </div>
          </div>
          <div className="progressive__download">
            <div className="progressive__box">
              <h2 className="progressive__box__title">
                Explore deployment <br />
                options for
              </h2>
              <a href="" className="progressive__box__link">
                Verifiable AI
              </a>
              <button className="progressive__box__btn">
                <div className="progressive__box__span"></div>
                Download White paper
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="customer">
        <div className="customer__container">
          <h2 className="customer__title">Customer Success Stories</h2>
          <div className="customer__wrap">
            <a href="" className="customer__wrap__link">
              Public Sector
            </a>
            <a href="" className="customer__wrap__link1">
              Life Sciences
            </a>
            <a href="" className="customer__wrap__link2">
              Energy
            </a>
            <a href="" className="customer__wrap__link3">
              Arts
            </a>
            <a href="" className="customer__wrap__link4">
              Voiceover
            </a>
            <a href="" className="customer__wrap__link5">
              <Image src={icon} alt="" />
            </a>
            <a href="" className="customer__wrap__link6">
              <Image src={icon2} alt="" />
            </a>
            <a href="" className="customer__wrap__link7">
              <Image src={icon3} alt="" />
            </a>
          </div>
        </div>
      </section>

      {/*  */}

      <section className="dont">
        <div className="dont__container">
          <div className="dont__wrap">
            <div className="dont__wrap__left">
              <div className="dont__wrap__left__qart">
                <a href="" className="dont__wrap__left__link">
                  The Opportunity:
                </a>
                <h2 className="dont__wrap__left__title">
                  Don't Just
                  <br /> Trust AI
                </h2>
                <p className="dont__wrap__left__text">
                  At Runtime,{" "}
                  <span className="dont__wrap__left__span">Verify</span>
                </p>
              </div>
              <div className="progressive__download">
                <div className="progressive__box">
                  <h2 className="progressive__box__title">
                    Explore deployment <br />
                    options for
                  </h2>
                  <a href="" className="progressive__box__link">
                    Verifiable AI
                  </a>
                  <button className="progressive__box__btn">
                    <div className="progressive__box__span" />
                    Download White paper
                  </button>
                </div>
              </div>
            </div>
            <div className="dont__wrap__right">
              <div className="dont__wrap__right__cart__one">
                <h2 className="dont__wrap__right__title">
                  AI Training and Inference
                </h2>
                <p className="dont__wrap__right__text">
                  Proof AI deployments are untampered
                </p>
              </div>
              <div className="dont__wrap__right__cart__two">
                <h2 className="dont__wrap__right__title">AI Privacy</h2>
                <p className="dont__wrap__right__text">
                  Proof AI models and data are confidential
                </p>
              </div>
              <div className="dont__wrap__right__cart dont__wrap__right__cart__active">
                <h2 className="dont__wrap__right__title dont__wrap__right__title__active">
                  AI Safeguards
                </h2>
                <p className="dont__wrap__right__text dont__wrap__right__text__active">
                  Proof AI guardrails are implemented
                </p>
              </div>
              <div className="dont__wrap__right__cart__three">
                <h2 className="dont__wrap__right__title">AI Benchmarks</h2>
                <p className="dont__wrap__right__text">
                  Proof AI systems are performant
                </p>
              </div>
              <div className="dont__wrap__right__cart__tort">
                <h2 className="dont__wrap__right__title">AI FinOps</h2>
                <p className="dont__wrap__right__text">
                  Proof AI workloads stay in budget
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="runtime">
        <div className="runtime__container">
          <div className="runtime__wrap">
            <div className="runtime__box">
              <h2 className="runtime__wrap__left__title">
                At Runtime,{" "}
                <span className="runtime__wrap__left__title__span">Verify</span>
              </h2>
              <div className="runtime__wrap__left">
                <div className="runtime__wrap__left__cart">
                  <Image
                    src={climateImage}
                    className="runtime__wrap__cart__pic"
                    alt=""
                  />
                  <div className="runtime__wrap__left__cart__box">
                    <Image
                      src={textIconImage}
                      className="runtime__wrap__left__cart__box__icon"
                      alt=""
                    />
                    <div className="runtime-cart">
                      <Image
                        src={image57}
                        alt=""
                        className="runtime__wrap__left__cart__box__pices"
                      />
                      <Image
                        src={image43}
                        alt=""
                        className="runtime__wrap__left__cart__box__pices runtime__wrap__left__cart__box__pices__active"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="runtime__wrap__right">
                <Image
                  src={rightImage}
                  alt=""
                  className="runtime__wrap__right__banner"
                />
              </div>
            </div>
            <div className="runtime__right__box">
              <div className="runtime__right__cart">
                <h2 className="runtime__right__cart__title">AI Governance</h2>
                <p className="runtime__right__cart__text">
                  Proof AI processes are compliant
                </p>
              </div>
              <ul className="runtime__right__list1">
                <li className="runtime__right__item">
                  <a href="" className="runtime__right__link">
                    <Image src={runtimeRightImage} alt="" />
                    Minimize Risks
                  </a>
                </li>
                <li className="runtime__right__item">
                  <a href="" className="runtime__right__link">
                    <Image src={runtimeRightImage} alt="" />
                    Automate Auditing
                  </a>
                </li>
              </ul>
              <ul className="runtime__right__list">
                <li className="runtime__right__item">
                  <a href="" className="runtime__right__link">
                    <Image src={runtimeRightImage} alt="" />
                    Respond to Incidents
                  </a>
                </li>
                <li className="runtime__right__item">
                  <a href="" className="runtime__right__link">
                    <Image src={runtimeRightImage} alt="" />
                    Align Collaboration
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="built">
        <div className="built__container">
          <a href="" className="built__link">
            Our Customer{" "}
          </a>
          <h2 className="built__title">
            Built For Industry
            <br /> Leaders
          </h2>
          <div className="built__line" />
          <div className="built__wrap">
            <div className="progressive__download progressive__download__active">
              <div className="progressive__box">
                <h2 className="progressive__box__title">
                  Explore deployment <br />
                  options for
                </h2>
                <a href="" className="progressive__box__link">
                  Verifiable AI
                </a>
                <button className="progressive__box__btn">
                  <div className="progressive__box__span" />
                  Download White paper
                </button>
              </div>
            </div>
            <ul className="built__wrap__list">
              <li className="built__wrap__item">
                <a href="" className="built__wrap__link">
                  <Image src={masterImage} alt="" />
                </a>
              </li>
              <li className="built__wrap__item">
                <a href="" className="built__wrap__link">
                  <Image src={deluxeImage} alt="" />
                </a>
              </li>
              <li className="built__wrap__item">
                <a href="" className="built__wrap__link">
                  <Image src={adqImage} alt="" />
                </a>
              </li>
              <li className="built__wrap__item">
                <a href="" className="built__wrap__link">
                  <Image src={amgenImage} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/*  */}

      {/* This is for Diyorbek Start */}
      <section className="trust-evolves">
        <h2 className="trust-evolves__title">Trust Evolves</h2>
      </section>
      <section className="revolution-section">
        <div className="revolution-section__container">
          <div className="revolution-section__content">
            <div className="revolution-section__header">
              <span className="revolution-section__header-text">
                A Revolution
              </span>
            </div>

            <h2 className="revolution-section__title">
              Two Powerhouses in compute come together
            </h2>
          </div>
        </div>
      </section>
      {/* This is for Diyorbek End */}
      <section className="resources">
        <div className="resources__container">
          <h2 className="resources__title">Resources</h2>
          <div className="resources__wrap">
            <div className="resources__wrap__cart">
              <div className="resources__wrap__cart__container">
                <h2 className="resources__wrap__cart__title">Report</h2>
                <p className="resources__wrap__cart__text">
                  Trail of Bits and EQTY survey the security risk in your
                  agentic AI workflows.
                </p>
                <a href="" className="resources__wrap__cart__link">
                  Read
                  <Image
                    src={right}
                    alt=""
                    className="resources__wrap__cart__icon"
                  />
                </a>
              </div>
            </div>
            <div className="resources__wrap__cart">
              <div className="resources__wrap__cart__container">
                <h2 className="resources__wrap__cart__title">Announcement</h2>
                <p className="resources__wrap__cart__text">
                  EQTY Partners with Foundry to bring verifiable compute across
                  North America.
                </p>
                <a href="" className="resources__wrap__cart__link">
                  Read
                  <Image
                    src={right}
                    alt=""
                    className="resources__wrap__cart__icon"
                  />
                </a>
              </div>
            </div>
            <div className="resources__wrap__cart">
              <div className="resources__wrap__cart__container">
                <h2 className="resources__wrap__cart__title">Whitepaper</h2>
                <p className="resources__wrap__cart__text1">
                  EQTY + NVIDIA + Intel Verifiable Compute whitepaper
                </p>
                <a href="" className="resources__wrap__cart__link">
                  Read
                  <Image
                    src={right}
                    alt=""
                    className="resources__wrap__cart__icon"
                  />
                </a>
              </div>
            </div>
            <div className="resources__wrap__cart">
              <div className="resources__wrap__cart__container">
                <h2 className="resources__wrap__cart__title">Announcement</h2>
                <p className="resources__wrap__cart__text2">
                  EQTY joins the Linux Foundation&apos;s SLSA working group to
                  strengthen Agentic AI supply chains.
                </p>

                <a href="" className="resources__wrap__cart__link">
                  Read
                  <Image
                    src={right}
                    alt=""
                    className="resources__wrap__cart__icon"
                  />
                </a>
              </div>
            </div>
            <div className="resources__wrap__cart">
              <div className="resources__wrap__cart__container">
                <h2 className="resources__wrap__cart__title">Announcement</h2>
                <p className="resources__wrap__cart__text">
                  EQTY announces new cryptographic features across the Hedera
                  ecosystem.
                </p>
                <a href="" className="resources__wrap__cart__link">
                  Read
                  <Image
                    src={right}
                    alt=""
                    className="resources__wrap__cart__icon"
                  />
                </a>
              </div>
            </div>
            <div className="resources__wrap__cart">
              <div className="resources__wrap__cart__container">
                <h2 className="resources__wrap__cart__title">Announcement</h2>
                <p className="resources__wrap__cart__text">
                  EQTY partners with Databricks to unlock verifiable agentic
                  governance.
                </p>
                <a href="" className="resources__wrap__cart__link">
                  Read
                  <Image
                    src={right}
                    alt=""
                    className="resources__wrap__cart__icon"
                  />
                </a>
              </div>
            </div>
            <div className="resources__wrap__cart">
              <div className="resources__wrap__cart__container">
                <h2 className="resources__wrap__cart__title">Report</h2>
                <p className="resources__wrap__cart__text">
                  Learn how EQTY brings new levels of verifiability to agentic
                  workflows.
                </p>
                <a href="" className="resources__wrap__cart__link">
                  Read
                  <Image
                    src={right}
                    alt=""
                    className="resources__wrap__cart__icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer_top_responsive">
        <div className="footer_top_responsive_container">
          <div className="footer_left_responsive">
            <h2 className="footer_title_responsive">
              <span>Ready</span> for Verifiable Compute?
            </h2>
            <p className="footer_text">Schedule a demo</p>
          </div>
          <div className="footer_right_responsive">
            <form className="footer_form_responsive">
              <div className="footer_form_box_responsive">
                {[
                  { label: "First Name", id: "firstname", name: "firstname" },
                  { label: "Last Name", id: "lastname", name: "lastname" },
                  { label: "Company", id: "company", name: "company" },
                  { label: "Job Title", id: "jobtitle", name: "jobtitle" },
                  { label: "Business Email", id: "email", name: "email" },
                  { label: "Country", id: "country", name: "country" },
                ].map((field, index) => (
                  <div
                    onClick={() => handleInputClick(index)} // Har bir input bosilganda funksiyani chaqirish
                    key={field.id}
                    className="footer_inp_box"
                  >
                    <span className="footer_inp_round"></span>
                    <label
                      className={`transition_default ${
                        inputStates[index]
                          ? "footer_active_inp_label"
                          : "footer_inp_label"
                      }`}
                      htmlFor={field.id}
                    >
                      {field.label}
                    </label>
                    <input
                      type="text"
                      id={field.id}
                      name={field.name}
                      className="footer_inp"
                    />
                  </div>
                ))}
              </div>
              <button type="button" className="footer_sign_up_btn">
                <span className="footer_sign_up_btn_round"></span>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer_container">
          <div className="footer_top">
            <div className="footer_left">
              <h2 className="footer_title">
                <span>Ready</span> for Verifiable Compute?
              </h2>
              <p className="footer_text">Schedule a demo</p>
            </div>
            <div className="footer_right">
              <form className="footer_form">
                <div className="footer_form_box">
                  {[
                    { label: "First Name", id: "firstname", name: "firstname" },
                    { label: "Last Name", id: "lastname", name: "lastname" },
                    { label: "Company", id: "company", name: "company" },
                    { label: "Job Title", id: "jobtitle", name: "jobtitle" },
                    { label: "Business Email", id: "email", name: "email" },
                    { label: "Country", id: "country", name: "country" },
                  ].map((field, index) => (
                    <div
                      onClick={() => handleInputClick(index)} // Har bir input bosilganda funksiyani chaqirish
                      key={field.id}
                      className="footer_inp_box"
                    >
                      <span className="footer_inp_round"></span>
                      <label
                        className={`transition_default ${
                          inputStates[index]
                            ? "footer_active_inp_label"
                            : "footer_inp_label"
                        }`}
                        htmlFor={field.id}
                      >
                        {field.label}
                      </label>
                      <input
                        type="text"
                        id={field.id}
                        name={field.name}
                        className="footer_inp"
                      />
                    </div>
                  ))}
                </div>
                <button type="button" className="footer_sign_up_btn">
                  <span className="footer_sign_up_btn_round"></span>
                  Sign Up
                </button>
              </form>
            </div>
          </div>
          <div className="footer_bottom">
            <a href="#" className="header_logo_link">
              <svg
                width="171"
                height="34"
                viewBox="0 0 171 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.13643 20.1547H21.4436V13.3681H7.13643V7.4976H22.4386V0.710938H0V33.9995H22.9532V27.1789H7.13643V20.1547Z"
                  fill="black"
                />
                <path
                  d="M101.179 0.712592L93.528 12.725L85.8769 0.712592H54.0375V7.49926H63.9187V27.1467H53.4199C53.9688 26.468 54.4149 25.7554 54.8266 25.0089C56.0617 22.6335 56.7136 19.9189 56.7136 16.9667C56.7136 14.0145 56.2676 12.2499 55.4442 10.2139C54.5864 8.14399 53.3856 6.31159 51.8759 4.81853C50.3663 3.29153 48.5479 2.10386 46.455 1.25553C44.3964 0.407194 42.132 0 39.7646 0C37.3972 0 35.0985 0.441127 33.0399 1.25553C30.9813 2.10386 29.1629 3.29153 27.6189 4.81853C26.1093 6.34553 24.9085 8.14399 24.0507 10.2139C23.193 12.2839 22.7812 14.5574 22.7812 16.9667C22.7812 19.3759 23.2273 21.6834 24.0507 23.7194C24.9085 25.7893 26.1093 27.6217 27.6189 29.1148C29.1286 30.6418 30.947 31.8295 33.0399 32.6778C35.0985 33.5261 37.3629 33.9333 39.7646 33.9333H71.0551V7.46533H81.6569L89.9598 19.9189V33.9333H97.0963V19.9867L109.894 0.712592H101.179ZM48.6165 20.9369C48.1705 22.1585 47.5529 23.2443 46.7295 24.1605C45.906 25.0767 44.9111 25.8233 43.7445 26.3662C42.578 26.9091 41.2399 27.1806 39.7303 27.1806C38.2207 27.1806 36.8483 26.9091 35.6817 26.3662C34.5152 25.8233 33.4859 25.0767 32.6968 24.1605C31.8733 23.2443 31.2215 22.1585 30.8097 20.9369C30.3637 19.6813 30.1235 18.3579 30.1235 16.9667C30.1235 15.5754 30.3637 14.252 30.8097 12.9965C31.2558 11.7749 31.8733 10.689 32.6968 9.77279C33.5202 8.85659 34.5152 8.11006 35.6817 7.56713C36.8483 7.02419 38.2207 6.75273 39.7303 6.75273C41.2399 6.75273 42.578 7.02419 43.7445 7.56713C44.9111 8.11006 45.9404 8.85659 46.7295 9.77279C47.5529 10.689 48.2048 11.7749 48.6165 12.9965C49.0625 14.252 49.3027 15.5754 49.3027 16.9667C49.3027 18.3579 49.0625 19.6813 48.6165 20.9369Z"
                  fill="black"
                />
                <path
                  d="M135.249 2.75L123.481 29.4895H111.472V2.75H108.728V31.9666H125.299L128.627 24.1959H144.272L147.498 31.9666H150.585L138.165 2.75H135.249ZM129.691 21.7187L136.587 5.7022L143.278 21.7187H129.691Z"
                  fill="black"
                />
                <path
                  d="M170.485 20.9734C170.177 20.1251 169.731 19.3786 169.113 18.7678C168.53 18.157 167.844 17.648 167.02 17.2747C166.197 16.9014 165.339 16.6639 164.344 16.596V16.5282C166.094 16.1549 167.432 15.4423 168.29 14.3564C169.182 13.2706 169.628 11.9472 169.628 10.488C169.628 9.02889 169.353 7.50189 168.77 6.51782C168.187 5.49982 167.466 4.71936 166.574 4.17642C165.682 3.59956 164.653 3.2263 163.521 3.05663C162.388 2.88696 161.256 2.78516 160.158 2.78516H151.649V32.0018H161.085C162.08 32.0018 163.178 31.9 164.31 31.6624C165.476 31.4588 166.54 31.0177 167.535 30.4408C168.53 29.83 169.353 29.0156 170.005 27.9298C170.657 26.8778 171 25.4866 171 23.8238C170.966 22.7719 170.794 21.8218 170.485 20.9734ZM160.501 5.22836C161.359 5.22836 162.183 5.29622 162.972 5.46589C163.761 5.63555 164.447 5.90702 165.03 6.31422C165.613 6.72142 166.094 7.26436 166.437 7.90909C166.78 8.58776 166.952 9.43609 166.952 10.4541C166.952 11.4721 166.883 11.4382 166.711 12.015C166.54 12.5919 166.197 13.1009 165.716 13.6099C165.202 14.1189 164.516 14.5261 163.624 14.8654C162.731 15.2048 161.565 15.3744 160.158 15.3744H154.429V5.22836H160.501ZM167.947 25.6223C167.775 26.267 167.398 26.8778 166.883 27.4547C166.368 28.0316 165.579 28.5066 164.619 28.9138C163.624 29.2871 162.32 29.4907 160.707 29.4907H154.394V17.8516H161.119C161.977 17.8516 162.834 17.9534 163.692 18.1909C164.55 18.3945 165.305 18.7678 165.957 19.2428C166.608 19.7179 167.157 20.3626 167.569 21.1092C167.981 21.8896 168.187 22.8058 168.187 23.8578C168.221 24.4007 168.118 24.9776 167.947 25.6223Z"
                  fill="black"
                />
              </svg>
            </a>
            <p className="footer_bottom_text">
              2024 EQTY Lab AG, All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <div className="cards-pages__container">
        <div className="cards-pages__inner">
          <div className="cards-pages__text">cards pages</div>
        </div>
      </div>
    </>
  );
}
