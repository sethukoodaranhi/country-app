import axios from "axios";

export const getCountries = async () => {
    try {
        const response=await axios.get("https://restcountries.com/v2/all?fields=name,region,flag")
        return response.data
    } catch (error) {
        console.log("API ERROR========",error)
    }
}