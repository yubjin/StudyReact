import { useParams } from "react-router-dom" ;
import { useEffect, useState } from "react";
import getcode from './getcode.json'

const UltraSrtFcst = () => {
  const [items, setItems] = useState() ;
  const [trs, setTrs] = useState();
  const [myItem, setMyItem] = useState();

  const ops = getcode.filter((code)=> code['예보구분'] == '초단기예보').map(() => <option value={code['항목값']} key={code['항목값']}>{code['항목값']}</option>)

  // 파라미터로 전송되는 자료 추출
  const dt = useParams().dt ;
  const area = useParams().area ;
  const x = useParams().x ;
  const y = useParams().y ;

  useEffect(()=>{
      const apikey = 'RjPYX4DzrdyutS8w7C9j9dGEfxizBG7c6TK%2FvS4VNxfzRZbJ6jtEVXoBE0gqWc1rBVgNGMJkWtjinbNAbgxGxA%3D%3D'
      let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?'
      url = url + `serviceKey=${apikey}`
      url = url + `&pageNo=1&numOfRows=60`
      url = url + `&dataType=json&base_date=${dt}`
      url = url + `&base_time=0630&nx=${x}&ny=${y}`
      fetch(url)
      .then(resp => resp.json())
      .then(data => setItems(data.response.body.items.item))
      .catch(err => console.log(err))

    }, []);

    useEffect(() => {
      console.log(items)
    }, [items]);
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 gap-4  mt-8 p-10">
        <div className="font-bold text-xl">
            초단기예보 : {area} ({dt.substring(0,4)}-{dt.substring(4,6)}-{dt.substring(6,8)})
        </div>
        <div>
          <select id='sel' name='sel'>
            <option value=''>항목선택</option>
          </select>
        </div>
    </div>
    
  )
}

export default UltraSrtFcst
