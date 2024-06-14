import React from "react";
import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "@/assets/icon/facebook.png";
import LinkedInIcon from "@/assets/icon/linkedin.png";
import YoutubeIcon from "@/assets/icon/youtube.png";
import InstagramIcon from "@/assets/icon/instagram.png";

const Footer: React.FC = () => {
  return (
    <footer className="px-20 font-normal text-2xl mt-[84px]">
      <div className="divider mx-auto my-0 mb-[52px]"></div>
      <h1 className="mb-[88px]">
        A<span className="text-[#8F00FF]">N</span>:THOLOGY
      </h1>
      <ul className="flex gap-2 items-center mb-12">
        <li>
          <Link href="">
            <Image
              src={FacebookIcon}
              className="w-10 h-10 object-contain p-2.5"
              alt="facebook icon"
              priority
            />
          </Link>
        </li>
        <li>
          <Link href="">
            <Image
              src={LinkedInIcon}
              className="w-10 h-10 object-contain p-1"
              alt="linkedin icon"
              priority
            />
          </Link>
        </li>
        <li>
          <Link href="">
            <Image
              src={YoutubeIcon}
              className="w-10 h-10 object-contain p-1"
              alt="youtube icon"
              priority
            />
          </Link>
        </li>
        <li>
          <Link href="">
            <Image
              src={InstagramIcon}
              className="w-10 h-10 object-contain p-1"
              alt="instagram icon"
              priority
            />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
