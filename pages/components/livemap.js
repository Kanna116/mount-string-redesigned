import React from 'react'

const LiveMap = () => {
    return (
        <>
            <div className='w-full h-[50vh] my-10'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.822741463408!2d78.39482377521213!3d17.468196183432866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2452a0d23b20eef%3A0xd2a9261815e15b80!2sMount%20String%20Technologies!5e0!3m2!1sen!2sin!4v1708016812911!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className='w-full h-full border-0'>
                </iframe>
            </div>
        </>

    )
}

export default LiveMap