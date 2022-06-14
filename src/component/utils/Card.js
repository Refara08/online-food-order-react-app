const Card = (props) => {
  return (
    <div className="rounded-none lg:rounded-lg shadow-xl overflow-hidden bg-white">
      {props.children}
    </div>
  );
};

export default Card;
