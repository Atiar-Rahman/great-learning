import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isLoading: adminLoading } = useQuery({
    enabled: !loading && !!user?.email, // only run when user is loaded and email exists
    queryKey: ['isAdmin', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
    //   console.log(res.data)
      return res.data?.admin;
    }
  });

  return [isAdmin, adminLoading];
};

export default useAdmin;
