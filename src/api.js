import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get(process.env.REACT_APP_API_URL, {
        headers: {
            Authorization: process.env.REACT_APP_API_AUTHORIZATION
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export default searchImages;
