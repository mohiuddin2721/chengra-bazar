import { useEffect, useState } from "react";
import { categories } from "../Utils/ConstantData";

const useGetAllData = () => {
    // const [allProduct, setAllProduct] = useState([])
    const allProduct = [];
    // console.log(allProduct)
    useEffect(() => {
        {
            categories?.map((category) => allProduct.push(category?.product))
        }
    }, [categories])
    return allProduct;
};

export default useGetAllData;