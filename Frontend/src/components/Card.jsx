

function Card({ img, title, text }) {
  return (
    <div className="grid place-items-center gap-[1rem] py-[2rem] bg-[#0e8784] rounded-lg">
      <img src={img} alt="" />

      <div className="grid gap-[1rem]">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Card;
