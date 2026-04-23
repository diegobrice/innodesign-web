'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// innodesign motion: quick, un-showy. Custom ease approximates the kit's
// cubic-bezier(0.2, 0.7, 0.2, 1). Durations stay gentle for scroll entrances.
gsap.defaults({ ease: 'power2.out', duration: 0.7 });

export { gsap, ScrollTrigger, useGSAP };
