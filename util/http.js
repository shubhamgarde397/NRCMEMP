import axios from "axios";

export async function store(data){
    const res = await axios.post(
        'https://wxbwagxbqh.execute-api.ap-south-1.amazonaws.com/dev/commoninformation',
        data)
        return res.data.Data[0]
}

export async function add(data){
    const res = await axios.post(
        'https://wxbwagxbqh.execute-api.ap-south-1.amazonaws.com/dev/commoninformation',
        data)
        return res.data;
}
export async function display(data){
    const res = await axios.post(
        'https://wxbwagxbqh.execute-api.ap-south-1.amazonaws.com/dev/commoninformation',
        data)
        return res.data;
}
export async function update(data){

    const res = await axios.post(
        'https://wxbwagxbqh.execute-api.ap-south-1.amazonaws.com/dev/commoninformation',
        data)
        return res.data;
}

export async function deleteT(data){

    const res = await axios.post(
        'https://wxbwagxbqh.execute-api.ap-south-1.amazonaws.com/dev/commoninformation',
        data)
        return res.data;
}