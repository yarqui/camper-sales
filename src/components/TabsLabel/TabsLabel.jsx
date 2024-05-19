const TabsLabel = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mt-11 block border-b border-primaryColor border-opacity-20 text-xl font-semibold leading-6">
      <button
        className={`pb-6 ${activeTab === "features" && "border-b-[5px] border-carmineColor"}`}
        onClick={() => setActiveTab("features")}
      >
        Features
      </button>
      <button
        className={`ml-10 pb-6 ${activeTab === "reviews" && "border-in border-b-[5px] border-carmineColor"}`}
        onClick={() => setActiveTab("reviews")}
      >
        Reviews
      </button>
    </div>
  );
};

export default TabsLabel;
