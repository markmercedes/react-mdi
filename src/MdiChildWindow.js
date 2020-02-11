import React from "react";

const MAXIMIZE_STYLE = "maximized-child-window";
const MINIMIZE_STYLE = "minimized-child-window";

class MdiChildWindow extends React.Component {
  brintToFront = value => {
    this.setState({ zIndex: value });
  };

  constructor(props) {
    super(props);

    this.windowPosition = this.windowPosition.bind(this);
    this.minimizeWindow = this.minimizeWindow.bind(this);
    this.dragStart = this.dragStart.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
    this.drag = this.drag.bind(this);
    this.toggleSize = this.toggleSize.bind(this);
    this.deactivateFocus = this.deactivateFocus.bind(this);
    props.registerWindow(props.windowTitle, this.brintToFront);

    this.state = {
      active: false,
      currentX: 0,
      currentY: 0,
      initialX: 0,
      initialY: 0,
      xOffset: 0,
      yOffset: 0,
      zIndex: props.childWindowsMaxIndex,
      maximized: false
    };
  }

  deactivateFocus() {
    this.setState({
      active: false
    });
  }

  dragStart(e) {
    if (e.type === "touchstart") {
      this.setState({
        initialX: e.touches[0].clientX - this.state.xOffset,
        initialY: e.touches[0].clientY - this.state.yOffset
      });
    } else {
      this.setState({
        initialX: e.clientX - this.state.xOffset,
        initialY: e.clientY - this.state.yOffset
      });
    }

    if (e.target === this.refs.container) {
      this.props.setChildWindowMaxIndex(value => {
        this.setState({ zIndex: value, active: true });
      });
    }
  }

  dragEnd(e) {
    this.deactivateFocus();
    this.setState({
      initialX: this.state.currentX,
      initialY: this.state.currentY
    });
  }

  drag(e) {
    e.preventDefault();
    if (this.state.maximized) {
      return false;
    }
    if (this.state.active) {
      if (e.type === "touchmove") {
        this.setState({
          currentX: e.touches[0].clientX - this.state.initialX,
          currentY: e.touches[0].clientY - this.state.initialY
        });
      } else {
        this.setState({
          currentX: e.clientX - this.state.initialX,
          currentY: e.clientY - this.state.initialY
        });
      }

      this.setState({
        xOffset: this.state.currentX,
        yOffset: this.state.currentY
      });
    }
  }

  windowPosition() {
    return "translate3d(" + this.state.currentX + "px, " + this.state.currentY + "px, 0)";
  }

  componentDidMount() {
    const container = this.refs.container;

    container.addEventListener("touchstart", this.dragStart, false);
    container.addEventListener("touchend", this.dragEnd, false);
    container.addEventListener("touchmove", this.drag, false);

    container.addEventListener("mousedown", this.dragStart, false);
    container.addEventListener("mouseup", this.dragEnd, false);
    container.addEventListener("mousemove", this.drag, false);
    container.addEventListener("mouseleave", this.deactivateFocus, false);
  }

  toggleSize() {
    if (this.state.maximized) {
      this.setState({
        maximized: false,
        minimized: false
      });
    } else {
      this.setState(
        {
          maximized: true,
          minimized: false,
          currentX: 0,
          currentY: 0,
          initialX: 0,
          initialY: 0,
          xOffset: 0,
          yOffset: 0
        },
        () => {
          this.props.setChildWindowMaxIndex(value => {
            this.setState({ zIndex: value });
          });
        }
      );
    }
  }

  windowSizing() {
    if (this.state.minimized === true) {
      return MINIMIZE_STYLE;
    }

    if (this.state.maximized === true) {
      return MAXIMIZE_STYLE;
    }
  }

  maximizeRestoreIcon() {
    return this.state.maximized ? "window-restore" : "window-maximize";
  }

  minimizeWindow(e) {
    e.stopPropagation();
    e.preventDefault();
    if (this.state.minimized) {
      this.setState({
        minimized: false
      });
    } else {
      this.setState({
        maximized: false,
        minimized: true
      });
    }
  }

  render() {
    return (
      <div className={`card mdi-child-window ${this.windowSizing()}`} ref="holder" style={{ zIndex: this.state.zIndex, transform: this.windowPosition() }}>
        <div className="card-header mdi-child-window-header" ref="container" onDoubleClick={this.toggleSize}>
          <button onClick={this.minimizeWindow} className="btn btn-warning rounded-circle">
            <i className={`fa fa-window-minimize`}></i>
          </button>{" "}
          <button onClick={this.toggleSize} className="btn btn-success rounded-circle">
            <i className={`fa fa-${this.maximizeRestoreIcon()}`}></i>
          </button>{" "}
          <button
            className="btn btn-danger rounded-circle"
            onClick={() => {
              this.props.deRegisterWindow(this.props.windowTitle);
              this.props.close(this.props.index);
            }}
          >
            <i className="fa fa-window-close"></i>
          </button>
        </div>
        <div className="card-body">{this.props.children}</div>
        <div className="card-footer"></div>
      </div>
    );
  }
}

export default MdiChildWindow;
