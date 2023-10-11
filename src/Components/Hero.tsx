import heroImg from '/assets/hero.svg'

export default function Hero() {
  return (
    <div className='container d-md-flex align-items-center py-5 hero'>
      <div className='w-100 text-center text-md-start py-5'>
        <h1 className='hero-title py-2'>Hello, I'm <span className='husam'>Husam</span> <br /> A Software Engineer</h1>
        <button className='hero-btn btn btn-outline-primary'>ABOUT ME</button>
      </div>
      <div className='w-100'>
        <img className='img-fluid' src={heroImg} alt="hero-image" />
      </div>
    </div>
  )
}