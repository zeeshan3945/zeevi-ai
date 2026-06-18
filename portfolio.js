/* ============================================================
   ZeeVi.ai — Portfolio configuration
   ------------------------------------------------------------
   To add a new portfolio document:
   1. Drop the PDF into the  /portfolio  folder.
   2. Add a new { } block below with its details.
   That's it — the website will pick it up automatically.
   ============================================================ */

const PORTFOLIO = [
  {
    title: "Engineering Drawing Annotations",
    client: "FutureCalc.ai",
    category: "Image Segmentation",
    summary:
      "Precise mask annotations across 500 high-resolution engineering drawings (6623×4678 px) covering 75 pipe & component classes — production-grade training data for an industrial CV model.",
    tags: ["Mask Segmentation", "CVAT", "Industrial"],
    cover: "assets/covers/engineering-drawing-annotations.jpg",
    file: "portfolio/engineering-drawing-annotations.pdf",
    accent: "#6366f1",
  },
  {
    title: "Chilean Needle Grass Identification",
    client: "Precision Agriculture · Australia",
    category: "Image Segmentation",
    summary:
      "AI segmentation system that detects an invasive weed among visually similar grasses (the “green-on-green” problem) from high-resolution drone orthomosaics.",
    tags: ["Segmentation", "Drone Imagery", "Agriculture"],
    cover: "assets/covers/chilean-needle-grass.jpg",
    file: "portfolio/chilean-needle-grass.pdf",
    accent: "#10b981",
  },
  {
    title: "PGC Agricultural Annotations",
    client: "Precision Agriculture",
    category: "Detection + Segmentation",
    summary:
      "Large-scale agricultural annotation program combining object detection and segmentation — coordinated labeling workflows and quality assurance to produce reliable training data across many crop and weed classes.",
    tags: ["Object Detection", "Segmentation", "Agriculture"],
    cover: "assets/covers/pgc-agricultural-annotations.jpg",
    file: "portfolio/pgc-agricultural-annotations.pdf",
    accent: "#f59e0b",
  },
  {
    title: "Kitchen Object Segmentation",
    client: "Computer Vision Dataset",
    category: "Image Segmentation",
    summary:
      "Polygon segmentation of 500 kitchen images across 16 object classes — precise masks generating high-quality, consistent training data for an indoor scene-understanding model.",
    tags: ["Segmentation", "Polygon", "CVAT"],
    cover: "assets/covers/kitchen-annotations.jpg",
    file: "portfolio/kitchen-annotations.pdf",
    accent: "#ec4899",
  },
  {
    title: "Tomato Stand Count",
    client: "Precision Agriculture",
    category: "Object Detection",
    summary:
      "Object-detection pipeline that counts tomato plants from field imagery, turning raw captures into accurate, field-level stand-count statistics.",
    tags: ["Object Detection", "Counting", "Agriculture"],
    cover: "assets/covers/tomato-stand-count.jpg",
    file: "portfolio/tomato-stand-count.pdf",
    accent: "#ef4444",
  },
];
