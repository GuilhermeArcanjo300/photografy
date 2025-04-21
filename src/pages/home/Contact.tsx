import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { FiFacebook } from "react-icons/fi"

export const ContactContent = () => {
    return (
        <>
            <div className="p-[5%]">
                <p className="text-[48px] italiana-regular mb-8">Meios de contato e Redes sociais</p>
                <div className="pl-[5%] text-[18px] leading-10 jomolhari-regular">
                    <p className="flex items-center gap-2"><FaWhatsapp />(19) 99786-1306</p>
                    <p className="flex items-center gap-2"><FaInstagram />@deise.akemi</p>
                    <p className="flex items-center gap-2"><FiFacebook />Deise Akemi Fotografia</p>
                </div>
            </div>
            <div className="p-6 bg-[#F88F87]">
                <p className="text-center text-[16px] jomolhari-regular">Todos os direitos de imagem e desenvolvimento reservados</p>
            </div>
        </>
    )
}