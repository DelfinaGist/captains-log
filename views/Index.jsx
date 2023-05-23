const React = require("react");
class Index extends React.Component {
  render() {
    const { logs } = this.props;
    return (
      <div>
        <ul>
          {logs.map((log, i) => {
            return (
              <li key={i}>
                {log.title}
              </li>
            )
          })}
        </ul>
        <a href={'/logs/new'}> Create new log</a>
      </div>
    )

  }

}
module.exports = Index