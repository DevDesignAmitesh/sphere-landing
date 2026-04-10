# SHOP SPHERE PVT LTD Website Plan

## 1. Project Goal
Build a **single-page banking website** inspired by the section flow of `eventales.com`, but redesigned to look formal, secure, and client-presentable for a finance-related business.

This is a **demo-style business site** for presentation, so the content will use:

- formal placeholder banking copy
- mock testimonials
- a text-based logo
- trust-oriented design

## 2. Confirmed Scope

- Website type: `Single page`
- Industry: `Banking / Financial`
- Logo: `No logo provided`, so a formal text logo will be used
- Company profile/content: `Not provided`, so curated placeholder copy will be written
- Gallery: `Removed`
- Testimonials/client logos: `Mock content allowed`
- Legal pages: `Not required right now`
- Tech stack:
  - `Next.js`
  - `App Router`
  - `Tailwind CSS`
  - `Motion for React` for subtle animation if needed

## 3. Reference Site Breakdown
The reference website follows this general structure:

1. Header
2. Hero section
3. About
4. Services
5. Why choose us
6. Process / approach
7. Trust / credibility section
8. Testimonials
9. Contact
10. Footer

This is the structure we will reuse.  
The gallery section from the reference site will be removed.

## 4. Design Direction For Banking
Since this is a banking-related presentation website, the design must feel:

- trustworthy
- stable
- premium
- clean
- structured

### Visual Language
- Minimal corporate layout
- Strong section separation
- Clean cards and borders
- Controlled animation only
- More emphasis on trust than decoration

### Theme Direction
- Deep navy as primary color
- Soft off-white backgrounds
- Slate blue support tones
- Light gold accent used very sparingly

### Suggested Color Palette
- `#0B1F3A` primary navy
- `#163A63` secondary blue
- `#C9A857` accent gold
- `#F8FAFC` page background
- `#E5E7EB` card/border tone
- `#111827` main text

This palette is suitable for banking because it avoids flashy tones and feels credible.

## 5. Font Recommendation

### Primary Recommendation
- Headings: `Manrope`
- Body: `Inter`

### Backup Option
- Headings: `Plus Jakarta Sans`
- Body: `Source Sans 3`

### Why This Works
- clear and professional
- strong readability
- modern without looking trendy
- suitable for business presentations

## 6. Branding Approach
Since no logo has been provided, the site should use a **text-based wordmark** such as:

- `SHOP SPHERE`
- `SHOP SPHERE PVT LTD`

Recommended styling:
- uppercase or small caps
- bold geometric heading font
- letter spacing for a formal corporate feel
- optional icon mark using a simple shield, pillar, or monogram later

## 7. Final Homepage Structure

### Header
- Text logo
- Home
- About
- Services
- Why Us
- Testimonials
- Contact
- CTA button: `Get Consultation`

### Hero Section
Purpose: establish authority immediately.

Suggested content direction:
- headline around secure financial support and trusted banking solutions
- short intro paragraph
- CTA buttons
- trust indicators like:
  - secure service
  - expert support
  - client-focused guidance

### About Section
This section will explain the company in a formal and broad way without making risky claims.

Suggested direction:
- business-oriented financial support company
- focused on reliability and service excellence
- tailored support for individuals and businesses

### Services Section
Because no exact services were provided, the content should stay broad and safe.

Suggested service cards:
- Retail Banking Support
- Business Banking Assistance
- Financial Advisory Support
- Loan and Credit Guidance
- Account Management Solutions
- Customer Service and Documentation Help

These are presentation-friendly placeholders and can be replaced later.

### Why Choose Us
Suggested cards:
- Trusted Service Framework
- Transparent Communication
- Secure Process Handling
- Client-Centered Support
- Efficient Documentation Guidance
- Professional Financial Assistance

### Process Section
Recommended 4-step flow:

1. Consultation
2. Requirement Review
3. Documentation and Processing
4. Ongoing Support

### Trust Section
Since gallery is removed, this section can replace that visual space.

Suggested content:
- trust counters
- service quality highlights
- business values
- simple feature grid

Possible stats for presentation use:
- `10+ Years of Combined Expertise`
- `500+ Assisted Clients`
- `99% Support Satisfaction`

These should be treated as mock presentation values unless approved by the client.

### Testimonials
Use mock testimonials with professional names and short believable feedback.

Tone:
- formal
- short
- professional
- not overly promotional

### Contact Section
Include:

- Company Name: `SHOP SPHERE PVT LTD`
- Mobile: `8448049976`
- Email: `shopsphereprivatelimited@gmail.com`
- Address: `UNIT No.228, 2ND FLOOR, LSC, VARDHMAN PREMIUM MALL, OUTER RING ROAD, DEEPALI, PITAMPURA, ROHINI SECTOR 5, NORTH WEST DELHI, INDIA, 110085`

Optional additions:
- contact form
- map placeholder block
- office hours block

### Footer
- text logo
- quick links
- contact details
- short company description

## 8. Content Strategy
Since the client has not provided business copy, the website content will be written using common banking-site patterns:

- broad service language
- trust-led messaging
- formal professional tone
- no highly specific financial claims
- no regulatory/legal claims unless confirmed later

Important rule:
placeholder content should sound credible, but should not imply certifications, approvals, or exact institutional status that the client did not provide.

## 9. Tech Stack Plan

### Core Stack
- `Next.js`
- `App Router`
- `Tailwind CSS`
- `Motion`

### Why This Stack

#### Next.js
- strong structure for modern production apps
- good performance
- clean routing
- easy deployment

#### App Router
- cleaner component organization
- better layout composition
- future-ready if more pages are added later

#### Tailwind CSS
- fast UI development
- easier design consistency
- good for responsive section-heavy landing pages

#### Motion
- suitable for subtle entrance animations
- useful for fade, slide, stagger, and scroll reveals
- should be used lightly for a finance website

### Recommended Project Structure
- `app/`
- `app/page.tsx`
- `app/layout.tsx`
- `components/sections/`
- `components/ui/`
- `lib/`
- `public/`

## 10. Animation Plan
Animation should be minimal and professional.

Recommended use:
- hero text fade/slide
- section reveal on scroll
- card hover lift
- button interaction states

Avoid:
- overly bouncy animation
- flashy transitions
- autoplay-heavy sliders

## 11. Build Plan

### Phase 1: Setup
- create Next.js app structure
- configure Tailwind
- set fonts and theme variables
- define reusable layout container styles

### Phase 2: Homepage UI
- build header
- build hero
- build about section
- build services grid
- build why choose us
- build process section
- build trust stats section
- build testimonials
- build contact section
- build footer

### Phase 3: Content Integration
- add placeholder banking copy
- add mock testimonials
- add company details
- add text logo styling

### Phase 4: Motion and Polish
- add subtle section animations
- improve spacing and visual rhythm
- refine CTA buttons and cards

### Phase 5: QA
- mobile responsiveness
- desktop responsiveness
- section spacing review
- content consistency review
- final visual cleanup

## 12. Implementation Notes
- The site should feel like a premium banking landing page, not a generic template.
- We will mirror the conversion flow of the reference site, not its event-business visuals.
- Since this is for showing to someone, polish matters more than content depth.
- Placeholder content should be easy to swap later.

## 13. Immediate Next Step
Next step after this planning file:

- start the actual Next.js single-page build
- create the banking theme system
- build the homepage sections
- insert placeholder content and company details
