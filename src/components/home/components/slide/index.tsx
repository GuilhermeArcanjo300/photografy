import './style.scss'

import slide1 from '../../../../assets/img/photograph/slide-1.jpg';

function Slide() {
    return (
        <div className='slide'>
            <div className='content' style={{backgroundImage: `url(${slide1})`}}></div>

            <div className='move'>
                <span></span>
                <span className='active'></span>
                <span></span>
            </div>
        </div>
    )
}

export default Slide;