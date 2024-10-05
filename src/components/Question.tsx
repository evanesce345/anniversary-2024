interface Props {
  question: string;
  yes: string;
  no: string;

  handleIncreaseYes: () => void;
  handleSetNo: () => void;

  large: string;
  small: string;
}

function Question({
  question,
  yes,
  no,
  handleIncreaseYes,
  handleSetNo,
  large,
  small,
}: Props) {
  return (
    <>
      <h1>{question}</h1>
      <div className="buttons">
        <button className={"yes " + small} onClick={handleIncreaseYes}>
          {yes}
        </button>
        <button className={"no " + large} onClick={handleSetNo}>
          {no}
        </button>
      </div>
    </>
  );
}

export default Question;
