// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                category: resolve(__dirname, './category.html'),
                checkout: resolve(__dirname, './checkout.html'),
                cartnewpage: resolve(__dirname, './cartPage.html'),
                productpage: resolve(__dirname, './product-page.html'),
            },
        },
    },
});
