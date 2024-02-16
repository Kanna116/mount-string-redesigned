import React from 'react'

const Subscription = () => {
    return (
        <div className='lg:w-1/3 h-full flex flex-col gap-7'>
            <h1 className='text-3xl font-semibold'>Subscribe to Us</h1>
            <p>Sign up to get our latest and most interesting newsletters and updates of our company. And see our carefully curated blogs.</p>
            <form
                onSubmit={(e) => e.preventDefault()}
                action=""
                className='w-full lg:max-w-[30vw] h-full flex flex-col items-start justify-start gap-3'>
                <input
                    type="email"
                    name='email'
                    placeholder='Email *'
                    required
                    className='border-[1px] border-zinc-950 px-5 py-3 w-full rounded-md'
                />
                <button
                    className='px-8 py-3 bg-black text-white rounded-full'
                    type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default Subscription