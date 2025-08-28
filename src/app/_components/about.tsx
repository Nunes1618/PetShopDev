import Image from "next/image";
import aboutImage1 from '../../../public/about-1.png';
import aboutImage2 from '../../../public/about-2.png';
import { FaCheck } from 'react-icons/fa';
import { MapPinIcon, WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
    return (
        <section className="bg-[#F7E5C1] py-16">
            <div className="container px-4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
                    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                        <Image 
                            src={aboutImage1}
                            alt="Foto do cão"
                            fill
                            quality={100}
                            priority
                            className="object-cover hover:scale-110 duration-300"
                        />
                    </div>

                    <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                        <Image 
                            src={aboutImage2}
                            alt="Foto do cão 2"
                            fill
                            quality={100}
                            priority
                        />
                    </div>
                </div>

                <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
                    <h2 className="text-4xl font-bold">Sobre</h2>

                    <p>
                        Mudamos o conceito e a relação veterinário x paciente. Aqui o bem-estar do animal é o centro 
                        de nossas ações, dedicamos nossos esforços por uma melhor qualidade nos atendimentos imbuídos 
                        em salvar as vidas dos pets. Investimos numa estrutura moderna, com profissionais capacitados 
                        e especializados, afinal o seu pet merece.
                    </p>

                    <ul className="space-y-4">
                        <li className="flex items-center gap-2">
                            <FaCheck className="text-red-500"/>
                            Aberto desde 2006
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheck className="text-red-500"/>
                            Equipe com mais de 15 veterinários
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheck className="text-red-500"/>
                            Qualidade é nossa prioridade
                        </li>
                    </ul>

                    <div className="flex gap-2">
                        <a 
                        target='_blank' 
                        href={'https://wa.me/5535991035237?text=Olá Wesley, vim pelo seu projeto de Página de Pet Shop'} 
                        className="bg-green-500 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                            <WhatsappLogoIcon className="w-5 h-5 text-white" />
                            Contato via Whatsapp
                        </a>

                        <a href="#" className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                            <MapPinIcon className="w-5 h-5 text-black" />
                            Endereço da loja
                        </a>
                    </div>

                </div> 
                </div>

            </div>  
        </section>
    )
}