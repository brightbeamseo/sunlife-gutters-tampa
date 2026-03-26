import { asStr } from './sanity-strings.js'

const HERO_POOL = [
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-arvada-co-completed-gutter-installation-and-repair-on-finished-home-with-clean-lines-and-overcast-sky.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-aurora-co-close-up-gutter-guard-installation-shingle-roof-sunlight-detail.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-aurora-new-construction-gutter-installation.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-broomfield-co-home-gutter-replacement-project-exterior-finished-view.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-broomfield-suburban-home-gutters.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-centennial-co-finished-residential-gutter-installation-modern-home-clear-weather.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-centennial-residential-gutter-system.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-cherry-hills-village-luxury-home-gutters.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-commerce-city-co-modern-dark-exterior-home-with-seamless-black-gutters-and-clean-roofline-on-a-clear-day.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-denver-co-aerial-drone-view-complete-roof-gutter-system-installation.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-denver-downtown-commercial-box-gutters.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-denver-lohi-townhome-gutter-installation.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-englewood-co-heated-gutter-system-heat-tape-installation-roof-edge-detail.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-golden-co-large-luxury-residence-with-multiple-gables-and-integrated-gutter-system-in-clear-sunshine.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-highlands-ranch-co-gutter-repair-project-complete-home-exterior-clean-install.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-highlands-ranch-seamless-gutters-leaf-guard.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-lakewood-co-close-up-of-metal-gutter-guard-installed-along-asphalt-shingles-under-bright-daylight.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-lakewood-new-home-gutters.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-littleton-co-hand-removing-dry-autumn-leaves-from-roof-edge-gutter-during-fall-cleanup-on-a-crisp-day.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-littleton-residential-gutter-install.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-parker-co-modern-luxury-home-outdoor-kitchen-patio-with-extended-roof-and-hidden-drainage-on-sunny-day.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-thornton-co-drone-overhead-view-complex-roof-gutter-installation-system.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-thornton-small-home-gutter-install.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-westminster-co-covered-patio-home-gutter-installation-backyard-view-bright-day.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-westminster-two-story-home-gutters.webp',
  'Media (SLG)/Images (SunLife)/sunlife-gutters-tampa-wheat-ridge-co-large-custom-home-full-gutter-system-installation-sunny-day.webp',
]

function seedIndex(seed) {
  const s = asStr(seed)
  let hash = 0
  for (let i = 0; i < s.length; i += 1) hash = (hash * 31 + s.charCodeAt(i)) >>> 0
  return HERO_POOL.length ? hash % HERO_POOL.length : 0
}

export function heroBackgroundFor(seed) {
  if (!HERO_POOL.length) return ''
  return HERO_POOL[seedIndex(seed)]
}
