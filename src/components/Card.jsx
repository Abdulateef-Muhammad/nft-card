import { FaEthereum } from 'react-icons/fa'
import { MdOutlineAccessTimeFilled } from 'react-icons/md'


import cardImage from './../img/image-equilibrium.jpg'
import avatar from './../img/image-avatar.png'
const Card = () => {

    return (
        <div className="card-container p-3 rounded-lg w-[350px] bg-dark-blue-custom text-lg">
            <div className="content">
                <div className="img rounded-lg overflow-hidden">
                    <a href="#">
                        <img src={cardImage} alt="this is an image" />
                    </a>
                </div>
                <div className="info p-1">
                    <div className="nft-name p-1 text-white-custom">
                        <p>Equilibrium #3429</p>
                    </div>
                    <div className="description p-1 text-blue-custom">
                        <p>Our equilibrium collection promotes balance and coin.</p>
                    </div>
                    <div className="price p-1 flex place-content-between">
                        <span className="value text-green-custom flex items-center">
                            <FaEthereum />
                            <span className='p-1'>0.041ETH</span>
                        </span>
                        <span className="time-left text-blue-custom flex items-center">
                            <MdOutlineAccessTimeFilled />
                            <span className='px-1'>3 days left</span>
                        </span>
                    </div>
                </div>
                <div className="border-t border-t-[#b4bdcb30] mx-2 p-1"></div>
                <div className="creator-container p-1">
                    <div className="creator flex items-center">
                        <div className="avatar w-10 h-10">
                            <a href="#">
                                <img src={avatar} alt="" />
                            </a>
                        </div>
                        <div className='flex px-2'>
                            <p className='text-blue-custom px-2'>Creation of </p>
                            <p className='text-white-custom'> Jules Wyvern</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;