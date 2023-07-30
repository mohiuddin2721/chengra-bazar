import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../contexts/AuthProvider";

const useAddress = () => {
    const { user } = useContext(AuthContext)
    const { isLoading, data: userAddress = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/api/v1/shipping_address?email=${user?.email}`);
            return res.json();
        }
    });

    return [userAddress, isLoading, refetch]

}

export default useAddress;