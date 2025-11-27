import React from 'react';
import ModelViewer from '@/components/ModelViewer';

const PersonalWebsitePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section id="hero" className="text-center py-20 flex justify-center items-center">
        <ModelViewer url="/base_basic_pbr.glb" width={600} height={600} />
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-20">
        <h2 className="text-4xl font-bold text-center mb-8">Introduction</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Physics undergraduate specialising in quantum error correction, with practical experience simulating stabilizer codes in Python using Stim. Currently undertaking a dissertation on mitigating hook errors in stabilizer measurements. Expanding C++ skills for open-source contributions to Fowler’s TQEC automation project.
        </p>
      </section>

      {/* Background Section */}
      <section id="background" className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">Background</h2>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          <div className="mb-6">
            <h4 className="text-xl font-semibold">University College London</h4>
            <p>BSc. Physics Third Year Undergrad. | Year 1 Grade: 1:1 | Year 2 Grade: 1:1</p>
            <p>Relevant Modules: BSc Dissertation (Defeating Hook Errors in Quantum Error Correction - supervised by Prof. Dan Browne, in progress), Quantum Mechanics, Machine Learning, Linear Algebra.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Ruthin School</h4>
            <p>A Levels: Physics, Further Mathematics, Mathematics, Chemistry (4A*)</p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Professional Experience</h3>
          <div className="mb-6">
            <h4 className="text-xl font-semibold">Camtech Innovations Ltd.</h4>
            <p>Sector Research Intern</p>
            <ul className="list-disc list-inside">
              <li>Reviewed and benchmarked quantum machine learning literature for healthcare diagnostics, focusing on feasibility under current noisy devices.</li>
              <li>Evaluated potential partnerships and attainable next-steps vis-a-vis quantum technology.</li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-semibold">EDBI Pte Ltd</h4>
            <p>Venture Capital Intern - Emerging Technologies Team</p>
            <ul className="list-disc list-inside">
              <li>Technical due diligence on quantum computing and semiconductors; analysed patents and research papers.</li>
              <li>Engaged with startup founders, formulating technical questions to assess feasibility and differentiation.</li>
              <li>Evaluated key technological distinctions, presenting and contributing to investment decisions.</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Activities</h3>
          <div className="mb-6">
            <h4 className="text-xl font-semibold">Brownian Motion Experiment (Academic)</h4>
            <ul className="list-disc list-inside">
              <li>Utilised research-grade software to track particle motion, applying statistical mechanics and stochastic analysis to interpret data using Python.</li>
              <li>Analysed stochastic Brownian motion data with Python, applying mean-square-displacement and central limit theorem methods - experience transferable to noise/error modelling in quantum error correction.</li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-semibold">UK Chemistry Olympiad (Academic)</h4>
            <p>Obtained silver award in round one</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">National Trampoline Gymnastics Competition (Athletic)</h4>
            <p>Second and Third Placing</p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Skills & Interests</h3>
          <div className="mb-6">
            <h4 className="text-xl font-semibold">Python</h4>
            <ul className="list-disc list-inside">
              <li>Built scripts in Python (for Stim) to construct stabilizer codes (surface-code circuits, Shor Code, flag circuits) with detector definitions, decoders, and circuit-level noise for QEC simulation.</li>
              <li>Performed data analysis and visualized results from QEC simulations using libraries (NumPy, SciPy, Matplotlib, Pandas).</li>
              <li>Implemented numerical methods (Euler Method and RK4) for physics simulations.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold">C++</h4>
            <p>Basic proficiency in C++, improving to participate in Austin Fowler’s "TQEC Design Automation" project</p>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="py-20">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          I'd love to hear from you! Feel free to reach out with any questions or opportunities.
        </p>
      </section>
    </div>
  );
};

export default PersonalWebsitePage;