"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, ArrowLeft, Send, Calendar, MessageCircle } from "lucide-react"
import { Nunito } from "next/font/google"

const nunito = Nunito({ subsets: ["latin"] })

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    contactType: "kennismaking",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <div className={`min-h-screen bg-white ${nunito.className}`}>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#4aeadc" }}
              >
                <Send className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Bedankt voor je bericht!</h1>
              <p className="text-xl text-gray-600 mb-8">
                Ik neem binnen 24 uur contact met je op om een kennismakingsgesprek in te plannen.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-medium mr-4"
                style={{ backgroundColor: "#ee2c82", color: "white" }}
              >
                <Link href="/">Terug naar Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen bg-white ${nunito.className}`}>
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600">Terug naar home</span>
            </Link>
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
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-800">
                Laten we <span style={{ color: "#ee2c82" }}>kennismaken</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Vul het formulier in en ik neem binnen 24 uur contact met je op voor een vrijblijvend
                kennismakingsgesprek.
              </p>
            </div>

            <Card className="rounded-3xl border-0 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-800">Kennismakingsformulier</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Naam *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="rounded-xl border-gray-200 focus:border-[#4aeadc] focus:ring-[#4aeadc]"
                        placeholder="Je volledige naam"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="rounded-xl border-gray-200 focus:border-[#4aeadc] focus:ring-[#4aeadc]"
                        placeholder="je@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Telefoon
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="rounded-xl border-gray-200 focus:border-[#4aeadc] focus:ring-[#4aeadc]"
                        placeholder="06 12345678"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                        Organisatie
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="rounded-xl border-gray-200 focus:border-[#4aeadc] focus:ring-[#4aeadc]"
                        placeholder="Je organisatie"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactType" className="text-sm font-medium text-gray-700">
                      Type gesprek
                    </Label>
                    <select
                      id="contactType"
                      name="contactType"
                      value={formData.contactType}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-gray-200 px-3 py-2 focus:border-[#4aeadc] focus:ring-[#4aeadc] focus:outline-none"
                    >
                      <option value="kennismaking">Kennismakingsgesprek</option>
                      <option value="informatie">Meer informatie</option>
                      <option value="coaching">Coaching traject</option>
                      <option value="interim">Interim management</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Bericht
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="rounded-xl border-gray-200 focus:border-[#4aeadc] focus:ring-[#4aeadc]"
                      placeholder="Vertel me over je situatie en waar je hulp bij kunt gebruiken..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full rounded-full py-6 text-lg font-medium"
                    style={{ backgroundColor: "#ee2c82", color: "white" }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Versturen...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Verstuur Bericht
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Additional Content */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="text-center">
              <Image
                src="/images/logo-large.png"
                alt="Ilone Blaauw - Veilig Veranderen"
                width={300}
                height={180}
                className="mx-auto"
              />
            </div>

            {/* Contact Info */}
            <Card className="rounded-3xl border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Direct Contact</h3>
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
                      <a href="tel:0653491200" className="text-gray-600 hover:text-[#ee2c82]">
                        06 53491200
                      </a>
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
                      <a href="mailto:veiligveranderen@iloneblaauw.nl" className="text-gray-600 hover:text-[#ee2c82]">
                        veiligveranderen@iloneblaauw.nl
                      </a>
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
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="rounded-3xl border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Wat kun je verwachten?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-[#4aeadc] mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Snelle reactie</p>
                      <p className="text-sm text-gray-600">Binnen 24 uur neem ik contact met je op</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="w-5 h-5 text-[#ee2c82] mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Vrijblijvend gesprek</p>
                      <p className="text-sm text-gray-600">30 minuten kennismaking zonder verplichtingen</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Send className="w-5 h-5 text-[#4aeadc] mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Persoonlijke aanpak</p>
                      <p className="text-sm text-gray-600">Maatwerk advies voor jouw specifieke situatie</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
