import { motion } from 'framer-motion'
import { MapPin, Calendar, Landmark } from 'lucide-react'

function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-800 mb-4">
            Tentang Desa Jamus
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Deskripsi */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 card-hover"
          >
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <Landmark className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold font-display text-gray-800 mb-4">
              Profil Desa
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Desa Jamus merupakan salah satu desa yang terletak di Kecamatan Mranggen, 
              Kabupaten Demak, Provinsi Jawa Tengah. Desa ini memiliki luas wilayah yang 
              strategis dengan potensi pertanian dan budaya yang kaya. Masyarakat Desa Jamus 
              dikenal dengan keramahan dan gotong royong yang tinggi dalam membangun desa.
            </p>
          </motion.div>

          {/* Lokasi */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 card-hover"
          >
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-secondary-600" />
            </div>
            <h3 className="text-2xl font-bold font-display text-gray-800 mb-4">
              Lokasi Administrasi
            </h3>
            <div className="space-y-3 text-gray-600">
              <p className="flex items-start space-x-3">
                <span className="font-semibold min-w-[100px]">Desa:</span>
                <span>Jamus</span>
              </p>
              <p className="flex items-start space-x-3">
                <span className="font-semibold min-w-[100px]">Kecamatan:</span>
                <span>Mranggen</span>
              </p>
              <p className="flex items-start space-x-3">
                <span className="font-semibold min-w-[100px]">Kabupaten:</span>
                <span>Demak</span>
              </p>
              <p className="flex items-start space-x-3">
                <span className="font-semibold min-w-[100px]">Provinsi:</span>
                <span>Jawa Tengah</span>
              </p>
              <p className="flex items-start space-x-3">
                <span className="font-semibold min-w-[100px]">Kode Pos:</span>
                <span>59567</span>
              </p>
            </div>
          </motion.div>

          {/* Sejarah */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8 card-hover"
          >
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold font-display text-gray-800 mb-4">
              Sejarah Singkat
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Desa Jamus memiliki sejarah panjang yang bermula dari masa kolonial Belanda. 
              Nama "Jamus" sendiri berasal dari kata dalam bahasa Jawa yang berkaitan dengan 
              kesuburan dan kemakmuran. Sejak awal berdirinya, desa ini telah menjadi pusat 
              pertanian yang penting di wilayah Kecamatan Mranggen. Masyarakat Desa Jamus 
              terus melestarikan tradisi dan budaya leluhur sambil beradaptasi dengan 
              perkembangan zaman modern.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About