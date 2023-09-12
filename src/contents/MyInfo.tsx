import { Typography } from '@mui/material';
import { RouterLink } from '../components/Navigation';
import { pagesKey } from '../siteInfo';
import { IResume } from '../customTypes';
import { Header } from '../components/CustomizedMUI';

export const mediaLink = {
    'Github': 'https://github.com/ngthing',
    'LinkedIn': 'https://www.linkedin.com/in/ngthinguyen',
    'EmailMe': 'mailto:thi@justthinguyen.com',
    'Email': 'thi@justthinguyen.com'
};

export const resumeLink = 'https://docs.google.com/document/d/1bYqGHmOM8DATNu2_mWSpdYh5Wyx66q35fQAcQBuUwxY/edit?usp=sharing';

export const fullName = 'Thi Nguyen'
export const mainSiteDescription = fullName + ' Software Engineer Personal Website'
export const Intro = () => (
    <Typography component={'div'}>
        <Header color="primary.main">
            Hi! I’m Thi, by profession, a full-stack software engineer. 👩🏻‍💻
        </Header>
        <p>
            Sometimes, I love creating software to solve problems and improve daily efficiency for myself and others. I'm also passionate about learning and sharing my knowledge.
            Recently, I discovered my love for building React.js, TypeScript applications, and I'm working on a couple projects involving these two technologies, as well as writing tutorials to share what I learn.
        </p>

        <p>
            At other times, I enjoy being active and spending time outdoors, reading, traveling, and exploring new places.
            Besides work, I think life offers so many meaningful and exciting experiences! Therefore, if this site appears to be outdated, please do not think of me as a slacker (although you could be right sometimes...)!
            Because I might be somewhere enjoying a beautiful hike or bike ride, running, doing yoga, playing volleyball, reading a good book, practicing guitar, volunteering, or spending quality time with my family and friends.
            I really do take physical and mental health seriously, as well as work-life balance! 😁
        </p>

        <p>
            On this site, I hope you can find something useful about building web applications with TypeScript, React.js and other software-related topics in <RouterLink to={pagesKey['coding']['path']}>{pagesKey['coding']['name']}</RouterLink>.
            Occasionally, I will attempt to share about other topics that interest me in my <RouterLink to={pagesKey['blog']['path']}>{pagesKey['blog']['name']}</RouterLink>,
            such as active and healthy lifestyle, travel, personal finance, climate change and conservation, or simply random things I learn from building the life I love.
        </p>

        <p>
            Thanks for stopping by and I hope you have a beautiful day! 🌻
        </p>

        Sincerely,<br />
        {fullName}

    </Typography >
)


const ThiCollege = 'George Mason University'; const ThiCollegeLocation = 'Fairfax, VA';
export const ThiResume: IResume = {
    'SKILLS': {
        'Front-end': ['TypeScript,+5', 'React.js,+5', 'JavaScript,+5', 'HTML', 'CSS', 'Material UI', 'jQuery', 'Paper.js', 'Puppeteer'],
        'Back-end': ['PHP,+5', 'Node.js', 'Java', 'Amazon DynamoDB', 'PostgreSQL', 'Firebase Realtime Database', 'APIs design']
    },
    'WORK HISTORY': [
        {
            position: 'Full Stack Software Engineer',
            company: 'Dulles Glass and Mirror',
            duration: 'August 2018 - July 2023',
            location: 'Manassas, VA',
            details: [
                "Designed, implemented, tested and shipped 100+ new features for both front-end and back-end of the glass manufacturing and customer relationship management applications used by the sales, operations, and fabrication departments.",
                "Managed 20+ tables DynamoDB database with key tables comprising 5000+ entries. Learned AWS services.",
                "Created a web scraping application using TypeScript and Puppeteer, allowing for the extraction of information from thousands of hardware products on vendor websites for integration into the company's database.",
                "These technical contributions enabled automatic quotes which led to increased sales and helped the company launch their franchise/partner program.",
                "Conducted direct and virtual training sessions and support for 10+ key users on a regular basis, gathering feedback on our applications and gaining insights into their business challenges and requests.",
                "Reviewed customer requirements and designed software solutions and architectures with the product manager and lead engineers.",
                "Conducted code review, facilitated sprint planning meetings, technical meetings across 3 teams to assess user requirements, brainstorm solutions, and assign tasks to appropriate team members.",
                "Provided onboarding guidance and mentorship to four engineers and three interns."
            ]
        },
        {
            position: 'Software Engineer Intern',
            company: 'ScienceLogic',
            duration: 'January 2018 - May 2018',
            location: 'Reston, VA',
            details: [
                "Implemented 5+ new features that enhance the Search functionality within ScienceLogic's new UI such as adding search chips as users type in words in the search box, displaying results matching chips, and enabling chip editing, used React.js and Draft.js",
                "Implemented unit tests for the newly created features, utilizing Jest and Enzyme.",
                "Wrote comprehensive documentation detailing the functioning of the Search feature."
            ]

        },
        {
            position: 'Software Engineer Intern',
            company: 'ScienceLogic',
            duration: 'June 2017 - August 2017',
            location: 'Reston, VA',
            details: [
                "Developed \"Elmer Bot,\" a Slackbot designed to interface with the internal VM management tools.",
                "Wrote unit tests using the Jest testing framework for the new UI of ScienceLogic software.",
                "Participated in the Agile Software Development process, engaged in daily stand-ups, sprint planning sessions, and sprint reviews."
            ]
        },
        {
            position: 'Undergraduate Teaching Assistant',
            company: ThiCollege,
            duration: 'August 2016 - December 2017',
            location: ThiCollegeLocation,
            details: [
                "Provided support to 50+ students by answering their questions during office hours and through the Piazza forum.",
                "Offered constructive feedback while grading their assignments and group projects.",
                "Courses: CS 306 - Synthesis of Ethics and Law for the Computing Professional (Fall 2017), CS 367 - Computer Systems and Programming (C, x86 Assembly) (Spring 2017); Intro to Computer Programming (Python), Object-Oriented Programming (Java) (Fall 2016)"
            ],
            links: {
                'CS 306 - Synthesis of Ethics and Law for the Computing Professional': 'https://cs.gmu.edu/media/syllabi/Fall2017/CS_306MaddoxT.html',
                'CS 367 - Computer Systems and Programming': 'https://cs.gmu.edu/media/syllabi/Spring2017/CS367AydinH.html',
            }
        },
        {
            position: 'Undergraduate Researcher',
            company: ThiCollege,
            duration: 'June 2016 - August 2016',
            location: ThiCollegeLocation,
            details: [
                "Worked in a project funded by NSF BIG DATA: Collaborative Research: Learning Data Analytics: Providing Actionable Insights to Increase CollegeStudent Success. Under supervision of Dr. Huzefa Rangwala.",
                "Designed and developed both front and back end for a degree planning web app using Django, Python, SQL,JQuery, AJAX. https://github.com/ngthing/SummerResearch2016-DegreePlannerWebApp"
            ],
            links: {
                'Dr. Huzefa Rangwala': 'https://cs.gmu.edu/~rangwala/la.html',
                'NSF BIG DATA': 'https://www.nsf.gov/awardsearch/showAward?AWD_ID=1447489&HistoricalAwards=false',
                'https://github.com/ngthing/SummerResearch2016-DegreePlannerWebApp': 'https://github.com/ngthing/SummerResearch2016-DegreePlannerWebApp'
            }
        }
    ],
    'EDUCATION': [
        {
            degree: 'Bachelor of Science',
            school: ThiCollege,
            graduation: 'May 2018',
            major: 'Applied Computer Science concentration in Software Engineering',
            minor: 'Minor Economics',
            more: 'Magna Cum Laude'
        }
    ]
}