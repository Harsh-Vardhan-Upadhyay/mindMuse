from django.core.management.base import BaseCommand
from api.models import Project

class Command(BaseCommand):
    help = 'Populates the database with sample projects'

    def handle(self, *args, **kwargs):
        sample_projects = [
           {
        "title": "Online Learning Platform",
        "description": "An interactive online learning platform offering various courses with features like quizzes, forums, and progress tracking to enhance the learning experience for users of all ages.",
        "domain": "Education",
        "tech": "Web Development",
        "stack": "Django, React, PostgreSQL",
        "difficulty": "Intermediate",
        "github_link": "https://github.com/example/online-learning-platform"
    },
    {
        "title": "Personal Finance Tracker",
        "description": "A personal finance application that helps users track their income, expenses, and savings goals, providing visualizations and insights to make informed financial decisions effectively.",
        "domain": "Finance",
        "tech": "Web Development",
        "stack": "Flask, SQLAlchemy, Bootstrap",
        "difficulty": "Intermediate",
        "github_link": "https://github.com/example/personal-finance-tracker"
    },
    {
        "title": "Virtual Event Management System",
        "description": "A web-based platform that facilitates the organization and management of virtual events, allowing users to register, participate in sessions, and network with other attendees seamlessly.",
        "domain": "Event Management",
        "tech": "Web Development",
        "stack": "Node.js, Express, MongoDB",
        "difficulty": "Advanced",
        "github_link": "https://github.com/example/virtual-event-management-system"
    },
    {
        "title": "E-commerce Website",
        "description": "A fully functional e-commerce website allowing users to browse products, add items to their cart, and securely complete transactions, enhancing online shopping experiences.",
        "domain": "Retail",
        "tech": "Web Development",
        "stack": "Magento, PHP, MySQL",
        "difficulty": "Advanced",
        "github_link": "https://github.com/example/e-commerce-website"
    },
    {
        "title": "Travel Booking System",
        "description": "A travel booking system that enables users to search for flights and hotels, compare prices, and make reservations all in one place, simplifying the travel planning process.",
        "domain": "Travel",
        "tech": "Web Development",
        "stack": "Ruby on Rails, PostgreSQL, Bootstrap",
        "difficulty": "Advanced",
        "github_link": "https://github.com/example/travel-booking-system"
    },
    {
        "title": "Social Media Analytics Tool",
        "description": "An analytics tool designed to track social media metrics, providing users with insights into their engagement, follower growth, and content performance over time for informed decision-making.",
        "domain": "Social Media",
        "tech": "Data Science",
        "stack": "Python, Pandas, Matplotlib",
        "difficulty": "Intermediate",
        "github_link": "https://github.com/example/social-media-analytics-tool"
    },
    {
        "title": "Recipe Finder App",
        "description": "An application that helps users discover new recipes based on ingredients they have at home, making cooking more accessible and enjoyable for everyone.",
        "domain": "Food & Drink",
        "tech": "Mobile Development",
        "stack": "React Native, Firebase",
        "difficulty": "Beginner",
        "github_link": "https://github.com/example/recipe-finder-app"
    },
    {
        "title": "Real-time Chat Application",
        "description": "A real-time chat application that enables users to communicate instantly through text, video, and voice, offering a user-friendly interface for seamless interactions.",
        "domain": "Communication",
        "tech": "Web Development",
        "stack": "Socket.io, Node.js, React",
        "difficulty": "Intermediate",
        "github_link": "https://github.com/example/real-time-chat-app"
    },
    {
        "title": "Inventory Management System",
        "description": "An inventory management system that allows businesses to track stock levels, orders, and sales, providing insights to optimize supply chain management and reduce costs.",
        "domain": "Business",
        "tech": "Web Development",
        "stack": "Django, React, SQLite",
        "difficulty": "Intermediate",
        "github_link": "https://github.com/example/inventory-management-system"
    },
    {
        "title": "Fitness App with Wearable Integration",
        "description": "A fitness application that syncs with wearable devices to track workouts, monitor health metrics, and set fitness goals, promoting a healthier lifestyle through data-driven insights.",
        "domain": "Health & Fitness",
        "tech": "Mobile Development",
        "stack": "Flutter, Firebase",
        "difficulty": "Advanced",
        "github_link": "https://github.com/example/fitness-app-wearable-integration"
    },
    {
                "title": "Video Conferencing Application",
                "description": "A web-based video conferencing app that allows users to host virtual meetings, share screens, and collaborate in real time, featuring chat functionality and an intuitive interface for seamless communication.",
                "domain": "Communication",
                "tech": "Web Development",
                "stack": "Socket.io, Node.js, React",
                "difficulty": "Intermediate",
                "github_link": "https://github.com/mohitagarwal1996/video-conferencing-app"
            },
            {
                "title": "Collaborative Whiteboard Tool",
                "description": "An online collaborative whiteboard application that enables users to draw, write, and share ideas in real-time, facilitating effective brainstorming sessions and creative collaborations across teams.",
                "domain": "Communication",
                "tech": "Web Development",
                "stack": "Socket.io, Node.js, React",
                "difficulty": "Intermediate",
                "github_link": "https://github.com/hardikb1511/collaborative-whiteboard"
            },
            {
                "title": "Group Messaging Platform",
                "description": "A group messaging platform that allows users to create channels, share files, and send messages in real time, designed to enhance team communication and project collaboration.",
                "domain": "Communication",
                "tech": "Web Development",
                "stack": "Socket.io, Node.js, React",
                "difficulty": "Intermediate",
                "github_link": "https://github.com/yanghaojie/chat-app"
            },
            {
    "title": "Language Learning App",
    "description": "A comprehensive language learning application that utilizes interactive lessons, quizzes, and user forums to help learners practice and improve their language skills through engaging content and gamified experiences.",
    "domain": "Education",
    "tech": "Web Development",
    "stack": "Django, React, PostgreSQL",
    "difficulty": "Intermediate",
    "github_link": "https://github.com/johndoe/language-learning-app"
},
{
    "title": "Virtual Classroom Platform",
    "description": "A virtual classroom platform that enables teachers to create interactive lessons, conduct live sessions, and manage student attendance, enhancing the online learning experience through real-time interaction and collaboration.",
    "domain": "Education",
    "tech": "Web Development",
    "stack": "Django, React, PostgreSQL",
    "difficulty": "Intermediate",
    "github_link": "https://github.com/janedoe/virtual-classroom-platform"
},
{
    "title": "Course Management System",
    "description": "A course management system that allows educators to create, manage, and deliver online courses, including features for assessments, student tracking, and performance analytics to improve educational outcomes.",
    "domain": "Education",
    "tech": "Web Development",
    "stack": "Django, React, PostgreSQL",
    "difficulty": "Intermediate",
    "github_link": "https://github.com/smith/course-management-system"
},
        ]

        for project_data in sample_projects:
            Project.objects.create(**project_data)

        self.stdout.write(self.style.SUCCESS('Successfully populated the database with sample projects'))