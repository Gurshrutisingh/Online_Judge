import '../App.css';

function Submitted({item, ...rest }) {
    const hed="</>";
    let color ;
    if(item.verdict=="Correct")
    {
        color="#D0F0C0";
    }
    else if(item.verdict=="Wrong")
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
      <div className='sub-name'>{item.user}</div>
      <div className='sub-ver'>{item.verdict}</div>
      <button className='sub-btn'>{hed}</button>
      </div>
    </>
  )
}

export default Submitted
