
import axios from "axios"
import React from "react"
import { useQuery } from "react-query"
import { fetchCoins } from "../config/apis"

function Todos() {
    const [page, setPage] = React.useState(0)

    // const fetchProjects = (page = 0) => axios(`https://api.coinstats.app/public/v1/coins?skip=${page}&limit=5&currency=USD`).then((res) => res.json())

    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData,
    } = useQuery({
        queryKey: ['projects', page],
        queryFn: () => fetchCoins(page),
        keepPreviousData: true
    })
    console.log(isLoading, isFetching);

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error: {error.message}</div>
            ) : (
                <div>
                    {data?.map(project => (
                        <p key={project.id}>{project.name}</p>
                    ))}
                </div>
            )}
            <span>Current Page: {page + 1}</span>
            <button
                onClick={() => setPage(old => Math.max(old - 1, 0))}
            // disabled={page === 0}
            >
                Previous Page
            </button>{' '}
            <button
                onClick={() => {
                    if (!isLoading) {
                        setPage(old => old + 1)
                    }
                }}
            // Disable the Next Page button until we know a next page is available
            // disabled={isPreviousData || !data?.hasMore}
            >
                Next Page
            </button>
            {isFetching ? <span> Loading...</span> : null}{' '}
        </div>
    )
}

export default Todos;