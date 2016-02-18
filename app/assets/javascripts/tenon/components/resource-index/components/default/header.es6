/* global React */

class DefaultHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { Filtering } = this.props.childComponents;

    return (
      <div className="toolbar">
        <Breadcrumbs breadcrumbs={this.props.breadcrumbs} />
        <Filtering {...this.props} />

        <div className="actions">
          <a className="action--icon dropdown-button" href="#!" data-activates="sort-dropdown" title="Sort or options?">
            <i className="material-icon">sort</i>
          </a>
          <ul className="dropdown-content" id="sort-dropdown">
            <li className="dropdown-label">Dropdown Label</li>
            <li className="divider"></li>
            <li>
              <a href="#!">
                <i className="material-icon">sort</i>
                A to Z
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="material-icon flip-vertical">sort</i>
                Z to A
              </a>
            </li>
          </ul>

          <a className="action--icon dropdown-button" href="#!" data-activates="list-dropdown" title="Links!">
            <i className="material-icon">more_vert</i>
          </a>
          <ul className="dropdown-content" id="list-dropdown">
            <li>
              <a href="#!">
                <i className="material-icon">apps</i>
                Index Actions
              </a>
            </li>
            <li>
              <a href="#!">
                  <i className="material-icon">cloud_upload</i>
                  Import
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="material-icon">cloud_download</i>
                Export
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

window.ResourceIndexComponents.DefaultHeader = DefaultHeader;
