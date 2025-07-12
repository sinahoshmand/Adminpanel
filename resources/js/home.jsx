import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
import { createRoot } from 'react-dom/client';
import "../css/app.css"

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
           <App {...props} />
        );
        },
    progress: {
        color:'red',
    },
});

