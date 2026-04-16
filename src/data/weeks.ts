import { WeekStudyContent } from "@/lib/types";

export const weeks: WeekStudyContent[] = [
  {
    week: 1,
    title: "Fundamentals of Affective Computing",
    summary:
      "Rosalind Picard (1997) defined affective computing as the creation of and interaction with systems that sense, recognize, respond to, and influence human emotions. Applications fall into three broad types: detection (infer user affect), expression (convey perceived emotion via avatars or robots), and perception (systems designed to \"feel\" or model emotion). Sensing draws on facial activity, posture and gesture, hand tension, voice, text, and physiology (e.g., EDA, EEG). Representative applications span healthcare (SymTrend/Autism Track for Asperger/HFA; StartleMart and Virtual Vietnam/Iraq/Afghanistan for PTSD; Visharanti for stress), education (EngageMe skin conductance, Subtle Stone squeezable input, classroom monitoring in China), interview training (MACH), and social robotics (KISMET). UX is framed as how users feel about a product; usability is ease of use—participatory design (e.g., PICTIVE, Muller 1991), acceptance testing, and beta testing matter. Advanced UX and neuromarketing apply affective and neuroscience insights to marketing, often via web interaction. Ethics include emotional manipulation, privacy (emotions as personal data, Picard 2003), and risks of emotional dependency or codependence with systems.",
    keyConcepts: [
      "Picard (1997): sense, recognize, respond to, and influence emotions",
      "Three application families: Detection, Expression, Perception",
      "Modalities: face, posture/gesture, hand tension, speech, text, physiology (EDA, EEG)",
      "Cross-domain applications: healthcare, education, interview prep, social robots",
      "UX vs usability; participatory design and testing",
      "Neuromarketing and web-based affective UX",
      "Ethics: manipulation, privacy, dependency",
    ],
    importantTerms: {
      "Affective Computing (Picard 1997)":
        "Building and interacting with systems that sense, recognize, respond to, and influence emotions.",
      "Detection vs Expression vs Perception":
        "Detection infers user emotion; expression outputs affect (e.g., robot face); perception concerns systems that model or \"experience\" affect.",
      SymTrend:
        "Example system in healthcare contexts for individuals on the autism spectrum (Asperger/HFA) alongside related tools such as Autism Track.",
      "Virtual Vietnam/Iraq/Afghanistan":
        "VR exposure therapy contexts discussed for PTSD alongside StartleMart-style paradigms.",
      EngageMe:
        "Educational affective computing example using skin conductance to relate engagement to learning.",
      "PICTIVE (Muller 1991)":
        "Participatory design approach supporting collaborative low-fidelity prototyping with users.",
      "Neuromarketing (advanced UX)":
        "Applying neuroscience and affective signals to understand and influence consumer responses, often in web or interactive media.",
      "Emotional manipulation (ethics)":
        "Using sensed affect to steer decisions or behavior in ways users may not fully understand or consent to.",
    },
    commonConfusions: [
      "Detection (reading the user) is not the same as expression (showing emotion)—exam questions often contrast these.",
      "Usability (task efficiency) can be high while UX (felt experience) is poor, or vice versa.",
      "Privacy concerns apply strongly to affect because inferred emotion reveals sensitive mental states, not just clicks.",
    ],
  },
  {
    week: 2,
    title: "Theory of Emotion",
    summary:
      "Kleinginna & Kleinginna (1981) define emotion as complex interactions among subjective and objective factors mediated by neural and hormonal systems. William James (1894) argued we feel afraid because we run—bodily responses and feedback shape emotional experience. Bidirectional brain–body links include visceral efferent pathways and afferent feedback; examples include laughter yoga and the pencil-in-teeth study (Strack et al. 1988; follow-ups such as Levenson et al. 1990) on facial feedback. Gabrielsson (2002) distinguishes perceived versus induced emotions in music and experience. Categorical models (e.g., Ekman) list basic emotions—commonly including happiness, anger, disgust, sadness, fear or anxiety, surprise, plus contempt as a seventh—easy to label but weak on relationships between states. Dimensional models include PAD/VAD (Russell & Mehrabian, 1977): Pleasure, Arousal, Dominance; the circumplex omits Dominance, which helps separate fear (submissive) from anger (controlling) when valence–arousal overlap. Traditional AC faces emergency vs process emotions, computational cost, and personalization. Barrett (2012) emphasizes that identical facial actions can mean different emotions in different contexts. Core brain regions: PFC (experience and regulation; note right PFC linked to vulnerability, left PFC to approach including anger), amygdala (salience and fear/anxiety but also positive stimuli), anterior cingulate (selection), insula (interoception and feeling). Exam cues: fear—raised brows, wide eyes, reduced HRV, more SCR than anger; anger—lowered brows, pressed lips, left frontal activation, little HRV change; disgust—raised upper lip, wrinkled nose with skin-conductance patterns differing for core vs body-boundary disgust; sadness—inner brow raise, lip corners down; crying raises HR and SC, non-crying sadness can show reduced HR, HRV, and SC; happiness involves cheek/eye-region activity and smiling correlates with longevity (Abel & Kruger), with left PFC involvement. Coan et al. (2003): left frontal asymmetry often tracks positive engagement, except anger’s left bias. Don Norman’s three design levels: visceral (first impression), behavioral (task experience), reflective (meaning after use).",
    keyConcepts: [
      "Definition of emotion (Kleinginna & Kleinginna, 1981)",
      "James (1894): bodily responses and feedback in emotion",
      "Bidirectional brain–body pathways; facial feedback experiments",
      "Perceived vs induced emotions (Gabrielsson, 2002)",
      "Discrete (Ekman-style basics + contempt) vs dimensional (PAD/VAD, circumplex)",
      "Why Dominance matters: fear vs anger in VA vs VAD space",
      "Barrett (2012): context and specificity of emotion from similar expressions",
      "Neuroanatomy: PFC, amygdala, ACC, insula; asymmetry patterns",
      "Face–physiology patterns for fear, anger, disgust, sadness, happiness",
      "Norman: visceral, behavioral, reflective design",
    ],
    importantTerms: {
      PAD: "Pleasure–Arousal–Dominance dimensional model (Russell & Mehrabian, 1977).",
      VAD: "Same three dimensions as PAD; dominance separates approach/withdrawal control nuances.",
      Circumplex:
        "Valence–arousal circular layout; omits dominance, so some emotion pairs overlap in 2D that VAD separates.",
      "Perceived vs induced":
        "Perceived: emotion attributed to a stimulus; induced: emotion actually felt—important in media and AC evaluation.",
      Amygdala:
        "Salience and significance processing; central in fear/anxiety but not exclusively negative.",
      Insula: "Interoception and conscious feeling; bridges body state and emotion.",
      "Frontal asymmetry (Coan et al. 2003)":
        "Left frontal often linked to approach/positive engagement; anger is a key exception with left bias.",
      "Norman’s levels":
        "Visceral (look/feel), behavioral (interaction), reflective (identity/meaning).",
    },
    commonConfusions: [
      "James’s theory stresses body-to-brain direction; many students wrongly treat it as purely cognitive appraisal-first.",
      "Valence alone cannot separate fear from anger in 2D space—dominance (or appraisal) is needed.",
      "Left frontal activation is not always “happiness”—anger shows left frontal bias as approach motivation.",
      "Amygdala activation does not mean “bad emotion”; it responds to salient positive stimuli too.",
    ],
  },
  {
    week: 3,
    title: "Affect Elicitation & Experimental Methodology",
    summary:
      "Datasets differ by elicitation style: acted/posed (easy, lower ecological validity), naturalistic (realistic, harder to collect), and induced (intermediate). Elicitation can be passive/perception-based (watch or listen) or active/expression-based (perform or interact). Passive image protocols use standardized timing; IAPS and GAPED are classic resources—noninvasive and simple but often weak, short-lived, and not personalized. Passive film protocols use neutral baseline, emotional clip, then self-report—stronger intensity and richer emotions but issues of prior viewing and ecological validity. Active methods include the Directed Facial Action Task (Ekman et al. 2007) and autobiographical recall; range can be limited. Social interaction elicits difficult emotions (e.g., anger, guilt) more realistically. Human-subjects research requires IRB oversight: typical submissions include abstract, methods, consent, confidentiality plans, risk/benefit, recruitment materials, and instruments. IRB principles emphasize minimizing risk, equitable selection, informed consent, monitoring, privacy, and protections for vulnerable groups. R&D toolchains span collection (PsychoPy, OpenSesame, E-Prime), labeling (Geneva Emotion Wheel, SAM manikins, Feeltrace, ELAN), signal processing (Praat, openSMILE, EEGLAB, OpenCV, MediaPipe), mining (WEKA, AutoML, SPSS, SciPy), and expression generation (GRETA, Festival, ROS, SOAR).",
    keyConcepts: [
      "Acted vs naturalistic vs induced data",
      "Passive (perception) vs active (expression/interaction) elicitation",
      "Image-based elicitation: IAPS, GAPED; pros and cons",
      "Film-based elicitation: baseline → clip → self-assessment",
      "Directed Facial Action Task and recall-based methods",
      "Social interaction for strong, realistic emotions",
      "IRB documents and ethical criteria",
      "Tool categories: acquisition, annotation, processing, mining, expression",
    ],
    importantTerms: {
      IAPS: "International Affective Picture System—widely used controlled image set for emotion induction.",
      GAPED: "Geneva Affective Picture Database—another standardized image resource for affect studies.",
      "Directed Facial Action Task (DFAT, Ekman et al. 2007)":
        "Instructs specific facial actions to probe expression-emotion links.",
      IRB: "Institutional Review Board—reviews human subjects protocols for ethics and compliance.",
      PsychoPy: "Open-source experiment builder/runtime for psychophysics and behavioral tasks.",
      openSMILE: "Feature extractor widely used for speech and paralinguistics in affective computing.",
      Feeltrace: "Continuous annotation tool for tracking perceived emotion over time.",
      GRETA: "Virtual character animation/expression framework used in affective interaction research.",
    },
    commonConfusions: [
      "Acted data is clean for ML but may not generalize to spontaneous expressions in the wild.",
      "IRB protects participants—not the same as peer review of scientific merit alone.",
      "Passive viewing and active performance recruit different cognitive and motor processes; labels are not interchangeable.",
    ],
  },
  {
    week: 4,
    title: "Automated Face Analysis",
    summary:
      "Facial Emotion Recognition (FER) or Facial Expression Recognition infers affect from the face. Sensors can include EMG, ECG, EEG, earables, or cameras—the latter is common, rich, and relatively non-intrusive. Dynamic FER often outperforms static recognition because motion carries temporal cues, though transitions vary in duration. Classical pipelines: face or component detection → feature extraction → classifier. Deep learning reduces reliance on hand-crafted physics models and supports end-to-end learning. Macro-expressions last roughly 0.5–4 s, align with speech, and are easy to see; micro-expressions are brief (≤~0.5 s), involuntary, and can leak concealed affect. FACS (Ekman & Friesen, 1978) describes facial muscle actions (AUs) as building blocks of expression. Features may be geometric (landmarks, distances, angles—e.g., Ghimire & Lee 2013), appearance-based (texture, Gabor, HOG, SIFT), or motion-based (optical flow, MHI, LBP-TOP). AU6 (cheek raiser) vs AU7 (lid tightener): both narrow the eye opening, but AU6 creates crow’s-feet wrinkles. Representative databases: CK+ (593 sequences, 123 subjects, young adults), Compound Emotion (5060 images, many categories), DISFA (dense stereo over many frames), BU-3DFE (100 subjects, seven expressions). ExpressEar explores FER with commercial ear-worn inertial sensors. Applications include pain estimation, depression screening, deception cues, drowsy driving, and classroom attention. Limitations: compute cost, lighting, occlusion, subtle expression, identity/style variation, and ethics (fairness, accountability, transparency).",
    keyConcepts: [
      "FER pipeline: detection → features → classification; deep learning end-to-end variants",
      "Static vs dynamic FER and role of temporal information",
      "Macro- vs micro-expressions: duration and interpretive use",
      "FACS and Action Units as representation",
      "Geometric, appearance, and motion features",
      "AU6 vs AU7: wrinkles lateral to eyes vs lid tightening",
      "Major datasets: CK+, Compound Emotion, DISFA, BU-3DFE",
      "ExpressEar and earable sensing",
      "Application areas and ethical/limitation issues",
    ],
    importantTerms: {
      FER: "Facial Emotion/Expression Recognition—mapping face video or images to affect categories or dimensions.",
      FACS: "Facial Action Coding System—taxonomy of AU-based facial movements (Ekman & Friesen, 1978).",
      "Macro-expression":
        "Typical visible facial expression lasting on the order of half a second to several seconds.",
      "Micro-expression":
        "Very brief, subtle facial movement hypothesized to reveal concealed emotion (often ≤0.5 s).",
      AU6: "Cheek raiser—associated with genuine smiling; creates lateral eye wrinkles.",
      AU7: "Lid tightener—narrows eye aperture without the AU6 wrinkle pattern.",
      DISFA: "Large stereo facial database with intensity AU labels—useful for continuous affect analysis.",
      "BU-3DFE": "3D facial expression database with controlled pose and expression categories.",
    },
    commonConfusions: [
      "FACS codes muscle actions, not emotions directly—emotion labels require rules or learning over AU combinations.",
      "Higher dynamic accuracy does not remove the need for careful labeling and domain shift handling.",
      "AU6 vs AU7: both affect the eye region but only AU6 produces the characteristic lateral eye wrinkles of a Duchenne smile.",
    ],
  },
  {
    week: 5,
    title: "Speech in Affective Computing",
    summary:
      "Speech affect supports HCI, tutoring, driver safety, clinical screening, translation, and mobile communication. Borden et al. (1994) separate what is said (linguistic), how it is said (paralinguistic), and who says it (speaker identity traits). Corpora may be natural (call centers, cockpit), simulated/acted, or elicited. Examples: AIBO (children interacting with a robot; eleven emotion categories), Berlin EmoDB (ten actors, seven emotions), RAVDESS (twenty-four actors, controlled scripts), IITKGP-SESC/SEHSC (Telugu, eight emotions, large utterance count). Core features include prosody—F0, energy, speech rate—and spectral features such as MFCCs and mel filter-bank energies (MFBs). Commonly tracked prosody covers intensity, F0, lower formants (F1/F2) as voice-quality cues, rate, and spectral energy/timbre. Positive emotional speech often sounds louder, more variable in loudness and pitch, with higher F1/F2 variability—patterns are statistical, not universal laws. Normalization (z-score, min–max) stabilizes models but can hurt emotion separability if it removes emotionally meaningful range. Iterative Feature Normalization (IFN, Busso et al. 2011) normalizes using neutral samples iteratively until convergence to preserve emotion contrasts. Open challenges include speaker variability, limited non-English resources, scarcity of natural corpora, and need for deeper insight into deep models’ behavior.",
    keyConcepts: [
      "Three voice factors: linguistic, paralinguistic, speaker-specific",
      "Database types: natural, acted, elicited; example corpora (AIBO, EmoDB, RAVDESS, IITKGP)",
      "Prosody: F0, energy, rate; spectral: MFCCs, MFBs",
      "Paralinguistic vs linguistic information in SER",
      "Feature normalization trade-offs; IFN (Busso et al. 2011)",
      "Limitations: variability, language coverage, data realism, interpretability",
    ],
    importantTerms: {
      Paralinguistic:
        "How something is said—prosody, timbre, rhythm—rather than lexical content.",
      MFCC: "Mel-frequency cepstral coefficients—compact spectral envelope features standard in speech emotion recognition.",
      MFB: "Mel filter-bank energies—often precede DCT to form MFCCs; sometimes used directly.",
      "Berlin EmoDB":
        "Classic German acted emotional speech database with ten actors and seven emotion classes.",
      RAVDESS: "Multimodal emotional speech and song dataset with many actors and controlled conditions.",
      IFN: "Iterative Feature Normalization—uses neutral speech statistics across iterations to reduce speaker variability while preserving emotion information (Busso et al. 2011).",
      "IITKGP-SESC/SEHSC":
        "Large Telugu speech emotion resources with eight emotions—example of regional-language coverage.",
    },
    commonConfusions: [
      "Removing expressiveness via aggressive normalization can increase accuracy on speaker ID tasks but harm emotion discrimination.",
      "MFCCs summarize spectral shape; F0 is extracted separately—do not conflate them.",
      "Acted databases simplify labeling but may exaggerate cues compared to daily conversation.",
    ],
  },
  {
    week: 6,
    title: "Affect Detection in Texts",
    summary:
      "Text affect underpins sentiment analysis, creative computing, and expressive HCI. Typography and layout alter perceived emotion: typeface and symmetry shape judgments (e.g., Times New Roman rated funnier/angrier than Arial in Juni & Gross 2008); good typography can elevate mood (Larson & Picard 2005). Relative Subjective Duration (RSD) captures how engaging typography stretches perceived attention/time-on-task. Binary positive/negative labels are insufficient: fear and anger are both negative but differ in action tendencies—fear is more pessimistic/passive, anger more optimistic/active (Lerner & Keltner 2000; Miller et al. 2009). Dimensional models (Calvo & Mac Kim, 2013) help: fear tends negative valence with variable arousal and submissive dominance; anger is negative with variable arousal and controlling dominance. Text adds challenges: implicit emotion (“being laid off”), metaphor, discourse context, and culture. Corpora include ISEAR (thousands of respondents, seven emotions), EmotiNet, Alm’s fairy-tale sentences, and SemEval-2007 headlines. Lexical resources: ANEW (VAD norms), SentiWordNet (polarity), NRC (emotion lexicons), LIWC (many psycholinguistic categories), WordNet-Affect, DepecheMood. Simple unsupervised baselines compare cosine similarity between document embeddings and prototype emotion or dimension vectors.",
    keyConcepts: [
      "Applications: sentiment, creativity support, HCI expressivity",
      "Typography effects and RSD (engagement and perceived duration)",
      "Why valence-only labels fail: fear vs anger (appraisal and action tendencies)",
      "VAD for text: fear vs anger patterns",
      "Implicit emotion, metaphor, and context",
      "Corpora: ISEAR, EmotiNet, fairy tales, SemEval headlines",
      "Lexicons: ANEW, SentiWordNet, NRC, LIWC, WordNet-Affect, DepecheMood",
      "Unsupervised similarity-to-prototype approaches",
    ],
    importantTerms: {
      RSD: "Relative Subjective Duration—typography and design quality can increase felt engagement and perceived time spent reading.",
      ISEAR: "International Survey on Emotion Antecedents and Reactions—large self-report corpus with seven emotions.",
      ANEW: "Affective norms for English words—includes valence, arousal, and dominance ratings.",
      "NRC Emotion Lexicon":
        "Word–emotion associations for multiple languages—often eight Plutchik-style emotions plus sentiment.",
      LIWC: "Linguistic Inquiry and Word Count—dictionary-based categorization of psychologically meaningful language use.",
      DepecheMood: "Lexical resource estimating emotional scores from word co-occurrence with mood tags in text.",
      "Dimensional text affect":
        "Representing emotion as coordinates in valence–arousal–dominance rather than single polarity.",
    },
    commonConfusions: [
      "Sentiment polarity is not equivalent to fine-grained emotion—anger and fear can both be “negative.”",
      "Lexicon lookup ignores negation and discourse until modeled—surface bag-of-words can misclassify.",
      "ANEW provides norms, not ground truth for every context-specific usage.",
    ],
  },
  {
    week: 7,
    title: "Emotions in Physiological Signals",
    summary:
      "Physiological signals come largely from the autonomic nervous system; they are hard to fake voluntarily, reflect covert affect, need little directed attention, and benefit from wearable advances. Common measures include BP, ECG, EEG, EMG, GSR/EDA, HR, respiration, and temperature. Heart rate tracks arousal and appears across fear, panic, anger, and strong appreciation. ECG records electrical cardiac activity at the skin in microvolts; PPG optically senses pulses at finger or ear with dry sensors and consumer appeal. Key timing metrics: HR (bpm), inter-beat interval (IBI, ms), and heart rate variability (HRV)—natural beat-to-beat variation. Stress and time pressure often reduce HRV (more metronomic beating); low HRV aligns with arousal/stress, higher HRV with recovery and parasympathetic tone. RMSSD is computed as the square root of the mean squared successive differences between RR intervals. HRV also varies with age (declines), posture, breathing, and fitness. ECG/PPG alone cannot separate positive from negative high arousal—fusion with face, EEG, or eye tracking is common. Electrodermal activity (EDA/GSR) reflects emotional sweating controlled by sympathetic fibers; Jung used early variants; it remains central in polygraph contexts. Measurement works on many sites; palms and soles are most reactive. Typical dynamics: skin conductance spans a few to tens of microsiemens, SCR rise 1–3 s, recovery seconds to tens of seconds, sampling often 1–10 Hz. Slow-changing skin conductance level (SCL) tracks tonic arousal; rapid skin conductance responses (SCRs) mark phasic reactions to events. Features include peak amplitude, number of peaks, rise time, band power in 0.5–5 Hz, and even MFCC-style features—sometimes outperforming classic SCR summaries. GSR indicates arousal, not valence. EEG arises from synchronized post-synaptic potentials; excellent temporal resolution, sub-second. The 10–20 system labels frontal, temporal, parietal, occipital, central sites; even indices are right hemisphere, odd left, Z midline. Frontal alpha asymmetry (FAA) compares left vs right alpha power (e.g., F3/F4): less alpha implies more cortical activation. Often, left-frontal relatively lower alpha supports approach (anger, joy); right-frontal supports withdrawal (fear, disgust, sadness)—always interpret with task and reference. Features include ERP components (e.g., P300), band power, and higher-order connectivity (HOC) metrics reported to outperform raw bands in some studies. Limits: poor spatial resolution, surface-only, setup burden, artifacts, expertise needed.",
    keyConcepts: [
      "ANS-linked physiology: voluntary control limits and wearable context",
      "Cardiac measurement: ECG vs PPG; HR, IBI, HRV",
      "HRV interpretation: stress reduces RMSSD; age and posture effects",
      "RMSSD formula conceptually: successive RR-difference RMS",
      "Fusion need: physiology separates arousal, not always valence",
      "EDA/GSR: SCL vs SCR, dynamics, feature families, valence blind spot",
      "EEG: 10–20 naming; FAA interpretation cautiously",
      "EEG features: ERPs, bands, HOC; limitations",
    ],
    importantTerms: {
      HRV: "Beat-to-beat timing variation around mean heart rate—linked to autonomic balance and stress.",
      RMSSD: "Root mean square of successive RR-interval differences—a time-domain HRV metric sensitive to parasympathetic modulation.",
      PPG: "Photoplethysmography—optical blood-volume pulse sensing; common in wearables.",
      SCR: "Skin conductance response—phasic spike to stimuli; event-related arousal changes.",
      SCL: "Skin conductance level—slower tonic level reflecting overall arousal or hydration/temperature trends.",
      FAA: "Frontal alpha asymmetry—difference in alpha power between homologous frontal electrodes; indexes motivational direction with caveats.",
      P300: "Positive ERP component ~300 ms post-stimulus—used in oddball and affective attention studies.",
      "HOC features":
        "Higher-order connectivity or nonlinear coupling features sometimes outperform simple band-power classifiers.",
    },
    commonConfusions: [
      "High arousal from joy vs anger can look similar on HR/EDA—modalities must be combined for valence.",
      "SCR counts index orienting and significance, not specific emotion categories.",
      "FAA directionality is population-trend level—never a single-electrode diagnostic on one trial.",
    ],
  },
  {
    week: 8,
    title: "Multimodal Emotion Recognition",
    summary:
      "Multiple modalities yield richer representations and robustness: each channel adds unique information and redundancy. D’Mello & Kory (2012) highlight fusion algorithms, synchronized corpora, and sometimes modest gains as open problems. Data should capture spontaneous subtle affect with shared timestamps and aligned labels across streams. Feature pipelines must respect different sampling rates (e.g., video ~25 Hz, GSR ~16 Hz, EEG 128 Hz)—per-stream optimization then fusion is typical. Fusion strategies: early (concatenate features, tight sync), late (separate classifiers with soft or hard combination), and slow or model-based fusion that exploits cross-modal correlation with relaxed alignment needs. The SEMAINE database builds Sensitive Artificial Listener interactions with four agent personalities (Prudence, Poppy, Spike, Obadiah) and continuous labels on dimensions including arousal, expectation, power, and valence. The AVEC challenge popularized audio–visual depression and affect estimation with continuous annotations reduced to binary targets in some tasks. Reported multimodal results on such benchmarks show audio strongest for arousal (~68.5% weighted accuracy), visual channels aiding expectation (~67.6%), speech features for power, video aiding valence (~69.8%). Correlation-based feature selection (CFS) notably boosted video performance (e.g., 60.4% to 65.8% in cited analyses).",
    keyConcepts: [
      "Motivation for multimodal affect: complementarity and redundancy",
      "Challenges: synchronization, spontaneous data, label alignment, fusion complexity",
      "Early, late, and slow/correlational fusion",
      "SEMAINE: personalities and continuous affect dimensions",
      "AVEC tasks and community benchmarks",
      "Modality strengths: audio for arousal, video for valence/expectation, speech for power (example results)",
      "Feature selection (e.g., CFS) can disproportionately help some modalities",
    ],
    importantTerms: {
      "Early fusion":
        "Concatenate or jointly model features from multiple modalities—requires alignment and may suffer if one stream is noisy.",
      "Late fusion":
        "Train per-modality models then combine scores or decisions—modality-specific strengths preserved.",
      "Slow fusion":
        "Models that capture cross-modal interactions over time with relaxed synchronization assumptions.",
      SEMAINE:
        "Multimodal corpus of users interacting with emotionally stereotyped listener agents with rich continuous labels.",
      AVEC: "Annual Audio/Visual Emotion Challenge—shared tasks on depression and affect from multimodal clips.",
      CFS: "Correlation-based feature selection—removes redundant predictors; helped video channel performance in cited multimodal studies.",
      "Weighted accuracy (WA)":
        "Performance metric balancing classes—used in AVEC-style reporting for imbalanced affect labels.",
    },
    commonConfusions: [
      "More modalities do not guarantee gains—misalignment or label noise can erase benefits.",
      "Early fusion is not always best; late fusion can be more robust to missing sensors at test time.",
      "Continuous annotation dimensions (arousal, valence, power) differ from categorical emotion labels—metrics and models must match.",
    ],
  },
  {
    week: 9,
    title: "Emotional Empathy in Machines",
    summary:
      "Empathy is the capacity to understand what others experience; empathic machine behavior can improve trust and outcomes. Anthropomorphism (form + behavior) must align appearance with capability. The uncanny valley warns that near-human realism with flawed behavior harms acceptance. Empathic agents may (1) respond congruently to user emotion or (2) elicit empathy toward the agent itself. Models include observer, target, triggering event, emotion, situation, and mediators. Bo Xia et al. (2016) decompose empathy into emotional simulation, perspective taking, and emotion regulation. Cues come from physiology, lexical patterns (e.g., n-gram models per Xiao et al. 2013), prosody, and face (e.g., Kumano et al. 2011). Boukricha (2011) proposes a three-stage computational empathy pipeline: mechanism → modulation in PAD space → empathic expression. Data-driven systems include CARE (McQuiggan & Lester 2007) and Affective AutoTutor (D’Mello et al. 2013). Theory of Mind—the ability to attribute beliefs and intentions—appears in benchmarks like false-belief tasks. Evaluation lacks a gold standard: Turing-style tests, psychometric scales, and multidimensional criteria (autonomy, imitation, moral value, accountability, privacy, reciprocity) all appear in discussions.",
    keyConcepts: [
      "Definition of empathy and why machines might model it",
      "Anthropomorphism and uncanny valley",
      "Two agent directions: empathize with user vs evoke empathy for agent",
      "Structural model: observer, target, event, emotion, context",
      "Subprocesses: simulation, perspective taking, regulation (Bo Xia et al. 2016)",
      "Cue channels: physiology, text, speech, face",
      "Boukricha PAD modulation pipeline",
      "CARE and Affective AutoTutor as examples",
      "Theory of Mind and evaluation challenges",
    ],
    importantTerms: {
      Anthropomorphism: "Attributing human traits to non-human agents—shapes design and user expectations.",
      "Uncanny valley":
        "As human-likeness rises, subtle flaws can produce strong discomfort before full realism.",
      "Perspective taking":
        "Inferring another’s viewpoint—core cognitive component of empathy alongside affective sharing.",
      CARE: "Framework for data-driven empathic behavior in learning interactions (McQuiggan & Lester 2007).",
      "Affective AutoTutor":
        "Intelligent tutoring system detecting learner affect and responding empathically (D’Mello et al. 2013).",
      "Theory of Mind":
        "Modeling others’ beliefs and intentions—false-belief tasks test developmental milestones.",
      "Empathic congruence":
        "Responding with emotionally appropriate tone and content to the user’s detected state.",
    },
    commonConfusions: [
      "Empathy in machines is simulated behavior and inference—not guaranteed phenomenal experience.",
      "Sympathy (feeling for) differs from empathy (understanding/feeling with) in many psychology texts—exam items may test this distinction.",
      "High dialogue fluency does not imply accurate emotion understanding—separate modules and evaluations are needed.",
    ],
  },
  {
    week: 10,
    title: "Emotionally Intelligent Machines: Challenges and Opportunities",
    summary:
      "Affect-aware learning synthesizes evidence from many classroom studies (e.g., meta-analyses on engagement-related states). Common learner states include engagement, boredom, confusion, curiosity, happiness, and frustration. Affective AutoTutor detects boredom, confusion, frustration, and neutral using multimodal cues and decision-level fusion, delivering empathetic responses that correlate with learning gains. GazeTutor tracks attention decline via eye gaze in a multimedia interface. Affect-aware games treat emotion as a first-class design input: the affective loop cycles user expression → system sensing → adaptation via NPC affect or procedural content. NeverMind reads facial distress and adapts gameplay, combining HR/HRV with face modalities. Open systems issues include sensor vs sensorless vs “sensor-lite” deployments, accuracy targets, and adaptation depth. Field deployments (e.g., Arroyo et al. 2009) combine cameras, pressure mice, mats, and wearables in classrooms. Sensorless approaches mine behaviors such as keystroke dynamics (Bixler & D’Mello 2013). Sensor-lite approaches lean on ubiquitous webcams benefiting from hardware trends. Adaptation can be staged from level 0 (none) through recognizing need, single-task adaptation, multi-task adaptation, and cross-agent communication of learner state.",
    keyConcepts: [
      "Major learner affect states in educational technologies",
      "Affective AutoTutor: detection, fusion, empathetic policy, learning outcomes",
      "GazeTutor and attention-aware presentation",
      "Affective loop in games; NeverMind example",
      "Deployment classes: sensors, sensorless behavior, sensor-lite cameras",
      "Open problems: scalability, accuracy bar, adaptation scope",
      "Adaptation levels 0–4 in instructional systems discourse",
    ],
    importantTerms: {
      "Affect-aware learning":
        "Instructional systems that sense and respond to cognitive-affective states to improve learning.",
      "Affective loop":
        "User expresses emotion → system detects → system adapts content or agents—central pattern in affective games.",
      NeverMind: "Game-based assessment/intervention using facial distress and physiology to tune difficulty or support.",
      "Sensorless inference":
        "Detecting affect purely from interaction logs such as keystrokes without dedicated biosensors.",
      "Sensor-lite":
        "Low-friction sensing—often single-camera face tracking leveraging commodity hardware.",
      "Decision-level fusion":
        "Combining outputs of separate detectors—used in Affective AutoTutor multimodal pipeline.",
      "Meta-analysis on affect detection":
        "Aggregated evidence that multimodal affect cues relate to learning-relevant outcomes across studies.",
    },
    commonConfusions: [
      "Detecting frustration is not the same as successfully remediating it—pedagogical policy matters.",
      "Sensorless methods trade privacy for indirectness but can still infer sensitive traits—ethics remain.",
      "Level 4 adaptation implies multi-agent coordination—not merely showing an emoji when confused.",
    ],
  },
  {
    week: 11,
    title: "Emotional Virtual Personal Assistant",
    summary:
      "Emotional virtual assistants target mental health support, customer service, education, entertainment, and workplace productivity. Core challenges: signal variability, real-time latency, multilingual coverage, bias, and privacy. Requirements typically include reliable basic emotion recognition, spoken NLU, intent understanding, real-time response, data protection, and localization. A reference architecture chains automatic speech recognition → language ID → emotion recognition → intent processing → response generation → text-to-speech → dialogue state update. Features span MFCCs, prosody (pitch, loudness, rate), spectral and time-domain cues. Selection methods include PCA, LDA, mutual information, and recursive feature elimination. The ML lifecycle covers architecture design, compilation, training, evaluation, iteration, testing, serialization, and registry. Edge deployment examples use Raspberry Pi with TensorFlow Lite and quantization for latency and power. Public data includes EmoDB, RAVDESS, affective text sets, and EmotionLines. Ethics revisit privacy, manipulation, discrimination, unintended harms, liability, deception, and social isolation when users bond with synthetic agents.",
    keyConcepts: [
      "Use cases and non-functional requirements (latency, privacy, languages)",
      "End-to-end pipeline: ASR → LID → emotion → intent → NLG → TTS → state",
      "Acoustic and lexical feature sets; dimensionality reduction and selection",
      "Training lifecycle and model deployment on embedded hardware",
      "Representative corpora for speech and text emotion",
      "Ethical risks specific to conversational affective agents",
    ],
    importantTerms: {
      NLU: "Natural language understanding—maps user utterances to intents and slots beyond literal transcription.",
      "Intent processing":
        "Determining what action the user wants (e.g., schedule, purchase, vent) from parsed speech or text.",
      TTS: "Text-to-speech—renders assistant replies with emotionally appropriate prosody when designed.",
      "TensorFlow Lite":
        "Framework for on-device inference—pairs with quantization for assistants on embedded boards.",
      Quantization: "Reduces numeric precision of weights to shrink models and accelerate inference.",
      EmotionLines: "Social-media-style textual emotion dataset used in conversational affect research.",
      "Bias in VPAs":
        "ASR and emotion models may underperform on accented speech or demographic groups—ethical and UX issue.",
    },
    commonConfusions: [
      "Emotion recognition accuracy and task-completion accuracy are different KPIs for assistants.",
      "On-device processing improves latency and privacy only if data never leave the device—cloud hybrids need clear policies.",
      "Empathic wording without safety guardrails in mental-health contexts can cause harm—scope of competence matters.",
    ],
  },
  {
    week: 12,
    title: "Ethical Considerations",
    summary:
      "Picard (1997) cautioned that emotionally expressive computers may eventually behave emotionally—not merely simulate outputs. Emotions are intimate; Picard (2003) stresses privacy. Emotional dependency on synthetic agents raises moral questions about attachment and responsibility. Manipulation asks whether systems should reshape behaviors for commercial or political ends. As relational AI advances, society must ask when users might prioritize machine welfare over human relationships—still speculative but ethically loaded. Modern mobile sensing (Politou et al. 2017 on privacy invasiveness; Pejovic & Musolesi 2015 on anticipatory computing) multiplies exposure. Technical mitigations—encryption, anonymization (Kapadia 2009)—remain incomplete; Sweeney (2013) shows re-identification risks persist. Open policy questions include which machines deserve affective capabilities, for what ends, under what moral constraints, how to bound acceptable versus critical behaviors, whether deception is inherent, whether systems should expose concealed emotions, and whether affect could empower destructive systems. Targeted advertising using inferred emotion raises special concerns for vulnerable users.",
    keyConcepts: [
      "Picard warnings on expression leading to emotional behavior",
      "Privacy and intimacy of affective data",
      "Dependency, manipulation, and relational ethics",
      "Limits of crypto/anonymization; re-identification",
      "Mobile and anticipatory sensing risks",
      "Open normative questions for designers and regulators",
      "Vulnerable populations and emotionally targeted influence",
    ],
    importantTerms: {
      "Emotional dependency":
        "Users forming attachment or reliance on affective systems—raises duties of care and sunset policies.",
      "Privacy invasiveness":
        "Depth and breadth of inferred inner states from passive sensing beyond what users consciously share.",
      "Anticipatory computing":
        "Proactive actions from predicted context—including emotional state—before explicit user requests (Pejovic & Musolesi 2015).",
      Anonymization: "Removing explicit identifiers—still vulnerable to linkage attacks (Sweeney 2013).",
      "Designer ethics":
        "Responsibilities for transparency, consent, beneficence, and non-maleficence in affective product design.",
      "Emotion-targeted advertising":
        "Using inferred affect to tailor ads—raises fairness and autonomy issues especially for vulnerable groups.",
      "Destructive machines with emotions (thought experiment)":
        "Pairing affective inference with physical actuators amplifies safety and misuse concerns.",
    },
    commonConfusions: [
      "Legal compliance (e.g., data minimization) is necessary but not sufficient for ethical affective UX.",
      "Opt-in consent is challenged when emotion is inferred indirectly from behavior without clear notice.",
      "“Fairness” in ML and “justice” in policy overlap but are not identical—both matter for affective AI.",
    ],
  },
];
