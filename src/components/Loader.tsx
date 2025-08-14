import loaderSvg from '../assets/spinning-dots.svg';

const Loader = () => {
  return (
    <div className='h-screen bg-[#F4F4F4] flex justify-center items-center'>
        <img src={loaderSvg} alt="" className='w-18 h-18' />
    </div>
  )
}

export default Loader