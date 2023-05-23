const React = require("react")

class Show extends React.Component {
  render() {
    const log = this.props.log
    return (
      <div>
        <a href="/logs">See All The Logs</a>

        <h1>{log.title} </h1><br />

        <p>{log.entry}</p> <br />

        {log.shipIsBroken ? "Yes Ship Is Broken" : "No Ship Is Not Broken"}
      </div>
    )
  }
}
module.exports = Show