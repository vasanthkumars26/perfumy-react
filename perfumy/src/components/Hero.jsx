import React from 'react'

const images = [
    { src: "https://bellavitaorganic.com/cdn/shop/files/Fresh_100_ml.jpg?v=1728034537&width=1000" ,text:"Fogg wood high intense"},
  { src: "https://bellavitaorganic.com/cdn/shop/files/Fresh_100_ml.jpg?v=1728034537&width=1000 " , text:"Bellavita For men" },
  { src: "https://bellavitaorganic.com/cdn/shop/files/Fresh_100_ml.jpg?v=1728034537&width=1000",text:"Bellavita CEO" }
]


const Hero = () => {
  return (
     <section className="flex gap-3 mt-10 ">
      {images.map((imgg, index) => (
        <div key={index} className="flex flex-col items-center  border-black border-2 mx-auto">
          <img
            className="h-80 w-80 object-cover"
            src={imgg.src}
            alt={imgg.text}
          />
          <p className="mt-2 text-black text-center font-medium p-2 hover:bg-black cursor-pointer  hover:text-white">{imgg.text}</p>
        </div>
      ))}
    </section>
  )
}

export default Hero