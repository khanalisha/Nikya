import axios from "axios";

export const getProduct = () => async () => {
try {
    let res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products`,);
    
} catch (error) {
    
}
};
