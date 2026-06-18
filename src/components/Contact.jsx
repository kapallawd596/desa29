import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-primary-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-800 mb-4">
            Kontak Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hubungi kami untuk informasi lebih lanjut tentang Desa Jamus
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold font-display text-gray-800 mb-6">
              Informasi Kontak
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Alamat</h4>
                  <p className="text-gray-600">
                    Desa Jamus, Kecamatan Mranggen<br />
                    Kabupaten Demak, Jawa Tengah<br />
                    Kode Pos 59567
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Telepon</h4>
                  <p className="text-gray-600">(0291) 123456</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">info@desajamus.demakkab.go.id</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Jam Kerja</h4>
                  <p className="text-gray-600">
                    Senin - Jumat: 08:00 - 15:00 WIB
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold font-display text-gray-800 mb-6">
              Media Sosial
            </h3>
            
            <p className="text-gray-600 mb-8">
              Ikuti kami di media sosial untuk mendapatkan informasi terbaru seputar 
              kegiatan dan pembangunan di Desa Jamus.
            </p>
            
            <div className="space-y-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <Facebook className="w-6 h-6" />
                <span className="font-semibold">Facebook Desa Jamus</span>
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <Instagram className="w-6 h-6" />
                <span className="font-semibold">Instagram Desa Jamus</span>
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <Youtube className="w-6 h-6" />
                <span className="font-semibold">YouTube Desa Jamus</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact