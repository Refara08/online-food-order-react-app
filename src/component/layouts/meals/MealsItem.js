const MealsItem = (props) => {
  return (
    <div className="flex flex-row lg:flex-col justify-start lg:justify-center items-center gap-4 w-full lg:w-[300px] p-4 lg:p-0 shadow-md lg:shadow-xl rounded-xl overflow-hidden border-[1px] border-neutral-200">
      <div className="w-[100px] lg:w-auto rounded-xl lg:rounded-none overflow-hidden">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="p-0 lg:p-6 w-full">
        <h2 className="text-xl font-bold mb-3">{props.name}</h2>
        <p className="hidden lg:block">{props.desc}</p>
        <div className="flex justify-between items-center lg:flex-col lg:justify-center lg:items-start w-full">
          <p className="font-semibold my-2">{`Rp.${props.price.toLocaleString(
            "en-US"
          )}`}</p>
          <button className="bg-primary w-10 h-10 rounded-full text-2xl self-end">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealsItem;
