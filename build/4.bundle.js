webpackJsonp([4],{

/***/ 6:
/*!*************************!*\
  !*** ./demo4/demo4.jsx ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	
	var TodoList = React.createClass({displayName: 'TodoList',
	  // `TodoList` takes a prop called `items` which is an array of
	  // strings. We can make this requirement "official" using propTypes.
	  // If a component doesn't get the properties listed in its
	  // propTypes, it will warn you in the console (if using a development
	  // build of React).
	  propTypes: {
	    items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
	  },
	
	  render:function() {
	    // Every component in an array should have a `key` attribute
	    // set so React can uniquely identify the item if it needs
	    // to remove it from the middle of the array without iterating
	    // over every component in the array.
	    // Since our todos can't be reordered, we'll just use the index.
	    //
	    // Also notice the use of another ES6 feature in the call to `map`,
	    // arrow functions. The bodies of arrow functions are automatically
	    // bound to the value of `this` outside of them, so no more calling
	    // `.bind(this)` or `var self = this` juggling.
	    return (
	      React.createElement("ul", null, 
	      this.props.items.map(function(item, index)  {
	        return React.createElement("li", {key: index}, item);
	      })
	      )
	    );
	  }
	});
	
	var TodoForm = React.createClass({displayName: 'TodoForm',
	  // React has PropTypes for most built-in JS types, as well as the
	  // ability to define your own validation functions.
	  //
	  // `TodoForm` requires an `onSubmit` property that we'll use to notify
	  // our parent component that the form has been submitted; this makes
	  // the component more reusable, since the logic for what to do with
	  // the submitted form isn't hardcoded into the `TodoForm` component.
	  propTypes: {
	    onSubmit: React.PropTypes.func.isRequired
	  },
	
	  // `TodoForm` contains a text input with a `value` attribute, which
	  // makes the input a "controlled" input. This means that the input
	  // will *always* display whatever is passed to its `value` no matter
	  // what the user tries to type in the box. The `text` property of
	  // our state is the current string to display in the box.
	  getInitialState:function() {
	    return {
	      text: ""
	    };
	  },
	
	  // The text input has an `onChange` property, which calls a function
	  // any time the user interacts with the box. Here, we update our
	  // state so the text in the box updates.
	  //
	  // This is necessary because React components' `render` functions should
	  // *always* describe how the component should look at *any* point and time;
	  // if we didn't use a controlled input, the text might reset in certain
	  // re-rendering situations.
	  onTextChange:function(e) {
	    this.setState({text: e.target.value});
	  },
	
	  // The form also has a handler for `onSubmit`...
	  onSubmit:function(e) {
	    e.preventDefault();
	    if (this.state.text.trim()) {
	      // ... which we'll use to indicate to our parent that an
	      // item has been submitted...
	      this.props.onSubmit(this.state.text);
	      // ... and then clear the text box.
	      this.setState({text: ""});
	    }
	  },
	
	  render:function() {
	    return (
	      React.createElement("form", {onSubmit: this.onSubmit}, 
	        React.createElement("input", {type: "text", value: this.state.text, onChange: this.onTextChange}), 
	        React.createElement("input", {type: "submit", value: "Add Todo"})
	      )
	    );
	  }
	});
	
	// Our `Todos` component is the full application, which very simply composes
	// the `TodoList` and `TodoForm` components.
	var Todos = React.createClass({displayName: 'Todos',
	  getInitialState:function() {
	    // It owns the actual items array, so the composed `TodoList`
	    // and `TodoForm` can be reused in many contexts (that is, they
	    // are not application specific).
	    return {
	      items: []
	    };
	  },
	
	  // `onSubmitTodo` is the function we pass to `TodoForm`'s
	  // `onSubmit` property; so, it will be called when `TodoForm`
	  // calls `this.props.onSubmit(...)`.
	  onSubmitTodo:function(newTodo) {
	    var nextItems = this.state.items.concat([newTodo]);
	    this.setState({items: nextItems});
	  },
	
	  render:function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("h3", null, "TODO"), 
	        React.createElement(TodoList, {items: this.state.items}), 
	        React.createElement(TodoForm, {onSubmit: this.onSubmitTodo})
	      )
	    );
	  }
	});
	
	React.render(
	  React.createElement(Todos, null),
	  document.getElementById("container")
	);


/***/ }

});
//# sourceMappingURL=4.bundle.js.map