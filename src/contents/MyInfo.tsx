import { Typography } from '@mui/material';
import { RouterLink } from '../components/Navigation';
import { pages } from '../siteInfo';


export const Intro = () => (
    <Typography>
        <h2>Hi friend! ☀️</h2>
        <p>
            I’m Thi, by profession, a full-stack software engineer who spends most of the year in Northern Virginia/Washington, DC, USA.
            In July 2023, I decided to take a short break from my 9-5 job to work on projects that I've been wanting to do (like this website!).
        </p>
        <p>
            Sometimes, I love creating software to solve problems and improve daily efficiency for myself and others. I'm also passionate about learning and sharing my knowledge.
            Recently, I discovered my love for building ReactJS, TypeScript applications, and I'm working on a couple projects involving these two technologies, as well as writing tutorials to share what I learn.
        </p>

        <p>
            At other times, I enjoy being active and spending time outdoors, reading, traveling, and exploring new places.
            Besides work, I think life offers so many meaningful and exciting experiences! Therefore, if this site appears to be outdated, <b>please do not think of me as a slacker </b>(although you could be right sometimes...),
            as I might be somewhere enjoying a beautiful hike or bike ride, running, doing yoga, playing volleyball, reading a good book, practicing guitar, volunteering, or spending quality time with my family and friends.
            I really do take physical and mental health seriously, as well as work-life balance! 😁
        </p>

        <p>
            On this site, I hope you can find something useful about programming in <RouterLink to={pages['Coding Tutorials']}>Coding Tutorials</RouterLink>.
            Occasionally, I will attempt to share about other topics that interest me in my <RouterLink to={pages['Blog']}>Blog</RouterLink>,
            such as active and frugal lifestyle, travel and travel hacking, side hustling, climate change and conservation, and lessons I learn from building the life I love.
        </p>

        <p>
            Thanks for stopping by and I hope you have a beautiful day! 🌻
        </p>

        Sincerely,<br />
        Thi Nguyen

    </Typography >
)