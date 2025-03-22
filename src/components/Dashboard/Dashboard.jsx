import DashboardBanner from "../DashboardBanner/DashboardBanner";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Learn more about us on this page" />
      </Helmet>
      <DashboardBanner></DashboardBanner>
    </div>
  );
};

export default Dashboard;
