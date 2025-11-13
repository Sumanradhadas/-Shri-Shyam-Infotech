import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { programs } from '@shared/courses';

export default function Courses() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const programColors: Record<string, string> = {
    'adca': 'bg-blue-500',
    'dca': 'bg-green-500',
    'tally': 'bg-orange-500',
    'kyp': 'bg-purple-500'
  };

  return (
    <div className="min-h-screen bg-background pt-[68px] sm:pt-[76px] md:pt-[92px]">
      <section className="relative overflow-hidden bg-gradient-rainbow py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-courses-title">
            Our Professional Certification Programs
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/90">
            Choose from 4 industry-recognized programs designed for career success
          </p>
          <p className="text-base text-white/80 max-w-3xl mx-auto">
            70% practical, 30% theory approach with expert faculty and placement assistance
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-16 h-16 rounded-full ${programColors[program.id]} flex items-center justify-center text-4xl`}>
                          {program.icon}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold">{program.shortName}</h2>
                          <p className="text-sm text-muted-foreground">{program.duration}</p>
                        </div>
                      </div>
                      {program.popular && (
                        <Badge variant="default" className="bg-gradient-warm text-white">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <p className="text-lg font-semibold mb-2">{program.name}</p>
                    <p className="text-muted-foreground">{program.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <span>Course Modules ({program.moduleCount})</span>
                        </h3>
                        <ul className="space-y-2">
                          {program.modules.map((module, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{module}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t">
                        <h3 className="font-semibold mb-3">Program Benefits</h3>
                        <ul className="space-y-2">
                          {program.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-green-500">✓</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <button
                          onClick={() => setSelectedProgram(program.id)}
                          className="w-full py-3 px-6 bg-gradient-rainbow text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                        >
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Admission Process & Fee Structure</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Apply</h3>
                <p className="text-sm text-muted-foreground">Visit campus and fill a simple form</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">Choose</h3>
                <p className="text-sm text-muted-foreground">Select your course program</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Enroll</h3>
                <p className="text-sm text-muted-foreground">Choose your batch and start learning!</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">4</span>
                </div>
                <h3 className="font-semibold mb-2">Payment</h3>
                <p className="text-sm text-muted-foreground">One-time or monthly installments</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg mb-4">Ready to start your computer career?</p>
              <a
                href="tel:+916287875040"
                className="inline-block px-8 py-4 bg-gradient-rainbow text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Call Now: 6287875040
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
