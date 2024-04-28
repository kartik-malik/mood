"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./ui/Modal";
import JournalAnalysisContent from "./AnalysisContent";

const JourneyAnalysisDesktop = ({ analysisContent }) => {
  if (window.innerWidth < 1024) return null;
  return analysisContent;
};
const JourneyAnalysisModal = ({ analysisContent }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="md:hidden bg-[#7BC9FF] rounded-sm p-2" onClick={() => setOpen(true)}>
        View analysis
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        {analysisContent}
      </Modal>
    </>
  );
};

export { JourneyAnalysisDesktop };

export default JourneyAnalysisModal;
