import profile from '../../assets/image/profile.png';

const About = () => {
  return (
    <div className="w-screen flex flex-col items-center">
        <p className="font-sans text-5xl text-primary mb-4 mt-16">Sobre</p>
        <div className='flex p-[5%] pt-4 items-center'>
            <div className='w-[60%] pr-[5%]'>
                <p className='font-sans text-primary text-2xl'>
                            Meu nome é Deise Akemi, trabalho com fotografia há mais de
                    3 anos profissionalmente, mas sou amante da
                    fotografia desde pequena. Foi essa fascinação pela
                    arte de fotografar que me levou a investir em uma
                    máquina e me especializar na área. E continuo sempre
                    em busca de mais conhecimentos para aperfeiçoar
                    meu trabalho.<br/>
                    Trabalho com ensaios femininos, masculino, infantil,
                    gestantes, de família e Newborn. Faço ensaios em área
                    externa ou estúdio. Levo sempre 1 ou 2 assistentes para
                    ajudar no ensaio.<br/>
                    Vamos agendar uma data para registrar esse momento
                    maravilhoso!!!
                </p>
            </div>
            <div className='w-[40%] pl-[5%] border-l-4 border-primary'>
                <img src={profile} alt="Profile" className="w-full" />
            </div>
        </div>
    </div>
  );
}

export default About;