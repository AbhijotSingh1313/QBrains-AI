// personalizationTranslations.js
// Multilingual schema and translations for the Personalization Profile across all 10 supported languages.
// Completely isolated data collection definitions.

export const PERSONALIZATION_QUESTIONS_META = [
  {
    id: 'currentLevel',
    required: true,
    type: 'single',
    options: ['complete_beginner', 'beginner', 'intermediate', 'advanced', 'expert']
  },
  {
    id: 'currentRole',
    required: true,
    type: 'single',
    hasOther: true,
    options: ['school_student', 'undergraduate', 'postgraduate', 'researcher', 'educator', 'working_professional', 'hobbyist', 'other']
  },
  {
    id: 'background',
    required: true,
    type: 'single',
    hasOther: true,
    options: ['computer_science', 'physics', 'mathematics', 'electronics_electrical', 'engineering_other', 'data_science_ai', 'cybersecurity', 'other']
  },
  {
    id: 'mathComfort',
    required: true,
    type: 'single',
    options: ['very_limited', 'basic', 'comfortable', 'strong', 'advanced']
  },
  {
    id: 'programmingExperience',
    required: true,
    type: 'single',
    options: ['no_experience', 'beginner', 'intermediate', 'advanced', 'professional']
  },
  {
    id: 'qcExperience',
    required: true,
    type: 'single',
    options: ['never', 'a_little', 'some_coursework', 'self_taught', 'university_study', 'research_professional']
  },
  {
    id: 'physicsBackground',
    required: true,
    type: 'single',
    options: ['very_limited', 'basic', 'intermediate', 'strong', 'advanced']
  },
  {
    id: 'learningGoal',
    required: true,
    type: 'single',
    hasOther: true,
    options: ['academic_study', 'university_exams', 'research', 'career_industry', 'hackathons_projects', 'quantum_software', 'quantum_cybersecurity', 'general_knowledge', 'other']
  },
  {
    id: 'learningPreferences',
    required: false,
    type: 'multiple',
    options: [
      'visual_explanations',
      'step_by_step',
      'math_derivations',
      'practical_examples',
      'interactive_experiments',
      'programming_examples',
      'exercises_problems',
      'video_resources',
      'real_world_apps'
    ]
  },
  {
    id: 'weeklyTime',
    required: true,
    type: 'single',
    options: ['less_than_2h', '2_to_5h', '5_to_10h', '10_to_15h', '15_plus_h']
  },
  {
    id: 'learningPace',
    required: true,
    type: 'single',
    options: ['slow_detailed', 'balanced', 'fast_paced', 'intensive']
  },
  {
    id: 'learningInterests',
    required: false,
    type: 'multiple',
    options: [
      'quantum_mechanics',
      'linear_algebra',
      'quantum_gates',
      'quantum_circuits',
      'quantum_algorithms',
      'quantum_cryptography',
      'quantum_ml',
      'quantum_simulation',
      'quantum_error_correction',
      'quantum_hardware',
      'quantum_cybersecurity',
      'quantum_programming'
    ]
  }
];

export const PERSONALIZATION_TRANSLATIONS = {
  en: {
    title: 'Learner Personalization Profile',
    subtitle: 'Share your background, comfort levels, and study preferences to personalize your quantum scholar identity.',
    summaryBadge: 'PROFILE ACTIVE',
    summaryTitle: 'Your Quantum Learning Profile',
    summaryDesc: 'This personalization record is saved locally in your browser memory and represents your scholar baseline.',
    editBtn: '✎ Edit Personalization',
    saveBtn: 'Save Personalization',
    cancelBtn: 'Cancel',
    savedToast: 'Your learning profile has been saved.',
    requiredNote: '* Required fields',
    validationError: 'Please complete all required questions marked with an asterisk (*).',
    otherPlaceholder: 'Please specify...',
    noneSelected: 'None selected',
    sectionPersonal: '1. Background & Academic Role',
    sectionReadiness: '2. Mathematical & Technical Readiness',
    sectionGoals: '3. Objectives & Study Dedication',
    sectionInterests: '4. Learning Preferences & Topic Interests',

    questions: {
      currentLevel: {
        title: '1. Current Learning Level',
        question: 'What is your current level in quantum computing?',
        options: {
          complete_beginner: 'Complete Beginner',
          beginner: 'Beginner',
          intermediate: 'Intermediate',
          advanced: 'Advanced',
          expert: 'Expert'
        }
      },
      currentRole: {
        title: '2. Current Role',
        question: 'Which best describes you?',
        options: {
          school_student: 'School Student',
          undergraduate: 'Undergraduate Student',
          postgraduate: 'Postgraduate Student',
          researcher: 'Researcher',
          educator: 'Teacher / Educator',
          working_professional: 'Working Professional',
          hobbyist: 'Hobbyist / Independent Learner',
          other: 'Other'
        }
      },
      background: {
        title: '3. Academic / Professional Background',
        question: 'What is your background?',
        options: {
          computer_science: 'Computer Science',
          physics: 'Physics',
          mathematics: 'Mathematics',
          electronics_electrical: 'Electronics / Electrical Engineering',
          engineering_other: 'Engineering (Other)',
          data_science_ai: 'Data Science / AI',
          cybersecurity: 'Cybersecurity',
          other: 'Other'
        }
      },
      mathComfort: {
        title: '4. Mathematics Background',
        question: 'How comfortable are you with mathematics?',
        options: {
          very_limited: 'Very Limited',
          basic: 'Basic',
          comfortable: 'Comfortable',
          strong: 'Strong',
          advanced: 'Advanced'
        }
      },
      programmingExperience: {
        title: '5. Programming Experience',
        question: 'How comfortable are you with programming?',
        options: {
          no_experience: 'No Programming Experience',
          beginner: 'Beginner',
          intermediate: 'Intermediate',
          advanced: 'Advanced',
          professional: 'Professional'
        }
      },
      qcExperience: {
        title: '6. Quantum Computing Experience',
        question: 'Have you studied quantum computing before?',
        options: {
          never: 'Never',
          a_little: 'A little',
          some_coursework: 'Some coursework',
          self_taught: 'Self-taught',
          university_study: 'University / Academic study',
          research_professional: 'Research / Professional experience'
        }
      },
      physicsBackground: {
        title: '7. Physics Background',
        question: 'How familiar are you with physics?',
        options: {
          very_limited: 'Very Limited',
          basic: 'Basic',
          intermediate: 'Intermediate',
          strong: 'Strong',
          advanced: 'Advanced'
        }
      },
      learningGoal: {
        title: '8. Primary Learning Goal',
        question: 'What is your main reason for learning quantum computing?',
        options: {
          academic_study: 'Academic Study',
          university_exams: 'University Exams',
          research: 'Research',
          career_industry: 'Career / Industry',
          hackathons_projects: 'Hackathons / Projects',
          quantum_software: 'Quantum Software Development',
          quantum_cybersecurity: 'Quantum Cybersecurity',
          general_knowledge: 'General Knowledge',
          other: 'Other'
        }
      },
      learningPreferences: {
        title: '9. Learning Preference',
        question: 'How do you prefer to learn? (Select all that apply)',
        options: {
          visual_explanations: 'Visual explanations',
          step_by_step: 'Step-by-step explanations',
          math_derivations: 'Mathematical derivations',
          practical_examples: 'Practical examples',
          interactive_experiments: 'Interactive experiments',
          programming_examples: 'Programming examples',
          exercises_problems: 'Exercises and problems',
          video_resources: 'Video resources',
          real_world_apps: 'Real-world applications'
        }
      },
      weeklyTime: {
        title: '10. Weekly Learning Time',
        question: 'How much time can you usually dedicate to learning?',
        options: {
          less_than_2h: 'Less than 2 hours',
          '2_to_5h': '2–5 hours',
          '5_to_10h': '5–10 hours',
          '10_to_15h': '10–15 hours',
          '15_plus_h': '15+ hours'
        }
      },
      learningPace: {
        title: '11. Preferred Learning Pace',
        question: 'What learning pace do you prefer?',
        options: {
          slow_detailed: 'Slow and detailed',
          balanced: 'Balanced',
          fast_paced: 'Fast-paced',
          intensive: 'Intensive'
        }
      },
      learningInterests: {
        title: '12. Optional Learning Interests',
        question: 'Which areas interest you most? (Select all that apply)',
        options: {
          quantum_mechanics: 'Quantum Mechanics',
          linear_algebra: 'Linear Algebra',
          quantum_gates: 'Quantum Gates',
          quantum_circuits: 'Quantum Circuits',
          quantum_algorithms: 'Quantum Algorithms',
          quantum_cryptography: 'Quantum Cryptography',
          quantum_ml: 'Quantum Machine Learning',
          quantum_simulation: 'Quantum Simulation',
          quantum_error_correction: 'Quantum Error Correction',
          quantum_hardware: 'Quantum Hardware',
          quantum_cybersecurity: 'Quantum Cybersecurity',
          quantum_programming: 'Quantum Programming'
        }
      }
    }
  },

  hi: {
    title: 'शिक्षार्थी वैयक्तिकरण प्रोफ़ाइल',
    subtitle: 'अपनी क्वांटम विद्वान पहचान को वैयक्तिकृत करने के लिए अपनी पृष्ठभूमि, सहजता और अध्ययन प्राथमिकताओं को साझा करें।',
    summaryBadge: 'प्रोफ़ाइल सक्रिय',
    summaryTitle: 'आपकी क्वांटम लर्निंग प्रोफ़ाइल',
    summaryDesc: 'यह वैयक्तिकरण विवरण आपके ब्राउज़र मेमोरी में स्थानीय रूप से सहेजा गया है।',
    editBtn: '✎ वैयक्तिकरण संपादित करें',
    saveBtn: 'वैयक्तिकरण सहेजें',
    cancelBtn: 'रद्द करें',
    savedToast: 'आपकी शिक्षण प्रोफ़ाइल सहेज ली गई है।',
    requiredNote: '* अनिवार्य फ़ील्ड',
    validationError: 'कृपया तारांकित (*) सभी अनिवार्य प्रश्नों को पूरा करें।',
    otherPlaceholder: 'कृपया विवरण दें...',
    noneSelected: 'कोई चयनित नहीं',
    sectionPersonal: '1. पृष्ठभूमि एवं शैक्षणिक भूमिका',
    sectionReadiness: '2. गणितीय एवं तकनीकी तत्परता',
    sectionGoals: '3. उद्देश्य एवं अध्ययन समर्पण',
    sectionInterests: '4. अधिगम प्राथमिकताएं एवं विषय रुचियां',

    questions: {
      currentLevel: {
        title: '1. वर्तमान शिक्षण स्तर',
        question: 'क्वांटम कंप्यूटिंग में आपका वर्तमान स्तर क्या है?',
        options: {
          complete_beginner: 'पूर्ण नौसिखिया (Complete Beginner)',
          beginner: 'आरंभिक (Beginner)',
          intermediate: 'मध्यम (Intermediate)',
          advanced: 'उन्नत (Advanced)',
          expert: 'विशेषज्ञ (Expert)'
        }
      },
      currentRole: {
        title: '2. वर्तमान भूमिका',
        question: 'इनमें से कौन आपका सबसे अच्छा वर्णन करता है?',
        options: {
          school_student: 'स्कूली छात्र',
          undergraduate: 'स्नातक छात्र (Undergraduate)',
          postgraduate: 'स्नातकोत्तर छात्र (Postgraduate)',
          researcher: 'शोधकर्ता (Researcher)',
          educator: 'शिक्षक / प्रशिक्षक',
          working_professional: 'कार्यरत पेशेवर',
          hobbyist: 'शौकिया / स्वतंत्र शिक्षार्थी',
          other: 'अन्य'
        }
      },
      background: {
        title: '3. शैक्षणिक / व्यावसायिक पृष्ठभूमि',
        question: 'आपकी शैक्षणिक पृष्ठभूमि क्या है?',
        options: {
          computer_science: 'कंप्यूटर विज्ञान (Computer Science)',
          physics: 'भौतिकी (Physics)',
          mathematics: 'गणित (Mathematics)',
          electronics_electrical: 'इलेक्ट्रॉनिक्स / इलेक्ट्रिकल इंजीनियरिंग',
          engineering_other: 'इंजीनियरिंग (अन्य)',
          data_science_ai: 'डेटा साइंस / एआई (AI)',
          cybersecurity: 'साइबर सुरक्षा (Cybersecurity)',
          other: 'अन्य'
        }
      },
      mathComfort: {
        title: '4. गणितीय समझ और सहजता',
        question: 'गणित के साथ आपकी सहजता कैसी है?',
        options: {
          very_limited: 'अत्यंत सीमित',
          basic: 'बुनियादी (Basic)',
          comfortable: 'सहज (Comfortable)',
          strong: 'मजबूत (Strong)',
          advanced: 'उन्नत (Advanced)'
        }
      },
      programmingExperience: {
        title: '5. प्रोग्रामिंग अनुभव',
        question: 'प्रोग्रामिंग में आप कितने सहज हैं?',
        options: {
          no_experience: 'कोई अनुभव नहीं',
          beginner: 'आरंभिक स्तर',
          intermediate: 'मध्यम स्तर',
          advanced: 'उन्नत स्तर',
          professional: 'व्यावसायिक स्तर'
        }
      },
      qcExperience: {
        title: '6. क्वांटम कंप्यूटिंग अनुभव',
        question: 'क्या आपने पहले क्वांटम कंप्यूटिंग का अध्ययन किया है?',
        options: {
          never: 'कभी नहीं',
          a_little: 'थोड़ा बहुत',
          some_coursework: 'कुछ पाठ्यक्रम',
          self_taught: 'स्वयं सीखा है',
          university_study: 'विश्वविद्यालयीय अध्ययन',
          research_professional: 'शोध या व्यावसायिक अनुभव'
        }
      },
      physicsBackground: {
        title: '7. भौतिकी पृष्ठभूमि',
        question: 'भौतिकी के साथ आप कितने परिचित हैं?',
        options: {
          very_limited: 'अत्यंत सीमित',
          basic: 'बुनियादी',
          intermediate: 'मध्यम',
          strong: 'मजबूत',
          advanced: 'उन्नत'
        }
      },
      learningGoal: {
        title: '8. प्राथमिक अधिगम लक्ष्य',
        question: 'क्वांटम कंप्यूटिंग सीखने का आपका मुख्य उद्देश्य क्या है?',
        options: {
          academic_study: 'शैक्षणिक अध्ययन',
          university_exams: 'विश्वविद्यालय परीक्षाएं',
          research: 'अनुसंधान एवं शोध',
          career_industry: 'कैरियर / उद्योग',
          hackathons_projects: 'हैकाथॉन एवं परियोजनाएं',
          quantum_software: 'क्वांटम सॉफ्टवेयर विकास',
          quantum_cybersecurity: 'क्वांटम साइबर सुरक्षा',
          general_knowledge: 'सामान्य ज्ञान एवं जिज्ञासा',
          other: 'अन्य'
        }
      },
      learningPreferences: {
        title: '9. सीखने की प्राथमिकताएं',
        question: 'आप किस प्रकार सीखना पसंद करते हैं? (सभी लागू विकल्प चुनें)',
        options: {
          visual_explanations: 'दृश्य व्याख्याएं (Visual explanations)',
          step_by_step: 'चरण-दर-चरण व्याख्याएं',
          math_derivations: 'गणितीय व्युत्पत्ति (Mathematical derivations)',
          practical_examples: 'व्यावहारिक उदाहरण',
          interactive_experiments: 'इंटरैक्टिव प्रयोग',
          programming_examples: 'प्रोग्रामिंग कोड उदाहरण',
          exercises_problems: 'अभ्यास प्रश्न और समस्याएं',
          video_resources: 'वीडियो व्याख्यान',
          real_world_apps: 'वास्तविक दुनिया के अनुप्रयोग'
        }
      },
      weeklyTime: {
        title: '10. साप्ताहिक अध्ययन समय',
        question: 'आप आमतौर पर अध्ययन के लिए कितना समय समर्पित कर सकते हैं?',
        options: {
          less_than_2h: '2 घंटे से कम',
          '2_to_5h': '2–5 घंटे',
          '5_to_10h': '5–10 घंटे',
          '10_to_15h': '10–15 घंटे',
          '15_plus_h': '15+ घंटे'
        }
      },
      learningPace: {
        title: '11. पसंदीदा अधिगम गति',
        question: 'आप किस गति से सीखना पसंद करते हैं?',
        options: {
          slow_detailed: 'धीमी और विस्तृत',
          balanced: 'संतुलित (Balanced)',
          fast_paced: 'तेज गति (Fast-paced)',
          intensive: 'गहन (Intensive)'
        }
      },
      learningInterests: {
        title: '12. वैकल्पिक अध्ययन रुचियां',
        question: 'किन क्षेत्रों में आपकी सर्वाधिक रुचि है? (सभी लागू विकल्प चुनें)',
        options: {
          quantum_mechanics: 'क्वांटम यांत्रिकी (Quantum Mechanics)',
          linear_algebra: 'रैखिक बीजगणित (Linear Algebra)',
          quantum_gates: 'क्वांटम गेट्स (Quantum Gates)',
          quantum_circuits: 'क्वांटम परिपथ (Quantum Circuits)',
          quantum_algorithms: 'क्वांटम एल्गोरिदम (Algorithms)',
          quantum_cryptography: 'क्वांटम क्रिप्टोग्राफी',
          quantum_ml: 'क्वांटम मशीन लर्निंग (QML)',
          quantum_simulation: 'क्वांटम सिमुलेशन',
          quantum_error_correction: 'क्वांटम त्रुटि सुधार (QEC)',
          quantum_hardware: 'क्वांटम हार्डवेयर',
          quantum_cybersecurity: 'क्वांटम साइबर सुरक्षा',
          quantum_programming: 'क्वांटम प्रोग्रामिंग'
        }
      }
    }
  },

  ta: {
    title: 'கற்பவர் தனிப்பயனாக்க சுயவிவரம்',
    subtitle: 'உங்கள் குவாண்டம் அறிஞர் அடையாளத்தைத் தனிப்பயனாக்க உங்கள் கல்விப் பின்னணி மற்றும் விருப்பங்களைப் பகிரவும்.',
    summaryBadge: 'சுயவிவரம் செயலில் உள்ளது',
    summaryTitle: 'உங்கள் குவாண்டம் கற்றல் சுயவிவரம்',
    summaryDesc: 'இந்தத் தனிப்பயனாக்க விவரம் உங்கள் உலாவியின் நினைவகத்தில் சேமிக்கப்பட்டுள்ளது.',
    editBtn: '✎ சுயவிவரத்தைத் திருத்து',
    saveBtn: 'சுயவிவரத்தைச் சேமி',
    cancelBtn: 'ரத்து செய்',
    savedToast: 'உங்கள் கற்றல் சுயவிவரம் வெற்றிகரமாகச் சேமிக்கப்பட்டது.',
    requiredNote: '* கட்டாயப் புலங்கள்',
    validationError: 'நட்சத்திரக் குறியிடப்பட்ட (*) அனைத்து கட்டாய வினாக்களுக்கும் பதிலளிக்கவும்.',
    otherPlaceholder: 'விவரங்களைக் குறிப்பிடவும்...',
    noneSelected: 'எதுவும் தேர்ந்தெடுக்கப்படவில்லை',
    sectionPersonal: '1. கல்விப் பின்னணி மற்றும் பங்கு',
    sectionReadiness: '2. கணித மற்றும் தொழில்நுட்பத் தயார்நிலை',
    sectionGoals: '3. நோக்கங்கள் மற்றும் படிப்பு நேரம்',
    sectionInterests: '4. கற்றல் விருப்பங்கள் மற்றும் தலைப்புகள்',

    questions: {
      currentLevel: {
        title: '1. தற்போதைய கற்றல் நிலை',
        question: 'குவாண்டம் கம்ப்யூட்டிங்கில் உங்கள் தற்போதைய நிலை என்ன?',
        options: {
          complete_beginner: 'முற்றிலும் புதியவர் (Complete Beginner)',
          beginner: 'தொடக்க நிலை (Beginner)',
          intermediate: 'இடைநிலை (Intermediate)',
          advanced: 'மேம்பட்ட நிலை (Advanced)',
          expert: 'நிபுணர் (Expert)'
        }
      },
      currentRole: {
        title: '2. தற்போதைய பங்கு',
        question: 'உங்களைச் சிறந்த முறையில் விவரிப்பது எது?',
        options: {
          school_student: 'பள்ளி மாணவர்',
          undergraduate: 'இளங்கலை மாணவர்',
          postgraduate: 'முதுகலை மாணவர்',
          researcher: 'ஆராய்ச்சியாளர்',
          educator: 'ஆசிரியர் / கல்வியாளர்',
          working_professional: 'பணியாற்றும் தொழில்முறை வல்லுநர்',
          hobbyist: 'சுயாதீன கற்பவர்',
          other: 'மற்றவை'
        }
      },
      background: {
        title: '3. கல்வி / தொழில் பின்னணி',
        question: 'உங்கள் கல்விப் பின்னணி என்ன?',
        options: {
          computer_science: 'கணினி அறிவியல் (Computer Science)',
          physics: 'இயற்பியல் (Physics)',
          mathematics: 'கணிதம் (Mathematics)',
          electronics_electrical: 'எலக்ட்ரானிக்ஸ் / மின் பொறியியல்',
          engineering_other: 'பொறியியல் (மற்றவை)',
          data_science_ai: 'தரவு அறிவியல் / AI',
          cybersecurity: 'சைபர் பாதுகாப்பு',
          other: 'மற்றவை'
        }
      },
      mathComfort: {
        title: '4. கணிதப் பின்னணி',
        question: 'கணிதக் கருத்துக்களில் உங்கள் வசதி எப்படி?',
        options: {
          very_limited: 'மிகவும் குறைவு',
          basic: 'அடிப்படை',
          comfortable: 'வசதியானது',
          strong: 'வலுவானது',
          advanced: 'மேம்பட்டது'
        }
      },
      programmingExperience: {
        title: '5. நிரலாக்க அனுபவம்',
        question: 'நிரலாக்கத்தில் உங்கள் அனுபவம் என்ன?',
        options: {
          no_experience: 'நிரலாக்க அனுபவம் இல்லை',
          beginner: 'தொடக்க நிலை',
          intermediate: 'இடைநிலை',
          advanced: 'மேம்பட்ட நிலை',
          professional: 'தொழில்முறை நிலை'
        }
      },
      qcExperience: {
        title: '6. குவாண்டம் கணினி அனுபவம்',
        question: 'இதற்கு முன் குவாண்டம் கம்ப்யூட்டிங் பயின்றுள்ளீர்களா?',
        options: {
          never: 'ஒருபோதும் இல்லை',
          a_little: 'சிறிதளவு',
          some_coursework: 'சில பாடப்பிரிவுகள்',
          self_taught: 'சுயமாகக் கற்றல்',
          university_study: 'பல்கலைக்கழகப் படிப்பு',
          research_professional: 'ஆராய்ச்சி அல்லது தொழில்முறை அனுபவம்'
        }
      },
      physicsBackground: {
        title: '7. இயற்பியல் பின்னணி',
        question: 'இயற்பியலில் உங்கள் பரிச்சயம் என்ன?',
        options: {
          very_limited: 'மிகவும் குறைவு',
          basic: 'அடிப்படை',
          intermediate: 'இடைநிலை',
          strong: 'வலுவானது',
          advanced: 'மேம்பட்டது'
        }
      },
      learningGoal: {
        title: '8. முதன்மைக் கற்றல் இலக்கு',
        question: 'குவாண்டம் கம்ப்யூட்டிங் கற்பதற்கான உங்கள் முக்கிய காரணம் என்ன?',
        options: {
          academic_study: 'கல்விப் படிப்பு',
          university_exams: 'பல்கலைக்கழகத் தேர்வுகள்',
          research: 'ஆராய்ச்சி',
          career_industry: 'தொழில் / வேலைவாய்ப்பு',
          hackathons_projects: 'ஹேக்கத்தான்கள் மற்றும் திட்டங்கள்',
          quantum_software: 'குவாண்டம் மென்பொருள் உருவாக்கம்',
          quantum_cybersecurity: 'குவாண்டம் சைபர் பாதுகாப்பு',
          general_knowledge: 'பொது அறிவு மற்றும் ஆர்வம்',
          other: 'மற்றவை'
        }
      },
      learningPreferences: {
        title: '9. கற்றல் விருப்பம்',
        question: 'எவ்வாறு கற்க விரும்புகிறீர்கள்? (பொருந்தும் அனைத்தையும் தேர்ந்தெடுக்கவும்)',
        options: {
          visual_explanations: 'காட்சி விளக்கங்கள் (Visual explanations)',
          step_by_step: 'படிபடியான விளக்கங்கள்',
          math_derivations: 'கணித வழித்தோன்றல்கள் (Derivations)',
          practical_examples: 'நடைமுறை எடுத்துக்காட்டுகள்',
          interactive_experiments: 'ஊடாடும் சோதனைகள்',
          programming_examples: 'நிரல் உதாரணங்கள்',
          exercises_problems: 'பயிற்சிகள் மற்றும் சிக்கல்கள்',
          video_resources: 'வீடியோ வளங்கள்',
          real_world_apps: 'நிஜ உலகப் பயன்பாடுகள்'
        }
      },
      weeklyTime: {
        title: '10. வாராந்திர கற்றல் நேரம்',
        question: 'வழக்கமாக எவ்வளவு நேரம் ஒதுக்க முடியும்?',
        options: {
          less_than_2h: '2 மணி நேரத்திற்கும் குறைவு',
          '2_to_5h': '2–5 மணி நேரம்',
          '5_to_10h': '5–10 மணி நேரம்',
          '10_to_15h': '10–15 மணி நேரம்',
          '15_plus_h': '15+ மணி நேரம்'
        }
      },
      learningPace: {
        title: '11. விருப்பமான கற்றல் வேகம்',
        question: 'எந்த வேகத்தில் கற்க விரும்புகிறீர்கள்?',
        options: {
          slow_detailed: 'மெதுவான மற்றும் விரிவான',
          balanced: 'சமநிலையான (Balanced)',
          fast_paced: 'வேகமான (Fast-paced)',
          intensive: 'தீவிரமான (Intensive)'
        }
      },
      learningInterests: {
        title: '12. ஆர்வமுள்ள தலைப்புகள்',
        question: 'உங்களுக்கு மிகவும் விருப்பமான பகுதிகள் எவை? (பொருந்தும் அனைத்தையும் தேர்ந்தெடுக்கவும்)',
        options: {
          quantum_mechanics: 'குவாண்டம் இயக்கவியல் (Quantum Mechanics)',
          linear_algebra: 'நேரியல் இயற்கணிதம் (Linear Algebra)',
          quantum_gates: 'குவாண்டம் வாயில்கள் (Gates)',
          quantum_circuits: 'குவாண்டம் சுற்றுகள் (Circuits)',
          quantum_algorithms: 'குவாண்டம் வழிமுறைகள் (Algorithms)',
          quantum_cryptography: 'குவாண்டம் குறியாக்கவியல்',
          quantum_ml: 'குவாண்டம் இயந்திரக் கற்றல் (QML)',
          quantum_simulation: 'குவாண்டம் உருவகப்படுத்துதல்',
          quantum_error_correction: 'பிழை திருத்தம் (QEC)',
          quantum_hardware: 'குவாண்டம் வன்பொருள் (Hardware)',
          quantum_cybersecurity: 'குவாண்டம் சைபர் பாதுகாப்பு',
          quantum_programming: 'குவாண்டம் நிரலாக்கம்'
        }
      }
    }
  },

  te: {
    title: 'అభ్యాసకుని వ్యక్తిగతీకరణ ప్రొఫైల్',
    subtitle: 'మీ క్వాంటమ్ స్కాలర్ గుర్తింపును వ్యక్తిగతీకరించడానికి మీ నేపథ్యం మరియు ప్రాధాన్యతలను పంచుకోండి.',
    summaryBadge: 'ప్రొఫైల్ సక్రియంగా ఉంది',
    summaryTitle: 'మీ క్వాంటమ్ అభ్యాస ప్రొఫైల్',
    summaryDesc: 'ఈ వ్యక్తిగతీకరణ రికార్డు మీ బ్రౌజర్ మెమరీలో స్థానికంగా భద్రపరచబడింది.',
    editBtn: '✎ వ్యక్తిగతీకరణను సవరించండి',
    saveBtn: 'వ్యక్తిగతీకరణను భద్రపరచండి',
    cancelBtn: 'రద్దు చేయండి',
    savedToast: 'మీ అభ్యాస ప్రొఫైల్ విజయవంతంగా భద్రపరచబడింది.',
    requiredNote: '* తప్పనిసరి ఫీల్డ్‌లు',
    validationError: 'దయచేసి నక్షత్రం (*) గుర్తు ఉన్న అన్ని తప్పనిసరి ప్రశ్నలను పూర్తి చేయండి.',
    otherPlaceholder: 'దయచేసి వివరించండి...',
    noneSelected: 'ఏదీ ఎంపిక చేయబడలేదు',
    sectionPersonal: '1. నేపథ్యం మరియు విద్యా పాత్ర',
    sectionReadiness: '2. గణిత మరియు సాంకేతిక సంసిద్ధత',
    sectionGoals: '3. లక్ష్యాలు మరియు అధ్యయన సమయం',
    sectionInterests: '4. అభ్యాస ప్రాధాన్యతలు మరియు ఆసక్తులు',

    questions: {
      currentLevel: {
        title: '1. ప్రస్తుత అభ్యాస స్థాయి',
        question: 'క్వాంటమ్ కంప్యూటింగ్‌లో మీ ప్రస్తుత స్థాయి ఏమిటి?',
        options: {
          complete_beginner: 'పూర్తి అనుభవశూన్యుడు (Complete Beginner)',
          beginner: 'ప్రారంభ స్థాయి (Beginner)',
          intermediate: 'మధ్యస్థ స్థాయి (Intermediate)',
          advanced: 'ఉన్నత స్థాయి (Advanced)',
          expert: 'నిపుణుడు (Expert)'
        }
      },
      currentRole: {
        title: '2. ప్రస్తుత పాత్ర',
        question: 'కింది వాటిలో మిమ్మల్ని ఏది ఉత్తమంగా వివరిస్తుంది?',
        options: {
          school_student: 'పాఠశాల విద్యార్థి',
          undergraduate: 'అండర్ గ్రాడ్యుయేట్ విద్యార్థి',
          postgraduate: 'పోస్ట్ గ్రాడ్యుయేట్ విద్యార్థి',
          researcher: 'పరిశోధకుడు',
          educator: 'ఉపాధ్యాయుడు / అధ్యాపకుడు',
          working_professional: 'ఉద్యోగి / ప్రొఫెషనల్',
          hobbyist: 'స్వతంత్ర అభ్యాసకుడు',
          other: 'ఇతర'
        }
      },
      background: {
        title: '3. విద్యా / వృత్తిపరమైన నేపథ్యం',
        question: 'మీ నేపథ్యం ఏమిటి?',
        options: {
          computer_science: 'కంప్యూటర్ సైన్స్',
          physics: 'భౌతిక శాస్త్రం (Physics)',
          mathematics: 'గణితం (Mathematics)',
          electronics_electrical: 'ఎలక్ట్రానిక్స్ / ఎలక్ట్రికల్ ఇంజనీరింగ్',
          engineering_other: 'ఇంజనీరింగ్ (ఇతర)',
          data_science_ai: 'డేటా సైన్స్ / AI',
          cybersecurity: 'సైబర్ సెక్యూరిటీ',
          other: 'ఇతర'
        }
      },
      mathComfort: {
        title: '4. గణిత పరిజ్ఞానం',
        question: 'గణితంతో మీరు ఎంత సౌకర్యవంతంగా ఉన్నారు?',
        options: {
          very_limited: 'చాలా పరిమితం',
          basic: 'ప్రాథమికం',
          comfortable: 'సౌకర్యవంతం',
          strong: 'బలంగా ఉంది',
          advanced: 'ఉన్నతం'
        }
      },
      programmingExperience: {
        title: '5. ప్రోగ్రామింగ్ అనుభవం',
        question: 'ప్రోగ్రామింగ్‌లో మీ అనుభవం ఎంత?',
        options: {
          no_experience: 'అనుభవం లేదు',
          beginner: 'ప్రారంభ స్థాయి',
          intermediate: 'మధ్యస్థ స్థాయి',
          advanced: 'ఉన్నత స్థాయి',
          professional: 'వృత్తిపరమైన స్థాయి'
        }
      },
      qcExperience: {
        title: '6. క్వాంటమ్ కంప్యూటింగ్ అనుభవం',
        question: 'మీరు ఇంతకు ముందు క్వాంటమ్ కంప్యూటింగ్‌ను అధ్యయనం చేశారా?',
        options: {
          never: 'ఎప్పుడూ లేదు',
          a_little: 'కొద్దిగా',
          some_coursework: 'కొన్ని కోర్సులు',
          self_taught: 'స్వయంగా నేర్చుకున్నారు',
          university_study: 'విశ్వవిద్యాలయ అధ్యయనం',
          research_professional: 'పరిశోధన లేదా వృత్తిపరమైన అనుభవం'
        }
      },
      physicsBackground: {
        title: '7. భౌతిక శాస్త్ర నేపథ్యం',
        question: 'భౌతిక శాస్త్రంలో మీ పరిచయం ఎంత?',
        options: {
          very_limited: 'చాలా పరిమితం',
          basic: 'ప్రాథమికం',
          intermediate: 'మధ్యస్థం',
          strong: 'బలమైనది',
          advanced: 'ఉన్నతమైనది'
        }
      },
      learningGoal: {
        title: '8. ప్రాథమిక అభ్యాస లక్ష్యం',
        question: 'క్వాంటమ్ కంప్యూటింగ్ నేర్చుకోవడానికి మీ ముఖ్య కారణం ఏమిటి?',
        options: {
          academic_study: 'విద్యాభ్యాసం',
          university_exams: 'విశ్వవిద్యాలయ పరీక్షలు',
          research: 'పరిశోధన',
          career_industry: 'కెరీర్ / పరిశ్రమ',
          hackathons_projects: 'హ్యాకథాన్‌లు మరియు ప్రాజెక్ట్‌లు',
          quantum_software: 'క్వాంటమ్ సాఫ్ట్‌వేర్ అభివృద్ధి',
          quantum_cybersecurity: 'క్వాంటమ్ సైబర్ భద్రత',
          general_knowledge: 'సాధారణ జ్ఞానం మరియు ఆసక్తి',
          other: 'ఇతర'
        }
      },
      learningPreferences: {
        title: '9. అభ్యాస ప్రాధాన్యత',
        question: 'మీరు ఎలా నేర్చుకోవడానికి ఇష్టపడతారు? (వర్తించేవన్నీ ఎంచుకోండి)',
        options: {
          visual_explanations: 'దృశ్య వివరణలు (Visual explanations)',
          step_by_step: 'దశలవారీ వివరణలు',
          math_derivations: 'గణిత సమీకరణాలు',
          practical_examples: 'ఆచరణాత్మక ఉదాహరణలు',
          interactive_experiments: 'ఇంటరాక్టివ్ ప్రయోగాలు',
          programming_examples: 'ప్రోగ్రామింగ్ ఉదాహరణలు',
          exercises_problems: 'వ్యాయామాలు మరియు సమస్యలు',
          video_resources: 'వీడియో వనరులు',
          real_world_apps: 'నిజ-ప్రపంచ అనువర్తనాలు'
        }
      },
      weeklyTime: {
        title: '10. వారపు అభ్యాస సమయం',
        question: 'మీరు సాధారణంగా ఎంత సమయం కేటాయించగలరు?',
        options: {
          less_than_2h: '2 గంటల కంటే తక్కువ',
          '2_to_5h': '2–5 గంటలు',
          '5_to_10h': '5–10 గంటలు',
          '10_to_15h': '10–15 గంటలు',
          '15_plus_h': '15+ గంటలు'
        }
      },
      learningPace: {
        title: '11. ప్రాధాన్య అభ్యాస వేగం',
        question: 'మీరు ఏ వేగంతో నేర్చుకోవడానికి ఇష్టపడతారు?',
        options: {
          slow_detailed: 'నెమ్మదిగా మరియు వివరంగా',
          balanced: 'సమతుల్యమైన (Balanced)',
          fast_paced: 'వేగవంతమైన (Fast-paced)',
          intensive: 'తీవ్రమైన (Intensive)'
        }
      },
      learningInterests: {
        title: '12. ఆసక్తిగల విభాగాలు',
        question: 'మీకు ఏ రంగాలపై ఎక్కువ ఆసక్తి ఉంది? (వర్తించేవన్నీ ఎంచుకోండి)',
        options: {
          quantum_mechanics: 'క్వాంటమ్ మెకానిక్స్',
          linear_algebra: 'లీనియర్ ఆల్జీబ్రా',
          quantum_gates: 'క్వాంటమ్ గేట్లు',
          quantum_circuits: 'క్వాంటమ్ సర్క్యూట్లు',
          quantum_algorithms: 'క్వాంటమ్ అల్గోరిథంలు',
          quantum_cryptography: 'క్వాంటమ్ క్రిప్టోగ్రఫీ',
          quantum_ml: 'క్వాంటమ్ మెషిన్ లెర్నింగ్',
          quantum_simulation: 'క్వాంటమ్ సిమ్యులేషన్',
          quantum_error_correction: 'లోపం సవరణ (QEC)',
          quantum_hardware: 'క్వాంటమ్ హార్డ్‌వేర్',
          quantum_cybersecurity: 'క్వాంటమ్ సైబర్ సెక్యూరిటీ',
          quantum_programming: 'క్వాంటమ్ ప్రోగ్రామింగ్'
        }
      }
    }
  },

  kn: {
    title: 'ಕಲಿಯುವವರ ವೈಯಕ್ತೀಕರಣ ಪ್ರೊಫೈಲ್',
    subtitle: 'ನಿಮ್ಮ ಕ್ವಾಂಟಮ್ ವಿದ್ವಾಂಸರ ಗುರುತನ್ನು ವೈಯಕ್ತೀಕರಿಸಲು ನಿಮ್ಮ ಹಿನ್ನೆಲೆ ಮತ್ತು ಆದ್ಯತೆಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ.',
    summaryBadge: 'ಪ್ರೊಫೈಲ್ ಸಕ್ರಿಯವಾಗಿದೆ',
    summaryTitle: 'ನಿಮ್ಮ ಕ್ವಾಂಟಮ್ ಕಲಿಕೆಯ ಪ್ರೊಫೈಲ್',
    summaryDesc: 'ಈ ವೈಯಕ್ತೀಕರಣ ದಾಖಲೆಯನ್ನು ನಿಮ್ಮ ಬ್ರೌಸರ್ ಮೆಮೊರಿಯಲ್ಲಿ ಸ್ಥಳೀಯವಾಗಿ ಉಳಿಸಲಾಗಿದೆ.',
    editBtn: '✎ ವೈಯಕ್ತೀಕರಣವನ್ನು ಸಂಪಾದಿಸಿ',
    saveBtn: 'ವೈಯಕ್ತೀಕರಣ ಉಳಿಸಿ',
    cancelBtn: 'ರದ್ದುಮಾಡಿ',
    savedToast: 'ನಿಮ್ಮ ಕಲಿಕೆಯ ಪ್ರೊಫೈಲ್ ಅನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಉಳಿಸಲಾಗಿದೆ.',
    requiredNote: '* ಕಡ್ಡಾಯ ಕ್ಷೇತ್ರಗಳು',
    validationError: 'ದಯವಿಟ್ಟು ನಕ್ಷತ್ರ ಚಿಹ್ನೆ (*) ಇರುವ ಎಲ್ಲಾ ಕಡ್ಡಾಯ ಪ್ರಶ್ನೆಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ.',
    otherPlaceholder: 'ದಯವಿಟ್ಟು ನಿರ್ದಿಷ್ಟಪಡಿಸಿ...',
    noneSelected: 'ಯಾವುದನ್ನೂ ಆಯ್ಕೆ ಮಾಡಿಲ್ಲ',
    sectionPersonal: '1. ಹಿನ್ನೆಲೆ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ಪಾತ್ರ',
    sectionReadiness: '2. ಗಣಿತ ಮತ್ತು ತಾಂತ್ರಿಕ ಸನ್ನದ್ಧತೆ',
    sectionGoals: '3. ಗುರಿಗಳು ಮತ್ತು ಅಧ್ಯಯನ ಸಮಯ',
    sectionInterests: '4. ಕಲಿಕೆಯ ಆದ್ಯತೆಗಳು ಮತ್ತು ವಿಷಯಗಳು',

    questions: {
      currentLevel: {
        title: '1. ಪ್ರಸ್ತುತ ಕಲಿಕೆಯ ಮಟ್ಟ',
        question: 'ಕ್ವಾಂಟಮ್ ಕಂಪ್ಯೂಟಿಂಗ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಮಟ್ಟ ಯಾವುದು?',
        options: {
          complete_beginner: 'ಸಂಪೂರ್ಣ ಆರಂಭಿಕ (Complete Beginner)',
          beginner: 'ಆರಂಭಿಕ (Beginner)',
          intermediate: 'ಮಧ್ಯಂತರ (Intermediate)',
          advanced: 'ಸುಧಾರಿತ (Advanced)',
          expert: 'ತಜ್ಞ (Expert)'
        }
      },
      currentRole: {
        title: '2. ಪ್ರಸ್ತುತ ಪಾತ್ರ',
        question: 'ನಿಮ್ಮನ್ನು ಯಾವುದು ಅತ್ಯುತ್ತಮವಾಗಿ ವಿವರಿಸುತ್ತದೆ?',
        options: {
          school_student: 'ಶಾಲಾ ವಿದ್ಯಾರ್ಥಿ',
          undergraduate: 'ಪದವಿ ವಿದ್ಯಾರ್ಥಿ',
          postgraduate: 'ಸ್ನಾತಕೋತ್ತರ ವಿದ್ಯಾರ್ಥಿ',
          researcher: 'ಸಂಶೋಧಕ',
          educator: 'ಶಿಕ್ಷಕ / ಬೋಧಕ',
          working_professional: 'ಉದ್ಯೋಗಿ / ವೃತ್ತಿಪರ',
          hobbyist: 'ಸ್ವತಂತ್ರ ಕಲಿಯುವವರು',
          other: 'ಇತರ'
        }
      },
      background: {
        title: '3. ಶೈಕ್ಷಣಿಕ / ವೃತ್ತಿಪರ ಹಿನ್ನೆಲೆ',
        question: 'ನಿಮ್ಮ ಹಿನ್ನೆಲೆ ಏನು?',
        options: {
          computer_science: 'ಕಂಪ್ಯೂಟರ್ ಸೈನ್ಸ್',
          physics: 'ಭೌತಶಾಸ್ತ್ರ (Physics)',
          mathematics: 'ಗಣಿತಶಾಸ್ತ್ರ (Mathematics)',
          electronics_electrical: 'ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ / ಎಲೆಕ್ಟ್ರಿಕಲ್ ಎಂಜಿನಿಯರಿಂಗ್',
          engineering_other: 'ಎಂಜಿನಿಯರಿಂಗ್ (ಇತರ)',
          data_science_ai: 'ಡೇಟಾ ಸೈನ್ಸ್ / AI',
          cybersecurity: 'ಸೈಬರ್ ಭದ್ರತೆ',
          other: 'ಇತರ'
        }
      },
      mathComfort: {
        title: '4. ಗಣಿತ ಹಿನ್ನೆಲೆ',
        question: 'ಗಣಿತದೊಂದಿಗೆ ನೀವು ಎಷ್ಟು ಆರಾಮದಾಯಕವಾಗಿದ್ದೀರಿ?',
        options: {
          very_limited: 'ಬಹಳ ಸೀಮಿತ',
          basic: 'ಮೂಲಭೂತ',
          comfortable: 'ಆರಾಮದಾಯಕ',
          strong: 'ದೃಢವಾಗಿದೆ',
          advanced: 'ಸುಧಾರಿತ'
        }
      },
      programmingExperience: {
        title: '5. ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಅನುಭವ',
        question: 'ಪ್ರೋಗ್ರಾಮಿಂಗ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಅನುಭವ ಎಷ್ಟು?',
        options: {
          no_experience: 'ಯಾವುದೇ ಅನುಭವವಿಲ್ಲ',
          beginner: 'ಆರಂಭಿಕ ಮಟ್ಟ',
          intermediate: 'ಮಧ್ಯಂತರ ಮಟ್ಟ',
          advanced: 'ಸುಧಾರಿತ ಮಟ್ಟ',
          professional: 'ವೃತ್ತಿಪರ ಮಟ್ಟ'
        }
      },
      qcExperience: {
        title: '6. ಕ್ವಾಂಟಮ್ ಕಂಪ್ಯೂಟಿಂಗ್ ಅನುಭವ',
        question: 'ನೀವು ಈ ಮೊದಲು ಕ್ವಾಂಟಮ್ ಕಂಪ್ಯೂಟಿಂಗ್ ಅಧ್ಯಯನ ಮಾಡಿದ್ದೀರಾ?',
        options: {
          never: 'ಎಂದಿಗೂ ಇಲ್ಲ',
          a_little: 'ಸ್ವಲ್ಪ',
          some_coursework: 'ಕೆಲವು ಕೋರ್ಸ್‌ಗಳು',
          self_taught: 'ಸ್ವತಃ ಕಲಿತದ್ದು',
          university_study: 'ವಿಶ್ವವಿದ್ಯಾಲಯದ ಅಧ್ಯಯನ',
          research_professional: 'ಸಂಶೋಧನೆ ಅಥವಾ ವೃತ್ತಿಪರ ಅನುಭವ'
        }
      },
      physicsBackground: {
        title: '7. ಭೌತಶಾಸ್ತ್ರ ಹಿನ್ನೆಲೆ',
        question: 'ಭೌತಶಾಸ್ತ್ರದಲ್ಲಿ ನಿಮ್ಮ ಪರಿಚಯ ಎಷ್ಟು?',
        options: {
          very_limited: 'ಬಹಳ ಸೀಮಿತ',
          basic: 'ಮೂಲಭೂತ',
          intermediate: 'ಮಧ್ಯಂತರ',
          strong: 'ದೃಢ',
          advanced: 'ಸುಧಾರಿತ'
        }
      },
      learningGoal: {
        title: '8. ಪ್ರಾಥಮಿಕ ಕಲಿಕೆಯ ಗುರಿ',
        question: 'ಕ್ವಾಂಟಮ್ ಕಂಪ್ಯೂಟಿಂಗ್ ಕಲಿಯಲು ನಿಮ್ಮ ಮುಖ್ಯ ಕಾರಣವೇನು?',
        options: {
          academic_study: 'ಶೈಕ್ಷಣಿಕ ಅಧ್ಯಯನ',
          university_exams: 'ಪರೀಕ್ಷೆಗಳು',
          research: 'ಸಂಶೋಧನೆ',
          career_industry: 'ವೃತ್ತಿ / ಉದ್ಯಮ',
          hackathons_projects: 'ಹ್ಯಾಕಥಾನ್‌ಗಳು ಮತ್ತು ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು',
          quantum_software: 'ಕ್ವಾಂಟಮ್ ತಂತ್ರಾಂಶ ಅಭಿವೃದ್ಧಿ',
          quantum_cybersecurity: 'ಕ್ವಾಂಟಮ್ ಸೈಬರ್ ಭದ್ರತೆ',
          general_knowledge: 'ಸಾಮಾನ್ಯ ಜ್ಞಾನ ಮತ್ತು ಆಸಕ್ತಿ',
          other: 'ಇತರ'
        }
      },
      learningPreferences: {
        title: '9. ಕಲಿಕೆಯ ಆದ್ಯತೆ',
        question: 'ನೀವು ಹೇಗೆ ಕಲಿಯಲು ಬಯಸುತ್ತೀರಿ? (ಅನ್ವಯವಾಗುವ ಎಲ್ಲವನ್ನೂ ಆಯ್ಕೆಮಾಡಿ)',
        options: {
          visual_explanations: 'ದೃಶ್ಯ ವಿವರಣೆಗಳು (Visual explanations)',
          step_by_step: 'ಹಂತ-ಹಂತದ ವಿವರಣೆಗಳು',
          math_derivations: 'ಗಣಿತ ಸಮೀಕರಣಗಳು',
          practical_examples: 'ಪ್ರಾಯೋಗಿಕ ಉದಾಹರಣೆಗಳು',
          interactive_experiments: 'ಸಂವಾದಾತ್ಮಕ ಪ್ರಯೋಗಗಳು',
          programming_examples: 'ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಉದಾಹರಣೆಗಳು',
          exercises_problems: 'ಅಭ್ಯಾಸ ಸಮಸ್ಯೆಗಳು',
          video_resources: 'ವಿಡಿಯೋ ಸಂಪನ್ಮೂಲಗಳು',
          real_world_apps: 'ನೈಜ-ಪ್ರಪಂಚದ ಅನ್ವಯಗಳು'
        }
      },
      weeklyTime: {
        title: '10. ಸಾಪ್ತಾಹಿಕ ಕಲಿಕೆಯ ಸಮಯ',
        question: 'ಸಾಮಾನ್ಯವಾಗಿ ಎಷ್ಟು ಸಮಯ ಮೀಸಲಿಡಬಹುದು?',
        options: {
          less_than_2h: '2 ಗಂಟೆಗಳಿಗಿಂತ ಕಡಿಮೆ',
          '2_to_5h': '2–5 ಗಂಟೆಗಳು',
          '5_to_10h': '5–10 ಗಂಟೆಗಳು',
          '10_to_15h': '10–15 ಗಂಟೆಗಳು',
          '15_plus_h': '15+ ಗಂಟೆಗಳು'
        }
      },
      learningPace: {
        title: '11. ಆದ್ಯತೆಯ ಕಲಿಕೆಯ ವೇಗ',
        question: 'ನೀವು ಯಾವ ವೇಗದಲ್ಲಿ ಕಲಿಯಲು ಬಯಸುತ್ತೀರಿ?',
        options: {
          slow_detailed: 'ನಿಧಾನ ಮತ್ತು ವಿವರವಾದ',
          balanced: 'ಸಮತೋಲಿತ (Balanced)',
          fast_paced: 'ವೇಗದ (Fast-paced)',
          intensive: 'ತೀವ್ರವಾದ (Intensive)'
        }
      },
      learningInterests: {
        title: '12. ಆಸಕ್ತಿಯ ವಿಷಯಗಳು',
        question: 'ನಿಮಗೆ ಹೆಚ್ಚು ಆಸಕ್ತಿಯಿರುವ ಕ್ಷೇತ್ರಗಳು ಯಾವುವು? (ಅನ್ವಯವಾಗುವ ಎಲ್ಲವನ್ನೂ ಆಯ್ಕೆಮಾಡಿ)',
        options: {
          quantum_mechanics: 'ಕ್ವಾಂಟಮ್ ಮೆಕ್ಯಾನಿಕ್ಸ್',
          linear_algebra: 'ಲೀನಿಯರ್ ಆಲ್ಜಿಬ್ರಾ',
          quantum_gates: 'ಕ್ವಾಂಟಮ್ ಗೇಟ್‌ಗಳು',
          quantum_circuits: 'ಕ್ವಾಂಟಮ್ ಸರ್ಕ್ಯೂಟ್‌ಗಳು',
          quantum_algorithms: 'ಕ್ವಾಂಟಮ್ ಅಲ್ಗಾರಿದಮ್‌ಗಳು',
          quantum_cryptography: 'ಕ್ವಾಂಟಮ್ ಕ್ರಿಪ್ಟೋಗ್ರಫಿ',
          quantum_ml: 'ಕ್ವಾಂಟಮ್ ಮೆಷಿನ್ ಲರ್ನಿಂಗ್',
          quantum_simulation: 'ಕ್ವಾಂಟಮ್ ಸಿಮ್ಯುಲೇಶನ್',
          quantum_error_correction: 'ದೋಷ ತಿದ್ದುಪಡಿ (QEC)',
          quantum_hardware: 'ಕ್ವಾಂಟಮ್ ಹಾರ್ಡ್‌ವೇರ್',
          quantum_cybersecurity: 'ಕ್ವಾಂಟಮ್ ಸೈಬರ್ ಭದ್ರತೆ',
          quantum_programming: 'ಕ್ವಾಂಟಮ್ ಪ್ರೋಗ್ರಾಮಿಂಗ್'
        }
      }
    }
  },

  ml: {
    title: 'പഠിതാവിന്റെ വ്യക്തിഗത പ്രൊഫൈൽ',
    subtitle: 'നിങ്ങളുടെ ക്വാണ്ടം സ്കോളർ ഐഡന്റിറ്റി വ്യക്തിഗതമാക്കുന്നതിന് നിങ്ങളുടെ പശ്ചാത്തലവും മുൻഗണനകളും പങ്കിടുക.',
    summaryBadge: 'പ്രൊഫൈൽ സജീവം',
    summaryTitle: 'നിങ്ങളുടെ ക്വാണ്ടം പഠന പ്രൊഫൈൽ',
    summaryDesc: 'ഈ വ്യക്തിഗതമാക്കൽ വിവരങ്ങൾ നിങ്ങളുടെ ബ്രൗസർ മെമ്മറിയിൽ പ്രാദേശികമായി സൂക്ഷിച്ചിരിക്കുന്നു.',
    editBtn: '✎ വ്യക്തിഗതമാക്കൽ എഡിറ്റ് ചെയ്യുക',
    saveBtn: 'വ്യക്തിഗതമാക്കൽ സംരക്ഷിക്കുക',
    cancelBtn: 'റദ്ദാക്കുക',
    savedToast: 'നിങ്ങളുടെ പഠന പ്രൊഫൈൽ വിജയകരമായി സംരക്ഷിച്ചു.',
    requiredNote: '* നിർബന്ധിത ഫീൽഡുകൾ',
    validationError: 'നക്ഷത്രചിഹ്നമിട്ട (*) എല്ലാ നിർബന്ധിത ചോദ്യങ്ങൾക്കും ഉത്തരം നൽകുക.',
    otherPlaceholder: 'ദയവായി വ്യക്തമാക്കുക...',
    noneSelected: 'ഒന്നും തിരഞ്ഞെടുത്തിട്ടില്ല',
    sectionPersonal: '1. പശ്ചാത്തലവും വിദ്യാഭ്യാസ പങ്കും',
    sectionReadiness: '2. ഗണിതശാസ്ത്ര സാങ്കേതിക സന്നദ്ധത',
    sectionGoals: '3. ലക്ഷ്യങ്ങളും പഠന സമയവും',
    sectionInterests: '4. പഠന മുൻഗണനകളും വിഷയങ്ങളും',

    questions: {
      currentLevel: {
        title: '1. നിലവിലെ പഠന നിലവാരം',
        question: 'ക്വാണ്ടം കമ്പ്യൂട്ടിംഗിൽ നിങ്ങളുടെ നിലവിലെ നിലവാരം എന്താണ്?',
        options: {
          complete_beginner: 'പൂർണ്ണ തുടക്കക്കാരൻ (Complete Beginner)',
          beginner: 'തുടക്കക്കാരൻ (Beginner)',
          intermediate: 'ഇടത്തരം (Intermediate)',
          advanced: 'ഉന്നത നിലവാരം (Advanced)',
          expert: 'വിദഗ്ദ്ധൻ (Expert)'
        }
      },
      currentRole: {
        title: '2. നിലവിലെ പങ്ക്',
        question: 'താഴെ പറയുന്നവയിൽ ഏതാണ് നിങ്ങളെ ഏറ്റവും നന്നായി വിവരിക്കുന്നത്?',
        options: {
          school_student: 'സ്കൂൾ വിദ്യാർത്ഥി',
          undergraduate: 'ബിരുദ വിദ്യാർത്ഥി',
          postgraduate: 'ബിരുദാനന്തര ബിരുദ വിദ്യാർത്ഥി',
          researcher: 'ഗവേഷകൻ',
          educator: 'അധ്യാപകൻ',
          working_professional: 'ജോലി ചെയ്യുന്ന പ്രൊഫഷണൽ',
          hobbyist: 'സ്വതന്ത്ര പഠിതാവ്',
          other: 'മറ്റുള്ളവ'
        }
      },
      background: {
        title: '3. വിദ്യാഭ്യാസ / തൊഴിൽ പശ്ചാത്തലം',
        question: 'നിങ്ങളുടെ പശ്ചാത്തലം എന്താണ്?',
        options: {
          computer_science: 'കമ്പ്യൂട്ടർ സയൻസ്',
          physics: 'ഫിസിക്സ് (Physics)',
          mathematics: 'മാത്തമാറ്റിക്സ് (Mathematics)',
          electronics_electrical: 'ഇലക്ട്രോണിക്സ് / ഇലക്ട്രിക്കൽ എഞ്ചിനീയറിംഗ്',
          engineering_other: 'എഞ്ചിനീയറിംഗ് (മറ്റുള്ളവ)',
          data_science_ai: 'ഡാറ്റ സയൻസ് / AI',
          cybersecurity: 'സൈബർ സുരക്ഷ',
          other: 'മറ്റുള്ളവ'
        }
      },
      mathComfort: {
        title: '4. ഗണിതശാസ്ത്ര പശ്ചാത്തലം',
        question: 'ഗണിതശാസ്ത്രത്തിൽ നിങ്ങൾക്ക് എത്രത്തോളം എളുപ്പമുണ്ട്?',
        options: {
          very_limited: 'വളരെ പരിമിതം',
          basic: 'അടിസ്ഥാനം',
          comfortable: 'സുഖകരം',
          strong: 'ശക്തം',
          advanced: 'ഉന്നതം'
        }
      },
      programmingExperience: {
        title: '5. പ്രോഗ്രാമിംഗ് പരിചയം',
        question: 'പ്രോഗ്രാമിംഗിൽ നിങ്ങളുടെ പ്രാവീണ്യം എത്രയാണ്?',
        options: {
          no_experience: 'പരിചയമില്ല',
          beginner: 'തുടക്ക നിലവാരം',
          intermediate: 'ഇടത്തരം നിലവാരം',
          advanced: 'ഉന്നത നിലവാരം',
          professional: 'പ്രൊഫഷണൽ നിലവാരം'
        }
      },
      qcExperience: {
        title: '6. ക്വാണ്ടം കമ്പ്യൂട്ടിംഗ് പരിചയം',
        question: 'നിങ്ങൾ മുമ്പ് ക്വാണ്ടം കമ്പ്യൂട്ടിംഗ് പഠിച്ചിട്ടുണ്ടോ?',
        options: {
          never: 'ഒരിക്കലും ഇല്ല',
          a_little: 'കുറച്ച്',
          some_coursework: 'ചില കോഴ്സുകൾ',
          self_taught: 'സ്വയം പഠിച്ചത്',
          university_study: 'യൂണിവേഴ്സിറ്റി പഠനം',
          research_professional: 'ഗവേഷണ അല്ലെങ്കിൽ തൊഴിൽ പരിചയം'
        }
      },
      physicsBackground: {
        title: '7. ഭൗതികശാസ്ത്ര പശ്ചാത്തലം',
        question: 'ഭൗതികശാസ്ത്രത്തിൽ നിങ്ങളുടെ പരിചയം എന്താണ്?',
        options: {
          very_limited: 'വളരെ പരിമിതം',
          basic: 'അടിസ്ഥാനം',
          intermediate: 'ഇടത്തരം',
          strong: 'ശക്തം',
          advanced: 'ഉന്നതം'
        }
      },
      learningGoal: {
        title: '8. പ്രാഥമിക പഠന ലക്ഷ്യം',
        question: 'ക്വാണ്ടം കമ്പ്യൂട്ടിംഗ് പഠിക്കാനുള്ള നിങ്ങളുടെ പ്രധാന ലക്ഷ്യം എന്താണ്?',
        options: {
          academic_study: 'വിദ്യാഭ്യാസ പഠനം',
          university_exams: 'പരീക്ഷകൾ',
          research: 'ഗവേഷണം',
          career_industry: 'കരിയർ / ജോലി',
          hackathons_projects: 'ഹാക്കത്തോണുകളും പ്രോജക്ടുകളും',
          quantum_software: 'ക്വാണ്ടം സോഫ്റ്റ്‌വെയർ വികസനം',
          quantum_cybersecurity: 'ക്വാണ്ടം സൈബർ സുരക്ഷ',
          general_knowledge: 'പൊതുവിജ്ഞാനവും താൽപ്പര്യവും',
          other: 'മറ്റുള്ളവ'
        }
      },
      learningPreferences: {
        title: '9. പഠന മുൻഗണനകൾ',
        question: 'നിങ്ങൾ എങ്ങനെ പഠിക്കാൻ ഇഷ്ടപ്പെടുന്നു? (ബാധകമായവയെല്ലാം തിരഞ്ഞെടുക്കുക)',
        options: {
          visual_explanations: 'വിഷ്വൽ വിശദീകരണങ്ങൾ (Visual explanations)',
          step_by_step: 'ഘട്ടം ഘട്ടമായുള്ള വിശദീകരണങ്ങൾ',
          math_derivations: 'ഗണിത സമവാക്യങ്ങൾ',
          practical_examples: 'പ്രായോഗിക ഉദാഹരണങ്ങൾ',
          interactive_experiments: 'ഇന്ററാക്ടീവ് പരീക്ഷണങ്ങൾ',
          programming_examples: 'പ്രോഗ്രാമിംഗ് കോഡ് ഉദാഹരണങ്ങൾ',
          exercises_problems: 'പരിശീലന പ്രശ്നങ്ങൾ',
          video_resources: 'വീഡിയോ പാഠങ്ങൾ',
          real_world_apps: 'യഥാർത്ഥ ലോക ആപ്ലിക്കേഷനുകൾ'
        }
      },
      weeklyTime: {
        title: '10. പ്രതിവാര പഠന സമയം',
        question: 'സാധാരണയായി എത്ര സമയം പഠനത്തിനായി നീക്കിവെക്കാം?',
        options: {
          less_than_2h: '2 മണിക്കൂറിൽ താഴെ',
          '2_to_5h': '2–5 മണിക്കൂർ',
          '5_to_10h': '5–10 മണിക്കൂർ',
          '10_to_15h': '10–15 മണിക്കൂർ',
          '15_plus_h': '15+ മണിക്കൂർ'
        }
      },
      learningPace: {
        title: '11. ഇഷ്ടപ്പെട്ട പഠന വേഗത',
        question: 'ഏത് വേഗതയിലാണ് പഠിക്കാൻ ആഗ്രഹിക്കുന്നത്?',
        options: {
          slow_detailed: 'പതുക്കെയുള്ളതും വിശദവുമായത്',
          balanced: 'സന്തുലിതമായത് (Balanced)',
          fast_paced: 'വേഗതയേറിയത് (Fast-paced)',
          intensive: 'തീവ്രമായത് (Intensive)'
        }
      },
      learningInterests: {
        title: '12. താല്പര്യമുള്ള വിഷയങ്ങൾ',
        question: 'ഏതൊക്കെ മേഖലകളിലാണ് നിങ്ങൾക്ക് കൂടുതൽ താൽപ്പര്യം? (ബാധകമായവയെല്ലാം തിരഞ്ഞെടുക്കുക)',
        options: {
          quantum_mechanics: 'ക്വാണ്ടം മെക്കാനിക്സ്',
          linear_algebra: 'ലീനിയർ ആൾജിബ്ര',
          quantum_gates: 'ക്വാണ്ടം ഗേറ്റുകൾ',
          quantum_circuits: 'ക്വാണ്ടം സർക്യൂട്ടുകൾ',
          quantum_algorithms: 'ക്വാണ്ടം അൽഗോരിതങ്ങൾ',
          quantum_cryptography: 'ക്വാണ്ടം ക്രിപ്റ്റോഗ്രാഫി',
          quantum_ml: 'ക്വാണ്ടം മെഷീൻ ലേണിംഗ്',
          quantum_simulation: 'ക്വാണ്ടം സിമുലേഷൻ',
          quantum_error_correction: 'പിശക് തിരുത്തൽ (QEC)',
          quantum_hardware: 'ക്വാണ്ടം ഹാർഡ്‌വെയർ',
          quantum_cybersecurity: 'ക്വാണ്ടം സൈബർ സുരക്ഷ',
          quantum_programming: 'ക്വാണ്ടം പ്രോഗ്രാമിംഗ്'
        }
      }
    }
  },

  bn: {
    title: 'শিক্ষার্থী ব্যক্তিগতকরণ প্রোফাইল',
    subtitle: 'আপনার কোয়ান্টাম স্কলার পরিচয় ব্যক্তিগতকৃত করতে আপনার পটভূমি এবং অধ্যয়নের পছন্দগুলি শেয়ার করুন।',
    summaryBadge: 'প্রোফাইল সক্রিয়',
    summaryTitle: 'আপনার কোয়ান্টাম লার্নিং প্রোফাইল',
    summaryDesc: 'এই ব্যক্তিগতকরণের বিবরণ আপনার ব্রাউজারের মেমরিতে স্থানীয়ভাবে সংরক্ষিত রয়েছে।',
    editBtn: '✎ ব্যক্তিগতকরণ সম্পাদনা করুন',
    saveBtn: 'ব্যক্তিগতকরণ সংরক্ষণ করুন',
    cancelBtn: 'বাতিল করুন',
    savedToast: 'আপনার শিক্ষার্থী প্রোফাইল সফলভাবে সংরক্ষিত হয়েছে।',
    requiredNote: '* বাধ্যতামূলক ক্ষেত্র',
    validationError: 'দয়া করে তারকাচিহ্নিত (*) সমস্ত বাধ্যতামূলক প্রশ্নের উত্তর দিন।',
    otherPlaceholder: 'দয়া করে উল্লেখ করুন...',
    noneSelected: 'কোনটি নির্বাচিত নয়',
    sectionPersonal: '১. পটভূমি এবং একাডেমিক ভূমিকা',
    sectionReadiness: '২. গাণিতিক এবং প্রযুক্তিগত প্রস্তুতি',
    sectionGoals: '৩. উদ্দেশ্য এবং অধ্যয়নের সময়',
    sectionInterests: '৪. শেখার পছন্দ এবং আগ্রহের বিষয়',

    questions: {
      currentLevel: {
        title: '১. বর্তমান শিক্ষার স্তর',
        question: 'কোয়ান্টাম কম্পিউটিংয়ে আপনার বর্তমান স্তর কী?',
        options: {
          complete_beginner: 'সম্পূর্ণ নতুন (Complete Beginner)',
          beginner: 'প্রাথমিক (Beginner)',
          intermediate: 'মধ্যবর্তী (Intermediate)',
          advanced: 'উন্নত (Advanced)',
          expert: 'বিশেষজ্ঞ (Expert)'
        }
      },
      currentRole: {
        title: '২. বর্তমান ভূমিকা',
        question: 'কোনটি আপনাকে সবচেয়ে ভালো বর্ণনা করে?',
        options: {
          school_student: 'বিদ্যালয়ের শিক্ষার্থী',
          undergraduate: 'স্নাতক শিক্ষার্থী',
          postgraduate: 'স্নাতকোত্তর শিক্ষার্থী',
          researcher: 'গবেষক',
          educator: 'শিক্ষক / প্রশিক্ষক',
          working_professional: 'কর্মজীবী পেশাদার',
          hobbyist: 'শৌখিন / স্বাধীন শিক্ষার্থী',
          other: 'অন্যান্য'
        }
      },
      background: {
        title: '৩. একাডেমিক / পেশাদার পটভূমি',
        question: 'আপনার পটভূমি কী?',
        options: {
          computer_science: 'কম্পিউটার সায়েন্স',
          physics: 'পদার্থবিজ্ঞান (Physics)',
          mathematics: 'গণিত (Mathematics)',
          electronics_electrical: 'ইলেকট্রনিক্স / ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং',
          engineering_other: 'প্রকৌশল (অন্যান্য)',
          data_science_ai: 'ডেটা সায়েন্স / এআই (AI)',
          cybersecurity: 'সাইবার নিরাপত্তা',
          other: 'অন্যান্য'
        }
      },
      mathComfort: {
        title: '৪. গণিতের পটভূমি',
        question: 'গণিতের সাথে আপনি কতটা স্বাচ্ছন্দ্যবোধ করেন?',
        options: {
          very_limited: 'খুব সীমিত',
          basic: 'মৌলিক',
          comfortable: 'স্বাচ্ছন্দ্যময়',
          strong: 'দৃঢ়',
          advanced: 'উন্নত'
        }
      },
      programmingExperience: {
        title: '৫. প্রোগ্রামিং অভিজ্ঞতা',
        question: 'প্রোগ্রামিংয়ে আপনার অভিজ্ঞতা কেমন?',
        options: {
          no_experience: 'কোনো অভিজ্ঞতা নেই',
          beginner: 'প্রাথমিক স্তর',
          intermediate: 'মধ্যবর্তী স্তর',
          advanced: 'উন্নত স্তর',
          professional: 'পেশাদার স্তর'
        }
      },
      qcExperience: {
        title: '৬. কোয়ান্টাম কম্পিউটিং অভিজ্ঞতা',
        question: 'আপনি কি আগে কোয়ান্টাম কম্পিউটিং অধ্যয়ন করেছেন?',
        options: {
          never: 'কখনই নয়',
          a_little: 'সামান্য',
          some_coursework: 'কিছু কোর্সওয়ার্ক',
          self_taught: 'স্ব-শিক্ষিত',
          university_study: 'বিশ্ববিদ্যালয় অধ্যয়ন',
          research_professional: 'গবেষণা বা পেশাদার অভিজ্ঞতা'
        }
      },
      physicsBackground: {
        title: '৭. পদার্থবিদ্যার পটভূমি',
        question: 'পদার্থবিদ্যার সাথে আপনি কতটা পরিচিত?',
        options: {
          very_limited: 'খুব সীমিত',
          basic: 'মৌলিক',
          intermediate: 'মধ্যবর্তী',
          strong: 'দৃঢ়',
          advanced: 'উন্নত'
        }
      },
      learningGoal: {
        title: '৮. প্রাথমিক শিক্ষার লক্ষ্য',
        question: 'কোয়ান্টাম কম্পিউটিং শেখার আপনার প্রধান কারণ কী?',
        options: {
          academic_study: 'একাডেমিক অধ্যয়ন',
          university_exams: 'বিশ্ববিদ্যালয়ের পরীক্ষা',
          research: 'গবেষণা',
          career_industry: 'ক্যারিয়ার / শিল্প',
          hackathons_projects: 'হ্যাকাতন এবং প্রকল্প',
          quantum_software: 'কোয়ান্টাম সফটওয়্যার উন্নয়ন',
          quantum_cybersecurity: 'কোয়ান্টাম সাইবার নিরাপত্তা',
          general_knowledge: 'সাধারণ জ্ঞান এবং কৌতূহল',
          other: 'অন্যান্য'
        }
      },
      learningPreferences: {
        title: '৯. শেখার পছন্দ',
        question: 'আপনি কীভাবে শিখতে পছন্দ করেন? (প্রযোজ্য সবগুলি নির্বাচন করুন)',
        options: {
          visual_explanations: 'ভিজ্যুয়াল ব্যাখ্যা (Visual explanations)',
          step_by_step: 'ধাপে ধাপে ব্যাখ্যা',
          math_derivations: 'গাণিতিক উপপাদন',
          practical_examples: 'ব্যবহারিক উদাহরণ',
          interactive_experiments: 'ইন্টারেক্টিভ পরীক্ষা',
          programming_examples: 'প্রোগ্রামিং কোড উদাহরণ',
          exercises_problems: 'অনুশীলন এবং সমস্যা সমাধান',
          video_resources: 'ভিডিও পাঠ',
          real_world_apps: 'বাস্তব বিশ্বের অ্যাপ্লিকেশন'
        }
      },
      weeklyTime: {
        title: '১০. সাপ্তাহিক অধ্যয়নের সময়',
        question: 'সাধারণত কতটা সময় উৎসর্গ করতে পারেন?',
        options: {
          less_than_2h: '২ ঘণ্টার কম',
          '2_to_5h': '২–৫ ঘণ্টা',
          '5_to_10h': '৫–১০ ঘণ্টা',
          '10_to_15h': '১০–১৫ ঘণ্টা',
          '15_plus_h': '১৫+ ঘণ্টা'
        }
      },
      learningPace: {
        title: '১১. পছন্দের শিক্ষার গতি',
        question: 'আপনি কোন গতিতে শিখতে পছন্দ করেন?',
        options: {
          slow_detailed: 'ধীর এবং বিস্তারিত',
          balanced: 'ভারসাম্যপূর্ণ (Balanced)',
          fast_paced: 'দ্রুত গতির (Fast-paced)',
          intensive: 'নিবিড় (Intensive)'
        }
      },
      learningInterests: {
        title: '১২. পছন্দের ক্ষেত্রসমূহ',
        question: 'কোন ক্ষেত্রগুলিতে আপনার সবচেয়ে বেশি আগ্রহ? (প্রযোজ্য সবগুলি নির্বাচন করুন)',
        options: {
          quantum_mechanics: 'কোয়ান্টাম মেকানিক্স',
          linear_algebra: 'লিনিয়ার অ্যালজেব্রা',
          quantum_gates: 'কোয়ান্টাম গেটস',
          quantum_circuits: 'কোয়ান্টাম সার্কিট',
          quantum_algorithms: 'কোয়ান্টাম অ্যালগরিদম',
          quantum_cryptography: 'কোয়ান্টাম ক্রিপ্টোগ্রাফি',
          quantum_ml: 'কোয়ান্টাম মেশিন লার্নিং',
          quantum_simulation: 'কোয়ান্টাম সিমুলেশন',
          quantum_error_correction: 'ত্রুটি সংশোধন (QEC)',
          quantum_hardware: 'কোয়ান্টাম হার্ডওয়্যার',
          quantum_cybersecurity: 'কোয়ান্টাম সাইবার নিরাপত্তা',
          quantum_programming: 'কোয়ান্টাম প্রোগ্রামিং'
        }
      }
    }
  },

  mr: {
    title: 'विद्यार्थी वैयक्तिकरण प्रोफाइल',
    subtitle: 'आपली क्वांटम स्कॉलर ओळख वैयक्तिकृत करण्यासाठी आपली पार्श्वभूमी आणि पसंती सामायिक करा.',
    summaryBadge: 'प्रोफाइल सक्रिय',
    summaryTitle: 'आपली क्वांटम लर्निंग प्रोफाइल',
    summaryDesc: 'हा वैयक्तिकरण रेकॉर्ड आपल्या ब्राउझर मेमरीमध्ये स्थानिक पातळीवर जतन केला आहे.',
    editBtn: '✎ वैयक्तिकरण संपादित करा',
    saveBtn: 'वैयक्तिकरण जतन करा',
    cancelBtn: 'रद्द करा',
    savedToast: 'आपली शिक्षण प्रोफाइल यशस्वीरित्या जतन केली गेली आहे.',
    requiredNote: '* अनिवार्य फील्ड',
    validationError: 'कृपया तारांकित (*) सर्व अनिवार्य प्रश्नांची उत्तरे द्या.',
    otherPlaceholder: 'कृपया नमूद करा...',
    noneSelected: 'काहीही निवडलेले नाही',
    sectionPersonal: '१. पार्श्वभूमी आणि शैक्षणिक भूमिका',
    sectionReadiness: '२. गणितीय आणि तांत्रिक सज्जता',
    sectionGoals: '३. उद्दिष्टे आणि अभ्यासाचा वेळ',
    sectionInterests: '४. शिकण्याची पसंती आणि आवडीचे विषय',

    questions: {
      currentLevel: {
        title: '१. सद्य शिक्षण स्तर',
        question: 'क्वांटम कॉम्प्युटिंगमध्ये आपला सद्य स्तर काय आहे?',
        options: {
          complete_beginner: 'पूर्ण नवशिक्या (Complete Beginner)',
          beginner: 'आरंभिक (Beginner)',
          intermediate: 'मध्यम (Intermediate)',
          advanced: 'प्रगत (Advanced)',
          expert: 'तज्ज्ञ (Expert)'
        }
      },
      currentRole: {
        title: '२. सद्य भूमिका',
        question: 'खालीलपैकी कोणते आपले सर्वोत्तम वर्णन करते?',
        options: {
          school_student: 'शालेय विद्यार्थी',
          undergraduate: 'पदवीधर विद्यार्थी',
          postgraduate: 'पदव्युत्तर विद्यार्थी',
          researcher: 'संशोधक',
          educator: 'शिक्षक / प्राध्यापक',
          working_professional: 'कार्यरत व्यावसायिक',
          hobbyist: 'छंद / स्वतंत्र विद्यार्थी',
          other: 'इतर'
        }
      },
      background: {
        title: '३. शैक्षणिक / व्यावसायिक पार्श्वभूमी',
        question: 'आपली पार्श्वभूमी काय आहे?',
        options: {
          computer_science: 'संगणक विज्ञान (Computer Science)',
          physics: 'भौतिकशास्त्र (Physics)',
          mathematics: 'गणित (Mathematics)',
          electronics_electrical: 'इलेक्ट्रॉनिक्स / इलेक्ट्रिकल अभियांत्रिकी',
          engineering_other: 'अभियांत्रिकी (इतर)',
          data_science_ai: 'डेटा सायन्स / AI',
          cybersecurity: 'सायबर सुरक्षा',
          other: 'इतर'
        }
      },
      mathComfort: {
        title: '४. गणितीय पार्श्वभूमी',
        question: 'गणिताच्या संकल्पनांमध्ये आपण किती सोयीस्कर आहात?',
        options: {
          very_limited: 'अतिशय मर्यादित',
          basic: 'मूलभूत',
          comfortable: 'सोयीस्कर',
          strong: 'मजबूत',
          advanced: 'प्रगत'
        }
      },
      programmingExperience: {
        title: '५. प्रोग्रामिंग अनुभव',
        question: 'प्रोग्रामिंगमध्ये आपला अनुभव कसा आहे?',
        options: {
          no_experience: 'काहीही अनुभव नाही',
          beginner: 'आरंभिक स्तर',
          intermediate: 'मध्यम स्तर',
          advanced: 'प्रगत स्तर',
          professional: 'व्यावसायिक स्तर'
        }
      },
      qcExperience: {
        title: '६. क्वांटम कॉम्प्युटिंग अनुभव',
        question: 'आपण यापूर्वी क्वांटम कॉम्प्युटिंगचा अभ्यास केला आहे का?',
        options: {
          never: 'कधीही नाही',
          a_little: 'थोडासा',
          some_coursework: 'काही अभ्यासक्रम',
          self_taught: 'स्वतः शिकलेले',
          university_study: 'विद्यापीठ अभ्यास',
          research_professional: 'संशोधन किंवा व्यावसायिक अनुभव'
        }
      },
      physicsBackground: {
        title: '७. भौतिकशास्त्र पार्श्वभूमी',
        question: 'भौतिकशास्त्राशी आपला परिचय किती आहे?',
        options: {
          very_limited: 'अतिशय मर्यादित',
          basic: 'मूलभूत',
          intermediate: 'मध्यम',
          strong: 'मजबूत',
          advanced: 'प्रगत'
        }
      },
      learningGoal: {
        title: '८. प्राथमिक शिक्षण उद्दिष्ट',
        question: 'क्वांटम कॉम्प्युटिंग शिकण्याचे आपले मुख्य कारण काय आहे?',
        options: {
          academic_study: 'शैक्षणिक अभ्यास',
          university_exams: 'विद्यापीठ परीक्षा',
          research: 'संशोधन',
          career_industry: 'करिअर / उद्योग',
          hackathons_projects: 'हॅकाथॉन आणि प्रकल्प',
          quantum_software: 'क्वांटम सॉफ्टवेअर विकास',
          quantum_cybersecurity: 'क्वांटम सायबर सुरक्षा',
          general_knowledge: 'सामान्य ज्ञान आणि कुतूहल',
          other: 'इतर'
        }
      },
      learningPreferences: {
        title: '९. शिकण्याची पसंती',
        question: 'आपण कसे शिकणे पसंत करता? (लागू असलेले सर्व निवडा)',
        options: {
          visual_explanations: 'दृश्य स्पष्टीकरणे (Visual explanations)',
          step_by_step: 'टप्प्याटप्प्याने स्पष्टीकरणे',
          math_derivations: 'गणितीय समीकरणे व सिद्धता',
          practical_examples: 'व्यावहारिक उदाहरणे',
          interactive_experiments: 'परस्परसंवादी प्रयोग',
          programming_examples: 'प्रोग्रामिंग कोड उदाहरणे',
          exercises_problems: 'सराव प्रश्न आणि समस्या',
          video_resources: 'व्हिडिओ संसाधने',
          real_world_apps: 'वास्तविक जगातील अनुप्रयोग'
        }
      },
      weeklyTime: {
        title: '१०. साप्ताहिक अभ्यासाचा वेळ',
        question: 'आपण सामान्यतः किती वेळ देऊ शकता?',
        options: {
          less_than_2h: '२ तासांपेक्षा कमी',
          '2_to_5h': '२–५ तास',
          '5_to_10h': '५–१० तास',
          '10_to_15h': '१०–१५ तास',
          '15_plus_h': '१५+ तास'
        }
      },
      learningPace: {
        title: '११. पसंतीचा शिकण्याचा वेग',
        question: 'आपण कोणत्या वेगाने शिकणे पसंत करता?',
        options: {
          slow_detailed: 'हळू आणि सविस्तर',
          balanced: 'संतुलित (Balanced)',
          fast_paced: 'वेगवान (Fast-paced)',
          intensive: 'सखोल (Intensive)'
        }
      },
      learningInterests: {
        title: '१२. आवडीचे विषय',
        question: 'कोणत्या क्षेत्रांमध्ये आपल्याला सर्वाधिक रस आहे? (लागू असलेले सर्व निवडा)',
        options: {
          quantum_mechanics: 'क्वांटम मेकॅनिक्स',
          linear_algebra: 'लिनियर अल्जेब्रा',
          quantum_gates: 'क्वांटम गेट्स',
          quantum_circuits: 'क्वांटम सर्किट्स',
          quantum_algorithms: 'क्वांटम अल्गोरिदम',
          quantum_cryptography: 'क्वांटम क्रिप्टोग्राफी',
          quantum_ml: 'क्वांटम मशीन लर्निंग (QML)',
          quantum_simulation: 'क्वांटम सिम्युलेशन',
          quantum_error_correction: 'त्रुटी सुधारणा (QEC)',
          quantum_hardware: 'क्वांटम हार्डवेअर',
          quantum_cybersecurity: 'क्वांटम सायबर सुरक्षा',
          quantum_programming: 'क्वांटम प्रोग्रामिंग'
        }
      }
    }
  },

  gu: {
    title: 'વિદ્યાર્થી વૈયક્તિકરણ પ્રોફાઇલ',
    subtitle: 'તમારી ક્વોન્ટમ સ્કોલર ઓળખને કસ્ટમાઇઝ કરવા માટે તમારી પૃષ્ઠભૂમિ અને અભ્યાસ પસંદગીઓ શેર કરો.',
    summaryBadge: 'પ્રોફાઇલ સક્રિય',
    summaryTitle: 'તમારી ક્વોન્ટમ લર્નિંગ પ્રોફાઇલ',
    summaryDesc: 'આ વૈયક્તિકરણ વિગતો તમારા બ્રાઉઝરની મેમરીમાં સ્થાનિક રીતે સંગ્રહિત છે.',
    editBtn: '✎ વૈયક્તિકરણ સંપાદિત કરો',
    saveBtn: 'વૈયક્તિકરણ સાચવો',
    cancelBtn: 'રદ કરો',
    savedToast: 'તમારી લર્નિંગ પ્રોફાઇલ સફળતાપૂર્વક સાચવવામાં આવી છે.',
    requiredNote: '* ફરજિયાત ક્ષેત્રો',
    validationError: 'કૃપા કરીને ફૂદડી (*) ચિહ્નિત બધા ફરજિયાત પ્રશ્નો પૂર્ણ કરો.',
    otherPlaceholder: 'કૃપા કરીને સ્પષ્ટ કરો...',
    noneSelected: 'કંઈ પસંદ કરેલ નથી',
    sectionPersonal: '૧. પૃષ્ઠભૂમિ અને શૈક્ષણિક ભૂમિકા',
    sectionReadiness: '૨. ગાણિતિક અને તકનીકી સજ્જતા',
    sectionGoals: '૩. ઉદ્દેશો અને અભ્યાસ સમય',
    sectionInterests: '૪. શીખવાની પસંદગીઓ અને રસના વિષયો',

    questions: {
      currentLevel: {
        title: '૧. વર્તમાન શિક્ષણ સ્તર',
        question: 'ક્વોન્ટમ કમ્પ્યુટિંગમાં તમારું વર્તમાન સ્તર શું છે?',
        options: {
          complete_beginner: 'સંપૂર્ણ શિખાઉ (Complete Beginner)',
          beginner: 'પ્રારંભિક (Beginner)',
          intermediate: 'મધ્યવર્તી (Intermediate)',
          advanced: 'અદ્યતન (Advanced)',
          expert: 'નિષ્ણાત (Expert)'
        }
      },
      currentRole: {
        title: '૨. વર્તમાન ભૂમિકા',
        question: 'નીચેનામાંથી કયું તમારું શ્રેષ્ઠ વર્ણન કરે છે?',
        options: {
          school_student: 'શાળા વિદ્યાર્થી',
          undergraduate: 'સ્નાતક વિદ્યાર્થી',
          postgraduate: 'અનુસ્નાતક વિદ્યાર્થી',
          researcher: 'સંશોધક',
          educator: 'શિક્ષક / પ્રોફેસર',
          working_professional: 'કાર્યરત વ્યાવસાયિક',
          hobbyist: 'શોખીન / સ્વતંત્ર શીખનાર',
          other: 'અન્ય'
        }
      },
      background: {
        title: '૩. શૈક્ષણિક / વ્યાવસાયિક પૃષ્ઠભૂમિ',
        question: 'તમારી પૃષ્ઠભૂમિ શું છે?',
        options: {
          computer_science: 'કમ્પ્યુટર સાયન્સ',
          physics: 'ભૌતિકશાસ્ત્ર (Physics)',
          mathematics: 'ગણિત (Mathematics)',
          electronics_electrical: 'ઇલેક્ટ્રોનિક્સ / ઇલેક્ટ્રિકલ એન્જિનિયરિંગ',
          engineering_other: 'એન્જિનિયરિંગ (અન્ય)',
          data_science_ai: 'ડેટા સાયન્સ / AI',
          cybersecurity: 'સાયબર સુરક્ષા',
          other: 'અન્ય'
        }
      },
      mathComfort: {
        title: '૪. ગાણિતિક પૃષ્ઠભૂમિ',
        question: 'ગણિતની વિભાવનાઓ સાથે તમે કેટલા આરામદાયક છો?',
        options: {
          very_limited: 'ખૂબ મર્યાદિત',
          basic: 'મૂળભૂત',
          comfortable: 'આરામદાયક',
          strong: 'મજબૂત',
          advanced: 'અદ્યતન'
        }
      },
      programmingExperience: {
        title: '૫. પ્રોગ્રામિંગ અનુભવ',
        question: 'પ્રોગ્રામિંગમાં તમારો અનુભવ કેટલો છે?',
        options: {
          no_experience: 'કોઈ અનુભવ નથી',
          beginner: 'પ્રારંભિક સ્તર',
          intermediate: 'મધ્યવર્તી સ્તર',
          advanced: 'અદ્યતન સ્તર',
          professional: 'વ્યાવસાયિક સ્તર'
        }
      },
      qcExperience: {
        title: '૬. ક્વોન્ટમ કમ્પ્યુટિંગ અનુભવ',
        question: 'શું તમે આ પહેલાં ક્વોન્ટમ કમ્પ્યુટિંગનો અભ્યાસ કર્યો છે?',
        options: {
          never: 'ક્યારેય નહીં',
          a_little: 'થોડુંક',
          some_coursework: 'કેટલાક અભ્યાસક્રમો',
          self_taught: 'જાતે શીખેલ',
          university_study: 'યુનિવર્સિટી અભ્યાસ',
          research_professional: 'સંશોધન અથવા વ્યાવસાયિક અનુભવ'
        }
      },
      physicsBackground: {
        title: '૭. ભૌતિકશાસ્ત્ર પૃષ્ઠભૂમિ',
        question: 'ભૌતિકશાસ્ત્ર સાથે તમારો પરિચય કેટલો છે?',
        options: {
          very_limited: 'ખૂબ મર્યાદિત',
          basic: 'મૂળભૂત',
          intermediate: 'મધ્યવર્તી',
          strong: 'મજબૂત',
          advanced: 'અદ્યતન'
        }
      },
      learningGoal: {
        title: '૮. પ્રાથમિક શિક્ષણ લક્ષ્ય',
        question: 'ક્વોન્ટમ કમ્પ્યુટિંગ શીખવાનું તમારું મુખ્ય કારણ શું છે?',
        options: {
          academic_study: 'શૈક્ષણિક અભ્યાસ',
          university_exams: 'યુનિવર્સિટી પરીક્ષાઓ',
          research: 'સંશોધન',
          career_industry: 'કારકિર્દી / ઉદ્યોગ',
          hackathons_projects: 'હેકાથોન અને પ્રોજેક્ટ્સ',
          quantum_software: 'ક્વોન્ટમ સોફ્ટવેર ડેવલપમેન્ટ',
          quantum_cybersecurity: 'ક્વોન્ટમ સાયબર સુરક્ષા',
          general_knowledge: 'સામાન્ય જ્ઞાન અને જિજ્ઞાસા',
          other: 'અન્ય'
        }
      },
      learningPreferences: {
        title: '૯. શીખવાની પસંદગી',
        question: 'તમે કેવી રીતે શીખવાનું પસંદ કરો છો? (લાગુ પડતા તમામ પસંદ કરો)',
        options: {
          visual_explanations: 'દ્રશ્ય સમજૂતી (Visual explanations)',
          step_by_step: 'પગલું-દર-પગલાં સમજૂતી',
          math_derivations: 'ગાણિતિક સૂત્રો અને સિદ્ધાંતો',
          practical_examples: 'વ્યવહારુ ઉદાહરણો',
          interactive_experiments: 'ઇન્ટરેક્ટિવ પ્રયોગો',
          programming_examples: 'પ્રોગ્રામિંગ કોડ ઉદાહરણો',
          exercises_problems: 'પ્રેક્ટિસ પ્રશ્નો અને સમસ્યાઓ',
          video_resources: 'વિડિઓ સંસાધનો',
          real_world_apps: 'વાસ્તવિક દુનિયાના ઉપયોગો'
        }
      },
      weeklyTime: {
        title: '૧૦. સાપ્તાહિક અભ્યાસ સમય',
        question: 'તમે સામાન્ય રીતે કેટલો સમય સમર્પિત કરી શકો છો?',
        options: {
          less_than_2h: '૨ કલાકથી ઓછો',
          '2_to_5h': '૨–૫ કલાક',
          '5_to_10h': '૫–૧૦ કલાક',
          '10_to_15h': '૧૦–૧૫ કલાક',
          '15_plus_h': '૧૫+ કલાક'
        }
      },
      learningPace: {
        title: '૧૧. પસંદગીની શીખવાની ગતિ',
        question: 'તમે કઈ ગતિએ શીખવાનું પસંદ કરો છો?',
        options: {
          slow_detailed: 'ધીમી અને વિગતવાર',
          balanced: 'સંતુલિત (Balanced)',
          fast_paced: 'ઝડપી (Fast-paced)',
          intensive: 'સઘન (Intensive)'
        }
      },
      learningInterests: {
        title: '૧૨. રસના વિષયો',
        question: 'તમને કયા ક્ષેત્રોમાં સૌથી વધુ રસ છે? (લાગુ પડતા તમામ પસંદ કરો)',
        options: {
          quantum_mechanics: 'ક્વોન્ટમ મિકેનિક્સ',
          linear_algebra: 'રેખીય બીજગણિત',
          quantum_gates: 'ક્વોન્ટમ ગેટ્સ',
          quantum_circuits: 'ક્વોન્ટમ સર્કિટ્સ',
          quantum_algorithms: 'ક્વોન્ટમ અલ્ગોરિધમ્સ',
          quantum_cryptography: 'ક્વોન્ટમ ક્રિપ્ટોગ્રાફી',
          quantum_ml: 'ક્વોન્ટમ મશીન લર્નિંગ (QML)',
          quantum_simulation: 'ક્વોન્ટમ સિમ્યુલેશન',
          quantum_error_correction: 'ભૂલ સુધારણા (QEC)',
          quantum_hardware: 'ક્વોન્ટમ હાર્ડવેર',
          quantum_cybersecurity: 'ક્વોન્ટમ સાયબર સુરક્ષા',
          quantum_programming: 'ક્વોન્ટમ પ્રોગ્રામિંગ'
        }
      }
    }
  },

  pa: {
    title: 'ਸਿੱਖਿਆਰਥੀ ਨਿੱਜੀਕਰਨ ਪ੍ਰੋਫਾਈਲ',
    subtitle: 'ਆਪਣੀ ਕੁਆਂਟਮ ਵਿਦਵਾਨ ਪਛਾਣ ਨੂੰ ਨਿੱਜੀ ਬਣਾਉਣ ਲਈ ਆਪਣਾ ਪਿਛੋਕੜ ਅਤੇ ਅਧਿਐਨ ਤਰਜੀਹਾਂ ਸਾਂਝੀਆਂ ਕਰੋ।',
    summaryBadge: 'ਪ੍ਰੋਫਾਈਲ ਕਿਰਿਆਸ਼ੀਲ',
    summaryTitle: 'ਤੁਹਾਡੀ ਕੁਆਂਟਮ ਲਰਨਿੰਗ ਪ੍ਰੋਫਾਈਲ',
    summaryDesc: 'ਇਹ ਨਿੱਜੀਕਰਨ ਰਿਕਾਰਡ ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਦੀ ਮੈਮੋਰੀ ਵਿੱਚ ਸਥਾਨਕ ਤੌਰ ਤੇ ਸੁਰੱਖਿਅਤ ਹੈ।',
    editBtn: '✎ ਨਿੱਜੀਕਰਨ ਸੰਪਾਦਿਤ ਕਰੋ',
    saveBtn: 'ਨਿੱਜੀਕਰਨ ਸੰਭਾਲੋ',
    cancelBtn: 'ਰੱਦ ਕਰੋ',
    savedToast: 'ਤੁਹਾਡੀ ਸਿਖਲਾਈ ਪ੍ਰੋਫਾਈਲ ਸਫਲਤਾਪੂਰਵਕ ਸੁਰੱਖਿਅਤ ਕੀਤੀ ਗਈ ਹੈ।',
    requiredNote: '* ਲਾਜ਼ਮੀ ਖੇਤਰ',
    validationError: 'ਕਿਰਪਾ ਕਰਕੇ ਤਾਰਾ (*) ਵਾਲੇ ਸਾਰੇ ਲਾਜ਼ਮੀ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਦਿਓ।',
    otherPlaceholder: 'ਕਿਰਪਾ ਕਰਕੇ ਵੇਰਵਾ ਦਿਓ...',
    noneSelected: 'ਕੋਈ ਨਹੀਂ ਚੁਣਿਆ ਗਿਆ',
    sectionPersonal: '1. ਪਿਛੋਕੜ ਅਤੇ ਵਿੱਦਿਅਕ ਭੂਮਿਕਾ',
    sectionReadiness: '2. ਗਣਿਤ ਅਤੇ ਤਕਨੀਕੀ ਤਿਆਰੀ',
    sectionGoals: '3. ਉਦੇਸ਼ ਅਤੇ ਅਧਿਐਨ ਸਮਾਂ',
    sectionInterests: '4. ਸਿੱਖਣ ਦੀਆਂ ਤਰਜੀਹਾਂ ਅਤੇ ਵਿਸ਼ੇ',

    questions: {
      currentLevel: {
        title: '1. ਮੌਜੂਦਾ ਸਿੱਖਣ ਪੱਧਰ',
        question: 'ਕੁਆਂਟਮ ਕੰਪਿਊਟਿੰਗ ਵਿੱਚ ਤੁਹਾਡਾ ਮੌਜੂਦਾ ਪੱਧਰ ਕੀ ਹੈ?',
        options: {
          complete_beginner: 'ਬਿਲਕੁਲ ਸ਼ੁਰੂਆਤੀ (Complete Beginner)',
          beginner: 'ਸ਼ੁਰੂਆਤੀ (Beginner)',
          intermediate: 'ਦਰਮਿਆਨਾ (Intermediate)',
          advanced: 'ਉੱਨਤ (Advanced)',
          expert: 'ਮਾਹਿਰ (Expert)'
        }
      },
      currentRole: {
        title: '2. ਮੌਜੂਦਾ ਭੂਮਿਕਾ',
        question: 'ਹੇਠਾਂ ਦਿੱਤੇ ਵਿੱਚੋਂ ਕਿਹੜਾ ਤੁਹਾਡਾ ਸਭ ਤੋਂ ਵਧੀਆ ਵਰਣਨ ਕਰਦਾ ਹੈ?',
        options: {
          school_student: 'ਸਕੂਲੀ ਵਿਦਿਆਰਥੀ',
          undergraduate: 'ਗ੍ਰੈਜੂਏਟ ਵਿਦਿਆਰਥੀ',
          postgraduate: 'ਪੋਸਟ ਗ੍ਰੈਜੂਏਟ ਵਿਦਿਆਰਥੀ',
          researcher: 'ਖੋਜਕਰਤਾ',
          educator: 'ਅਧਿਆਪਕ / ਪ੍ਰੋਫੈਸਰ',
          working_professional: 'ਕੰਮਕਾਜੀ ਪੇਸ਼ੇਵਰ',
          hobbyist: 'ਸ਼ੌਕੀਨ / ਸੁਤੰਤਰ ਸਿੱਖਿਆਰਥੀ',
          other: 'ਹੋਰ'
        }
      },
      background: {
        title: '3. ਅਕਾਦਮਿਕ / ਪੇਸ਼ੇਵਰ ਪਿਛੋਕੜ',
        question: 'ਤੁਹਾਡਾ ਪਿਛੋਕੜ ਕੀ ਹੈ?',
        options: {
          computer_science: 'ਕੰਪਿਊਟਰ ਸਾਇੰਸ',
          physics: 'ਭੌਤਿਕ ਵਿਗਿਆਨ (Physics)',
          mathematics: 'ਗਣਿਤ (Mathematics)',
          electronics_electrical: 'ਇਲੈਕਟ੍ਰਾਨਿਕਸ / ਇਲੈਕਟ੍ਰੀਕਲ ਇੰਜੀਨੀਅਰਿੰਗ',
          engineering_other: 'ਇੰਜੀਨੀਅਰਿੰਗ (ਹੋਰ)',
          data_science_ai: 'ਡਾਟਾ ਸਾਇੰਸ / AI',
          cybersecurity: 'ਸਾਈਬਰ ਸੁਰੱਖਿਆ',
          other: 'ਹੋਰ'
        }
      },
      mathComfort: {
        title: '4. ਗਣਿਤ ਪਿਛੋਕੜ',
        question: 'ਗਣਿਤ ਦੀਆਂ ਧਾਰਨਾਵਾਂ ਨਾਲ ਤੁਸੀਂ ਕਿੰਨੇ ਸਹਿਜ ਹੋ?',
        options: {
          very_limited: 'ਬਹੁਤ ਸੀਮਤ',
          basic: 'ਬੁਨਿਆਦੀ',
          comfortable: 'ਸਹਿਜ',
          strong: 'ਮਜ਼ਬੂਤ',
          advanced: 'ਉੱਨਤ'
        }
      },
      programmingExperience: {
        title: '5. ਪ੍ਰੋਗਰਾਮਿੰਗ ਅਨੁਭਵ',
        question: 'ਪ੍ਰੋਗਰਾਮਿੰਗ ਵਿੱਚ ਤੁਹਾਡਾ ਅਨੁਭਵ ਕਿਹੋ ਜਿਹਾ ਹੈ?',
        options: {
          no_experience: 'ਕੋਈ ਅਨੁਭਵ ਨਹੀਂ',
          beginner: 'ਸ਼ੁਰੂਆਤੀ ਪੱਧਰ',
          intermediate: 'ਦਰਮਿਆਨਾ ਪੱਧਰ',
          advanced: 'ਉੱਨਤ ਪੱਧਰ',
          professional: 'ਪੇਸ਼ੇਵਰ ਪੱਧਰ'
        }
      },
      qcExperience: {
        title: '6. ਕੁਆਂਟਮ ਕੰਪਿਊਟਿੰਗ ਅਨੁਭਵ',
        question: 'ਕੀ ਤੁਸੀਂ ਪਹਿਲਾਂ ਕੁਆਂਟਮ ਕੰਪਿਊਟਿੰਗ ਦਾ ਅਧਿਐਨ ਕੀਤਾ ਹੈ?',
        options: {
          never: 'ਕਦੇ ਨਹੀਂ',
          a_little: 'ਥੋੜ੍ਹਾ ਜਿਹਾ',
          some_coursework: 'ਕੁਝ ਕੋਰਸ',
          self_taught: 'ਆਪਣੇ ਆਪ ਸਿੱਖਿਆ',
          university_study: 'ਯੂਨੀਵਰਸਿਟੀ ਅਧਿਐਨ',
          research_professional: 'ਖੋਜ ਜਾਂ ਪੇਸ਼ੇਵਰ ਅਨੁਭਵ'
        }
      },
      physicsBackground: {
        title: '7. ਭੌਤਿਕ ਵਿਗਿਆਨ ਪਿਛੋਕੜ',
        question: 'ਭੌਤਿਕ ਵਿਗਿਆਨ ਨਾਲ ਤੁਹਾਡੀ ਜਾਣ-ਪਛਾਣ ਕਿੰਨੀ ਹੈ?',
        options: {
          very_limited: 'ਬਹੁਤ ਸੀਮਤ',
          basic: 'ਬੁਨਿਆਦੀ',
          intermediate: 'ਦਰਮਿਆਨਾ',
          strong: 'ਮਜ਼ਬੂਤ',
          advanced: 'ਉੱਨਤ'
        }
      },
      learningGoal: {
        title: '8. ਪ੍ਰਾਇਮਰੀ ਸਿੱਖਣ ਦਾ ਟੀਚਾ',
        question: 'ਕੁਆਂਟਮ ਕੰਪਿਊਟਿੰਗ ਸਿੱਖਣ ਦਾ ਤੁਹਾਡਾ ਮੁੱਖ ਕਾਰਨ ਕੀ ਹੈ?',
        options: {
          academic_study: 'ਅਕਾਦਮਿਕ ਅਧਿਐਨ',
          university_exams: 'ਯੂਨੀਵਰਸਿਟੀ ਪ੍ਰੀਖਿਆਵਾਂ',
          research: 'ਖੋਜ ਕਾਰਜ',
          career_industry: 'ਕਰੀਅਰ / ਉਦਯੋਗ',
          hackathons_projects: 'ਹੈਕਾਥੌਨ ਅਤੇ ਪ੍ਰੋਜੈਕਟ',
          quantum_software: 'ਕੁਆਂਟਮ ਸਾਫਟਵੇਅਰ ਵਿਕਾਸ',
          quantum_cybersecurity: 'ਕੁਆਂਟਮ ਸਾਈਬਰ ਸੁਰੱਖਿਆ',
          general_knowledge: 'ਆਮ ਗਿਆਨ ਅਤੇ ਉਤਸੁਕਤਾ',
          other: 'ਹੋਰ'
        }
      },
      learningPreferences: {
        title: '9. ਸਿੱਖਣ ਦੀ ਤਰਜੀਹ',
        question: 'ਤੁਸੀਂ ਕਿਵੇਂ ਸਿੱਖਣਾ ਪਸੰਦ ਕਰਦੇ ਹੋ? (ਸਾਰੇ ਲਾਗੂ ਵਿਕਲਪ ਚੁਣੋ)',
        options: {
          visual_explanations: 'ਦ੍ਰਿਸ਼ਟੀਗਤ ਵਿਆਖਿਆਵਾਂ (Visual explanations)',
          step_by_step: 'ਕਦਮ-ਦਰ-ਕਦਮ ਵਿਆਖਿਆਵਾਂ',
          math_derivations: 'ਗਣਿਤਕ ਸਮੀਕਰਨ',
          practical_examples: 'ਵਿਹਾਰਕ ਉਦਾਹਰਣਾਂ',
          interactive_experiments: 'ਇੰਟਰਐਕਟਿਵ ਪ੍ਰਯੋਗ',
          programming_examples: 'ਪ੍ਰੋਗਰਾਮਿੰਗ ਕੋਡ ਉਦਾਹਰਣਾਂ',
          exercises_problems: 'ਅਭਿਆਸ ਅਤੇ ਸਮੱਸਿਆਵਾਂ',
          video_resources: 'ਵੀਡੀਓ ਸਰੋਤ',
          real_world_apps: 'ਅਸਲ ਸੰਸਾਰ ਦੇ ਉਪਯੋਗ'
        }
      },
      weeklyTime: {
        title: '10. ਹਫ਼ਤਾਵਾਰੀ ਅਧਿਐਨ ਸਮਾਂ',
        question: 'ਆਮ ਤੌਰ ਤੇ ਤੁਸੀਂ ਕਿੰਨਾ ਸਮਾਂ ਸਮਰਪਿਤ ਕਰ ਸਕਦੇ ਹੋ?',
        options: {
          less_than_2h: '2 ਘੰਟੇ ਤੋਂ ਘੱਟ',
          '2_to_5h': '2–5 ਘੰਟੇ',
          '5_to_10h': '5–10 ਘੰਟੇ',
          '10_to_15h': '10–15 ਘੰਟੇ',
          '15_plus_h': '15+ ਘੰਟੇ'
        }
      },
      learningPace: {
        title: '11. ਤਰਜੀਹੀ ਸਿੱਖਣ ਦੀ ਗਤੀ',
        question: 'ਤੁਸੀਂ ਕਿਸ ਰਫ਼ਤਾਰ ਨਾਲ ਸਿੱਖਣਾ ਪਸੰਦ ਕਰਦੇ ਹੋ?',
        options: {
          slow_detailed: 'ਹੌਲੀ ਅਤੇ ਵਿਸਤ੍ਰਿਤ',
          balanced: 'ਸੰਤੁਲਿਤ (Balanced)',
          fast_paced: 'ਤੇਜ਼ ਰਫ਼ਤਾਰ (Fast-paced)',
          intensive: 'ਡੂੰਘਾ (Intensive)'
        }
      },
      learningInterests: {
        title: '12. ਦਿਲਚਸਪੀ ਦੇ ਵਿਸ਼ੇ',
        question: 'ਤੁਹਾਡੀ ਸਭ ਤੋਂ ਵੱਧ ਦਿਲਚਸਪੀ ਕਿਹੜੇ ਖੇਤਰਾਂ ਵਿੱਚ ਹੈ? (ਸਾਰੇ ਲਾਗੂ ਵਿਕਲਪ ਚੁਣੋ)',
        options: {
          quantum_mechanics: 'ਕੁਆਂਟਮ ਮਕੈਨਿਕਸ',
          linear_algebra: 'ਲੀਨੀਅਰ ਅਲਜਬਰਾ',
          quantum_gates: 'ਕੁਆਂਟਮ ਗੇਟਸ',
          quantum_circuits: 'ਕੁਆਂਟਮ ਸਰਕਟ',
          quantum_algorithms: 'ਕੁਆਂਟਮ ਐਲਗੋਰਿਦਮ',
          quantum_cryptography: 'ਕੁਆਂਟਮ ਕ੍ਰਿਪਟੋਗ੍ਰਾਫੀ',
          quantum_ml: 'ਕੁਆਂਟਮ ਮਸ਼ੀਨ ਲਰਨਿੰਗ',
          quantum_simulation: 'ਕੁਆਂਟਮ ਸਿਮੂਲੇਸ਼ਨ',
          quantum_error_correction: 'ਗਲਤੀ ਸੁਧਾਰ (QEC)',
          quantum_hardware: 'ਕੁਆਂਟਮ ਹਾਰਡਵੇਅਰ',
          quantum_cybersecurity: 'ਕੁਆਂਟਮ ਸਾਈਬਰ ਸੁਰੱਖਿਆ',
          quantum_programming: 'ਕੁਆਂਟਮ ਪ੍ਰੋਗਰਾਮਿੰਗ'
        }
      }
    }
  }
};

/**
 * Returns localized personalization metadata, questions, and UI copy
 */
export function getLocalizedPersonalization(langCode = 'en') {
  const dict = PERSONALIZATION_TRANSLATIONS[langCode] || PERSONALIZATION_TRANSLATIONS.en;
  const enDict = PERSONALIZATION_TRANSLATIONS.en;

  const questions = PERSONALIZATION_QUESTIONS_META.map(meta => {
    const qTrans = (dict.questions && dict.questions[meta.id]) || enDict.questions[meta.id];
    const enQTrans = enDict.questions[meta.id];

    const options = meta.options.map(optId => {
      const label = (qTrans.options && qTrans.options[optId]) || (enQTrans.options && enQTrans.options[optId]) || optId;
      return {
        id: optId,
        label
      };
    });

    return {
      ...meta,
      title: qTrans.title || enQTrans.title,
      question: qTrans.question || enQTrans.question,
      options
    };
  });

  return {
    ...enDict,
    ...dict,
    questions
  };
}
