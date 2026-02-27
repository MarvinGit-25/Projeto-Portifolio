const Button = () => {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1mT5no8ryJJ9kUYCG_rx-XZmiaHhaSGpn/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <button onClick={handleClick} className="button-cv">
      Download CV
    </button>
  );
};

export default Button;
