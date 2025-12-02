const Results = ({ onReStart, score }) => {
  const url = process.env.PUBLIC_URL;
  return (
    <div id="result">
      <h1 className="h1class">도서 스페셜 퀴즈</h1>
      <p className="pclass">BOOK SPECIAL QUIZ</p>
      <p className="pclose1">퀴즈 종료</p>
      
      

      
      
      <div className="img-wrap">
        <img
          src={`${url}/images/img01_red.png`}
          className="shape shape2"
          alt="shape1"
        />
        <p>최종 점수</p>
        <span>{score}점</span>
      </div>
      <button onClick={onReStart}>
        <p>재도전 하기</p>
      </button>
    </div>
  );
};
export default Results;
