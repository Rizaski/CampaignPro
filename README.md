# Campaign Manager - Maldives

A political campaign management dashboard built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Dashboard**: Real-time metrics and data visualization
- **Mobile-First**: Optimized mobile navigation and layout
- **Modern UI**: Clean, professional interface with smooth animations
- **Accessibility**: Built with accessibility best practices

## Project Structure

```
MVCampaign/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── assets/             # Static assets (if needed)
```

## Getting Started

1. **Clone or download** the project files
2. **Open** `index.html` in a web browser
3. **No build process required** - it's pure HTML/CSS/JS!

## Features Overview

### Dashboard Metrics
- Active Volunteers: 1,247 (+12%)
- Upcoming Events: 23 (+5)
- Voter Contacts: 45,892 (+2.3K)
- Donations: ₨ 2.4M (+18%)
- Constituencies: 87 (100%)

### Interactive Components
- **Search Bar**: Search campaigns and volunteers
- **Charts**: Volunteer engagement visualization
- **Activity Stats**: Progress bars for campaign activities
- **Constituencies Table**: Top performing areas
- **Mobile Navigation**: Bottom navigation for mobile devices

### Responsive Breakpoints
- **Mobile**: < 768px (Bottom navigation)
- **Tablet**: 768px - 1024px (Compact sidebar)
- **Desktop**: > 1024px (Full sidebar)

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Customization

### Colors
Edit the CSS variables in `styles.css` to customize the color scheme:

```css
:root {
  --primary: oklch(0.55 0.15 200);
  --secondary: oklch(0.75 0.12 160);
  --accent: oklch(0.7 0.15 180);
  /* ... more variables */
}
```

### Data
Update the data in `script.js` to reflect your campaign information:

```javascript
const state = {
  chartData: [
    { name: "Week 1", value: 420 },
    // ... more data
  ],
  constituencies: [
    { name: "Malé", volunteers: 342, events: 12, contacts: 8934 },
    // ... more constituencies
  ]
};
```

## Development

### Adding New Features
1. **HTML**: Add new elements to `index.html`
2. **CSS**: Style new elements in `styles.css`
3. **JavaScript**: Add functionality in `script.js`

### File Organization
- Keep HTML semantic and accessible
- Use CSS custom properties for theming
- Follow the modular JavaScript pattern used in `script.js`

## Performance

- **Lightweight**: No external dependencies
- **Fast Loading**: Optimized CSS and JavaScript
- **Efficient**: Debounced search and optimized animations
- **Responsive Images**: Uses SVG icons for crisp display

## Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Color Contrast**: WCAG AA compliant color combinations
- **Focus Management**: Clear focus indicators

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please refer to the project documentation or create an issue in the project repository.

