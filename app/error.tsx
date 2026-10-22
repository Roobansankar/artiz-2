'use client';
export default function Error({reset}:{reset:()=>void}){return <section className="section empty"><h1>A moment to reset.</h1><p>Something interrupted this page. Please try again.</p><button className="button" onClick={reset}>Try again</button></section>}
