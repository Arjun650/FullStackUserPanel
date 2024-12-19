import './WelcomeBanner.css'
import img from '../../assets/img4.png'
import { IoIosArrowRoundForward } from 'react-icons/io'

const WelcomeBanner = () => {
    return (
        <div className="max-w-full welcome">
            {/* Image container */}
            <div className="absolute hidden lg:block lg:right-[9%] -right-20 top-1/2 transform -translate-y-1/2">
                <img src={img} className="w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[45vw]" alt="Plant" />
            </div>

            {/* Text content */}
            <div className="w-[50vw] absolute left-[10%] flex content-center flex-col text-center sm:text-left pt-20 sm:pt-32 md:pt-40">
                <div className=''>
                    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-[5.5vw] font-bold text-textPri mb-6">
                        Think Green and Plant <span className="sth text-textSec">Something</span>
                    </h1>
                </div>
                <div className="px-4 mb-8 text-lg flowerText text-textSec sm:text-xl md:text-2xl sm:px-8">
                    <p>Find your dream plant for your home <br /> decorate with us, and we will make it happen</p>
                </div>
                <div className="flex items-center justify-center cursor-pointer shop sm:justify-start">
                    <IoIosArrowRoundForward className="mr-3 text-3xl arrowIcon text-textPri sm:text-4xl" />
                    <p className="text-lg sm:text-xl text-textPri">Shop Now</p>
                </div>
            </div>
        </div>
    )
}

export default WelcomeBanner;
