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
            <button className="btn btn-primary bg-(--primary-color)">
              See More
            </button>
          </div>
        </div>
      </div>
      {/* <div className="hero min-h-screen bg-[url('bg.jpg')]">
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-8xl font-bold"></h1>
            <p className="mb-5 text-2xl">
              
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Home;
