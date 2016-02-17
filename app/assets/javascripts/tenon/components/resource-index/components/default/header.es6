/* global React */

class DefaultHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchOpen: false };
  }

  render() {
    const searchClass = this.state.searchOpen ? 'open' : '';
    const { QuickSearch, FilterPane } = this.props.childComponents;
    let filterPane = '';

    if (FilterPane) {
      filterPane = <FilterPane />;
    }

    return (
      <div className="toolbar">
        <Breadcrumbs breadcrumbs={this.props.breadcrumbs} />

        <QuickSearch
          q={this.props.data.query.q}
          searchAction={this.props.actions.quickSearchRecords}
          toggleQuickSearchAction={this.props.actions.toggleQuickSearch}
          searchClass={searchClass} />

        <div className="actions">
          <a className="action-icon toggle-drawer filter-toggle" href="#!" title="Filter" data-target="filters">
            <i className="material-icons">tune</i>
          </a>
        </div>

        {filterPane}
        <section id="filters" className="drawer">
          <p>
          This is the filter pane.
          </p>
        </section>

        <div className="actions">
          <a className="action-icon dropdown-button" href="#!" data-activates="sort-dropdown" title="Sort or options?">
            <i className="material-icons">sort</i>
          </a>
          <ul className="dropdown-content" id="sort-dropdown">
            <li className="dropdown-label">Dropdown Label</li>
            <li className="divider"></li>
            <li>
              <a href="#!">
                <i className="material-icons">sort</i>
                A to Z
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="material-icons flip-vertical">sort</i>
                Z to A
              </a>
            </li>
          </ul>

          <a className="action-icon dropdown-button" href="#!" data-activates="list-dropdown" title="Links!">
            <i className="material-icons">more_vert</i>
          </a>
          <ul className="dropdown-content" id="list-dropdown">
            <li>
              <a href="#!">
                <i className="material-icons">apps</i>
                Index Actions
              </a>
            </li>
            <li>
              <a href="#!">
                  <i className="material-icons">cloud_upload</i>
                  Import
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="material-icons">cloud_download</i>
                Export
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  _handleSearchToggle(e) {
    e.preventDefault();
    // Clear the query before closing
    if (this.state.searchOpen) {
      this.props.actions.quickSearchRecords('');
    }
    this.setState({ searchOpen: !this.state.searchOpen });
  }

  _renderSearchButton(className, icon) {
    return (
      <div className="header-button">
        <a href="#" onClick={(e) => this._handleSearchToggle(e)} className={className}>
          <div className="header-icon">
            <i className="material-icons">{icon}></i>
          </div>
        </a>
      </div>
    );
  }
}

window.ResourceIndexComponents.DefaultHeader = DefaultHeader;
