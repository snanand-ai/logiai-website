# CLAUDE.md - AI Assistant Guide for LogiAI Website

## Project Overview

**LogiAI Website** is a marketing and product showcase site for LogiAI, an Optimization Mesh platform for logistics that emphasizes "Intelligence before automation" with human-in-the-loop decision-making.

- **Tech Stack**: Next.js 14.2.5, React 18, Tailwind CSS 3.4.10
- **Deployment**: Vercel-optimized (no special configuration required)
- **Working Directory**: `/home/user/logiai-website/logiai-site/`
- **Node Version**: 18+ recommended

## Directory Structure

```
logiai-site/
├── app/                          # Next.js App Router (pages & routing)
│   ├── layout.jsx               # Root layout with Navbar & Footer
│   ├── page.jsx                 # Homepage (hero section)
│   ├── product/page.jsx         # Product details & OM features
│   ├── use-cases/page.jsx       # 5 key use cases
│   ├── company/page.jsx         # Company mission & story
│   ├── security/page.jsx        # Security & governance
│   ├── contact/page.jsx         # Contact form (placeholder)
│   ├── privacy/page.jsx         # Privacy policy (placeholder)
│   └── globals.css              # Global Tailwind imports
├── components/                   # Reusable React components
│   ├── Navbar.jsx              # Sticky header navigation
│   ├── Footer.jsx              # Footer with links
│   ├── Container.jsx           # Max-width layout wrapper
│   ├── Button.jsx              # Button component with variants
│   ├── OMLoop.jsx              # Optimization Mesh workflow display
│   └── HITLCallout.jsx         # Human-in-the-loop principle callout
├── public/                       # Static assets
│   └── logo.png                # LogiAI logo (739KB)
├── next.config.mjs              # Next.js configuration
├── tailwind.config.js           # Custom color palette
├── postcss.config.js            # PostCSS with Tailwind & Autoprefixer
└── package.json                 # Dependencies & scripts
```

## Routing Structure

| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.jsx` | Homepage with hero section and CTAs |
| `/product` | `app/product/page.jsx` | Product description and Optimization Mesh details |
| `/use-cases` | `app/use-cases/page.jsx` | 5 key use cases (compliance, staffing, delays, etc.) |
| `/company` | `app/company/page.jsx` | Company story and mission |
| `/security` | `app/security/page.jsx` | Security & governance features |
| `/contact` | `app/contact/page.jsx` | Contact form (currently placeholder) |
| `/privacy` | `app/privacy/page.jsx` | Privacy policy (template placeholder) |

**Note**: All pages are wrapped by `app/layout.jsx` which includes persistent Navbar and Footer components.

## Technology Stack Details

### Core Dependencies
- **next**: 14.2.5 (React framework with App Router)
- **react**: 18.3.1
- **react-dom**: 18.3.1

### Dev Dependencies
- **tailwindcss**: 3.4.10 (utility-first CSS)
- **postcss**: 8.4.41
- **autoprefixer**: 10.4.20

### Scripts
```bash
npm run dev    # Development server (http://localhost:3000)
npm run build  # Production build
npm run start  # Production server
npm run lint   # Next.js ESLint
```

## Design System & Styling

### Custom Color Palette (Tailwind)

Defined in `tailwind.config.js`:

```javascript
colors: {
  ink: "#001035",    // Dark navy (primary text)
  navy: "#013B5F",   // Lighter navy (hover states)
  teal: "#076380",   // Accent color
  gold: "#FFC520",   // CTA/highlight (Book Demo button)
  mist: "#82AABA",   // Soft gray/secondary
}
```

### Styling Conventions

1. **Utility-First**: All styling uses Tailwind utility classes - no custom CSS classes
2. **Responsive Design**: Mobile-first with Tailwind breakpoints (sm:, md:, lg:)
3. **Global Styles**: Only in `globals.css` (Tailwind imports + minimal body styles)
4. **Color Scheme**: Light mode only (enforced in `app/layout.jsx`)

### Common Patterns

- **Container widths**: `max-w-6xl` (standard page width)
- **Padding**: `px-6` (horizontal), `py-24` (vertical for sections)
- **Text colors**: `text-ink` (headings), `text-ink/75` (links), `text-slate-600` (body)
- **Buttons**: Use `Button` component with `primary` or `secondary` variants
- **Grid layouts**: `grid md:grid-cols-2 gap-8` (2-column on desktop, 1 on mobile)

## Component Architecture

### Core Patterns

1. **Functional Components**: All components use function declarations with default exports
2. **Composition Over Configuration**: Components compose together (e.g., Page = Container + content + HITLCallout)
3. **Data-Driven Rendering**: Arrays mapped to components (see use-cases page)
4. **Prop-Based Flexibility**: Components accept `className` for style overrides

### Key Components

#### Container.jsx
```javascript
// Layout wrapper with max-width and padding
<Container className="optional-classes">
  {children}
</Container>
```
- Default: `max-w-6xl mx-auto px-6`
- Use for consistent page layout

#### Button.jsx
```javascript
<Button href="/path" variant="primary">Text</Button>
```
- **Variants**: `primary` (gold background), `secondary` (border only)
- Supports both `<a>` tags (href) and `<button>` tags

#### HITLCallout.jsx
```javascript
<HITLCallout />
```
- Reusable "Humans Always in Control" principle callout
- Used on product, company, and other key pages
- No props - consistent messaging

#### OMLoop.jsx
```javascript
<OMLoop />
```
- Displays 5-step Optimization Mesh workflow
- Steps: Signals → Optimization → Human Decision → Automation → Learning
- Self-contained, no props

### Component Reuse Strategy

- **Navbar & Footer**: Defined in `app/layout.jsx`, appear on all pages
- **Container**: Wrap all page content for consistent layout
- **HITLCallout**: Insert on pages emphasizing human control principle
- **Button**: Use for all CTAs (never hardcode button styles)

## Development Workflows

### Local Development

```bash
# First time setup
cd logiai-site
npm install

# Start development server
npm run dev
# Visit http://localhost:3000
```

### Building for Production

```bash
npm run build  # Creates .next/ production build
npm run start  # Serves production build locally
```

### Deployment (Vercel)

- Import repository to Vercel
- No special configuration needed
- **Important**: Update `DEMO_LINK` before deploying (see Configuration section)

## Configuration Files

### next.config.mjs
```javascript
export default {
  images: { unoptimized: true }  // Image optimization disabled
};
```

### tailwind.config.js
- **Content paths**: `["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"]`
- **Custom colors**: ink, navy, teal, gold, mist
- **No plugins**: Standard Tailwind only

### postcss.config.js
- Plugins: `tailwindcss`, `autoprefixer`
- Standard production-ready setup

## Important Configuration Points

### Demo Link (MUST UPDATE BEFORE DEPLOYMENT)

The demo booking link is hardcoded in **TWO locations**:

1. **`components/Navbar.jsx`** (line 4):
   ```javascript
   const DEMO_LINK = "https://calendly.com/YOUR_LINK/demo";
   ```

2. **`app/page.jsx`** (line 16):
   ```javascript
   <a href="#" className="...">Book a demo</a>
   ```
   - Currently points to `#` (needs updating)

**Action Required**: Update both locations with the actual Calendly or booking link before deployment.

## Git Workflow

### Branch Naming Convention

- Feature branches: `claude/feature-name-<session-id>`
- Example: `claude/add-claude-documentation-U7Peq`
- **Critical**: All branches must start with `claude/` and end with session ID to push successfully

### Commit Conventions

- **Descriptive messages**: Focus on "why" over "what"
- **No destructive operations**: Never force push to main/master
- **Sequential workflow**:
  1. Make changes
  2. Review with `git status` and `git diff`
  3. Stage files with `git add`
  4. Commit with clear message
  5. Push with `git push -u origin <branch-name>`

### Push Protocol

```bash
# Always use -u flag for new branches
git push -u origin claude/feature-name-<session-id>

# If network errors occur, retry up to 4 times with exponential backoff:
# 2s, 4s, 8s, 16s between retries
```

## Code Conventions

### File Organization

1. **Imports**: External dependencies first, then internal components
   ```javascript
   import Container from "./Container";
   import { Button } from "./Button";
   ```

2. **Constants**: Define at module level (above component)
   ```javascript
   const DEMO_LINK = "https://calendly.com/YOUR_LINK/demo";
   ```

3. **Component Structure**:
   - Function declaration
   - Return JSX
   - Default export

### Naming Conventions

- **Components**: PascalCase (`Navbar.jsx`, `Container.jsx`)
- **Files**: Match component name exactly
- **Constants**: UPPER_SNAKE_CASE (`DEMO_LINK`, `USE_CASES`)
- **Props**: camelCase (`className`, `variant`)

### JSX Conventions

- **Self-closing tags**: Use for components without children (`<HITLCallout />`)
- **Quotes**: Double quotes for JSX attributes, single quotes for JS strings
- **Spacing**: Consistent indentation (2 spaces)
- **Comments**: Only where logic isn't self-evident

### Data-Driven Patterns

When creating lists (features, use cases, steps):

```javascript
const USE_CASES = [
  { title: "...", description: "..." },
  // ...
];

return (
  <div className="grid md:grid-cols-2 gap-8">
    {USE_CASES.map((useCase, i) => (
      <div key={i}>
        <h3>{useCase.title}</h3>
        <p>{useCase.description}</p>
      </div>
    ))}
  </div>
);
```

## AI Assistant Guidelines

### When Making Changes

1. **Read First**: Always read files before editing (NEVER propose changes to unread code)
2. **Use Existing Patterns**: Follow established component and styling patterns
3. **Minimize Changes**: Only modify what's necessary (avoid refactoring unrelated code)
4. **Test Locally**: Suggest running `npm run dev` after significant changes
5. **Check Responsiveness**: Ensure mobile and desktop layouts work

### Component Creation

- **Prefer Editing**: ALWAYS prefer editing existing components over creating new ones
- **When Creating**:
  - Use functional components with default export
  - Follow existing file structure
  - Place in `/components/` if reusable, `/app/` if page-specific
  - Use Tailwind classes exclusively

### Styling Guidelines

- **Never**: Create custom CSS classes or write CSS files
- **Always**: Use Tailwind utility classes
- **Colors**: Use custom palette (ink, navy, teal, gold, mist) over default Tailwind colors
- **Responsive**: Include mobile breakpoints (`md:`, `lg:`)

### Common Pitfalls to Avoid

1. ❌ Creating new files when editing existing ones would suffice
2. ❌ Adding comments or documentation unless code is genuinely complex
3. ❌ Refactoring working code not related to the task
4. ❌ Using custom CSS or inline styles instead of Tailwind
5. ❌ Changing folder structure or moving files unnecessarily
6. ❌ Adding dependencies without explicit user request
7. ❌ Over-engineering simple features

### Best Practices

1. ✅ Read `app/layout.jsx` to understand global structure
2. ✅ Check existing pages for patterns before creating new ones
3. ✅ Reuse components like `Container`, `Button`, `HITLCallout`
4. ✅ Keep pages simple and focused
5. ✅ Follow mobile-first responsive design
6. ✅ Use semantic HTML (`<header>`, `<nav>`, `<section>`)
7. ✅ Test changes with `npm run build` before deployment

## Core Product Principles (Reflected in Code)

### Human-in-the-Loop Philosophy

The entire codebase emphasizes that **humans make decisions, not the AI**:

- **OMLoop component**: Shows workflow ending with "Learning" (feedback to AI)
- **HITLCallout**: Reinforces "Humans Always in Control" message
- **Messaging**: "Intelligence before automation" (homepage tagline)

### Optimization Mesh Workflow

5-step process (represented in `OMLoop.jsx`):

1. **Signals** → Ingest data from TMS/WMS
2. **Optimization** → Analyze using constraint solver
3. **Human Decision** → Present options to user
4. **Automation** → Execute approved decision
5. **Learning** → Improve AI from feedback

**This workflow should be preserved** in any changes to product messaging or components.

## Testing & Quality Assurance

### Before Committing

1. Run `npm run lint` - Check for ESLint errors
2. Run `npm run build` - Ensure production build succeeds
3. Check `npm run dev` - Verify changes work locally
4. Test responsive design - Check mobile and desktop layouts
5. Verify links - Ensure all navigation works

### Deployment Checklist

- [ ] DEMO_LINK updated in `Navbar.jsx` and `page.jsx`
- [ ] All images exist in `/public/`
- [ ] No console errors in browser
- [ ] Build succeeds (`npm run build`)
- [ ] Navigation works on all pages
- [ ] Mobile layout renders correctly

## Common Tasks

### Adding a New Page

1. Create `app/new-page/page.jsx`
2. Follow existing page structure:
   ```javascript
   import Container from "@/components/Container";

   export default function NewPage() {
     return (
       <Container className="py-24">
         {/* content */}
       </Container>
     );
   }
   ```
3. Add navigation link to `components/Navbar.jsx`
4. Test routing at `http://localhost:3000/new-page`

### Adding a New Component

1. Create `components/NewComponent.jsx`
2. Use functional component pattern:
   ```javascript
   export default function NewComponent({ children, className }) {
     return (
       <div className={`base-classes ${className}`}>
         {children}
       </div>
     );
   }
   ```
3. Import and use in pages

### Updating Styles

1. **Never create CSS files** - use Tailwind classes
2. For new colors, add to `tailwind.config.js` theme
3. Use responsive breakpoints: `className="text-sm md:text-lg"`
4. Check Tailwind docs: https://tailwindcss.com/docs

### Modifying Navigation

- Edit `components/Navbar.jsx` for header links
- Edit `components/Footer.jsx` for footer links
- Keep mobile responsiveness (`hidden md:flex` pattern)

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Styling Not Applied

- Check `tailwind.config.js` content paths include your file
- Restart dev server after config changes
- Verify class names are valid Tailwind utilities

### Images Not Loading

- Ensure image is in `/public/` directory
- Use path `/filename.png` (leading slash, no "public")
- Check `next.config.mjs` has `images: { unoptimized: true }`

### Routing Issues

- File must be named `page.jsx` (not `Page.jsx` or `index.jsx`)
- Must be inside `app/` directory
- Check for syntax errors in component

## Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React**: https://react.dev
- **Vercel Deployment**: https://vercel.com/docs

## Current Status (Last Updated: 2026-01-23)

- **Active Branch**: `claude/add-claude-documentation-U7Peq`
- **Recent Changes**: Fixed 404 error by adding default export to page.jsx, removed redundant Flow Forward tagline
- **Clean Status**: No uncommitted changes
- **Next Steps**: Update DEMO_LINK before production deployment

---

## Quick Reference for AI Assistants

**Before Every Edit:**
1. Read the file first
2. Check for similar patterns in other files
3. Use Tailwind classes, not custom CSS
4. Preserve existing component structure

**After Every Edit:**
1. Verify syntax is correct
2. Check responsive design
3. Test with `npm run dev`
4. Run `npm run build` for significant changes

**Remember:**
- This is a lightweight marketing site
- Simplicity over complexity
- Consistency over novelty
- Mobile-first responsive design
- Human-in-the-loop is the core product principle

---

*This document should be updated whenever significant architectural or workflow changes occur.*
