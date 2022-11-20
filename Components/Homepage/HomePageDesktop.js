import butterflyImg from "../../Assets/butterfly.png";
import circleLinesImg from "../../Assets/circlelines.png";
import patriciaImg from "../../Assets/patricia.png";
import obiexImg from "../../Assets/obiex.png";
import carbonImg from "../../Assets/carbon.png";
import cardImg from "../../Assets/card.png";
import Image from "next/image";
import { Fragment } from "react";
import bigCircleImg from "../../Assets/bigcircle.png";
import pointerLineImg from "../../Assets/pointerline.png";
import apiImg from "../../Assets/api.png";
import atmImg from "../../Assets/atm.png";
import cutCircleImg from "../../Assets/cutcircle.png";
import curvedLineImg from "../../Assets/curvedline.png";
import consoleImg from "../../Assets/console.png";
import metricsImg from "../../Assets/metrics.png";
import communityImg from "../../Assets/community.png";
import documentationImg from "../../Assets/documentation.png";
import patriciaPictureImg from "../../Assets/patriciapicture.png";


const HomePageDesktop = () => {

  return (
    <Fragment>
      <div className="w-full h-[49.5rem] bg-[#000000]">
        <div className="flex">
          <div>
            <h1 className="text-[#f8f7fa] w-[37rem] mt-20 ml-12 h-44 text-6xl font-bold text-left">
              API Development for Fintech Solutions
            </h1>
            <hr className="bg-[#fdbc1f] w-32 ml-12 h-[4px]" />
            <p className=" h-36 w-[46rem] text-[#f8f7fa] mt-5 text-4xl font-semibold text-left ml-12">
              We provide API development and other professional tools for
              fintechs for them to build a great solution out there.{" "}
            </p>
            <button className=" w-96 h-20 rounded-xl mt-14 ml-12 hover:scale-105 duration-500 text-[#3a3a3a] text-4xl font-semibold bg-[#f8f7fa] hover:">
              Explore Zenfin
            </button>
          </div>
          <div>
            <Image src={butterflyImg} alt="butterfly" />
            <Image src={circleLinesImg} alt=" circlelines" />
          </div>
        </div>
      </div>
      <div className="w-full h-64 bg-[#ffffff]">
        <p className=" w-[60rem] h-10 text-[#fdbc1f] text-4xl text-center mt-24 mx-auto">
          Trusted by more than 300 Leading Fintechs in Africa
        </p>
      </div>
      <div className="flex p-[10rem] justify-evenly" layout="fill">
        <Image className=" w-64 h-12" src={patriciaImg} alt="patriciaImg" />
        <Image className="w-36 h-12" src={obiexImg} alt="obiexImg" />
        <Image className="w-52 h-12" src={carbonImg} alt="carbonImg" />
      </div>
      <div className="w-full pt-40 h-[130rem] bg-[#f8f7fa]">
        <div className="flex justify-between">
          <div>
            <hr className="bg-[rgb(253,188,31)] w-16 ml-12 h-[4px]" />
            <p className="w-full h-10 font-bold text-5xl ml-12 mt-10 text-left text-[#3a3a3a]">
              What is Zenfin?
            </p>
            <p className="h-20 w-full ml-12 mt-8 text-3xl font-semibold text-[#a6a6aa]">
              The solution every fintech needs
            </p>
          </div>
          <div>
            <p className="w-[44rem] mr-10 h-48 text-2xl text-[#3a3a3a] mt-5">
              Lorem ipsum dolor sit amet consectetur. Ultrices nunc lectus sem
              sit nullam blandit velit diam enim. Placerat ac id semper leo sed
              vitae. Consectetur at etiam vitae nulla non ante iaculis.
              Vestibulum diam turpis dignissim ac suspendisse a sagittis.
            </p>
          </div>
        </div>
        <div className="flex mt-[16rem] justify-between">
          <div>
            <hr className="bg-[rgb(253,188,31)] w-16 ml-12 h-[4px]" />
            <p className="w-full h-10 font-bold text-5xl ml-12 mt-10 text-left text-[#3a3a3a]">
              Our Products
            </p>
            <p className="h-20 w-full ml-12 mt-8 text-3xl font-semibold text-[#a6a6aa]">
              The solution every fintech needs
            </p>
          </div>
          <div className="flex w-[45rem] rounded-xl mr-10 h-80 bg-[#ffffff]">
            <Image className="h-48 w-60" src={cardImg} alt="card" />
            <div className="mt-10">
              <p className="w-56 h-8 text-2xl font-bold text-[#3a3a3a] ">
                Virtual Dollar Card
              </p>
              <p className="w-[33rem] pr-5 h-40 text-2xl text-[#3a3a3a]">
                Lorem ipsum dolor sit amet consectetur. Ultrices nunc lectus sem
                sit nullam blandit velit diam enim. Placerat ac id semper leo
                sed vitae. Consectetur at etiam vitae nulla.
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-[16rem]">
          <div>
            <Image className="absolute" src={bigCircleImg} alt="bigcircle" />
            <Image
              className="absolute"
              src={pointerLineImg}
              alt="pointerline"
            />
          </div>
          <div>
            <div className="flex absolute left-[35rem] w-[45rem] rounded-xl mr-10 h-80 bg-[#ffffff]">
              <Image className="h-48 w-60" src={atmImg} alt="card" />
              <div className="mt-10">
                <p className="w-full h-8 text-2xl font-bold text-[#3a3a3a] ">
                  Dedicated Virtual Account Number
                </p>
                <p className="w-[33rem] pr-5 h-40 text-2xl text-[#3a3a3a]">
                  Lorem ipsum dolor sit amet consectetur. Ultrices nunc lectus
                  sem sit nullam blandit velit diam enim. Placerat ac id semper
                  leo sed vitae. Consectetur at etiam vitae nulla.
                </p>
              </div>
            </div>
            <div className="flex z-10 top-[199rem] left-[35rem] absolute w-[45rem] rounded-xl mr-10 h-80 bg-[#ffffff]">
              <Image className="h-48 w-60" src={apiImg} alt="card" />
              <div className="mt-10">
                <p className="w-56 h-8 text-2xl font-bold text-[#3a3a3a] ">
                  APIs
                </p>
                <p className="w-[33rem] pr-5 h-40 text-2xl text-[#3a3a3a]">
                  Lorem ipsum dolor sit amet consectetur. Ultrices nunc lectus
                  sem sit nullam blandit velit diam enim. Placerat ac id semper
                  leo sed vitae. Consectetur at etiam vitae nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="absolute top-[205rem] right-0"
          src={cutCircleImg}
          alt="cutcircle"
        />
      </div>
      <div className="w-full h-[260rem] bg-[#ffffff]">
        <div>
          <p className="w-full h-12 text-5xl mt-[5rem] text-center font-extrabold text-[#3a3a3a]">
            Our Pay as you Grow Pricing model
          </p>
          <p className=" h-32 w-[44rem] mx-auto mt-12 text-[#a6a6aa] text-3xl text-center font-medium">
            You don’t have to worry about a fixed pricing, you only as your card
            transactions and issuance increases.
          </p>
          {/* <Image src={curvedLineImg} alt="curvedline" /> */}
        </div>
        <div className="flex justify-between mt-[10rem]">
          <div>
            <hr className="bg-[rgb(253,188,31)] w-16 ml-12 h-[4px]" />
            <p className="w-[34rem] h-10 font-bold text-5xl ml-12 mt-10 text-left text-[#3a3a3a]">
              A better Experience for your developers at every step
            </p>
            <p className="h-20 w-[30rem] ml-12 mt-[8rem] text-3xl font-semibold text-[#a6a6aa]">
              Zenfin open source and pro tools have helped millions of ApI
              developers, teams and finance organizations deliver great APIs.
            </p>
          </div>
          <div>
            <Image
              className="w-[37rem] h-[28rem]"
              src={consoleImg}
              alt="console"
            />
          </div>
        </div>
        <div className="flex mt-[10rem] justify-around">
          <div className="w-[35rem] h-[29rem] border-2 border-[#a6a6aa] rounded-xl">
            <Image
              className="mt-[3rem] ml-[12rem]"
              src={documentationImg}
              alt="documentation"
            />
            <p className="w-full h-8 mt-8 text-center text-3xl font-bold text-[#000000]">
              Documentation
            </p>
            <p className="w-full h-16 text-2xl text-center text-[#3a3a3a]">
              Easy-to-edit guides to help developers get started.
            </p>
          </div>
          <div className="w-[35rem] h-[29rem] border-2 border-[#a6a6aa] rounded-xl">
            {" "}
            <Image
              className="mt-[3rem] ml-[12rem]"
              src={metricsImg}
              alt="metrics"
            />
            <p className="w-full h-8 mt-8 text-center text-3xl font-bold text-[#000000]">
              Metrics
            </p>
            <p className="w-full h-16 text-2xl text-center text-[#3a3a3a]">
              Easy-to-edit guides to help developers get started.
            </p>
          </div>
        </div>
        <div className="w-[35rem] mt-[7rem] mx-auto h-[29rem] border-2 border-[#a6a6aa] rounded-xl">
          {" "}
          <Image
            className="mt-[3rem] ml-[12rem]"
            src={communityImg}
            alt="community"
          />
          <p className="w-full h-8 text-center text-3xl font-bold mt-8 text-[#000000]">
            Community
          </p>
          <p className="w-full h-16 text-2xl text-center text-[#3a3a3a]">
            Changelog and more to keep users in the loop.
          </p>
        </div>
        <div className="flex gap-14 w-[68rem] mt-[15rem] h-[30rem] bg-[#f8f7fa] rounded-2xl mx-auto">
          <div>
            <Image
              className="w-[30rem] h-[30rem]"
              src={patriciaPictureImg}
              alt="patriciapicture"
            />
          </div>
          <div>
            <p className="w-[32rem] h-40 mt-[10rem] text-2xl text-[#3a3a3a] font-medium">
              Lorem ipsum dolor sit amet consectetur. Ultrices nunc lectus sem
              sit nullam blandit velit diam enim. Placerat ac id semper leo sed
              vitae. Consectetur at etiam vitae nulla.
            </p>
            <p className="w-32 h-8 text-2xl font-bold text-[#3a3a3a]">
              Community
            </p>
            <p className="h-8 w-40 text-2xl text-[#a6a6aa]">Hanu, Patricia</p>
          </div>
        </div>
        <div className="flex mt-[10rem]">
          <div>
            <hr className="bg-[rgb(253,188,31)] w-16 ml-12 h-[4px]" />
            <p className="w-[34rem] h-10 font-bold text-5xl ml-12 mt-10 text-left text-[#3a3a3a]">
              Get Started
            </p>
            <p className="h-20 w-[26rem] ml-12 mt-[8rem] text-3xl font-medium text-[#a6a6aa]">
              Build the solution the world needs.
            </p>
          </div>
          <form className="w-[46rem] px-[5rem] mr- py-[5rem] h-[41rem] bg-[#3a3a3a] rounded-3xl ">
            <p className="w-64 h-10 text-[#cbcbd4] text-3xl font-bold">
              Get Started here
            </p>
            <input
              className="w-[34rem] h-20 text-2xl text-[#cbcbd4] p-10 bg-[#5a5757] mt-[2rem] rounded-3xl"
              type="text"
              placeholder="Business Name"
            />
            <input
              className="w-[34rem] h-20 text-2xl text-[#cbcbd4] p-10  bg-[#5a5757] mt-[2rem] rounded-3xl"
              type="text"
              placeholder="Your Email"
            />
            <input
              className="w-[34rem] text-2xl text-[#cbcbd4] h-20 p-10 bg-[#5a5757] mt-[2rem] rounded-3xl"
              type="text"
              placeholder="Password"
            />
            <button className="w-[34rem] text-2xl font-medium text-[#000000] h-20 px-10 bg-[#ffffff] mt-[2rem] rounded-3xl">
              {" "}
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="h-[52rem] w-full flex gap-[4rem] px-28  bg-gradient-to-r from-[#93939c] via-transparent">
        <div className="mt-[10rem]">
          <p className="h-10 w-40 text-2xl text-left text-[#000000] font-bold ">
            Products
          </p>
          <p className="h-10 w-72 text-2xl text-left text-[#3a3a3a] font-bold ">
            Virtual Dollar Cards
          </p>
          <p className="h-10 w-72 text-2xl text-left text-[#3a3a3a] font-bold ">
            Dedicated User Account
          </p>
          <p className="h-10 w-40 text-2xl text-left text-[#3a3a3a] font-bold ">
            Docs
          </p>
          <p className="h-10 w-40 text-2xl text-left text-[#3a3a3a] font-bold ">
            Metrics
          </p>
        </div>
        <div className="mt-[10rem]">
          <p className="h-[43px] w-[206px] text-2xl text-left text-[#000000] font-bold ">
            Resources
          </p>
          <p className="h-10 w-40 text-2xl text-left text-[#3a3a3a] font-bold ">
            Pricing
          </p>
          <p className="h-10 w-72 text-2xl text-left text-[#3a3a3a] font-bold ">
            Customer Stories
          </p>
          <p className="h-10 w-40 text-2xl text-left text-[#3a3a3a] font-bold ">
            Zenfin Docs
          </p>
        </div>
        <div className="mt-[10rem]">
          <p className="h-[43px] w-[206px] text-2xl text-left text-[#000000] font-bold ">
            Company
          </p>
          <p className="h-10 w-40 text-2xl text-left text-[#3a3a3a] font-bold ">
            Team
          </p>
          <p className="h-10 w-72 text-2xl text-left text-[#3a3a3a] font-bold ">
            Career Support
          </p>{" "}
          <a
            className="h-10 w-72 text-2xl text-left text-[#3a3a3a] font-bold "
            href="/contactus"
          >
            Contact Support
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePageDesktop;