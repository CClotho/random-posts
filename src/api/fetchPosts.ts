import axios from "axios";




// it should return the response schema of axios
export async function getPosts() {

    const response = await axios.get('https://dummyjson.com/posts?limit=10&select=title,body,tags,reactions,views');
    const data= response.data;
    const status = response.status;
    return {data, status};

}
