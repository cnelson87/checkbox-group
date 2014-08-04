
var CheckboxGroup = function($el) {

	this.$el = $el;
	this.$elToggle = this.$el.find('.toggle');
	this.$elCheckboxes = this.$el.find('input[type=checkbox]');

	this.bindEvents();

};

CheckboxGroup.prototype = {

/**
*	Event Handlers
**/

	bindEvents: function() {

		this.$elToggle.on('click', function(e) {
			this.__onClickToggle(e);
		}.bind(this));

		this.$elCheckboxes.on('click', function(e) {
			this.__onClickCheckbox(e);
		}.bind(this));

	},

	__onClickToggle: function(e) {
		var isChecked = this.$elToggle.hasClass('checked');
		//console.log(isChecked);
		if (isChecked) {
			this.uncheckAll();
			this.removeToggleClass();
		} else {
			this.checkAll();
			this.addToggleClass();
		}
	},

	__onClickCheckbox: function(e) {
		var $elChecked = this.$elCheckboxes.filter(':checked');
		var allChecked = $elChecked.length === this.$elCheckboxes.length;
		//console.log(allChecked);
		if (allChecked) {
			this.addToggleClass();
		} else {
			this.removeToggleClass();
		}

	},


/**
*	Public Methods
**/

	checkAll: function() {
		this.$elCheckboxes.prop('checked', true).val('true');
	},

	uncheckAll: function() {
		this.$elCheckboxes.prop('checked', false).val('');
	},

	addToggleClass: function() {
		this.$elToggle.addClass('checked');
	},

	removeToggleClass: function() {
		this.$elToggle.removeClass('checked');
	}

};
