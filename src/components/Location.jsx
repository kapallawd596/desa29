import { motion } from 'framer-motion'

function Location() {
  return (
    <section id="location" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-800 mb-4">
            Lokasi Desa
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan lokasi Desa Jamus di Kecamatan Mranggen, Kabupaten Demak
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.5736961445274!2d110.50222!3d-7.00139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDAnMDUuMCJTIDExMMKwMzAnMDguMCJF!5e0!3m2!1sid!2sid!4v1718640000000!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Lokasi Desa Jamus"
          />
          
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg">
            <p className="text-primary-600 font-semibold">
              📍 7°0′5″S 110°30′8″E
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Location