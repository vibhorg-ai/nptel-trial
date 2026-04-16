import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ── Week 1: Introduction to Affective Computing ──
  {
    id: "w1q1",
    week: 1,
    topic: "Scope of affective computing",
    sourceType: "assignment",
    questionText:
      "The field of affective computing encompasses both the creation of and interaction with machine systems that can do which of the following?",
    options: [
      { id: "a", text: "Sense, recognize, respond to, and influence human emotions" },
      { id: "b", text: "Replace human therapists in all clinical settings" },
      { id: "c", text: "Eliminate the need for user interfaces in computing" },
      { id: "d", text: "Guarantee perfect recognition of deception from facial cues alone" },
    ],
    correctAnswer: "a",
    explanation:
      "Affective computing studies systems that perceive affective cues, interpret them, act on them, and can shape emotional experience—bridging engineering and human emotional life. The field is broader than any single modality or application.",
    difficulty: "easy",
    tags: ["2026", "definition", "introduction"],
    notesRef: "Definition",
  },
  {
    id: "w1q2",
    week: 1,
    topic: "Affect sensing modalities",
    sourceType: "assignment",
    questionText:
      "Which set best represents common modalities used for affect sensing in affective computing?",
    options: [
      {
        id: "a",
        text: "Facial activity; posture and gesture; vocal signals; text; physiological signals",
      },
      { id: "b", text: "Only keyboard typing speed and mouse movement" },
      { id: "c", text: "Only fMRI and PET scans in clinical labs" },
      { id: "d", text: "GPS location and Wi‑Fi signal strength exclusively" },
    ],
    correctAnswer: "a",
    explanation:
      "Real-world affect sensing combines visual (face, body), acoustic (speech), language (text), and physiology (EDA, HR, EEG, etc.). Multimodality improves robustness because cues are partly redundant and partly complementary.",
    difficulty: "easy",
    tags: ["2026", "sensing", "modalities"],
    notesRef: "Affect Sensing",
  },
  {
    id: "w1q3",
    week: 1,
    topic: "Picard (1997) applications",
    sourceType: "assignment",
    questionText:
      "Rosalind Picard (1997) discussed several broad application themes for affective computing. Which option is NOT typically listed among those core themes?",
    options: [
      { id: "a", text: "Detection (recognizing affect from signals)" },
      { id: "b", text: "Expression (machines conveying affect)" },
      { id: "c", text: "Perception (interpreting affect in context)" },
      { id: "d", text: "Cryptographic key generation from EEG alone" },
    ],
    correctAnswer: "d",
    explanation:
      "Classic framing emphasizes better sensing, richer expression, and human-like perception of affect. Cryptographic key generation is unrelated to the foundational affective-computing application themes from that perspective.",
    difficulty: "medium",
    tags: ["2026", "history", "applications"],
    notesRef: "Applications (Picard 1997)",
  },
  {
    id: "w1q4",
    week: 1,
    topic: "Healthcare applications",
    sourceType: "assignment",
    questionText:
      "Systems such as SymTrend and Autism Track have been discussed in the context of supporting individuals on the autism spectrum (e.g., Asperger syndrome or high-functioning autism).",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctAnswer: "a",
    explanation:
      "These lines of work illustrate affective and behavioral tracking to support self-awareness, coaching, and clinical insight for neurodiverse users. Such systems aim to augment support rather than replace human care.",
    difficulty: "medium",
    tags: ["2026", "healthcare", "applications"],
    notesRef: "Healthcare Applications",
  },
  {
    id: "w1q5",
    week: 1,
    topic: "MACH system",
    sourceType: "assignment",
    questionText:
      "The MACH system (My Automated Conversation coacH) is primarily used for which purpose?",
    options: [
      { id: "a", text: "Interview skills practice through conversational interaction" },
      { id: "b", text: "Real-time stock market prediction from vocal prosody" },
      { id: "c", text: "Automated legal contract drafting" },
      { id: "d", text: "Industrial robot arm calibration" },
    ],
    correctAnswer: "a",
    explanation:
      "MACH exemplifies socially interactive affect-aware technology: users rehearse interviews while receiving feedback on verbal and nonverbal behavior. The goal is skill building in a safe, repeatable setting.",
    difficulty: "easy",
    tags: ["2026", "MACH", "HCI"],
    notesRef: "Other Applications",
  },
  {
    id: "w1q6",
    week: 1,
    topic: "Kismet robot",
    sourceType: "assignment",
    questionText:
      "The humanoid robot Kismet was developed mainly to explore which idea?",
    options: [
      { id: "a", text: "Socially situated, expressive interaction through faces and vocalizations" },
      { id: "b", text: "Maximum walking speed on rough terrain" },
      { id: "c", text: "Quantum error correction algorithms" },
      { id: "d", text: "High-resolution satellite imaging" },
    ],
    correctAnswer: "a",
    explanation:
      "Kismet investigated infant-like social signaling and turn-taking to study how expressive robots elicit human social responses. It is a landmark example of designing affective cues into embodied agents.",
    difficulty: "easy",
    tags: ["2026", "robotics", "expression"],
    notesRef: "Other Applications",
  },
  {
    id: "w1q7",
    week: 1,
    topic: "UX vs usability",
    sourceType: "assignment",
    questionText:
      "Which statement best distinguishes usability from user experience (UX)?",
    options: [
      {
        id: "a",
        text: "Usability focuses on effectiveness/efficiency/learnability; UX additionally concerns holistic feelings, meaning, and emotion over time",
      },
      { id: "b", text: "Usability and UX are identical terms in HCI standards" },
      { id: "c", text: "UX only measures task completion time; usability measures satisfaction" },
      { id: "d", text: "Usability applies only to hardware; UX applies only to marketing websites" },
    ],
    correctAnswer: "a",
    explanation:
      "Usability emphasizes measurable interaction quality for goals and tasks. UX widens the lens to subjective, aesthetic, and emotional qualities of use, including anticipation and remembered experience.",
    difficulty: "medium",
    tags: ["2026", "UX", "HCI"],
    notesRef: "UX Case Study",
  },
  {
    id: "w1q8",
    week: 1,
    topic: "Participatory design",
    sourceType: "assignment",
    questionText:
      "The PICTIVE approach (Muller, 1991) is best described as:",
    options: [
      {
        id: "a",
        text: "A participatory design method using low-fidelity materials to co-create UIs with users",
      },
      { id: "b", text: "A deep learning architecture for facial landmark detection" },
      { id: "c", text: "A physiological sensor calibration protocol for GSR" },
      { id: "d", text: "A formal proof system for program correctness" },
    ],
    correctAnswer: "a",
    explanation:
      "PICTIVE supports hands-on workshops where stakeholders manipulate simple objects to explore workflows and interfaces. It foregrounds user participation early, before expensive implementation.",
    difficulty: "medium",
    tags: ["2026", "participatory-design", "HCI"],
    notesRef: "UX Case Study",
  },
  {
    id: "w1q9",
    week: 1,
    topic: "Ethics",
    sourceType: "assignment",
    questionText:
      "Which cluster of issues is most central to ethical debates in affective computing?",
    options: [
      {
        id: "a",
        text: "Privacy of affect data; risks of emotional manipulation; emotional dependency on systems",
      },
      { id: "b", text: "Only the color palette used in mobile app icons" },
      { id: "c", text: "Whether CPUs should have more cores than GPUs" },
      { id: "d", text: "The exact number of layers in any neural network" },
    ],
    correctAnswer: "a",
    explanation:
      "Affective signals are intimate; misuse can manipulate users or create unhealthy reliance. Ethical design therefore must address consent, transparency, boundaries, and downstream harms—not only accuracy.",
    difficulty: "easy",
    tags: ["2026", "ethics", "privacy"],
    notesRef: "Ethical Considerations",
  },
  {
    id: "w1q10",
    week: 1,
    topic: "EngageMe",
    sourceType: "assignment",
    questionText:
      "The EngageMe system is notable for using which signal to model aspects of student engagement?",
    options: [
      { id: "a", text: "Skin conductance (electrodermal activity) measured from students" },
      { id: "b", text: "Only keystroke timings without any physiology" },
      { id: "c", text: "Satellite GPS traces of campus movement" },
      { id: "d", text: "Blood glucose sampled invasively each minute" },
    ],
    correctAnswer: "a",
    explanation:
      "Electrodermal activity indexes sympathetic arousal linked to attention and affective intensity in classroom contexts. Combining physiology with context helps move beyond self-report alone.",
    difficulty: "medium",
    tags: ["2026", "education", "physiology"],
    notesRef: "Education Applications",
  },

  // ── Week 2: Theories and Models of Emotion ──
  {
    id: "w2q1",
    week: 2,
    topic: "Definition of emotion",
    sourceType: "assignment",
    questionText:
      "According to Kleinginna and Kleinginna (1981), emotion involves complex interactions mediated primarily by which systems?",
    options: [
      { id: "a", text: "Neural and hormonal systems" },
      { id: "b", text: "Only skeletal muscle motor units" },
      { id: "c", text: "Only the immune system, with no neural involvement" },
      { id: "d", text: "Purely linguistic rules without bodily mediation" },
    ],
    correctAnswer: "a",
    explanation:
      "Their definitional work stresses that emotions are psychobiological phenomena coordinating brain, endocrine responses, and behavior. This framing motivates multimodal and physiological measurement in affective computing.",
    difficulty: "medium",
    tags: ["2026", "theory", "definition"],
    notesRef: "Emotion Definition",
  },
  {
    id: "w2q2",
    week: 2,
    topic: "James–Lange perspective",
    sourceType: "assignment",
    questionText:
      "William James (1894) famously argued that we experience emotion largely because of bodily changes—often paraphrased as:",
    options: [
      { id: "a", text: "We are afraid because we run (bodily responses precede/found emotion)" },
      { id: "b", text: "Emotions are always chosen consciously before any bodily response" },
      { id: "c", text: "Emotions are exclusively linguistic constructions with no bodily basis" },
      { id: "d", text: "Running never influences fear; cognition is the only cause" },
    ],
    correctAnswer: "a",
    explanation:
      "James’s view ties emotional feeling to interoception of visceral and motor responses. For affective computing, it motivates sensing physiology and expression as windows into emotional experience.",
    difficulty: "easy",
    tags: ["2026", "James-Lange", "theory"],
    notesRef: "Emotion Generation",
  },
  {
    id: "w2q3",
    week: 2,
    topic: "Bidirectional emotion–behavior links",
    sourceType: "assignment",
    questionText:
      "Strack et al. (1988) showed that facial muscle configurations (e.g., holding a pencil in the teeth vs. lips) can influence emotional experience, supporting which idea?",
    options: [
      { id: "a", text: "Emotion and expressive behavior can influence each other bidirectionally" },
      { id: "b", text: "Facial muscles cannot affect mood under any circumstances" },
      { id: "c", text: "Self-report is always invalid in psychology experiments" },
      { id: "d", text: "Only pharmacology can change emotional states" },
    ],
    correctAnswer: "a",
    explanation:
      "This line of work challenges strictly top-down views by showing motor expression feeds back into affect. Interfaces that shape posture and expression may therefore influence users’ feelings.",
    difficulty: "medium",
    tags: ["2026", "embodiment", "feedback"],
    notesRef: "Bidirectional Projections",
  },
  {
    id: "w2q4",
    week: 2,
    topic: "PAD / VAD model",
    sourceType: "assignment",
    questionText:
      "Russell and Mehrabian’s (1977) PAD (or VAD) model represents affect along which three dimensions?",
    options: [
      { id: "a", text: "Pleasure (Valence), Arousal, and Dominance" },
      { id: "b", text: "Hue, Saturation, and Brightness" },
      { id: "c", text: "Precision, Accuracy, and Delay" },
      { id: "d", text: "Pitch, Loudness, and Formants only" },
    ],
    correctAnswer: "a",
    explanation:
      "PAD provides a compact continuous space for describing many emotional states. Dominance (control vs. submissiveness) is especially useful beyond pure valence–arousal descriptions.",
    difficulty: "easy",
    tags: ["2026", "PAD", "dimensional-model"],
    notesRef: "Dimensional Models — PAD",
  },
  {
    id: "w2q5",
    week: 2,
    topic: "Circumplex model",
    sourceType: "assignment",
    questionText:
      "Russell’s circumplex model of affect typically emphasizes valence and arousal. Which dimension is commonly omitted compared with full PAD space?",
    options: [
      { id: "a", text: "Dominance" },
      { id: "b", text: "Arousal" },
      { id: "c", text: "Valence" },
      { id: "d", text: "All three dimensions are equally central in the circumplex" },
    ],
    correctAnswer: "a",
    explanation:
      "The circumplex plots affective labels in a circular structure spanned by pleasantness and activation. Dropping dominance simplifies visualization but can blur distinctions that PAD captures.",
    difficulty: "medium",
    tags: ["2026", "circumplex", "dimensional-model"],
    notesRef: "Dimensional Models — PAD",
  },
  {
    id: "w2q6",
    week: 2,
    topic: "Dominance dimension",
    sourceType: "assignment",
    questionText:
      "Why is the Dominance (D) dimension useful when distinguishing emotions with similar valence and arousal?",
    options: [
      {
        id: "a",
        text: "It separates submissive fear-like states from controlling anger-like states",
      },
      { id: "b", text: "It replaces the need for any physiological measurement" },
      { id: "c", text: "It makes valence and arousal unnecessary" },
      { id: "d", text: "It only distinguishes colors, not emotions" },
    ],
    correctAnswer: "a",
    explanation:
      "Fear and anger can both be unpleasant and high-arousal, yet differ in control/submission. Dominance encodes that interpersonal stance dimension missing from a pure valence–arousal plane.",
    difficulty: "medium",
    tags: ["2026", "PAD", "emotion-distinctions"],
    notesRef: "Advantage of Dominance (D)",
  },
  {
    id: "w2q7",
    week: 2,
    topic: "Ekman’s basic emotions",
    sourceType: "assignment",
    questionText:
      "Ekman’s work on universally recognized facial expressions commonly lists how many basic emotions?",
    options: [
      { id: "a", text: "Six (e.g., happiness, sadness, anger, fear, disgust, surprise)" },
      { id: "b", text: "Two (only happy and sad)" },
      { id: "c", text: "Exactly twenty-six basic emotions with no overlap" },
      { id: "d", text: "Zero; Ekman argued faces carry no reliable information" },
    ],
    correctAnswer: "a",
    explanation:
      "The six basic-emotion proposal connects to prototypical facial configurations (AUs) used heavily in FACS-based recognition. It is a categorical anchor, though real expressions are often blends.",
    difficulty: "easy",
    tags: ["2026", "Ekman", "categorical-model"],
    notesRef: "Categorical Model",
  },
  {
    id: "w2q8",
    week: 2,
    topic: "Categorical vs dimensional models",
    sourceType: "assignment",
    questionText:
      "Which comparison best captures categorical versus dimensional emotion models?",
    options: [
      {
        id: "a",
        text: "Categorical models use discrete labels; dimensional models represent affect as coordinates in continuous spaces",
      },
      { id: "b", text: "Dimensional models forbid any numerical measurement" },
      { id: "c", text: "Categorical models always require EEG; dimensional models require only text" },
      { id: "d", text: "They are identical in practice" },
    ],
    correctAnswer: "a",
    explanation:
      "Discrete classes simplify annotation and some classifiers, while continuous spaces capture gradations and mixed states. Many systems map between them (e.g., regress valence/arousal then threshold).",
    difficulty: "easy",
    tags: ["2026", "models", "comparison"],
    notesRef: "Emotion Models",
  },
  {
    id: "w2q9",
    week: 2,
    topic: "Challenges in affective computing",
    sourceType: "assignment",
    questionText:
      "Which pair reflects recurring challenges for traditional affective computing systems discussed in course materials?",
    options: [
      {
        id: "a",
        text: "Distinguishing brief emergency emotions from longer process emotions; personalization across users",
      },
      { id: "b", text: "Eliminating all sensors; relying on random number generators" },
      { id: "c", text: "Ensuring every user has identical resting heart rate" },
      { id: "d", text: "Banning dimensional models worldwide" },
    ],
    correctAnswer: "a",
    explanation:
      "Temporal dynamics and individual baselines complicate detection and adaptation. Systems must handle both acute spikes and evolving moods, and tune to user context rather than one-size-fits-all rules.",
    difficulty: "hard",
    tags: ["2026", "challenges", "personalization"],
    notesRef: "Problems in Traditional AC",
  },
  {
    id: "w2q10",
    week: 2,
    topic: "Perceived vs induced emotions",
    sourceType: "assignment",
    questionText:
      "Gabrielsson (2002) distinguishes emotions perceived in music from emotions induced in the listener. What is the key difference?",
    options: [
      {
        id: "a",
        text: "Perceived emotion is what the music expresses; induced emotion is what the listener actually feels",
      },
      { id: "b", text: "They are always identical by definition" },
      { id: "c", text: "Perceived emotion only applies to paintings, never music" },
      { id: "d", text: "Induced emotion is measured only with thermometers" },
    ],
    correctAnswer: "a",
    explanation:
      "A stimulus can sound sad yet uplift a listener, so modeling affect requires clarity about whose emotion is labeled—the artifact’s expressed affect or the user’s felt state.",
    difficulty: "medium",
    tags: ["2026", "music", "annotation"],
    notesRef: "Emotion Models",
  },

  // ── Week 3: Emotion Elicitation and Datasets ──
  {
    id: "w3q1",
    week: 3,
    topic: "Expression datasets",
    sourceType: "assignment",
    questionText:
      "Which trio commonly classifies emotional expression datasets in affective computing?",
    options: [
      { id: "a", text: "Acted/posed, naturalistic/spontaneous, and induced/elicited" },
      { id: "b", text: "JPEG, PNG, and GIF only" },
      { id: "c", text: "Train, validation, and test splits exclusively" },
      { id: "d", text: "Monday, Wednesday, Friday collections" },
    ],
    correctAnswer: "a",
    explanation:
      "Each type trades off control, realism, and ethical constraints. Acted data is cleaner but may differ from spontaneous expressions; naturalistic data is realistic but noisy.",
    difficulty: "easy",
    tags: ["2026", "datasets", "elicitation"],
    notesRef: "Dataset Types",
  },
  {
    id: "w3q2",
    week: 3,
    topic: "Elicitation methods",
    sourceType: "assignment",
    questionText:
      "Passive elicitation differs from active elicitation mainly in that passive methods:",
    options: [
      {
        id: "a",
        text: "Observe naturally occurring affect without instructing participants to perform specific expressions",
      },
      { id: "b", text: "Always require actors to pose exaggerated faces" },
      { id: "c", text: "Cannot be used in field studies" },
      { id: "d", text: "Guarantee ground-truth labels without annotation" },
    ],
    correctAnswer: "a",
    explanation:
      "Active methods prompt or stage experiences to evoke target states; passive methods capture everyday affect but complicate labeling. Hybrid designs are common in practice.",
    difficulty: "medium",
    tags: ["2026", "elicitation", "methods"],
    notesRef: "Elicitation Methods",
  },
  {
    id: "w3q3",
    week: 3,
    topic: "IAPS",
    sourceType: "assignment",
    questionText:
      "The International Affective Picture System (IAPS) is best described as:",
    options: [
      { id: "a", text: "A standardized set of images widely used to elicit and study emotional responses" },
      { id: "b", text: "A speech corpus of emotional actors" },
      { id: "c", text: "A database of only neutral gray textures" },
      { id: "d", text: "A protocol for fMRI coil design" },
    ],
    correctAnswer: "a",
    explanation:
      "IAPS provides normed stimuli with known affective tendencies, supporting controlled experiments. Researchers must follow usage agreements because some images are sensitive.",
    difficulty: "easy",
    tags: ["2026", "IAPS", "images"],
    notesRef: "Passive — Images",
  },
  {
    id: "w3q4",
    week: 3,
    topic: "Film vs images",
    sourceType: "assignment",
    questionText:
      "A common advantage of short film clips over static images for emotion elicitation is that film can:",
    options: [
      {
        id: "a",
        text: "Provide richer narrative context, temporal dynamics, and multimodal cues (audio + video)",
      },
      { id: "b", text: "Guarantee participants never feel anything" },
      { id: "c", text: "Eliminate the need for informed consent" },
      { id: "d", text: "Remove individual differences entirely" },
    ],
    correctAnswer: "a",
    explanation:
      "Narrative and audiovisual dynamics evoke sustained engagement and nuanced emotions. The trade-off is longer stimuli, copyright constraints, and more complex annotation.",
    difficulty: "easy",
    tags: ["2026", "film", "elicitation"],
    notesRef: "Passive — Film Clips",
  },
  {
    id: "w3q5",
    week: 3,
    topic: "Directed Facial Action Task",
    sourceType: "assignment",
    questionText:
      "The Directed Facial Action Task (Ekman et al., 2007) is used to:",
    options: [
      {
        id: "a",
        text: "Instruct participants to move specific facial muscles to produce target expressions",
      },
      { id: "b", text: "Measure typing speed during emotional writing" },
      { id: "c", text: "Train classifiers without any labeled data" },
      { id: "d", text: "Record only spontaneous laughter in comedy clubs" },
    ],
    correctAnswer: "a",
    explanation:
      "By systematically activating muscle groups, researchers study expression generation and link configurations to emotion categories. It complements recognition studies using posed exemplars.",
    difficulty: "medium",
    tags: ["2026", "FACS", "experiment"],
    notesRef: "Active — Behavioral Manipulation",
  },
  {
    id: "w3q6",
    week: 3,
    topic: "IRB",
    sourceType: "assignment",
    questionText:
      "An Institutional Review Board (IRB) primarily exists to:",
    options: [
      {
        id: "a",
        text: "Review human-subjects research for ethical protection, risk minimization, and informed consent",
      },
      { id: "b", text: "Approve only engineering hardware patents" },
      { id: "c", text: "Grade student assignments in universities" },
      { id: "d", text: "Set global internet routing policies" },
    ],
    correctAnswer: "a",
    explanation:
      "Affective studies often collect sensitive video, voice, or physiology; IRB oversight ensures privacy safeguards and voluntary participation. Compliance is foundational to responsible science.",
    difficulty: "easy",
    tags: ["2026", "ethics", "IRB"],
    notesRef: "IRB (Human Subjects Ethics)",
  },
  {
    id: "w3q7",
    week: 3,
    topic: "SAM",
    sourceType: "assignment",
    questionText:
      "Self-Assessment Manikins (SAM) are typically used to collect ratings of:",
    options: [
      { id: "a", text: "Pleasure, arousal, and dominance (or related affective dimensions)" },
      { id: "b", text: "Only screen resolution in pixels" },
      { id: "c", text: "Network bandwidth during experiments" },
      { id: "d", text: "CPU temperature of the stimulus computer" },
    ],
    correctAnswer: "a",
    explanation:
      "SAM offers quick pictorial scales that transcend language barriers somewhat. They are common ground-truth complements to physiological measures in elicitation studies.",
    difficulty: "easy",
    tags: ["2026", "SAM", "annotation"],
    notesRef: "R&D Tools",
  },
  {
    id: "w3q8",
    week: 3,
    topic: "PsychoPy",
    sourceType: "assignment",
    questionText:
      "PsychoPy is best categorized as:",
    options: [
      { id: "a", text: "A software tool for building and running psychology experiments and collecting responses" },
      { id: "b", text: "A deep neural network for speech synthesis" },
      { id: "c", text: "A wearable EDA sensor brand" },
      { id: "d", text: "A file format for EEG storage only" },
    ],
    correctAnswer: "a",
    explanation:
      "Tools like PsychoPy help standardize stimulus timing, randomization, and response logging—critical for reproducible affect elicitation protocols.",
    difficulty: "easy",
    tags: ["2026", "tools", "experiment"],
    notesRef: "R&D Tools",
  },
  {
    id: "w3q9",
    week: 3,
    topic: "Social interaction elicitation",
    sourceType: "assignment",
    questionText:
      "A key advantage of social interaction paradigms for emotion elicitation is that they:",
    options: [
      {
        id: "a",
        text: "Evoke ecologically valid interpersonal affect with rich verbal and nonverbal cues",
      },
      { id: "b", text: "Guarantee perfectly stationary signals with no movement" },
      { id: "c", text: "Eliminate the need for synchronized recordings" },
      { id: "d", text: "Always produce only one discrete emotion label" },
    ],
    correctAnswer: "a",
    explanation:
      "Face-to-face interaction mirrors real-world affective communication but increases variability and privacy concerns. Multimodal capture and careful study design are essential.",
    difficulty: "medium",
    tags: ["2026", "social", "elicitation"],
    notesRef: "Active — Social Interaction",
  },
  {
    id: "w3q10",
    week: 3,
    topic: "R&D tools",
    sourceType: "assignment",
    questionText:
      "Categories of research and development tools in affective computing commonly include:",
    options: [
      {
        id: "a",
        text: "Stimulus presentation, sensing hardware, annotation software, and machine learning toolkits",
      },
      { id: "b", text: "Only spreadsheet programs from the 1980s" },
      { id: "c", text: "Only mechanical typewriters" },
      { id: "d", text: "Only cloud billing dashboards" },
    ],
    correctAnswer: "a",
    explanation:
      "End-to-end affective computing research chains stimulus control, signal acquisition, labeling, and modeling. Tool choice impacts validity, throughput, and reproducibility.",
    difficulty: "medium",
    tags: ["2026", "tools", "pipeline"],
    notesRef: "R&D Tools",
  },

  // ── Week 4: Facial Expression Recognition ──
  {
    id: "w4q1",
    week: 4,
    topic: "FACS origins",
    sourceType: "assignment",
    questionText: "The Facial Action Coding System (FACS) was developed by:",
    options: [
      { id: "a", text: "Paul Ekman and Wallace V. Friesen" },
      { id: "b", text: "Alan Turing and Claude Shannon" },
      { id: "c", text: "Ivan Pavlov alone" },
      { id: "d", text: "Ada Lovelace and Charles Babbage" },
    ],
    correctAnswer: "a",
    explanation:
      "FACS decomposes facial behavior into action units (AUs) with rules for intensity and combinations. It remains a gold-standard basis for interpretable facial affect analysis.",
    difficulty: "easy",
    tags: ["2026", "FACS", "history"],
    notesRef: "FACS",
  },
  {
    id: "w4q2",
    week: 4,
    topic: "Macro vs micro expressions",
    sourceType: "assignment",
    questionText: "Which statement best contrasts macro-expressions with micro-expressions?",
    options: [
      {
        id: "a",
        text: "Macro-expressions last longer and can be voluntary; micro-expressions are very brief and often involuntary leakage",
      },
      { id: "b", text: "Micro-expressions always last several seconds" },
      { id: "c", text: "Macro-expressions cannot be photographed" },
      { id: "d", text: "They are identical terms" },
    ],
    correctAnswer: "a",
    explanation:
      "Micro-expressions are challenging for both humans and algorithms due to short duration and subtle motion. Detection often requires high frame-rate video and careful modeling.",
    difficulty: "medium",
    tags: ["2026", "micro-expression", "FER"],
    notesRef: "Macro vs Micro Expressions",
  },
  {
    id: "w4q3",
    week: 4,
    topic: "Conventional FER pipeline",
    sourceType: "assignment",
    questionText: "A conventional facial expression recognition pipeline typically includes which three major stages?",
    options: [
      { id: "a", text: "Face detection, feature extraction, and classification" },
      { id: "b", text: "Keyboard logging, DNS lookup, and printing" },
      { id: "c", text: "Only data augmentation without any model" },
      { id: "d", text: "Audio denoising, beamforming, and ASR only" },
    ],
    correctAnswer: "a",
    explanation:
      "Classical pipelines localize the face, derive geometric or appearance features, then map them to emotion categories or dimensions. Deep learning often merges feature extraction and classification.",
    difficulty: "easy",
    tags: ["2026", "FER", "pipeline"],
    notesRef: "Conventional FER Pipeline",
  },
  {
    id: "w4q4",
    week: 4,
    topic: "Geometric vs appearance features",
    sourceType: "assignment",
    questionText: "In FER feature design, geometric features primarily capture ___, whereas appearance features capture ___.",
    options: [
      {
        id: "a",
        text: "Landmark positions/shape deformation; texture and skin pattern changes around facial regions",
      },
      { id: "b", text: "Only microphone loudness; only room reverberation" },
      { id: "c", text: "Only text sentiment; only syntax trees" },
      { id: "d", text: "GPS speed; barometric pressure" },
    ],
    correctAnswer: "a",
    explanation:
      "Geometry tracks structure; appearance captures fine wrinkles and pigment changes. Many systems combine both or learn them implicitly with convolutional networks.",
    difficulty: "medium",
    tags: ["2026", "features", "FER"],
    notesRef: "Feature Extraction",
  },
  {
    id: "w4q5",
    week: 4,
    topic: "AU6 vs AU7",
    sourceType: "assignment",
    questionText:
      "Both AU6 (cheek raiser) and AU7 (lid tightener) can narrow the eye region. A key distinction is:",
    options: [
      {
        id: "a",
        text: "AU6 typically produces lateral crow’s-feet wrinkles; AU7 tightens the eyelids without that cheek-driven wrinkling pattern",
      },
      { id: "b", text: "AU6 and AU7 always produce identical skin motion" },
      { id: "c", text: "AU7 only moves the ears" },
      { id: "d", text: "AU6 only affects the chin" },
    ],
    correctAnswer: "a",
    explanation:
      "Distinguishing neighboring AUs matters for interpretability and for disambiguating smiles of enjoyment (often AU6) from strained expressions.",
    difficulty: "hard",
    tags: ["2026", "FACS", "AU"],
    notesRef: "Feature Extraction",
  },
  {
    id: "w4q6",
    week: 4,
    topic: "CK+ dataset",
    sourceType: "assignment",
    questionText: "The Extended Cohn–Kanade (CK+) dataset is widely used because it provides:",
    options: [
      {
        id: "a",
        text: "Posed facial expressions with AU labels and emotion labels for many sequences",
      },
      { id: "b", text: "Only silent speech audio" },
      { id: "c", text: "Only night-time infrared satellite imagery" },
      { id: "d", text: "Only unlabeled random web selfies without consent metadata" },
    ],
    correctAnswer: "a",
    explanation:
      "CK+ supports supervised learning and AU-based analysis with controlled lab conditions. Researchers still must attend to posed-vs-spontaneous generalization gaps.",
    difficulty: "medium",
    tags: ["2026", "datasets", "CK+"],
    notesRef: "FER Databases",
  },
  {
    id: "w4q7",
    week: 4,
    topic: "Deep learning FER",
    sourceType: "assignment",
    questionText:
      "A major advantage of deep learning for FER is that it can:",
    options: [
      {
        id: "a",
        text: "Learn end-to-end representations, reducing reliance on hand-crafted face-physics models in some settings",
      },
      { id: "b", text: "Eliminate the need for any training data" },
      { id: "c", text: "Guarantee perfect performance under all illuminations without augmentation" },
      { id: "d", text: "Remove all ethical concerns automatically" },
    ],
    correctAnswer: "a",
    explanation:
      "CNNs and related architectures can discover task-relevant filters from data, though they still benefit from good datasets, augmentation, and domain adaptation for robustness.",
    difficulty: "medium",
    tags: ["2026", "deep-learning", "FER"],
    notesRef: "Deep Learning FER",
  },
  {
    id: "w4q8",
    week: 4,
    topic: "ExpressEar",
    sourceType: "assignment",
    questionText:
      "The ExpressEar line of work is notable for exploring facial expression recognition using:",
    options: [
      { id: "a", text: "Earable/wearable sensors (e.g., in-ear devices) as part of the sensing stack" },
      { id: "b", text: "Only satellite altimetry" },
      { id: "c", text: "Only paper questionnaires with no sensors" },
      { id: "d", text: "Only desktop CRT monitors from the 1990s" },
    ],
    correctAnswer: "a",
    explanation:
      "Wearable form factors motivate new constraints and opportunities: proximity to speech, motion, and physiology alongside face imaging in mobile contexts.",
    difficulty: "medium",
    tags: ["2026", "wearables", "FER"],
    notesRef: "ExpressEar",
  },
  {
    id: "w4q9",
    week: 4,
    topic: "Static vs dynamic FER",
    sourceType: "assignment",
    questionText:
      "Compared with static (single-frame) FER, dynamic FER typically:",
    options: [
      {
        id: "a",
        text: "Exploits temporal patterns in facial motion and transitions across frames",
      },
      { id: "b", text: "Ignores all temporal information by definition" },
      { id: "c", text: "Cannot use neural networks" },
      { id: "d", text: "Is always worse regardless of context" },
    ],
    correctAnswer: "a",
    explanation:
      "Expressions evolve over time; temporal models (RNNs, 3D CNNs, transformers) can capture onset/offset dynamics that single snapshots miss.",
    difficulty: "easy",
    tags: ["2026", "temporal", "FER"],
    notesRef: "Static vs Dynamic FER",
  },
  {
    id: "w4q10",
    week: 4,
    topic: "FER limitations",
    sourceType: "assignment",
    questionText:
      "Which factors are commonly cited limitations of real-world facial expression recognition?",
    options: [
      {
        id: "a",
        text: "Lighting variation, occlusion, pose changes, and large individual differences",
      },
      { id: "b", text: "Only the color of the web browser" },
      { id: "c", text: "Only the number of USB ports on a laptop" },
      { id: "d", text: "None; FER is solved perfectly in all environments" },
    ],
    correctAnswer: "a",
    explanation:
      "Robust FER requires handling partial faces, glasses, masks, uneven illumination, and cultural/display rules. Personal baselines also shift perceived expressiveness.",
    difficulty: "easy",
    tags: ["2026", "robustness", "FER"],
    notesRef: "Limitations & Ethics",
  },

  // ── Week 5: Speech Emotion Recognition ──
  {
    id: "w5q1",
    week: 5,
    topic: "Three factors in speech",
    sourceType: "assignment",
    questionText:
      "According to Borden et al. (1994), three interacting factors in spoken communication are:",
    options: [
      { id: "a", text: "What is said (linguistic content), how it is said (delivery), and who says it (speaker identity)" },
      { id: "b", text: "Only sampling rate, bit depth, and file size" },
      { id: "c", text: "Only Wi‑Fi frequency band, Bluetooth class, and USB version" },
      { id: "d", text: "Only punctuation in transcripts" },
    ],
    correctAnswer: "a",
    explanation:
      "Speech emotion recognition must disentangle semantics, prosody/timbre, and speaker traits—often via careful features, normalization, and sometimes speaker adaptation.",
    difficulty: "medium",
    tags: ["2026", "speech", "communication"],
    notesRef: "Difficulties",
  },
  {
    id: "w5q2",
    week: 5,
    topic: "Speech emotion databases",
    sourceType: "assignment",
    questionText:
      "Which grouping best matches common categories of speech emotion corpora?",
    options: [
      { id: "a", text: "Natural spontaneous speech, simulated/acted speech, and elicited/induced speech" },
      { id: "b", text: "Only MIDI files and sheet music" },
      { id: "c", text: "Only silent videos" },
      { id: "d", text: "Only encrypted archives with no audio" },
    ],
    correctAnswer: "a",
    explanation:
      "Each category differs in realism and label reliability. Spontaneous speech is authentic but noisy; acted speech is clean but may be stereotyped.",
    difficulty: "easy",
    tags: ["2026", "datasets", "speech"],
    notesRef: "Database Types",
  },
  {
    id: "w5q3",
    week: 5,
    topic: "Prosody features",
    sourceType: "assignment",
    questionText:
      "Classic prosodic features used in speech emotion recognition commonly include:",
    options: [
      { id: "a", text: "Fundamental frequency (F0), short-term energy, and speech rate/timing" },
      { id: "b", text: "Only JPEG compression quality" },
      { id: "c", text: "Only screen refresh rate" },
      { id: "d", text: "Only hard disk RPM" },
    ],
    correctAnswer: "a",
    explanation:
      "Prosody carries much of the emotional tone beyond words themselves. These features remain relevant even alongside deep embeddings learned from raw waveforms.",
    difficulty: "easy",
    tags: ["2026", "prosody", "features"],
    notesRef: "Common Prosody Features",
  },
  {
    id: "w5q4",
    week: 5,
    topic: "MFCCs",
    sourceType: "assignment",
    questionText:
      "Mel-frequency cepstral coefficients (MFCCs) primarily capture:",
    options: [
      {
        id: "a",
        text: "A compact spectral envelope representation aligned with human auditory perception",
      },
      { id: "b", text: "Only the speaker’s shoe size" },
      { id: "c", text: "Only GPS altitude" },
      { id: "d", text: "Only the font used in subtitles" },
    ],
    correctAnswer: "a",
    explanation:
      "MFCCs summarize short-time spectra on a mel scale, useful for timbre and phonetic content cues. They are a standard baseline for many audio classification pipelines.",
    difficulty: "medium",
    tags: ["2026", "MFCC", "spectral"],
    notesRef: "Acoustic Features",
  },
  {
    id: "w5q5",
    week: 5,
    topic: "Feature normalization",
    sourceType: "assignment",
    questionText:
      "Why can naive feature normalization sometimes harm speech emotion recognition?",
    options: [
      {
        id: "a",
        text: "It may remove speaker- or session-specific cues that partly encode emotional variability, hurting discrimination",
      },
      { id: "b", text: "Normalization is never used in speech processing" },
      { id: "c", text: "It always improves emotion accuracy with no trade-offs" },
      { id: "d", text: "It only affects image pixels, not audio" },
    ],
    correctAnswer: "a",
    explanation:
      "Normalization reduces unwanted variability but can also attenuate emotionally relevant dynamics. Iterative or context-aware normalization methods try to separate nuisance from affect.",
    difficulty: "hard",
    tags: ["2026", "normalization", "SER"],
    notesRef: "Feature Normalization",
  },
  {
    id: "w5q6",
    week: 5,
    topic: "Iterative Feature Normalization",
    sourceType: "assignment",
    questionText:
      "Iterative Feature Normalization (IFN; Busso et al., 2011) targets which problem?",
    options: [
      {
        id: "a",
        text: "Reducing session/speaker variability while preserving emotion-relevant variation through iterative estimation",
      },
      { id: "b", text: "Converting speech to MIDI melodies" },
      { id: "c", text: "Removing all prosody from speech" },
      { id: "d", text: "Encrypting audio files for storage only" },
    ],
    correctAnswer: "a",
    explanation:
      "SER systems often face mismatched train/test conditions; IFN-style approaches aim for more stable features across recording setups without stripping affect information.",
    difficulty: "hard",
    tags: ["2026", "IFN", "SER"],
    notesRef: "IFN — Iterative Feature Normalization",
  },
  {
    id: "w5q7",
    week: 5,
    topic: "Berlin EmoDB",
    sourceType: "assignment",
    questionText:
      "The Berlin Database of Emotional Speech (EmoDB) is characterized by:",
    options: [
      {
        id: "a",
        text: "Studio-recorded German utterances spoken by actors with discrete emotion labels (a classic acted corpus)",
      },
      { id: "b", text: "Only whale songs" },
      { id: "c", text: "Only traffic noise without speech" },
      { id: "d", text: "Only unlabeled podcasts" },
    ],
    correctAnswer: "a",
    explanation:
      "EmoDB is widely used as a benchmark, though acted data may not fully represent spontaneous emotion in the wild. Cross-corpus generalization remains an active research topic.",
    difficulty: "medium",
    tags: ["2026", "EmoDB", "datasets"],
    notesRef: "Existing Databases",
  },
  {
    id: "w5q8",
    week: 5,
    topic: "RAVDESS",
    sourceType: "assignment",
    questionText:
      "The RAVDESS dataset is known for providing:",
    options: [
      {
        id: "a",
        text: "Multimodal emotional speech and song clips with controlled lexical content across actors",
      },
      { id: "b", text: "Only grayscale face images without audio" },
      { id: "c", text: "Only text chat logs" },
      { id: "d", text: "Only EEG without any stimuli" },
    ],
    correctAnswer: "a",
    explanation:
      "RAVDESS supports multimodal research (face + voice) with systematic emotion categories and intensity levels. It is a common starter dataset for SER demos.",
    difficulty: "medium",
    tags: ["2026", "RAVDESS", "datasets"],
    notesRef: "Existing Databases",
  },
  {
    id: "w5q9",
    week: 5,
    topic: "Positive voice characteristics",
    sourceType: "assignment",
    questionText:
      "Kamiloğlu et al. (2020) synthesize evidence that emotionally positive vocal expressions often correlate with perceptual characteristics such as:",
    options: [
      { id: "a", text: "Higher perceived pleasantness and social engagement in voice quality and prosody" },
      { id: "b", text: "Guaranteed monotone pitch with zero energy variation" },
      { id: "c", text: "Only whispering regardless of valence" },
      { id: "d", text: "Only silent pauses with no phonation" },
    ],
    correctAnswer: "a",
    explanation:
      "Listeners integrate pitch, loudness, tempo, and timbre cues to infer positivity. Automatic systems should avoid overfitting to a single acoustic correlate.",
    difficulty: "medium",
    tags: ["2026", "valence", "voice"],
    notesRef: "Positive Voices",
  },
  {
    id: "w5q10",
    week: 5,
    topic: "SER limitations",
    sourceType: "assignment",
    questionText:
      "Which limitation is commonly acknowledged for speech emotion recognition?",
    options: [
      {
        id: "a",
        text: "Cultural/display rules, speaker variability, context dependence, and ambiguity between acoustically similar emotions",
      },
      { id: "b", text: "Speech contains no affective information" },
      { id: "c", text: "Emotions never change vocal fold vibration" },
      { id: "d", text: "SER requires no labeled data in any scenario" },
    ],
    correctAnswer: "a",
    explanation:
      "Similar prosody can map to different emotions depending on language, identity, and context. Robust SER needs diverse data and careful evaluation protocols.",
    difficulty: "medium",
    tags: ["2026", "limitations", "SER"],
    notesRef: "Limitations",
  },

  // ── Week 6: Text and Sentiment ──
  {
    id: "w6q1",
    week: 6,
    topic: "Typography and emotion",
    sourceType: "assignment",
    questionText:
      "Juni and Gross (2008) reported differences in emotional responses to typefaces such as Times New Roman versus Arial, supporting the idea that:",
    options: [
      { id: "a", text: "Typography can influence perceived personality traits and affective impressions of text" },
      { id: "b", text: "Fonts never affect readers emotionally" },
      { id: "c", text: "Only font size matters; typeface identity is irrelevant" },
      { id: "d", text: "Serif fonts cannot be read by humans" },
    ],
    correctAnswer: "a",
    explanation:
      "Even subtle design choices shape user experience and inferred tone. Affective interfaces should consider typographic variables alongside content.",
    difficulty: "medium",
    tags: ["2026", "typography", "HCI"],
    notesRef: "Typography & Emotion",
  },
  {
    id: "w6q2",
    week: 6,
    topic: "Good typography",
    sourceType: "assignment",
    questionText:
      "Larson and Picard (2005) link good typography to improved reader mood and higher ratings on which construct?",
    options: [
      { id: "a", text: "Reader subjective disposition (RSD), reflecting aesthetic–affective response to layout" },
      { id: "b", text: "Raw SQL database throughput" },
      { id: "c", text: "GPU floating-point peak performance" },
      { id: "d", text: "Keyboard switch actuation force only" },
    ],
    correctAnswer: "a",
    explanation:
      "Their work illustrates that presentation quality is not neutral—it can bias affect and engagement. This matters for educational and persuasive interfaces.",
    difficulty: "hard",
    tags: ["2026", "typography", "affect"],
    notesRef: "Aesthetics of Reading",
  },
  {
    id: "w6q3",
    week: 6,
    topic: "Fear vs anger in text",
    sourceType: "assignment",
    questionText:
      "In text-based affect analysis, fear-related language is often described as more ___, whereas anger-related language is more ___.",
    options: [
      { id: "a", text: "Passive and pessimistic; active and optimistic (in agency/stance)" },
      { id: "b", text: "Always joyful; always neutral" },
      { id: "c", text: "Identical in every linguistic feature" },
      { id: "d", text: "Unrelated to any lexical patterns" },
    ],
    correctAnswer: "a",
    explanation:
      "Lexical–semantic patterns differ by emotion family; fear may emphasize threat and helplessness while anger may emphasize blame and action tendencies.",
    difficulty: "medium",
    tags: ["2026", "NLP", "emotions"],
    notesRef: "Beyond Positive / Negative",
  },
  {
    id: "w6q4",
    week: 6,
    topic: "ANEW",
    sourceType: "assignment",
    questionText:
      "The ANEW resource provides affective norms for English words, commonly including ratings on:",
    options: [
      { id: "a", text: "Valence, arousal, and dominance (PAD-style ratings)" },
      { id: "b", text: "Only word length in millimeters" },
      { id: "c", text: "Only Scrabble point totals" },
      { id: "d", text: "Only ASCII checksums" },
    ],
    correctAnswer: "a",
    explanation:
      "ANEW supports stimulus selection and lexicon-based affect models grounded in human judgments. It connects language to dimensional affect theory.",
    difficulty: "easy",
    tags: ["2026", "ANEW", "lexicon"],
    notesRef: "Lexical Resources",
  },
  {
    id: "w6q5",
    week: 6,
    topic: "SentiWordNet",
    sourceType: "assignment",
    questionText:
      "SentiWordNet annotates WordNet synsets with:",
    options: [
      { id: "a", text: "Positive, negative, and objective polarity scores" },
      { id: "b", text: "Only binary prime numbers" },
      { id: "c", text: "Only phoneme durations" },
      { id: "d", text: "Only image bounding boxes" },
    ],
    correctAnswer: "a",
    explanation:
      "These continuous scores enable soft sentiment aggregation in NLP pipelines. Polysemy remains a challenge—context disambiguation is often needed.",
    difficulty: "medium",
    tags: ["2026", "SentiWordNet", "sentiment"],
    notesRef: "Lexical Resources",
  },
  {
    id: "w6q6",
    week: 6,
    topic: "NRC lexicon",
    sourceType: "assignment",
    questionText:
      "The NRC Word–Emotion Association Lexicon (EmoLex) provides associations between words and:",
    options: [
      { id: "a", text: "Eight basic emotions (plus valence/arousal in related resources), for thousands of terms" },
      { id: "b", text: "Only two letters of the alphabet" },
      { id: "c", text: "Only stock tickers" },
      { id: "d", text: "Only punctuation marks" },
    ],
    correctAnswer: "a",
    explanation:
      "EmoLex is widely used for lexicon-based emotion detection and for weakly supervised feature engineering. It complements dimensional resources like ANEW.",
    difficulty: "medium",
    tags: ["2026", "NRC", "lexicon"],
    notesRef: "Lexical Resources",
  },
  {
    id: "w6q7",
    week: 6,
    topic: "LIWC",
    sourceType: "assignment",
    questionText:
      "LIWC (Linguistic Inquiry and Word Count) is characterized by:",
    options: [
      {
        id: "a",
        text: "Dictionaries mapping thousands of words to many psychological and topical categories for text analysis",
      },
      { id: "b", text: "A single number describing monitor brightness" },
      { id: "c", text: "Only machine translation between two fixed languages" },
      { id: "d", text: "Only speech synthesis voices" },
    ],
    correctAnswer: "a",
    explanation:
      "LIWC enables interpretable features for affect, cognition, and social processes from text. It is used in psychology and HCI research extensively.",
    difficulty: "medium",
    tags: ["2026", "LIWC", "text-analysis"],
    notesRef: "Lexical Resources",
  },
  {
    id: "w6q8",
    week: 6,
    topic: "Implicit emotion challenges",
    sourceType: "assignment",
    questionText:
      "Why are implicit emotions and figurative language challenging for text-based affect detection?",
    options: [
      {
        id: "a",
        text: "Surface words may contradict intended affect (sarcasm, metaphor, cultural references)",
      },
      { id: "b", text: "They are always spelled using only the letter 'q'" },
      { id: "c", text: "They never occur in real text" },
      { id: "d", text: "They can be solved by counting nouns only" },
    ],
    correctAnswer: "a",
    explanation:
      "Lexicon lookup fails when sentiment is implied pragmatically. Contextual embeddings and discourse-aware models help but do not eliminate ambiguity.",
    difficulty: "medium",
    tags: ["2026", "NLP", "implicit-affect"],
    notesRef: "Complexity",
  },
  {
    id: "w6q9",
    week: 6,
    topic: "ISEAR",
    sourceType: "assignment",
    questionText:
      "The ISEAR database collected self-reported emotional experiences from about 3,000 respondents across:",
    options: [
      { id: "a", text: "Seven emotion categories (a cross-cultural self-report corpus)" },
      { id: "b", text: "Exactly one emotion only" },
      { id: "c", text: "Only animal sounds" },
      { id: "d", text: "Only binary chess moves" },
    ],
    correctAnswer: "a",
    explanation:
      "ISEAR supports research on situational antecedents and linguistic descriptions of emotion. It complements stimulus-driven lab datasets.",
    difficulty: "medium",
    tags: ["2026", "ISEAR", "datasets"],
    notesRef: "Databases",
  },
  {
    id: "w6q10",
    week: 6,
    topic: "Unsupervised similarity",
    sourceType: "assignment",
    questionText:
      "A simple unsupervised approach for relating texts in affective space uses word embeddings and:",
    options: [
      { id: "a", text: "Cosine similarity between averaged embedding vectors as a relatedness measure" },
      { id: "b", text: "Only Hamming distance on JPEG images" },
      { id: "c", text: "Only alphabetical sorting of characters" },
      { id: "d", text: "Only random coin flips" },
    ],
    correctAnswer: "a",
    explanation:
      "Mean word vectors provide a lightweight baseline for semantic/affective similarity, though they miss negation and compositionality without richer models.",
    difficulty: "easy",
    tags: ["2026", "embeddings", "similarity"],
    notesRef: "Unsupervised Recognition",
  },

  // ── Week 7: Physiological Sensing ──
  {
    id: "w7q1",
    week: 7,
    topic: "ANS and control",
    sourceType: "assignment",
    questionText:
      "Many physiological signals used in affective computing arise from autonomic nervous system (ANS) activity. A key implication is that:",
    options: [
      {
        id: "a",
        text: "They are not fully under conscious control, enabling implicit affect measurement",
      },
      { id: "b", text: "They can be perfectly volitionally suppressed at will in all situations" },
      { id: "c", text: "They never change with emotional state" },
      { id: "d", text: "They are unrelated to emotion research" },
    ],
    correctAnswer: "a",
    explanation:
      "ANS-mediated responses (HR, EDA, pupil changes) can leak arousal even when people attempt to hide facial expressions. This supports implicit sensing but raises privacy considerations.",
    difficulty: "easy",
    tags: ["2026", "ANS", "physiology"],
    notesRef: "Physiological Signals",
  },
  {
    id: "w7q2",
    week: 7,
    topic: "ECG vs PPG",
    sourceType: "assignment",
    questionText:
      "Compared with ECG (electrical cardiac activity), PPG (optical plethysmography) typically:",
    options: [
      {
        id: "a",
        text: "Is easier to wear on the wrist/finger but can be more motion-sensitive for heart rate estimation",
      },
      { id: "b", text: "Requires invasive blood draws every minute" },
      { id: "c", text: "Measures brain waves directly" },
      { id: "d", text: "Cannot estimate pulse rate under any condition" },
    ],
    correctAnswer: "a",
    explanation:
      "ECG offers cleaner timing landmarks for some analyses; PPG trades signal purity for convenience in wearables. Preprocessing and motion rejection are critical for both.",
    difficulty: "medium",
    tags: ["2026", "ECG", "PPG"],
    notesRef: "Heart Rate",
  },
  {
    id: "w7q3",
    week: 7,
    topic: "HRV",
    sourceType: "assignment",
    questionText:
      "Heart rate variability (HRV) broadly reflects:",
    options: [
      {
        id: "a",
        text: "Beat-to-beat timing variation modulated by autonomic balance; often lower under stress and higher with relaxation (context-dependent)",
      },
      { id: "b", text: "A constant inter-beat interval with zero variation always" },
      { id: "c", text: "Only the maximum heart rate achievable in a sprint" },
      { id: "d", text: "Only respiratory rate measured with a spirometer" },
    ],
    correctAnswer: "a",
    explanation:
      "HRV is a popular stress/recovery marker but must be interpreted with posture, breathing, and artifacts in mind. It complements mean HR for affect inference.",
    difficulty: "medium",
    tags: ["2026", "HRV", "stress"],
    notesRef: "HRV",
  },
  {
    id: "w7q4",
    week: 7,
    topic: "RMSSD",
    sourceType: "assignment",
    questionText:
      "RMSSD is a common time-domain HRV measure computed from:",
    options: [
      {
        id: "a",
        text: "Successive differences between normal-to-normal (NN) beat intervals (root mean square of successive differences)",
      },
      { id: "b", text: "The average RGB value of a face image" },
      { id: "c", text: "The loudness of speech in decibels" },
      { id: "d", text: "The number of words in a sentence" },
    ],
    correctAnswer: "a",
    explanation:
      "RMSSD is often associated with parasympathetic influence in many settings. It is one of several HRV metrics used in affective and health sensing.",
    difficulty: "hard",
    tags: ["2026", "HRV", "RMSSD"],
    notesRef: "HRV",
  },
  {
    id: "w7q5",
    week: 7,
    topic: "Arousal ambiguity",
    sourceType: "assignment",
    questionText:
      "ECG/PPG-derived arousal indices mainly reflect sympathetic/parasympathetic activation. A known limitation is that they:",
    options: [
      {
        id: "a",
        text: "Cannot by themselves always distinguish positive high arousal (e.g., excitement) from negative high arousal (e.g., anxiety)",
      },
      { id: "b", text: "Always identify exact emotion categories without error" },
      { id: "c", text: "Are unaffected by movement artifacts" },
      { id: "d", text: "Measure valence directly from blood pressure alone" },
    ],
    correctAnswer: "a",
    explanation:
      "Physiology tracks intensity of activation well; valence disambiguation often needs context, multimodal cues, or self-report. This motivates fusion with face/voice/text.",
    difficulty: "medium",
    tags: ["2026", "physiology", "valence"],
    notesRef: "HR Limitations",
  },
  {
    id: "w7q6",
    week: 7,
    topic: "GSR / EDA history",
    sourceType: "assignment",
    questionText:
      "Galvanic skin response (GSR), also called electrodermal activity (EDA), has a long history in psychophysiology. Carl Jung reportedly used early galvanometric methods to explore:",
    options: [
      { id: "a", text: "Word association responses linked to emotional arousal" },
      { id: "b", text: "GPU ray-tracing performance" },
      { id: "c", text: "Satellite orbital mechanics" },
      { id: "d", text: "Compiler optimization flags" },
    ],
    correctAnswer: "a",
    explanation:
      "EDA indexes eccrine sweat changes driven by sympathetic arousal. Modern affective computing uses it in wearables for engagement and stress analytics.",
    difficulty: "medium",
    tags: ["2026", "EDA", "history"],
    notesRef: "Skin Conductance (GSR / EDA)",
  },
  {
    id: "w7q7",
    week: 7,
    topic: "SCL vs SCR",
    sourceType: "assignment",
    questionText:
      "In EDA/GSR, tonic skin conductance level (SCL) differs from phasic skin conductance responses (SCR) in that:",
    options: [
      {
        id: "a",
        text: "SCL reflects slower-changing baseline arousal; SCRs are rapid transient peaks to discrete events",
      },
      { id: "b", text: "SCR is the baseline; SCL is always zero" },
      { id: "c", text: "They are identical measurements with different names" },
      { id: "d", text: "SCL only measures temperature, not conductance" },
    ],
    correctAnswer: "a",
    explanation:
      "Decomposing tonic vs phasic components helps separate sustained stress from event-related responses. Feature extraction should align with this structure.",
    difficulty: "medium",
    tags: ["2026", "EDA", "signal-processing"],
    notesRef: "SCL vs SCR",
  },
  {
    id: "w7q8",
    week: 7,
    topic: "GSR features",
    sourceType: "assignment",
    questionText:
      "Some studies report that MFCC-like spectral features derived from the EDA phasic component can outperform classic SCR peak features for certain classification tasks because:",
    options: [
      {
        id: "a",
        text: "They can capture richer temporal shape information in the phasic waveform beyond simple peak counts",
      },
      { id: "b", text: "EDA is actually an audio signal only" },
      { id: "c", text: "SCR peaks contain no information" },
      { id: "d", text: "MFCCs remove all physiological meaning by definition" },
    ],
    correctAnswer: "a",
    explanation:
      "Treating biosignals with time–frequency representations can reveal patterns missed by hand-crafted peaks, though preprocessing and validation remain important.",
    difficulty: "hard",
    tags: ["2026", "EDA", "features"],
    notesRef: "GSR Features",
  },
  {
    id: "w7q9",
    week: 7,
    topic: "EEG 10–20 system",
    sourceType: "assignment",
    questionText:
      "In the international 10–20 EEG electrode placement system, labels like Fz, Cz, and Pz refer to:",
    options: [
      { id: "a", text: "Standardized scalp positions along anterior–posterior and lateral dimensions" },
      { id: "b", text: "USB port IDs on a motherboard" },
      { id: "c", text: "Stock market indices" },
      { id: "d", text: "JPEG compression modes" },
    ],
    correctAnswer: "a",
    explanation:
      "Consistent electrode locations enable reproducible EEG research. Affective computing often focuses on frontal and asymmetry features linked to motivation and valence.",
    difficulty: "easy",
    tags: ["2026", "EEG", "10-20"],
    notesRef: "10–20 System",
  },
  {
    id: "w7q10",
    week: 7,
    topic: "Frontal alpha asymmetry",
    sourceType: "assignment",
    questionText:
      "Frontal alpha asymmetry (FAA) is commonly interpreted (with caveats) such that relatively greater left frontal alpha (i.e., lower left cortical activity in the alpha band) is associated with:",
    options: [
      {
        id: "a",
        text: "Approach motivation tendencies, whereas relatively greater right frontal alpha relates more to withdrawal/avoidance tendencies",
      },
      { id: "b", text: "No relationship to emotion whatsoever" },
      { id: "c", text: "Direct measurement of skin conductance without EEG" },
      { id: "d", text: "Guaranteed diagnosis of clinical depression from one second of data" },
    ],
    correctAnswer: "a",
    explanation:
      "Alpha power is often inversely related to underlying cortical activation in regions of interest. FAA effects are context-sensitive and should not be over-interpreted without controls.",
    difficulty: "hard",
    tags: ["2026", "EEG", "FAA"],
    notesRef: "FAA — Frontal Alpha Asymmetry",
  },

  // ── Week 8: Multimodal Fusion ──
  {
    id: "w8q1",
    week: 8,
    topic: "Motivation for multimodal AC",
    sourceType: "assignment",
    questionText:
      "Multimodal affective computing is motivated because multiple channels provide:",
    options: [
      {
        id: "a",
        text: "Redundant information for robustness and complementary information for disambiguation",
      },
      { id: "b", text: "No benefit compared with a single modality" },
      { id: "c", text: "Guaranteed elimination of all labeling costs" },
      { id: "d", text: "Only redundancy with zero unique information" },
    ],
    correctAnswer: "a",
    explanation:
      "When one modality fails (low light, noisy mic), others may still carry affect cues. Fusion methods aim to exploit both agreement and specialization.",
    difficulty: "easy",
    tags: ["2026", "multimodal", "fusion"],
    notesRef: "Motivation",
  },
  {
    id: "w8q2",
    week: 8,
    topic: "Multimodal challenges",
    sourceType: "assignment",
    questionText:
      "Common challenges in multimodal affect recognition include:",
    options: [
      {
        id: "a",
        text: "Designing effective fusion strategies, collecting synchronized multimodal corpora, and achieving gains that can be modest relative to added complexity",
      },
      { id: "b", text: "The fact that all sensors always sample at identical rates without alignment issues" },
      { id: "c", text: "That video never carries affective cues" },
      { id: "d", text: "That audio cannot convey arousal" },
    ],
    correctAnswer: "a",
    explanation:
      "Synchronization, missing modalities, and overfitting to dataset-specific correlations make multimodal learning nontrivial. Careful baselines and ablations are essential.",
    difficulty: "medium",
    tags: ["2026", "multimodal", "challenges"],
    notesRef: "Motivation",
  },
  {
    id: "w8q3",
    week: 8,
    topic: "Early fusion",
    sourceType: "assignment",
    questionText:
      "Early fusion in multimodal classification typically means:",
    options: [
      { id: "a", text: "Concatenating or jointly embedding features from modalities before a classifier" },
      { id: "b", text: "Training a separate model per modality and averaging human guesses" },
      { id: "c", text: "Discarding all modalities except text" },
      { id: "d", text: "Fusing only after deployment on the server logs" },
    ],
    correctAnswer: "a",
    explanation:
      "Early fusion learns joint representations but may struggle if modalities are misaligned or missing. Regularization and masking strategies help.",
    difficulty: "easy",
    tags: ["2026", "early-fusion"],
    notesRef: "Fusion Types",
  },
  {
    id: "w8q4",
    week: 8,
    topic: "Late fusion",
    sourceType: "assignment",
    questionText:
      "Late fusion generally refers to:",
    options: [
      {
        id: "a",
        text: "Training separate modality-specific classifiers and combining their outputs (e.g., voting, stacking, learned fusion)",
      },
      { id: "b", text: "Deleting all labels before training" },
      { id: "c", text: "Using only one convolution filter globally" },
      { id: "d", text: "Converting all inputs to MIDI" },
    ],
    correctAnswer: "a",
    explanation:
      "Late fusion handles missing modalities flexibly and can be simpler to engineer, but may miss low-level cross-modal interactions captured by joint models.",
    difficulty: "easy",
    tags: ["2026", "late-fusion"],
    notesRef: "Fusion Types",
  },
  {
    id: "w8q5",
    week: 8,
    topic: "Slow fusion",
    sourceType: "assignment",
    questionText:
      "‘Slow fusion’ architectures in multimodal deep learning often aim to:",
    options: [
      {
        id: "a",
        text: "Model hierarchical temporal interactions and cross-modal correlations while relaxing strict frame-level synchronization",
      },
      { id: "b", text: "Run inference as slowly as possible regardless of accuracy" },
      { id: "c", text: "Disable learning in all layers" },
      { id: "d", text: "Use only one video frame forever" },
    ],
    correctAnswer: "a",
    explanation:
      "Different modalities may need different receptive fields; slow fusion integrates information across time scales to align audio, video, and physiology.",
    difficulty: "hard",
    tags: ["2026", "slow-fusion", "deep-learning"],
    notesRef: "Fusion Types",
  },
  {
    id: "w8q6",
    week: 8,
    topic: "SEMAINE",
    sourceType: "assignment",
    questionText:
      "The SEMAINE corpus is known for interactive sessions with four character-driven agent personalities named:",
    options: [
      { id: "a", text: "Prudence, Poppy, Spike, and Obadiah" },
      { id: "b", text: "Alice, Bob, Carol, and Dave only" },
      { id: "c", text: "Alpha, Beta, Gamma, Delta as GPU codenames" },
      { id: "d", text: "January, February, March, April" },
    ],
    correctAnswer: "a",
    explanation:
      "SEMAINE supports research on continuous affect and social signals in dyadic interaction with distinct interaction styles. It is a landmark resource for audiovisual affect.",
    difficulty: "medium",
    tags: ["2026", "SEMAINE", "datasets"],
    notesRef: "SEMAINE",
  },
  {
    id: "w8q7",
    week: 8,
    topic: "AVEC dimensions",
    sourceType: "assignment",
    questionText:
      "The Audio/Visual Emotion Challenge (AVEC) has used continuous affect dimensions including:",
    options: [
      { id: "a", text: "Arousal, valence, and related constructs such as dominance/power and expectation (challenge-year dependent)" },
      { id: "b", text: "Only the number of pixels in a JPEG header" },
      { id: "c", text: "Only Wi‑Fi RSSI" },
      { id: "d", text: "Only disk free space" },
    ],
    correctAnswer: "a",
    explanation:
      "AVEC popularized continuous prediction of affect from multimodal signals in the wild. Exact label sets evolved across years, but arousal/valence remain central.",
    difficulty: "medium",
    tags: ["2026", "AVEC", "continuous-affect"],
    notesRef: "AVEC Challenge",
  },
  {
    id: "w8q8",
    week: 8,
    topic: "Modality strengths",
    sourceType: "assignment",
    questionText:
      "In many multimodal affect studies, audio tends to be particularly informative for estimating:",
    options: [
      { id: "a", text: "Arousal/activation-related variation (prosody and intensity cues)" },
      { id: "b", text: "Exact street addresses from silent video" },
      { id: "c", text: "CPU temperature" },
      { id: "d", text: "Database primary keys" },
    ],
    correctAnswer: "a",
    explanation:
      "Prosodic energy and pitch dynamics track activation strongly; valence may require lexical content or facial cues. Fusion leverages these tendencies.",
    difficulty: "easy",
    tags: ["2026", "audio", "arousal"],
    notesRef: "Representative Results (Illustrative)",
  },
  {
    id: "w8q9",
    week: 8,
    topic: "Sampling rates",
    sourceType: "assignment",
    questionText:
      "A practical challenge in multimodal recording is that sensors may have different sampling rates (e.g., video at 25 fps, GSR at 16 Hz, EEG at 128 Hz). This primarily affects:",
    options: [
      { id: "a", text: "Time alignment, resampling, windowing, and label assignment across streams" },
      { id: "b", text: "Nothing; all streams are inherently synchronized without processing" },
      { id: "c", text: "Only the color of LEDs on the camera" },
      { id: "d", text: "Only file compression ratios" },
    ],
    correctAnswer: "a",
    explanation:
      "Misalignment can hurt fusion and create label noise for frame-level supervision. Interpolation, nearest-neighbor alignment, or continuous-time modeling are common fixes.",
    difficulty: "medium",
    tags: ["2026", "synchronization", "signals"],
    notesRef: "Feature Extraction",
  },
  {
    id: "w8q10",
    week: 8,
    topic: "CFS feature selection",
    sourceType: "assignment",
    questionText:
      "Correlation-based feature selection (CFS) and related methods can improve multimodal video/affect pipelines by:",
    options: [
      {
        id: "a",
        text: "Selecting features predictive of the target while reducing redundancy among correlated inputs",
      },
      { id: "b", text: "Randomly duplicating all features without evaluation" },
      { id: "c", text: "Removing labels from the dataset" },
      { id: "d", text: "Forcing all modalities to identical byte length" },
    ],
    correctAnswer: "a",
    explanation:
      "High-dimensional multimodal spaces overfit easily; principled selection can stabilize learning and sometimes yield significant gains on video-heavy feature sets.",
    difficulty: "hard",
    tags: ["2026", "feature-selection", "CFS"],
    notesRef: "Representative Results (Illustrative)",
  },

  // ── Week 9: Empathy and Social Agents ──
  {
    id: "w9q1",
    week: 9,
    topic: "Empathy definition",
    sourceType: "assignment",
    questionText:
      "Empathy in human–agent interaction is important because it supports:",
    options: [
      {
        id: "a",
        text: "User trust, rapport, and more appropriate responses to affective user states",
      },
      { id: "b", text: "Faster CPU clock speeds only" },
      { id: "c", text: "Eliminating all need for natural language" },
      { id: "d", text: "Guaranteed task completion without sensing" },
    ],
    correctAnswer: "a",
    explanation:
      "Empathetic behaviors can regulate frustration and improve learning outcomes, but must be authentic enough to help without manipulative pretense.",
    difficulty: "easy",
    tags: ["2026", "empathy", "agents"],
    notesRef: "Empathy & Agents",
  },
  {
    id: "w9q2",
    week: 9,
    topic: "Anthropomorphism",
    sourceType: "assignment",
    questionText:
      "Anthropomorphism refers to:",
    options: [
      {
        id: "a",
        text: "Attributing human-like traits, intentions, or emotions to non-human agents or objects",
      },
      { id: "b", text: "Measuring only CPU utilization" },
      { id: "c", text: "A technique for lossless image compression" },
      { id: "d", text: "A database normalization form" },
    ],
    correctAnswer: "a",
    explanation:
      "Anthropomorphism can increase engagement but also create misplaced trust or ethical concerns if users believe systems have human understanding they lack.",
    difficulty: "easy",
    tags: ["2026", "anthropomorphism", "HCI"],
    notesRef: "Empathy & Agents",
  },
  {
    id: "w9q3",
    week: 9,
    topic: "Uncanny valley",
    sourceType: "assignment",
    questionText:
      "The ‘uncanny valley’ describes:",
    options: [
      {
        id: "a",
        text: "A dip in likability when humanlike agents look almost—but not quite—human, evoking unease",
      },
      { id: "b", text: "A peak in enjoyment for all robots regardless of appearance" },
      { id: "c", text: "A GPU thermal throttling curve only" },
      { id: "d", text: "A legal requirement for chatbots" },
    ],
    correctAnswer: "a",
    explanation:
      "Near-human realism raises expectations for subtle social cues; small errors become salient. Designers balance abstraction vs realism deliberately.",
    difficulty: "easy",
    tags: ["2026", "uncanny-valley", "avatars"],
    notesRef: "Empathy & Agents",
  },
  {
    id: "w9q4",
    week: 9,
    topic: "Types of empathetic agents",
    sourceType: "assignment",
    questionText:
      "Paiva et al. (2017) discuss empathetic agents along dimensions that commonly include:",
    options: [
      {
        id: "a",
        text: "Distinctions such as cognitive vs affective empathy strands in computational systems (and related agent roles)",
      },
      { id: "b", text: "Only whether the agent uses IPv4 vs IPv6" },
      { id: "c", text: "Only the programming language used for builds" },
      { id: "d", text: "Only screen pixel density" },
    ],
    correctAnswer: "a",
    explanation:
      "Computational empathy often separates understanding another’s perspective and feelings from resonant emotional responses, each requiring different models and sensors.",
    difficulty: "hard",
    tags: ["2026", "empathy", "taxonomy"],
    notesRef: "Types of Empathetic Agents",
  },
  {
    id: "w9q5",
    week: 9,
    topic: "Empathy subprocesses",
    sourceType: "assignment",
    questionText:
      "Bo Xia et al. (2016) describe empathy as involving subprocesses such as:",
    options: [
      {
        id: "a",
        text: "Emotional simulation, perspective taking, and emotion regulation",
      },
      { id: "b", text: "Disk defragmentation, RAID rebuild, and backups" },
      { id: "c", text: "JPEG quantization tables only" },
      { id: "d", text: "TCP slow start, congestion avoidance, and fast retransmit only" },
    ],
    correctAnswer: "a",
    explanation:
      "These components map onto sensing, modeling others’ mental states, and controlling one’s own affective responses—useful decompositions for agent architectures.",
    difficulty: "medium",
    tags: ["2026", "empathy", "model"],
    notesRef: "Artificial Empathy",
  },
  {
    id: "w9q6",
    week: 9,
    topic: "Computational empathy model",
    sourceType: "assignment",
    questionText:
      "Boukricha (2011) proposes a computational empathy model that commonly progresses through stages like:",
    options: [
      {
        id: "a",
        text: "Emotion recognition in others, emotion generation in the agent, and empathic expression selection",
      },
      { id: "b", text: "Formatting a hard drive, installing an OS, and rebooting" },
      { id: "c", text: "Sorting arrays with bubble sort only" },
      { id: "d", text: "Rendering triangles in a GPU pipeline only" },
    ],
    correctAnswer: "a",
    explanation:
      "Empathic interaction loops require perceiving user affect, updating internal affective state, and choosing socially appropriate responses.",
    difficulty: "medium",
    tags: ["2026", "empathy", "architecture"],
    notesRef: "Empathy Simulation",
  },
  {
    id: "w9q7",
    week: 9,
    topic: "CARE framework",
    sourceType: "assignment",
    questionText:
      "The CARE framework (McQuiggan & Lester, 2007) focuses on modeling:",
    options: [
      {
        id: "a",
        text: "Learner affect and pedagogical decision-making in empathetic learning environments",
      },
      { id: "b", text: "Compiler register allocation only" },
      { id: "c", text: "DNS caching policies only" },
      { id: "d", text: "JPEG chroma subsampling only" },
    ],
    correctAnswer: "a",
    explanation:
      "CARE exemplifies how affect-aware tutoring systems integrate user emotion into policy selection for supportive behaviors.",
    difficulty: "medium",
    tags: ["2026", "CARE", "tutoring"],
    notesRef: "Empathy Simulation",
  },
  {
    id: "w9q8",
    week: 9,
    topic: "Affective AutoTutor",
    sourceType: "assignment",
    questionText:
      "Affective AutoTutor is an example of:",
    options: [
      {
        id: "a",
        text: "An intelligent tutoring system that detects and responds to student affect to improve learning interactions",
      },
      { id: "b", text: "A drone flight controller" },
      { id: "c", text: "A spreadsheet program" },
      { id: "d", text: "A file compression utility" },
    ],
    correctAnswer: "a",
    explanation:
      "It connects multimodal sensing (speech, dialogue, sometimes face) with pedagogical strategies aimed at confusion, frustration, and engagement.",
    difficulty: "easy",
    tags: ["2026", "AutoTutor", "education"],
    notesRef: "Empathy Simulation",
  },
  {
    id: "w9q9",
    week: 9,
    topic: "Theory of Mind",
    sourceType: "assignment",
    questionText:
      "In cognitive science, Theory of Mind (ToM) is often probed with tasks like:",
    options: [
      {
        id: "a",
        text: "False-belief tests where an agent must infer another person’s mistaken belief about the world",
      },
      { id: "b", text: "Measuring monitor refresh rate" },
      { id: "c", text: "Sorting floating-point numbers by mantissa only" },
      { id: "d", text: "Checking disk SMART statistics" },
    ],
    correctAnswer: "a",
    explanation:
      "Social agents with ToM-like capabilities can reason about user intentions and misconceptions—harder than raw emotion classification alone.",
    difficulty: "medium",
    tags: ["2026", "ToM", "cognition"],
    notesRef: "Theory of Mind",
  },
  {
    id: "w9q10",
    week: 9,
    topic: "Evaluating empathy",
    sourceType: "assignment",
    questionText:
      "Evaluation challenges for empathetic agents include:",
    options: [
      {
        id: "a",
        text: "Lack of universal agreement on metrics and the difficulty of mapping to psychological benchmarks of empathy",
      },
      { id: "b", text: "The fact that empathy can be measured perfectly with one yes/no question always" },
      { id: "c", text: "That user self-report is never useful" },
      { id: "d", text: "That behavior cannot be logged" },
    ],
    correctAnswer: "a",
    explanation:
      "Empathy is multifaceted and context-sensitive; evaluations combine subjective ratings, behavioral outcomes, and longitudinal effects—not just accuracy.",
    difficulty: "medium",
    tags: ["2026", "evaluation", "empathy"],
    notesRef: "Evaluation",
  },

  // ── Week 10: Affect-Aware Learning and Games ──
  {
    id: "w10q1",
    week: 10,
    topic: "Affective states in learning",
    sourceType: "assignment",
    questionText:
      "Major affective states frequently studied in technology-enhanced learning include:",
    options: [
      {
        id: "a",
        text: "Engagement, boredom, confusion, curiosity, happiness, and frustration (among others)",
      },
      { id: "b", text: "Only ‘neutral’ and nothing else" },
      { id: "c", text: "Only GPU fan speeds" },
      { id: "d", text: "Only file system inode counts" },
    ],
    correctAnswer: "a",
    explanation:
      "These states connect to learning mechanisms: confusion can precede insight; frustration may signal misalignment. Systems aim to detect and scaffold appropriately.",
    difficulty: "easy",
    tags: ["2026", "learning", "affect"],
    notesRef: "Affect-Aware Learning",
  },
  {
    id: "w10q2",
    week: 10,
    topic: "Affective AutoTutor fusion",
    sourceType: "assignment",
    questionText:
      "Affective AutoTutor commonly detects states such as boredom, confusion, frustration, and neutral using:",
    options: [
      {
        id: "a",
        text: "Multiple information sources with decision-level fusion combining classifier outputs",
      },
      { id: "b", text: "Only a single pixel brightness value" },
      { id: "c", text: "Only the system clock" },
      { id: "d", text: "Random labels independent of sensors" },
    ],
    correctAnswer: "a",
    explanation:
      "Decision-level fusion integrates heterogeneous cues conservatively and interpretably, fitting tutoring systems where transparency and robustness matter.",
    difficulty: "medium",
    tags: ["2026", "AutoTutor", "fusion"],
    notesRef: "Affective AutoTutor",
  },
  {
    id: "w10q3",
    week: 10,
    topic: "GazeTutor",
    sourceType: "assignment",
    questionText:
      "GazeTutor primarily uses eye-gaze tracking to:",
    options: [
      {
        id: "a",
        text: "Monitor attention and deictic references during tutoring so the system can adapt prompts and feedback",
      },
      { id: "b", text: "Measure Wi‑Fi signal strength" },
      { id: "c", text: "Compute prime numbers" },
      { id: "d", text: "Render photorealistic oceans" },
    ],
    correctAnswer: "a",
    explanation:
      "Gaze reveals what learners attend to versus what they ignore, supporting interventions when attention wanders or misconceptions persist.",
    difficulty: "medium",
    tags: ["2026", "gaze", "tutoring"],
    notesRef: "GazeTutor",
  },
  {
    id: "w10q4",
    week: 10,
    topic: "NeverMind",
    sourceType: "assignment",
    questionText:
      "The NeverMind game illustrates affect-aware design by:",
    options: [
      {
        id: "a",
        text: "Sensing facial expressions and adapting difficulty based on sensed stress/affect",
      },
      { id: "b", text: "Ignoring user state completely" },
      { id: "c", text: "Using only keyboard LEDs for input" },
      { id: "d", text: "Requiring blood tests between levels" },
    ],
    correctAnswer: "a",
    explanation:
      "Games provide closed-loop environments where affect signals can directly modulate challenge, supporting both engagement and emotion research.",
    difficulty: "medium",
    tags: ["2026", "games", "adaptation"],
    notesRef: "NeverMind",
  },
  {
    id: "w10q5",
    week: 10,
    topic: "Affective loop",
    sourceType: "assignment",
    questionText:
      "The ‘affective loop’ in games is commonly described as:",
    options: [
      { id: "a", text: "Express → detect → adapt (cycle of player expression, system sensing, and mechanic adaptation)" },
      { id: "b", text: "Compile → link → execute only" },
      { id: "c", text: "Fetch → decode → execute only" },
      { id: "d", text: "Encrypt → transmit → decrypt only" },
    ],
    correctAnswer: "a",
    explanation:
      "Closing the loop couples player emotion to game dynamics, creating personalized pacing and narrative beats.",
    difficulty: "easy",
    tags: ["2026", "games", "loop"],
    notesRef: "Affective Loop",
  },
  {
    id: "w10q6",
    week: 10,
    topic: "Sensor approaches",
    sourceType: "assignment",
    questionText:
      "A common taxonomy for affect sensing in learning contexts contrasts:",
    options: [
      {
        id: "a",
        text: "Sensor-based, sensorless (behavioral signals only), and ‘sensor-lite’ hybrid approaches",
      },
      { id: "b", text: "Only analog vs digital watches" },
      { id: "c", text: "Only CRT vs LCD displays" },
      { id: "d", text: "Only IPv4 vs IPv6 networking" },
    ],
    correctAnswer: "a",
    explanation:
      "Sensorless methods scale cheaply (logs, keystrokes) while physiological sensing can be more invasive. Hybrids balance cost and signal quality.",
    difficulty: "medium",
    tags: ["2026", "sensing", "taxonomy"],
    notesRef: "Sensor Approach",
  },
  {
    id: "w10q7",
    week: 10,
    topic: "Sensorless: keystrokes",
    sourceType: "assignment",
    questionText:
      "Bixler and D’Mello (2013) show that sensor-free affect detection can leverage:",
    options: [
      {
        id: "a",
        text: "Keystroke and interaction dynamics during learning tasks as proxies for affective states",
      },
      { id: "b", text: "Only satellite GPS for emotion" },
      { id: "c", text: "Only microphone arrays in concert halls" },
      { id: "d", text: "Only manual facial paint" },
    ],
    correctAnswer: "a",
    explanation:
      "Low-level interaction patterns can correlate with engagement and confusion without cameras, improving deployability but risking privacy trade-offs in logging.",
    difficulty: "medium",
    tags: ["2026", "keystroke", "sensorless"],
    notesRef: "Sensorless",
  },
  {
    id: "w10q8",
    week: 10,
    topic: "Adaptation levels",
    sourceType: "assignment",
    questionText:
      "In affect-aware systems, adaptation levels (e.g., 0–4) typically represent:",
    options: [
      {
        id: "a",
        text: "Gradations of how strongly the system changes content, scaffolding, or pacing based on sensed affect",
      },
      { id: "b", text: "GPU shader model versions only" },
      { id: "c", text: "TCP port numbers only" },
      { id: "d", text: "Screen resolutions only" },
    ],
    correctAnswer: "a",
    explanation:
      "Graded interventions prevent overreacting to noisy affect estimates and help designers study dose–response effects on learning.",
    difficulty: "medium",
    tags: ["2026", "adaptation", "policy"],
    notesRef: "Adaptation Levels",
  },
  {
    id: "w10q9",
    week: 10,
    topic: "Open issues",
    sourceType: "assignment",
    questionText:
      "Open issues in affect-aware learning technologies commonly include:",
    options: [
      {
        id: "a",
        text: "Recognition accuracy, adaptive policy design, and scalability across contexts and populations",
      },
      { id: "b", text: "That learning never involves affect" },
      { id: "c", text: "That sensors are illegal worldwide" },
      { id: "d", text: "That personalization is impossible mathematically" },
    ],
    correctAnswer: "a",
    explanation:
      "Deployable systems must generalize across classrooms, devices, and cultures while maintaining user agency and ethical safeguards.",
    difficulty: "easy",
    tags: ["2026", "challenges", "learning"],
    notesRef: "Open Issues",
  },
  {
    id: "w10q10",
    week: 10,
    topic: "Sensors and Moore’s Law",
    sourceType: "assignment",
    questionText:
      "Advances in sensor technology (often discussed alongside trends like Moore’s Law) matter for affective computing because they:",
    options: [
      {
        id: "a",
        text: "Enable cheaper, smaller, and more continuous sensing in real-world settings",
      },
      { id: "b", text: "Guarantee perfect emotion recognition without algorithms" },
      { id: "c", text: "Eliminate all privacy concerns automatically" },
      { id: "d", text: "Make physiological signals irrelevant" },
    ],
    correctAnswer: "a",
    explanation:
      "Hardware progress expands where and how we can collect multimodal data, but algorithmic and ethical challenges remain central.",
    difficulty: "easy",
    tags: ["2026", "hardware", "sensors"],
    notesRef: "Sensorlite",
  },

  // ── Week 11: Emotionally Aware Virtual Assistants (EVA) ──
  {
    id: "w11q1",
    week: 11,
    topic: "EVA use cases",
    sourceType: "assignment",
    questionText:
      "Emotionally aware virtual assistants (EVAs) are discussed for domains such as:",
    options: [
      {
        id: "a",
        text: "Mental health support, customer service, education, entertainment, and workplace assistance",
      },
      { id: "b", text: "Only brick manufacturing quality control" },
      { id: "c", text: "Only deep-sea submarine navigation" },
      { id: "d", text: "Only compiling C++ codebases" },
    ],
    correctAnswer: "a",
    explanation:
      "EVAs aim to adapt tone, strategy, and escalation paths using inferred affect—where mistakes can harm vulnerable users, so safeguards matter.",
    difficulty: "easy",
    tags: ["2026", "EVA", "applications"],
    notesRef: "Use Cases",
  },
  {
    id: "w11q2",
    week: 11,
    topic: "EVA challenges",
    sourceType: "assignment",
    questionText:
      "Practical challenges for EVAs include:",
    options: [
      {
        id: "a",
        text: "Accuracy, real-time processing, multilingual coverage, bias, and privacy",
      },
      { id: "b", text: "Only choosing a font family" },
      { id: "c", text: "Only monitor refresh rate selection" },
      { id: "d", text: "None; EVAs are trivially solved" },
    ],
    correctAnswer: "a",
    explanation:
      "Emotion recognition errors disproportionately affect marginalized groups if datasets are biased; latency matters for conversational flow.",
    difficulty: "easy",
    tags: ["2026", "EVA", "challenges"],
    notesRef: "Challenges",
  },
  {
    id: "w11q3",
    week: 11,
    topic: "Requirements specification",
    sourceType: "assignment",
    questionText:
      "A requirements specification for an EVA should clarify:",
    options: [
      {
        id: "a",
        text: "Target users, use cases, modality constraints, performance targets, safety/escalation rules, and data governance",
      },
      { id: "b", text: "Only the brand color hex code" },
      { id: "c", text: "Only the CEO’s favorite emoji" },
      { id: "d", text: "Only compiler flags" },
    ],
    correctAnswer: "a",
    explanation:
      "Affective systems need explicit policies for failure modes (e.g., suicidal ideation) and for what signals may be collected/stored.",
    difficulty: "medium",
    tags: ["2026", "requirements", "EVA"],
    notesRef: "Requirements",
  },
  {
    id: "w11q4",
    week: 11,
    topic: "Speech emotion features",
    sourceType: "assignment",
    questionText:
      "Speech emotion recognition pipelines frequently extract:",
    options: [
      {
        id: "a",
        text: "MFCCs, prosody features, spectral features, and time-domain features (among others)",
      },
      { id: "b", text: "Only the filename extension" },
      { id: "c", text: "Only Wi‑Fi SSID strings" },
      { id: "d", text: "Only monitor EDID data" },
    ],
    correctAnswer: "a",
    explanation:
      "Combining spectral and prosodic cues helps capture timbre and dynamics. Deep models may learn representations directly from spectrograms or waveforms.",
    difficulty: "easy",
    tags: ["2026", "SER", "features"],
    notesRef: "Features",
  },
  {
    id: "w11q5",
    week: 11,
    topic: "Feature selection",
    sourceType: "assignment",
    questionText:
      "Common feature selection/dimensionality reduction methods used in ML pipelines include:",
    options: [
      { id: "a", text: "PCA, LDA, mutual information, and recursive feature elimination (RFE)" },
      { id: "b", text: "Only bubble sort on filenames" },
      { id: "c", text: "Only gzip compression ratio" },
      { id: "d", text: "Only counting words in README files" },
    ],
    correctAnswer: "a",
    explanation:
      "Reducing irrelevant features can improve generalization and runtime—especially important for embedded deployment on constrained devices.",
    difficulty: "medium",
    tags: ["2026", "feature-selection", "ML"],
    notesRef: "Features",
  },
  {
    id: "w11q6",
    week: 11,
    topic: "ML lifecycle",
    sourceType: "assignment",
    questionText:
      "A machine learning lifecycle for an EVA typically includes:",
    options: [
      {
        id: "a",
        text: "Data collection, labeling, training, validation, deployment, monitoring, and retraining",
      },
      { id: "b", text: "Only writing HTML" },
      { id: "c", text: "Only printing ‘Hello world’" },
      { id: "d", text: "Only buying a domain name" },
    ],
    correctAnswer: "a",
    explanation:
      "Production affect systems drift as users and microphones change; monitoring for bias and accuracy decay is part of responsible operations.",
    difficulty: "easy",
    tags: ["2026", "MLOps", "lifecycle"],
    notesRef: "Model & Register",
  },
  {
    id: "w11q7",
    week: 11,
    topic: "Edge deployment",
    sourceType: "assignment",
    questionText:
      "Deploying lightweight models on devices like a Raspberry Pi often involves:",
    options: [
      {
        id: "a",
        text: "Frameworks such as TensorFlow Lite for efficient on-device inference",
      },
      { id: "b", text: "Running full training on every utterance with a 500-layer model only" },
      { id: "c", text: "Disabling all numerical computation" },
      { id: "d", text: "Storing all raw audio forever without compression" },
    ],
    correctAnswer: "a",
    explanation:
      "Edge deployment reduces latency and can keep raw audio local, but model compression and quantization trade accuracy for efficiency.",
    difficulty: "medium",
    tags: ["2026", "edge", "TensorFlow-Lite"],
    notesRef: "Deployment",
  },
  {
    id: "w11q8",
    week: 11,
    topic: "Training data sources",
    sourceType: "assignment",
    questionText:
      "Commonly referenced speech emotion corpora for training/benchmarking include:",
    options: [
      { id: "a", text: "Berlin EmoDB and RAVDESS (among many others)" },
      { id: "b", text: "Only silent .wav files containing zero signal" },
      { id: "c", text: "Only bird recordings labeled as human speech" },
      { id: "d", text: "Only encrypted binaries without audio decoding" },
    ],
    correctAnswer: "a",
    explanation:
      "Cross-dataset training and domain adaptation help, but label definitions and acting styles differ across corpora.",
    difficulty: "easy",
    tags: ["2026", "datasets", "SER"],
    notesRef: "Data",
  },
  {
    id: "w11q9",
    week: 11,
    topic: "EVA ethics",
    sourceType: "assignment",
    questionText:
      "Ethical concerns especially salient for EVAs include:",
    options: [
      {
        id: "a",
        text: "Privacy of sensitive voice and affect data; manipulation; bias; and unintended psychological consequences",
      },
      { id: "b", text: "Only the choice of IDE theme" },
      { id: "c", text: "Only CPU fan aesthetics" },
      { id: "d", text: "None; ethics does not apply to AI" },
    ],
    correctAnswer: "a",
    explanation:
      "EVAs can influence vulnerable users; transparency, opt-in sensing, and escalation to humans are critical safeguards.",
    difficulty: "easy",
    tags: ["2026", "ethics", "EVA"],
    notesRef: "Ethical Concerns",
  },
  {
    id: "w11q10",
    week: 11,
    topic: "Skeleton pipeline",
    sourceType: "assignment",
    questionText:
      "A typical EVA speech pipeline skeleton may follow the sequence:",
    options: [
      {
        id: "a",
        text: "Speech capture → language identification → emotion recognition → intent understanding → response planning → speech synthesis",
      },
      { id: "b", text: "Speech capture → immediate deletion → random noise playback only" },
      { id: "c", text: "Intent → emotion → speech capture reversed only" },
      { id: "d", text: "TTS → microphone unplugged → user guessing" },
    ],
    correctAnswer: "a",
    explanation:
      "Language ID precedes models trained per language; emotion can inform dialogue policy before generation. Actual systems add ASR, context tracking, and safety filters.",
    difficulty: "medium",
    tags: ["2026", "pipeline", "EVA"],
    notesRef: "Architecture",
  },

  // ── Week 12: Ethics and Societal Implications ──
  {
    id: "w12q1",
    week: 12,
    topic: "Picard (1997) consequences",
    sourceType: "assignment",
    questionText:
      "Picard (1997) argues that as computers become more emotionally capable, society should consider:",
    options: [
      {
        id: "a",
        text: "Consequences for human relationships, responsibility, and how we treat one another—not only technical feasibility",
      },
      { id: "b", text: "Only faster matrix multiplication" },
      { id: "c", text: "Only monitor bezel width" },
      { id: "d", text: "That ethics questions disappear automatically" },
    ],
    correctAnswer: "a",
    explanation:
      "Affective capabilities change incentives and social norms; foresight is part of responsible innovation.",
    difficulty: "easy",
    tags: ["2026", "ethics", "Picard"],
    notesRef: "Motivation",
  },
  {
    id: "w12q2",
    week: 12,
    topic: "Privacy of emotions",
    sourceType: "assignment",
    questionText:
      "Picard (2003) emphasizes that emotional information is often:",
    options: [
      {
        id: "a",
        text: "Personal and private, deserving strong protections when sensed by systems",
      },
      { id: "b", text: "Public like a billboard with no expectations" },
      { id: "c", text: "Meaningless for user wellbeing" },
      { id: "d", text: "Identical to a public IP address" },
    ],
    correctAnswer: "a",
    explanation:
      "Inferring inner states can reveal mental health, preferences, and vulnerabilities—raising consent and minimization obligations.",
    difficulty: "easy",
    tags: ["2026", "privacy", "Picard"],
    notesRef: "Core Ethical Concerns",
  },
  {
    id: "w12q3",
    week: 12,
    topic: "Emotional dependency",
    sourceType: "assignment",
    questionText:
      "Emotional dependency risks with ‘moral’ or caring agents include:",
    options: [
      {
        id: "a",
        text: "Users forming unhealthy reliance or attachment, especially if the system simulates care without genuine understanding",
      },
      { id: "b", text: "Guaranteed improved mental health in every case without oversight" },
      { id: "c", text: "No risks because agents are not interactive" },
      { id: "d", text: "Only hardware failures, never psychological effects" },
    ],
    correctAnswer: "a",
    explanation:
      "Designers should consider boundaries, referrals to human professionals, and avoiding exploitative engagement loops.",
    difficulty: "medium",
    tags: ["2026", "dependency", "ethics"],
    notesRef: "Core Ethical Concerns",
  },
  {
    id: "w12q4",
    week: 12,
    topic: "Emotional manipulation",
    sourceType: "assignment",
    questionText:
      "Ethical analysis of emotional manipulation by systems focuses on issues like:",
    options: [
      {
        id: "a",
        text: "Coercion, deception, vulnerability exploitation, and erosion of autonomy",
      },
      { id: "b", text: "Only improving click-through rates with no ethical dimension" },
      { id: "c", text: "Only RGB keyboard lighting" },
      { id: "d", text: "Only compiler warnings" },
    ],
    correctAnswer: "a",
    explanation:
      "Affective cues enable persuasion; ethical use aligns interventions with user goals and informed consent.",
    difficulty: "easy",
    tags: ["2026", "manipulation", "ethics"],
    notesRef: "Core Ethical Concerns",
  },
  {
    id: "w12q5",
    week: 12,
    topic: "Mobile privacy invasiveness",
    sourceType: "assignment",
    questionText:
      "Politou et al. (2017) highlight that mobile affective computing can be invasive because:",
    options: [
      {
        id: "a",
        text: "Phones continuously sense context-rich data that can infer sensitive emotional and behavioral traits",
      },
      { id: "b", text: "Phones contain no sensors" },
      { id: "c", text: "Mobile apps cannot access microphones" },
      { id: "d", text: "Continuous sensing is illegal everywhere" },
    ],
    correctAnswer: "a",
    explanation:
      "Permissive app ecosystems plus rich sensors increase surveillance risks; privacy engineering must be proactive.",
    difficulty: "medium",
    tags: ["2026", "privacy", "mobile"],
    notesRef: "Privacy Invasiveness",
  },
  {
    id: "w12q6",
    week: 12,
    topic: "Limits of crypto/anonymization",
    sourceType: "assignment",
    questionText:
      "Kapadia (2009) argues that existing approaches like cryptography and anonymization can be insufficient because:",
    options: [
      {
        id: "a",
        text: "They may not fully address re-identification and misuse risks in complex, longitudinal behavioral datasets",
      },
      { id: "b", text: "Encryption makes data larger by 1000× always" },
      { id: "c", text: "Anonymization is mathematically perfect in all cases" },
      { id: "d", text: "Privacy is only a UI theme" },
    ],
    correctAnswer: "a",
    explanation:
      "Strong crypto protects transmission/storage, but linkage attacks can deanonymize patterns unless governance and minimization accompany technology.",
    difficulty: "hard",
    tags: ["2026", "privacy", "anonymization"],
    notesRef: "Insufficiency of Existing Approaches",
  },
  {
    id: "w12q7",
    week: 12,
    topic: "No foolproof anonymization",
    sourceType: "assignment",
    questionText:
      "Sweeney (2013) cautions that:",
    options: [
      {
        id: "a",
        text: "There is no foolproof anonymization; re-identification risks remain in many published datasets",
      },
      { id: "b", text: "All datasets are guaranteed anonymous if filenames are hidden" },
      { id: "c", text: "Removing names always removes all risk" },
      { id: "d", text: "Quasi-identifiers never exist" },
    ],
    correctAnswer: "a",
    explanation:
      "Combinations of attributes can uniquely fingerprint individuals; affective timelines are especially identifying.",
    difficulty: "medium",
    tags: ["2026", "privacy", "re-identification"],
    notesRef: "Insufficiency of Existing Approaches",
  },
  {
    id: "w12q8",
    week: 12,
    topic: "Open issues for machine affect",
    sourceType: "assignment",
    questionText:
      "Open societal issues about giving machines affective capabilities include:",
    options: [
      {
        id: "a",
        text: "Authenticity, accountability, misuse, and how affect cues change trust and power dynamics",
      },
      { id: "b", text: "Only whether GPUs are painted red or green" },
      { id: "c", text: "There are no open issues" },
      { id: "d", text: "Only battery chemistry" },
    ],
    correctAnswer: "a",
    explanation:
      "Affective interfaces can persuade, soothe, or mislead; governance spans engineering, law, and norms.",
    difficulty: "medium",
    tags: ["2026", "society", "ethics"],
    notesRef: "Open Issues",
  },
  {
    id: "w12q9",
    week: 12,
    topic: "Deception",
    sourceType: "assignment",
    questionText:
      "A critique sometimes raised in affective computing ethics is that systems may inherently involve deception because:",
    options: [
      {
        id: "a",
        text: "They can simulate caring or understanding while lacking genuine experience or moral agency",
      },
      { id: "b", text: "They never display any emotional cues" },
      { id: "c", text: "They cannot produce speech" },
      { id: "d", text: "They are identical to human therapists in every way" },
    ],
    correctAnswer: "a",
    explanation:
      "Transparency about system limits and appropriate use-cases mitigates deceptive anthropomorphism.",
    difficulty: "medium",
    tags: ["2026", "deception", "ethics"],
    notesRef: "Open Issues",
  },
  {
    id: "w12q10",
    week: 12,
    topic: "Targeted advertising",
    sourceType: "assignment",
    questionText:
      "Ethical concerns about targeted advertising that leverages inferred emotional states include:",
    options: [
      {
        id: "a",
        text: "Exploiting vulnerable populations and manipulating affect to drive purchases or behaviors",
      },
      { id: "b", text: "There are no concerns if ads load quickly" },
      { id: "c", text: "Emotions cannot be inferred from behavior" },
      { id: "d", text: "Regulation is unnecessary because ads are neutral" },
    ],
    correctAnswer: "a",
    explanation:
      "Emotion-aware targeting can amplify harm; ethical marketing limits and user controls are debated actively.",
    difficulty: "easy",
    tags: ["2026", "advertising", "ethics"],
    notesRef: "Targeted Advertising",
  },
];
