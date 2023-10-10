import { FcCamera } from "react-icons/fc";
import Buttonblue from "../comm/Buttonblue";
import GalleryItem from "./GalleryItem";
import { useEffect, useRef, useState } from "react";

const Gallery = () => {
    //키워드 상태 변수
    const [kw, Setkw] = useState();
    const [Item, SetItem] = useState();

    //input box
    const txt1 = useRef();

    const handleOk = (e) =>{
        e.preventDefault();
        if (txt1.current.value === '') return;
        Setkw(txt1.current.value);
    }

    const handleCancel = (e) =>{
        e.preventDefault();
    }

    const getData = (kw) =>{
        console.log("getdata", kw);
        const apikey = 'RjPYX4DzrdyutS8w7C9j9dGEfxizBG7c6TK%2FvS4VNxfzRZbJ6jtEVXoBE0gqWc1rBVgNGMJkWtjinbNAbgxGxA%3D%3D';
        //키워드 인코딩
        const enKw = encodeURI(kw);
        let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?';
        url = url + `serviceKey=${apikey}`;
        url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest`;
        url = url + `&arrange=A`;
        url = url + `&keyword=${enKw}`;
        url = url + `&_type=json`;

        fetch(url)
        .then((resp)=>resp.json())
        .then((data) =>SetItem(data.response.body.items.item))
        .catch((err)=>console.log(err));
    }

    //컴포넌트 생성 시 
    useEffect(()=>{
        txt1.current.focus();
    }, [])

    //컴포넌트가 업데이트 될 때
    useEffect(()=>{
        console.log(kw);
        getData(kw);
    },[kw])

    useEffect(()=>{
        console.log("item", Item);
    },[Item])

    return (
        <main className="container">
            <article>
                <header className="flex justify-center items-center">
                    <div className="text-3xl font-bold">
                        한국관광공사 관광사진 정보
                    </div>
                    <div>
                        <FcCamera className="text-4xl font-bold"/>
                    </div>
                </header>
                <form>
                    <div className="grid">
                        <div>
                            <input ref={txt1} type="text" id="txt1" name="txt1" placeholder="키워드를 입력하세요."/>   
                        </div>
                        <div className="grid">
                            <Buttonblue caption='확인' handleClick={handleOk}/>
                            <Buttonblue caption='취소' handleClick={handleCancel}/>
                        </div>
                    </div>
                </form>
            </article>
            <section>
                {Item && <GalleryItem Item ={Item}/>}
            </section>
        </main>
    )
}

export default Gallery