import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Página de Precios',
  description: 'Descripción de la página de precios',
  keywords: ['Pricing Page', 'Jesus Velasco'],
}

export default function PricingPage() {
  return <h1 className="text-5xl">Pricing Page</h1>
}
