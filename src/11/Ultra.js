import { useParams } from 'react-router-dom';

const Ultra = ({dt, area, m, titem}) => {
    let ultraTite = area;
    ultraTite = ultraTite + (m === '1') ? '초단기 예보' : '단기예보';
    ultraTite = ultraTite + ' ('
                          + dt.substring(0,4)
                          + '-' + dt.substring(4,6)
                          + '-' + dt.substring(6,8) ;
    ultraTite = ultraTite + ')';


    const dt = useParams().dt;
    const area = useParams().area;
    const m = useParams().m;
    
  return (
    <div>
      Ultra
      {dt}, {area}, {m}
    </div>
  )
}

export default Ultra
