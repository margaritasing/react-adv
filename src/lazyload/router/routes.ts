import { lazy, LazyExoticComponent } from 'react';
import NoLazy from '../Page/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path:string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name:string
}

const lazylayout = lazy(() => import(/* webpackChunkName:"LazyLayout"*/'../Layout/LazyLayout'))



export const routes: Route[] = [
    {
        to:'/lazylayout',
        path: 'lazylayout',
        Component:lazylayout,
        name:'Lazy Layout'
    },
    {
        to:'/no-lazy',
        path: 'no-lazy',
        Component:NoLazy,
        name:'No Lazy'
    }
   
]