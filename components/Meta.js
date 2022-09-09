import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta charSet='utf-8' />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <link rel="icon" href="/images/my-logo.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'WJ Portfolio',
    keywords: 'Wong Wei Jian, JackWorld99, Personal Portfolio',
    description: 'A personal portfolio website that provides information about me, a compilation of relevant work samples and documents gathered during school years and presented in a structured manner, and how to contact me.',
}

export default Meta