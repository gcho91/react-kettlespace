import React from 'react';
import '../styles/SubSection.css'

class SubSection extends React.Component {
    render() {
      return (
        <div className="container subsection">
          
          <p>NYC's most convenient & collaborative network of workspaces → inside of restaurants during their downtime</p>

<div className="sign-up-field">
          <input type="email" name="email" placeholder="Your email address" required />
          <input type="submit" value="Try for free"  />
</div>
        </div>
      );
    }
  }

  export default SubSection;