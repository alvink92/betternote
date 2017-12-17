import React from "react";
import { Link } from "react-router-dom";

class Benefits extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="benefits-container home-inner-width">
        <div className="benefits-item">
          <div className="benefits-img">
            <img src="/assets/remember-everything.png" />
          </div>
          <div className="benefits-content">
            <h2>Remember Everything</h2>
            <p>
              Organize your work and declutter your life. Collect everything
              that matters in one place and find it when you need it, fast.
            </p>
            <div className="link-wrapper">
              <Link to="/signup">Create your free account</Link>
            </div>
          </div>
        </div>
        <div className="benefits-item">
          <div className="benefits-content">
            <h2>Work Smarter</h2>
            <p>
              Enhance your notes with links, checklists, tables,
              attachments, and audio recordings. Even handwritten notes are
              searchable.
            </p>
            <div className="link-wrapper">
              <Link to="/signup">Create your free account</Link>
            </div>
          </div>
          <div className="benefits-img">
            <img src="/assets/work-smarter.png" />
          </div>
        </div>
        <div className="benefits-item">
          <div className="benefits-img">
            <img src="/assets/bring-it-all-together.png" />
          </div>
          <div className="benefits-content">
            <h2>Bring It All Together</h2>
            <p>
              Organized teams get more done. From initial brainstorm to
              finished project, make Evernote your team hub and find
              productivity bliss.
            </p>
            <div className="link-wrapper">
              <Link to="/signup">Create your free account</Link>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default Benefits;
