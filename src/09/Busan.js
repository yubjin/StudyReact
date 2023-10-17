import pusandata from "./pusandata.json";
import GalleryCard from "../comm/GalleryCard";
const Busan = () => {
    const item = pusandata.map((item, idx) =>
        <GalleryCard
        key={item.콘텐츠ID}
        imgsrc={item.썸네일이미지URL}
        title={item.제목}
        content={item.상세내용.length < 100 ? item.상세내용 : item.상세내용.substring(0,100) + '...'}
        sptag={item.장소.indexOf < 0 ? [item.장소] : item.장소.split(',')}
        />
    );
    console.log(item);

    return (
        <main className="container">
            <article>
                <header>
                    <h1 className="text-2xl font-bold">부산축제정보</h1>
                </header>
                <div>
                    {item}
                </div>
            </article>
        </main>
    )
}

export default Busan