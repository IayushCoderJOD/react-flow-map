import React from 'react';

const ThreeWayPipe = ({ data }) => {
    return (
        <>
            <div className='flex'>
                <div className='h-[190px] flex w-fit' style={{ textAlign: 'center', padding: 0 }}>
                    <h3 className='absolute text-gray-600 text-xs font-medium   top-4 left-4'>{data.text}</h3>
                    {data.svg}
                </div>
                <div className=' align-top justify-start items-start '>
                    {!data.hasNodeBeenAdded && (
                        <button onClick={data.onAddNodeClick} className='text-3xl font-semibold font-serif hover:text-red-500'>
                            +
                        </button>
                    )}
                </div>
            </div>
            <div className='absolute top-[165px] right-[92px] justify-center'>
                {!data.hasNodeBeenAdded && (
                    <button onClick={data.onAddNodeClick} className='text-3xl font-semibold font-serif hover:text-red-500'>
                        +
                    </button>
                )}
            </div>

        </>
    );
};

export default ThreeWayPipe;

