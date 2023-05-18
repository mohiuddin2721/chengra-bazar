import { useQuery } from "@tanstack/react-query";

const useGetAllCategory = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['getAllProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/api/v1/category');
            const data = res.json();
            return data;
        }
    });
    const allCategory = data?.data;
    return { allCategory, isLoading };
};

export default useGetAllCategory;