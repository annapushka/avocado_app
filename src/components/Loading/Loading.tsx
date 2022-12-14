import React from 'react';
import RecipeSkeleton from '../RecipeSkeleton/RecipeSkeleton';

const sceletonArr: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];


function Loading() {

    return (
        <div className="loading">
            {sceletonArr.map((sceleton, index) => <RecipeSkeleton key={index} />)}
        </div>
    );
}

export default Loading;