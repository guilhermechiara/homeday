import Home from './views/Home';
import Repository from "./views/Repository";
import Workflow from "./views/Workflow";
import UserRepositories from "@/views/UserRepositories";
import NotFound from "@/views/NotFound";

export const routes = [
    { path: '/', component: Home },
    { path: '/workflow', component: Workflow },
    { path: '/not-found', component: NotFound },
    { path: '/repository/:username', component: UserRepositories },
    { path: '/repository/:username/:repository', component: Repository },
];

