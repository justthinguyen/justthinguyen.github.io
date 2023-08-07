import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string,
    description: string,
    name: string,
    type: string,
    image?: string,
}

export const SEO = (ps: SEOProps) => {
    const { title, description, name, type, image } = ps;
    return (
        <Helmet>
            { /* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            { /* End standard metadata tags */}
            { /* Facebook tags */}
            <meta property="og:image" content={image} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            { /* End Facebook tags */}

            { /* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            { /* End Twitter tags */}
        </Helmet>
    )
}