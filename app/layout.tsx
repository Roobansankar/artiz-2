import type { Metadata } from 'next';
import {Shell} from '@/components/site';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL('https://formandhaven.example'),title:{default:'Artiz — Thoughtful furniture. Meaningful living.',template:'%s | Artiz'},description:'Furniture and objects designed to bring warmth, character, and quiet beauty into everyday life. Explore the Artiz concept collection.',openGraph:{title:'Artiz',description:'Make room for living.',images:['https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85']}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><Shell><div id="main-content">{children}</div></Shell></body></html>}
