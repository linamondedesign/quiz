import { useState } from "react"

const QuizPage = ({quizes,onFinish,onScore,score,category}) => {
  const [current,setCurrent] = useState(0);
  const handleClick =(idx)=>{
    //정답체크
    if(idx+1===quizes[current].correct){
      //점수를 +20
      onScore();
    }
    if( current+1 < quizes.length ){
    setCurrent(current+1);
    } else {
      onFinish(true);
    }
  }
/*4가지 테마 색상*/
 const themeColors = ['#F2644D', '#22B299', '#7893D4', '#3CADDE'];

  return (
    <div id="quiz-page">
      <div className="cotainer-part">
        <p className="part-title">PART {category}</p>
      </div>
      <p>QUIZ {current+1}</p>
      <p>{quizes[current].question}</p>
      <ul className="choices">
        {
        quizes[current].choices.map((item,idx)=>{
          return (
            <li key={idx}
               onClick={()=>{handleClick(idx)}}
               style={{ backgroundColor: themeColors[idx % themeColors.length] }}
               >{idx+1}.{item}</li>
          )
        })
        }
      </ul>
      <h3>퀴즈({current+1}/{quizes.length}) </h3>
      <p>현재점수 : {score}점</p>
    </div>
  )
}

export default QuizPage