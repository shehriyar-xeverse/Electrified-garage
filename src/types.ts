/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialty: string;
  youtube?: string;
}

export interface RepairService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Diagnostics' | 'Retrofitting' | 'Hacks' | 'Battery';
  date: string;
  author: string;
  readTime: string;
  image: string;
}

export interface PressRelease {
  id: string;
  source: string;
  title: string;
  linkText: string;
  date: string;
  excerpt: string;
  logoUrl?: string;
  url: string;
}

export interface LocationInfo {
  id: string;
  city: string;
  stateCode: string;
  email: string;
  phone: string;
  address: string;
  hours: string[];
  googleMapEmbed: string;
  manager: string;
  image: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
}
