import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  let { model, licensePlate } = car;

  return (
    <div>
      <img src={img} className="imgDriver" alt="imagen perfil" />
      <p>{name}</p>
      <Rating>{rating}</Rating>
      <p>
        {model} - {licensePlate}
      </p>
    </div>
  );
}

export default DriverCard;
