import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="bg.png" className="max-w-xl rounded-lg" />
          <div>
            <h1 className="text-5xl font-bold text-(--primary-color)">
              My Journal
            </h1>
            <p className="py-6">
              Put your thoughts on the page and let your mind breathe
            </p>
            <Link
              to="journals"
              className="btn btn-primary bg-(--primary-color)"
            >
              My Journals
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
