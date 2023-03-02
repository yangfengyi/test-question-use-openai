import './globals.css'

export const metadata = {
  title: 'Get the test qeustion',
  description: 'get test question from open api',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
