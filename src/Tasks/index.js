import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import Grid from 'material-ui/Grid';
import List from 'material-ui/List';
import TaskItem from './TaskItem';

import { deletaTask, showTasks } from './actions';

class Tasks extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        const tasks = [
            {
                id: 1,
                name: 'fazer aula de dança',
                status: 'danger'
            },
            {
                id: 2,
                name: 'ir no salão fazer o cabelo do cú',
                status: 'warning'
            }
        ]
        this.props.showTasks(tasks);
    }
    render() {
        const { tasks } = this.props;
        return (
        <Grid container spacing={24}>
        <h1>Tasks</h1>
            <Grid item xs>
            <Link to="/">App</Link>
            <List>
                {
                    tasks.items.map((item, key) => (
                        <TaskItem key={key} item={item} />
                    ))
                }
            </List>
            </Grid>
        </Grid>
        );
    } 
};

const mapStateToProps = state => ({tasks: state.tasks});
const mapDispatchToProps = dispatch => bindActionCreators({deletaTask, showTasks}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
