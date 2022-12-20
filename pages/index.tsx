import Head from "next/head";
import Image from "next/image";
import { MdOutlineBolt } from "react-icons/md";
import { BsArrowDown } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import man from "../public/man-with-ok-gesture-showing-business-charts-in-laptop-screen-4929412-4122896.png";
import umbrella from "../public/umbrella.png";
import shield from "../public/shield.png";
import file from "../public/file.png";
import dfd from "../public/dfd.svg";
import ContactUs from "./components/ContactUs";
import arch from "../public/Arch.svg";

export default function Home() {
  return (
    <>
      <section className="md:min-h-screen  h-[70vh] bg-gradient-to-tr from-b-gradient  to-t-gradient">
        <div className="backdrop-blur-[5px] bg-[#ffffff38] absolute  h-[70vh] md:h-full z-10 w-full">
          <div className="md:w-full md:h-1/2 max-w-lg absolute top-40 left-20 ml-60">
            <div className="absolute top-0 -left-4 w-30 h-30 lg:w-72 lg:h-72 md:w-48 md:h-48 md:left-0 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 md:animate-blob "></div>
            <div className="absolute top-0 -right-4 w-30 h-30 lg:w-72 lg:h-72 md:w-48 md:h-48 md:left-28 md:top-9 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 md:animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-30 h-30 lg:w-72 lg:h-72 md:w-48 md:h-48 md:-bottom-2 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 md:animate-blob animation-delay-4000"></div>
          </div>
          <nav className="md:flex hidden justify-end items-center md:mr-5 lg:mr-5 2xl:mr-20 xl:mr-10">
            <ul className="px-5 py-5 ">
              <li>
                <a
                  className="font-medium md:text-sm px-2 py-2 mx-1 md:px-1 md:py-1 xl:border-none text-lg-color text-lg capitalize md:border-none border-[3px] hover:border-black  rounded-md duration-100"
                  href="#info"
                >
                  Know more
                </a>
                <a
                  className="font-medium md:text-sm px-2 py-3 md:py-2 mx-1 text-white text-lg capitalize  bg-lg-color rounded-md text-center "
                  href="#info"
                >
                  <span className="absolute hidden  lg:top-[8px] lg:ml-[88px] lg:inline-flex opacity-75 animate-ping delay-75 duration-200 rounded-full h-3 w-3 bg-pink-300"></span>
                  <span className="absolute hidden  lg:top-[8px] lg:ml-[88px] lg:inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  Coming soon
                </a>
              </li>
            </ul>
          </nav>
          <span className="  2xl:w-3/5 z-10 relative flex  justify-center flex-col py-40 ml-20 xl:pt-40 xl:ml-64 2xl:ml-80 2xl:pt-40 lg:ml-44 lg:pt-44 md:ml-44 md:pt-44">
            <h1 className=" text-lg-color text-3xl 2xl:text-8xl lg:text-5xl md:text-4xl font-extrabold font-heading-1 xl:text-6xl">
              Insurechain is a decentralized Insurance platform
            </h1>
            <span className="flex items-center my-4">
              {/* <MdOutlineBolt size={"3rem"} /> */}
              <h2 className="font-[500] text-lg-color text-start text-xl capitalize">
                Build on hyperledger fabric
              </h2>
            </span>
            <button className="text-lg-color border border-lg-color hover:bg-lg-color hover:text-white w-44 rounded-[3px] h-12 tracking-wider duration-100 font-bold uppercase">
              Contact Team
            </button>
          </span>
        </div>
      </section>
      <section className="min-h-max py-5 xl:py-10 md:py-10 bg-slate-100">
        <div
          className="flex align-center ml-20 py-10 w-2/3 flex-col md:ml-20 md:py-10 lg:ml-40  lg:py-10 xl:ml-60 xl:py-20 2xl:ml-80 2xl:py-40"
          id="info"
        >
          <h1 className=" leading-[35px] 2xl:text-5xl lg:text-3xl md:text-2xl font-sub-heading font-medium capitalize lg:leading-[60px] 2xl:leading-[70px] xl:leading-[65px] md:leading-[40px] xl:text-4xl lg:m-auto xl:m-auto xl:text-start ">
            Meet <b className=" underline">Insurechain </b> : a decentralized
            platform to fast insurance claim process, Insurechain is a
            decentralized platform powered by the
            <b className="ml-3">blockchain technology</b>, which creates the
            transparency between the insurance companies and there customers
          </h1>
          <span className="flex mt-20  items-center">
            <h3 className="xl:text-2xl text-lg font-sub-heading font-bold md:text-xl">
              See how
            </h3>
            <BsArrowDown className="mx-4 text-2xl animate-bounce " />
          </span>
        </div>
      </section>
      <section className=" min-h-fit bg-pink-100/40 w-full flex md:flex-row flex-col py-20 items-center ">
        <div className="flex ml-10 w-4/5 px-0 mx-0 2xl:ml-80 xl:ml-60 lg:ml-40 md:ml-20 items-start md:w-3/5 xl:w-1/2 flex-col">
          <h3 className="uppercase font-bold lg:text-sm text-sm">
            ledger for claim process
          </h3>
          <h2 className="2xl:text-5xl xl:text-3xl text-xl lg:text-2xl text-slate-800 md:mt-1 mt-4 font-bold md:w-3/5">
            A financial system that’s always open for claim process
          </h2>
          <div className="flex md:items-center items-baseline  lg:mt-2 mt-4">
            <TiTick className="text-xl" />
            <h3 className="xl:text-lg 2xl:text-2xl lg:text-md  capitalize text-slate-800 mt-1 font-medium ">
              use of smart contracts provide better Security.
            </h3>
          </div>
          <div className="flex items-center lg:mt-2">
            <TiTick className="text-xl" />
            <h3 className="xl:text-lg 2xl:text-2xl lg:text-md capitalize text-slate-800 mt-1 font-medium ">
              24X7 Support for claim settlement.
            </h3>
          </div>
          <div className="flex items-baseline lg:mt-2">
            <TiTick className="text-xl" />
            <h3 className="xl:text-lg 2xl:text-2xl lg:text-md capitalize text-slate-800 mt-1 font-medium  ">
              transparency transactions within policy holder and insurance
              provider.
            </h3>
          </div>
        </div>
        <div className="">
          <Image
            className="w-[200px] h-[200px] mt-10 pl:40 md:w-[300px] md:h-[300px] 2xl:w-[400px] 2xl:h-[400px] xl:w-[350px] xl:h-[350px] lg:w-[200px] lg:h-[200px] relative 2xl:right-40 lg:right-20 md:right-20"
            alt=""
            src={man}
          />
          <div className="absolute">
            <div className="flex absolute 2xl:-left-44 xl:-left-28 lg:-left-20 justify-center items-center  ">
              <div className=" absolute  xl:bottom-96 xl:-left-2 xl:p-5 lg:p-3 lg:bottom-60 lg:-left-5 bg-slate-100 rounded-lg flex items-center justify-between space-x-8 shadow-md">
                <div className="flex-1">
                  <div className="xl:h-2 xl:w-20 lg:w-8 lg:h-1 bg-gray-300 rounded animate-pulse"></div>
                </div>
                <div>
                  <div className="xl:w-5 xl:h-2 lg:w-2 lg:h-2 rounded-lg bg-blue-300"></div>
                </div>
              </div>
              <Image
                className="xl:w-[80px]  hidden lg:block xl:block 2xl:block xl:h-[90px] xl:-left-14 xl:bottom-44 relative lg:w-[60px] lg:h-[60px] lg:bottom-20 lg:right-10"
                alt=""
                src={umbrella}
              />
            </div>
            <div className="flex absolute -left-44 justify-center items-center  ">
              <div className=" absolute  bottom-5 left-72 xl:p-5 lg:p-3 bg-slate-100  rounded-lg flex items-center justify-between space-x-8 shadow-md">
                <div className="flex-1">
                  <div className="xl:h-2 xl:w-20 lg:w-8 lg:h-1 bg-gray-300 rounded animate-pulse"></div>
                </div>
                <div>
                  <div className="xl:w-5 xl:h-2 rounded-lg lg:w-2 lg:h-2  bg-purple-300"></div>
                </div>
              </div>
            </div>
            <Image
              className="xl:w-[120px] lg:block xl:block 2xl:block  hidden xl:h-[120px] lg:w-[80px] lg:h-[80px] lg:bottom-60 lg:left-28 lg:relative xl:bottom-96 xl:left-52"
              alt=""
              src={file}
            />
          </div>
        </div>
      </section>
      <section className="pb-10 mb-10">
        <div className="2xl:ml-80 xl:ml-60 lg:ml-40 md:ml-20 pt-40 max-w-6xl xl:max-w-7xl xl:pr-10 ml-20 px-10">
          <h3 className="uppercase font-bold">implementation</h3>
          <h2 className="text-2xl font-sub-heading font-bold  leading-[70px]  ">
            How Insurechain will work ?
          </h2>
          <p className="text-xl font-sub-heading font-medium leading-[40px] md:text-xl md:pr-10 xl:max-w-6xl lg:max-w-4xl ">
            Insurechain’s smart contracts will be consist of policy conditions
            related to its claim process, and the self-executing capacity of
            smart contract will create huge impact on time saving for the
            insurance company. It also verify the conditions of both ends, that
            justify transparency and security, or fraud detection compatibility
            of Insure chain. Smart contract actually verify all the data related
            to claim, Medical reports , bills in case of Health insurance, and
            history of customer to pass the claim amount. own coding capacity of
            Insure chain, that can help insurance company to add itself new
            conditions of policy claim process, which actually give flexibility
            to the insurance company.
          </p>
          <Image
            className="2xl:w-full xl:w-4/5 mt-20 lg:w-[75%] md:w-[70%] "
            alt=""
            src={dfd}
          />
          <p className="text-xl font-pera-font font-medium leading-[40px] xl:max-w-6xl md:text-xl md:pr-10 lg:max-w-4xl my-10">
            Insure chain platform will be powered by Hyperleger fabric which is
            a enterprise-grade permissioned distributed ledger technology (DLT)
            platform . That makes our product’s architecture highly modular and
            configurable and support quick transaction throughput from its
            consensus mechanism . Further makes our platform permissioned ,
            meaning all participating member’s identities are known and
            authenticated according to the policies created by the participants
            , this benefits the insurance companies and hospitals as the data is
            not exposed to unknown entities .Network comprises of unique
            organizations ( or members ) that interact with each other on the
            network . Each member is assigned an identity/Certificate by a
            certificate authority which determines the exact permissions over
            resources and access to information to different roles in the
            network . Talking about the communication between hospitals ,
            insurance companies , auditors , customers , which would be through
            channels , which are a private “subnet” of communication between two
            or more specific members that leads to privacy and confidentiality .
            Insurance company could securely and privately deal with the
            hospitals maintaining the records on the particular leger , which
            would be referenced further to identify duplicate or falsified
            claims . All of these business actions are implemented using smart
            contracts or chaincodes which define the governance rules for any
            type of business object, so that they can be automatically enforced
            when the smart contract is executed . Each point of action either is
            the medical bills , health records or the previous processings , is
            justified on basis of terms and conditions specified by the
            insurance company which leads to the further decisions by the smart
            contract to generate transactions that are recorded on the ledge
          </p>
          <Image
            className="2xl:2/3 xl:2/3 mt-20 lg:w-[75%] md:w-[70%] "
            alt=""
            src={arch}
          />
          <p className="text-xl font-pera-font font-medium leading-[40px] xl:max-w-6xl md:text-xl md:pr-10 lg:max-w-4xl my-10">
            a system based on smart contracts can be put into motion to improve
            the process of claim management. When a particular event that meets
            the terms and conditions of the contract/policy occurs, the smart
            contract automatically executes/Triggers payments to relevant
            parties that are part of the contract/policy. Improved efficiency
            and decreased cost of operation are two areas that companies strive
            for on a daily basis in order to maximize profits. Blockchain goes a
            long way in facilitating the same, as smart contracts eliminate
            challenges such as manual processing of data, human error and
            differences owing to timeliness of data. Persistent challenges like
            these are eliminated by means of verifying coverage information
            readily available in the blocks. Blockchain technology ensures a
            significant decrease in operating costs of insurance companies as it
            can achieve permanent audit tracking
          </p>
        </div>
      </section>
      <footer className=" text-white  bg-slate-100 pt-20">
        <ContactUs />
        <section>
          <div className="container px-6 pt-6 mx-auto">
            <div className="flex justify-center mb-6">
              <a
                href="#!"
                type="button"
                className="rounded-full border-2 border-white text-slate-900 leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  className="w-2 h-full mx-auto"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </a>

              <a
                href="#!"
                type="button"
                className="rounded-full border-2 border-white text-slate-900 leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="twitter"
                  className="w-3 h-full mx-auto"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
              </a>

              <a
                href="#!"
                type="button"
                className="rounded-full border-2 border-white text-slate-900 leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  className="w-3 h-full mx-auto"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
              </a>

              <a
                href="#!"
                type="button"
                className="rounded-full border-2 border-white text-slate-900 leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  className="w-3 h-full mx-auto"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </a>

              <a
                href="#!"
                type="button"
                className="rounded-full border-2 border-white text-slate-900 leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="linkedin-in"
                  className="w-3 h-full mx-auto"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  ></path>
                </svg>
              </a>

              <a
                href="#!"
                type="button"
                className="rounded-full border-2 border-white text-slate-900 leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="github"
                  className="w-3 h-full mx-auto"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center p-4">
            © 2021 Copyright:
            <a className="text-whitehite" href="https://tailwind-elements.com/">
              Tailwind Elements
            </a>
          </div>
        </section>
      </footer>
    </>
  );
}
