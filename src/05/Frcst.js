import Hh1 from '../comm/Hh1'
import data from './dataFrcst.json'
import style from './Frcst.module.css'
import { useEffect, useState } from 'react';

const Frcst = () => {
    console.log(data)

    const dtkey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
    const cnkey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];
    const [cnTag, setcnTag] = useState();

    const handleClick =(k) =>{
        let temp = dtcn[k].split(',');
        temp = temp.map((item,  idx)=>{
            let spitem = item.split(':');
            return(
                <div key={`cn`+idx}>
                    <span className={style.sp1}>{spitem[0]}</span>
                    {spitem[1].trim() ==='낮음'
                    ? <span className={style.sp2}>{spitem[1]}</span>
                    : spitem[1].trim() === '보통'
                    ? <span className={style.sp3}>{spitem[1]}</span>
                    : <span className={style.sp4}>{spitem[1]}</span>
            }
                </div>
            )
        });
        setcnTag(temp);
    };



    let dtcn = {} ;
    dtkey.map((item,idx)=>
        dtcn[data[item]] = data[cnkey[idx]]
    );
    console.log("dtcn",dtcn)

    console.log("dtcn key", Object.keys(dtcn))
    
    let dtTag = Object.keys(dtcn).map((item,idx)=>
        <div 
            key={`dtcn${idx}`} 
            className={style.dtcnkey}
            onClick={()=>{handleClick(item)}}
        >
            {item}
        </div>
    )

    


    return (
        <main className='container'>
            <article>
                <Hh1 title='미세먼지확인'/>
                <div className="grid">
                    {dtTag}
                </div>
                <div className='grid'>{cnTag}</div>
        </article>
    </main>
  )

};

export default Frcst
