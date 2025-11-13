export interface Program {
  id: string;
  name: string;
  shortName: string;
  duration: string;
  moduleCount: number;
  description: string;
  modules: string[];
  icon: string;
  color: string;
  popular?: boolean;
  benefits: string[];
}

export const programs: Program[] = [
  {
    id: 'adca',
    name: 'Advanced Diploma in Computer Applications (ADCA)',
    shortName: 'ADCA',
    duration: '8 months',
    moduleCount: 8,
    description: 'Comprehensive computer training from basics to advanced computing with practical projects for hands-on learning.',
    modules: [
      'Computer Fundamentals & Windows',
      'MS Office Suite (Word, Excel, PowerPoint)',
      'Internet & Email Applications',
      'Database Management with MS Access',
      'C Programming Language',
      'Operating Systems (Windows & Linux)',
      'Computer Networks & Web Technologies',
      'Digital Graphics & Multimedia'
    ],
    icon: '💻',
    color: 'blue',
    popular: true,
    benefits: [
      'Microsoft Office included',
      'Programming fundamentals',
      'Database management skills',
      'Networking knowledge',
      'Placement assistance provided'
    ]
  },
  {
    id: 'dca',
    name: 'Diploma in Computer Applications (DCA)',
    shortName: 'DCA',
    duration: '5 months',
    moduleCount: 5,
    description: 'Essential computing fundamentals with quick career entry through practical training.',
    modules: [
      'Computer Basics & Windows Operating System',
      'MS Word - Document Processing',
      'MS Excel - Spreadsheet & Data Management',
      'MS PowerPoint - Professional Presentations',
      'Internet, Email & Digital Literacy'
    ],
    icon: '🖥️',
    color: 'green',
    popular: true,
    benefits: [
      'Quick 5-month program',
      'Microsoft Office mastery',
      'Immediate job readiness',
      'Data entry & management skills',
      'Starting salary from ₹8,000/month'
    ]
  },
  {
    id: 'tally',
    name: 'Tally Prime with GST',
    shortName: 'Tally Prime',
    duration: '5 months',
    moduleCount: 6,
    description: '5-month specialized accounting course covering GST and business accounting training.',
    modules: [
      'Accounting Fundamentals & Bookkeeping',
      'Tally Prime Complete Interface',
      'Inventory Management in Tally',
      'GST Implementation & Filing',
      'TDS, Payroll & Statutory Compliance',
      'Financial Reports & Business Analysis'
    ],
    icon: '💰',
    color: 'orange',
    popular: true,
    benefits: [
      'GST & taxation training',
      'Real accounting projects',
      'Industry-recognized Tally certification',
      'Accounting assistant roles',
      'Both one-time and installment payment options'
    ]
  },
  {
    id: 'kyp',
    name: 'Kushal Yuva Program',
    shortName: 'KYP',
    duration: '6 months',
    moduleCount: 8,
    description: 'Government-recognized youth skill development program focusing on digital literacy and soft skills.',
    modules: [
      'Basic Computer Skills & Typing',
      'Digital Literacy Foundations',
      'MS Office for Beginners',
      'Internet & Email Basics',
      'Communication & Soft Skills',
      'Job Readiness & Interview Preparation',
      'Financial Awareness & Digital Payments',
      'Government Schemes & Digital Services'
    ],
    icon: '🎓',
    color: 'purple',
    benefits: [
      'Government-recognized certification',
      'Digital literacy & soft skills',
      'Job readiness training',
      'Financial awareness',
      'Interview preparation & resume building'
    ]
  }
];

