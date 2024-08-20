import React from 'react';

const DatabaseNode = ({ data }) => {
    return (
        <>
            <div className='flex'>
                <div className='h-[190px] flex w-fit' style={{ textAlign: 'center', padding: 0 }}>
                    {data.svg}
                </div>
                <div className='pt-2 relative justify-center text-center align-middle'>
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

export default DatabaseNode;

