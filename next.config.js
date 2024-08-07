/** @type {import('next').NextConfig} */
const { withNextVideo } = require('next-video/process');
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: [
            '@react-email/components',
            '@react-email/render',
            '@react-email/tailwind',
        ],
    },
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'en',
    },
};

module.exports = withNextIntl(withNextVideo(nextConfig));
