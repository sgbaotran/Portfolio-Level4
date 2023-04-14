import './Experience.css'
import timeLineItems from '../data/items.json'

export default function Experience(){

    const timeLine = timeLineItems.map( timeLineItem =>
         {
            const position =  (timeLineItem.id % 2 !== 0) ? 'left-item' : 'right-item';
            const className = 'timeline-item ' + position;

            return (
            
            <div className = {className}>
                {/* ??? */}
                <img src={require(`../media/${timeLineItem.image}`)} alt='' className=' timeline-icon' /> 

                
                <div className='timeline-item-container shadow-2xl'>

                    <h2 className=' timeline-name text-xl '>{timeLineItem.name} </h2>

                    <p className=' timeline-date text-slate-700 py-1 font-black'>{timeLineItem.date} </p>

                    <p className='timeline-description '>{timeLineItem.description} </p>

                    <span className={position+'-arrow'} ></span>
                </div>                
            </div>
            )
        }
    )


    return(
    
    <>
        <h2 className='timeline-title text-center text-white' >WORK EXPERIENCE</h2>
    
        <div className='container timeline'>
            {timeLine}    
        </div>
    
    </>

    )
}