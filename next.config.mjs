import createNextIntlPlugin from "next-intl/plugin"; // default olarak alıyoruz

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "lh3.googleusercontent.com",
            "firebasestorage.googleapis.com",
            "pagedone.io",
            "ihm.bilkent.edu.tr",
            "res.cloudinary.com",
            "picsum.photos",
        ],
    },
};

export default withNextIntl(nextConfig);