const AdminMenubar = () => {
  const toggleSidebar = () => {
    document.body.classList.toggle("sb-sidenav-toggled");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container-fluid">
        <button
          onClick={toggleSidebar}
          className="btn btn-primary"
          id="sidebarToggle"
        >
          <i className="bi bi-list"></i>
        </button>
      </div>
    </nav>
  );
};

export default AdminMenubar;
