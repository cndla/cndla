/** @type {import('next').NextConfig} */
const { withNextVideo } = require('next-video/process');
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: [
            '@react-email/components',
            '@react-email/render',
            '@react-email/tailwind'
        ]
    }
}

module.exports = withNextVideo(nextConfig)
