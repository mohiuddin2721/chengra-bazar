import { useQuery } from "@tanstack/react-query";

const useGetAllData = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['getAllProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/api/v1/products');
            const data = res.json();
            return data;
        }
    });
    const allProduct = data?.data?.products;
    return { allProduct, isLoading };
};

export default useGetAllData;