const React = require("react");

class Index extends React.Component {
  render() {
    const { logs } = this.props;
    return (
      <div>
        <ul>
          {logs.map((log, i) => {
            const createdDate = new Date(log.createdAt);
            const formattedDate = createdDate.toLocaleString();
            return (
              <li key={i}>
                {log.title}
                <a href={`logs/${log._id}`}>{log.title}</a>
                <p>Created at: {formattedDate}</p>
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