import React, { Component } from 'react';
import CheckboxTree from 'react-checkbox-tree';

const nodes = [
	{
		value: '/app',
		label: 'app',
		children: [
			{
				value: '/app/Http',
				label: 'Http',
				children: [
					{
						value: '/app/Http/Controllers',
						label: 'Controllers',
						children: [{
							value: '/app/Http/Controllers/WelcomeController.js',
							label: 'WelcomeController.js',
						}],
					},
					{
						value: '/app/Http/routes.js',
						label: 'routes.js',
					},
				],
			},
			{
				value: '/app/Providers',
				label: 'Providers',
				children: [{
					value: '/app/Http/Providers/EventServiceProvider.js',
					label: 'EventServiceProvider.js',
				}],
			},
		],
	},
	{
		value: '/config',
		label: 'config',
		children: [
			{
				value: '/config/app.js',
				label: 'app.js',
			},
			{
				value: '/config/database.js',
				label: 'database.js',
			},
		],
	},
	{
		value: '/public',
		label: 'public',
		children: [
			{
				value: '/public/assets/',
				label: 'assets',
				children: [{
					value: '/public/assets/style.css',
					label: 'style.css',
				}],
			},
			{
				value: '/public/index.html',
				label: 'index.html',
			},
		],
	},
	{
		value: '/.env',
		label: '.env',
	},
	{
		value: '/.gitignore',
		label: '.gitignore',
	},
	{
		value: '/README.md',
		label: 'README.md',
	},
];

class Widget extends Component {
    constructor() {
        super();

        this.state = {
            checked: [],
            expanded: [],
        };
    }

    render() {
        return (
            <CheckboxTree
                nodes={nodes}
                checked={this.state.checked}
                expanded={this.state.expanded}
                onCheck={checked => this.setState({ checked })}
                onExpand={expanded => this.setState({ expanded })}
            />
        );
    }
}
export default Widget;
