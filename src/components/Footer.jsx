import { motion } from 'framer-motion'
import { Heart, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react'

const quickLinks = [
  { name: 'Beranda', href: '#home' },
  { name: 'Profil Desa', href: '#about' },
  { name: 'Pemerintahan', href: '#government' },
  { name: 'Berita', href: '#news' },
  { name: 'Galeri', href: '#gallery' },
  { name: 'Kontak', href: '#contact' }
]

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-display">Desa Jamus</h2>
                <p className="text-gray-400 text-sm">Kabupaten Demak</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Desa Jamus adalah desa yang berada di Kecamatan Mranggen, Kabupaten Demak, 
              Jawa Tengah. Kami berkomitmen untuk membangun desa yang maju, mandiri, 
              dan sejahtera.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-display mb-6">
              Link Cepat
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center space-x-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold font-display mb-6">
              Ikuti Kami
            </h3>
            <div className="flex space-x-4 mb-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
            <p className="text-gray-400">
              Subscribe untuk mendapatkan update terbaru dari Desa Jamus
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Desa Jamus. All rights reserved. 
            Dibuat dengan <Heart className="w-4 h-4 inline-block text-red-500" /> untuk kemajuan desa.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer