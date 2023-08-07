import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCart = () => {
    const { user } = useAuth()
    const { isLoading, data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/api/v1/addCart?userEmail=${user?.email}`);
            return res.json();
        }
    });

    return [cart, isLoading, refetch]

}

export default useCart;