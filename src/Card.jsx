const Card = (props) => {
  const img = `https://source.unsplash.com/600x400?${props.name}`;
  return (
    <>
      <div className="container">
        <img src={img} alt="" className="form-control" />
      </div>
    </>
  );
};
export default Card;
