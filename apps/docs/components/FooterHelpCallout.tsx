import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export type FooterHelpCalloutType = 'default' | 'postgres'

const content = {
  default: {
    title: 'Need some help?',
    description: `Not to worry, our specialist engineers are here to help. Submit a support ticket through the [Dashboard](https://app.supabase.com/support/new).`,
  },
  postgres: {
    title: 'Looking for Serverless Postgres?',
    description: `Supabase is the fastest way to get started with Postgres in a serverless environment. [Learn more](https://supabase.com/database?utm=postgres-helpers).`,
  },
}

const FooterHelpCallout = ({
  footerHelpType = 'default',
  title,
}: {
  footerHelpType: FooterHelpCalloutType
  title: any
}) => {
  return (
    <div className="mt-32 not-prose">
      <div
        className="
        min-w-full 
        px-8 py-6 
        prose 
        bg-scale-300 dark:bg-whiteA-200 
        rounded"
      >
        <h5 className="text-sm m-0 text-scale-1100">{content[footerHelpType].title}</h5>
        <p className="m-0 text-sm text-scale-900">
          <ReactMarkdown>{content[footerHelpType].description}</ReactMarkdown>
        </p>
      </div>
    </div>
  )
}

export default FooterHelpCallout
