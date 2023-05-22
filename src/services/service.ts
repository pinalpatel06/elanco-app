import axios from "axios";

const baseUrl = "https://engineering-task.elancoapps.com/api/";

/**
 * Get Applicaitons
 * @returns 
 */
export const getProductList = async():Promise<any>=>{
   
    const response = await axios.get(`${baseUrl}applications`);
    return response.data;
}

/**
 * Get application detail by resource
 * @param resourceName 
 * @returns 
 */
export const getDetail = async (resourceName: string) => {
    const response = await axios.get(`${baseUrl}/applications/${resourceName}`);
    return response.data;
}
