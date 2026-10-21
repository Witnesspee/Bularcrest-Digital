/**
 * Bularcrest Digital Platform Data Store
 * Monolithic architecture, engineering specifications, and atelier registry.
 */

export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  kicker: string;
  tagline: string;
  summary: string;
  description: string;
  iconName: string;
  deliverables: string[];
  specifications: { label: string; value: string }[];
  materials: string[];
  certifications: string[];
}

export interface ProjectItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  category: 'Residential' | 'Commercial' | 'Energy Autonomy' | 'Monumental';
  location: string;
  year: string;
  conditionedArea: string;
  timeline: string;
  energyProfile: string;
  image: string;
  overview: string;
  architecturalHighlights: string[];
  structuralSystem: string;
  keyMaterials: string[];
  gallery?: string[];
}

export interface CoreValueItem {
  id: string;
  numeral: string;
  title: string;
  subtitle: string;
  quote: string;
  description: string;
  tags: string[];
}

export interface AtelierOffice {
  city: string;
  country: string;
  timezone: string;
  address: string;
  postal: string;
  director: string;
  directPhone: string;
  directEmail: string;
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'construction',
    number: '01',
    title: 'Construction',
    kicker: 'Structural Execution',
    tagline: 'Heavy Civil & Sovereign Homes',
    summary: 'We build durable, modern structures engineered with reinforced post-tensioned concrete, monolithic stone, and timeless structural longevity.',
    description: 'Bularcrest Structural Execution operates as an integrated master builder. We eliminate sub-contractor dilution through our internal master artisans, precision surveying telemetry, and proprietary post-tensioned concrete formulations built to withstand geological shifts and centuries of weathering.',
    iconName: 'Wrench',
    deliverables: [
      'Monolithic post-tensioned slab & core erection',
      'Subterranean deep-caisson foundation engineering',
      'Cast-in-place architectural raw concrete finishes',
      'Structural steel cantilevers exceeding 18-meter spans',
      'Hermetic exterior envelope moisture & vapor barriers'
    ],
    specifications: [
      { label: 'Standard', value: 'SN EN 1998-1 Eurocode 8 Seismic Class 1' },
      { label: 'Compressive Strength', value: 'C60/75 Ultra-High Performance Concrete' },
      { label: 'Design Lifespan', value: '150+ Years Unassisted Integrity' },
      { label: 'Acoustic Attenuation', value: 'Rw + Ctr ≥ 62 dB Floor/Wall Boundaries' }
    ],
    materials: ['Aged Swiss Alpine Basalt', 'Low-Carbon Slag Concrete', 'Cor-Ten Structural Grade S355', 'Weather-Resistant Titanium Zinc'],
    certifications: ['ISO 9001:2015 Quality Management', 'ISO 45001:2018 Safety Verified', 'Swiss SIA 260/261 Structural Conformance']
  },
  {
    id: 'architecture',
    number: '02',
    title: 'Architecture',
    kicker: 'Spatial Direction',
    tagline: 'Concept to Reality',
    summary: 'We design functional, beautiful spaces harmonizing landscape contours, daylight vectors, and monumental geometric proportions.',
    description: 'Our architectural division approaches every site as a geological monument. Guided by volumetric restraint and poetic illumination, we sculpt spaces that frame nature while offering sheltered sanctuary. Each commission begins with rigorous sun path, acoustic landscape, and micro-climate modeling.',
    iconName: 'Building2',
    deliverables: [
      'Comprehensive master planning & topographic integration',
      'BIM Level 3 digital twin 4D lifecycle modeling',
      'Solar daylight vectoring & acoustic spatial tuning',
      'Monumental double-height spatial flow sequencing',
      'Zoning, heritage preservation & sovereign permitting'
    ],
    specifications: [
      { label: 'Modeling Fidelity', value: 'LOD 500 As-Built Digital Twin' },
      { label: 'Thermal Envelope', value: 'U-value ≤ 0.12 W/(m²K) Passivhaus Standard' },
      { label: 'Glazing Performance', value: 'Triple Low-E Krypton Argon Fill (Ug 0.5)' },
      { label: 'Air Tightness', value: 'n50 ≤ 0.4 /h Pressurization Rating' }
    ],
    materials: ['Charred Yakisugi Cedar', 'Portuguese Moleanos Limestone', 'Anodized Champagne Aluminum', 'Custom Structural Low-Iron Glass'],
    certifications: ['RIBA Chartered Practice', 'SIA (Swiss Society of Engineers & Architects)', 'AIA International Associate']
  },
  {
    id: 'energy',
    number: '03',
    title: 'Energy',
    kicker: 'Self-Sufficiency',
    tagline: 'Net-Zero Standard',
    summary: 'We install reliable solar power arrays, micro-grid energy reserves, and geothermal thermal exchange systems for total autonomy.',
    description: 'True spatial permanence requires energy independence. Bularcrest engineers closed-loop micro-grids combining subterranean solid-state or LFP battery banks, integrated monocrystalline glass tiles, and deep-borehole geothermal heat pumps that provide 100% off-grid sovereign resilience without aesthetic intrusion.',
    iconName: 'Zap',
    deliverables: [
      'Integrated building-integrated photovoltaics (BIPV)',
      'Subterranean battery energy storage systems (BESS)',
      'Deep vertical geothermal closed-loop ground source loops',
      'Autonomous micro-grid synchronizers with black-start capacity',
      'Smart thermal storage buffers & hydronic radiant manifolds'
    ],
    specifications: [
      { label: 'Autonomy Scope', value: '100% Off-Grid or Seamless Islanding Mode' },
      { label: 'Storage Chemistry', value: 'Tier 1 LFP Subterranean Energy Vaults (35–150kWh)' },
      { label: 'Switchover Latency', value: '< 8 milliseconds (Uninterrupted Mission Critical)' },
      { label: 'Seasonal Performance', value: 'COP ≥ 4.8 Ground-Source Heat Exchanger' }
    ],
    materials: ['Anti-Reflective Solar Glass Tiles', 'Industrial Grade Copper Bussing', 'Cross-Linked PE-Xa Geothermal Tubing'],
    certifications: ['Minergie-P ECO Standard', 'TÜV Rheinland Grid Islanding Certified', 'Passivhaus Institute Certified Component']
  },
  {
    id: 'security',
    number: '04',
    title: 'Security',
    kicker: 'Perimeter Defense',
    tagline: 'Passive & Active Shield',
    summary: 'We set up smart CCTV systems, biometric point access, air-gapped monitoring bunkers, and subtle ballistic glass installations.',
    description: 'We believe defense should be completely invisible to occupants while impenetrable to external threats. We integrate ballistic-rated structural glazing, subterranean safe rooms, air-gapped secure communication hubs, and military-grade biometric access systems seamlessly into the architecture.',
    iconName: 'Shield',
    deliverables: [
      'Biometric fingerprint & iris access integration',
      'BR4 / BR6 EN 1063 ballistic structural glazing',
      'Subterranean NBC-filtered safe room vaults',
      'Fiber-optic perimeter intrusion detection mesh',
      'Air-gapped telemetry bunkers with independent air supply'
    ],
    specifications: [
      { label: 'Ballistic Rating', value: 'EN 1063 BR6 / FB6 Anti-Projectile Standard' },
      { label: 'Air Filtration', value: 'CBRN Overpressure Positive Air Lock (99.997%)' },
      { label: 'Surveillance Latency', value: 'Sub-5ms Neural Object Tracking Local AI' },
      { label: 'Redundancy', value: 'Quadruple Power & Optical Fiber Isolators' }
    ],
    materials: ['Multi-Ply Polycarbonate Glass Matrix', 'Armox 500T Armor Steel Liners', 'Faraday Shield Copper Enclosures'],
    certifications: ['EN 50131 Grade 4 Security Standard', 'STANAG 4569 Sub-Level Defense Conformance', 'ISO 27001 Physical Data Safeguards']
  },
  {
    id: 'lighting',
    number: '05',
    title: 'Lighting',
    kicker: 'Circadian Optics',
    tagline: 'Atmospheric Scenarios',
    summary: 'We create perfect lighting for any room, programming micro-recessed fixtures that sync with solar cycles and heighten architectural mood.',
    description: 'Light gives form its emotional gravity. Our lighting directors deploy micro-aperture optics, concealed cove channels, and circadian rhythm algorithmic controls that gently mirror natural solar color temperature curves from crisp morning dawn to deep amber twilight.',
    iconName: 'Sun',
    deliverables: [
      'Astronomical solar-clock circadian programming',
      'Micro-recessed 25mm trimless aperture fixtures',
      'DALI-2 & KNX architectural automation architectures',
      'Museum-grade art spotlighting with zero UV/IR degradation',
      'Concealed warm-amber step and cove graze channels'
    ],
    specifications: [
      { label: 'Color Rendering', value: 'CRI ≥ 98, R9 ≥ 95 Full Spectrum True Reproduction' },
      { label: 'Dimming Resolution', value: '0.01% Smooth Hybrid Dimming (No Strobe/Flicker)' },
      { label: 'Kelvin Range', value: '1800K (Candlelight) to 5500K (Solar Noon Horizon)' },
      { label: 'Beam Optics', value: 'Precision Interchangeable 10° to 60° TIR Lenses' }
    ],
    materials: ['Machined Billet Brass Bezels', 'Optical Grade Borosilicate Glass', 'Solid Aluminum Passive Heat Sinks'],
    certifications: ['WELL v2 Circadian Lighting Conformance', 'DALI-2 Certified Automation Protocol', 'Dark Sky Compliant Exterior Optics']
  },
  {
    id: 'interiors',
    number: '06',
    title: 'Interiors',
    kicker: 'Material Finish',
    tagline: 'Bespoke Millwork',
    summary: 'We finish spaces with premium details: hand-plastered tadelakt walls, patinated bronze joinery, and custom acoustic walnut paneling.',
    description: 'The touch of a door handle, the resonance of steps on stone, the scent of aged walnut: our interior atelier treats finishes with the devotion of heirloom instruments. Every panel is grain-matched, every bronze handle hand-cast, and every joint fitted with micron tolerances.',
    iconName: 'PenTool',
    deliverables: [
      'Master joinery & book-matched architectural walnut paneling',
      'Continuous Moroccan tadelakt & lime-plaster surfaces',
      'Hand-patinated solid bronze hardware and reveals',
      'Integrated acoustic micro-perforated ceiling baffles',
      'Custom monolithic stone basins & solid marble vanities'
    ],
    specifications: [
      { label: 'Joinery Tolerances', value: '± 0.5 mm Precision CNC & Master Hand Fitting' },
      { label: 'VOC Emissions', value: 'Zero VOC Mineral Plasters & Organic Beeswax Sealer' },
      { label: 'Acoustic Rating', value: 'NRC 0.85 Invisible Sound Dampening Matrix' },
      { label: 'Hardware Grade', value: 'Custom Cast Marine Bronze Alloy CuSn8' }
    ],
    materials: ['French Walnut Quartersawn', 'Statuary Carrara Marble', 'Hand-Waxed Tadelakt', 'Full-Grain Tuscan Saddlery Leather'],
    certifications: ['FSC Chain of Custody Certified Wood', 'LEED v4 Low-Emitting Materials Compliance', 'Guild of Master Craftsmen Verification']
  }
];

export const CORE_VALUES: CoreValueItem[] = [
  {
    id: 'quality',
    numeral: 'I',
    title: 'Quality',
    subtitle: 'Zero Compromise',
    quote: '"We use the best materials."',
    description: 'From volcanic basalt flooring to sustainably sourced aged alpine larch and carbon-reinforced concrete matrixes, every component is rigorously tested for thermal fatigue, acoustic absorption, and tactile majesty.',
    tags: ['Sovereign Aggregate', 'Triple-Glazed Schüco', 'Hand-Cast Bronze', 'C60/75 Concrete']
  },
  {
    id: 'integrity',
    numeral: 'II',
    title: 'Integrity',
    subtitle: 'Radical Clarity',
    quote: '"We tell you the truth."',
    description: 'Transparent timelines, open-book cost accounting, and genuine engineering analysis. We never obfuscate delays or engineer false expectations. Our client-architect relationship is built on complete structural candor.',
    tags: ['Real-Time Portal', 'Transparent Escrow', 'Fixed Milestones', 'Open-Book Audits']
  },
  {
    id: 'safety',
    numeral: 'III',
    title: 'Safety',
    subtitle: 'Absolute Vigilance',
    quote: '"We keep every site safe."',
    description: 'Uncompromising safety protocols on active sites safeguard our artisans, engineers, and neighboring environments. We hold a zero-incident track record across complex cantilevered and subterranean developments.',
    tags: ['ISO 45001 Verified', 'Autonomous Telemetry', 'Zero Incidents', 'Seismic Probing']
  },
  {
    id: 'innovation',
    numeral: 'IV',
    title: 'Innovation',
    subtitle: 'Invisible Intelligence',
    quote: '"Technology that serves, never distracts."',
    description: 'We embed automation and climate autonomy into the physical fabric of our walls so you feel its serenity without facing blinking screens or fragile dependencies.',
    tags: ['Solid-State Microgrids', 'Biometric Conformance', 'Acoustic Decoupling', 'BIM Twin']
  },
  {
    id: 'accountability',
    numeral: 'V',
    title: 'Accountability',
    subtitle: 'Generational Promise',
    quote: '"Built for generations, backed for life."',
    description: 'Every project includes an insured 50-year structural envelope warranty backed by Swiss reinsurers, alongside an annual atelier inspection protocol to maintain pristine performance.',
    tags: ['50-Year Envelope Guarantee', 'Swiss Escrow Shield', 'Annual Atelier Audit', 'Master Seal']
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'obsidian-pavilion',
    code: 'Project 049',
    title: 'The Obsidian Pavilion',
    subtitle: 'Volcanic Cliff Sanctuary & Subterranean Micro-Grid',
    category: 'Monumental',
    location: 'Mediterranean Coast, Italy',
    year: '2025',
    conditionedArea: '780 m²',
    timeline: '14 mo execution',
    energyProfile: '100% Off-Grid Solar & Thermal Battery',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTFfPuIvB0QUSu138R9QCoOBPnkn19Dq32EdSvQuPLGtJcr5_S-Yex-26gfFqIn7LG8sMyJkLVAg0F-svMs9qjff1xlovaF5ItDPUnWLTIYPMA5Szalha5cruhMX8p0l00slRwwy9wEFn0IlNcTPiu9vikS7D1a5-iLX8FwQeV2Y0UcMzNl-CSkbXeL9k5B-q0JLPa-lmRzst0h468m3Ni6C6zv5eF0z4IPWRRhw6Q2CFummWV7ZngJA',
    overview: 'Integrated into the rugged volcanic rock edge of the Mediterranean, this private pavilion merges a 35kW subterranean solar battery bank, passive sea-breeze thermal cooling, and biometric sanctuary spaces.',
    architecturalHighlights: [
      '12-meter floor-to-ceiling motorized low-iron glass sliders opening to sea horizon',
      'Subterranean 35kWh LFP battery vault with sea-water cooling heat exchanger',
      'Basalt rock cutouts acting as natural thermal flywheel cooling the interior',
      'Acoustic decoupling throughout master suite achieving ambient noise < 22 dB'
    ],
    structuralSystem: 'Deep-drilled rock anchor caissons with post-tensioned volcanic aggregate concrete slabs.',
    keyMaterials: ['Local Volcanic Basalt', 'Carbon-Tensioned Concrete', 'Bronze Window Profiles', 'Charred Oak']
  },
  {
    id: 'alpine-monolith',
    code: 'Project 042',
    title: 'Alpine Monolith Residence',
    subtitle: 'Glacial Perch & Eurocode 8 Seismic Engineering',
    category: 'Residential',
    location: 'Engadin Valley, Switzerland',
    year: '2024',
    conditionedArea: '1,120 m²',
    timeline: '18 mo execution',
    energyProfile: 'Geothermal Borehole + Minergie-P Certified',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCD_eFf2sLxQlzmmxZhFmYTbSOsAxCBEpKLWmaoHhjtbjwgaAUmkoajLDO2ahL-TPUEQTbRDK4StJvynu9WSe7jBV94N5iQ5SdoyZOJxGpcDXVpLz8GMs_pgehLYQy-fGDEp8SzHPNvwP9l4d0H9qjdgBX3PprYg6uNa2ZYaawnjPdWkVotc_S8de1ksbVM5w9Z0t5jwerj5jJVEi53pKZqKSHDI73LUiazDq5k16WcpP7ViXshxCKjQw',
    overview: 'Cantilevered dramatically over ancient granite scree in the Swiss Alps, this monolithic residence balances raw geological permanence with subtle radiant heating and triple-glazed Schüco curtain walls.',
    architecturalHighlights: [
      'Engineered to withstand heavy alpine snow loads exceeding 1,200 kg/m²',
      'Four 250m geothermal probe boreholes providing 100% of winter space and water heating',
      'Integrated alpine larch joinery treated with organic natural beeswax',
      'Subterranean wine cellar and biometric bunker bored directly into solid bedrock'
    ],
    structuralSystem: 'Cantilevered post-tensioned reinforced core keyed into Alpine granite bedrock.',
    keyMaterials: ['Andeer Granite', 'Swiss Alpine Larch', 'Schüco Triple Glass', 'Raw Poured Concrete']
  },
  {
    id: 'kyoto-kanso',
    code: 'Project 038',
    title: 'Kyoto Kanso Sanctuary',
    subtitle: 'Acoustic Silence & Yakisugi Materiality',
    category: 'Residential',
    location: 'Higashiyama, Kyoto, Japan',
    year: '2024',
    conditionedArea: '640 m²',
    timeline: '12 mo execution',
    energyProfile: 'Micro-Hydro + Concealed Solar BIPV',
    image: '/src/assets/images/kyoto_sanctuary_1792601164022.jpg',
    overview: 'A tranquil private courtyard compound harmonizing blackened Yakisugi cedar, tatami acoustic isolation, and a subterranean reflection pool fed by mountain runoff.',
    architecturalHighlights: [
      'Hand-charred traditional Yakisugi cedar siding with 80-year fire/pest resistance',
      'Subtle perimeter biometric recognition completely hidden in granite garden lanterns',
      'Circadian lighting system mimicking Kyoto forest sunbeams and moon phases',
      'Acoustic isolation allowing zero ambient city noise into tea ceremony pavilion'
    ],
    structuralSystem: 'Timber-concrete hybrid structure engineered for severe seismic Zone 4 damping.',
    keyMaterials: ['Charred Yakisugi Cedar', 'Granite Paving', 'Washi Paper Diffusers', 'Bronze Joinery']
  },
  {
    id: 'helio-pavilion',
    code: 'Project 051',
    title: 'Helios Bio-Solar Corporate Pavilion',
    subtitle: 'Zero-Emission Commercial Headquarters',
    category: 'Commercial',
    location: 'Lake Geneva, Switzerland',
    year: '2025',
    conditionedArea: '3,400 m²',
    timeline: '20 mo execution',
    energyProfile: '140kW Solar Facade + Lake Water Heat Sink',
    image: '/src/assets/images/helio_pavilion_1792601164744.jpg',
    overview: 'A milestone in sustainable institutional architecture. The pavilion incorporates dynamic photovoltaic facade panels, an open atrium reflecting pool, and executive governance suites.',
    architecturalHighlights: [
      'BIPV facade generating 160,000 kWh annually, exporting clean surplus to regional grid',
      'Lake Geneva deep-water thermal loop delivering radiant hydronic cooling without AC compressors',
      'Acoustic felt and micro-perforated oak ceiling louvers throughout 200-seat amphitheater',
      'ISO 45001 and Minergie-P verified commercial envelope with zero carbon footprint'
    ],
    structuralSystem: 'Skeleton frame with carbon-cured low-emission slabs and titanium zinc cladding.',
    keyMaterials: ['Titanium Zinc Cladding', 'Monocrystalline Solar Glass', 'Swiss White Oak', 'Polished Terrazzo']
  },
  {
    id: 'aethelgard-estate',
    code: 'Project 046',
    title: 'Aethelgard High-Sec Estate',
    subtitle: 'Subterranean Compound & Sovereign Bunker',
    category: 'Energy Autonomy',
    location: 'Cotswolds, United Kingdom',
    year: '2023',
    conditionedArea: '920 m²',
    timeline: '16 mo execution',
    energyProfile: 'Off-Grid Geothermal & Dual Microgrid',
    image: '/src/assets/images/aethelgard_estate_1792601165935.jpg',
    overview: 'Subtly stepped into Cotswolds rolling hills, this confidential private estate features living meadow roofs, an air-gapped security operations center, and continuous off-grid autonomy.',
    architecturalHighlights: [
      'Grass green-roof integration rendering upper profile invisible from surrounding aerial views',
      'Full NBC filtered safe-haven suite with independent 90-day sovereign life support systems',
      'Continuous subterranean link connecting private residential quarters to vehicle hangar',
      'Concealed solar energy harvest capturing both direct sunlight and low-angle morning diffuse light'
    ],
    structuralSystem: 'Subterranean double-skin waterproof concrete bunker with cantilevered living pavilions.',
    keyMaterials: ['Cotswold Natural Stone', 'Waterproof Cast Concrete', 'Ballistic Low-Iron Glass', 'Patinated Bronze']
  }
];

export const ATELIERS: AtelierOffice[] = [
  {
    city: 'Zürich',
    country: 'Switzerland',
    timezone: 'Europe/Zurich',
    address: 'Bahnhofstrasse 24',
    postal: '8001 Zürich, Switzerland',
    director: 'Marcus von Bularcrest',
    directPhone: '+41 44 214 88 00',
    directEmail: 'zurich@bularcrest.com'
  },
  {
    city: 'Kyoto',
    country: 'Japan',
    timezone: 'Asia/Tokyo',
    address: 'Higashiyama-ku, Shirakawa Minami-dori',
    postal: 'Kyoto 605-0862, Japan',
    director: 'Kenjiro Takahashi',
    directPhone: '+81 75 531 92 40',
    directEmail: 'kyoto@bularcrest.com'
  },
  {
    city: 'London',
    country: 'United Kingdom',
    timezone: 'Europe/London',
    address: '14 Berkeley Square, Mayfair',
    postal: 'London W1J 6BL, United Kingdom',
    director: 'Elena Vance, CEng',
    directPhone: '+44 20 7946 0912',
    directEmail: 'london@bularcrest.com'
  }
];

export const ARCHITECTS_LEADERSHIP = [
  {
    name: 'Marcus von Bularcrest',
    role: 'Founding Partner & Master Architect',
    creds: 'Dipl. Arch. ETH Zürich / SIA',
    bio: 'With over 24 years sculpting monolithic residences across the Swiss Alps, Mediterranean, and Scandinavia, Marcus leads design conviction and spatial philosophy.',
    image: '/src/assets/images/architect_portrait_1792601166340.jpg'
  },
  {
    name: 'Elena Vance, CEng',
    role: 'Director of Structural & Seismic Systems',
    creds: 'MSc Structural Dynamics, Imperial College London',
    bio: 'Specialist in post-tensioned concrete cantilevers and Eurocode 8 seismic resilience, overseeing rigorous structural telemetry across all European commissions.',
    image: '/src/assets/images/elena_vance_portrait_1792611897928.jpg'
  },
  {
    name: 'Kenjiro Takahashi',
    role: 'Director of Materiality & Acoustic Design',
    creds: 'Tokyo University of the Arts / Master Joiner Guild',
    bio: 'Pioneered the integration of traditional charred wood techniques with modern acoustic decoupling, creating sensory havens of profound quietness.',
    image: '/src/assets/images/kenjiro_portrait_1792611898294.jpg'
  }
];
