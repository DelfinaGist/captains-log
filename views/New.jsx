const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <form action="/logs" method="POST">
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" />
          </div>
          <div>
            <label htmlFor="entry">Entry:</label>
            <textarea name="entry"></textarea>
          </div>
          <div>
            <label htmlFor="shipIsBroken">Is Ship Broken:</label>
            <input type="checkbox" name="shipIsBroken" />
          </div>
          <div>
            <input type="submit" value="Create" />
          </div>
        </form>
      </div>
    );
  }
}

module.exports = New;
