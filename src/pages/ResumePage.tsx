import { Helmet } from 'react-helmet-async';
import { Box, Grid } from '@mui/material';
import { fullName, ThiResume } from '../contents/MyInfo';
import { ISkills, IWorkHistory, IEducationHistory, IResume } from '../Types';

const pageName = 'Resume';
interface ResumeProps {
    contents: IResume
}
const Skills = (ps: { skills: ISkills }) => (
    <>
        <h3>SKILLS</h3>
        {Object.keys(ps.skills).map(key =>
            <div>
                <h4>{key}</h4>
                <p>{ps.skills[key]}</p>
            </div>
        )}
    </>
)
const WorkHistory = (ps: { workHistory: IWorkHistory[] }) => (
    <>
        <h3>WORK HISTORY</h3>
        {ps.workHistory.map(work =>
            Object.keys(work).map(key =>
                <div>
                    <h4>{key}</h4>
                    <p>{work[key as keyof IWorkHistory]}</p>
                </div>
            )
        )}

    </>
)
const Resume = (ps: ResumeProps) => {
    const skills = ps.contents.SKILLS, workHistory = ps.contents['WORK HISTORY'], education = ps.contents.EDUCATION;
    return (
        <>
            <Skills skills={skills} />
            <WorkHistory workHistory={workHistory} />
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
