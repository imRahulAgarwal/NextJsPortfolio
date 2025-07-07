export default function DisplayRawHTML({ html, cssClass }: { html: string; cssClass?: string }) {
	return <div dangerouslySetInnerHTML={{ __html: html }} className={cssClass} />;
}
