import { Product } from "@/types/Product";

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Siemens S7-1200 PLC",
    price: 799.99,
    description: "Compact and flexible programmable logic controller for industrial automation",
    image: "https://picsum.photos/800/800",
    category: "Controllers"
  },
  {
    id: 2,
    name: "Siemens SIMATIC HMI TP700",
    price: 1249.99,
    description: "7-inch touch panel interface for machine visualization and control",
    image: "/placeholder.svg",
    category: "HMI"
  },
  {
    id: 3,
    name: "Siemens SCALANCE XC208",
    price: 449.99,
    description: "Industrial Ethernet switch for PROFINET networks",
    image: "/placeholder.svg",
    category: "Networking"
  },
  {
    id: 4,
    name: "Siemens SINAMICS G120",
    price: 1599.99,
    description: "Modular drive system for variable speed control",
    image: "/placeholder.svg",
    category: "Drives"
  },
  {
    id: 5,
    name: "Siemens SIMATIC ET 200SP",
    price: 299.99,
    description: "Distributed I/O system for flexible automation",
    image: "/placeholder.svg",
    category: "I/O Systems"
  },
  {
    id: 6,
    name: "Siemens WinCC Professional",
    price: 2499.99,
    description: "SCADA system for plant-wide process visualization",
    image: "/placeholder.svg",
    category: "Software"
  },
  {
    id: 7,
    name: "Siemens SIMATIC S7-1500",
    price: 1899.99,
    description: "Advanced PLC for high-performance automation tasks",
    image: "/placeholder.svg",
    category: "Controllers"
  },
  {
    id: 8,
    name: "Siemens SIMATIC IOT2050",
    price: 699.99,
    description: "Industrial IoT gateway for edge computing applications",
    image: "/placeholder.svg",
    category: "IoT Devices"
  }
];
