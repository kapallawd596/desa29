import { motion } from 'framer-motion'
import { User, Briefcase, FileText, Heart, Users } from 'lucide-react'

const governmentData = [
  {
    id: 1,
    position: 'Kepala Desa',
    name: 'Bapak Ahmad Suyanto',
    period: '2023-2028',
    icon: User,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    color: 'from-primary-400 to-primary-600'
  },
  {
    id: 2,
    position: 'Sekretaris Desa',
    name: 'Bapak Budi Santoso',
    period: '2023-2028',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    color: 'from-secondary-400 to-secondary-600'
  },
  {
    id: 3,
    position: 'Kasi Pemerintahan',
    name: 'Ibu Siti Rahayu',
    period: '2023-2028',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    color: 'from-emerald-400 to-emerald-600'
  },
  {
    id: 4,
    position: 'Kasi Pelayanan',
    name: 'Bapak Dwi Prasetyo',
    period: '2023-2028',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 5,
    position: 'Kasi Kesejahteraan',
    name: 'Ibu Ani Wijayanti',
    period: '2023-2028',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    color: 'from-purple-400 to-purple-600'
  }
]

function Government() {
  return (
    <section id="government" className="section-padding bg-gradient-to-b from-primary-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-800 mb-4">
            Pemerintahan Desa
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Struktur organisasi Pemerintahan Desa Jamus periode 2023-2028
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {governmentData.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={person.image} 
                  alt={person.name}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${person.color}`} />
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${person.color} text-white`}>
                    <person.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    {person.period}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold font-display text-gray-800 mb-1">
                  {person.position}
                </h3>
                <p className="text-gray-600">
                  {person.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Government