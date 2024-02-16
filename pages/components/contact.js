import React, { useState } from 'react'
import { IoIosClose } from "react-icons/io";

const Contact = () => {

    //for file input
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
    };


    return (
        <div className='lg:w-1/3 w-full h-full flex flex-col items-start justify-start gap-7'>
            <h1 className='text-3xl font-semibold'>Contact us</h1>

            <form
                className='w-full lg:max-w-[30vw] h-full flex flex-col items-start justify-start gap-3'
                onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    name='name'
                    placeholder='Name'
                    required
                    className='border-[1px] border-zinc-950 px-5 py-3 w-full rounded-md'
                />
                <input
                    type="email"
                    name='email'
                    placeholder='Email *'
                    required
                    className='border-[1px] border-zinc-950 px-5 py-3 w-full rounded-md'
                />
                <textarea placeholder='Tell us about your project idea'
                    className='border-[1px] border-zinc-950 px-5 py-3 w-full rounded-md resize-none h-32' ></textarea>

                <div className='relative h-12 w-full rounded-md border-[1px] border-zinc-950  flex items-center justify-between pr-4 gap-5'>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        className='hidden'
                        onChange={handleFileChange}
                    />
                    <label htmlFor="file" className="cursor-pointer shrink-0 bg-black text-white h-full w-1/2 grid place-items-center">
                        Choose File
                    </label>
                    <p className='text-xs w-full'>{selectedFile === null ? "No File Uploaded" : selectedFile.name}</p>
                    {selectedFile && <span className='text-3xl' onClick={handleRemoveFile}><IoIosClose /></span>}
                </div>

                <button
                    className='px-8 py-3 bg-black text-white rounded-full'
                    type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Contact