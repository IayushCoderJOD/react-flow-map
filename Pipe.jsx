import React from 'react';

const Pipe = ({ data }) => {
    return (
        <>
            <div className='flex'>
                <div className='h-[190px] flex w-fit' style={{ textAlign: 'center', padding: 0 }}>
                    <h3 className='absolute text-gray-600 text-xs font-medium   top-1 left-4'>{data.text}</h3>
                    {data.svg}
                </div>
                <div className='justify-center text-center align-middle'>
                    {!data.hasNodeBeenAdded && (
                        <button onClick={data.onAddNodeClick} className='text-3xl font-semibold font-serif hover:text-red-500'>
                            +
                        </button>
                    )}
                </div>
            </div>

        </>
    );
};

export default Pipe;

