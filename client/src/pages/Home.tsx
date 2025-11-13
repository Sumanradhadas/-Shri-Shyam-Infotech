import { motion } from 'framer-motion';
import HeroSlider from '@/components/HeroSlider';
import CourseCard from '@/components/CourseCard';
import WhyChooseUs from '@/components/WhyChooseUs';
import { Target, Lightbulb, Heart } from 'lucide-react';
import { useLocation } from 'wouter';
import heroImage1 from '@assets/generated_images/students_learning_computers_classroom_3a821384.png';
import heroImage2 from '@assets/generated_images/DEEP_program_training_lab_87a864f9.png';
import heroImage3 from '@assets/generated_images/certificate_award_ceremony_259bf2f1.png';

export default function Home() {
  const [, setLocation] = useLocation();
  
  const slides = [
    {
      image: heroImage1,
      title: "17+ Years of Training Excellence",
      subtitle: "Shri Shyam Infotech - 5,000+ students' lives transformed with 98% placement record"
    },
    {
      image: heroImage2,
      title: "State-of-the-Art Computer Training",
      subtitle: "Professional certification programs: ADCA, DCA, Tally Prime with GST, and Kushal Yuva Program"
    },
    {
      image: heroImage3,
      title: "Your Best Choice for a Computer Career",
      subtitle: "Expert faculty, personalized attention, and practical hands-on training"
    }
  ];

  const openAIAssistant = () => {
    const aiButton = document.querySelector('[data-testid="button-ai-assistant"]') as HTMLButtonElement;
    if (aiButton) {
      aiButton.click();
    }
  };

  return (
    <div className="min-h-screen">
      <div className="pt-[118px] sm:pt-[126px] md:pt-[92px]">
        <HeroSlider
          slides={slides}
          onExploreCourses={() => setLocation('/courses')}
          onAIGuide={openAIAssistant}
        />
      </div>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
          >
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img 
                src={heroImage1} 
                alt="Shri Shyam Infotech Campus" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-4xl font-bold mb-6">Welcome to Shri Shyam Infotech</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Shri Shyam Infotech is a premier computer training institute in Patna City with 17+ years of excellence. We've transformed 5,000+ students' lives with our practical approach and 98% placement record. Our state-of-the-art facilities and expert faculty make us your best choice for a computer career.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-dtd-orange/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-dtd-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">17+ Years Experience</h3>
                    <p className="text-sm text-muted-foreground">Industry-leading training since 2007</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-dtd-blue/20 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-dtd-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">98% Placement Record</h3>
                    <p className="text-sm text-muted-foreground">Proven track record of student success</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-dtd-green/20 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-dtd-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Practical Approach</h3>
                    <p className="text-sm text-muted-foreground">70% practical, 30% theory training</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Courses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of industry-recognized programs designed to enhance your skills
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CourseCard
              course={{
                id: 'adca-promo',
                name: 'ADCA',
                program: 'ADCA',
                duration: 8,
                description: '8 modules: From basics to advanced computing with practical projects for hands-on learning.',
                icon: '💻',
                color: 'blue',
                popular: true
              }}
            />
            <CourseCard
              course={{
                id: 'dca-promo',
                name: 'DCA',
                program: 'DCA',
                duration: 5,
                description: '5 modules: Essential computing fundamentals for quick career entry with practical training.',
                icon: '🖥️',
                color: 'green',
                popular: true
              }}
            />
            <CourseCard
              course={{
                id: 'tally-promo',
                name: 'Tally Prime with GST',
                program: 'Tally',
                duration: 5,
                description: '5-month specialized accounting course covering GST and business accounting training.',
                icon: '💰',
                color: 'orange',
                popular: true
              }}
            />
            <CourseCard
              course={{
                id: 'kyp-promo',
                name: 'Kushal Yuva Program',
                program: 'KYP',
                duration: 6,
                description: 'Government-recognized youth skill development with digital literacy and soft skills.',
                icon: '🎓',
                color: 'purple'
              }}
            />
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="py-16 bg-gradient-rainbow gradient-animate">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not sure which course fits you best?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let our AI Career Advisor guide you to the perfect program!
            </p>
            <button
              onClick={openAIAssistant}
              className="px-8 py-4 bg-white text-dtd-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              data-testid="button-ai-cta"
            >
              Get Personalized Guidance
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
