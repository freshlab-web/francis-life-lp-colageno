
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, ShieldCheck, Truck, CreditCard, Clock, Heart, Sparkles, Zap, Droplets } from "lucide-react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Linkedin from "../components/IconeLinkedin"
import Instagram from "../components/IconeInstagram"

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Revitalize sua pele",
      description: "Reduza rugas e linhas finas com o poder do colágeno."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      title: "Estimule cabelo e unhas fortes",
      description: "Biotina para crescimento saudável e resistência."
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-500" />,
      title: "Hidrate profundamente a pele",
      description: "Ácido hialurônico para um visual luminoso e jovem."
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "Aumente sua energia celular",
      description: "Coenzima Q10 ajuda a proteger e energizar suas células."
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Nunca acreditei até experimentar. Minha pele parece 10 anos mais jovem e minha energia aumentou muito. Recomendo!",
      rating: 5
    },
    {
      name: "Ana Costa", 
      text: "Após 2 meses, minhas unhas ficaram muito mais fortes e meu cabelo, mais brilhante. Estou impressionada!",
      rating: 5
    },
    {
      name: "João Pereira",
      text: "Sinto minha pele mais hidratada e com aspecto saudável. Um produto de qualidade que recomendo.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Como o produto age na minha pele?",
      answer: "Estimula a regeneração celular e hidrata profundamente, reduzindo rugas e melhorando textura."
    },
    {
      question: "Quais benefícios terei para cabelo e unhas?",
      answer: "A biotina fortalece e estimula o crescimento, garantindo fios e unhas mais resistentes."
    },
    {
      question: "Em quanto tempo posso ver resultados?",
      answer: "Melhorias visíveis em 4-6 semanas; resultados mais expressivos após 3 meses."
    },
    {
      question: "Como devo consumir o produto?",
      answer: "Recomendamos dissolver 1 medida em água, uma vez ao dia. Use continuamente para melhores resultados."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://cdn.jsdelivr.net/gh/freshlab-web/francis-life-lp-colageno@main/dist/lovable-uploads/2a61e190-c51a-40d7-ac8d-30301795ad97.png" 
              alt="Francis Life"
              className="h-12 w-auto"
            />
          </div>
          <Button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
            Compre Agora
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                Revitalize Sua Beleza Natural com Colágeno
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Fortaleça sua pele, cabelo, unhas com nossa fórmula avançada e exclusiva.
              </p>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-lg font-semibold">4.9/5</span>
                </div>
                <div className="text-gray-600">
                  <span className="font-semibold text-lg">+10.000</span> clientes satisfeitos
                </div>
              </div>

              <div className="space-y-4">
                <Button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-200 w-full lg:w-auto">
                  Compre Agora
                </Button>
                <p className="text-sm text-gray-500">
                  Clique e experimente a transformação!
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <img src="https://cdn.jsdelivr.net/gh/freshlab-web/francis-life-lp-colageno@refs/heads/main/dist/lovable-uploads/colageno.webp"
                   alt="Mulher sorrindo com pele radiante" className="rounded-2xl [filter:drop-shadow(0_0_30px_#0003)] mx-auto max-w-md w-full hover:[scale:1.02] duration-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              <span className="text-lg font-semibold">Mais de 10 mil clientes satisfeitos!</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-green-100 text-green-800 px-3 py-1">
                ⭐ 4.9/5 de avaliação
              </Badge>
            </div>
            <div className="text-gray-600 font-medium">
              98% recomendam
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Benefícios que você vai amar
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.jsdelivr.net/gh/freshlab-web/francis-life-lp-colageno@refs/heads/main/dist/lovable-uploads/colagneo2.webp"
                alt="Mulher sorrindo"
                className="rounded-2xl shadow-2xl w-full h-[35rem] block object-cover object-[0_-9rem]"
              />
            </div>
            
            <div>
              <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-balance py-3 max-w-[450px]">
                O que torna nosso colágeno único?
              </h2>
              
              <p className="text-3xl text-gray-600 mb-8 leading-relaxed !leading-none max-w-[450px]">
                nosso suplemento oferece qualidade premium e resultados visíveis.
              </p>
              
              {/* <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-800">Colágeno:</strong> essencial para a firmeza e elasticidade da pele
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-800">Ácido Hialurônico:</strong> hidrata profundamente, melhorando textura e viço
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-800">Coenzima Q10:</strong> antioxidante que aumenta a energia celular e protege o coração
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-800">Biotina:</strong> fortalece cabelo e unhas, promovendo crescimento saudável
                  </div>
                </div>
              </div> 
              
              <p className="text-gray-600 italic">
                Desenvolvido com nanotecnologia, nosso suplemento oferece qualidade premium e resultados visíveis.
              </p>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 [background-blend-mode:darken] bg-[linear-gradient(0deg,#0005,#0005),url('https://cdn.jsdelivr.net/gh/freshlab-web/francis-life-lp-colageno@refs/heads/main/dist/lovable-uploads/fundoColageno.webp')] bg-center bg-fixed bg-cover">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Fórmula Exclusiva</h2>
          <p className="text-2xl text-gray-50 leading-relaxed text-balance">
            Sentindo que a pele perde vitalidade com o tempo? Nossa fórmula exclusiva foi criada para revitalizar sua beleza natural, atuando profundamente na hidratação, firmeza e energia da pele, além de cuidar do cabelo e unhas.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Depoimentos Reais
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white/80 backdrop-blur hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-gray-800">
                    - {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-600 to-orange-600">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <Badge className="bg-red-500 text-white mb-4 px-4 py-2 text-lg">
                  OFERTA ESPECIAL
                </Badge>
                <h2 className="text-4xl font-bold text-gray-800 mb-4 text-balance ">
                  Garanta já seu Colágeno com Fórmula Exclusiva!
                </h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <div className="mb-6">
                    <span className="text-2xl text-gray-500 line-through">De R$ 479,99</span>
                    <div className="text-5xl font-bold text-pink-600">R$ 379,99</div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    Colágeno Francis Life
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Suplemento Alimentar em pó para cabelos, pele e unhas
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2">
                      <Truck className="w-5 h-5 text-green-600" />
                      <span className="text-green-600 font-medium">Frete grátis nas compras acima de R$ 399,00</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-600">Estoque limitado – garanta já o seu!</span>
                    </div>
                  </div>
                  
                  <Button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-12 py-4 rounded-full text-xl font-semibold shadow-xl transform hover:scale-105 transition-all duration-200 w-full lg:w-auto">
                    COMPRE AGORA
                  </Button>
                </div>
                
                <div className="text-center">
                  <img src="https://cdn.jsdelivr.net/gh/freshlab-web/francis-life-lp-colageno@refs/heads/main/dist/lovable-uploads/colageno.webp"
                    alt="Colágeno Francis Life" className="mx-auto max-w-xs w-full"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 px-4 h-[500px] [background-blend-mode:darken] bg-[linear-gradient(0deg,#0005,#0005),url('https://cdn.jsdelivr.net/gh/freshlab-web/francis-life-lp-colageno@refs/heads/main/dist/lovable-uploads/fundoColageno2.webp')] bg-center bg-fixed bg-cover">
        
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Perguntas Frequentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-pink-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="[&_img]:object-contain [&_img]:mx-auto [&_img]:w-auto [&_img]:h-auto [&_ul]:items-center [&_img]:rounded-xl sm:px-20 px-5 py-20 [&_img]:w-auto [&_img]:object-contain [&_img]:block [&_img]:!h-[10rem]">
        <h2 className="text-2xl md:text-4xl font-bold text-francis-dark mb-6 font-inter text-center text-gray-800">Francis Life é Destaque na mídia</h2> <br/><br/>
        <Splide options={{perPage:4, pauseOnHover:false, pauseOnFocus:false, gap:'1rem', autoplay:true, type:'loop', pagination:false, breakpoints:{1120:{perPage:3},960:{perPage:2},640:{perPage:1}}}}>
          <SplideSlide data-splide-interval="2500">
            <img src="https://cdn.jsdelivr.net/gh/freshlab-web/francis-life-lp-creatina@refs/heads/main/dist/lovable-uploads/logo-redetv.webp"/>
          </SplideSlide>

          <SplideSlide data-splide-interval="2500">
            <img src="https://cdn.jsdelivr.net/gh/freshlab-web/francis-life-lp-creatina@refs/heads/main/dist/lovable-uploads/logo-record.webp"/>
          </SplideSlide>

          <SplideSlide data-splide-interval="2500">
            <img src="https://cdn.jsdelivr.net/gh/freshlab-web/francis-life-lp-creatina@refs/heads/main/dist/lovable-uploads/logo-donosbola.webp"/>
          </SplideSlide>

          <SplideSlide data-splide-interval="2500">
            <img src="https://cdn.jsdelivr.net/gh/freshlab-web/francis-life-lp-creatina@refs/heads/main/dist/lovable-uploads/logo-boranews.webp"/>
          </SplideSlide>
        </Splide>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-5xl font-bold mb-6">
            Pronto para transformar sua beleza?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Aproveite ofertas exclusivas! Estoque limitado.
          </p>
          
          <Button className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-4 rounded-full text-xl font-semibold shadow-xl transform hover:scale-105 transition-all duration-200">
            Compre Agora
          </Button>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <Truck className="w-6 h-6" />
              <span>Frete grátis para compras acima de R$399,00</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-6 h-6" />
              <span>Entrega rápida em até 7 dias úteis</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CreditCard className="w-6 h-6" />
              <span>Pagamento seguro com várias opções</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#264653] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <img 
              src="https://cdn.jsdelivr.net/gh/freshlab-web/francis-life-lp-creatina@main/dist/lovable-uploads/074ae349-8ac1-44b2-8801-5f709c4c6b98.png" 
              alt="Francis Life" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-white/80 leading-relaxed">
              Mais do que suplementos, oferecemos soluções completas para sua saúde e bem-estar.
            </p>
            <div className="flex justify-start gap-12 items-center [&_img]:w-32 mt-12 [&_svg]:w-5 [&_path]:fill-white">
            <a href="https://www.linkedin.com/company/francis-life-produtos-naturais-ltda/" target="_blank"><Linkedin/></a>
            <a href="https://www.instagram.com/francislifesuplementos/" target="_blank"><Instagram/></a>
          </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 font-inter">Links Rápidos</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#diferenciais" className="hover:text-francis-gold transition-colors">Diferenciais</a></li>
              <li><a href="#depoimentos" className="hover:text-francis-gold transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-francis-gold transition-colors">FAQ</a></li>
              <li><a href="#oferta" className="hover:text-francis-gold transition-colors">Oferta Especial</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 font-inter">Informações de contato:</h3>
            <ul className="space-y-2 text-white/80">
              <li>SAC: (11) 5588-7878</li>
              <li>Email: <a href="mailto:atendimento@francislife.com.br" target="_blank">atendimento@francislife.com.br</a></li>
              <li>Localização: <a target="_blank" href="https://www.google.com/maps?sca_esv=45c8bf4228d081b3&output=search&q=R.+Prof.+Apr%C3%ADgio+Gonzaga,+78+-+S%C3%A3o+Judas,+S%C3%A3o+Paulo+-+SP,+04303-000&source=lnms&fbs=AIIjpHxX5k-tONtMCu8aDeA7E5WMlVZjGnBiGIxaghLPqA-PlfgbLKUxiHcJwD8uXnH2piRyKM12_cSdaiHx34ICa6job54HaXV5uis1-k7h9VLxS8xdSsgmtZJ_jbed6F347LGucFrWzysfWZaudhxEXuj17yWsIk42rBNqT6PpnzHrad1eHSwEzPbq2m0hQFarm_qPBYmWfS4ORIyQfTop1lhtGB29Mw&entry=mc&ved=1t:200715&ictx=111">
              R. Prof. Aprígio Gonzaga, 78 - São Judas, São Paulo - SP, 04303-000</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <div className="flex justify-center gap-12 items-center [&_img]:w-32 mb-12">
            <img src="https://www.francislifesuplementos.com.br/wp-content/uploads/2023/05/compra-segura.webp"/>
            <img src="https://www.francislifesuplementos.com.br/wp-content/uploads/2023/05/site-seguro.png"/>
          </div>

          

          <p className="text-white/60 flex items-center justify-center gap-2">
            © 2024 Francis Life. Todos os direitos reservados. 
            <span className="flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-francis-red" /> para sua saúde.
            </span>
          </p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Index;
