'use client';
import {create} from 'zustand';
import {persist,createJSONStorage} from 'zustand/middleware';
type Item={key:string;id:string;quantity:number;color:string;size:string};
type Store={items:Item[];saved:string[];add:(id:string,color?:string,size?:string)=>void;quantity:(key:string,n:number)=>void;toggle:(id:string)=>void};
export const useStore=create<Store>()(persist((set)=>({items:[],saved:[],add:(id,color='Natural',size='Standard')=>set(s=>{const key=[id,color,size].join(':');const found=s.items.find(x=>x.key===key);return {items:found?s.items.map(x=>x.key===key?{...x,quantity:x.quantity+1}:x):[...s.items,{key,id,quantity:1,color,size}]}}),quantity:(key,n)=>set(s=>({items:s.items.map(x=>x.key===key?{...x,quantity:n}:x).filter(x=>x.quantity>0)})),toggle:id=>set(s=>({saved:s.saved.includes(id)?s.saved.filter(x=>x!==id):[...s.saved,id]}))}),{name:'form-haven-store',storage:createJSONStorage(()=>localStorage),skipHydration:true}));
