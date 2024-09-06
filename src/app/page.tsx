import Image from "next/image";

import { FC } from "react";

const MainCard:FC<CardInfo>= (data): JSX.Element =>{
  return(
    <div className="hover:cursor-pointer hover:p-2">
      <div className="relative rounded-lg  m-3">
        <Image className="w-full rounded-lg" alt="" height={1500} width={1000} src={data.image}/>
        <div className="absolute bottom-2 left-4">
          <span className=" text-white text-3xl">{data.title}</span>
        </div>
      </div>
    </div>
  );
}

interface CardInfo {
  title:string
  image:string 
}

export default function Home() {

  const options : CardInfo[] = [
    {
      title : "Recetas",
      image : "/images/cooking.webp"
    }, 
    {
      title : "Teoría",
      image : "/images/teaching.webp"
    },
  ]

  return (
    <div className="w-1/2 grid md:grid-cols-2 sm:grid-cols-1">
      {
        options.map((el, index)=>(
          <MainCard title={el.title} image={el.image}/>
        )
      )}
    </div>
  );
}
