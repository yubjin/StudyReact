import { useEffect, useRef, useState } from "react"
import Buttonblue from "../comm/Buttonblue"
import getxy from "./getxy.json"
import { Link } from "react-router-dom";

const FrctMain = () => {

  //state변수
  const [dt,setDt] = useState(); //날짜
  const [area, setArea] = useState(); //지역
  const [x, setX] = useState(); //해당 지역의 x좌표
  const [y, setY] = useState(); //해당 지역의 y좌표

  const ops = getxy.map((item) =>
    <option value={item['행정구역코드']} key={item['행정구역코드']}>
      {item["1단계"]}
    </option>
  );

  //입력 폼
  const dtRef = useRef();
  const selRef = useRef();

  //사용자정의 함수: 날짜 변경 시 발생
  const dtChange = () =>{
    setDt(dtRef.current.value.replaceAll('-',''));
  }
  const handleAreaChange = () =>{
    //1.sel의 값을 가져옴
    
    //2.getxy에서 sel값과 행정구역코드가 같은 자료 추출
    let temp = getxy.filter((item) =>
          item['행정구역코드'] === parseInt(selRef.current.value) )[0];
  

    //3.상태변수 area, x, y를 변경
    setArea(temp['1단계']);
    setX(temp['격자 X']);
    setY(temp['격자 Y'])
  }


  
  //컴포넌트 생성시
  useEffect(() => {
    dtRef.current.focus();
  }, [])

  //dt 상태변수가 변경되었을 경우
  useEffect(() => {
    console.log("dt", dt);
  },[dt])

    //area, x, y 상태변수가 변경되었을 경우
  useEffect(() => {
    console.log("area", area, x, y);
  }, [area, x, y]);

  return (
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <div className="font-bold first-letter:col-span-1 md:col-span-2 text-xl">
          단기예보 입력정보
        </div>
          <div>
            <input ref={dtRef} type="date" id="dt" name="dt" onChange={dtChange}/>
          </div>
          <div>
            <select ref={selRef} id="sel" name="sel" onChange={handleAreaChange}>
              <option value=''>지역선택</option>
              {ops}
            </select>
          </div>
          <div>
          <Link to={`/ultra/${dt}/${area}/${x}/${y}`}><Buttonblue caption='초단기예보' /></Link>
          </div>
          <div>
          <Link to={`/ultra/${dt}/${area}/${x}/${y}`}><Buttonblue caption='단기예보' /></Link>
          </div>
      </div>
    </form>
  )
}

export default FrctMain
