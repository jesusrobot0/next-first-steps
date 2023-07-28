import { Navbar } from '@/components'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center p-24">
        {children}
      </main>
    </>
  )
}
