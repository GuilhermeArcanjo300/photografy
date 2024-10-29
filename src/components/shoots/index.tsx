import './style.scss'
import ImagePrincipal from '../../assets/img/photograph/shoots-main.jpg'
import ImageShoots1 from '../../assets/img/photograph/shoots1.png'
import ImageShoots2 from '../../assets/img/photograph/shoots2.png'
import ImageShoots3 from '../../assets/img/photograph/shoots3.png'
import ImageDatail1 from '../../assets/img/details-page/detail1.png'
import ImageDatail2 from '../../assets/img/details-page/detail2.png'
import ImageDatail3 from '../../assets/img/details-page/detail3.png'

function Shoots() {
    return (
        <div className="main">
            <img src={ImageDatail1} alt="Imagem Principal" style={{position: 'absolute', left: '0px', top: '-160px', width: '240px'}} />
            <img src={ImageDatail2} alt="Imagem Principal" style={{position: 'absolute', right: '0px', top: '-160px', width: '240px'}} />
            <img src={ImageDatail3} alt="Imagem Principal" style={{position: 'absolute', left: '0px', bottom: '-180px', width: '480px'}} />
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={ImagePrincipal} alt="Imagem Principal" style={{width: '55%'}} />
                <p style={{fontSize: '44px', width: '100%', textAlign: 'center'}}>
                    Especialidade em<br/>Newborn
                </p>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '30% 1fr 1fr 1fr', gap: '24px', alignItems: 'center', marginTop: '64px'}}>
                <p style={{fontSize: '44px', textAlign: 'center', width: '100%'}}>
                    Demais ensaios
                </p>
                <img src={ImageShoots1} alt="Imagem Principal" style={{width: '100%'}} />
                <img src={ImageShoots2} alt="Imagem Principal" style={{width: '100%'}} />
                <img src={ImageShoots3} alt="Imagem Principal" style={{width: '100%'}} />
            </div>
        </div>
    )
}

export default Shoots;