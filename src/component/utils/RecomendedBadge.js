import RecomendedIcon from "../../img/recomended-icon";

const RecomendedBadge = () => {
  return (
    <div className="flex gap-1 flex-start items-center">
      <RecomendedIcon size="1.5ch" color="#2cb825" />
      <p className="text-[0.7rem]">Recomended</p>
    </div>
  );
};

export default RecomendedBadge;
