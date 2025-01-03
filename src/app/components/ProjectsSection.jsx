"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "LPG eCommerce Customer/Retailer Website & Application",
    description: "JE Moral LPG Application for customer and retailer interface with live location tracking for delivery and order management.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-1.jpg",
    tag: ["All", "Mobile", "Web"],
    gitUrl: "https://github.com/mrHeinrichh?tab=repositories",
    previewUrl: "https://mrheinrichh.github.io/web-mobile-download-interface/",
  },
  {
    id: 2,
    title: "LPG Admin Dashboard Website & Application",
    description: "JE Moral LPG Application for admin interface with live location tracking for delivery and order management.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-2.jpg",
    tag: ["All", "Mobile", "Web"],
    gitUrl: "https://github.com/mrHeinrichh?tab=repositories",
    previewUrl: "https://lpg-web-o5in.vercel.app",
  },
  {
    id: 3,
    title: "JE Moral LPG Driver Delivery Application",
    description: "This application is for the delivery drivers of JE Moral LPG. It has a live location tracking for delivery and transaction delivery management.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-3.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/mrHeinrichh?tab=repositories",
    previewUrl: "https://github.com/mrHeinrichh?tab=repositories",
  },
  {
    id: 4,
    title: "Crazy Fish Hub Website",
    description: "CrayFishHub is an online platform for crayfish enthusiasts worldwide, offering comprehensive resources on crayfish care, recipes, and community connections. Powered by the Next.js framework, it delivers a dynamic and engaging user experience.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-4.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mrHeinrichh?tab=repositories",
    previewUrl: "https://cray-fish-hub-frontend.vercel.app",
  },
  {
    id: 5,
    title: "Excel to Web Application using Streamlit Python Library for Sentimental Analysis",
    description: "A project aimed at transforming an Excel-based sentiment analysis tool into an interactive web application. Leveraging the Streamlit Python library, this application provides users with a seamless and intuitive interface for conducting sentiment analysis on text data",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-5.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mrHeinrichh/LPG-Excel-WebApp-StreamLit",
    previewUrl: "https://lpg-excel-webapp-streamlit.onrender.com",
  },
  {
    id: 6,
    title: "BAUCHA Crypto Voucher Platform",
    description: "WEB & UI/UX DESIGN - Crypto Voucher Platform used for WEB3 Festival Hackathon 2022",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-6.jpg",
    tag: ["All", "Web", "UI/UX"],
    gitUrl: "https://www.figma.com/file/GuV6hEJOj63s1QcWl8GWZr/crypto-8?type=design&mode=design&t=yRKVrXEwK9fbE7W9-0",
    previewUrl: "https://www.canva.com/design/DAFRxkdoBiE/mshGQcjVXBg3F0Woxsalyg/edit",
  },
  {
    id: 7,
    title: "Promdifarm Rider Mobile Application",
    description: "Mobile & UI/UX DESIGN Rider Application for Promdifarm Delivery Service",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-7.jpg",
    tag: ["All", "Mobile", "UI/UX"],
    gitUrl: "https://github.com/mrHeinrichh/Flutter-Promdifarm-RiderAPP",
    previewUrl: "https://www.figma.com/proto/uE3O2zrcDGhedyOgjC2pTI/CLONED-PROMDIFARM?node-id=1-29639&starting-point-node-id=1%3A29579",
  },
  {
    id: 8,
    title: "Promdifarm Customer/Farmer Mobile eCommerce Application",
    description: "Mobile & UI/UX DESIGN Customer/Farmer eCommerce Application for Promdifarm Ordering Transactions",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-8.jpg",
    tag: ["All", "Mobile", "UI/UX"],
    gitUrl: "https://github.com/mrHeinrichh/Flutter-Promdifarm-RiderAPP",
    previewUrl: "https://www.figma.com/proto/uE3O2zrcDGhedyOgjC2pTI/CLONED-PROMDIFARM?node-id=1-29639&starting-point-node-id=1%3A29579",
  },
  {
    id: 9,
    title: "Redframe Camera Rentals Website",
    description: "Redframe Camera Rentals Website using HTML CSS and Bootstrap",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-9.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mrHeinrichh/RedFrame-Rentals-Bootstrap/",
    previewUrl: "https://mrheinrichh.github.io/RedFrame-Rentals-Bootstrap/",
  },
  {
    id: 10,
    title: "JE Moral LPG Applications UI/UX Design",
    description: "This design is for the JE Moral LPG Applications UI/UX Design for customer, retailer, and driver interface with live location tracking for delivery and order management.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-10.jpg",
    tag: ["All", "UI/UX"],
    gitUrl: "https://www.figma.com/file/1yv7e8uaFl9NpCTUSNWKBq/LPG-TANK-JE-MORAL-STORE?type=design&node-id=0-1&mode=design&t=XQWqMORFAz1DJQF3-0",
    previewUrl: "https://www.figma.com/file/1yv7e8uaFl9NpCTUSNWKBq/LPG-TANK-JE-MORAL-STORE?type=design&node-id=0-1&mode=design&t=XQWqMORFAz1DJQF3-0",
  },
  {
    id: 11,
    title: "Allwin Desktop Sales and Accounting System",
    description: "A compact and efficient software solution developed using .NET WinForms and programmed in C#. It leverages the power of SQLite as its backend database engine. This combination offers a lightweight yet robust platform for managing sales and accounting operations effectively.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-11.jpg",
    tag: ["All", "Desktop"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 12,
    title: "Allwin Mobile Sales and Accounting System",
    description: " built with Flutter and Dart, integrates SQLite for data management. This cross-platform solution ensures offline accessibility while managing sales, inventory, orders, expenses, and financial reports.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-12.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 13,
    title: "Redframe Camera Rentals Design System",
    description: "Redframe Camera Rentals Design System using Figma",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-13.jpg",
    tag: ["All", "UI/UX"],
    gitUrl: "https://www.figma.com/file/EfeWbbjxdSgTd0pq4yGg0K/Redframe-UI?type=design&node-id=410-8765&mode=design&t=6ZEh9bIYJUOikxnx-0",
    previewUrl: "https://www.figma.com/file/EfeWbbjxdSgTd0pq4yGg0K/Redframe-UI?type=design&node-id=410-8765&mode=design&t=6ZEh9bIYJUOikxnx-0",
  },
  {
    id: 14,
    title: "Yahu Delivery Application",
    description: "Fast delivery app for riders, all with a single tap. Designed using Figma and powered by Flutter, Yahu offers a seamless experience for users and riders alike. Real-time tracking ensures transparency and safety. Say hello to the future of delivery with Yahu.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-14.jpg",
    tag: ["All", "Mobile", "UI/UX"],
    gitUrl: "https://github.com/mrHeinrichh",
    previewUrl: "https://www.figma.com/file/NjhslTVd9PzzS0bSkJEhz0/CLONED-YAHU%2FWALLET?type=design&node-id=1-44043&mode=design&t=6ZEh9bIYJUOikxnx-0",
  },
  {
    id: 15,
    title: "ITOS322-T-Final-Project",
    description: "A Website about my ITOS322-T-Final-Project submitted to Professor Rico Santos using HTML CSS and Tailwind",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-15.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mrHeinrichh/ITOS322-T-Final-Project",
    previewUrl: "https://www.figma.com/file/NjhslTVd9PzzS0bSkJEhz0/CLONED-YAHU%2FWALLET?type=design&node-id=1-44043&mode=design&t=6ZEh9bIYJUOikxnx-0",
  },
  {
    id: 16,
    title: "2023 Calendar Using Laravel PHP",
    description: "Just a simple calendar using HTML Bootstrap and Laravel PHP",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-16.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mrHeinrichh/2023-Calendar-Html-Css",
    previewUrl: "https://mrheinrichh.github.io/2023-Calendar-Html-Css/",
  },
  {
    id: 17,
    title: "Mina-Swep-Array-Mine-Game",
    description: "ArraySweeper is an engaging PHP game where two players strategically place and guess array index addresses, avoiding hidden mines set by their opponent. With limited attempts and alternating turns, it's a thrilling test of strategy and luck",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-37.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mrHeinrichh/Mina-Swep-Array-Mine-Game",
    previewUrl: "https://github.com/mrHeinrichh/Mina-Swep-Array-Mine-Game",
  },
  {
    id: 18,
    title: "Promdifarm Infographic Video",
    description: "An Agri-Tech Company that aims to help farmers by providing them a platform to sell their products and increase their profits. ",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-17.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "",
    previewUrl: "https://www.youtube.com/watch?v=ZlL4ewf8PxI&t=26s/",
  },
  {
    id: 19,
    title: "Promdifarm Farmer Testimonial Video",
    description: "Mario Tejada a tomato farmer from Bibiclat, Aliaga, Nueva Ecija explains the true problem of why farmers are not earning enough.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-18.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "",
    previewUrl: "https://www.youtube.com/watch?v=m_OEehO6H5w",
  },

  {
    id: 20,
    title: "Barangay South Signal Village Reporting And Information System",
    description: "Research Project in System Integration and Architecture 2 (lec/lab) using HTML CSS and PHP",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-19.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mrHeinrichh/ITNET324-New-Research-Project-?fbclid=IwAR2dbqdH4CBUqKBP1k8woGsNujHcYdGAl2xmlYIdnUokExIpQwK3ZFj9a4Q",
    previewUrl: "https://github.com/mrHeinrichh/ITNET324-New-Research-Project-?fbclid=IwAR2dbqdH4CBUqKBP1k8woGsNujHcYdGAl2xmlYIdnUokExIpQwK3ZFj9a4Q",
  },
  {
    id: 21,
    title: " ACME PetClinic Website",
    description: "A full service companion animal veterinary clinic located in Taguig City using HTML CSS and PHP",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-20.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mrHeinrichh/acme-php-website",
    previewUrl: "https://github.com/mrHeinrichh/acme-php-website",
  },
  {
    id: 22,
    title: "TUP-T Contact Tracing System",
    description: "TUP-T Contact Tracing System using Visual Basic with Crystal Reports and Barcode Scanning Feauture",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-21.jpg",
    tag: ["All", "Desktop"],
    gitUrl: "https://github.com/mrHeinrichh/Contact-Tracing-Visual-Basic",
    previewUrl: "https://github.com/mrHeinrichh/Contact-Tracing-Visual-Basic",
  },
  {
    id: 23,
    title: 'Energie Fitness Peterborough Introduction Video',
    description: "A London based gym that offers a wide range of fitness classes and personal training sessions.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-22.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://8s7xnd-my.sharepoint.com/personal/heinrich_8s7xnd_onmicrosoft_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fheinrich_8s7xnd_onmicrosoft_com%2FDocuments%2FMY%20PORTFOLIO%20NEW%20MARCH%2023%202024%2FPortfolios%2FVideo%20samples%2FEnergie1%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview",
    previewUrl: "https://8s7xnd-my.sharepoint.com/personal/heinrich_8s7xnd_onmicrosoft_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fheinrich_8s7xnd_onmicrosoft_com%2FDocuments%2FMY%20PORTFOLIO%20NEW%20MARCH%2023%202024%2FPortfolios%2FVideo%20samples%2FEnergie1%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview",
  },
  {
    id: 24,
    title: 'Video Same Day Edit | UST Post Graduation Doctors of OBGYN ',
    description: "Same Day Video Edit of POST GRADUATION COURSE In University of Santo Tomas for Doctors of OBGYN July 3-5 2024",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/ProjectSDE.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://www.facebook.com/mrHeinrichhh/videos/355978714202584",
    previewUrl: "https://www.facebook.com/mrHeinrichhh/videos/355978714202584",
  },
  {
    id: 25,
    title: 'Push YOURSELF everyday! - Wole_talks',
    description: "Writer, speaker and entrepreneur here to help you bridge the gap between the status quo and your next level.",
    image: "https://img.youtube.com/vi/kyF4I4iSFQs/maxresdefault.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://www.youtube.com/watch?v=kyF4I4iSFQs",
    previewUrl: "https://www.youtube.com/watch?v=kyF4I4iSFQs",
  },
  {
    id: 26,
    title: 'BIG Fish in a SMALL Pond - This concept could CHANGE your BUSINESS.',
    description: "Writer, speaker and entrepreneur here to help you bridge the gap between the status quo and your next level.",
    image: "https://img.youtube.com/vi/FGeCRVEIwFM/maxresdefault.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://www.youtube.com/watch?v=FGeCRVEIwFM",
    previewUrl: "https://www.youtube.com/watch?v=FGeCRVEIwFM",
  },
  {
    id: 27,
    title: 'Starting and Running your OWN business. The rollercoaster! - Wole_Talks',
    description: "Writer, speaker and entrepreneur here to help you bridge the gap between the status quo and your next level.",
    image: "https://img.youtube.com/vi/APojIrI8f9E/maxresdefault.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://www.youtube.com/watch?v=APojIrI8f9E",
    previewUrl: "https://www.youtube.com/watch?v=APojIrI8f9E",
  },
  {
    id: 28,
    title: 'Fat Daddy BCAA Spartan watermelon Product Advertisement',
    description: "Product Advertisement for BCAA Spartan watermelon flavor.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-28.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://8s7xnd-my.sharepoint.com/personal/heinrich_8s7xnd_onmicrosoft_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fheinrich_8s7xnd_onmicrosoft_com%2FDocuments%2FMY%20PORTFOLIO%20NEW%20MARCH%2023%202024%2FPortfolios%2FVideo%20samples%2Fwatermelon%2Emp4&referrer=OneDriveForBusiness&referrerScenario=OpenFile",
    previewUrl: "https://8s7xnd-my.sharepoint.com/personal/heinrich_8s7xnd_onmicrosoft_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fheinrich_8s7xnd_onmicrosoft_com%2FDocuments%2FMY%20PORTFOLIO%20NEW%20MARCH%2023%202024%2FPortfolios%2FVideo%20samples%2Fwatermelon%2Emp4&referrer=OneDriveForBusiness&referrerScenario=OpenFile",
  },
  {
    id: 29,
    title: 'Fat Daddy SCITEC Nutrition Product Advertisement',
    description: "Product Advertisement for SCITEC Nutrition products.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-29.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://8s7xnd-my.sharepoint.com/personal/heinrich_8s7xnd_onmicrosoft_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fheinrich_8s7xnd_onmicrosoft_com%2FDocuments%2FMY%20PORTFOLIO%20NEW%20MARCH%2023%202024%2FPortfolios%2FVideo%20samples%2Foutputt%20prod%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview",
    previewUrl: "https://8s7xnd-my.sharepoint.com/personal/heinrich_8s7xnd_onmicrosoft_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fheinrich_8s7xnd_onmicrosoft_com%2FDocuments%2FMY%20PORTFOLIO%20NEW%20MARCH%2023%202024%2FPortfolios%2FVideo%20samples%2Foutputt%20prod%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview",
  },
  {
    id: 30,
    title: 'Fat Daddy SCITEC Nutrition CREATINE MONOHYDRATE Product Advertisement',
    description: "Product Advertisement for SCITEC Nutrition CREATINE MONOHYDRATE products.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-30.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://8s7xnd-my.sharepoint.com/personal/heinrich_8s7xnd_onmicrosoft_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fheinrich_8s7xnd_onmicrosoft_com%2FDocuments%2FMY%20PORTFOLIO%20NEW%20MARCH%2023%202024%2FPortfolios%2FVideo%20samples%2FResult%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview",
    previewUrl: "https://8s7xnd-my.sharepoint.com/personal/heinrich_8s7xnd_onmicrosoft_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fheinrich_8s7xnd_onmicrosoft_com%2FDocuments%2FMY%20PORTFOLIO%20NEW%20MARCH%2023%202024%2FPortfolios%2FVideo%20samples%2FResult%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview",
  },
  {
    id: 31,
    title: 'Fat Daddy Vita Drive Product Advertisement',
    description: "Product Advertisement for Vita Drive products.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-31.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://8s7xnd-my.sharepoint.com/personal/heinrich_8s7xnd_onmicrosoft_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fheinrich_8s7xnd_onmicrosoft_com%2FDocuments%2FMY%20PORTFOLIO%20NEW%20MARCH%2023%202024%2FPortfolios%2FVideo%20samples%2F1%20%282%29%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview",
    previewUrl: "https://8s7xnd-my.sharepoint.com/personal/heinrich_8s7xnd_onmicrosoft_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fheinrich_8s7xnd_onmicrosoft_com%2FDocuments%2FMY%20PORTFOLIO%20NEW%20MARCH%2023%202024%2FPortfolios%2FVideo%20samples%2F1%20%282%29%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview",
  },
  {
    id: 32,
    title: 'Case In Products Advertisement',
    description: "Product Advertisement for Case In products.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-32.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://8s7xnd-my.sharepoint.com/personal/heinrich_8s7xnd_onmicrosoft_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fheinrich_8s7xnd_onmicrosoft_com%2FDocuments%2FMY%20PORTFOLIO%20NEW%20MARCH%2023%202024%2FPortfolios%2FVideo%20samples%2FCaseInproducts%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview",
    previewUrl: "https://8s7xnd-my.sharepoint.com/personal/heinrich_8s7xnd_onmicrosoft_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fheinrich_8s7xnd_onmicrosoft_com%2FDocuments%2FMY%20PORTFOLIO%20NEW%20MARCH%2023%202024%2FPortfolios%2FVideo%20samples%2FCaseInproducts%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview",
  },
  {
    id: 33,
    title: 'Fat Daddy Fitness BCAA Products Advertisement',
    description: "Supplements Advertisement for Fat Daddy Fitness BCAA Products.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-33.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://8s7xnd-my.sharepoint.com/personal/heinrich_8s7xnd_onmicrosoft_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fheinrich_8s7xnd_onmicrosoft_com%2FDocuments%2FMY%20PORTFOLIO%20NEW%20MARCH%2023%202024%2FPortfolios%2FVideo%20samples%2FCombined%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview",
    previewUrl: "https://8s7xnd-my.sharepoint.com/personal/heinrich_8s7xnd_onmicrosoft_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fheinrich_8s7xnd_onmicrosoft_com%2FDocuments%2FMY%20PORTFOLIO%20NEW%20MARCH%2023%202024%2FPortfolios%2FVideo%20samples%2FCombined%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview",
  },
  {
    id: 34,
    title: 'Energie Fitness Instagram Advertisement Video',
    description: "Advertisement Video for Energie Fitness Instagram.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-34.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://8s7xnd-my.sharepoint.com/personal/heinrich_8s7xnd_onmicrosoft_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fheinrich_8s7xnd_onmicrosoft_com%2FDocuments%2FMY%20PORTFOLIO%20NEW%20MARCH%2023%202024%2FPortfolios%2FVideo%20samples%2F1%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview",
    previewUrl: "https://8s7xnd-my.sharepoint.com/personal/heinrich_8s7xnd_onmicrosoft_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fheinrich_8s7xnd_onmicrosoft_com%2FDocuments%2FMY%20PORTFOLIO%20NEW%20MARCH%2023%202024%2FPortfolios%2FVideo%20samples%2F1%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview",
  },
  {
    id: 35,
    title: 'Energie Fitness Instagram Advertisement Video',
    description: "Advertisement Video for Energie Fitness Instagram.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-35.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://8s7xnd-my.sharepoint.com/personal/heinrich_8s7xnd_onmicrosoft_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fheinrich_8s7xnd_onmicrosoft_com%2FDocuments%2FMY%20PORTFOLIO%20NEW%20MARCH%2023%202024%2FPortfolios%2FVideo%20samples%2FInstaPost%203%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview",
    previewUrl: "https://8s7xnd-my.sharepoint.com/personal/heinrich_8s7xnd_onmicrosoft_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fheinrich_8s7xnd_onmicrosoft_com%2FDocuments%2FMY%20PORTFOLIO%20NEW%20MARCH%2023%202024%2FPortfolios%2FVideo%20samples%2FInstaPost%203%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview",
  },
  {
    id: 36,
    title: 'West Dream Gaming Montage Video',
    description: "COD Warzone Gameplay Montage | West Dream Gaming",
    image: "https://img.youtube.com/vi/ULr9NfOZdRw/maxresdefault.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://www.youtube.com/watch?v=ULr9NfOZdRw",
    previewUrl: "https://www.youtube.com/watch?v=ULr9NfOZdRw",
  },
  {
    id: 37,
    title: 'West Dream Gaming Montage Video',
    description: "Ghost 🎧 | Warzone X Fortnite Montage | West Dream Gaming    ",
    image: "https://img.youtube.com/vi/M5iwYx9xvdM/maxresdefault.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://www.youtube.com/watch?v=M5iwYx9xvdM",
    previewUrl: "https://www.youtube.com/watch?v=M5iwYx9xvdM",
  },
  {
    id: 38,
    title: 'West Dream Gaming Montage Video',
    description: "LALALA 🎧 | Apex Gameplay Montage | West Dream gaming",
    image: "https://img.youtube.com/vi/k0kBb1KobJE/maxresdefault.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "img.youtube.com/vi/k0kBb1KobJE/maxresdefault.jpg",
    previewUrl: "img.youtube.com/vi/k0kBb1KobJE/maxresdefault.jpg",
  },
  {
    id: 39,
    title: 'West Dream Gaming Montage Video',
    description: "Goddamn Montage | Warzone | West Dream Gaming",
    image: "https://img.youtube.com/vi/kF7wzSlMY98/maxresdefault.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://www.youtube.com/watch?v=kF7wzSlMY98",
    previewUrl: "https://www.youtube.com/watch?v=kF7wzSlMY98",
  },
  {
    id: 40,
    title: 'West Dream Gaming Montage Video',
    description: "Whats Poppin 🎧 | COD Warzone Gameplay Montage | West Dream Gaming",
    image: "https://img.youtube.com/vi/iSKruEEFvOY/maxresdefault.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://www.youtube.com/watch?v=kF7wzSlMY98",
    previewUrl: "https://www.youtube.com/watch?v=kF7wzSlMY98",
  },
  {
    id: 41,
    title: 'West Dream Gaming Montage Video',
    description: "5 Seconds of Death | Warzone | West Dream Gaming",
    image: "https://img.youtube.com/vi/M-9hUEtE5bU/maxresdefault.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://www.youtube.com/watch?v=M-9hUEtE5bU",
    previewUrl: "https://www.youtube.com/watch?v=M-9hUEtE5bU",
  },
  {
    id: 42,
    title: 'Penny Wise: The key ingredients of Financial Freedom"',
    description: "When you want to cook something, you try to find its recipe in a cookbook or on the internet.  An example is a chocolate cake. And in the recipe, you will find its key ingredients. ",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-23.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://www.youtube.com/watch?v=A9oAOyF7mto&t=3s",
    previewUrl: "https://www.youtube.com/watch?v=A9oAOyF7mto&t=3s",
  },
  {
    id: 43,
    title: "Penny Wise: Rich & Poor Mindset to FINANCIAL STABILITY",
    description: "Rich & Poor mindset to financial stability.  We could all agree that financial stability is everyone's goal.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-24.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://www.youtube.com/watch?v=9pxA01w5dIs&t=1s",
    previewUrl: "https://www.youtube.com/watch?v=9pxA01w5dIs&t=1s",
  },
  {
    id: 44,
    title: "Penny Wise: 5 Investing Errors That NEWBIE INVESTORS FACE",
    description: "Poverty has been one of the world's most prominent problems for years. ",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-25.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://www.youtube.com/watch?v=IPvIxVS75vQ",
    previewUrl: "https://www.youtube.com/watch?v=IPvIxVS75vQ",
  },


  {
    id: 45,
    title: "Penny Wise: 10 Money Mistakes Millennials Make",
    description: "10 Money Mistakes Millennials Make.  Numerous millennial families are on their way to building significant riches.",
    image: "https://raw.githubusercontent.com/mrHeinrichh/Portfolio-cdn/main/image/projects/project-26.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://www.youtube.com/watch?v=gtvtjnH_r4I&t=318s",
    previewUrl: "https://www.youtube.com/watch?v=gtvtjnH_r4I&t=318s",
  },
  {
    id: 46,
    title: 'West Dream Gaming Montage Video',
    description: "5 Seconds of Death | Warzone | West Dream Gaming",
    image: "https://img.youtube.com/vi/M-9hUEtE5bU/maxresdefault.jpg",
    tag: ["All", "Video Contents"],
    gitUrl: "https://www.youtube.com/watch?v=M-9hUEtE5bU",
    previewUrl: "https://www.youtube.com/watch?v=M-9hUEtE5bU",
  },
  {
    id: 47,
    title: 'LPG eCommerce Customer Website',
    description: "LPG eCommerce Customer Website for customer interface with ordering system and order status tracker",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/47.png?raw=true",
    tag: ["All", "Web"],
    gitUrl: "https://lpg-web-customer.vercel.app/",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/47.png?raw=true",
  },
  {
    id: 47.1,
    title: 'LPG eCommerce Retailer Website',
    description: "LPG eCommerce Customer Website for customer interface with ordering system and order status tracker with discount",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/47.png?raw=true",
    tag: ["All", "Web"],
    gitUrl: "https://lpg-web-retailer.vercel.app/sign-in",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/47.png?raw=true",
  },
  {
    id: 48,
    title: 'Fat Daddy Nutrition Alpa Pump Ultimate Pump Booster',
    description: "Product Advertisement for Fat Daddy Nutrition Alpa Pump Ultimate Pump Booster products.",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/gif/48.gif?raw=true",
    tag: ["All", "Graphic Designs"],
    gitUrl: "https://fatdaddyfitness.co.uk",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/gif/48.gif?raw=true",
  },
  {
    id: 49,
    title: 'Fat Daddy Fitness SCITEC Nutrition PRO LINE',
    description: "Product Advertisement for Fat Daddy Fitness SCITEC Nutrition PRO LINE products.",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/gif/49.gif?raw=true",
    tag: ["All", "Graphic Designs"],
    gitUrl: "https://fatdaddyfitness.co.uk",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/gif/49.gif?raw=true",
  },
  {
    id: 50,
    title: 'Fat Daddy Fitness 11 BRAVO',
    description: "Product Advertisement for Fat Daddy Fitness 11 BRAVO products.",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/gif/50.gif?raw=true",
    tag: ["All", "Graphic Designs"],
    gitUrl: "https://fatdaddyfitness.co.uk",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/gif/50.gif?raw=true",
  },
  {
    id: 51,
    title: 'Fat Daddy Fitness Reflex Nutrition',
    description: "Product Advertisement for Reflex Nutrition products.",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/gif/51.gif?raw=true",
    tag: ["All", "Graphic Designs"],
    gitUrl: "https://fatdaddyfitness.co.uk",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/gif/51.gif?raw=true",
  },

  {
    id: 52,
    title: 'Fat Daddy Fitness suppelement Premium Mass gainer',
    description: "Product Advertisement for Fat Daddy Fitness suppelement Premium Mass gainer.",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/gif/52.gif?raw=true",
    tag: ["All", "Graphic Designs"],
    gitUrl: "https://fatdaddyfitness.co.uk",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/gif/52.gif?raw=true",
  },
  {
    id: 53,
    title: 'AMINOJECT EVOGEN Blue Raspberry',
    description: "Product Advertisement for AMINOJECT EVOGEN Blue Raspberry flavor.",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/gif/53.gif?raw=true",
    tag: ["All", "Graphic Designs"],
    gitUrl: "https://fatdaddyfitness.co.uk",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/gif/53.gif?raw=true",
  },
  {
    id: 54,
    title: 'Chai D Out Fat Daddy Nutrition',
    description: "Product Advertisement for Fat Daddy Nutrition products.",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/gif/54.gif?raw=true",
    tag: ["All", "Graphic Designs"],
    gitUrl: "https://fatdaddyfitness.co.uk",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/gif/54.gif?raw=true",
  },
  {
    id: 55,
    title: 'Fat Daddy Fitness Arhtro Guard Drink Powder',
    description: "Product Advertisement for Arhtro Guard Drink Powder.",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/gif/55.gif?raw=true",
    tag: ["All", "Graphic Designs"],
    gitUrl: "https://fatdaddyfitness.co.uk",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/gif/55.gif?raw=true",
  },
  {
    id: 56,
    title: 'Tekno Harmonika Chorale Poster',
    description: "TUPT- Tekno Harmonika Chorale Poster June 12, 2021",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/56.jpg?raw=true",
    tag: ["All", "Graphic Designs"],
    gitUrl: "https://www.facebook.com/TUPTTHC",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/56.jpg?raw=true",
  },
  {
    id: 57,
    title: 'Tekno Harmonika Chorale Poster',
    description: "TUPT- Tekno Harmonika Chorale Poster EDSA Revolution 2021",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/57.jpg?raw=true",
    tag: ["All", "Graphic Designs"],
    gitUrl: "https://www.facebook.com/TUPTTHC",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/57.jpg?raw=true",
  },
  {
    id: 58,
    title: 'Tekno Harmonika Chorale Poster',
    description: "TUPT- Tekno Harmonika Chorale Poster National Heroes Day",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/58.jpg?raw=true",
    tag: ["All", "Graphic Designs"],
    gitUrl: "https://www.facebook.com/TUPTTHC",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/58.jpg?raw=true",
  },
  {
    id: 59,
    title: 'Tekno Harmonika Chorale Poster',
    description: "TUPT- Tekno Harmonika Chorale Poster Labor Day 2021",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/59.jpg?raw=true",
    tag: ["All", "Graphic Designs"],
    gitUrl: "https://www.facebook.com/TUPTTHC",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/59.jpg?raw=true",
  },
  {
    id: 60,
    title: 'Snap Fitness 24/7 Elephant & Castle Promotional Poster',
    description: "Advertisement Poster for Snap Fitness 24/7 Elephant & Castle Promotion.",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/60.png?raw=true",
    tag: ["All", "Graphic Designs"],
    gitUrl: "",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/60.png?raw=true",
  },
  {
    id: 61,
    title: 'Energie Fitness Peterborough Instagram Post Content',
    description: "Instagram Post Content for Energie Fitness Peterborough.",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/61.png?raw=true",
    tag: ["All", "Graphic Designs"],
    gitUrl: "",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/61.png?raw=true",
  },
  {
    id: 62,
    title: 'Energie Fitness Peterborough Instagram Post Content',
    description: "Instagram Post Content for Energie Fitness Peterborough.",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/62.jpg?raw=true",
    tag: ["All", "Graphic Designs"],
    gitUrl: "",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/62.jpg?raw=true",
  },
  {
    id: 63,
    title: 'Energie Fitness Peterborough Instagram Post Content',
    description: "Instagram Post Content for Energie Fitness Peterborough.",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/63.jpg?raw=true",
    tag: ["All", "Graphic Designs"],
    gitUrl: "",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/63.jpg?raw=true",
  },
  {
    id: 64,
    title: 'Energie Fitness Peterborough Instagram Post Content',
    description: "Instagram Post Content for Energie Fitness Peterborough.",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/64.jpg?raw=true",
    tag: ["All", "Graphic Designs"],
    gitUrl: "",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/64.jpg?raw=true",
  }, {
    id: 65,
    title: 'Energie Fitness Peterborough Instagram Post Content',
    description: "Instagram Post Content for Energie Fitness Peterborough.",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/65.jpg?raw=true",
    tag: ["All", "Graphic Designs"],
    gitUrl: "",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/65.jpg?raw=true",
  }, {
    id: 66,
    title: 'Energie Fitness Peterborough Instagram Post Content',
    description: "Instagram Post Content for Energie Fitness Peterborough.",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/66.jpg?raw=true",
    tag: ["All", "Graphic Designs"],
    gitUrl: "",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/66.jpg?raw=true",
  }, {
    id: 67,
    title: 'PromdiFarm Tshirt Design Template',
    description: "Tshirt Design Template for PromdiFarm.",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/67.jpg?raw=true",
    tag: ["All", "Graphic Designs"],
    gitUrl: "",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/67.jpg?raw=true",
  }, {
    id: 68,
    title: 'PromdiFarm Looking for a Rider poster template',
    description: "Template for PromdiFarm Looking for a Rider poster.",
    image: 'https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/68.png?raw=true',
    tag: ["All", "Graphic Designs"],
    gitUrl: "",
    previewUrl: 'https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/68.png?raw=true',
  },
  {
    id: 69,
    title: 'Promdifarm Fresh Goods Poster Template',
    description: "Template for Promdifarm Fresh Goods Poster.",
    image: 'https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/69.png?raw=true',
    tag: ["All", "Graphic Designs"],
    gitUrl: "",
    previewUrl: 'https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/69.png?raw=true',
  },
  {
    id: 70,
    title: 'PromdiFarm Long Sleeve Tshirt Design Template',
    description: "Template for PromdiFarm Long Sleeve Tshirt Design.",
    image: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/70.jpg?raw=true",
    tag: ["All", "Graphic Designs"],
    gitUrl: "",
    previewUrl: "https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/70.jpg?raw=true",
  },
  {
    id: 71,
    title: 'Prom Night TCMS Poster',
    description: "Prom Night TCMS Poster Template.",
    image: 'https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/71.jpg?raw=true',
    tag: ["All", "Graphic Designs"],
    gitUrl: "",
    previewUrl: 'https://github.com/mrHeinrichh/Portfolio-cdn/blob/main/image/71.jpg?raw=true',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 md:col-4">
        My Projects
      </h2>
      <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Desktop"
          isSelected={tag === "Desktop"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI/UX"
          isSelected={tag === "UI/UX"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Video Contents"
          isSelected={tag === "Video Contents"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Graphic Designs"
          isSelected={tag === "Graphic Designs"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Photography / Videography"

          link="https://www.facebook.com/mrHeinrichhh"
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;