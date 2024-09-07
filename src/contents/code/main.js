workspace.currentDesktopChanged.connect(function(id, client) {
	if(workspace.currentDesktop.id != workspace.currentActivity) {
		workspace.currentActivity = workspace.currentDesktop.id;
	}
});