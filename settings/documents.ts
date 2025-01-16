import { Paths } from "@/lib/pageroutes";

export const Documents: Paths[] = [
  {
    title: "Introduction",
    href: "/introduction",
    heading: "Getting started",
    items: [
      {
        title: "Installation",
        href: "/installation",
      },
      {
        title: "Setup",
        href: "/setup",
      },
      {
        title: "Changelog",
        href: "/changelog",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Projek Website Terintegrasi",
    href: "/navigation",
    heading: "Documents",
  },
  {
    title: "Analisis Desain Perangkat Lunak",
    href: "/structure",
    items: [
      {
        title: "Analisis Kebutuhan",
        href: "/analisis_kebutuhan",
        items : [
          {
            title: "Business Requirement",
            href: "/business_requirement",
          },
          {
            title: "Stakeholder Requirement",
            href: "/stakeholder_requirement",
          },
          {
            title: "System Requirement",
            href: "/system_requirement",
          },
          {
            title: "Software Requirement",
            href: "/software_requirement",
          },
        ]
      },
      {
        title: "Diagram",
        href: "/diagram",
        items : [
          {
            title: "Use Case Diagram",
            href: "/use_case_diagram",
          },
          {
            title: "Class Diagram",
            href: "/class_diagram",
          },
          {
            title: "Flowchart",
            href: "/flowchart",
          },
        ]
      },
    ],
  },
  {
    title: "Perancangan Antarmuka",
    href: "/perancangan_antarmuka",
    items: [
      {
        title: "Dokumen Desain",
        href: "/dokumen_desain",
        items : [
          {
            title: "Sketsa Awal",
            href: "/sketsa_awal",
          },
          {
            title: "Prototipe",
            href: "/prototipe",
          },
        ]
      },
    ],
  },
  {
    title: "Metode Pengembangan Perangkat Lunak",
    href: "/metode_pengembangan_perangkat_lunak",
    items: [
      {
        title: "Metode SDLC",
        href: "/metode_sdlc",
        items : [
          {
            title: "Analisis Kebutuhan",
            href: "/analisis_kebutuhan",
          },
          {
            title: "Diagram UML",
            href: "/diagram_uml",
          },
        ]
      },
    ],
  },
  {
    title: "Dokumentasi Penggunaan Website",
    href: "/dokumentasi_penggunaan_website",
    items: [
      {
        title: "Panduan Penggunaan Website",
        href: "/panduan_penggunaan_website",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Markup",
    href: "/markup",
    heading: "Components",
    items: [
      {
        title: "Cards",
        href: "/cards",
      },
      {
        title: "Diagrams",
        href: "/diagrams",
      },
      {
        title: "Filetree",
        href: "/filetree",
      },
      {
        title: "Lists",
        href: "/lists",
      },
      {
        title: "Maths",
        href: "/maths",
      },
      {
        title: "Notes",
        href: "/notes",
      },
      {
        title: "Steps",
        href: "/steps",
      },
      {
        title: "Table",
        href: "/table",
      },
      {
        title: "Tabs",
        href: "/tabs",
      },
    ],
  },
];