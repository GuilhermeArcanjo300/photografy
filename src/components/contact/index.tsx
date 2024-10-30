import './style.scss'
import Detail4 from '../../assets/img/details-page/detail4.png';

export function Contact() {
    return (
        <section>
            <div
                style={{backgroundImage: `url(${Detail4})`}}
            >
                <p>
                    Meios de contato e Redes sociais
                </p>
                <ul>
                    <li>
                        <p>(19) 99786-1306</p>
                    </li>
                    <li>
                        <p>@deise.akemi</p>
                    </li>
                    <li>
                        <p>Deise Akemi Fotografia</p>
                    </li>
                </ul>
            </div>
            <div>
                <p>Todos os direitos reservados</p>
            </div>
        </section>
    )
}