import { useEffect, useState } from "react";
import LottoNums from "./LottoNums";

const Lotto = () => {
    const [nums, setNums] = useState();
    
    const handleClick= () =>{
        let temp = [];

        while(temp.length <7){
            let n = Math.floor(Math.random() * 45) + 1;
            if (temp.indexOf(n) < 0) temp.push(n);
        }
        setNums(temp);
    }

    useEffect(()=>{
        let temp = [];

        while(temp.length <7){
            let n = Math.floor(Math.random() * 45) + 1;
            if (temp.indexOf(n) < 0) temp.push(n);
        }
        console.log(temp)
        
    }, []);
 
    return (
        <main className="container">
            <article>
                <header>
                    <h1>로또생성기</h1>
                </header>
                {nums ? <LottoNums ns ={nums}/>: '숫자가 없습니다.'}
                <footer>
                    {/* <button onClick={getNum}>생성하기</button> */}
                    <button onClick={handleClick}>생성하기</button>
                </footer>
            </article> 
        </main>
    );
}

export default Lotto;