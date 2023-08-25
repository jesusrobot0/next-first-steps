import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Página de Contacto',
  description: 'Descripción de la página de contacto',
  keywords: ['About Page', 'Jesus Velasco'],
}

export default function ContactPage() {
  return <h1 className="text-5xl">Contact Page</h1>
}
