window.ResourceIndexComponents.DefaultRecordActions = (props) => {
  const editPath = props.record.edit_path;
  const onDelete = props.onDelete;

  return (
    <div className="record__actions">
      <a
        className="record__action-icon"
        href={editPath}
        title="Edit">
        <i className="material-icon">edit</i>
      </a>

      <a
        className="record__action-icon"
        href="#!"
        onClick={onDelete} title="Delete">
        <i className="material-icon">delete</i>
      </a>
    </div>
  );
};