import React from "react";
import MdiMenu from "./MdiMenu";
import MdiChildWindow from "./MdiChildWindow";
import ContactForm from "./ContactForm";
import ItemsList from "./ItemsList";

class MdiContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windows: [],
      subscribedWindows: {},
      childWindowsMaxIndex: 0
    };

    this.setChildWindowMaxIndex = this.setChildWindowMaxIndex.bind(this);
    this.closeChildWindowHandler = this.closeChildWindowHandler.bind(this);
    this.activeWindowComponents = this.activeWindowComponents.bind(this);
    this.deRegisterWindow = this.deRegisterWindow.bind(this);
    this.registerWindow = this.registerWindow.bind(this);
  }

  deRegisterWindow(componentName) {
    let subscribedWindows = this.state.subscribedWindows;

    delete subscribedWindows[componentName];

    this.setState({
      subscribedWindows: subscribedWindows
    });
  }

  registerWindow(componentName, callback) {
    let subscribedWindows = this.state.subscribedWindows;

    subscribedWindows[componentName] = callback;

    this.setState({
      subscribedWindows: subscribedWindows
    });
  }

  setChildWindowMaxIndex(callback) {
    const value = this.state.childWindowsMaxIndex + 1;

    callback(value);

    this.setState({
      childWindowsMaxIndex: value
    });
  }

  windows() {
    return this.state.windows;
  }

  zIndexForNewWindow() {
    const value = this.state.childWindowsMaxIndex + 1;

    this.setState({
      childWindowsMaxIndex: value
    });

    return value;
  }

  closeChildWindowHandler(index) {
    const windows = this.windows();

    this.setState({
      windows: windows.filter(window => !(window.key === index.toString()))
    });
  }

  newContactForm(e, title) {
    e.preventDefault();

    this.addWindow(ContactForm, title);
  }

  newItemsList(e, title) {
    e.preventDefault();

    this.addWindow(ItemsList, title);
  }

  activeWindowComponents() {
    return this.windows().map(w => w.props.wrappedComponent.name);
  }

  addWindow(ChildComponent, windowTitle) {
    const activeWindow = this.state.subscribedWindows[windowTitle];

    if (activeWindow) {
      activeWindow(this.zIndexForNewWindow());
      return;
    }

    this.setState({
      windows: [
        ...this.state.windows,
        <MdiChildWindow
          key={this.state.windows.length}
          index={this.state.windows.length}
          close={this.closeChildWindowHandler}
          windowTitle={windowTitle}
          wrappedComponent={ChildComponent}
          registerWindow={this.registerWindow}
          deRegisterWindow={this.deRegisterWindow}
          setChildWindowMaxIndex={this.setChildWindowMaxIndex}
          childWindowsMaxIndex={this.zIndexForNewWindow()}
        >
          <ChildComponent />
        </MdiChildWindow>
      ]
    });
  }

  menuItems() {
    return [
      {
        label: "Contact Form",
        action: e => {
          this.newContactForm(e, "Contact Form");
        }
      },
      {
        label: "Items List",
        action: e => {
          this.newItemsList(e, "Items List");
        }
      }
    ];
  }

  render() {
    return (
      <div>
        <MdiMenu items={this.menuItems()} />
        {this.windows()}
      </div>
    );
  }
}

export default MdiContainer;
