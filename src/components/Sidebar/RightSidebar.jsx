
import React from "react";
import { BookOpen, Briefcase, Calendar, BarChart2, Users, LifeBuoy } from "lucide-react";

const StudentCards = [
  {
    icon: BookOpen,
    title: "Suggested Course",
    subtitle: "Data Analysis with Pandas based on your recent completions."
  },
  {
    icon: Briefcase,
    title: "Internship Opportunity",
    subtitle: "UX Research Intern at Acme Labs - applications close in 10 days."
  },
  {
    icon: Calendar,
    title: "Upcoming Event",
    subtitle: "Portfolio Review Night – Tue, 6 PM. Reserve your slot."
  }
];

const FacultyCards = [
  {
    icon: BookOpen,
    title: "Suggested Resource",
    subtitle: "Interactive AI tools"
  },
  {
    icon: Briefcase,
    title: "Faculty Conclave",
    subtitle: "lorem mfskfmsfksmf"
  },
  {
    icon: Calendar,
    title: "Upcoming workshop",
    subtitle: "hands on course at fridsy"
  }
];

const AdminCards = [
  {
    icon: BookOpen,
    title: "Platform Usage Trends",
    subtitle: "nfhsifhsaifhalsfksdnskdfnSK."
  },
  {
    icon: Briefcase,
    title: "Pending Vendor Approvals",
    subtitle: "gbaeorjwopeporkowrkoekfoe"
  },
  {
    icon: Calendar,
    title: "System Alerts",
    subtitle: "nfodjaopqeipwriwpoewojries."
  }
];

const quickLinks = [
  { icon: BarChart2, title: "My Courses" },
  { icon: Users, title: "My Groups" },
  { icon: Briefcase, title: "Career Tools" },
  { icon: LifeBuoy, title: "Support" }
];

function RightCard({ icon: Icon, title, subtitle }) {
  return (
    <div className="bg-cardBg rounded-xl flex items-center p-4 mb-3 shadow border-2 border-cardBorder">
      {Icon && <Icon className="text-black mr-4" size={28} />}
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-gray-600 text-sm">{subtitle}</div>
      </div>
    </div>
  );
}

export default function RightSidebar({ user, cards }) {

  if (user == "Student") {
    cards = StudentCards
  }
  else if (user === "Faculty") {
    cards = FacultyCards
  }
  else if (user == "Admin") {
    cards = AdminCards
  }
  return (
    <>
      <div className="w-full h-screen ">
        <div className="bg-whitee rounded-xl h-fit px-4 pt-4 mb-2 border-2 border-cardBorder">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-lg">For You</span>
            <button className="text-black text-sm font-medium hover:text-bluee">See all</button>
          </div>
          {cards.map((card, idx) => (
            <RightCard key={idx} icon={card.icon} title={card.title} subtitle={card.subtitle} />
          ))}
        </div>

        <div className="bg-whitee h-fit rounded-xl px-4 pt-4 pb-3 border-2 border-cardBorder">
          <div className="font-semibold mb-4">Quick Links</div>
          <div className="grid grid-cols-2 gap-3">
            {quickLinks.map((link, idx) => (
              <button
                key={idx}
                className="bg-cardBg rounded-lg flex flex-col items-center p-5 shadow border-2 border-cardBorder hover:bg-bluee hover:text-whitee transition"
              >
                <link.icon size={24} className="mb-2" />
                <span className="font-medium text-sm">{link.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
