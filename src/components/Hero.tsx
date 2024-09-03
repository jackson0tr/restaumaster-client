import hero from '../assets/image.webp'

const Hero = () =>{
  return (
   
    <div>
      <img src={hero} loading="lazy" className="w-full max-h-[600px] object-cover " alt="img" />
    </div>
  );
}

export default Hero;