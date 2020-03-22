import React, { Component } from "react"

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <a href="nourez.dev" className="footer-text">
          © {new Date().getFullYear()}
          {` `} Nourez Rawji. All rights reserved.
        </a>
      </footer>
    )
  }
}
export default Footer
