import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import dogImg from '../../../public/hero-dog.webp' 
import catImg from '../../../public/gato-e-cachorro-juntos-olhando-para-a-camera-isolada-em-branco_191971-28715-removebg-preview.png' 
import Image from 'next/image'

export function Hero() {
    return (
        <section className="bg-[#F76700] text-white relative overflow-hidden">

            <div>
                <Image 
                src={dogImg}
                alt='Foto do cachorro mobile'
                fill
                priority
                sizes='100vw'
                className="object-cover opacity-60 lg:hidden"/>
            </div>

            <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>

            <div className="container max-auto pt-16 pb-16 md:pb-0 px-4 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10" data-aos="fade-down">Seu pet merece cuidado, carinho e atenção especial.</h1>
                        <p className="lg:text-lg" data-aos="fade-right">Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de quatro patas.</p>

                            <a
                            data-aos="fade-up"
                            target='_blank' 
                            href={'https://wa.me/5535991035237?text=Olá Wesley, vim pelo seu projeto de Página de Pet Shop'} 
                            className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2">
                                <WhatsappLogoIcon className="w-5 h-5" />
                                Contato via Whatsapp
                            </a>

                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra.
                            </p>

                            <div className="mt-8">
                                <div className="w-45 hidden lg:block">
                                    <Image 
                                        className="object-fill"
                                        src={catImg}
                                        quality={100}
                                        alt='Imagem do gato'/>
                                </div>
                            </div>

                        </div>
                    </div>    

                    <div className="hidden md:block h-full relative">
                        <Image 
                            src={dogImg}
                            alt='Foto do Dinki di'
                            className='object-contain'
                            fill
                            sizes="(max-width: 768px) 0vw, 50vw"
                            quality={100}
                            priority/>
                    </div>

                </article>
            </div>

        </section>
    )
}