// import { useQuery } from '@tanstack/react-query';

// const useGetAllUsers = () => {
//     const { data, isLoading, refetch } = useQuery({
//         queryKey: ['GetAllUsers'],
//         queryFn: async () => {
//             const res = await fetch('http://localhost:5000/api/v1/users');
//             const data = res.json();
//             return data;
//         }
//     });
//     const allUsers = data?.data;

//     return [allUsers, isLoading, refetch];
// };

// export default useGetAllUsers;