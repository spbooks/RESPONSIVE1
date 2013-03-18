var sessions = document.getElementsByTagName("article"),
	classname = sessions[0].className,
	length = sessions.length,
	i = 0;

for (; i < length; i += 1) {
	if (sessions[i].className === classname) {
		if (!sessions[i].addEventListener) {
			sessions[i].attachEvent("onclick", function () {
				if (window.event.srcElement.className === classname) {
					window.event.srcElement.className += " active";
				} else {
					window.event.srcElement.className = classname;
				}
			},false);
		} else {
			sessions[i].addEventListener("click", function () {
				if (this.className === classname) {
					this.className += " active";
				} else {
					this.className = classname;
				}
			},false);
		}
	}
}