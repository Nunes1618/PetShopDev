import royal from '../../../public/royal.png'
import golden from '../../../public/golden.png'
import primier from '../../../public/primier.png'
import natural from '../../../public/natural.png'
import whiskas from '../../../public/whiskas.png'
import Image from 'next/image'
import { FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react/dist/ssr'

const brands = [
    { name: "Royal Canin", logo: royal },
    { name: "Golden", logo: golden },
    { name: "Primier", logo: primier },
    { name: "Formula natural", logo: natural },
    { name: "Whiskas", logo: whiskas },
]

export default function Footer() {
    return (
       <section className='bg-[#F76700] py-16 text-white'>
        <div className='container mx-auto px-4'>

            <div className='border-b border-white/20 pb-8'>
                <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>

                <div className='grid grid-cols-2 lg:grid-cols-5 gap-8'>
                    {brands.map((item, index) => (
                        <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                            <Image 
                            src={item.logo}
                            alt={item.name}
                            width={100}
                            height={50}
                            quality={100}
                            style={{
                                width: "auto",
                                height: "auto",
                            }}
                            className='object-contain'
                            />
                        </div>
                    ))}
                </div>
            </div>

            <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5 mx-auto'>
                <div>
                    <h3 className='text-2xl font-semibold mb-2'>Pet Shop Dev</h3>
                    <p className='mb-4'>Cuidando do seu amigo com amor e dedicação</p>
                    <a 
                    target='_blank' 
                    href={'https://wa.me/5535991035237?text=Olá Wesley, vim pelo seu projeto de Página de Pet Shop'} 
                    className='bg-green-500 px-4 py-2 rounded-md'>
                        Contato via Whatsapp
                    </a>
                </div>

                <div>
                    <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
                    <p>Email: wesley.nunes75@gmail.com</p>
                    <p>Telefone: (35) 9 9103-5237</p>
                    <p>Endereço: Lavras | Minas Gerais</p>
                </div>

                <div>
                    <h3 className='text-2xl font-semibold mb-2'>Redes sociais</h3>
                    <div className='gap-4 flex'>
                        <a href="#">
                            <FacebookLogoIcon className='w-8 h-8'/>
                        </a>
                        <a href="#">
                            <InstagramLogoIcon className='w-8 h-8'/>
                        </a>
                        <a href="#">
                            <YoutubeLogoIcon className='w-8 h-8'/>
                        </a>
                    </div>
                </div>

            </footer>

        </div>
       </section> 
    )
}