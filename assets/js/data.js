/* ============================================================
   SITE CONTENT — edit this file only.
   ============================================================ */

const SITE = {
  github: "seongwoongshim",
  repo:   "seongwoongshim.github.io",
};

const PROFILE = {
  name:  "Seongwoong Shim",
  // the line under the name; a couple of links are allowed here
  desc: 'Ph.D. Candidate, Department of AI, Korea University &nbsp;·&nbsp; ' +
        '<a href="https://dmlab.korea.ac.kr" target="_blank" rel="noopener">Decision Making Lab (DMLab)</a>',
  email: "ssw030830@korea.ac.kr",       // shown as plain text, not a link
  photo: "assets/img/profile.jpg",      // square image; set to "" to hide the photo entirely
  links: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=gMlzJjYAAAAJ" },
    { label: "GitHub",         url: "https://github.com/seongwoongshim" },
    { label: "LinkedIn",       url: "https://www.linkedin.com/in/seongwoong-shim-278221251/" },
    { label: "CV (PDF)",       url: "cv/cv.pdf" },
  ],
};

const INTERESTS = [
  { label: "Enhancing foundation models", detail: "language models [C6], multimodal models [C5], diffusion models [C2]" },
  { label: "Reinforcement learning",      detail: "offline learning [C1, C4], skill discovery [C3]" },
];

/* Publications.
   authors: trailing "*" marks equal contribution; the name matching ME is bolded.
   links:   key = the text shown, value = the URL. Leave a key out to hide it.    */
const ME = "Seongwoong Shim";

const SELECTED = [
  {
    id: "C6",
    short: "ICLR 2026",   // venue text (shown in the placeholder until a thumbnail exists)
    thumb: "assets/img/pubs/C6.png",
    title: "Beyond RAG vs. Long-Context: Learning Distraction-Aware Retrieval for Efficient Knowledge Grounding",
    authors: ["Seongwoong Shim*", "Myunsoo Kim*", "Jae Hyeon Cho", "Byung-Jun Lee"],
    venue: "International Conference on Learning Representations (ICLR 2026)",
    links: {
      arXiv: "https://arxiv.org/abs/2509.21865",
      Code:  "https://github.com/ku-dmlab/LDAR",
    },
  },
  {
    id: "C5",
    short: "CVPR 2026",   // venue text (shown in the placeholder until a thumbnail exists)
    thumb: "assets/img/pubs/C5.png",
    title: "FALCON: False-Negative Aware Learning of Contrastive Negatives in Vision-Language Pretraining",
    authors: ["Myunsoo Kim*", "Seongwoong Shim*", "Byung-Jun Lee"],
    venue: "Conference on Computer Vision and Pattern Recognition (CVPR 2026)",
    links: {
      arXiv: "https://arxiv.org/abs/2505.11192",
      Code:  "https://github.com/ku-dmlab/FALCON",
    },
  },
];

const OTHER = [
  {
    id: "J1",
    short: "ECML PKDD 2026",   // venue text (shown in the placeholder until a thumbnail exists)
    thumb: "assets/img/pubs/J1.png",
    title: "Neural MCTS with LLM Guidance for Effective Program Synthesis on Abstraction and Reasoning Corpus",
    authors: ["Jinwoo Jeon", "Seongwoong Shim", "Sejin Kim", "Sundong Kim", "Byung-Jun Lee"],
    venue: "Machine Learning (ECML PKDD 2026 Journal Track), 2026",
    links: {
      Paper: "https://link.springer.com/article/10.1007/s10994-026-07110-1",
      // arXiv: "",   ← no preprint found; fill in if there is one
      // Code:  "",   ← add the repository URL
    },
  },
  {
    id: "C4",
    short: "NeurIPS 2025",   // venue text (shown in the placeholder until a thumbnail exists)
    thumb: "assets/img/pubs/C4.png",
    title: "Prior-Guided Diffusion Planning for Offline Reinforcement Learning",
    authors: ["Donghyeon Ki", "JunHyeok Oh", "Seongwoong Shim", "Byung-Jun Lee"],
    venue: "Neural Information Processing Systems (NeurIPS 2025)",
    links: {
      arXiv: "https://arxiv.org/abs/2505.10881",
      Code:  "https://github.com/ku-dmlab/PG",
    },
  },
  {
    id: "C3",
    short: "ICML 2025",   // venue text (shown in the placeholder until a thumbnail exists)
    thumb: "assets/img/pubs/C3.png",
    title: "NBDI: A Simple and Effective Termination Condition for Skill Extraction from Task-Agnostic Demonstrations",
    authors: ["Myunsoo Kim*", "Hayeong Lee*", "Seongwoong Shim", "JunHo Seo", "Byung-Jun Lee"],
    venue: "International Conference on Machine Learning (ICML 2025)",
    links: {
      arXiv: "https://arxiv.org/abs/2501.12668",
      Code:  "https://github.com/ku-dmlab/NBDI",
    },
  },
  {
    id: "C2",
    short: "CVPR 2025",   // venue text (shown in the placeholder until a thumbnail exists)
    thumb: "assets/img/pubs/C2.png",
    title: "Adaptive Non-Uniform Timestep Sampling for Accelerating Diffusion Model Training",
    authors: ["Myunsoo Kim*", "Donghyeon Ki*", "Seongwoong Shim", "Byung-Jun Lee"],
    venue: "Conference on Computer Vision and Pattern Recognition (CVPR 2025)",
    links: {
      arXiv: "https://arxiv.org/abs/2411.09998",
      Code:  "https://github.com/ku-dmlab/Adaptive-Timestep-Sampler",
    },
  },
  {
    id: "C1",
    short: "ICPRAI 2024",   // venue text (shown in the placeholder until a thumbnail exists)
    thumb: "assets/img/pubs/C1.png",
    title: "Offline Imitation Learning by Controlling the Effective Planning Horizon",
    authors: ["Hee-Jun Ahn*", "Seongwoong Shim*", "Byung-Jun Lee"],
    venue: "International Conference on Pattern Recognition and Artificial Intelligence (ICPRAI 2024)",
    links: {
      arXiv: "https://arxiv.org/abs/2401.09728",
      // Code: "",   ← add the repository URL
    },
  },
];
