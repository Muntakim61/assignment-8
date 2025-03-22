import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { Link} from "react-router-dom";
import { Helmet} from "react-helmet-async";

const Errorpage = () => {
  return (
    <div>
      <Helmet>
        <title>Error Page</title>
        <meta name="description" content="Learn more about us on this page" />
      </Helmet>
      <Header></Header>
      <div className="my-12 h-[400px] bg-slate-200 flex flex-col items-center justify-center w-11/12 mx-auto rounded-lg shadow-2xl gap-6">
        <h2 className="text-7xl text-center">Error/404</h2>
        <h2 className="text-7xl text-center">Page not found</h2>
        <Link to="/">
          <button className="bg-[#9538E2] text-white btn-ghost font-semibold px-6 py-4 rounded-btn">
            Back to Homepage
          </button>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Errorpage;
