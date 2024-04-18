import DashboardBox from "@/components/DashboardBox";
import { useGetProductsQuery } from "@/state/api";



const Row2 = () => {
  const { data } = useGetProductsQuery();
  return (
    <>
      <DashboardBox gridArea="d"></DashboardBox>
      <DashboardBox gridArea="e"></DashboardBox>
      <DashboardBox gridArea="f"></DashboardBox>
    </>
  );
};

export default Row2;
