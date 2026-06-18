import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Calendar, ArrowRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const newsData = [
  {
    id: 1,
    title: 'Kerja Bakti Lingkungan Desa',
    date: '15 Juni 2026',
    summary: 'Warga Desa Jamus melaksanakan kerja bakti membersihkan lingkungan desa secara gotong royong.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
    category: 'Kegiatan'
  },
  {
    id: 2,
    title: 'Musyawarah Pembangunan Desa',
    date: '10 Juni 2026',
    summary: 'Pemerintah desa mengadakan musyawarah untuk membahas rencana pembangunan desa tahun 2026.',
    image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=600&h=400&fit=crop',
    category: 'Pemerintahan'
  },
  {
    id: 3,
    title: 'Festival Budaya Desa Jamus',
    date: '1 Juni 2026',
    summary: 'Festival budaya tahunan menampilkan kesenian tradisional dan kuliner khas Desa Jamus.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop',
    category: 'Budaya'
  },
  {
    id: 4,
    title: 'Program Ketahanan Pangan',
    date: '20 Mei 2026',
    summary: 'Desa Jamus meluncurkan program ketahanan pangan dengan optimalisasi lahan pertanian.',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop',
    category: 'Program'
  },
  {
    id: 5,
    title: 'Pelayanan Administrasi Masyarakat',
    date: '15 Mei 2026',
    summary: 'Peningkatan kualitas pelayanan administrasi dengan sistem digital untuk masyarakat.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
    category: 'Pelayanan'
  }
]

function News() {
  return (
    <section id="news" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-800 mb-4">
            Berita Desa
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Informasi terbaru seputar kegiatan dan pembangunan di Desa Jamus
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {newsData.map((news, index) => (
            <SwiperSlide key={news.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-500 text-white text-sm font-semibold rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{news.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold font-display text-gray-800 mb-3 line-clamp-2">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {news.summary}
                  </p>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-primary-600 font-semibold flex items-center space-x-2 hover:text-primary-700 transition-colors"
                  >
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default News