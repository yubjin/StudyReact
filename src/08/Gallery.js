import { FcCamera } from "react-icons/fc";
import Buttonblue from "../comm/Buttonblue";
import GalleryCard from "./GalleryCard";
import { useEffect, useRef, useState } from "react";

const Gallery = () => {
    //키워드 상태 변수
    const [kw, Setkw] = useState();
    const [Item, SetItem] = useState();
    const [tags, setTags] = useState();

    //input box
    const txt1 = useRef();

    const handleOk = (e) =>{
        e.preventDefault();
        if (txt1.current.value === '') return;
        Setkw(txt1.current.value);
    }

    const handleCancel = (e) =>{
        e.preventDefault();
        txt1.current.value = '';
        txt1.current.focus();
        SetItem([]);
        console.log("Cancel")
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
        console.log("item", Item);if (Item === undefined) return ;
 
        setTags(
            Item.map((i) =>
                <GalleryCard key={i.galContentId}
                    imgsrc={i.galWebImageUrl.replace('http:', 'https:')}
                    title={i.galTitle}
                    content={i.galPhotographyLocation}
                    sptag={i.galSearchKeyword.split(',')}
                    refv={txt1}
                />

            )
        );

    }, [Item]);

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
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-38">
                {Item && tags}
            </section>
        </main>
    )
}

export default Gallery