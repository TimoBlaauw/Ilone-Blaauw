import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Quote, Heart, Users, Target, Lightbulb } from 'lucide-react';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div className={`min-h-screen bg-white ${nunito.className}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo-ib.png"
                alt="Ilone Blaauw Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold" style={{ color: "#4aeadc" }}>
                Ilone Blaauw
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-700 hover:text-[#ee2c82] transition-colors">
                Over Mij
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-[#ee2c82] transition-colors">
                Diensten
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-[#ee2c82] transition-colors">
                Testimonials
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-[#ee2c82] transition-colors">
                Contact
              </Link>
            </div>
            <Button asChild className="rounded-full px-6" style={{ backgroundColor: "#ee2c82", color: "white" }}>
              <Link href="/contact">Kennismaking</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge
                  className="rounded-full px-4 py-2 text-sm font-medium"
                  style={{ backgroundColor: "#4aeadc", color: "white" }}
                >
                  Veilig Veranderen
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span style={{ color: "#ee2c82" }}>Moeiteloos</span> <span className="text-gray-800">omgaan met</span>{" "}
                  <span style={{ color: "#4aeadc" }}>verandering</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Persoonlijke en professionele begeleiding van verandering voor organisaties, managers én teams die
                  verlangen naar meer rust en werkplezier.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg font-medium"
                  style={{ backgroundColor: "#ee2c82", color: "white" }}
                >
                  <Link href="/contact">Start Gesprek</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg font-medium border-2"
                  style={{ borderColor: "#4aeadc", color: "#4aeadc" }}
                >
                  <Link href="/contact">Meer Informatie</Link>
                </Button>
              </div>

              <div className="pt-8">
                <Image
                  src="/images/logo-large.png"
                  alt="Ilone Blaauw - Veilig Veranderen"
                  width={200}
                  height={120}
                  className="opacity-90"
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl transform rotate-3" style={{ backgroundColor: "#4aeadc" }} />
              <div
                className="absolute inset-0 rounded-3xl transform -rotate-2"
                style={{ backgroundColor: "#ee2c82" }}
              />
              <Image
                src="/images/ilone_3.jpg"
                alt="Ilone Blaauw"
                width={500}
                height={600}
                className="relative rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4" style={{ backgroundColor: "#f8fdfc" }}>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-800">
                  Ik ben <span style={{ color: "#ee2c82" }}>Ilone Blaauw</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Als nieuwsgierige en enthousiaste interim manager en verandercoach ben ik graag sparringpartner voor
                  het bestuur, de managers en hun team. Voortdurend op zoek naar ontwikkeling en toegevoegde waarde.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Als vrouw in een technische wereld, als bedrijfskundige in de overheid. Met mijn allergie voor macht,
                  leidinggevend in hiërarchische organisaties. Elk overgangsmoment in mijn leven, maakt me bewuster van
                  de noodzaak om er bij stil te staan.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="rounded-2xl border-0 shadow-lg" style={{ backgroundColor: "#4aeadc" }}>
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 text-white mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">Team Coach</h3>
                    <p className="text-white/90 text-sm">Begeleiding van teams in verandering</p>
                  </CardContent>
                </Card>
                <Card className="rounded-2xl border-0 shadow-lg" style={{ backgroundColor: "#ee2c82" }}>
                  <CardContent className="p-6 text-center">
                    <Target className="w-8 h-8 text-white mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">Interim Manager</h3>
                    <p className="text-white/90 text-sm">Tijdelijke leiding tijdens transities</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                <Image
                  src="/images/ilone_1.png"
                  alt="Ilone Blaauw Portrait"
                  width={600}
                  height={750}
                  className="w-full h-auto rounded-3xl shadow-xl object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              <span style={{ color: "#4aeadc" }}>Veilig</span> Veranderen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mensen groeien het meest in een veilige setting, waarin ze zich kwetsbaar durven op te stellen. Want elke
              verandering is een overgangsmoment en heeft altijd een prijs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#4aeadc" }}
                >
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Inzicht</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bewustwording van patronen en belemmeringen die verandering in de weg staan.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#ee2c82" }}
                >
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Inspiratie</h3>
                <p className="text-gray-600 leading-relaxed">
                  Motivatie en energie om de stap naar verandering daadwerkelijk te zetten.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#4aeadc" }}
                >
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Steun</h3>
                <p className="text-gray-600 leading-relaxed">
                  Begeleiding en ondersteuning tijdens het hele veranderingsproces.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-[#4aeadc] to-[#ee2c82] rounded-3xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Resultaten</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="font-medium">Focus & Energie</p>
                <p className="text-sm opacity-90">Iedereen werkt vanuit gezamenlijke bedoeling</p>
              </div>
              <div>
                <p className="font-medium">Rust & Ruimte</p>
                <p className="text-sm opacity-90">Op de werkvloer is meer balans</p>
              </div>
              <div>
                <p className="font-medium">Werkplezier</p>
                <p className="text-sm opacity-90">Teams voelen zich van betekenis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4" style={{ backgroundColor: "#f8fdfc" }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Wat <span style={{ color: "#ee2c82" }}>klanten</span> zeggen
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="rounded-3xl border-0 shadow-lg">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-[#4aeadc] mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Ilone is een professionele, flexibele coach met een persoonlijke, fijne en spiegelende aanpak. Het
                  werkt zoveel meer ontspannen nu."
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/images/testimonial-person.jpg"
                    alt="Corné Hagenaars"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-800">Corné Hagenaars</p>
                    <p className="text-sm text-gray-600">Clustercommandant Brandweer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-lg">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-[#ee2c82] mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Met hulp van Ilone is het gelukt om het patroon te doorbreken en het team eigenaar te maken van de
                  beweging. Nu zijn we een (h)echt team geworden."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#ee2c82] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">CJ</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Cynthia de Jong</p>
                    <p className="text-sm text-gray-600">Directiebureau Veiligheidsregio</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-lg">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-[#4aeadc] mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Met een krachtige combinatie van analytische en mensgerichte vaardigheden, zorgt zij voor bewustzijn
                  en een heldere richting op een toegankelijke, veilige en creatief-leuke manier."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#4aeadc] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">JV</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">John Verplanke</p>
                    <p className="text-sm text-gray-600">Regisseur Teamontwikkeling</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Veelgestelde <span style={{ color: "#4aeadc" }}>Vragen</span>
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4" style={{ color: "#ee2c82" }}>
                  Wat bedoel je met Veilig Veranderen?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Verandering komt alleen wanneer je uit je comfortzone stapt. Te ver daarbuiten schiet je in de stress
                  en leer je niets meer. Voor mij is het de uitdaging om een setting te creëren waarin iemand een stap
                  extra durft te maken, zonder dat het onveilig voelt.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4" style={{ color: "#4aeadc" }}>
                  Wanneer is het juiste moment om Ilone in te schakelen?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Wanneer je voor grote veranderingen staat of er midden in zit en je ondanks alle goede bedoelingen en
                  hard werken, geen licht ziet aan het einde van de tunnel. Er is een duwtje nodig.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4" style={{ color: "#ee2c82" }}>
                  Wat is de meerwaarde van begeleiding bij verandering?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Mensen zijn gewoontedieren die eigenlijk niet graag veranderen. Een objectieve derde ziet én benoemt
                  patronen en krijgt in een onrustige omgeving vaak sneller het vertrouwen om leiding en steun te geven.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4" style={{ backgroundColor: "#f8fdfc" }}>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-800">
                  Laten we <span style={{ color: "#ee2c82" }}>kennismaken</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Wil je een vrijblijvend kennismakingsgesprek aanvragen? Laat het me dan telefonisch of per email
                  weten.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#4aeadc" }}
                  >
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Telefoon</p>
                    <p className="text-gray-600">06 53491200</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#ee2c82" }}
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">E-mail</p>
                    <p className="text-gray-600">veiligveranderen@iloneblaauw.nl</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#4aeadc" }}
                  >
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Adres</p>
                    <p className="text-gray-600">
                      Teding van Berkhoutlaan 6<br />
                      2614 BA Delft
                    </p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-medium"
                style={{ backgroundColor: "#ee2c82", color: "white" }}
              >
                <Link href="/contact">Plan Kennismaking</Link>
              </Button>
            </div>

            <div className="relative">
              <Card className="rounded-3xl border-0 shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div
                    className="h-64 flex items-center justify-center text-white text-center p-8"
                    style={{ background: "linear-gradient(135deg, #4aeadc 0%, #ee2c82 100%)" }}
                  >
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Klaar voor verandering?</h3>
                      <p className="text-lg opacity-90">
                        "Wees niet bang als je niet weet wat je wilt. Beloof jezelf gewoon dat je je volledige
                        potentieel zult benutten."
                      </p>
                      <p className="text-sm mt-4 opacity-75">- Betty Ford</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/images/logo-ib.png"
                alt="Ilone Blaauw Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-lg font-bold">Ilone Blaauw - Veilig Veranderen</span>
            </div>
            <div className="text-sm text-gray-400">© 2024 Ilone Blaauw. Alle rechten voorbehouden.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}