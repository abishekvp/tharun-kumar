import { ResumeData } from '../types';

export const resumeData: ResumeData = {
  personal: {
    name: "Tharun Kumar K",
    title: "CMMS Engineer | Material Cataloger",
    email: "tharunk2406@gmail.com",
    phone: "+91-6380551003",
    location: "Chennai, India",
    address: "336, Maari Amman Kovil St, Thirumanam Village, Pattabhiram, Chennai - 600072",
    photoUrl: "tharunphoto.jpeg",
    languages: ["English", "Tamil"],
    summary: "Mechanical Engineering graduate with over 2.5 years of specialized experience as a CMMS Engineer in the Petroleum and Heavy Industries sectors. Expert in Asset Management Systems, Material Master Data, Bill of Materials (BOM) preparation, and Spare Parts Interchangeability Records (SPIR/SPIL). Proficient in material coding, cataloging, data cleansing, and duplicate resolution to optimize inventory and supply chain operations. Seeking a challenging position in a growth-oriented organization to utilize my expertise for organizational goals.",
    details: {
      dob: "24.06.1999",
      maritalStatus: "Single",
      nationality: "Indian",
      gender: "Male",
      fatherName: "B. Kumar",
      passport: {
        number: "X6199148",
        issueDate: "20th Mar 2023",
        expiryDate: "19th Mar 2033",
        placeOfIssue: "Chennai"
      }
    }
  },
  skills: [
    {
      category: "Technical Skills",
      items: [
        "CMMS & ERP (MCAMS, SAP Interface)",
        "Material Cataloging",
        "Data Enrichment & Cleansing",
        "BOM Preparation",
        "SPIR/RSPL Review",
        "Duplicate Resolution",
        "Inventory Management"
      ]
    },
    {
      category: "Software",
      items: [
        "MS Office (Excel, Access, Project)",
        "AutoCAD (Drawing Review)",
        "MCAMS"
      ]
    },
    {
      category: "Core Competencies",
      items: [
        "Data Quality Control",
        "Supply Chain Analysis",
        "Vendor Data Management",
        "Documentation",
        "Team Leadership"
      ]
    }
  ],
  experience: [
    {
      company: "Hofinsoft Pvt. Ltd., Chennai",
      role: "Associate Engineer (MDM)",
      period: "July 2025 – Present",
      duration: "5 Months",
      description: "Leading material data management initiatives, overseeing quality control of master data, and ensuring compliance with client cataloging standards.",
      projects: []
    },
    {
      company: "Hofincons Int. Pvt. Ltd., Hyderabad",
      role: "Junior Engineer (CMMS Engineer)",
      period: "March 2023 – June 2025",
      duration: "2.3 Years",
      description: "Served as a Material Analyzer focusing on data integrity, SPIR review, and cataloging for major international petroleum clients.",
      projects: [] 
    }
  ],
  projects: [
    {
      name: "Cheniere Energy, USA",
      client: "Cheniere Energy",
      role: "Material Cataloger",
      location: "Offsite - Hyderabad",
      description: "SPL & CCL (Sabine Pass & Corpus Christi liquefaction) - Equipment spare parts cataloging, SPIR build, and data cleansing.",
      responsibilities: [
        "Collect material data from client and review documentation for completeness.",
        "Identify missing data and perform cataloging using MCAMS templates.",
        "Execute UNSPSC and MESC codification up to specification levels.",
        "Prepare complete BOMs from General Arrangement and Cross-sectional drawings.",
        "Manage New Item Creation (NIC) tasks in Oracle and build SPIRs as per client templates."
      ]
    },
    {
      name: "GASCO, Abu Dhabi",
      client: "GASCO",
      role: "Material Analyzer",
      location: "Offsite - Hyderabad",
      description: "MCAMS-Master Data Preparation and Catalogue.",
      responsibilities: [
        "Conduct detailed material reviews and identify missing data requirements.",
        "Prepare review sheets for missing material data and documents.",
        "Resolve duplicates based on Part Number and Description.",
        "Perform material cataloging using MCAMS templates and deliver as per client requirements."
      ]
    },
    {
      name: "Sadara, Saudi Arabia",
      client: "Sadara",
      role: "Material Data Specialist",
      location: "Offsite - Hyderabad",
      description: "Development of Equipment Spare Part Cataloging and Material Master Data.",
      responsibilities: [
        "Perform overall detailed material reviews.",
        "Prepare review sheets for missing material data and documentation.",
        "Perform material cataloging using MCAMS templates.",
        "Manage duplicate resolution for part numbers and descriptions."
      ]
    },
    {
      name: "Aramco, Saudi Arabia",
      client: "Saudi Aramco",
      role: "BOM Specialist",
      location: "Offsite - Hyderabad",
      description: "BOM preparation for Equipment, Document review and linking.",
      responsibilities: [
        "Collect spare part data packages from the client.",
        "Perform preliminary reviews to identify gaps (missing data).",
        "Expedite missing data collection to ensure package completeness.",
        "Perform material cataloging using MCAMS templates.",
        "Prepare complete BOMs from Certified General Arrangement drawings."
      ]
    },
    {
      name: "IMI (International Maritime Industries)",
      client: "IMI Saudi Arabia",
      role: "Material Cataloger",
      location: "Offsite - Hyderabad",
      description: "Document review and linking, Cataloging for construction material.",
      responsibilities: [
        "Review spare part data packages and collect important spares based on P&IDs.",
        "Manage vendor follow-ups for technical clarifications.",
        "Apply Aramco-based standards tailored for Marine equipment.",
        "Deliver final data in Oracle-compatible formats."
      ]
    },
    {
      name: "RTR (Ras Tanura Refinery)",
      client: "Saudi Aramco",
      role: "Technical Documentation Specialist",
      location: "Offsite - Hyderabad",
      description: "Document review, technical description updates, and tag identification.",
      responsibilities: [
        "Verify items and update P&ID numbers for client reference.",
        "Collect equipment, tag, and pipeline data to update descriptions.",
        "Prepare review sheets for missing documentation.",
        "Coordinate vendor clarifications to ensure manufacturing alignment."
      ]
    }
  ],
  education: [
    {
      degree: "B.E. Mechanical Engineering",
      institution: "DMI College of Engineering, Chennai",
      score: "79%"
    },
    {
      degree: "Higher Secondary (HSC)",
      institution: "GOV Higher Secondary School, Thandurai",
      score: "51%"
    },
    {
      degree: "Secondary (SSLC)",
      institution: "Sri Ramakrishna Matriculation Hr Sec School",
      score: "59%"
    }
  ]
};