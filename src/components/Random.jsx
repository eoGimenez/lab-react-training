function Random({ min, max }) {
  /* console.log(min, max) */
  const numRandom = Math.floor(Math.random() * (max - min) + min);
  /* console.log(numRandom) */
  return (
    <div>
      <p>
        Random value between {min} and {max}={numRandom}
      </p>
    </div>
  );
}

export default Random;
