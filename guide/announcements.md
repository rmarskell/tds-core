# TDS Announcement Board 📣

Welcome to the TDS Announcement Board! Check back here regularly for the latest updates on TDS!

<hr/>

## March 2019

### New core components ✨

**Benefit**
Want a clear, concise and design-approved way to tell your users how great something is? Benefit is for you! Take a look over at the [Benefit docs (Heading)](https://tds.telus.com/components/index.html#!/BenefitWithHeading) and [Benefit docs (No Heading)](https://tds.telus.com/components/index.html#!/BenefitNoHeading)

**Video** and **WebVideo**
TDS now offers a consistent video experience! Have a video hosted on TELUS servers? Use the Video component to take advantage of a full video player experience! Want to use a YouTube video? We have a component for that too! WebVideo will insert YouTube videos into your page along with using a TELUS branded splash screen. Take a look at the [Video docs](https://tds.telus.com/components/index.html#!/Video) and [WebVideo docs](https://tds.telus.com/components/index.html#!/WebVideo)

### Features 🎁

**DecorativeIcon 1.1.0**

DecorativeIcon has gotten a new update that has over 150+ icons!

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-decorative-icon%401.1.0)
- [Documentation](https://tds.telus.com/components/index.html#!/SVGIcon)

**CSSReset 1.2.0**

New optional Sass mixin to help with page height. Shoutouts to Sean McCullough for the contribution!

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-css-reset%401.2.0)
- [Documentation](https://tds.telus.com/components/index.html#!/CssReset)

**Input 2.1.0**

New `hintPosition` prop, now the Input can have a hint displayed below its label. Shoutouts to Ally Hui for the contribution!

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-input%402.1.0)
- [Documentation](https://tds.telus.com/components/index.html#!/Input)

### Fixes 🔧

**FlexGrid 2.3.7**

Remove Broadcast and Subscriber deprecation warnings.

-[Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-flex-grid%402.3.7)

**Colours 1.1.1**

Properly export colours from commonjs. Thanks to Heather Vandervecht for bringing this issue to our attention.

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-colours%401.1.1)

### Process upgrades 📈

**Animation** is now a published component. While not intended for use outside of TDS components, this will have the effect of decreasing TDS component build sizes. Thanks to Andrew Lam for the contribution!

### Styled Components upgrades 💅

TDS is currently engaging in an initiative to upgrade all of our components to use the Styled Components CSS-in-JS framework. Check out the [Tech Forum issue](https://github.com/telus/technology-forum/issues/274) for more details!

**A11yContent 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-a11y-content%402.0.0)

**Button 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-button%402.0.0)

**ButtonLink 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-button-link%402.0.0)

**Colours 1.1.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-colours%401.1.0)

**Image 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-image%402.0.0)

**Strong 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-strong%402.0.0)

**Small 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-small%402.0.0)

**WaveDivider 2.0.0**

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-wave-divider%402.0.0)

### TDS sunset 🌅

TDS is planning on sunsetting old versions of the design system. The dates are as follows:

| TDS Version | Sunset Date       |
| ----------- | ----------------- |
| TDS v0.xx   | July 1 2019       |
| TDS v1.xx   | September 1, 2019 |
| TDS v2.xx   | February 1, 2020  |

TDS V3 is TDS utilizing Styled Components. Please have your projects using the relevant versions upgraded by these dates! For more information, check out the [Tech Forum issue](https://github.com/telus/technology-forum/issues/285).

## February 2019

### Features 🎁

**Input 2.0.0** now supports uncontrolled components by setting `value` to undefined by default

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-input%402.0.0)
- [Documentation](https://tds.telus.com/components/index.html#input)

**Select 2.0.0** now supports uncontrolled components by setting `value` to undefined by default

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-select%402.0.0)
- [Documentation](https://tds.telus.com/components/index.html#select)

**TextArea 2.0.0** now supports uncontrolled components by setting `value` to undefined by default

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-text-area%402.0.0)
- [Documentation](https://tds.telus.com/components/index.html#textarea)

### Fixes 🔧

**FlexGrid 2.3.5** fixes a CSS specificity issue around `horizonalAlign` in `FlexGrid.Col`

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-flex-grid%402.3.5)
- [Documentation](https://tds.telus.com/components/index.html#col)

**Radio 1.2.3** no longer shows propType errors when you pass in a boolean `value`

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-radio%401.2.3)
- [Documentation](https://tds.telus.com/components/index.html#radio)

**Notification 1.2.10** now supports dismissible notifications

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-notification%401.2.10)
- [Documentation](https://tds.telus.com/components/index.html#notification)

## January 2019

### Features 🎁

**TDS Util Prop Types 1.2.0** has a new `or` propType for combining multiple Prop Types

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Futil-prop-types%401.2.0)
- [Documentation](https://tds.telus.com/components/index.html#proptypes)

### Fixes 🔧

**ExpandCollapse 1.2.4** does not reset state when a child element calls `this.setState()`

Thanks for the ongoing effort Ally Hui and Nicholas Mak! The conversation is continuing in [#892](https://github.com/telus/tds-core/issues/892).

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-expand-collapse%401.2.4)
- [Documentation](https://tds.telus.com/components/index.html#expandcollapse)

## December 2018

### New core components ✨

**Button Group**

Feel like things are a bit empty when you have only a couple of radio buttons on your form? Want a bit of pizzazz in your user’s choices! Say no more! Today we’re introducing **Button Group**, a core component that displays radio inputs as big pretty buttons! Forms have never been so exciting. [Feel the excitement over at our docs!](https://tds.telus.com/components/index.html#buttongroup)

**Breadcrumbs**

Ever descend a hierarchy of pages and find that you’re lost and confused? At TELUS, we have a lot of deeply nested and complex pages. This is essential if we want to stay organized, but can be a little daunting to users who have been following links for a while. So, as a collaboration with **Global Elements**, we would like to introduce **Breadcrumbs**! This component is a consistent way of letting the user know which page they are on. It integrates right into projects already built with React Router 3 (or 4!), so minimal refactoring is required to use it! We hope you agree that it’s our most delicious component. [Try a sample at our docs!](https://tds.telus.com/components/index.html#breadcrumb)

Designers, check all of this out on DSM version **2.1.3**!

### Features 🎁

**Spinner 2.1.0** has a new `inline` prop to wrap Buttons and other inline elements more easily!

Thanks for being part of the conversation Ally Hui and Jeffrey Chang!

- [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-spinner%402.1.0)
- [Documentation](https://tds.telus.com/components/index.html#spinner)

**Flex Grid 2.3.0** - New `horizontalAlign` added to `col`, allowing for horizontal alignment on a per-column basis. Thanks for being part of the conversation Nika Karliuchenko!

- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-flex-grid%402.3.0)
- [Documentation](https://tds.telus.com/components/index.html#col)

**Radio 1.2.0** - Add optional descriptions to Radio (Reported by, and design contributed by Cherry Hung. Thank you!)

- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-radio%401.2.0)
- [Documentation](https://tds.telus.com/components/index.html#radio)

**Step Tracker 3.0.0** - Make Step Tracker full width and make default background colour grey. Thanks for submitting this GitHub issue, Cherry Hung!

- [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-step-tracker%403.0.0)
- [Documentation](https://tds.telus.com/components/index.html#steptracker)

### Fixes 🔧

- **Input 1.0.12** now conditionally renders icons. Thanks for reporting, Bo Xing!
  - [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-input%401.0.12)
- **Tooltip 2.0.4** can only have one open at a time. Thanks for reporting, Vishakha Sethi!
  - [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-tooltip%402.0.4)
- **Price Lockup 1.0.4** resolves an issue with line-height overrides applying improperly. Thanks for reporting, Erich Welz!
  - [Release notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-price-lockup%401.0.4)
- **Flex Grid 2.3.0** - Fix FlexGrid.Row from being improperly sized on IE 11
  - [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-flex-grid%402.3.2)
- **Price Lockup 1.0.3** - Alignment has been fixed in some areas. Reported by: Tarek, Developed by: Nik Mak.
  - [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-price-lockup%401.0.3)
- **Hairline Divider 1.0.1** - Vertical hairline divider now displays regardless of parent height.
  - [Release Notes](https://github.com/telus/tds-core/releases/tag/%40tds%2Fcore-hairline-divider%401.0.1)

<hr/>
