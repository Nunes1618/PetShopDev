"use client"

import UseEmblaCarousel from "embla-carousel-react"
import { FaChevronLeft, FaChevronRight, FaHandScissors, FaSyringe, FaTaxi, FaHotel, FaClock } from "react-icons/fa" 
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"
import useEmblaCarousel from "embla-carousel-react"

const services = [
    {
        title: "Banho e tosa",
        description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizadas (Higiênica ou estilizada).",
        duration: "1hr",
        price: "R$ 50,00",
        icon: <FaHandScissors />,
        linkText: "Olá, vi no site sobre banho e tosa e gostaria de mais informações."
    },
    {
        title: "Consulta Veterinária",
        description: "Oferece atendimento clínico básico u especializado para cuidar da saúde do animal.",
        duration: "1hr",
        price: "R$ 45,00",
        icon: <FaSyringe />,
        linkText: "Olá, vi no site sobre a consulta e gostaria de mais informações."
    },
    {
        title: "Táxi Pet",
        description: "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adqueado para locomover os animais",
        duration: "2hr",
        price: "R$ 80,00",
        icon: <FaTaxi />,
        linkText: "Olá, vi no site sobre o serviço de Táxi Pet e gostaria de mais informações."
    },
    {
        title: "Hotel para Pets",
        description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
        duration: "2hr",
        price: "R$ 150,00",
        icon: <FaHotel />,
        linkText: "Olá, vi no site sobre o serviço hospedagem para Pets e gostaria de mais informações."
    },
]

export function Services() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 3}
    }
})

    function scroolPrev(){
        emblaApi?.scrollPrev();
    }
    function scroolNext(){
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12">Conheça nossos serviços</h2>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {services.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex-1 flex items-start justify-between">
                                            
                                            <div className="flex gap-3">
                                                <span className="text-3xl">{item.icon}</span>
                                                <div>
                                                    <h3 className="font-bold text-xl my-1">{item.title}</h3>
                                                    <p className="text-gray-400 text-sm select-none">{item.description}</p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm">
                                                <FaClock className="w-4 h-4" />
                                                <span>{item.duration}</span>
                                            </div>
                                        </div>

                                        <a 
                                        target='_blank' 
                                        href={'https://wa.me/5535991035237?text=Olá Wesley, vim pelo seu projeto de Página de Pet Shop'}  
                                        className="flex items-center justify-center gap-2 hover:bg-green-500 px-4 py-1 rounded-md duration-400">
                                            Entrar em contato
                                            <WhatsappLogoIcon className="w-5 h-5" /> 
                                        </a>

                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 cursor-pointer">
                        <FaChevronLeft className="w-6 h-6 text-gray-600" onClick={scroolPrev}/>
                    </button>

                    <button className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 cursor-pointer">
                        <FaChevronRight className="w-6 h-6 text-gray-600" onClick={scroolNext}/>
                    </button>

                </div>

            </div>
        </section>
    )
}