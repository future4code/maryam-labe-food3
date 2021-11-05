const ChartCard = ({ items }) => {
  return (
    <div>
      <div key={items.id}>
        <img src={items.photoUrl} alt="" />
        <h3>{items.name}</h3>
        <p>{items.price}</p>
      </div>
    </div>
  );
};

export default ChartCard;
