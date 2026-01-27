import "@/app/globals.css"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#171B1A] text-white">
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
