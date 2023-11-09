import Buttonblue from "../comm/Buttonblue" ;
const Div3 = ({n, setN}) => {
  const handleUp = () => {
    setN(n+1) ;
  }
  const handleDown = () => {
    setN(n-1) ;
  }

  return (
    <div className="bg-orange-300 text-orange-50 m-2 p-10 rounded-2xl">
      <h1 className="text-orange-50">Div3</h1>
     
      <div className="grid grid-cols-2 gap-4">
        <div><Buttonblue caption ="증가" handleClick = {handleUp} /></div> 
        <div><Buttonblue caption ="감소" handleClick = {handleDown} /></div>
      </div>
    </div>
  )
}

export default Div3