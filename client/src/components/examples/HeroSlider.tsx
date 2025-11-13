import HeroSlider from '../HeroSlider';
import heroImage1 from '@assets/generated_images/students_learning_computers_classroom_3a821384.png';
import heroImage2 from '@assets/generated_images/DEEP_program_training_lab_87a864f9.png';
import heroImage3 from '@assets/generated_images/certificate_award_ceremony_259bf2f1.png';

export default function HeroSliderExample() {
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

  return (
    <HeroSlider
      slides={slides}
      onExploreCourses={() => console.log('Explore courses clicked')}
      onAIGuide={() => console.log('AI guide clicked')}
    />
  );
}
