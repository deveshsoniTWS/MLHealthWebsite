import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const videos = [
  {
    title: "SCAIDA in Clinical Settings",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600",
    description: "See how SCAIDA is transforming diagnostics in hospitals",
    videoId: "dQw4w9WgXcQ" // Example YouTube video ID
  },
  {
    title: "AI Model Demonstration",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600",
    description: "Watch our AI models analyze medical imaging in real-time",
    videoId: "dQw4w9WgXcQ" // Example YouTube video ID
  },
  {
    title: "User Interface Walkthrough",
    thumbnail: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600",
    description: "Learn how to use the SCAIDA interface for optimal results",
    videoId: "dQw4w9WgXcQ" // Example YouTube video ID
  }
];

export default function VideoShowcase() {
  return (
    <section id="videos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            SCAIDA in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See our AI-powered diagnostic solutions in real-world scenarios
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <PlayCircle className="h-16 w-16 text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}