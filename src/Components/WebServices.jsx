import React from 'react';

const services = [
  {
    title: "Static Website Development",
    description: "We build fast, lightweight static websites using HTML, CSS, and JavaScript. Ideal for portfolios, landing pages, and business sites with quick loading times.",
    image: "https://img.icons8.com/?size=100&id=Ym4m93ylpQPO&format=png&color=29043d"
  },
  {
    title: "ReactJS Web Applications",
    description: "We develop high-performance web applications using ReactJS, offering seamless user interfaces and powerful component-based architecture for scalable apps.",
    image: "https://img.icons8.com/?size=100&id=eXYS9lpSOpd5&format=png&color=29043d"
  },
  {
    title: "Next.js Development (React + SSR/SSG)",
    description: "Using Next.js, we combine React with server-side rendering and static site generation to build SEO-friendly, fast-loading, and modern web applications.",
    image: "https://img.icons8.com/?size=100&id=UpxIUy0QQ0c3&format=png&color=29043d"
  },
  {
    title: "WordPress Website Development",
    description: "From blogs to business websites, we offer fully customized WordPress development, including themes, plugins, and content management tailored to your needs.",
    image: "https://img.icons8.com/?size=100&id=12510&format=png&color=29043d"
  },
  {
    title: "WooCommerce Store Development",
    description: "We create engaging, secure, and mobile-friendly WooCommerce stores with custom features, product filters, and payment integrations to boost online sales.",
    image: "https://img.icons8.com/?size=100&id=7iWDV7af0PnV&format=png&color=29043d"
  },
  {
    title: "Website Redesign or Migration",
    description: "We modernize outdated websites with fresh designs or migrate your site to modern platforms without losing content or SEO rankings. Seamless and stress-free.",
    image: "https://img.icons8.com/?size=100&id=MJKHJOyrmOv9&format=png&color=29043d"
  },
  {
    title: "Maintenance & Support",
    description: "Our team ensures your website stays secure, updated, and bug-free with regular backups, security checks, and feature updates, giving you peace of mind.",
    image: "https://img.icons8.com/?size=100&id=nxyYuOcBb6iZ&format=png&color=29043d"
  },
  {
    title: "Custom Features or Add-ons",
    description: "We build custom add-ons like image galleries, contact forms, live chatbots, sliders, and more — tailored to your brand and business goals.",
    image: "https://img.icons8.com/?size=100&id=10239&format=png&color=29043d"
  },
  {
    title: "Shopify Web Development",
    description: "We design and develop high-performing Shopify stores tailored to your brand. From custom themes to seamless payment and shipping integration, we ensure your ecommerce success.",
    image: "https://img.icons8.com/?size=100&id=UbAOCJARZDAP&format=png&color=29043d"
  }
];



function WebServices() {
  return (
    <div className="Web-process-container">
      <h2 className="Web-section-title">Our Web Development Process</h2>
      
      <div className="Web-steps">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WebServices;
