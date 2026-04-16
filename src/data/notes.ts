export interface LectureSection {
  heading: string;
  points: string[];
}

export interface WeekNotes {
  week: number;
  lectureTitle: string;
  instructor: string;
  slideCount: number;
  sections: LectureSection[];
  keyResearchers: string[];
  keyReferences: string[];
}

export const notes: WeekNotes[] = [
  {
    week: 1,
    lectureTitle: "Fundamentals of Affective Computing",
    instructor: "Dr. Jainendra Shukla, IIIT Delhi",
    slideCount: 23,
    sections: [
      {
        heading: "Definition",
        points: [
          "Rosalind Picard (1997) defined affective computing (AC) as the creation of—and interaction with—systems that sense, recognize, respond to, and influence human emotions.",
          "Classic cultural touchstone: HAL 9000 in 2001: A Space Odyssey illustrates machine affect and human–machine emotional tension.",
          "Exam angle: quote the four verbs—sense, recognize, respond, influence—as the operational backbone of AC definitions.",
        ],
      },
      {
        heading: "Course Topics",
        points: [
          "Representative topic areas include speech-based affect, facial expression recognition, lip reading, systems for monitoring and regulation/control, affect in games and gameplay, and social/interpersonal skills for agents.",
          "Expect cross-modal coverage: how different channels (face, voice, text, physiology) feed affect-aware systems.",
        ],
      },
      {
        heading: "Affect Sensing",
        points: [
          "Affect sensing means building systems that infer emotion from measurable signals and patterns in data.",
          "Requires both hardware (sensors, cameras, wearables) and software (signal processing, models).",
          "Modalities commonly include: facial activity; posture and gesture; hand tension; vocal/prosodic cues; textual language; physiological signals such as electrodermal activity (EDA/GSR) and EEG.",
        ],
      },
      {
        heading: "Applications (Picard 1997)",
        points: [
          "Detection: systems that detect or infer a user’s emotional state from behavior/signals.",
          "Expression: systems that express perceived or intended emotion through an avatar, robot, or conversational agent.",
          "Perception: systems framed as actually “feeling” or internally modeling emotion (philosophically loaded; contrasts with mere classification).",
        ],
      },
      {
        heading: "Healthcare Applications",
        points: [
          "Autism spectrum / Asperger syndrome and high-functioning autism (HFA): tools such as SymTrend and Autism Track (HandHold Adaptive) for tracking and support.",
          "Visharanti-style pipelines: photoplethysmography (PPG) and galvanic skin response (GSR) → classifier → recommendation → feedback loop.",
          "PTSD-related work: StartleMart paradigms and Virtual Vietnam / Iraq / Afghanistan exposure-style environments for assessment or therapy contexts.",
        ],
      },
      {
        heading: "Education Applications",
        points: [
          "EngageMe (Darnell, 2014): combines skin conductance with video/context cues to help teachers understand student engagement.",
          "Subtle Stone (Balaam, 2009): wireless squeezable ball as a low-friction channel for student–teacher affective communication.",
          "Large-scale classroom monitoring examples discussed in Chinese educational settings (privacy and ethics implications).",
        ],
      },
      {
        heading: "Other Applications",
        points: [
          "MACH (My Automated Conversation coacH): interview-practice system using conversational feedback.",
          "KISMET: landmark social/affective robotics work on expressive, socially situated machine behavior.",
        ],
      },
      {
        heading: "UX Case Study",
        points: [
          "User experience (UX) is framed as how users feel about you (brand, product, service); usability is ease of use and task efficiency—they can diverge.",
          "Participatory design approaches such as PICTIVE (Muller, 1991) structure collaborative prototyping with users.",
          "Acceptance testing via beta programs; qualitative methods such as self-report, focus groups, and surveys.",
          "Method pitfalls: participant bias (who shows up), recall bias (what people remember vs what they felt in the moment).",
        ],
      },
      {
        heading: "Advanced UX / Neuromarketing",
        points: [
          "Applies AC and neuroscience to marketing: infer how customers attend to and emotionally respond to products and stimuli.",
          "Often emphasizes web-based or interactive testing to scale observation of affective responses.",
        ],
      },
      {
        heading: "Ethical Considerations",
        points: [
          "Emotional manipulation: steering choices by exploiting inferred affect.",
          "Privacy: emotions are intimate; sensing affect can reveal mental states beyond surface behavior (Picard, 2003).",
          "Emotional dependency / codependence: users bonding with systems that simulate care or rapport.",
        ],
      },
    ],
    keyResearchers: [
      "Rosalind Picard",
      "Paul Ekman",
      "Michael Muller",
      "Darnell",
      "Balaam",
    ],
    keyReferences: [
      'Picard (1997), "Affective Computing", MIT Press',
      "Picard & Klein (2002)",
      "SymTrend",
      "HandHold Adaptive",
      "MACH system",
    ],
  },
  {
    week: 2,
    lectureTitle: "Theory of Emotion",
    instructor: "Dr. Jainendra Shukla, IIIT Delhi",
    slideCount: 50,
    sections: [
      {
        heading: "Emotion Psychology",
        points: [
          "Core questions: what emotions are, how they arise, and how they relate to cognition, physiology, and behavior.",
          "Bridges psychology, neuroscience, and computational modeling for affective computing.",
        ],
      },
      {
        heading: "Emotion Definition",
        points: [
          "Kleinginna & Kleinginna (1981): emotion arises from complex interactions among subjective and objective factors, mediated by neural and hormonal systems.",
          "Four intertwined outcomes: (a) affective experiences, (b) cognitive processes, (c) physiological adjustments, (d) expressive and goal-directed behavior.",
        ],
      },
      {
        heading: "Emotion Generation",
        points: [
          "William James (1894): classic formulation—“we feel afraid because we run”—emphasizes bodily responses and their feedback as constitutive of emotion.",
          "Peripheral signals (racing heart, tight stomach, sweaty palms) provide sensory feedback that gives emotion its felt quality.",
          "Illustrative contrast: a hunter may feel joy where an ordinary person feels curiosity to the same stimulus—interpretation and bodily pattern matter.",
        ],
      },
      {
        heading: "Bidirectional Projections",
        points: [
          "Brain → body via visceral efferent pathways; body → brain via afferent feedback loops.",
          "Examples: laughter yoga; facial feedback studies.",
          "Pencil experiment (Strack et al., 1988; Levenson et al., 1990): holding a pencil with teeth (mimicking smile) made cartoons seem funnier; holding with lips (inhibiting smile) reduced amusement—facial configuration biases affective evaluation.",
        ],
      },
      {
        heading: "Emotion Models",
        points: [
          "Gabrielsson (2002): distinguish perceived emotion (attributed to a stimulus) from felt/induced emotion (actually experienced).",
          "Two broad representation families: discrete/categorical labels versus continuous dimensional coordinates.",
        ],
      },
      {
        heading: "Categorical Model",
        points: [
          "Ekman & Friesen (1971): six “basic” emotions linked to universal facial expressions—commonly listed as happiness, anger, disgust, sadness, anxiety, surprise; contempt often added as a seventh.",
          "Strengths (+): easy to annotate, intuitive for users and engineers.",
          "Weaknesses (−): hard to model relations between emotions; debate over which emotions are truly “basic”.",
        ],
      },
      {
        heading: "Dimensional Models — PAD",
        points: [
          "Russell & Mehrabian (1977): three-dimensional PAD vector—Pleasure–Displeasure, Arousal–NonArousal, Dominance–Submissiveness.",
          "Strengths (+): continuous geometry captures distances between states; supports graded similarity.",
          "Often Dominance is omitted, yielding the valence–arousal circumplex (VA space).",
        ],
      },
      {
        heading: "Advantage of Dominance (D)",
        points: [
          "Fear vs anger: both can be negative valence with similar arousal in 2D VA, overlapping in the circumplex.",
          "In VAD/PAD, fear tends toward submissive dominance whereas anger aligns with controlling dominance—Dominance separates them.",
        ],
      },
      {
        heading: "Problems in Traditional AC",
        points: [
          "Emergency vs process emotions: rapid threat responses differ from slower appraisal-driven emotions—models and sensors may mismatch timescales.",
          "Computational complexity can be prohibitive for “emergency” emotion systems needing millisecond decisions.",
          "Emotions are personalized: same cue patterns map differently across individuals and contexts.",
        ],
      },
      {
        heading: "Specificity",
        points: [
          "Barrett (2012): identical facial actions can correspond to different emotions depending on context and conceptual knowledge.",
          "Classic confusions: surprise, fear, and anger can share overlapping muscle patterns—labels are not read directly from faces alone.",
        ],
      },
      {
        heading: "Neuroscientific Perspectives — Emotional Brain",
        points: [
          "Prefrontal cortex (PFC): experience and regulation of emotion; executive control.",
          "Amygdala: salience and biological significance of stimuli.",
          "Anterior cingulate cortex (ACC): stimulus selection among competing inputs; conflict monitoring links.",
          "Insula: interoceptive feeling, conscious aspects of bodily state, affective awareness.",
        ],
      },
      {
        heading: "PFC",
        points: [
          "Most anterior cortex; supports higher-order cognition, judgment, planning.",
          "Hemisphere nuances: right PFC linked to emotional vulnerability; left PFC sometimes a resilience marker in individual differences work.",
          "Left PFC activation associated with anger and approach motivation—this is approach motivation, not positive valence by itself.",
        ],
      },
      {
        heading: "Amygdala",
        points: [
          "Almond-shaped structure in anterior medial temporal lobe.",
          "General role in salience and arousal (Costafreda, 2008; Vytal & Hamann, 2010).",
          "Central in fear/anxiety learning but also responds to positive, rewarding stimuli—avoid treating it as “fear-only”.",
        ],
      },
      {
        heading: "Anterior Cingulate",
        points: [
          "Important for visceral regulation and selecting sensory input for deeper processing (Lindquist, 2012).",
          "Active in fear conditioning; correlates with sympathetic nervous system activity (Etkin, 2011).",
        ],
      },
      {
        heading: "Insula",
        points: [
          "Supports experiential/expressive aspects of internally generated emotion and conscious feeling.",
          "General awareness of bodily sensations and affective feeling states (Craig, 2009).",
        ],
      },
      {
        heading: "Specific Emotions (Face & Physiology Cues)",
        points: [
          "Fear: eyebrows raised/drawn together, wide eyes; reduced heart-rate variability (HRV); typically more skin conductance response (SCR) than anger.",
          "Anger: lowered brows, pressed lips; left PFC involvement; often little HRV change relative to fear.",
          "Disgust: raised upper lip, wrinkled nose; skin conductance depends on subtype of disgust elicitor.",
          "Sadness: inner brow raise; crying vs non-crying variants differ physiologically.",
          "Happiness: tensed eyelids, raised cheeks/lips; smiling linked to longevity findings; left PFC patterns in many studies.",
        ],
      },
      {
        heading: "Brain Asymmetry",
        points: [
          "Left frontal EEG/fMRI patterns often track positive engagement and approach (Coan et al., 2003).",
          "Exception: anger shows left-brain bias consistent with approach motivation (Harmon-Jones, 1998).",
        ],
      },
      {
        heading: "Emotional Design",
        points: [
          "Don Norman’s three levels: visceral (immediate aesthetic/emotional first impression—e.g., iPhone look), behavioral (pleasure and effectiveness during use—e.g., keyboard feel), reflective (meaning, identity, memory after use—e.g., recalling a roller coaster).",
        ],
      },
    ],
    keyResearchers: [
      "Kleinginna & Kleinginna",
      "William James",
      "Paul Ekman",
      "Wallace V. Friesen",
      "James A. Russell",
      "Albert Mehrabian",
      "Lisa Feldman Barrett",
      "Alf Gabrielsson",
      "Fritz Strack",
      "Robert W. Levenson",
      "James Coan",
      "Eddie Harmon-Jones",
      "Don Norman",
      "A.D. (Bud) Craig",
      "Kristine A. Lindquist",
    ],
    keyReferences: [
      "Kleinginna & Kleinginna (1981)",
      "James (1894)",
      "Ekman & Friesen (1971)",
      "Russell & Mehrabian (1977)",
      "Gabrielsson (2002)",
      "Barrett (2012)",
      'Don Norman, "Emotional Design"',
    ],
  },
  {
    week: 3,
    lectureTitle: "Affect Elicitation & Experimental Methodology",
    instructor: "Dr. Jainendra Shukla, IIIT Delhi",
    slideCount: 33,
    sections: [
      {
        heading: "Dataset Types",
        points: [
          "Acted/posed: easier to collect and label; ecological validity can suffer (performers exaggerate).",
          "Naturalistic: high validity; labeling and acquisition are hard (ambiguous emotions, privacy).",
          "Induced: middle ground—use controlled stimuli/tasks to evoke real feelings without full scripting.",
        ],
      },
      {
        heading: "Elicitation Methods",
        points: [
          "Passive/perception: participants observe stimuli (images, film) while responses are recorded.",
          "Active/expression: participants perform behaviors (posed faces, speech tasks, social interactions).",
        ],
      },
      {
        heading: "Passive — Images",
        points: [
          "Standardize presentation (e.g., ~10 s exposure, fixed viewing distance, resolution).",
          "Databases: IAPS (International Affective Picture System), GAPED, and related affective image sets.",
          "Strengths (+): noninvasive, accessible, simple protocol.",
          "Weaknesses (−): emotions may be weak or transient; limited personalization; clinical populations can diverge (e.g., cocaine addiction—Asensio et al., 2010).",
          "Best suited to reactive modalities (face, physiology) more than highly productive channels (spontaneous text, complex gestures).",
        ],
      },
      {
        heading: "Passive — Film Clips",
        points: [
          "Typical structure: neutral baseline (~12 s) → emotional clip (~1–2 min) → self-assessment (SAM, questionnaires).",
          "Physical standardization (e.g., monitor size ~20 inch, fixed seating distance ~5 ft) reduces variance.",
          "Use 1–2 homogeneous clips per target emotion; curated sets such as FilmStim.",
          "Strengths (+): higher intensity; complex emotions; study latency and duration dynamics.",
          "Weaknesses (−): prior viewing, genre preferences, and ecological validity limits; less ideal for productive modalities.",
        ],
      },
      {
        heading: "Active — Behavioral Manipulation",
        points: [
          "Directed Facial Action Task (Ekman et al., 2007): instruct muscle-by-muscle facial actions.",
          "Recall/write autobiographical emotional episodes (Siedlecka et al., 2015) to reactivate affect.",
          "Weaknesses (−): ecological validity; requires knowledge of expressive behaviors; limited emotion coverage.",
          "Strengths (+): strong effects when the mapping from behavior to construct is precise.",
        ],
      },
      {
        heading: "Active — Social Interaction",
        points: [
          "Strengths (+): realistic dynamics; can elicit difficult emotions (anger, guilt) more readily than passive viewing.",
        ],
      },
      {
        heading: "IRB (Human Subjects Ethics)",
        points: [
          "Institutional Review Boards protect participants’ rights and welfare.",
          "Typical submission bundle: proposal, detailed methodology, consent forms, confidentiality safeguards, risk/benefit analysis, recruitment plan, instruments/measures.",
          "Common criteria: minimize risks, equitable selection, informed consent, data monitoring, privacy protection, additional safeguards for vulnerable populations.",
        ],
      },
      {
        heading: "R&D Tools",
        points: [
          "Data collection: PsychoPy, OpenSesame, E-Prime, SuperLab, DMDX.",
          "Labeling/annotation: Geneva Emotion Wheel, SAM manikins, FeelTrace, ELAN, Praat (speech).",
          "Signal processing: Praat, OpenSMILE, EEGLAB, OpenCV, MediaPipe.",
          "Data mining / ML: WEKA, AutoML frameworks, SPSS, SciPy ecosystem.",
          "Affect expression / agents: MARY, GRETA, Festival, ROS, SmartBody, SOAR, ACT-R (illustrative toolchain diversity).",
        ],
      },
    ],
    keyResearchers: [
      "Paul Ekman",
      "Wallace V. Friesen",
      "Narges Monkaresi",
      "Samuel Asensio",
      "Katarzyna Siedlecka",
      "James D. Morris (SAM)",
    ],
    keyReferences: [
      "IAPS",
      "GAPED",
      "FilmStim",
      "SAM — Self-Assessment Manikin (Morris, 1995)",
      "PsychoPy",
      "MediaPipe",
    ],
  },
  {
    week: 4,
    lectureTitle: "Automated Face Analysis",
    instructor: "Dr. Jainendra Shukla, IIIT Delhi",
    slideCount: 20,
    sections: [
      {
        heading: "Introduction",
        points: [
          "Facial emotion/expression recognition (FER) infers affect from the face.",
          "Inputs can include EMG, ECG, EEG, earables/wearables, and cameras—cameras are widely used as informative and relatively non-intrusive.",
        ],
      },
      {
        heading: "Static vs Dynamic FER",
        points: [
          "Static: features from single frames—often peak expression frames—with handcrafted descriptors.",
          "Dynamic: spatio-temporal modeling of facial motion across frames.",
          "Dynamic methods often achieve higher recognition rates; transitions differ in duration and morphology across expressions.",
        ],
      },
      {
        heading: "Conventional FER Pipeline",
        points: [
          "Three stages: (1) face or facial component detection, (2) feature extraction, (3) expression classification.",
        ],
      },
      {
        heading: "Deep Learning FER",
        points: [
          "Reduces reliance on explicit face-physics models; supports end-to-end learning from pixels or shallow features.",
        ],
      },
      {
        heading: "Macro vs Micro Expressions",
        points: [
          "Macro: socially typical, easily visible expressions; often aligned with speech; roughly 0.5–4 s; landmark-friendly.",
          "Micro: subtle, spontaneous, involuntary; may reveal concealed affect; typically ≤0.5 s; harder to detect and label.",
        ],
      },
      {
        heading: "FACS",
        points: [
          "Facial Action Coding System (Ekman & Friesen, 1978): taxonomy of facial muscle activations.",
          "Action Units (AUs) decompose expressions; combinations map to emotion hypotheses with rules or learning.",
        ],
      },
      {
        heading: "Feature Extraction",
        points: [
          "Geometric: landmark positions, angles, distances (Ghimire & Lee, 2013). Example: AU6 vs AU7—both narrow eye aperture, but AU6 creates crow’s-feet wrinkles lateral to the eye corners.",
          "Appearance: skin texture, wrinkles; Gabor, HOG, SIFT-class filters.",
          "Motion: optical flow, motion history images (MHI), local binary patterns from volumes (Zhao & Pietikäinen, 2007).",
        ],
      },
      {
        heading: "ExpressEar",
        points: [
          "FER using commercial earables with inertial sensors (Verma et al., IMWUT 2021)—face-related inference without a front-facing camera in some setups.",
        ],
      },
      {
        heading: "FER Databases",
        points: [
          "CK+ (Lucey et al., 2010): 593 sequences, 123 subjects, ages ~18–30; widely used benchmark.",
          "Compound Emotion (CE) dataset (Tao & Martinez, 2014): 5060 images, 22 categories—beyond simple basics.",
          "DISFA / DISFA+: large stereo frame counts (~130k), 27 subjects—intensity and AU focus.",
          "BU-3DFE: 100 subjects, 7 expressions, ages 18–70; 3D facial shape information.",
        ],
      },
      {
        heading: "Applications",
        points: [
          "Pain assessment, depression screening cues, deception detection, drowsy-driver monitoring, in-class attention estimation.",
        ],
      },
      {
        heading: "Limitations & Ethics",
        points: [
          "Technical limits: real-time compute, illumination, occlusion (self-occlusion and objects), subtle expressions, individual differences.",
          "Ethics: fairness across demographics, accountability for errors, transparency of deployment and consent.",
        ],
      },
    ],
    keyResearchers: [
      "Paul Ekman",
      "Wallace V. Friesen",
      "Dilip Ghimire",
      "Hyohyun Lee",
      "C.F. Benitez-Quiroz",
      "Patrick Lucey",
      "Jeffrey F. Cohn",
      "Aleix M. Martinez",
      "Prerna Verma (ExpressEar)",
    ],
    keyReferences: [
      "FACS (Ekman & Friesen, 1978)",
      "CK+ (Lucey et al., 2010)",
      "DISFA",
      "BU-3DFE",
      "ExpressEar (Verma et al., 2021)",
    ],
  },
  {
    week: 5,
    lectureTitle: "Speech in Affective Computing",
    instructor: "Dr. Jainendra Shukla, IIIT Delhi",
    slideCount: 21,
    sections: [
      {
        heading: "Applications",
        points: [
          "Spoken affect supports man–machine interaction, tutoring systems, driver safety, clinical/diagnostic screening, translation with emotional nuance, and mobile services (Ayadi et al., 2011).",
        ],
      },
      {
        heading: "Difficulties",
        points: [
          "Borden, Harris & Raphael (1994) three-factor view: what is said (linguistic content), how it is said (paralinguistics—prosody, timing), who says it (speaker identity—age, gender, anatomy).",
          "Models must disentangle emotion from lexical meaning and from speaker-specific timbre.",
        ],
      },
      {
        heading: "Database Types",
        points: [
          "Natural: call centers, cockpit speech—high realism, messy labels.",
          "Simulated/acted: professional actors—clean labels, performativity risk.",
          "Elicited/induced: tasks designed to evoke genuine affect in the lab.",
        ],
      },
      {
        heading: "Existing Databases",
        points: [
          "AIBO: child–robot interactions; ~110 dialogues, ~29,200 words, 11 emotion categories (Batliner et al., 2004).",
          "Berlin EmoDB: 10 actors, 10 German sentences, 7 emotions (Burkhardt et al., 2005).",
          "RAVDESS: 24 actors, 2 spoken statements, multimodal (Livingstone & Russo, 2018).",
          "IITKGP-SESC: 10 artists, 15 Telugu sentences, 8 emotions.",
          "IITKGP-SEHSC: 10 artists, 8 emotions from All India Radio Varanasi broadcasts—combined corpora on the order of ~12,000 utterances in course materials.",
        ],
      },
      {
        heading: "Acoustic Features",
        points: [
          "Prosodic: fundamental frequency (F0), energy, speaking rate.",
          "Spectral: MFCCs, mel-filterbank energies (MFBs), and related cepstral features.",
        ],
      },
      {
        heading: "Common Prosody Features",
        points: [
          "Intensity/amplitude (loudness), F0 contour (pitch), formants F1/F2 (voice quality/vowel structure), speech rate, global spectral energy (timbre-related).",
        ],
      },
      {
        heading: "Positive Voices",
        points: [
          "Broad tendencies (Kamiloglu et al., 2020): positive affect often correlates with higher loudness, wide pitch variability, higher/variable pitch, and elevated F1/F2—always conditional on language and speaker.",
        ],
      },
      {
        heading: "Feature Normalization",
        points: [
          "Raw cues conflate emotion with speaker identity—e.g., angry speech raises F0, but baseline F0 differs widely across people.",
          "Common fixes: z-score and min–max normalization per speaker or corpus.",
          "Risk: aggressive normalization can wash out emotionally discriminative variation.",
        ],
      },
      {
        heading: "IFN — Iterative Feature Normalization",
        points: [
          "Busso et al. (2011): detect neutral vs emotional segments; estimate normalization parameters from neutral samples; iterate until label assignments stabilize (e.g., <5% flip rate).",
          "Aims to preserve emotion-relevant contrasts while removing speaker nuisance factors.",
        ],
      },
      {
        heading: "Limitations",
        points: [
          "Large inter- and intra-speaker variability; limited non-English resources historically; scarcity of naturalistic labeled speech; early deep-learning interpretability gaps; limited cross-lingual affect transfer literature relative to need.",
        ],
      },
    ],
    keyResearchers: [
      "Gloria J. Borden",
      "Katherine Harris",
      "Lawrence Raphael",
      "Mohamed Ayadi",
      "Alfred Batliner",
      "Felix Burkhardt",
      "Steven Livingstone (RAVDESS)",
      "S.G. Koolagudi",
      "Carlos Busso",
      "Melike Kamiloglu",
    ],
    keyReferences: [
      "Borden, Harris & Raphael (1994)",
      "Ayadi et al. (2011)",
      "Berlin EmoDB (Burkhardt et al., 2005)",
      "RAVDESS (Livingstone & Russo, 2018)",
      "AIBO corpus (Batliner et al., 2004)",
      "IFN — Iterative Feature Normalization (Busso et al., 2011)",
    ],
  },
  {
    week: 6,
    lectureTitle: "Affect Detection in Texts",
    instructor: "Dr. Jainendra Shukla, IIIT Delhi",
    slideCount: 23,
    sections: [
      {
        heading: "Applications",
        points: [
          "Sentiment and fine-grained emotion detection for social listening and products.",
          "Computer-assisted creativity and stylistic tools.",
          "Verbal expressivity measurement in human–computer interaction research.",
        ],
      },
      {
        heading: "Typography & Emotion",
        points: [
          "Typeface geometry and symmetry carry affective connotations—lines tilting downward read as doleful, upward as joyous (Poffenberger & Barrows, 1924).",
          "Times New Roman vs Arial: TNR rated funnier, angrier, more satirical in some studies (Juni & Gross, 2008).",
          "Good typography measurably elevates mood (Larson & Picard, 2005).",
        ],
      },
      {
        heading: "Aesthetics of Reading",
        points: [
          "Relative Subjective Duration (RSD): poor typography made reading feel shorter than clock time; good typography stretched perceived duration—evidence of stronger engagement.",
          "Candle reading task: more participants solved the puzzle with good typography than with poor typography in the cited demonstration.",
        ],
      },
      {
        heading: "Beyond Positive / Negative",
        points: [
          "Fear and anger are both “negative” in valence but imply different appraisals and behaviors.",
          "Lerner & Keltner (2000); Miller et al. (2009): fear linked to pessimistic/passive orientations; anger to optimistic/active orientations in some risk-judgment tasks.",
          "Dimensional and fine-grained models help (Calvo & Mac Kim, 2013).",
        ],
      },
      {
        heading: "Complexity",
        points: [
          "Implicit emotion: phrases like “be laid off” or “go on a first date” evoke affect without explicit emotion words (Lee, 2015).",
          "Cambria et al. (2009): integrating common sense with affective knowledge improves interpretation.",
          "Metaphor and idiom: “lost his cool”, “blood boils” (Lakoff, 2008).",
          "Context sensitivity and cross-cultural variation are first-order problems.",
        ],
      },
      {
        heading: "Databases",
        points: [
          "ISEAR: ~3,000 participants, 7 emotion categories (Scherer & Wallbott, 1994).",
          "EmotiNet and knowledge-graph style resources for multimodal/common-sense linkage.",
          "Alm’s fairy tales corpus: 1,580 sentences labeled with six Ekman-type categories.",
          "SemEval-2007 affect task: 1,250 news headlines, six emotions.",
        ],
      },
      {
        heading: "Lexical Resources",
        points: [
          "ANEW (Affective Norms for English Words): ~2,000 words with valence, arousal, dominance ratings (Bradley & Lang, 1999).",
          "SentiWordNet: polarity scores; objectivity computed as Obj = 1 − (Pos + Neg) in common formulations.",
          "NRC Emotion Lexicon: ~14,000 words × eight emotions; expanded to 100+ languages via translation (Mohammad & Turney, 2013).",
          "LIWC: ~6,400 words across 70+ psycholinguistic categories (Pennebaker et al., 2001).",
          "WordNet-Affect and DepecheMood (~35,000 words) (Staiano & Guerini, 2014).",
        ],
      },
      {
        heading: "Unsupervised Recognition",
        points: [
          "Categorical: build bag-of-words vectors, align with NRC emotion lexicon columns, use cosine similarity to pick best-matching emotion category.",
          "Dimensional: project text against ANEW VAD vectors similarly (Kim et al., 2010).",
          "Simple baselines remain strong sanity checks for supervised systems.",
        ],
      },
    ],
    keyResearchers: [
      "A.T. Poffenberger",
      "S. Juni",
      "Kevin Larson",
      "Rosalind Picard",
      "Jennifer Lerner",
      "Dacher Keltner",
      "Erik Cambria",
      "George Lakoff",
      "Sungjin Lee",
      "Saif Mohammad",
      "Peter Turney",
      "James Pennebaker",
    ],
    keyReferences: [
      "ANEW (Bradley & Lang, 1999)",
      "NRC Emotion Lexicon (Mohammad & Turney, 2013)",
      "LIWC (Pennebaker et al., 2001)",
      "SentiWordNet",
      "ISEAR (Scherer & Wallbott, 1994)",
    ],
  },
  {
    week: 7,
    lectureTitle: "Emotions in Physiological Signals",
    instructor: "Dr. Jainendra Shukla, IIIT Delhi",
    slideCount: 34,
    sections: [
      {
        heading: "Physiological Signals",
        points: [
          "Originate largely from the autonomic nervous system (ANS); difficult to consciously fake at fine timescales.",
          "Can capture relatively unaltered arousal responses; do not require directed attention like self-report.",
          "Wearable sensing has improved field deployment (though artifacts remain).",
        ],
      },
      {
        heading: "Common Measures",
        points: [
          "Blood pressure (BP), electrocardiography (ECG), electroencephalography (EEG), electromyography (EMG), galvanic skin response (GSR)/EDA, heart rate (HR), respiration, temperature.",
        ],
      },
      {
        heading: "Heart Rate",
        points: [
          "Coupled to arousal; elevates in fear, panic, anger, strong appreciation, exertion.",
          "ECG: electrical potentials on the skin surface (microvolts).",
          "PPG: optical pulse waveform at fingertip/ear—dry sensors, convenient for wearables.",
        ],
      },
      {
        heading: "Cardiac Parameters",
        points: [
          "HR in beats per minute (bpm).",
          "Inter-beat interval (IBI) in ms between successive peaks.",
          "Heart-rate variability (HRV): natural beat-to-beat variation around the mean HR.",
        ],
      },
      {
        heading: "HRV",
        points: [
          "Typically decreases under acute stress and time pressure—beats become more regular.",
          "Low HRV often indicates sympathetic dominance / stress; high HRV can indicate parasympathetic recovery/flexibility.",
          "RMSSD metric: square root of the mean squared successive differences between RR intervals.",
        ],
      },
      {
        heading: "Other HR Factors",
        points: [
          "Age reduces baseline HRV; posture shifts autonomic balance; aerobic conditioning increases HRV; breathing pace entrains HR oscillations (respiratory sinus arrhythmia).",
        ],
      },
      {
        heading: "HR Limitations",
        points: [
          "Arousal is ambiguous: positive excitement and negative anxiety can both raise HR—valence is not decoded from HR alone.",
          "Combine with face, EEG, or self-report for valence disambiguation.",
        ],
      },
      {
        heading: "Skin Conductance (GSR / EDA)",
        points: [
          "Indexes emotional sweating via eccrine glands innervated by sympathetic fibers.",
          "Historical note: Carl Jung used galvanic responses in word-association tasks for “feeling-toned complexes”.",
          "Core component of polygraph/lie-detection folklore—scientifically contested for deception specificity.",
          "Among the most widely used psychophysiological measures in affective HCI.",
        ],
      },
      {
        heading: "GSR Measurement",
        points: [
          "Electrodes can be placed on many sites; palms and soles are highly reactive.",
          "Typical conductance range on the order of 2–20 µS in many lab contexts (individual baselines vary).",
          "Rise time ~1–3 s to peak; recovery ~2–10 s; sample at least ~1–10 Hz depending on feature goals.",
        ],
      },
      {
        heading: "SCL vs SCR",
        points: [
          "Skin conductance level (SCL): slow tonic drift with general arousal/state.",
          "Skin conductance response (SCR): phasic peaks time-locked to discrete stimuli/events.",
        ],
      },
      {
        heading: "GSR Features",
        points: [
          "Peak amplitude, SCR count per window, rise time, band power in ~0.5–5 Hz.",
          "Course finding: MFCC-like features can outperform classic SCR summaries on some classification tasks (Shukla et al., 2019).",
        ],
      },
      {
        heading: "GSR Limitations",
        points: [
          "Valence-blind: high SCR only signals sympathetic activation, not whether the emotion is positive or negative.",
          "In the wild, event onsets/offsets are unclear without triggers—segmentation is hard.",
        ],
      },
      {
        heading: "EEG",
        points: [
          "Summed postsynaptic potentials from synchronized neural populations; volume-conducted through tissue and skull.",
          "Recorded from scalp electrodes; millisecond-level time resolution.",
          "Reflects cognitive states (drowsiness), relaxation, and approach/withdrawal asymmetries.",
        ],
      },
      {
        heading: "10–20 System",
        points: [
          "Standard electrode naming: Fp (prefrontal), F (frontal), T (temporal), P (parietal), O (occipital), C (central).",
          "Z denotes midline; even-numbered electrodes are typically right hemisphere; odd-numbered left.",
        ],
      },
      {
        heading: "FAA — Frontal Alpha Asymmetry",
        points: [
          "Compare alpha power at homologous sites (e.g., F3/F4 or F7/F8); alpha inversely tracks cortical activation in many paradigms.",
          "Left-frontal relatively greater activation (lower alpha) → approach-related states (anger, joy in many models).",
          "Right-frontal relatively greater activation → withdrawal-related states (fear, sadness, disgust in many models).",
        ],
      },
      {
        heading: "EEG Features",
        points: [
          "Event-related potentials (ERPs) such as P300; band power (delta–gamma).",
          "Higher-order connectivity features (HOC) can outperform band-power baselines (Jenke et al., 2014).",
        ],
      },
      {
        heading: "EEG Limitations",
        points: [
          "Poor spatial resolution for deep sources; surface-only; setup can feel intrusive; motion/muscle/eye artifacts; requires training to interpret.",
        ],
      },
    ],
    keyResearchers: [
      "Carl Gustav Jung",
      "Jainendra Shukla",
      "Robert Jenke",
      "John T. Cacioppo",
      "Louis G. Tassinary",
      "Paul Ekman",
      "Robert W. Levenson",
    ],
    keyReferences: [
      "Shukla et al. (2019), IEEE Transactions on Affective Computing",
      "Jenke et al. (2014), IEEE TAC",
      "Boucsein (2012)",
      "Lang (1995)",
      "Cacioppo & Tassinary (2000)",
    ],
  },
  {
    week: 8,
    lectureTitle: "Multimodal Emotion Recognition",
    instructor: "Dr. Jainendra Shukla, IIIT Delhi",
    slideCount: 25,
    sections: [
      {
        heading: "Motivation",
        points: [
          "Multiple modalities yield richer representations and can improve robustness via redundancy.",
          "D’Mello & Kory (2012): fusion helps but challenges include synchronization, corpus scarcity, and sometimes modest gains over the best single stream.",
        ],
      },
      {
        heading: "Data Collection",
        points: [
          "Prefer spontaneous/subtle affect where possible; capture contextual descriptors.",
          "Label all modalities at aligned time windows—joint annotation is expensive but necessary for supervised fusion.",
        ],
      },
      {
        heading: "Feature Extraction",
        points: [
          "Streams differ in sampling (e.g., video 25 fps, GSR 16 Hz, EEG 128 Hz)—alignment is non-negotiable.",
          "Schuller et al. (2008): optimize features per modality first, then fuse representations.",
        ],
      },
      {
        heading: "Fusion Types",
        points: [
          "Early fusion: concatenate features before classification—powerful but high-dimensional; strict sync required.",
          "Late fusion: separate classifiers per modality; combine soft scores (e.g., weighted average) or hard decisions.",
          "Slow fusion / intermediate: models that learn cross-stream correlations with relaxed alignment assumptions in some architectures.",
        ],
      },
      {
        heading: "SEMAINE",
        points: [
          "Sensitive Artificial Listener framework for dyadic interaction.",
          "Four agent personalities: Prudence (even-tempered), Poppy (happy/outgoing), Spike (angry/confrontational), Obadiah (sad/depressive).",
          "Annotations from 2–8 raters on four continuous dimensions: Arousal, Expectation, Power, Valence.",
        ],
      },
      {
        heading: "AVEC Challenge",
        points: [
          "Audio–Visual Emotion Challenge: benchmark for depression/affect estimation from multimodal clips.",
          "Binary labels derived by thresholding continuous ratings; video chunked at frame and word granularities in different tasks.",
        ],
      },
      {
        heading: "Representative Results (Illustrative)",
        points: [
          "Without feature selection (No FS): audio strongest for arousal (~68.5%); visual helps expectation (~67.6%); speech informative for power; video helps valence (~69.8%) in cited analyses.",
          "With correlation-based feature selection (CFS): video modality improves (e.g., ~60.4% → ~65.8% in one comparison).",
          "LDCRF variants can excel on power in audiovisual fusion settings (Wollmer et al., 2013 lineage).",
        ],
      },
    ],
    keyResearchers: [
      "Sidney D’Mello",
      "Jacquelyn Kory",
      "Björn Schuller",
      "Martin Wöllmer",
      "Johnny Fontaine",
      "Ramirez",
      "Mohamed Sayedelahl",
    ],
    keyReferences: [
      "D’Mello & Kory (2012)",
      "Schuller et al. (2008)",
      "Wöllmer et al. (2013)",
      "SEMAINE project",
      "AVEC challenge series",
    ],
  },
  {
    week: 9,
    lectureTitle: "Emotional Empathy in Machines",
    instructor: "Dr. Jainendra Shukla, IIIT Delhi",
    slideCount: 45,
    sections: [
      {
        heading: "Empathy & Agents",
        points: [
          "Empathy: capacity to understand (and sometimes share) what others experience affectively.",
          "Empathic machine responses can improve rapport, trust, and perceived support.",
          "Anthropomorphism: users attribute human-like traits to agents (Epley et al., 2007)—designers must navigate uncanny valley and misleading cues.",
        ],
      },
      {
        heading: "Types of Empathetic Agents",
        points: [
          "(1) Agent responds congruently to the user’s emotion (mirroring, validation).",
          "(2) System is designed to evoke empathy from the user toward a character or robot.",
          "Model elements often include observer, target, eliciting event, emotion label, situational context, and mediating factors (traits, relationship).",
        ],
      },
      {
        heading: "Artificial Empathy",
        points: [
          "Bo Xia et al. (2016) decompose into: emotional simulation, perspective taking, emotion regulation.",
          "Example narrative: mental-health chatbots that acknowledge distress and guide coping—requires safety guardrails and escalation paths.",
        ],
      },
      {
        heading: "Empathy Analysis",
        points: [
          "Behavioral and physiological cues from users.",
          "Lexical cues via n-gram language models (Xiao et al., 2013).",
          "Vocal prosody features (Xiao et al., 2014).",
          "Facial expression sets: Kumano et al. (2011) explored six expression types, three gaze states, three empathy classes.",
        ],
      },
      {
        heading: "Empathy Simulation",
        points: [
          "Boukricha (2011) three-step model: mechanism (internal imitation, emotional feedback loops) → modulation (interpolate perceived/other state in PAD space weighted by liking/familiarity) → expression (face/voice/text output).",
          "Data-driven systems: CARE (McQuiggan & Lester, 2007); Affective AutoTutor extensions (D’Mello et al., 2013) detect empathic-relevant cues and respond with rules—benefits shown especially for lower-knowledge learners.",
        ],
      },
      {
        heading: "Evoking Empathy",
        points: [
          "Paiva et al. (2017): computationally consider behaviors, embodiment/appearance, narrative context, mediating factors (user traits), and measurement instruments.",
        ],
      },
      {
        heading: "Theory of Mind",
        points: [
          "Attributing beliefs, desires, and intentions to others; false-belief tasks benchmark child development.",
          "Affective agents may need real-time mind-model updates to interpret user goals and emotional causes.",
        ],
      },
      {
        heading: "Evaluation",
        points: [
          "No single gold standard: Turing-style interaction tests, psychological criteria (autonomy, imitation, moral status, accountability, privacy, reciprocity), questionnaires, and behavioral/content analysis.",
        ],
      },
    ],
    keyResearchers: [
      "Ana Paiva",
      "Iolanda Leite",
      "Hana Boukricha",
      "Ipke Wachsmuth",
      "Nicholas Epley",
      "Sidney D’Mello",
      "James McQuiggan",
      "James Lester",
      "Cynthia Breazeal",
      "Lu Xiao",
      "Shogo Kumano",
      "Mel Slater",
    ],
    keyReferences: [
      "Paiva et al. (2017), ACM TiiS",
      "Boukricha (2011)",
      "Bo Xia et al. (2016)",
      "Epley et al. (2007)",
      "D’Mello & Graesser (2013)",
    ],
  },
  {
    week: 10,
    lectureTitle: "Emotionally Intelligent Machines",
    instructor: "Dr. Jainendra Shukla, IIIT Delhi",
    slideCount: 29,
    sections: [
      {
        heading: "Affect-Aware Learning",
        points: [
          "Meta-analytic evidence cited: ~24 studies, ~1,740 students, ~45 minutes per session, ~76,000 total minutes; 17 affective states tracked.",
          "Frequent states include engagement, boredom, confusion, curiosity, happiness, frustration.",
        ],
      },
      {
        heading: "Affective AutoTutor",
        points: [
          "Among the first reactive conversational intelligent tutoring systems with multimodal affect sensing.",
          "Detects boredom, confusion, frustration, neutral; uses decision-level sensor fusion.",
          "Generates empathetic/encouraging dialogue moves.",
          "Learning gains increased from session 1→2 for affective versions vs plateau for nonaffective controls in cited work.",
        ],
      },
      {
        heading: "GazeTutor",
        points: [
          "Monitors waning attention; multimedia cognitive-affective interface with animated agent.",
          "Gaze-reactive interventions redirect attention (D’Mello et al., 2012).",
        ],
      },
      {
        heading: "Affect-Aware Games",
        points: [
          "Emotions inform mechanics, pacing, and narrative; player experience becomes tunable.",
          "Potential for richer affect loops and faster design iteration when telemetry exists.",
          "Educational games can leverage affect for improved learning outcomes when interventions are well timed.",
        ],
      },
      {
        heading: "Affective Loop",
        points: [
          "Player expresses emotion → game detects → game interprets state → game adapts via NPC affect models or content generation (Sundström, 2005).",
        ],
      },
      {
        heading: "NeverMind",
        points: [
          "Uses facial distress cues to adapt horror/thriller-style gameplay; players act as “Neuroprobers” entering trauma-related narratives.",
          "Stress increases environmental threat (flooding rooms, spikes, static); calm states ease difficulty.",
          "Multimodal sensing: HR/HRV plus facial expression (Affectiva-era pipeline).",
        ],
      },
      {
        heading: "Open Issues",
        points: [
          "Sensor vs sensorless vs “sensor-lite” deployments trade off accuracy, scalability, and privacy.",
        ],
      },
      {
        heading: "Sensor Approach",
        points: [
          "Deploy physical sensors in classrooms/labs (Arroyo et al., 2009): pressure-sensitive mouse, mats, cameras, bracelets.",
          "Viable for short studies; long-term maintenance and participant burden limit sustainability.",
        ],
      },
      {
        heading: "Sensorless",
        points: [
          "Infer affect from behavior logs: driving signals, social media text, interaction timing.",
          "Keystroke dynamics (Bixler & D’Mello, 2013) as a low-cost channel.",
          "Scales well; accuracy often weaker than rich sensing.",
        ],
      },
      {
        heading: "Sensorlite",
        points: [
          "Use scalable commodity sensors (camera, microphone) and replace obtrusive wearables where possible.",
          "Examples: camera-based heart rate estimation, webcam eye gaze—lower friction than multi-device labs.",
        ],
      },
      {
        heading: "Accuracy",
        points: [
          "Naturalistic settings amplify noise: intrusive sensors, weak signals, limited labeled data, integration ambiguity (top-down vs bottom-up models), unclear affect definitions, generalization gaps.",
          "Moderate accuracy may suffice if interventions are fail-soft and ethically conservative.",
        ],
      },
      {
        heading: "Adaptation Levels",
        points: [
          "Level 0: no adaptation—scripted assistants (e.g., basic voice agents).",
          "Level 1: recognize user state but follow fixed policy.",
          "Level 2: single-task adaptation—predefined or lightly learned policies (some ITS, Shimi robot examples).",
          "Level 3: multi-task reordering with accumulated user models.",
          "Level 4: coordinated adaptation across agents in real or simulated multi-agent environments.",
        ],
      },
    ],
    keyResearchers: [
      "Sidney D’Mello",
      "Arthur Graesser",
      "Andrew Olney",
      "Ivon Arroyo",
      "Robert Bixler",
      "Georgios Yannakakis",
      "Ana Paiva",
      "Petra Sundström",
    ],
    keyReferences: [
      "D’Mello et al. (2012) — GazeTutor",
      "Arroyo et al. (2009) — AIED classroom sensing",
      "Bixler & D’Mello (2013)",
      "Calvo & D’Mello (2010)",
      "NeverMind — Affectiva-affiliated game research",
    ],
  },
  {
    week: 11,
    lectureTitle: "Emotional Virtual Personal Assistant",
    instructor: "Dr. Jainendra Shukla, IIIT Delhi",
    slideCount: 24,
    sections: [
      {
        heading: "Use Cases",
        points: [
          "Mental health support/therapy adjuncts (not replacements for clinicians without oversight).",
          "Customer service, education/tutoring, entertainment companions, workplace productivity assistants.",
        ],
      },
      {
        heading: "Challenges",
        points: [
          "Accuracy across individuals, cultures, and contexts.",
          "Real-time processing on edge devices.",
          "Multilingual coverage and code-switching.",
          "Bias and discrimination in emotion models.",
          "Privacy of voice, face, and inferred mental states.",
        ],
      },
      {
        heading: "Requirements",
        points: [
          "Recognize basic emotions (happy/sad/angry/neutral minimum viable set).",
          "Accept natural-language speech input; infer intent; generate appropriate responses.",
          "Operate in real time; enforce data minimization and secure storage.",
          "Support multiple languages where deployed.",
        ],
      },
      {
        heading: "Architecture",
        points: [
          "Skeleton pipeline: automatic speech recognition → spoken language identification (if multilingual) → emotion recognition from speech (and optionally face/text) → NLU for intent → dialog policy / response generation → text-to-speech → context/memory update.",
        ],
      },
      {
        heading: "Data",
        points: [
          "Audio: Berlin EmoDB, RAVDESS and similar labeled speech corpora.",
          "Text: Affective Text, EmotionLines and related sentence-level emotion sets.",
          "Supervised learning needs balanced label distributions and speaker-independent test folds.",
        ],
      },
      {
        heading: "Features",
        points: [
          "MFCCs; prosody (pitch, loudness, speech rate); spectral descriptors (centroid, flux); time-domain (zero-crossing rate, energy).",
          "Feature selection: PCA, LDA, mutual information, recursive feature elimination (RFE).",
        ],
      },
      {
        heading: "Model & Register",
        points: [
          "Engineering flow: define architecture → compile/build → train → evaluate → tune → export test → version and register in a model registry (TensorFlow Serving, MLflow, etc.).",
        ],
      },
      {
        heading: "Deployment",
        points: [
          "Edge example: Raspberry Pi with TensorFlow Lite; quantize models to reduce size and latency.",
          "Interface with microphone and speaker; monitor CPU/thermal constraints.",
        ],
      },
      {
        heading: "Ethical Concerns",
        points: [
          "Privacy and surveillance risks from always-on microphones/cameras.",
          "Emotional manipulation in commerce or politics.",
          "Demographic bias leading to misrecognition and unequal service quality.",
          "Unintended dependence or addiction-like engagement patterns.",
          "Liability when advice is mistaken; transparency about synthetic empathy.",
          "Social isolation if machines substitute for human contact.",
        ],
      },
    ],
    keyResearchers: ["Dr. Aniket Bera (Purdue University)", "Dr. Jainendra Shukla (IIIT Delhi)"],
    keyReferences: ["Berlin EmoDB", "RAVDESS", "TensorFlow Lite", "MLflow"],
  },
  {
    week: 12,
    lectureTitle: "Ethical Considerations",
    instructor: "Dr. Jainendra Shukla, IIIT Delhi",
    slideCount: 11,
    sections: [
      {
        heading: "Motivation",
        points: [
          "Picard (1997) warned that a computer which can express emotion may eventually act emotionally; capabilities enable behaviors with serious consequences.",
          "Affective computing amplifies classic tech-ethics questions because inferred emotion touches the core of personhood and autonomy.",
        ],
      },
      {
        heading: "Core Ethical Concerns",
        points: [
          "Privacy: emotions are deeply personal (Picard, 2003).",
          "Emotional dependency and codependence with systems optimized for engagement.",
          "Emotional manipulation—even when “motivated by goodwill” (Picard & Klein, 2002)—still shapes user choices.",
          "Replacing human relationships: valuing synthetic rapport over human connection.",
        ],
      },
      {
        heading: "Privacy Invasiveness",
        points: [
          "Mobile affective computing surveys (Politou, Alepis & Patsakis, 2017) document pervasive sensing risks.",
          "Anticipatory mobile computing (Pejovic & Musolesi, 2015) can infer context and affect preemptively—raises proactive intervention ethics.",
        ],
      },
      {
        heading: "Insufficiency of Existing Approaches",
        points: [
          "Cryptography, privacy-preserving mining, and anonymization help but rarely suffice alone (Kapadia, 2009).",
          "Sweeney (2013): re-identification and linkage attacks show most information can become personal in combination—k-anonymity-style fixes have limits.",
        ],
      },
      {
        heading: "Open Issues",
        points: [
          "Which machines should gain affective capabilities? Who decides?",
          "What are downstream societal consequences? What purposes are legitimate?",
          "What moral constraints should engineers embed?",
          "Should systems simulate ethically acceptable behavior only, or critique user norms?",
          "Is deception inherent in empathic UI? Can systems expose users’ concealed emotional states?",
          "Could affective weapons or manipulative agents become destructive? What do designer ethics require?",
        ],
      },
      {
        heading: "Targeted Advertising",
        points: [
          "Using inferred emotional state to micro-target ads raises autonomy and vulnerability issues—especially for children, financially stressed users, or mental-health contexts.",
          "As emotional intelligence in ad systems improves, manipulation surface area grows—policy and norms lag technical capability.",
        ],
      },
    ],
    keyResearchers: [
      "Rosalind Picard",
      "Efthimia Politou",
      "Constantinos Alepis",
      "Constantinos Patsakis",
      "Veljko Pejovic",
      "Mirco Musolesi",
      "Apu Kapadia",
      "Latanya Sweeney",
    ],
    keyReferences: [
      "Picard (1997)",
      "Picard (2003)",
      "Picard & Klein (2002)",
      "Politou, Alepis & Patsakis (2017)",
      "Pejovic & Musolesi (2015)",
      "Kapadia (2009)",
      "Sweeney (2013)",
    ],
  },
];
