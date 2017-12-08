# Betternote

[Betternote](https://better-note.herokuapp.com), a faithful Evernote clone, is a feature-rich, single page application developed using React, Redux, Rails, and PostgreSQL. Betternote allows users to create notes and keep them organized by placing them in notebooks. Betternote also allows users to optionally add tags to more easily find and browse similar notes by their taggings.

![gallery_image](https://raw.githubusercontent.com/alvink92/betternote/master/docs/images/gallery/splash_page.png)

## Features

  * Secure user authentication
  * Notes, notebooks, and tags can be created, edited and deleted
  * Notes are autosaved while being edited
  * Notes can be formatted via Betternote's rich-text editor
  * Notes can be filtered by notebooks and taggings

![notes_index](https://raw.githubusercontent.com/alvink92/betternote/master/docs/images/gallery/note_show.png)

## How Betternote was Built

Betternote's core features were designed and developed over a span of 10 days.

The overall design and layout was developed with the guidance of [wireframes](https://github.com/alvink92/betternote/wiki/wireframes)

Associations were formed with the help of a [Database Schema](https://github.com/alvink92/betternote/wiki/wireframes), and a [Sample State](https://github.com/alvink92/betternote/wiki/Sample-State)

Autosave featured was implemented by adding a few simple and elegant lines of code which utilizes setTimeout and clearTimeout:
```javascript
startAutoSave() {
  clearTimeout(this.autoSaveTimerId);
  this.autoSaveTimerId = setTimeout(
    this.triggerNoteAction,
    this.autoSaveInterval
  );
}
```

## Technologies

### Frontend
 * React
   * React-Router
   * Quill
 * Redux
 * AJAX

### Backend
 * Ruby on Rails
 * PostgreSQL

## Future Implementations
 * Favorites
 * Reminders
 * Search features for notes, notebooks, and tags
 * Notes and notebooks sharing
 * Collaborative note editing
 * Live chat


 ## Image Gallery

![notes_by_notebook](https://raw.githubusercontent.com/alvink92/betternote/master/docs/images/gallery/notes_by_notebook.png)


![tags_index](https://raw.githubusercontent.com/alvink92/betternote/master/docs/images/gallery/tags_index.png)
