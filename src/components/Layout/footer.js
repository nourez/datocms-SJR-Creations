import React, { Component } from "react"

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div>
          © {new Date().getFullYear()}
          {` `} <a href="https://github.com/nourez/">Nourez Rawji</a>. Built in React, datoCMS and Gatsby. All rights reserved.
        </div>
      </footer>
    )
  }
}
export default Footer
