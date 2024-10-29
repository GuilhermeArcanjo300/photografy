import ImageProfile from '../../assets/img/photograph/profile.png';

function About() {
    return (
        <div style={{backgroundColor: '#000', width: '100%', padding: '96px 48px', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <p style={{color: '#F88F87', textAlign: 'center', fontSize: '48px', paddingBottom: '24px'}}>
                Sobre
            </p>
            <div style={{width: '100%', maxWidth: '860px', display: 'flex'}}>
                <p style={{fontSize: '24px', color: '#F88F87', width: 'calc(60% - 56px)'}}>
                    Meu nome é Deise Akemi, trabalho com fotografia há mais de
                    4 anos profissionalmente, mas sou amante da
                    fotografia desde pequena. Foi essa fascinação pela
                    arte de fotografar que me levou a inveautstir em uma
                    máquina e me especializar na área. E continuo sempre
                    em busca de mais conhecimentos para aperfeiçoar
                    meu trabalho.
                    Atualmente estou me especializando em Newborn, mas também trabalho com ensaios femininos, masculinos, infantil,
                    gestantes e de família. Faço ensaios em área
                    externa ou estúdio.
                </p>
                <div style={{width: '6px', backgroundColor: '#F88F87', margin: '0px 24px 0px 24px', borderRadius: '4px'}}></div>
                <img src={ImageProfile} alt="Imagem Principal" style={{width: '40%'}} />
            </div>
        </div>
    )
}

export default About;