const AvailableMeals = (props) => {
  return (
    <div className="pt-14 container mx-auto px-6">
      <div className="title">
        <span className="block font-bold text-black mb-2 tracking-widest w-fit">
          Discover
        </span>
        <div className="flex flex-col lg:flex-row gap-4">
          <h2 className="font-semibold text-3xl">Our Featured Menu</h2>
          <div className="categories flex gap-4">
            <button className="active">All</button>
            <button>Pizza</button>
            <button>Ramen</button>
            <button>Rice</button>
            <button>Beverages</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableMeals;
