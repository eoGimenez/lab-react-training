function IdCard({ lastname, firstname, gender, height, birth, picture }) {
  /* console.log(height, birth) */
  const date = birth.toDateString();
  const meters = height / 100;
  return (
    <div>
      <img src={picture} className="imgPerfil" alt="imagen-perfil" />
      <p>First name: {firstname}</p>
      <p>Last name: {lastname}</p>
      <p>Gender: {gender}</p>
      <p>Height: {meters}</p>
      <p>Birth: {date}</p>
    </div>
  );
}

export default IdCard;
