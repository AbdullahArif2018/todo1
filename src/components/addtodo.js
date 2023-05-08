import { useState } from "react";

import { useMutation, useQueryClient } from "react-query";

import { addTodo, deleteTodo } from "../config/apis";

export default function AddTodo() {
  const [todoName, setTodo] = useState("");

  const queryClient = useQueryClient();

  const { mutation, mutate, isLoading, isError, error } = useMutation(addTodo, {

    onSuccess: () => {
      // Invalidate and refetch
      setTodo("")
      queryClient.invalidateQueries("todos");
    },
    // onMutate: async (variables) => {
    //   const { successCb, errorCb } = variables;

    //   // cancel queries against this query key
    //   // so that if any other component is consuming this data
    //   // is not able to get the old data
    //   await queryClient.cancelQueries(["todos"]);

    //   // get the cached values of 'todos'
    //   const previousValue = queryClient.getQueryData(["todos"]);
    //   console.log("previousValue", variables);

    //   // set the cached data with an added object
    //   // i.e the new planet posted
    //   queryClient.setQueryData(
    //     ["todos"],
    //     [...previousValue, { _id: '63ff1f0079df7ea7a3bb4e46', todoName: variables, isComplete: false, createdAt: '2023-03-01T09:01:01.080Z', updatedAt: '2023-03-01T09:01:01.080Z' }]
    //   );

    //   // return previousValue here 
    //   // we will use it in the next section
    //   return { successCb, errorCb, previousValue };
    // },
  });

  // console.log(queryClient.getQueryData('todos'));

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

  return (
    <div>

      <div class="container">
        <div class="form">
          <input
            onChange={(event) => {
              setTodo(event.target.value);
            }}
            value={todoName} type="text" placeholder="Add Todo" className="input" />

          <input type="submit" className="add" value="Add Task" onClick={() => {
            mutate(todoName);
          }} />
        </div>

        {/* <div class="delete-all">Delete all</div> */}
      </div>
      {/* <input
        value={todoName}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
        type="text"
      />
      <p>{error?.message}</p>
      <button
        onClick={() => {
          mutate(todoName);
        }}
      >
        Add
      </button> */}
    </div>
  );
}