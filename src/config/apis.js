import axios from 'axios';

export const fetchTodo = () => {
    const data = axios.get('https://calm-plum-jaguar-tutu.cyclic.app/todos').then(res => {
        return res.data.data

    })
    return data
}
export const addTodo = async (todoName) => {
    // console.log(todoName);
    const response = await axios.post('https://calm-plum-jaguar-tutu.cyclic.app/todos', { todoName: todoName, isComplete: false, })
    return response
}

export const deleteTodo = (id) => {
    console.log(id);
    const response = axios.delete(`https://calm-plum-jaguar-tutu.cyclic.app/todos/${id}`).then(res => {
        return res.data

    })
    return response
}


export const fetchCoins = (page) => {
    // console.log("dfdfdfs", page);
    const data = axios.get(`https://api.coinstats.app/public/v1/coins?skip=${page}&limit=10&currency=USD`).then(res => {
        return res.data.coins

    })
    return data
}



export const fetchPokemon = async ({
    pageParam = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10',
}) => {
    const request = await fetch(pageParam);
    const { results, next } = await request.json();
    return { response: results, nextPage: next };
};