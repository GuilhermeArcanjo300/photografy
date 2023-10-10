import newBorn from '../../assets/image/new-born.jpg';
import gestante from '../../assets/image/gestante.png';
import acompanhamento from '../../assets/image/acompanhamento.png';
import infantil from '../../assets/image/infantil.png';

const Shoots = () => {
    return (
        <div className="w-screen p-11 bg-white min-h-screen flex flex-col items-center">
            <p className="font-sans text-5xl mb-12">Ensaios</p>

            <div className="w-full flex items-center mb-12">
                <div className='flex-1'>
                    <img src={newBorn} alt="New Born" className="flex-1 w-full" />
                </div>
                <p className="font-sans text-3xl text-center px-8">Especialidade em<br/>Newborn</p>
            </div>

            <div className='w-full flex items-center justify-between'>
                <p className="font-sans text-3xl text-center px-8 w-[30%]">Demais ensaios</p>
                <div className='flex justify-between space-x-8 w-[60%]'>
                    <div className="w-2/6">
                        <img src={gestante} alt="Gestante" className='w-full' />
                    </div>
                    <div className="w-2/6">
                        <img src={acompanhamento} alt="Gestante" className='w-full' />
                    </div>
                    <div className="w-2/6">
                        <img src={infantil} alt="Gestante" className='w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shoots;