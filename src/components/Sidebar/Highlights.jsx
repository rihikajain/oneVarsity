import { Megaphone, Calendar, BookOpen } from "lucide-react";
const highlights = [
  {
    id: 1,
    icon: Megaphone,
    title: 'Announcements',
    content: (<>New AI fundamentals track launching next week. Enroll now!</>),
  },
  {
    id: 2,
    icon: Calendar,
    title: 'Events',
    content: 'Webinar: Career paths in data science — Thu, 3 PM.',
  },
  {
    id: 3,
    icon: BookOpen,
    title: 'Featured Courses',
    content: (
      <ul className="list-disc list-inside text-gray-600">
        <li>
          Product Design Essentials <span className="text-gray-400 text-xs">12 weeks</span>
        </li>
        <li>
          Cloud Fundamentals <span className="text-gray-400 text-xs">5 credits</span>
        </li>
        <li>
          Python <span className="text-gray-400 text-xs">8 weeks</span>
        </li>
      </ul>
    ),
  },
];
export default highlights