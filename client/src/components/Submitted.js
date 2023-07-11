import '../App.css';

function Submitted(props) {
    const hed="</>";
    let color ;
    if(props.verdict=="Correct")
    {
        color="#D0F0C0";
    }
    else if(props.verdict=="Wrong")
    {
        color="#FFCCCB";
    }
    else
    {
       color = '#bdccd5'
    }
  return (
    <>
      <div className='problem'style={{backgroundColor: color}}>
      <div className='sub-name'>{props.name}</div>
      <div className='sub-ver'>{props.verdict}</div>
      </div>
    </>
  )
}

export default Submitted
