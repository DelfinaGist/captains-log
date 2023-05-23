const React = require("react");

class Index extends React.Component {
  render() {
    const { logs } = this.props;
    console.log(logs);
    return (
      <div>
        <ul>
          {logs.map((log) => {
            const createdDate = new Date(log.createdAt);
            const formattedDate = createdDate.toLocaleString();
            return (
              <li key={log._id}>
                <a href={`logs/${log._id}`}>{log.title}</a>
                <p>Created at: {formattedDate}</p>
                <a href={`logs/${log._id}/edit`}> EDIT THIS LOG</a>
                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            );
          })}
        </ul>
        <a href={'/logs/new'}>Create new log</a>
      </div>
    );

  }

}
module.exports = Index