"use client"
import React from "react";
import Image from "next/image"

const ImageSection = () => {
  return (
    <section id="image">
      <h1 className="text-center font-bold text-5xl mb-2">Images</h1>
      <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4">
        <Image
          src="/image02.jpg"
          alt="about section image"
          width={325}
          height={325}
          className="self-center border-4 border-wBlack dark:border-dEmerald rounded"
        />
        <Image
          src="/image01.jpg"
          alt="about section image"
          width={325}
          height={325}
          className="self-center border-4 border-wBlack dark:border-dEmerald rounded"
        />
        <Image
          src="/image03.jpg"
          alt="about section image"
          width={325}
          height={325}
          className="self-center border-4 border-wBlack dark:border-dEmerald rounded"
        />
      </div>
    </section>
  )
}

export default ImageSection