import { FC } from 'react'

import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import googlePlus from '../../assets/icons/google-plus.svg'
import twitter from '../../assets/icons/twitter.svg'

const Footer: FC = () => {
  return (
    <div className="">
      <div className="bg-[#F8FAFD] pb-20 pt-8 md:pt-0">
        <div className="text-center">
          <h1 className="text-2xl">Elanco</h1>
          <p className="text-gray-700">
            Sample text
          </p>
        </div>
      </div>
      
      <div className="">
        <div className=" sm:grid sm:grid-cols-2 pt-4 pb-4 bg-[#01833D] font-light">
          
          <div className="order-first grow flex justify-center items-center md:bg-[#01833D] ">
            <div className="flex-column pr-[10px]">
              <img src={facebook} />
            </div>
            <div className="flex-column pl-[10px] pr-[10px]">
              <span className="text-white">|</span>
            </div>
            <div className="flex-column pr-[10px] pl-[10px]">
              <img src={instagram} />
            </div>
            <div className="flex-column pl-[10px] pr-[10px]">
              <span className="text-white">|</span>
            </div>
            <div className="flex-column pr-[10px] pl-[10px]">
              <img src={twitter} />
            </div>
            <div className="flex-column pl-[10px] pr-[10px]">
              <span className="text-white">|</span>
            </div>
            <div className="flex-column pr-[20px] pl-[10px]">
              <img src={googlePlus} />
            </div>
          </div>

          <div className=" text-white pt-2 justify-center items-center text-center">
            <span>&#169;2022&nbsp;&nbsp;</span>
            <span className="">
              Elanco | PRIVACY POLICY
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
