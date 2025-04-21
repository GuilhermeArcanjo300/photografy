import profileImage from '../../../public/img/profile.jpg';

export const AboutContent = () => {
    return (
        <div className="bg-black p-[5%] h-screen">
            <p className="text-[#F88F87] text-[48px] italiana-regular text-center mb-6">Sobre</p>
            <div className="flex items-center gap-[5%]">
                <div className="text-[24px] px-4 jomolhari-regular">
                    <p className="text-[#F88F87]">
                        Meu nome é Deise Akemi, trabalho com fotografia há mais de 4 anos profissionalmente, mas sou amante da fotografia desde pequena. Foi essa fascinação pela arte de fotografar que me levou a investir em uma máquina e me especializar na área. E continuo sempre em busca de mais conhecimentos para aperfeiçoar meu trabalho.
                    </p>
                    <p className="text-[#F88F87]">
                        Atualmente estou me especializando em Newborn, mas também trabalho com ensaios femininos, masculinos, infantil, gestantes e de família. Faço ensaios em área externa ou estúdio.
                    </p>
                </div>
                <div className="bg-[#F88F87] p-[4px] rounded-[4px] h-[calc(80vh-96px)]"></div>
                <img src={profileImage} alt="Sobre" className="object-cover w-[30vw]" />
            </div>
        </div>
    )
}