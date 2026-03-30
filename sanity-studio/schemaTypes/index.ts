import {homePage} from './homePage'
import {siteSettings} from './siteSettings'
import {cityServicePage} from './cityServicePage'
import {locationPage} from './locationPage'
import {legalPage} from './legalPage'
import {faqPage} from './faqPage'
import {galleryPage} from './galleryPage'
import {contactPage} from './contactPage'
import {reviewsPage} from './reviewsPage'
import {blogPost} from './blogPost'
import {homepageObjectTypes} from './objectTypes'

export const schemaTypes = [
  siteSettings,
  homePage,
  cityServicePage,
  locationPage,
  blogPost,
  legalPage,
  faqPage,
  galleryPage,
  contactPage,
  reviewsPage,
  ...homepageObjectTypes,
]
