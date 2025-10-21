import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Award,
  GraduationCap,
  Target,
  Home,
  User,
  FolderGit2,
  Code,
} from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-lg border-b border-emerald-500/20 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Leena Tomar
            </h1>
            <div className="flex gap-8">
              <button
                onClick={() => setActiveSection("home")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeSection === "home"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "text-slate-400 hover:text-emerald-400"
                }`}
              >
                <Home className="w-4 h-4" />
                <span className="font-medium">Home</span>
              </button>
              <button
                onClick={() => setActiveSection("profile")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeSection === "profile"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "text-slate-400 hover:text-emerald-400"
                }`}
              >
                <User className="w-4 h-4" />
                <span className="font-medium">Profile</span>
              </button>
              <button
                onClick={() => setActiveSection("projects")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeSection === "projects"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "text-slate-400 hover:text-emerald-400"
                }`}
              >
                <FolderGit2 className="w-4 h-4" />
                <span className="font-medium">Projects</span>
              </button>
              <button
                onClick={() => setActiveSection("skills")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeSection === "skills"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "text-slate-400 hover:text-emerald-400"
                }`}
              >
                <Code className="w-4 h-4" />
                <span className="font-medium">Skills</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        {activeSection === "home" && (
          <div className="min-h-[80vh] flex items-center">
            <div className="w-full">
              <div className="text-center mb-12">
                <div className="inline-block mb-6 p-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full">
                  <div className="bg-slate-900 rounded-full px-6 py-2">
                    <span className="text-emerald-400 font-medium">
                      Google Ads Specialist
                    </span>
                  </div>
                </div>
                <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  Leena Tomar
                </h1>
                <p className="text-2xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                Turning clicks into customers with smart targeting and powerful campaign optimization.
                </p>
                <div className="flex items-center justify-center gap-6 text-slate-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-emerald-400" />
                    <a
                      href="mailto:leenatomar8860@gmail.com"
                      className="hover:text-emerald-400 transition"
                    >
                      leenatomar8860@gmail.com
                    </a>
                  </div>
                  <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-emerald-400" />
                    <span>+91 8920191189</span>
                  </div>
                  <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                    <span>Delhi, India</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 justify-center place-items-center">

              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"> */}
                <div className="bg-slate-800/50 backdrop-blur-lg border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/50 transition-all hover:transform hover:scale-105">
                  <div className="bg-emerald-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <Award className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    3+ Years
                  </h3>
                  <p className="text-slate-400">
                    Experience in digital marketing and performance optimization
                  </p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-lg border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/50 transition-all hover:transform hover:scale-105">
                  <div className="bg-emerald-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <Briefcase className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    50+ Clients
                  </h3>
                  <p className="text-slate-400">
                    International accounts managed across diverse verticals
                  </p>
                </div>

               
              </div>
            </div>
          </div>
        )}

        {activeSection === "profile" && (
          <div className="space-y-8">
            <section className="bg-slate-800/50 backdrop-blur-lg border border-emerald-500/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <Target className="w-8 h-8 text-emerald-400" />
                About Me
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                Digital marketing professional with over 3 years of experience
                in Google Ads, Search Ads, Bing Ads, and Microsoft Ads
                analytics. Proven success in managing full-funnel campaigns for
                leading brands such as Nykaa, Carnival Cruise, and various food
                & beverage clients. Skilled in campaign strategy, optimization,
                A/B testing, and leveraging data to drive ROI.
              </p>
            </section>

            <section className="bg-slate-800/50 backdrop-blur-lg border border-emerald-500/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
                <Briefcase className="w-8 h-8 text-emerald-400" />
                Professional Experience
              </h2>

              <div className="space-y-8">
                <div className="border-l-2 border-emerald-500 pl-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-1">
                        Paid Search Associate
                      </h3>
                      <p className="text-emerald-400 font-medium text-lg">
                        IPG Mediabrands
                      </p>
                    </div>
                    <span className="text-slate-400 text-sm lg:text-base mt-2 lg:mt-0">
                      09/2024 – 07/2025
                    </span>
                  </div>
                  <ul className="mt-4 space-y-3 text-slate-300">
                    <li className="flex gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>
                        Led Google Ads campaigns for clients including Nykaa,
                        Carnival Cruise, and F&B brands
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>
                        Created and optimized full-funnel strategies; improved
                        ROAS and reduced CPA
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>
                        Delivered performance reports and insights; conducted
                        A/B tests to enhance ad effectiveness
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>
                        Collaborated with internal teams and clients for
                        performance-driven campaign strategies
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>
                        Conducted in-depth research analysis, including bid
                        strategies and keyword gap
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-emerald-500 pl-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-1">
                        Senior Process Executive (On-site Google)
                      </h3>
                      <p className="text-emerald-400 font-medium text-lg">
                        Cognizant Technology Solutions, Gurugram
                      </p>
                    </div>
                    <span className="text-slate-400 text-sm lg:text-base mt-2 lg:mt-0">
                      12/2022 – 07/2024
                    </span>
                  </div>
                  <ul className="mt-4 space-y-3 text-slate-300">
                    <li className="flex gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>
                        Managed 50+ international Google Ads accounts across
                        verticals like travel, pharma, healthcare
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>
                        Conducted keyword audits, gap analysis, and landing page
                        optimizations
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>
                        Designed tailored ad strategies; collaborated on beta
                        feature testing with Google teams
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>
                        Leveraged data to advise on bidding, targeting, and
                        campaign effectiveness
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-slate-800/50 backdrop-blur-lg border border-emerald-500/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
                <GraduationCap className="w-8 h-8 text-emerald-400" />
                Education
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Executive Post Graduate Certification
                      </h3>
                      <p className="text-slate-300">
                        Digital Marketing & Analytics
                      </p>
                      <p className="text-emerald-400 font-medium mt-1">
                        IIT Roorkee (iHUB DivyaSampark)
                      </p>
                      <p className="text-sm text-slate-400 italic mt-2">
                        Certified under the Department of Science & Technology,
                        Govt. of India
                      </p>
                    </div>
                    <span className="text-slate-400 text-sm lg:text-base mt-2 lg:mt-0">
                      2024 – 2025
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Bachelor of Commerce
                      </h3>
                      <p className="text-emerald-400 font-medium mt-1">
                        University of Delhi
                      </p>
                    </div>
                    <span className="text-slate-400 text-sm lg:text-base mt-2 lg:mt-0">
                      2015 – 2018
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-slate-800/50 backdrop-blur-lg border border-emerald-500/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
                <Award className="w-8 h-8 text-emerald-400" />
                Certifications
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-5 py-3 bg-emerald-500/10 text-emerald-400 rounded-xl text-sm font-medium border border-emerald-500/30 hover:bg-emerald-500/20 transition">
                  Google Ads Certification
                </span>
                {/* <span className="px-5 py-3 bg-emerald-500/10 text-emerald-400 rounded-xl text-sm font-medium border border-emerald-500/30 hover:bg-emerald-500/20 transition">
                  Meta Blueprint Certification
                </span> */}
                <span className="px-5 py-3 bg-emerald-500/10 text-emerald-400 rounded-xl text-sm font-medium border border-emerald-500/30 hover:bg-emerald-500/20 transition">
                  Display & Video Ads – Advanced
                </span>
                <span className="px-5 py-3 bg-emerald-500/10 text-emerald-400 rounded-xl text-sm font-medium border border-emerald-500/30 hover:bg-emerald-500/20 transition">
                  Executive PG Certificate – IIT Roorkee (2025)
                </span>
              </div>
            </section>
          </div>
        )}

        {activeSection === "projects" && (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white mb-8">Key Projects</h2>

            <div className="bg-slate-800/50 backdrop-blur-lg border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Nykaa – Full Funnel Optimization
                  </h3>
                  <span className="text-emerald-400 text-sm font-medium">
                    Beauty E-Commerce
                  </span>
                </div>
                <div className="bg-emerald-500/10 px-4 py-2 rounded-lg">
                  <span className="text-emerald-400 font-bold">+600% ROAS</span>
                </div>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>
                    Led multi-channel Google Ads for Nykaa's seasonal push;
                    built segmented funnels across TOFU-MOFU-BOFU
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>
                    Implemented ad scheduling + advanced audience layering;
                    improved ROAS by 600%.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Carnival Cruise – International Brand Visibility
                  </h3>
                  <span className="text-emerald-400 text-sm font-medium">
                    Travel & Tourism
                  </span>
                </div>
                <div className="bg-emerald-500/10 px-4 py-2 rounded-lg">
                  <span className="text-emerald-400 font-bold">
                    +27% Traffic
                  </span>
                </div>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>
                    Optimized ad copy, keywords, and bidding strategies,
                    leveraging data analytics to drive performance and deliver
                    impactful results for clients. Do budg
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>
                    Do budget allocations as per the account’s campaign
                    structure and client’s business. Optimize paid campaigns for
                    search and display networks to get optimal results like
                    increased conversions, decreased CPA, etc.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>
                    Consistently updated clients on their account performance
                    with detailed daily, weekly, and monthly reports. Support
                    stakeholders and clients in creating and developing Paid
                    Search strategies.
                  </span>
                </li>
                <li className="flex gap-3">
                  {/* <span className="text-emerald-400 mt-1">•</span>
                  <span>
                    A/B tested creatives with motion assets; grew brand traffic
                    by 27% in 2 months
                  </span> */}
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>
                    Delivered creative testing insights to boost engagement on
                    display ads
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>
                    Achieved 50% more qualified leads by customizing audience
                    intent and optimizing pages
                  </span>
                </li>
              </ul>
            </div>

            {/* <div className="bg-slate-800/50 backdrop-blur-lg border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Meta Ads – SaaS Lead Gen
                  </h3>
                  <span className="text-emerald-400 text-sm font-medium">
                    B2B Technology
                  </span>
                </div>
                <div className="bg-emerald-500/10 px-4 py-2 rounded-lg">
                  <span className="text-emerald-400 font-bold">+50% Leads</span>
                </div>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>
                    Built funnel campaigns using lookalike and custom audience
                    stacks
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>
                    Achieved 50% more qualified leads by customizing audience
                    intent and optimizing pages
                  </span>
                </li>
              </ul>
            </div> */}
          </div>
        )}

        {activeSection === "skills" && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white mb-8">
              Skills & Expertise
            </h2>

            <section className="bg-slate-800/50 backdrop-blur-lg border border-emerald-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 rounded-xl p-5 border border-emerald-500/10 hover:border-emerald-500/30 transition">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold text-xl">
                      •
                    </span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Google Ads & Bing Ads & Search Ads
                      </h4>
                      <p className="text-slate-400 text-sm">
                        Advanced campaign management and optimization
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-5 border border-emerald-500/10 hover:border-emerald-500/30 transition">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold text-xl">
                      •
                    </span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Campaign Optimization & A/B Testing
                      </h4>
                      <p className="text-slate-400 text-sm">
                        Data-driven performance improvements
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-5 border border-emerald-500/10 hover:border-emerald-500/30 transition">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold text-xl">
                      •
                    </span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Keyword Research & Bidding
                      </h4>
                      <p className="text-slate-400 text-sm">
                        Strategic bid management and keyword optimization
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-5 border border-emerald-500/10 hover:border-emerald-500/30 transition">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold text-xl">
                      •
                    </span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Analytics Tools
                      </h4>
                      <p className="text-slate-400 text-sm">
                        GA4, Tag Manager, Data Studio
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-5 border border-emerald-500/10 hover:border-emerald-500/30 transition">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold text-xl">
                      •
                    </span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Marketing Tools
                      </h4>
                      <p className="text-slate-400 text-sm">
                        Google Ads Editor, Excel, Tableau, Looker Studio
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-5 border border-emerald-500/10 hover:border-emerald-500/30 transition">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold text-xl">
                      •
                    </span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Technical Audits
                      </h4>
                      <p className="text-slate-400 text-sm">
                        Comprehensive website optimization
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-slate-800/50 backdrop-blur-lg border border-emerald-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-4">
                <span className="px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 rounded-xl font-medium border border-emerald-500/30 hover:scale-105 transition-transform">
                  Strategic Thinking
                </span>
                <span className="px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 rounded-xl font-medium border border-emerald-500/30 hover:scale-105 transition-transform">
                  Analytical Reasoning
                </span>
                <span className="px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 rounded-xl font-medium border border-emerald-500/30 hover:scale-105 transition-transform">
                  Client Communication
                </span>
                <span className="px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 rounded-xl font-medium border border-emerald-500/30 hover:scale-105 transition-transform">
                  Attention to Detail
                </span>
                <span className="px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 rounded-xl font-medium border border-emerald-500/30 hover:scale-105 transition-transform">
                  Problem Solving
                </span>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
