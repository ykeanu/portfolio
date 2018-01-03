class Statements extends React.Component {
  render() {
    return (
      <div>
        {this.props.statements.map((statement, index) => {
          return <Statement statement={statement} key={index} />;
        })}
        <div className="statement">
          <div className="input-statement">
            <span>&nbsp;</span>
          </div>
        </div>
      </div>
    );
  }
}