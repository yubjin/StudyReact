import pusandata from "./pusandata.json";
import ButtonBlue from "../comm/Buttonblue";
import GalleryCard from "../comm/GalleryCard";
import { useEffect, useRef, useState } from "react";
const Busan = () => {
    //상태
    const [Item, SetItem] = useState();
    const [tags, setTags] = useState();

    //select box
    const sel = useRef() ;


    console.log(pusandata);
    const code = pusandata.map((item) =>
        //[item['콘텐츠ID'], item.콘텐츠명.replace('(한,영, 중간,중번,일)', '')]
        //[item['콘텐츠ID'], item.콘텐츠명.split('(')[0]]
        [item['콘텐츠ID'], item.콘텐츠명.slice(0, item.콘텐츠명.lastIndexOf('('))]
    );
    console.log(code)
    const opTag = code.map((item)=>
        <option key={item[0]} value={item[0]}>{item[1]}</option>
    ) ;

    const handleOk = (e,msg) => {
        e.preventDefault();
        if(sel.current.value ==='') return;
        getData(sel.current.value);
    }

    const handleCancel = (e,msg) => {
        e.preventDefault();
        console.log(msg)
    }

    const handleChange = () => {
        console.log(sel.current.value)
    }

    const getData = (seq) =>{
        console.log("getdata", seq);
        const apikey = 'RjPYX4DzrdyutS8w7C9j9dGEfxizBG7c6TK%2FvS4VNxfzRZbJ6jtEVXoBE0gqWc1rBVgNGMJkWtjinbNAbgxGxA%3D%3D';
        let url = 'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?';
        url = url + `serviceKey=${apikey}`;
        url = url + `&pageNo=1&numOfRows=10&resultType=json`;
        url = url + `&UC_SEQ=${seq}`;

        fetch(url)
        .then((resp)=>resp.json())
        .then((data) =>SetItem(data.getFestivalKr.Item[0]))
        .catch((err)=>console.log(err));
    }

    useEffect(()=>{
        sel.current.focus();
    }, []);

    useEffect(()=>{
        if (Item === undefined) return;
        setTags(
            <GalleryCard
                key={Item.UC_SEQ}
                imgsrc={Item.MAIN_IMG_THUMB}
                title={Item.TITLE}
                content={Item.ITEMCNTNTS.length < 100 ? Item.ITEMCNTNTS : Item.ITEMCNTNTS.substring(0,100) + '...'}
                sptag={Item.PLACE.indexOf < 0 ? [Item.PLACE] : Item.PLACE.split(',')}
            />
        );
    }, [Item]);

    return (
        <main className="container">
            <article>
                <header>
                    <h1 className="text-2xl font-bold">부산축제정보</h1>
                </header>
                <form>
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-2">
                        <select ref={sel} id='sel' name='sel' onChange={handleChange}>
                            <option value=''>축제명을 선택하세요.</option>
                            {opTag}
                        </select>
                    </div>
                    <div>
                        <ButtonBlue caption='축제확인' handleClick={(e) => handleOk(e,'ok')} />
                    </div>
                    <div>
                        <ButtonBlue caption='취소' handleClick={(e) => handleCancel(e,'cancel')} />
                    </div>
                </div>
                </form>
            </article>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-38">
                {Item && tags}
            </section>
        </main>
    )
}

export default Busan