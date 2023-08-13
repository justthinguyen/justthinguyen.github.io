import { Helmet } from 'react-helmet-async';
import { Badge, Box, Chip, Grid, Typography, Button, Link, Tooltip } from '@mui/material';
import { fullName, ThiResume } from '../contents/MyInfo';
import { ISkills, IWorkHistory, IEducationHistory, IResume } from '../Types';
import { Caption, Subtitle, TextTooltip, TextStack, Title } from '../components/CustomizedMUI';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const pageName = 'Resume';
interface ResumeProps {
    contents: IResume
}
// TODO: refactor to reuse
const Skills = (ps: { skills: ISkills }) => {
    const title = 'SKILLS';
    const specialSkillChip = (s: string, y: string) => (
        <TextTooltip title={y + ' years working experience'} placement="top-end" sx={{ bgcolor: 'transparent' }} >
            <Badge badgeContent={y} color="primary" sx={{ mr: 1 }}>
                <Chip label={s} color="secondary" size="small" sx={{ pr: 0.5 }} />
            </Badge>
        </TextTooltip>
    );
    const skillChip = (s: string) => (<Chip label={s} color="secondary" size="small" />)

    const skillsStack = (skills: string[]) => {
        return (
            <TextStack direction="row" spacing={1}>
                {skills.map(s => s.split(',')).map((sYear) => (sYear[1] ? specialSkillChip(sYear[0], sYear[1]) : skillChip(sYear[0])))}
            </TextStack>)
    };

    return (
        <Box>
            <Title>{title}</Title>
            {Object.keys(ps.skills).map(key =>
                <div><Subtitle>{key}</Subtitle> {skillsStack(ps.skills[key])}</div>
            )}
            <br />
        </Box>
    )
}
const WorkHistory = (ps: { workHistory: IWorkHistory[] }) => {
    const title = 'WORK HISTORY';
    const Work = (work: IWorkHistory) => {
        const { position, company, duration, location, details } = work;
        return (
            <>
                <Subtitle>{position} @ {company}
                    <Caption>  {duration} | {location} </Caption>
                </Subtitle>
                <Typography>
                    <ul>{details.map(info => <li>{info}</li>)}</ul>
                </Typography>
            </>
        )
    };
    return (
        <Box>
            <Title>{title}</Title>
            {ps.workHistory.map(work => Work(work))}
        </Box>
    )
}

const EducationHistory = (ps: { educationHistory: IEducationHistory[] }) => {
    const title = 'EDUCATION';
    const Education = (edu: IEducationHistory) => {
        const { degree, school, graduation, major, minor, more } = edu;
        return (
            <>
                <Subtitle>{degree}, {school}
                    <Caption>  {graduation}  </Caption>
                </Subtitle>
                <Typography sx={{ ml: '20px' }}>{major}, {minor}, {more}</Typography >
            </>
        )
    };
    return (
        <Box>
            <Title>{title}</Title>
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
    return (
        <>
            <Helmet>
                <title>{fullName} - {pageName}</title>
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
                <Grid item xs={0} md={2.5} lg={2.5} className='contents-nav' container  >
                    <Box component="nav">
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
