import { motion } from 'framer-motion'
import { Home, Building2, MapPin, Map } from 'lucide-react'

const stats = [
  {
    icon: Home,
    number: '19',
    label: 'RT',
    color: 'from-primary-500 to-primary-600',
    bgColor: 'bg-primary-100',
    iconColor: 'text-primary-600'
  },
  {
    icon: Building2,
    number: '5',
    label: 'RW',
    color: 'from-secondary-500 to-secondary-600',
    bgColor: 'bg-secondary-100',
    iconColor: 'text-secondary-600'
  },
  {
    icon: MapPin,
    number: '5',
    label: 'Dukuh',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    icon: Map,
    number: 'Demak',
    label: 'Kabupaten',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  }
]

function Statistics() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-800 mb-4">
            Statistik Desa
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl`} />
              <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-8 text-center card-hover">
                <div className={`w-16 h-16 md:w-20 md:h-20 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 md:w-10 md:h-10 ${stat.iconColor}`} />
                </div>
                <div className={`text-3xl md:text-4xl font-bold font-display bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics