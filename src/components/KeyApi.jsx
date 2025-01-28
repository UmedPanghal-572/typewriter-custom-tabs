import React from 'react'
import Lottie from 'react-lottie-player'
import semantic from '../lottie/semantic.json'
import Mobile from '../lottie/mobile.json'

const KeyApi = () => {
    return (
        <div className=' min-h-screen bg-amber-200 flex justify-center items-center'>
            <div className='max-w-[1232px] px-4 mx-auto'>
                <Lottie
                    className='w-full max-md:hidden'
                    loop
                    animationData={semantic}
                    play
                />
                <Lottie
                    className='h-[900px] md:hidden'
                    loop
                    animationData={Mobile}
                    play
                />
            </div>
        </div>
    )
}

export default KeyApi