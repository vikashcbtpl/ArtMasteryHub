import axios from "axios";

export const unsplashApi = async (board = '8721905') => {
    const url = `https://api.unsplash.com/collections/${board}/photos?page=${1}&per_page=30&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`;
    const response = await axios.get(url);
    return response.data;
};
