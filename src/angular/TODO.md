# Konsta Angular TODO

## Package & Build Setup
- [x] Create Angular package manifest and entry points (`konsta-angular.ts`, `konsta-angular.d.ts`)
- [x] Wire Angular flavor into build scripts (code + type generation)
- [x] Expose Angular bundle via root `package.json` exports
- [x] Ensure shared assets (`theme.css`, colors, classes) are consumable from Angular package

## Angular Infrastructure
- [x] Implement theme configuration service using Angular signals/injectable
- [x] Provide global configuration provider component/directive
- [x] Port touch ripple / highlight helpers to Angular signal-based utilities
- [x] Implement dark mode helpers compatible with Angular control flow
- [ ] Recreate list, navbar, segmented, and toolbar context equivalents via injectables

## Components
- [x] Actions
- [x] ActionsButton
- [x] ActionsGroup
- [x] ActionsLabel
- [x] App
- [x] Badge
- [x] Block
- [x] BlockFooter
- [x] BlockHeader
- [x] BlockTitle
- [x] Breadcrumbs
- [x] BreadcrumbsCollapsed
- [x] BreadcrumbsItem
- [x] BreadcrumbsSeparator
- [x] Button
- [x] Card
- [x] Checkbox
- [x] Chip
- [x] Dialog
- [x] DialogButton
- [x] Fab
- [x] Glass
- [x] Icon
- [x] Link
- [x] List
- [x] ListButton
- [x] ListGroup
- [x] ListInput
- [x] ListItem
- [x] MenuList
- [x] MenuListItem
- [x] Message
- [x] Messagebar
- [x] Messages
- [x] MessagesTitle
- [x] Navbar
- [x] NavbarBackLink
- [x] NavbarContext
- [🚧] Notification
- [x] Page
- [🚧] Panel
- [x] Popover
- [x] Popup
- [x] Preloader
- [x] Progressbar
- [x] Radio
- [🚧] Range
- [x] Searchbar
- [x] Segmented
- [x] SegmentedButton
- [x] SegmentedContext
- [x] SegmentedContext
- [x] Sheet
- [x] Stepper
- [x] Tabbar
- [x] TabbarLink
- [x] Table
- [x] TableBody
- [x] TableCell
- [x] TableHead
- [x] TableRow
- [x] Toast
- [x] Toggle
- [x] Toolbar
- [x] ToolbarContext
- [x] ToolbarPane

## Kitchen Sink
- [x] Scaffold Angular kitchen-sink application with Angular CLI
- [ ] Port component demos/pages to Angular syntax
- [x] Ensure Tailwind integration mirrors other kitchen sinks

## Documentation & DX
- [ ] Update root README / docs with Angular usage instructions
- [ ] Add Angular-specific lint/format/test commands if needed
- [ ] Validate package builds + kitchen sink production build
