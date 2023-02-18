import { createApp } from 'vue';
import App from './index.vue';
import { router, store } from './providers';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, fab);
dom.watch();

const app = createApp(App);

app.use(store).use(router);

export { app };
