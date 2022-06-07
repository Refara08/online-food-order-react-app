import BestSellerIcon from "../../img/best-seller-icon";

const BestSellerBadge = () => {
  return (
    <div className="flex gap-1 flex-start items-center">
      <BestSellerIcon size="1.5ch" color="#FFBB44" />
      <p className="text-[0.7rem]">Best seller</p>
    </div>
  );
};

export default BestSellerBadge;
