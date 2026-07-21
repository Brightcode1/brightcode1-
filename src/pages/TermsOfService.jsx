import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, AlertCircle, RefreshCw } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#E8E6FF]/50 to-transparent -z-10"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#DFF6FF] blur-[120px] opacity-60 -z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm border border-[#ECECEC] text-primary mb-6">
              <FileText size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4 tracking-tight">Terms and Conditions</h1>
            <p className="text-gray-500 text-lg">Last updated: September 2021</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#ECECEC]"
          >
            <div className="space-y-10 text-gray-600 leading-relaxed text-lg">

              {/* Introduction */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#E8E6FF] flex items-center justify-center text-primary font-bold text-sm">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark mb-3">General Information</h3>
                  <p className="mb-4">
                    BrightCode Digital (abbreviation - BCD) maintains and hosts this website as a platform to exhibit information about its services and products.
                  </p>
                  <p>
                    Your access and usage of the website is subject to the following terms and conditions and future revisions if any, (“Terms and Conditions”) and all applicable laws. By accessing and browsing this website, you agree to the following terms & conditions.
                  </p>
                </div>
              </div>

              {/* Warranties & Disclaimers */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#E8E6FF] flex items-center justify-center text-primary font-bold text-sm">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark mb-3">Warranties & Disclaimers</h3>
                  <p className="mb-4">
                    The website, including all the content, information, software, products and services provided on the website, are open on an “as it is” and “as per availability” basis. BrightCode Digital expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranty of merchantability, fitness for a particular purpose and non-infringement.
                  </p>
                  <p>
                    BrightCode Digital assumes no responsibility, and shall not be liable for, any damage to, or viruses that may infect your system, equipments or any other assets on account of your access to, use of or browsing this website or your downloading of any materials, data, text, images, video, or audio from this website.
                  </p>
                </div>
              </div>

              {/* Copyright & Usage */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#E8E6FF] flex items-center justify-center text-primary font-bold text-sm">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark mb-3">Copyright & Intellectual Property</h3>
                  <p className="mb-4">
                    The content and the projects described or displayed on the website are subject to change without notice. Copyright may exist on any future materials. Unauthorized recording or use of such materials would be considered infringement of the applicable TRIPS.
                  </p>
                  <p>
                    The materials you see on the website either belong to BrightCode Digital or were used with their consent. Unless otherwise expressly permitted by these Terms and Conditions or with BrightCode Digital's prior written consent, you are not permitted to use these materials yourself or on behalf of anyone else. Any unauthorized use of the photographs could be against copyright, trademark, privacy, and publicity laws.
                  </p>
                </div>
              </div>

              {/* Third-Party Links */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#E8E6FF] flex items-center justify-center text-primary font-bold text-sm">4</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark mb-3">Third-Party Links & Responsibilities</h3>
                  <p>
                    Accessing any other website, or one that is connected to or similar to ours but not under the control of the company is the sole responsibility of the user and not the company, browse at your own risk. BrightCode Digital may offer links on the website to other websites, their inclusion is merely for your convenience and shouldn't be seen as an approval of the website's owner or sponsor of the information found there. With the exception of the Non-Excludable Rights (above), BrightCode Digital makes no representations or warranties, either stated or implied, as to the truth, accuracy, completeness, or legality of any materials or information found on such websites.
                  </p>
                </div>
              </div>

              {/* User Conduct */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#E8E6FF] flex items-center justify-center text-primary font-bold text-sm">5</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark mb-3">User Conduct</h3>
                  <p>
                    It is illegitimate to post or send anything that is illegal, threatening, harassing, defamatory, libellous, obscene, pornographic, or profane content, as well as any content that could incite behaviour that would be illegal, give rise to civil disorder, or otherwise violate the law.
                  </p>
                </div>
              </div>

              {/* Revisions */}
              <div className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 mt-8">
                <div className="flex-shrink-0 mt-1">
                  <RefreshCw className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark mb-2">Policy Revisions</h3>
                  <p className="text-base text-gray-600">
                    BrightCode Digital may, at any time revise these Terms and Conditions by updating this post. Since you are bound by these Terms and conditions, please visit this page regularly to learn about the revised Terms and Conditions if any.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
