import React from 'react';
import {
    QueryClient,
    QueryClientProvider,
    useInfiniteQuery,
} from 'react-query';


const Loadmore = () => {

    const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
        useInfiniteQuery('pokemon', fwt, {
            getNextPageParam: (lastPage) => lastPage.nextPage,
        });
    return (
        <div>Loadmore</div>
    )
}

export default Loadmore


