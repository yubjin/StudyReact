import GalleryCard from "./GalleryCard";

const GalleryItem = ({Item}) => {
    console.log(Item);

    const tags = Item.map((i, idx)=>
        <GalleryCard key={i.galContentId}
                 imgsrc={i.galWebImageUrl.replace('http:','https:')}
                 title={i.galTitle} 
                 content={i.galPhotographyLocation} 
                 sptag={i.galSearchKeyword.split(',')}/>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
      {tags}
    </div>
  )
}

export default GalleryItem
