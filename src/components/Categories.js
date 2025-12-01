const Categories = ({categories,onSelect}) => {
  const arr=['red', 'green', 'purple', 'blue'];
  const url = process.env.PUBLIC_URL;
  return (
    <div id="categories">
      <h1 className="h1class">도서 스페셜 퀴즈</h1>
       <p className="pclass">BOOK SPECIAL QUIZ</p>
       <h2>주제를 선택해 주세요!</h2>
       <ul className="wrap">
        {
        categories.map((item,idx)=>{
          
          return(
           <li key={idx}
               onClick={()=>{onSelect(item)}}
           >
            <img src={`${url}/images/img0${idx+1}_${arr[idx]}.png`} className="shape shape1" alt="shape1" />
            <p>{item}</p>
            </li>
          ) 
        })
      }
       </ul>
      </div>
  )
}
export default Categories