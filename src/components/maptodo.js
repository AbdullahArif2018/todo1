import React from 'react'
import { deleteTodo, fetchTodo } from '../config/apis';
import { useMutation, useQuery, useQueryClient } from "react-query";
import Loader from './loader';

const ShowTodo = () => {
    const queryClient = useQueryClient();

    const { isLoading, isError, data, error, isFetched } = useQuery(["todos"], fetchTodo, {
        // refetchOnWindowFocus: true,
    })

    const deletePost = useMutation((id) => deleteTodo(id),
        {
            onSuccess: () => {
                // console.log('Item deleted!')
                queryClient.invalidateQueries('todos')
            },


        })

    // console.log("delete==>", deletePost);

    if (isLoading)
        return (
            <div className="App">
                <h1>isLoading...</h1>
            </div>
        );
    // console.log(isError);
    if (isError)
        return (
            <div className="App">
                <h1>{error.message}</h1>
            </div>
        );

    if (deletePost.isLoading)
        return (
            <div className="App">
                <h1>deleteing....</h1>
            </div>
        );
    console.log("Data==>", data);
    return (
        <div>
            {
                (data || [])?.map((item) => {
                    return (
                        <>
                            <div className="container" key={item._id}>


                                {/* <Loader /> */}


                                <div className="tasks" key={item._id}>
                                    <div>
                                        {item.todoName}
                                    </div>
                                    <div>
                                        <button className='add' onClick={() => deletePost.mutate(item._id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }

        </div>
    )
}

export default ShowTodo