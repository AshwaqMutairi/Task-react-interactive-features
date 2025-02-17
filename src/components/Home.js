const Home = () => {
  return (
    <div className="home">
      <h1>Cookies and Beyond</h1>
      <h3>Where cookie maniacs gather</h3>
      <button
        onClick={() =>
          props.setMode(props.mode === "lightmode" ? "darkmode" : "lightmode")
        }
      >
        {props.mode === "lightmode" ? "darkmode" : "lightmode"} mode
      </button>
      <img
        alt="cookie shop"
        src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
        alt="Cookies"
      />
    </div>
  );
};

export default Home;
