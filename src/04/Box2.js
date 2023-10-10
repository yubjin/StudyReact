import { useEffect, useRef, useState } from "react";
import Hh1 from "../comm/Hh1";
import style from './Box.module.css'

const Box2 = () =>{
    //날짜 선택
    const dt = useRef();
    //선택된 날짜
    const [cdt, setCdt] = useState();

    //컴포넌트 생성 시 포커스
    useEffect(() => {
        dt.current.focus();
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() -1);

        let y = `${yesterday.getFullYear()}`;
        let m = yesterday.getMonth()+1 <10 ? `0${yesterday.getMonth()+1}`
                                        : `${yesterday.getMonth()+1}`;
        let d = yesterday.getDate() < 10 ? `0${yesterday.getDate()}` : `${yesterday.getDate()}`

        //어제 날짜로 기본값 설정해주기
        dt.current.value = `${y}-${m}-${d}`
        setCdt(y+m+d);
    },[]);
    
    useEffect(() => {
        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230918';
        fetch(url)
            .then(resp => resp.json())
            .then(data => setBoxlist(data.boxOfficeResult.dailyBoxOfficeList))
            .catch(err => console.log(err));
    }, []);

    const handleChange =()=>{
        let temp = dt.current.value.replaceAll('-','');

        setCdt(temp);
    }


    return(
        <main className="container">
            <Hh1 title="박스오피스"/>
            <article>
                <header>
                    <div className={style.dt}>날짜선택 : {cdt}</div>
                    <form>
                        <input ref={dt}type="date" id="dt" name="dt" onChange={handleChange}/>
                    </form>
                </header>
            </article>
        </main>
    )
}

export default Box2