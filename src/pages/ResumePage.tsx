import { Helmet } from 'react-helmet-async';
import { Badge, Box, Chip, Grid, Typography, Button, Link } from '@mui/material';
import { ThiResume } from '../contents/MyInfo';
import { getPageTitle } from '../siteInfo';
import { ISkills, IWorkHistory, IEducationHistory, IResume } from '../customTypes';
import { insertLink } from '../utils';
import { Caption, PlainLink, Subtitle, TextTooltip, TextStack, Title } from '../components/CustomizedMUI';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

interface ResumeProps {
    contents: IResume
}

// TODO: refactor to reuse
const Skills = (ps: { skills: ISkills }) => {
    const title = 'SKILLS';
    const specialSkillChip = (s: string, y: string) => (
        <TextTooltip key={s} title={y + ' years working experience'} placement="top-end" sx={{ bgcolor: 'transparent' }} >
            <Badge badgeContent={y} color="primary" sx={{ mr: 1 }}>
                <Chip label={s} color="secondary" size="small" sx={{ pr: 0.5 }} />
            </Badge>
        </TextTooltip>
    );
    const skillChip = (s: string) => (<Chip key={s} label={s} color="secondary" size="small" />)

    const skillsStack = (skills: string[]) => {
        return (
            <TextStack direction="row" spacing={1} sx={{ mt: 1 }}>
                {skills.map(s => s.split(',')).map((sYear) => (sYear[1] ? specialSkillChip(sYear[0], sYear[1]) : skillChip(sYear[0])))}
            </TextStack>)
    };

    return (
        <Box>
            <Title id={title.toLowerCase()}>{title}</Title>
            {Object.keys(ps.skills).map(key =>
                <div key={key}><Subtitle>{key}</Subtitle> {skillsStack(ps.skills[key])}</div>
            )}
            <br />
        </Box>
    )
}
const WorkHistory = (ps: { workHistory: IWorkHistory[] }) => {
    const title = 'WORK HISTORY';
    const Work = (work: IWorkHistory) => {
        const { position, company, duration, location, details } = work;
        const links = work.links ?? {};
        return (
            <Box key={`${position}-${company}-${duration}`}>
                <Subtitle>{position} @ {company}
                    <Caption>  {duration} | {location} </Caption>
                </Subtitle>
                <ul>{details.map((info, i) => <li key={i} dangerouslySetInnerHTML={{ __html: insertLink(info, links) }}></li>)}</ul>
            </Box>
        )
    };
    return (
        <Box>
            <Title id='work'>{title}</Title>
            {ps.workHistory.map(work => Work(work))}
        </Box>
    )
}

const EducationHistory = (ps: { educationHistory: IEducationHistory[] }) => {
    const title = 'EDUCATION';
    const Education = (edu: IEducationHistory) => {
        const { degree, school, graduation, major, minor, more } = edu;
        return (
            <Box key={`${degree}-${school}`}>
                <Subtitle>{degree}, {school}
                    <Caption>  {graduation}  </Caption>
                </Subtitle>
                <Typography sx={{ ml: '20px' }}>{major}, {minor}, {more}</Typography >
            </Box>
        )
    };
    return (
        <Box>
            <Title id={title.toLowerCase()}>{title}</Title>
            {ps.educationHistory.map(edu => Education(edu))}
        </Box>
    )
}

const Resume = (ps: ResumeProps) => {
    const skills = ps.contents.SKILLS, workHistory = ps.contents['WORK HISTORY'], education = ps.contents.EDUCATION;
    return (
        <>
            <Skills skills={skills} />
            <WorkHistory workHistory={workHistory} />
            <EducationHistory educationHistory={education} />
        </>
    );
}

export default function ResumePage() {
    const pageName = 'Resume';
    return (
        <>
            <Helmet>
                <title>{getPageTitle(pageName)}</title>
            </Helmet>
            <Grid container spacing={2}>
                <Grid item xs={0} md={0.5} lg={0.5}></Grid>
                <Grid item xs={12} md={9} lg={9} sx={{ p: 5 }}>
                    <Button color='secondary' sx={{ position: 'relative', right: '-90%' }}>
                        <TextTooltip title='See Resume in PDF' placement='bottom'>
                            <Link target='_blank' href='ThiNguyen-Resume.pdf'><PictureAsPdfIcon fontSize='large' /></Link>
                        </TextTooltip>
                    </Button>

                    <Resume contents={ThiResume} />
                </Grid>
                <Grid item xs={0} md={2.5} lg={2.5} className='contents-nav' container sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
                    <Box component="nav">
                        <Subtitle>Overview</Subtitle><br />
                        <Subtitle><PlainLink href='#skills'>SKILLS</PlainLink></Subtitle><br />
                        <Subtitle><PlainLink href='#work'>WORK</PlainLink></Subtitle><br />
                        <Subtitle><PlainLink href='#education'>EDUCATION</PlainLink></Subtitle><br />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
