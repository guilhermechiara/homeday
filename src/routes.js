import Home from './views/Home';
import Repository from "./views/Repository";
import Workflow from "./views/Workflow";

export const routes = [
    { path: '/', component: Home },
    { path: '/repository/:id', component: Repository },
    { path: '/workflow', component: Workflow }
];

