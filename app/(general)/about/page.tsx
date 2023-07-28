import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Página de Información sobre Mi',
  description: 'Descripción de la página de Inoformación de mi',
  keywords: ['Abaut Page', 'Jesus Velasco'],
}

export default function AboutPage() {
  return <h1 className="text-5xl">About Page</h1>
}
